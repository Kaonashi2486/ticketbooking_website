"use client"

import type React from "react"
import { useRef, useState, useEffect } from "react"
import { cn } from "@/lib/utils"

interface SpotlightProps {
  className?: string
  fill?: string
  children?: React.ReactNode
}

export const Spotlight = ({ className = "", fill = "white", children }: SpotlightProps) => {
  const containerRef = useRef<HTMLDivElement>(null)
  const mousePosition = useRef({ x: 0, y: 0 })
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  useEffect(() => {
    if (!isMounted) return

    const container = containerRef.current
    if (!container) return

    const handleMouseMove = (event: MouseEvent) => {
      const rect = container.getBoundingClientRect()
      const x = event.clientX - rect.left
      const y = event.clientY - rect.top
      mousePosition.current = { x, y }

      if (container) {
        const spotlightEl = container.querySelector(".spotlight") as HTMLElement
        if (spotlightEl) {
          spotlightEl.style.background = `radial-gradient(circle at ${x}px ${y}px, ${fill} 0%, transparent 80%)`
        }
      }
    }

    container.addEventListener("mousemove", handleMouseMove)
    return () => {
      container.removeEventListener("mousemove", handleMouseMove)
    }
  }, [isMounted, fill])

  return (
    <div ref={containerRef} className={cn("relative overflow-hidden", className)}>
      {children}
      <div className="spotlight absolute inset-0 pointer-events-none" />
    </div>
  )
}

