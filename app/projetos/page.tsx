"use client"

import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Github, ExternalLink } from "lucide-react"
import Link from "next/link"

export default function Projetos() {
  const projetos = [
    {
      titulo: "",
      descricao: "",
      tecnologias: [],
      github: "",
      demo: ""
    },
    /*{
      titulo: "Análise de Vulnerabilidades Web",
      descricao: "Ferramenta automatizada para análise de vulnerabilidades em aplicações web...",
      tecnologias: ["JavaScript", "Node.js", "Express"],
      github: "https://github.com/seu-usuario/projeto2",
      demo: "https://demo.projeto2.com"
    }*/
  ]

  return (
    <div className="space-y-8">
      <div className="animate-fade-in">
        <h1 className="text-4xl font-bold mb-4">Projetos</h1>
        <p className="text-muted-foreground">
          Conheça alguns dos projetos que desenvolvi.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {projetos.map((projeto, index) => (
          <div
            key={index}
            className="animate-fade-in"
            style={{ animationDelay: `${index * 0.2}s` }}
          >
            <Card className="h-full flex flex-col hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle>{projeto.titulo}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">{projeto.descricao}</p>
                <div className="flex flex-wrap gap-2">
                  {projeto.tecnologias.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 bg-secondary text-secondary-foreground rounded-md text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </CardContent>
              <CardFooter className="mt-auto">
                <div className="flex space-x-4">
                  <Link href={projeto.github} target="_blank" rel="noopener noreferrer">
                    <Button variant="outline" size="sm">
                      <Github className="mr-2 h-4 w-4" />
                      GitHub
                    </Button>
                  </Link>
                  <Link href={projeto.demo} target="_blank" rel="noopener noreferrer">
                    <Button variant="outline" size="sm">
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Demo
                    </Button>
                  </Link>
                </div>
              </CardFooter>
            </Card>
          </div>
        ))}
      </div>
    </div>
  )
}