import type { ReactNode } from 'react'

type HoverCardProps = {
  isHovered: boolean
  isDimmed: boolean
  onHoverStart: () => void
  onHoverEnd: () => void
  children: ReactNode
}

export function HoverCard({
  isHovered,
  isDimmed,
  onHoverStart,
  onHoverEnd,
  children,
}: HoverCardProps) {
  return (
    <div
      onMouseEnter={onHoverStart}
      onMouseLeave={onHoverEnd}
      onFocus={onHoverStart}
      onBlur={onHoverEnd}
      className={`group relative -mx-6 rounded-lg p-6 transition-all duration-300 ${
        isHovered ? 'bg-slate-800/50 shadow-lg' : 'bg-transparent'
      } ${isDimmed ? 'opacity-50' : 'opacity-100'}`}
    >
      {children}
    </div>
  )
}
