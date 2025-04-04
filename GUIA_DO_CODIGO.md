## Estrutura de Diretórios

app/                  # Diretório principal das páginas
components/          # Componentes reutilizáveis
public/             # Arquivos estáticos
lib/               # Utilitários e funções auxiliares
styles/           # Arquivos de estilo

## Páginas (`app/`)

### `app/layout.tsx`
```typescript
// Layout principal que envolve todas as páginas
// - Configuração de metadados
// - Providers (tema escuro/claro)
// - Estrutura comum (navegação, rodapé)
```

### `app/page.tsx`
```typescript
// Página inicial
// - Efeito de digitação
// - Apresentação principal
// - Botão de chamada para ação
```

### `app/sobre/page.tsx`
```typescript
// Página Sobre
// - Informações pessoais
// - Habilidades técnicas com barras de progresso
// - Outras habilidades em cards
// - Organizado em seções com animações
```

### `app/curriculo/page.tsx`
```typescript
// Página de Currículo
// - Experiência profissional
// - Educação
// - Cursos e certificações
// - Botão para download do PDF
```

### `app/projetos/page.tsx`
```typescript
// Página de Projetos
// - Lista de projetos em cards
// - Links para GitHub e demos
// - Tecnologias usadas em cada projeto
```

### `app/contato/page.tsx`
```typescript
// Página de Contato
// - Links para redes sociais
// - Informações de contato
// - Animações nos cards
```

## Componentes (`components/`)

### `components/navigation.tsx`
```typescript
// Barra de navegação
// - Menu responsivo
// - Links para todas as páginas
// - Alternador de tema
```

### `components/theme-toggle.tsx`
```typescript
// Botão de alternar tema
// - Alterna entre modo claro/escuro
// - Animação de transição
// - Ícones de sol/lua
```

### `components/skill-bar.tsx`
```typescript
// Barra de progresso para habilidades
// - Mostra porcentagem
// - Animação de preenchimento
// - Estilização personalizada
```

### `components/ui/typewriter-effect.tsx`
```typescript
// Efeito de digitação
// - Anima texto letra por letra
// - Cursor piscante
// - Configurável com diferentes textos
```

### `components/ui/card.tsx`
```typescript
// Componente Card
// - Estrutura básica para cards
// - Header, content e footer
// - Estilos e animações hover
```

### `components/ui/button.tsx`
```typescript
// Componente Botão
// - Diferentes variantes (primary, secondary)
// - Estados (hover, focus, disabled)
// - Animações de interação
```

### `components/ui/badge.tsx`
```typescript
// Componente Badge
// - Usado para tags e labels
// - Diferentes estilos e cores
// - Formato arredondado