import { renderMarkdown } from '../../lib/markdown'

type DocContentProps = {
  content: string
}

export function DocContent({ content }: DocContentProps) {
  return <div className="space-y-6">{renderMarkdown(content)}</div>
}
