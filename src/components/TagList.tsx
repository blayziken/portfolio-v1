type TagListProps = {
  tags: string[]
  colorClassName: string
}

export function TagList({ tags, colorClassName }: TagListProps) {
  return (
    <ul className="mt-4 flex list-none flex-wrap gap-2 p-0">
      {tags.map((tag) => (
        <li
          key={tag}
          className={`rounded-full px-3 py-1.5 text-xs font-medium ${colorClassName}`}
        >
          {tag}
        </li>
      ))}
    </ul>
  )
}
