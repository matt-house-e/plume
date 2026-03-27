import { useEffect, useRef, type ReactNode } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

interface TimelineRevealProps {
  children: ReactNode
  className?: string
}

export default function TimelineReveal({
  children,
  className = '',
}: TimelineRevealProps) {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    // Find all timeline items (children with relative positioning)
    const items = container.querySelectorAll('[data-timeline-item]')
    const dots = container.querySelectorAll('[data-timeline-dot]')
    const lines = container.querySelectorAll('[data-timeline-line]')

    // Set initial states
    gsap.set(items, { opacity: 0, x: -20 })
    gsap.set(dots, { scale: 0, opacity: 0 })
    gsap.set(lines, { scaleY: 0, transformOrigin: 'top' })

    // Create timeline for each item
    items.forEach((item, index) => {
      const dot = dots[index]
      const line = lines[index]

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: item,
          start: 'top 80%',
          once: true,
        },
      })

      // Animate dot first
      if (dot) {
        tl.to(dot, {
          scale: 1,
          opacity: 1,
          duration: 0.3,
          ease: 'back.out(1.7)',
        })
      }

      // Then the content
      tl.to(
        item,
        {
          opacity: 1,
          x: 0,
          duration: 0.5,
          ease: 'power2.out',
        },
        '-=0.1'
      )

      // Then the line (if not last item)
      if (line) {
        tl.to(
          line,
          {
            scaleY: 1,
            duration: 0.4,
            ease: 'power1.inOut',
          },
          '-=0.3'
        )
      }
    })

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill())
    }
  }, [])

  return (
    <div ref={containerRef} className={className}>
      {children}
    </div>
  )
}
