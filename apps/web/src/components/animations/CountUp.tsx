import { useEffect, useRef, useState } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

interface CountUpProps {
  end: number
  duration?: number
  suffix?: string
  prefix?: string
  className?: string
}

export default function CountUp({
  end,
  duration = 2,
  suffix = '',
  prefix = '',
  className = '',
}: CountUpProps) {
  const [count, setCount] = useState(0)
  const elementRef = useRef<HTMLSpanElement>(null)
  const hasAnimated = useRef(false)

  useEffect(() => {
    const element = elementRef.current
    if (!element) return

    const trigger = ScrollTrigger.create({
      trigger: element,
      start: 'top 85%',
      once: true,
      onEnter: () => {
        if (hasAnimated.current) return
        hasAnimated.current = true

        const obj = { value: 0 }
        gsap.to(obj, {
          value: end,
          duration: duration,
          ease: 'power2.out',
          onUpdate: () => {
            setCount(Math.round(obj.value))
          },
        })
      },
    })

    return () => {
      trigger.kill()
    }
  }, [end, duration])

  return (
    <span ref={elementRef} className={className}>
      {prefix}{count}{suffix}
    </span>
  )
}
