import { Fragment, type ReactNode } from 'react'

export type HeadingItem = {
  depth: number
  text: string
  id: string
}

type TableRow = string[]

type Block =
  | { type: 'heading'; depth: number; text: string }
  | { type: 'paragraph'; text: string }
  | { type: 'code'; lang: string | null; text: string }
  | { type: 'list'; ordered: boolean; items: string[] }
  | { type: 'blockquote'; text: string }
  | { type: 'table'; header: TableRow; rows: TableRow[] }
  | { type: 'rule' }

function slugify(text: string) {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, '')
    .trim()
    .replace(/\s+/g, '-')
}

function parseInline(text: string): ReactNode[] {
  const nodes: ReactNode[] = []
  let remaining = text

  type InlinePattern = {
    regex: RegExp
    render: (match: RegExpExecArray) => ReactNode
  }

  const patterns: InlinePattern[] = [
    {
      regex: /\[([^\]]+)\]\(([^)]+)\)/,
      render: (match) => (
        <a
          href={match[2]}
          className="text-[var(--doc-accent-strong)] underline-offset-4 hover:underline"
          target="_blank"
          rel="noreferrer"
        >
          {match[1]}
        </a>
      ),
    },
    {
      regex: /`([^`]+)`/,
      render: (match) => (
        <code className="rounded bg-[var(--doc-surface-muted)] px-1.5 py-0.5 text-sm">
          {match[1]}
        </code>
      ),
    },
    {
      regex: /\*\*([^*]+)\*\*/,
      render: (match) => <strong>{match[1]}</strong>,
    },
    {
      regex: /\*([^*]+)\*/,
      render: (match) => <em>{match[1]}</em>,
    },
  ]

  while (remaining.length > 0) {
    let nextMatch: RegExpExecArray | null = null
    let nextPattern: InlinePattern | null = null
    let nextIndex = -1

    for (const pattern of patterns) {
      const match = pattern.regex.exec(remaining)
      if (!match) {
        continue
      }
      if (nextMatch === null || match.index < nextIndex) {
        nextMatch = match
        nextPattern = pattern
        nextIndex = match.index
      }
    }

    if (!nextMatch || !nextPattern) {
      nodes.push(remaining)
      break
    }

    if (nextIndex > 0) {
      nodes.push(remaining.slice(0, nextIndex))
    }

    nodes.push(nextPattern.render(nextMatch))
    remaining = remaining.slice(nextIndex + nextMatch[0].length)
  }

  return nodes
}

function parseTableRow(line: string) {
  return line
    .trim()
    .replace(/^\||\|$/g, '')
    .split('|')
    .map((cell) => cell.trim())
}

export function parseMarkdown(content: string) {
  const blocks: Block[] = []
  const lines = content.split('\n')
  let index = 0

  while (index < lines.length) {
    const line = lines[index]

    if (/^```/.test(line)) {
      const lang = line.replace(/```/, '').trim() || null
      const codeLines: string[] = []
      index += 1
      while (index < lines.length && !/^```/.test(lines[index])) {
        codeLines.push(lines[index])
        index += 1
      }
      blocks.push({ type: 'code', lang, text: codeLines.join('\n') })
      index += 1
      continue
    }

    if (/^#{1,6}\s+/.test(line)) {
      const depth = line.match(/^#{1,6}/)![0].length
      blocks.push({ type: 'heading', depth, text: line.replace(/^#{1,6}\s+/, '') })
      index += 1
      continue
    }

    if (/^>\s+/.test(line)) {
      blocks.push({ type: 'blockquote', text: line.replace(/^>\s+/, '') })
      index += 1
      continue
    }

    if (/^---$/.test(line.trim())) {
      blocks.push({ type: 'rule' })
      index += 1
      continue
    }

    if (/^\s*[-*+]\s+/.test(line)) {
      const items: string[] = []
      while (index < lines.length && /^\s*[-*+]\s+/.test(lines[index])) {
        items.push(lines[index].replace(/^\s*[-*+]\s+/, ''))
        index += 1
      }
      blocks.push({ type: 'list', ordered: false, items })
      continue
    }

    if (/^\s*\d+\.\s+/.test(line)) {
      const items: string[] = []
      while (index < lines.length && /^\s*\d+\.\s+/.test(lines[index])) {
        items.push(lines[index].replace(/^\s*\d+\.\s+/, ''))
        index += 1
      }
      blocks.push({ type: 'list', ordered: true, items })
      continue
    }

    if (/^\|.*\|$/.test(line.trim())) {
      const tableLines: string[] = []
      while (index < lines.length && /^\|.*\|$/.test(lines[index].trim())) {
        tableLines.push(lines[index])
        index += 1
      }
      if (tableLines.length >= 2) {
        const header = parseTableRow(tableLines[0])
        const rows = tableLines.slice(2).map(parseTableRow)
        blocks.push({ type: 'table', header, rows })
      }
      continue
    }

    if (!line.trim()) {
      index += 1
      continue
    }

    const paragraphLines: string[] = []
    while (index < lines.length && lines[index].trim()) {
      paragraphLines.push(lines[index])
      index += 1
    }
    blocks.push({ type: 'paragraph', text: paragraphLines.join(' ') })
  }

  return blocks
}

export function renderMarkdown(content: string) {
  const blocks = parseMarkdown(content)
  return blocks.map((block, idx) => {
    switch (block.type) {
      case 'heading': {
        const id = slugify(block.text)
        const HeadingTag = `h${block.depth}` as
          | 'h1'
          | 'h2'
          | 'h3'
          | 'h4'
          | 'h5'
          | 'h6'
        const className =
          block.depth === 1
            ? 'text-3xl font-semibold tracking-tight'
            : block.depth === 2
              ? 'text-2xl font-semibold tracking-tight'
              : 'text-xl font-semibold'
        return (
          <HeadingTag id={id} key={`${block.type}-${idx}`} className={className}>
            {block.text}
          </HeadingTag>
        )
      }
      case 'paragraph':
        return (
          <p key={`${block.type}-${idx}`} className="text-base leading-7 text-[var(--doc-ink)]">
            {parseInline(block.text)}
          </p>
        )
      case 'code':
        return (
          <pre
            key={`${block.type}-${idx}`}
            className="overflow-x-auto rounded-2xl border border-[var(--doc-line)] bg-[var(--doc-surface-muted)] p-4 text-sm"
          >
            <code>{block.text}</code>
          </pre>
        )
      case 'list': {
        const ListTag = block.ordered ? 'ol' : 'ul'
        return (
          <ListTag
            key={`${block.type}-${idx}`}
            className={block.ordered ? 'list-decimal pl-6' : 'list-disc pl-6'}
          >
            {block.items.map((item, itemIdx) => (
              <li key={`${block.type}-${idx}-${itemIdx}`} className="mb-2">
                {parseInline(item)}
              </li>
            ))}
          </ListTag>
        )
      }
      case 'blockquote':
        return (
          <blockquote
            key={`${block.type}-${idx}`}
            className="border-l-4 border-[var(--doc-accent)] bg-[var(--doc-surface-muted)] px-4 py-3 text-[var(--doc-muted)]"
          >
            {parseInline(block.text)}
          </blockquote>
        )
      case 'table':
        return (
          <div key={`${block.type}-${idx}`} className="overflow-x-auto">
            <table className="w-full border-collapse text-left text-sm">
              <thead className="bg-[var(--doc-surface-muted)]">
                <tr>
                  {block.header.map((cell, cellIdx) => (
                    <th
                      key={`${block.type}-${idx}-head-${cellIdx}`}
                      className="border border-[var(--doc-line)] px-3 py-2 font-semibold"
                    >
                      {parseInline(cell)}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {block.rows.map((row, rowIdx) => (
                  <tr key={`${block.type}-${idx}-row-${rowIdx}`}>
                    {row.map((cell, cellIdx) => (
                      <td
                        key={`${block.type}-${idx}-cell-${rowIdx}-${cellIdx}`}
                        className="border border-[var(--doc-line)] px-3 py-2"
                      >
                        {parseInline(cell)}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )
      case 'rule':
        return <hr key={`${block.type}-${idx}`} className="border-[var(--doc-line)]" />
      default:
        return <Fragment key={`block-${idx}`} />
    }
  })
}

export function getHeadings(content: string): HeadingItem[] {
  return parseMarkdown(content)
    .filter((block): block is Extract<Block, { type: 'heading' }> => block.type === 'heading')
    .filter((block) => block.depth >= 2 && block.depth <= 3)
    .map((block) => ({
      depth: block.depth,
      text: block.text,
      id: slugify(block.text),
    }))
}
