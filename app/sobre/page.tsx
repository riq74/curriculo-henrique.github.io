"use client"

import { SkillBar } from "@/components/skill-bar"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function Sobre() {
  const skills = [
    { name: "Inteligência Artificial", level: 85 },
    { name: "OSINT", level: 70 },
    { name: "CiberSecurity", level: 65 },
    { name: "Desenvolvimento Web", level: 65 },
  ]

  const outrasHabilidades = [
    { categoria: "Idiomas", items: ["Inglês - Intermediário", "Espanhol - Básico"] },
    { categoria: "Soft Skills", items: ["Ética profissional", "Liderança", "Trabalho em equipe", "Pensamento crítico"] },
    { categoria: "Certificações", items: ["LGPD", "OSINT", "Liderança e Gestão de Pessoas", "Analytics e inteligência Artificial"] },
    { categoria: "Ferramentas", items: ["Git", "Dorks", "Maltego", "Shodan", "Tor"] },
  ]

  return (
    <div className="space-y-8">
      <div className="animate-fade-in">
        <h1 className="text-4xl font-bold mb-4">Sobre Mim</h1>
        <p className="text-muted-foreground">
          Me chamo Henrique tenho 20 anos, sou um profissional apaixonado por conhecimento, minha jornada
          começou com uma oportunidade na ClearSale tendo meu primeiro contato com a segurança digital
          e lá tive a chance de adiquirir novos conhecimentos na area e me aprofundar nela.
        </p>
      </div>

      <div className="space-y-8">
        <div className="animate-fade-in">
          <h1 className="text-4xl font-bold mb-4">Objetivo</h1>
          <p className="text-muted-foreground">
            Busco oportunidade para aplicar meus conhecimentos em TI e áreas correlatas,
            onde possa contribuir com minha experiência em monitoramento de ameaças
            digitais, investigação de fraudes e takedown, ao mesmo tempo em que
            desenvolvo novas habilidades para o crescimento mútuo.
          </p>
        </div>

        <div className="animate-fade-in-delay">
          <Card>
            <CardHeader>
              <CardTitle>Habilidades Técnicas</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {skills.map((skill, index) => (
                <SkillBar
                  key={skill.name}
                  name={skill.name}
                  level={skill.level}
                  delay={index * 0.1}
                />
              ))}
            </CardContent>
          </Card>
        </div>

        <div className="animate-fade-in-delay grid gap-6 md:grid-cols-2">
          {outrasHabilidades.map((categoria, index) => (
            <Card key={categoria.categoria}>
              <CardHeader>
                <CardTitle>{categoria.categoria}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {categoria.items.map((item) => (
                    <Badge key={item} variant="secondary" className="text-sm">
                      {item}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
      )
}