# Doc Intelligence

API em NestJS para gerenciamento de documentos, tipos de documento e atributos extraídos. O projeto usa TypeScript, PostgreSQL e Prisma Next.

> **Status:** estrutura inicial em desenvolvimento. As rotas CRUD já estão registradas, mas os services ainda retornam respostas de exemplo e não persistem dados no banco.

## Stack

- Node.js e TypeScript
- NestJS 12
- PostgreSQL 15 ou superior
- Prisma Next (`@prisma/orm-postgres`)
- Vitest para testes
- `class-validator` e `class-transformer` para validação dos requests

## Pré-requisitos

- Node.js compatível com as dependências do projeto
- npm
- PostgreSQL 15+

## Configuração

1. Instale as dependências:

   ```bash
   npm install
   ```

2. Crie um arquivo `.env` na raiz, baseado em `.env.example`:

   ```env
   DATABASE_URL="postgresql://user:password@localhost:5432/mydb"
   PORT=3000
   ```

3. Gere os artefatos do contrato Prisma:

   ```bash
   npm run contract:emit
   ```

O PostgreSQL utilizado deve ser acessível pela `DATABASE_URL`. O arquivo `prisma.config.ts` aponta o Prisma Next para `src/prisma/contract.prisma`.

## Executando

```bash
# desenvolvimento
npm run start:dev

# execução normal
npm run start

# produção
npm run build
npm run start:prod
```

A API fica disponível em `http://localhost:3000`. A rota `GET /` retorna a resposta básica da aplicação.

## Endpoints atuais

Todos os recursos possuem operações CRUD:

| Recurso                | Base                  | Operações                                              |
| ---------------------- | --------------------- | ------------------------------------------------------ |
| Tipos de documento     | `/document-type`      | `POST`, `GET`, `GET /:id`, `PATCH /:id`, `DELETE /:id` |
| Atributos de documento | `/document-attribute` | `POST`, `GET`, `GET /:id`, `PATCH /:id`, `DELETE /:id` |
| Documentos             | `/document`           | `POST`, `GET`, `GET /:id`, `PATCH /:id`, `DELETE /:id` |

Os IDs recebidos pelas rotas são convertidos para número no controller atual. O contrato Prisma, por sua vez, define IDs como UUIDs; essa diferença deve ser corrigida antes da implementação da persistência.

## Modelo de dados

O contrato em [`src/prisma/contract.prisma`](src/prisma/contract.prisma) define:

- **DocumentType:** nome, descrição e relacionamentos com documentos e atributos.
- **DocumentAttribute:** chave, rótulo, tipo de dado e indicação de obrigatoriedade. A combinação `documentTypeId + key` é única.
- **Document:** nome do arquivo, URL, MIME type, tipo opcional, status e dados extraídos em JSON.

Enums disponíveis:

- `DocumentStatus`: `PENDING`, `PROCESSING`, `PROCESSED`, `FAILED`
- `AttributeDataType`: `STRING`, `NUMBER`, `DATE`, `BOOLEAN`

Os arquivos `src/prisma/contract.json` e `src/prisma/contract.d.ts` são gerados pelo comando `npm run contract:emit` e devem ser atualizados quando o contrato mudar.

## Testes e qualidade

```bash
# testes unitários
npm run test

# testes em modo watch
npm run test:watch

# testes end-to-end
npm run test:e2e

# cobertura
npm run test:cov

# lint
npm run lint

# formatação
npm run format
```

## Estrutura principal

```text
src/
  document/              # documentos
  document-type/         # tipos de documento
  document-attribute/    # atributos dos tipos
  prisma/                # contrato, tipos e cliente do banco
  app.module.ts          # composição da aplicação
  main.ts                # bootstrap e validação global
test/                    # testes end-to-end
```

## Observabilidade

O projeto inicializa o NestJS Observe em `src/app.module.ts` para instrumentação de traces, métricas e logs. Antes de habilitar o uso em produção, substitua `YOUR_APP_KEY` e `YOUR_APP_SECRET` pelas credenciais do ambiente.

## Próximos passos

- Implementar os DTOs e suas regras de validação.
- Conectar os services ao cliente Prisma Next.
- Alinhar o tipo dos IDs dos controllers ao UUID definido no contrato.
- Adicionar migrations ou o fluxo de criação das tabelas no ambiente de banco.
- Documentar a API com Swagger quando os contratos de request e response estiverem definidos.

## Licença

Este projeto ainda não possui uma licença de distribuição definida (`UNLICENSED` no `package.json`).
