import { type DocCategory, type DocNode } from '../../lib/docsIndex'
import { cn } from '../../../ui/lib/cn'

type SidebarProps = {
  categories: DocCategory[]
  activeSlug: string | null
  onNavigate: (slug: string) => void
}

function NodeList({
  nodes,
  activeSlug,
  onNavigate,
}: {
  nodes: DocNode[]
  activeSlug: string | null
  onNavigate: (slug: string) => void
}) {
  return (
    <ul className="space-y-2">
      {nodes.map((node) =>
        node.type === 'section' ? (
          <li key={node.label} className="space-y-2">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--doc-muted)]">
              {node.label}
            </p>
            <NodeList nodes={node.children} activeSlug={activeSlug} onNavigate={onNavigate} />
          </li>
        ) : (
          <li key={node.slug}>
            <button
              type="button"
              onClick={() => onNavigate(node.slug)}
              className={cn(
                'w-full rounded-xl px-3 py-2 text-left text-sm transition',
                activeSlug === node.slug
                  ? 'bg-[var(--doc-accent-soft)] text-[var(--doc-accent-strong)]'
                  : 'text-[var(--doc-ink)] hover:bg-[var(--doc-surface-muted)]',
              )}
            >
              {node.title}
            </button>
          </li>
        ),
      )}
    </ul>
  )
}

export function Sidebar({ categories, activeSlug, onNavigate }: SidebarProps) {
  return (
    <div className="space-y-6">
      {categories.map((category) => (
        <div key={category.id} className="space-y-3">
          <h2 className="text-sm font-semibold uppercase tracking-[0.25em] text-[var(--doc-muted)]">
            {category.label}
          </h2>
          <NodeList nodes={category.items} activeSlug={activeSlug} onNavigate={onNavigate} />
        </div>
      ))}
    </div>
  )
}
