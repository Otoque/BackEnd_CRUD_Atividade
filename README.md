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

## 🛠️ Tecnologias utilizadas

- **Node.js** → permite rodar JavaScript no servidor  
- **Express** → facilita criar rotas e respostas da API  
- **MongoDB** → banco de dados onde as informações ficam salvas  
- **Mongoose** → conecta o código com o banco de dados  
- **Dotenv** → guarda informações sensíveis (como senha do banco)  
- **CORS** → permite que o front-end se conecte à API  

---

## ⚙️ O que esta API faz?

- ✅ Criar usuário  
- ✅ Listar usuários  
- ✅ Buscar por ID  
- ✅ Atualizar usuário  
- ✅ Excluir usuário  

---

## 📂 Estrutura do projeto

```text
controllers/ → lógica das funções
models/      → modelo dos dados
routes/      → caminhos da API
server.js    → arquivo principal
.env         → configurações privadas
```

---

## ▶️ Como rodar o projeto

### 1. Instalar dependências

```bash
npm install
```

### 2. Configurar o arquivo `.env`

Crie um arquivo chamado `.env` e coloque:

```env
PORT=3000
MONGO_URI=sua_conexao_com_mongodb
```

### 3. Iniciar servidor

```bash
node server.js
```

Se tudo estiver certo, aparecerá:

```text
Servidor rodando na porta 3000
MongoDB conectado
```

---

## 🌐 Rotas disponíveis

| Método | Rota | Função |
|---|---|---|
| GET | /usuarios | Ver todos |
| GET | /usuarios/:id | Ver um usuário |
| POST | /usuarios | Criar |
| PUT | /usuarios/:id | Atualizar |
| DELETE | /usuarios/:id | Excluir |

---

## 🧪 Como testar

Você pode usar programas como:

- Postman  
- Insomnia  

Ou conectar com um front-end.

---

## 🚀 Possível uso real

Essa API pode ser usada em:

- Cadastro de clientes  
- Sistema escolar  
- Loja virtual  
- Aplicativo mobile  
- Painel administrativo  

---

## 👨‍💻 Autor

Projeto desenvolvido por **Nicolas Tavares** para estudos, prática e portfólio.
