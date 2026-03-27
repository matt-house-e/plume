import { useEffect, useRef, type ReactNode } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

interface ScrollRevealProps {
  children: ReactNode
  className?: string
  stagger?: number
  delay?: number
  duration?: number
  y?: number
  once?: boolean
}

export default function ScrollReveal({
  children,
  className = '',
  stagger = 0.1,
  delay = 0,
  duration = 0.6,
  y = 30,
  once = true,
}: ScrollRevealProps) {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    const elements = container.children

    gsap.set(elements, {
      opacity: 0,
      y: y,
    })

    gsap.to(elements, {
      opacity: 1,
      y: 0,
      duration: duration,
      stagger: stagger,
      delay: delay,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: container,
        start: 'top 85%',
        once: once,
      },
    })

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill())
    }
  }, [stagger, delay, duration, y, once])

  return (
    <div ref={containerRef} className={className}>
      {children}
    </div>
  )
}
