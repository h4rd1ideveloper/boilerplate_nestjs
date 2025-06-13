# NestJS CRUD: Companies & Products

Projeto em NestJS com TypeORM, PostgreSQL e Docker. Ele implementa um CRUD completo com relacionamento **One-to-Many** entre `companies` e `products`.

---

## 🧱 Entidades

- **Company**: possui `id`, `name` e uma lista de produtos.
- **Product**: possui `id`, `name`, `price` e pertence a uma empresa.

Relacionamento: **Uma empresa pode ter vários produtos (One-to-Many)**

---

## 🚀 Instalação (modo local)

1. Instale as dependências:

```bash
npm install
npm install @nestjs/typeorm typeorm pg
```

2. Configure o `.env` com os dados do banco:

```env
DB_HOST=localhost
DB_PORT=5432
DB_USER=postgres
DB_PASS=postgres
DB_NAME=nest_crud
```

3. Suba o banco localmente ou via Docker (veja abaixo).

4. Execute o projeto:

```bash
npm run start:dev
```

---

## 🐳 Docker

### 1. Subir tudo com Docker Compose

```bash
docker-compose up --build
```

A aplicação ficará disponível em `http://localhost:3000`

### 2. Estrutura do Docker Compose

- `db`: PostgreSQL
- `app`: aplicação NestJS

---

## 📬 Rotas da API

> Todas as rotas estão disponíveis diretamente em `http://localhost:3000` (sem prefixo `/api`).

### 🔹 Company

| Método | Rota            | Descrição         |
| ------ | --------------- | ----------------- |
| POST   | /companies      | Criar empresa     |
| GET    | /companies      | Listar todas      |
| GET    | /companies/\:id | Buscar por ID     |
| PATCH  | /companies/\:id | Atualizar empresa |
| DELETE | /companies/\:id | Remover empresa   |

### 🔹 Product

| Método | Rota           | Descrição         |
| ------ | -------------- | ----------------- |
| POST   | /products      | Criar produto     |
| GET    | /products      | Listar todos      |
| GET    | /products/\:id | Buscar por ID     |
| PATCH  | /products/\:id | Atualizar produto |
| DELETE | /products/\:id | Remover produto   |

---

## 🔎 Exemplos de requisição

### Criar Empresa

```http
POST /companies
Content-Type: application/json

{
  "name": "Empresa"
}
```

### Criar Produto

```http
POST /products
Content-Type: application/json

{
  "name": "Produto",
  "price": 20,
  "companyId": 1
}
```

### Atualizar Produto

```http
PATCH /products/1
Content-Type: application/json

{
  "price": 25
}
```

### Deletar Empresa

```http
DELETE /companies/1
```

---

## 📁 Scripts úteis

```bash
# Iniciar em modo dev
npm run start:dev

# Build da aplicação
npm run build

# Rodar testes
npm run test
```

---

## ✍️ Autor

Desenvolvido por Yan Policarpo<contato@yanpolicarpo.com.br> com NestJS, PostgreSQL e Docker.

