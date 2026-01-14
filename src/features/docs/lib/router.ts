const basePath = '/docs'

export function getSlugFromPath(pathname: string) {
  if (!pathname.startsWith(basePath)) {
    return null
  }
  const raw = pathname.slice(basePath.length)
  const slug = raw.replace(/^\/+/, '')
  return slug || null
}

export function getPathFromSlug(slug: string) {
  const normalized = slug.replace(/^\/+/, '')
  return `${basePath}/${normalized}`
}

export function ensureDocsPath(pathname: string, fallbackSlug: string) {
  if (pathname === basePath || pathname === `${basePath}/`) {
    return getPathFromSlug(fallbackSlug)
  }
  if (!pathname.startsWith(basePath)) {
    return getPathFromSlug(fallbackSlug)
  }
  return null
}
