"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Linkedin, Github, Mail } from "lucide-react"
import Link from "next/link"

export default function Contato() {
  return (
    <div className="space-y-8">
      <div className="animate-fade-in">
        <h1 className="text-4xl font-bold mb-4">Contato</h1>
        <p className="text-muted-foreground">
          Entre em contato comigo através das minhas redes sociais.
        </p>
      </div>

      <div className="max-w-2xl mx-auto">
        <Card className="animate-fade-in">
          <CardHeader>
            <CardTitle>Redes Sociais</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <Link
              href="https://linkedin.com/in/henrique74"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-4 p-4 hover:bg-secondary rounded-lg transition-colors"
            >
              <Linkedin className="h-6 w-6" />
              <span>LinkedIn</span>
            </Link>
            <Link
              href="nadadorhenrique@pm.me"
              className="flex items-center space-x-4 p-4 hover:bg-secondary rounded-lg transition-colors"
            >
              <Mail className="h-6 w-6" />
              <span>Email</span>
            </Link>
            <Link
              href="https://github.com/riq74"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-4 p-4 hover:bg-secondary rounded-lg transition-colors"
            >
              <Github className="h-6 w-6" />
              <span>GitHub</span>
            </Link>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}