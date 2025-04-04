"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Download } from "lucide-react"

export default function Curriculo() {
  const experiencias = [
    {
      cargo: "Cyber Security Analyst",
      empresa: "Clear Sale S.A",
      periodo: "2023 - 2025",
      descricao: "Proteção Digital | Segurança Cibernética | OSINT\nMonitoramento de ameaças digitais e proteção de marcas.\nUso de técnicas de OSINT para investigações, análises de fraudes, phishing e outras ameaças cibernéticas.\nResponsável por processos de Brand Protection, garantindo a integridade da identidade digital dos Clientes.\nIdentificação e remoção de perfis falsos e páginas fraudulentas (Takedown de conteúdos sem autorização e/ou ilegítimos) \nAnálise de vulnerabilidades e suporte na implementação de estratégias de segurança cibernética. "
    },
    {
      cargo: "Aprendiz",
      empresa: "U&M Mineração e Construcão S/A",
      periodo: "2023",
    }
  ]

  const educacao = [
    {
      curso: " Bacharelado Inteligência Artificial",
      instituicao: "UniAcademia (CES/JF)",
      periodo: "(Cursando)"
    },
    {
      curso: "Análise e Desenvolvimento de Sistemas",
      instituicao: "Unopar / Anhanguera",
      periodo: "2023 - 2025"
    },
    {
      curso: "Sistemas de Informática - (Profissionalizante)",
      instituicao: "Anhanguera",
      periodo: "2025"
    },
    {
      curso: "Tecnico em Qualidade",
      instituicao: "Senai",
      periodo: "2022 - 2023"
    }
  ]

  const cursos = [
    {
      nome: "Liderança e Gestão de Pessoas.",
      ano: "2025",
    },
    {
      nome: "Osint Investigação e inteligência privada.",
      ano: "2024",
    },
    {
      nome: "LGPD - Lei Geral de Proteção de Dados.",
      ano: "2024",
    }
  ]

  return (
    <div className="space-y-8">
      <div className="flex justify-between items-center animate-fade-in">
        <h1 className="text-4xl font-bold">Currículo</h1>
      <a
        href="/CURRICULO-HENRIQUE_FARIAS.pdf"
        download="CURRICULO-HENRIQUE_FARIAS.pdf"
        className="flex items-center px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
      >
      <Download className="mr-2 h-4 w-4" />
      Download PDF
      </a>
      </div>
      </div>

      <div className="animate-fade-in">
        <Card>
          <CardHeader>
            <CardTitle>Experiência Profissional</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {experiencias.map((exp, index) => (
              <div 
                key={index} 
                className="border-l-2 border-primary pl-4 space-y-2 animate-slide-in"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <h3 className="font-bold">{exp.cargo}</h3>
                <p className="text-sm text-muted-foreground">{exp.empresa} | {exp.periodo}</p>
                <p className="text-sm">{exp.descricao}</p>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>

      <div className="animate-fade-in-delay">
        <Card>
          <CardHeader>
            <CardTitle>Formação</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {educacao.map((edu, index) => (
              <div 
                key={index} 
                className="border-l-2 border-primary pl-4 space-y-2 animate-slide-in"
                style={{ animationDelay: `${(index + 2) * 0.2}s` }}
              >
                <h3 className="font-bold">{edu.curso}</h3>
                <p className="text-sm text-muted-foreground">{edu.instituicao} | {edu.periodo}</p>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>

      <div className="animate-fade-in-delay">
        <Card>
          <CardHeader>
            <CardTitle>Cursos Complementares e Certificações</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            {cursos.map((curso, index) => (
              <div 
                key={index}
                className="border-l-2 border-primary pl-4 space-y-2 animate-slide-in"
                style={{ animationDelay: `${(index + 4) * 0.2}s` }}
              >
                <h3 className="font-bold">{curso.nome}</h3>
                <p className="text-sm text-muted-foreground">{curso.instituicao} | {curso.ano}</p>
                <p className="text-sm">{curso.descricao}</p>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>
    </div >
  )
}