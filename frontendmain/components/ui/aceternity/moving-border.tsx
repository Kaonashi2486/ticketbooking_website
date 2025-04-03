"use client"

import React from "react"
import { cn } from "@/lib/utils"

export const MovingBorder = ({
  children,
  duration = 2000,
  className,
  containerClassName,
  borderRadius = "1.75rem",
  colors = ["#27272a", "#ef4444"],
  as: Component = "button",
  ...otherProps
}: {
  children: React.ReactNode
  duration?: number
  className?: string
  containerClassName?: string
  borderRadius?: string
  colors?: string[]
  as?: any
  [key: string]: any
}) => {
  const borderRef = React.useRef<HTMLDivElement>(null)
  const [isHovered, setIsHovered] = React.useState(false)

  return (
    <Component
      className={cn("relative p-[1px] overflow-hidden", containerClassName)}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      {...otherProps}
    >
      <div
        ref={borderRef}
        className="absolute inset-0 rounded-[inherit]"
        style={{
          background: `linear-gradient(to right, ${colors[0]}, ${colors[1]}, ${colors[0]}, ${colors[1]})`,
          backgroundSize: "250% 100%",
          animation: isHovered ? `movingGradient ${duration}ms linear infinite` : "none",
        }}
      />
      <div className={cn("relative bg-background rounded-[inherit] z-10", className)}>{children}</div>
      <style jsx>{`
        @keyframes movingGradient {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }
      `}</style>
    </Component>
  )
}

