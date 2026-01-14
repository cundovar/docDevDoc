import { useMemo, useState } from 'react'
import { Sidebar } from '../Sidebar/Sidebar'
import { SearchBar } from '../SearchBar/SearchBar'
import { DocContent } from '../DocContent/DocContent'
import { Badge } from '../../../ui/components/Badge/Badge'
import { Button } from '../../../ui/components/Button/Button'
import { Divider } from '../../../ui/components/Divider/Divider'
import { getHeadings } from '../../lib/markdown'
import { useDocsIndex } from '../../hooks/useDocsIndex'

export function DocLayout() {
  const { index, activeDoc, navigate, slug, search, setSearch } = useDocsIndex()
  const [isSidebarOpen, setSidebarOpen] = useState(false)

  const toc = useMemo(() => {
    if (!activeDoc) {
      return []
    }
    return getHeadings(activeDoc.content)
  }, [activeDoc])

  const handleNavigate = (nextSlug: string) => {
    navigate(nextSlug)
    setSidebarOpen(false)
  }

  return (
    <div className="min-h-screen bg-[var(--doc-bg)] text-[var(--doc-ink)]">
      <div className="flex">
        <aside className="hidden h-screen w-80 border-r border-[var(--doc-line)] bg-[var(--doc-surface)] lg:block">
          <div className="flex h-full flex-col gap-6 overflow-y-auto px-6 py-8">
            <div className="space-y-3">
              <p className="text-xs uppercase tracking-[0.3em] text-[var(--doc-muted)]">Documentation</p>
              <h1 className="text-2xl font-semibold">DocDev</h1>
              <Badge variant="primary">Vercel inspired</Badge>
            </div>
            <SearchBar value={search} onChange={setSearch} />
            <Divider />
            <Sidebar categories={index} activeSlug={slug} onNavigate={handleNavigate} />
          </div>
        </aside>

        <div className="flex min-h-screen flex-1 flex-col">
          <header className="sticky top-0 z-20 flex items-center justify-between gap-4 border-b border-[var(--doc-line)] bg-[var(--doc-surface)] px-4 py-4 lg:hidden">
            <Button variant="secondary" size="sm" onClick={() => setSidebarOpen(true)}>
              Menu
            </Button>
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-[var(--doc-muted)]">DocDev</p>
              <h1 className="text-lg font-semibold">Documentation</h1>
            </div>
          </header>

          <div className="flex flex-1 gap-8 px-6 py-8 lg:px-12">
            <main className="flex-1">
              {activeDoc ? (
                <div className="space-y-6">
                  <div className="space-y-2">
                    <p className="text-sm uppercase tracking-[0.3em] text-[var(--doc-muted)]">
                      {activeDoc.category}
                    </p>
                    <h1 className="text-3xl font-semibold leading-tight">{activeDoc.title}</h1>
                  </div>
                  <DocContent content={activeDoc.content} />
                </div>
              ) : (
                <div className="rounded-2xl border border-dashed border-[var(--doc-line)] p-8 text-center text-[var(--doc-muted)]">
                  Selectionnez un document dans la sidebar.
                </div>
              )}
            </main>

            <aside className="sticky top-24 hidden h-fit w-64 flex-shrink-0 space-y-4 rounded-2xl border border-[var(--doc-line)] bg-[var(--doc-surface)] p-5 xl:block">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--doc-muted)]">
                Sur cette page
              </p>
              {toc.length ? (
                <ul className="space-y-2 text-sm">
                  {toc.map((item) => (
                    <li key={item.id} className={item.depth === 3 ? 'pl-3' : ''}>
                      <a
                        href={`#${item.id}`}
                        className="text-[var(--doc-muted)] transition hover:text-[var(--doc-ink)]"
                      >
                        {item.text}
                      </a>
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="text-sm text-[var(--doc-muted)]">Aucun titre detecte.</p>
              )}
            </aside>
          </div>
        </div>
      </div>

      {isSidebarOpen ? (
        <div className="fixed inset-0 z-30 bg-black/30 lg:hidden" onClick={() => setSidebarOpen(false)} />
      ) : null}

      <aside
        className={`fixed left-0 top-0 z-40 h-full w-80 transform bg-[var(--doc-surface)] p-6 transition-transform lg:hidden ${
          isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="flex h-full flex-col gap-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-[var(--doc-muted)]">DocDev</p>
              <h2 className="text-lg font-semibold">Navigation</h2>
            </div>
            <Button variant="ghost" size="sm" onClick={() => setSidebarOpen(false)}>
              Fermer
            </Button>
          </div>
          <SearchBar value={search} onChange={setSearch} />
          <Divider />
          <div className="flex-1 overflow-y-auto">
            <Sidebar categories={index} activeSlug={slug} onNavigate={handleNavigate} />
          </div>
        </div>
      </aside>
    </div>
  )
}
