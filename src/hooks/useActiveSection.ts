import { useEffect, useState } from 'react'

export function useActiveSection(ids: string[]) {
  const [activeId, setActiveId] = useState(ids[0])

  useEffect(() => {
    const elements = ids
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null)

    if (elements.length === 0) return

    const intersecting = new Set<string>()

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            intersecting.add(entry.target.id)
          } else {
            intersecting.delete(entry.target.id)
          }
        }
        // Among sections currently crossing the tracking band, prefer the
        // one furthest down the page (last in document order).
        for (let i = ids.length - 1; i >= 0; i--) {
          if (intersecting.has(ids[i])) {
            setActiveId(ids[i])
            break
          }
        }
      },
      {
        // A thin horizontal band near the top of the viewport — a section
        // is "active" once it crosses this line, regardless of how tall
        // the section is overall.
        rootMargin: '-20% 0px -75% 0px',
        threshold: 0,
      },
    )

    for (const el of elements) observer.observe(el)

    return () => observer.disconnect()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ids.join(',')])

  return activeId
}
