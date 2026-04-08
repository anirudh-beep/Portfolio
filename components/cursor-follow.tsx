"use client"

import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { useTheme } from "@/components/theme-provider"

export default function CursorFollow() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isVisible, setIsVisible] = useState(false)
  const [isHoveringClickable, setIsHoveringClickable] = useState(false)
  const { theme } = useTheme()

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
      if (!isVisible) setIsVisible(true)
    }

    const handleMouseLeave = () => {
      setIsVisible(false)
    }

    // Check if the element or its parents are clickable
    const isClickable = (element: HTMLElement | null): boolean => {
      if (!element) return false

      // Check common clickable elements
      const clickableTags = ["A", "BUTTON", "INPUT", "TEXTAREA", "SELECT", "LABEL"]
      if (clickableTags.includes(element.tagName)) return true

      // Check for elements with click-related attributes or classes
      const style = window.getComputedStyle(element)
      if (
        element.onclick ||
        element.getAttribute("role") === "button" ||
        style.cursor === "pointer" ||
        element.classList.contains("cursor-pointer")
      ) {
        return true
      }

      // Check parent if this element isn't clickable
      return isClickable(element.parentElement)
    }

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      setIsHoveringClickable(isClickable(target))
    }

    window.addEventListener("mousemove", updateMousePosition)
    window.addEventListener("mouseover", handleMouseOver)
    document.addEventListener("mouseleave", handleMouseLeave)

    return () => {
      window.removeEventListener("mousemove", updateMousePosition)
      window.removeEventListener("mouseover", handleMouseOver)
      document.removeEventListener("mouseleave", handleMouseLeave)
    }
  }, [isVisible])

  return (
    <>
      <AnimatePresence>
        {isVisible && (
          <motion.div
            className="fixed pointer-events-none z-50 hidden md:block"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{
              x: mousePosition.x - (isHoveringClickable ? 24 : 16),
              y: mousePosition.y - (isHoveringClickable ? 24 : 16),
              opacity: 1,
              scale: isHoveringClickable ? 1.5 : 1,
            }}
            exit={{ opacity: 0, scale: 0.5 }}
            transition={{
              type: "spring",
              damping: 25,
              stiffness: 300,
              mass: 0.5,
            }}
          >
            <motion.div
              className={`rounded-full opacity-30 ${theme === "dark" ? "bg-primary" : "bg-primary"} blur-md`}
              animate={{
                width: isHoveringClickable ? "48px" : "32px",
                height: isHoveringClickable ? "48px" : "32px",
              }}
              transition={{ duration: 0.2 }}
            />
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {isVisible && (
          <motion.div
            className="fixed pointer-events-none z-50 hidden md:block"
            initial={{ opacity: 0 }}
            animate={{
              x: mousePosition.x - (isHoveringClickable ? 6 : 4),
              y: mousePosition.y - (isHoveringClickable ? 6 : 4),
              opacity: 1,
            }}
            exit={{ opacity: 0 }}
            transition={{
              type: "spring",
              damping: 40,
              stiffness: 400,
              mass: 0.3,
            }}
          >
            <motion.div
              className={`rounded-full ${theme === "dark" ? "bg-white" : "bg-black"}`}
              animate={{
                width: isHoveringClickable ? "12px" : "8px",
                height: isHoveringClickable ? "12px" : "8px",
              }}
              transition={{ duration: 0.15 }}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
