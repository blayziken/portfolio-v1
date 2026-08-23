import { useState } from 'react'

export function useHoverIndex() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  return {
    isHovered: (index: number) => hoveredIndex === index,
    isDimmed: (index: number) => hoveredIndex !== null && hoveredIndex !== index,
    onHoverStart: (index: number) => () => setHoveredIndex(index),
    onHoverEnd: () => setHoveredIndex(null),
  }
}
