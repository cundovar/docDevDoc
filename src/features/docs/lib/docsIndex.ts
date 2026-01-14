import { type DocEntry } from './docsLoader'

export type DocNode =
  | {
      type: 'section'
      label: string
      children: DocNode[]
    }
  | {
      type: 'doc'
      title: string
      slug: string
    }

export type DocCategory = {
  id: string
  label: string
  items: DocNode[]
}

const categoryOrder = ['Front', 'Back', 'DevOps', 'Outils', 'Autres']

function compareByDepthThenAlpha(a: DocEntry, b: DocEntry) {
  if (a.segments.length !== b.segments.length) {
    return a.segments.length - b.segments.length
  }
  return a.title.localeCompare(b.title, 'fr')
}

function insertDocNode(tree: DocNode[], segments: string[], doc: DocEntry) {
  if (segments.length === 0) {
    tree.push({ type: 'doc', title: doc.title, slug: doc.slug })
    return
  }

  const [head, ...rest] = segments
  const section = tree.find(
    (node) => node.type === 'section' && node.label === head,
  ) as DocNode | undefined

  if (section && section.type === 'section') {
    insertDocNode(section.children, rest, doc)
    return
  }

  const newSection: DocNode = { type: 'section', label: head, children: [] }
  insertDocNode(newSection.children, rest, doc)
  tree.push(newSection)
}

function sortNodes(nodes: DocNode[]) {
  nodes.sort((a, b) => {
    if (a.type !== b.type) {
      return a.type === 'section' ? -1 : 1
    }
    const aLabel = a.type === 'section' ? a.label : a.title
    const bLabel = b.type === 'section' ? b.label : b.title
    return aLabel.localeCompare(bLabel, 'fr')
  })
  nodes.forEach((node) => {
    if (node.type === 'section') {
      sortNodes(node.children)
    }
  })
}

export function buildDocsIndex(docs: DocEntry[]): DocCategory[] {
  const grouped = docs.reduce<Record<string, DocEntry[]>>((acc, doc) => {
    acc[doc.category] ??= []
    acc[doc.category].push(doc)
    return acc
  }, {})

  return Object.entries(grouped)
    .sort((a, b) => {
      const aIndex = categoryOrder.indexOf(a[0])
      const bIndex = categoryOrder.indexOf(b[0])
      if (aIndex === -1 || bIndex === -1) {
        return a[0].localeCompare(b[0], 'fr')
      }
      return aIndex - bIndex
    })
    .map(([category, entries]) => {
      const items: DocNode[] = []
      entries.sort(compareByDepthThenAlpha).forEach((doc) => {
        insertDocNode(items, doc.segments, doc)
      })
      sortNodes(items)

      return {
        id: category.toLowerCase(),
        label: category,
        items,
      }
    })
}

export function findDocBySlug(docs: DocEntry[], slug: string | null) {
  if (!slug) {
    return null
  }
  return docs.find((doc) => doc.slug === slug) ?? null
}

export function getDefaultSlug(docs: DocEntry[]) {
  const sorted = [...docs].sort((a, b) => {
    const aIndex = categoryOrder.indexOf(a.category)
    const bIndex = categoryOrder.indexOf(b.category)
    if (aIndex !== bIndex) {
      return aIndex - bIndex
    }
    return compareByDepthThenAlpha(a, b)
  })
  return sorted[0]?.slug ?? null
}

export function filterIndex(categories: DocCategory[], query: string) {
  if (!query.trim()) {
    return categories
  }
  const needle = query.trim().toLowerCase()

  const matchesDoc = (node: DocNode) => {
    if (node.type === 'doc') {
      return node.title.toLowerCase().includes(needle)
    }
    return node.children.some(matchesDoc)
  }

  const filterNodes = (nodes: DocNode[]): DocNode[] => {
    return nodes
      .filter(matchesDoc)
      .map((node) => {
        if (node.type === 'doc') {
          return node
        }
        return {
          ...node,
          children: filterNodes(node.children),
        }
      })
  }

  return categories
    .map((category) => ({
      ...category,
      items: filterNodes(category.items),
    }))
    .filter((category) => category.items.length > 0)
}
