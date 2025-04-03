"use client"

import type React from "react"
import { useEffect, useRef, useState } from "react"
import { motion, useInView, useAnimation } from "framer-motion"

interface TextRevealProps {
  text: string
  className?: string
  once?: boolean
  delay?: number
}

export const TextReveal: React.FC<TextRevealProps> = ({ text, className = "", once = false, delay = 0 }) => {
  const controls = useAnimation()
  const ref = useRef(null)
  const isInView = useInView(ref, { once })
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  useEffect(() => {
    if (isInView && isMounted) {
      controls.start("visible")
    }
  }, [isInView, controls, isMounted])

  if (!isMounted) {
    return <div className={className}>{text}</div>
  }

  return (
    <motion.div ref={ref} initial="hidden" animate={controls} transition={{ delay }} className={className}>
      {text.split(" ").map((word, wordIndex) => (
        <span key={wordIndex} className="inline-block mr-1">
          {word.split("").map((char, charIndex) => (
            <motion.span
              key={charIndex}
              className="inline-block"
              variants={{
                hidden: {
                  opacity: 0,
                  y: 20,
                },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: {
                    duration: 0.1,
                    delay: charIndex * 0.02 + wordIndex * 0.05 + delay,
                  },
                },
              }}
            >
              {char}
            </motion.span>
          ))}
          <span className="inline-block">&nbsp;</span>
        </span>
      ))}
    </motion.div>
  )
}

