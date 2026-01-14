import { Input } from '../../../ui/components/Input/Input'

type SearchBarProps = {
  value: string
  onChange: (value: string) => void
}

export function SearchBar({ value, onChange }: SearchBarProps) {
  return (
    <div className="rounded-2xl bg-[var(--doc-surface)] p-3 shadow-sm">
      <Input
        value={value}
        onChange={(event) => onChange(event.target.value)}
        placeholder="Rechercher un document..."
        aria-label="Rechercher un document"
      />
    </div>
  )
}
