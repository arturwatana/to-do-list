Esta é uma aplicação de lista de tarefas com sistema de registro e login. Utilizando as seguintes tecnologias:

Back-end:

- NodeJS
  - Express
  - Bcrypt
  - JsonWebToken
  - DayJS
- TypeScript
- MongoDB
  - mongoose

Front-end:

- HTML
- CSS
- JavaScript
- Axios

Usuário

- [x] É possível cadastrar um usuário
- [x] Não é possível criar um usuário sem as informações de: nome, username, email, password
- [x] Não é possível cadastrar mais de um usuário com um username/email já existente
- [x] É possível o usuário se logar no sistema
- [x] O usuário deve possuir um token de autorização com tempo de expiração

Tarefas

- [x] É possível cadastrar uma tarefa
- [x] Não é possível cadastrar uma tarefa sem um usuário logado
- [x] Não é possível cadastrar uma tarefa sem as informações de: Nome Da Tarefa, Urgência, Data de término.
- [x] Não deve ser possível cadastrar uma task com a data de termino menor do que a data de criação
