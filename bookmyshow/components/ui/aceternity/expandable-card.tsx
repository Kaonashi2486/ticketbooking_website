"use client"

import type React from "react"
import { useState } from "react"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

interface ExpandableCardProps {
  children: React.ReactNode
  className?: string
  expandedClassName?: string
  cardTitle: React.ReactNode
  cardContent: React.ReactNode
}

export const ExpandableCard = ({
  children,
  className,
  expandedClassName,
  cardTitle,
  cardContent,
}: ExpandableCardProps) => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <motion.div
      layout
      onClick={() => setIsOpen(!isOpen)}
      className={cn(
        "relative overflow-hidden cursor-pointer rounded-lg bg-card shadow-md hover:shadow-lg transition-shadow",
        className,
        isOpen && expandedClassName,
      )}
      initial={{ borderRadius: 12 }}
    >
      <motion.div layout className="p-4 sm:p-6">
        {cardTitle}
      </motion.div>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3, delay: 0.15 }}
          className="p-4 sm:p-6 pt-0"
        >
          {cardContent}
        </motion.div>
      )}
      {children}
    </motion.div>
  )
}

