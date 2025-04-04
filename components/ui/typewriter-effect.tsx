"use client"

import { useEffect, useState } from "react"
import { cn } from "@/lib/utils"

interface TypewriterEffectProps {
  words: {
    text: string
    className?: string
  }[]
  className?: string
  cursorClassName?: string
}

export function TypewriterEffect({
  words,
  className,
  cursorClassName,
}: TypewriterEffectProps) {
  const [displayText, setDisplayText] = useState("")
  const [isTyping, setIsTyping] = useState(true)

  useEffect(() => {
    const fullText = words.map(word => word.text).join(" ")
    let currentIndex = 0
    let timer: NodeJS.Timeout

    const type = () => {
      if (currentIndex <= fullText.length) {
        setDisplayText(fullText.slice(0, currentIndex))
        currentIndex++
        timer = setTimeout(type, 100)
      } else {
        setIsTyping(false)
      }
    }

    type()

    return () => clearTimeout(timer)
  }, [words])

  return (
    <div className={cn("text-base sm:text-4xl lg:text-6xl font-bold text-center", className)}>
      {words.map((word, idx) => (
        <span key={idx} className="inline-block">
          <span className={word.className}>
            {word.text}
          </span>
          {idx < words.length - 1 && (
            <span className="inline-block">&nbsp;</span>
          )}
        </span>
      ))}
      <span
        className={cn(
          "inline-block w-[4px] h-4 sm:h-12 lg:h-16 bg-blue-500 animate-blink ml-1",
          cursorClassName,
          { "opacity-0": !isTyping }
        )}
      />
    </div>
  )
}