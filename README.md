# Design System

- [] Text
- [] Heading
- [] Box
- [] Button
- [] TextInput
- [] Textarea
- [] Checkbox
- [] Avatar
- [] MultiStep

| func            | desc                            |
| --------------- | ------------------------------- |
| `folder` tokens | variáveis, ex: cores, tamanhos  |
| `tsup`          | lib, converte o código ts em js |

- Monorepo

  > são conceitos

  - permite trabalhar com vários projetos dentro da mesma estrutura.

  - no `package.json` do projeto root

  ```json
  {
    "workspaces": ["packages/*"] // compartilhar o mesmo node_modules
  }
  ```

  - No `/react`
  - adicionar `@cognu-ui/tokens` como dependência

  ```json
  {
    "dependencies": {
      "@cognu-ui/tokens": "*" // versão atual
    }
  }
  ```

## Add new changes

> como adicionar novas mudanças e publicar nas CDNs
