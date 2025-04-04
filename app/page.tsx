"use client"

import { TypewriterEffect } from "@/components/ui/typewriter-effect"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Link from "next/link"

export default function Home() {
  const words = [
    {
      text: "Curriculo",
    },
    {
      text: "",
    },
    {
      text: "digital",
      className: "text-blue-500 dark:text-blue-400",
    },
  ]

  return (
    <div className="flex flex-col items-center justify-center min-h-[80vh] gap-8">
      <div className="animate-fade-in text-center">
        <TypewriterEffect words={words} />
        <p className="mt-4 text-muted-foreground max-w-lg mx-auto">
          Formando em Analise e Desenvolvimento de Sistemas & Inteligencia Artificial.
          Com experiencia em Segurança Cibernética e Desenvolvimento de Software.
        </p>
      </div>

      <div className="animate-fade-in-delay">
        <Link href="/sobre">
          <Button className="group">
            Conheça mais sobre mim 
            <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition" />
          </Button>
        </Link>
      </div>
    </div>
  )
}