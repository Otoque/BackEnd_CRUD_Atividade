# API CRUD de Usuários

## 📌 O que é este projeto?

Este projeto é uma **API** (um sistema que funciona nos bastidores) criada para gerenciar usuários.

Com ela, outros sistemas como sites, aplicativos ou front-end podem:

- Criar usuários
- Ver usuários cadastrados
- Buscar um usuário específico
- Atualizar informações
- Excluir usuários

Ela funciona como o **cérebro do sistema**, recebendo pedidos e respondendo com os dados.

---

# 🛠️ Tecnologias utilizadas

Mesmo para quem não conhece programação, aqui está o que foi usado:

- **Node.js** → permite rodar JavaScript no servidor  
- **Express** → facilita criar rotas e respostas da API  
- **MongoDB** → banco de dados onde as informações ficam salvas  
- **Mongoose** → conecta o código com o banco de dados  
- **Dotenv** → guarda informações sensíveis (como senha do banco)  
- **CORS** → permite que o front-end se conecte à API  

---

# ⚙️ O que esta API faz?

## ✅ Criar usuário
Adiciona uma nova pessoa no sistema.

## ✅ Listar usuários
Mostra todos os usuários cadastrados.

## ✅ Buscar por ID
Mostra apenas um usuário específico.

## ✅ Atualizar usuário
Edita nome ou email de um usuário.

## ✅ Excluir usuário
Remove um usuário do sistema.

---

# 📂 Estrutura do projeto

O projeto foi organizado em pastas para ficar mais profissional:

```text
controllers/ → lógica das funções  
models/      → modelo dos dados  
routes/      → caminhos da API  
server.js    → arquivo principal  
.env         → configurações privadas
