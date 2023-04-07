# To do List

Demo: https://to-do-list-artur.vercel.app/

Esta é uma aplicação de lista de tarefas com sistema de registro e login.

<br>

## Tecnologias e conceitos utilizados

---

Back-end:

- NodeJS
  - Express
  - Bcrypt
  - JsonWebToken
  - DayJS
- TypeScript
- MongoDB
  - Atlas
  - mongoose

Front-end:

- HTML
- CSS
- JavaScript
- Axios
- Vercel

<br>

### Usuário

---

- [x] É possível cadastrar um usuário
- [x] Não é possível criar um usuário sem as informações de: nome, username, email, password
- [x] Não é possível cadastrar mais de um usuário com um username/email já existente
- [x] É possível o usuário se logar no sistema
- [x] O usuário deve possuir um token de autorização com tempo de expiração

### Tarefas

---

- [x] Deve ser possível cadastrar uma tarefa
- [x] Não deve possível cadastrar uma tarefa sem um usuário logado
- [x] Não deve possível cadastrar uma tarefa sem as informações de: Nome Da Tarefa, Urgência, Data de término.
- [x] Não deve ser possível cadastrar uma task com a data de termino menor do que a data de criação
- [x] Deve ser possivel excluir uma tarefa
- [x] Deve ser possivel alterar o nome de uma tarefa
