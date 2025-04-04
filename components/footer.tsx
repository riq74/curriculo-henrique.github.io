import { Linkedin, Mail, Github } from "lucide-react"
import Link from "next/link"

export function Footer() {
  return (
    <footer className="border-t">
      <div className="container flex flex-col items-center justify-between gap-4 py-10 md:h-24 md:flex-row md:py-0">
        <div className="flex flex-col items-center gap-4 px-8 md:flex-row md:gap-2 md:px-0">
          <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
            Construído por Henrique.
          </p>
        </div>
        <div className="flex items-center space-x-4">
          <Link href="https://linkedin.com/in/henrique74" target="_blank" rel="noopener noreferrer">
            <Linkedin className="h-5 w-5" />
          </Link>
          <Link href="nadadorhenrique@pm.me">
            <Mail className="h-5 w-5" />
          </Link>
          <Link href="https://github.com/riq74" target="_blank" rel="noopener noreferrer">
            <Github className="h-5 w-5" />
          </Link>
        </div>
      </div>
    </footer>
  )
}