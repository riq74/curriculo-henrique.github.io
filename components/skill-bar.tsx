interface SkillBarProps {
  name: string
  level: number
  delay?: number
}

export function SkillBar({ name, level, delay = 0 }: SkillBarProps) {
  return (
    <div className="space-y-2">
      <div className="flex justify-between">
        <span className="text-sm font-medium">{name}</span>
        <span className="text-sm text-muted-foreground">{level}%</span>
      </div>
      <div className="h-2 w-full bg-secondary rounded-full overflow-hidden">
        <div
          className="h-full bg-primary transition-all duration-1000 ease-out"
          style={{
            width: `${level}%`,
            transitionDelay: `${delay}s`,
          }}
        />
      </div>
    </div>
  )
}