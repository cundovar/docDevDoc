import { useEffect, useMemo, useState } from 'react'
import { loadDocs } from '../lib/docsLoader'
import {
  buildDocsIndex,
  filterIndex,
  findDocBySlug,
  getDefaultSlug,
} from '../lib/docsIndex'
import { ensureDocsPath, getPathFromSlug, getSlugFromPath } from '../lib/router'

export function useDocsIndex() {
  const docs = useMemo(() => loadDocs(), [])
  const index = useMemo(() => buildDocsIndex(docs), [docs])
  const defaultSlug = useMemo(() => getDefaultSlug(docs), [docs])
  const [search, setSearch] = useState('')
  const [slug, setSlug] = useState(() => getSlugFromPath(window.location.pathname))

  useEffect(() => {
    if (!defaultSlug) {
      return
    }
    const redirect = ensureDocsPath(window.location.pathname, defaultSlug)
    if (redirect) {
      window.history.replaceState({}, '', redirect)
      setSlug(defaultSlug)
      return
    }
    if (!slug) {
      window.history.replaceState({}, '', getPathFromSlug(defaultSlug))
      setSlug(defaultSlug)
    }
  }, [defaultSlug, slug])

  useEffect(() => {
    const onPopState = () => {
      setSlug(getSlugFromPath(window.location.pathname))
    }
    window.addEventListener('popstate', onPopState)
    return () => window.removeEventListener('popstate', onPopState)
  }, [])

  const navigate = (nextSlug: string) => {
    window.history.pushState({}, '', getPathFromSlug(nextSlug))
    setSlug(nextSlug)
  }

  const activeDoc = useMemo(() => findDocBySlug(docs, slug), [docs, slug])
  const filteredIndex = useMemo(
    () => filterIndex(index, search),
    [index, search],
  )

  return {
    docs,
    index: filteredIndex,
    activeDoc,
    navigate,
    slug,
    search,
    setSearch,
  }
}
