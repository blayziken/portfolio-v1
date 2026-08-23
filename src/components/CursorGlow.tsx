import { useEffect, useRef } from 'react'

export function CursorGlow() {
  const glowRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const node = glowRef.current
    if (!node) return

    const handleMove = (event: MouseEvent) => {
      node.style.setProperty('--x', `${event.clientX}px`)
      node.style.setProperty('--y', `${event.clientY}px`)
    }

    window.addEventListener('mousemove', handleMove)

    return () => {
      window.removeEventListener('mousemove', handleMove)
    }
  }, [])

  return (
    <div
      ref={glowRef}
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-50"
      style={{
        background:
          'radial-gradient(900px circle at var(--x, 50%) var(--y, 50%), rgba(76,141,255,0.1), rgba(76,141,255,0.035) 35%, transparent 70%)',
      }}
    />
  )
}
