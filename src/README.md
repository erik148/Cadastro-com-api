# Cadastro de Usuários

Este é um projeto completo de cadastro de usuários utilizando React no frontend e Node.js com Prisma no backend. Ele permite cadastrar, listar e deletar usuários com nome, idade e e-mail.

## Tecnologias Utilizadas

### Frontend:

* React
* Styled-components
* Axios

### Backend:

* Node.js
* Express
* Prisma ORM
* MongoDB 
## Como rodar o projeto localmente

### 1. Clone o repositório

```bash
git clone https://github.com/erik148/Cadastro-com-api
cd DEV-CLUB-CADASTRO
```

### 2. Instale as dependências

#### Para o frontend (na pasta do frontend):

```bash
npm install
```

#### Para o backend (na pasta do backend):

```bash
npm install
npx prisma generate
npx prisma migrate dev --name init
```

### 3. Configure as variáveis de ambiente

Crie um arquivo `.env` na raiz do backend com o seguinte conteúdo:

```env
DATABASE_URL="file:./dev.db"
```

(ou conforme o seu banco)

### 4. Inicie o backend

```bash
node server.js
```

### 5. Inicie o frontend

```bash
npm start
```

## Funcionalidades

* Cadastro de usuário com nome, idade e e-mail
* Validação de campos obrigatórios
* Exibição de mensagem de sucesso/erro
* Lista de usuários cadastrados com avatar
* Exclusão de usuário


