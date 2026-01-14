export type DocEntry = {
  slug: string
  title: string
  category: string
  path: string
  content: string
  segments: string[]
}

const rawDocs = import.meta.glob(['/documentations/**/*.md', '/documentation/**/*.md'], {
  query: '?raw',
  import: 'default',
  eager: true,
}) as Record<string, string>

const categoryMap: Record<string, string> = {
  front: 'Front',
  back: 'Back',
  devops: 'DevOps',
  outils: 'Outils',
}

const fallbackCategory = 'Autres'

function normalizePath(path: string) {
  return path.replace(/^\/documentations\//, '').replace(/\.md$/, '')
}

function slugFromPath(path: string) {
  const slug = normalizePath(path)
  if (slug.endsWith('/index')) {
    return slug.replace(/\/index$/, '')
  }
  return slug || 'index'
}

function extractTitle(content: string, path: string) {
  const match = content.match(/^#\s+(.+)$/m)
  if (match?.[1]) {
    return match[1].trim()
  }
  const name = normalizePath(path).split('/').pop()
  return (name ?? 'Documentation').replace(/[-_]/g, ' ')
}

function categoryFromPath(slug: string) {
  const first = slug.split('/')[0]
  return categoryMap[first?.toLowerCase()] ?? fallbackCategory
}

function segmentsFromSlug(slug: string, category: string) {
  const parts = slug.split('/').filter(Boolean)
  if (category !== fallbackCategory) {
    return parts.slice(1)
  }
  return parts
}

export function loadDocs(): DocEntry[] {
  return Object.entries(rawDocs).map(([path, content]) => {
    const slug = slugFromPath(path)
    const category = categoryFromPath(slug)
    return {
      slug,
      title: extractTitle(content, path),
      category,
      path,
      content,
      segments: segmentsFromSlug(slug, category),
    }
  })
}
