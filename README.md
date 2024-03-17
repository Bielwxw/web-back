# Aplicação de Cookies e Sessões - Todolist 💻🍪🔐✨

Este projeto consiste em uma aplicação web para gerenciamento de lista de tarefas (todolist) com autenticação de usuários utilizando cookies e sessões. A aplicação foi desenvolvida com Express.js, EJS para renderização das páginas, Express Session para gerenciamento de sessões, Path para manipulação de caminhos de arquivos, Body-parser para análise de corpos de requisição em middleware e Multer para o upload de arquivos.


## Integrantes 🙋🏻‍♂️🤝🏻

| Função | Nome | Codenome |
|--------|------|----------|
| Professor | Leonardo Fernandes | Léo |
| Aluno | Gabriel Rodrigues | Ghost |

-----------------------------------------

## Funcionalidades 🚀

![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white)
![Logo do Node.js](https://img.shields.io/badge/Node.js-2B8244?style=for-the-badge&logo=node.js&logoColor=white)
![Logo do JavaScript](https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E)
![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB)
![Glitch](https://img.shields.io/badge/glitch-%233333FF.svg?style=for-the-badge&logo=glitch&logoColor=white)
<img src="https://www2.ifal.edu.br/acesso-a-sistemas/logo2.png/@@images/image.png" alt="Logo do Ifal" style="width:auto; height:28px;"/>


- **Cadastro e Login de Usuário:** Os usuários podem se cadastrar e fazer login na aplicação.
- **Autenticação de Usuário:** A aplicação verifica se o usuário está autenticado por meio de cookies e sessões.
- **Logout de Usuário:** Os usuários podem fazer logout da aplicação.
- **Adição de Tarefas:** Usuários autenticados podem adicionar tarefas à lista.
- **Visualização de Tarefas:** Usuários autenticados podem visualizar suas tarefas.
- **Marcação de Tarefas:** Usuários autenticados podem marcar tarefas como concluídas.
- **Exclusão de Tarefas:** Usuários autenticados podem excluir tarefas da lista.

## Tecnologias Utilizadas 🛠✨



- **Express.js:** Framework web para Node.js.
- **EJS (Embedded JavaScript):** Utilizado para a renderização de páginas HTML com JavaScript embutido.
- **Express Session:** Middleware para gerenciamento de sessões em Express.
- **Path:** Módulo do Node.js para manipulação de caminhos de arquivos e diretórios.
- **Body-parser:** Middleware utilizado para analisar corpos de requisição em middleware.
- **Multer:** Middleware utilizado para o upload de arquivos.

## Instalação 📂

1. Clone o repositório:
2. Instale as dependências:
3. Execute o servidor:
4. Acesse a aplicação pelo navegador em `http://localhost:3000`.
5. Deplot da aplicação ;

--------------------------------


## Como Usar 📌📝

1. Na página inicial, faça login.
2. Após o login, você será redirecionado para a página principal do Todolist , ao qual terá acesso a todas as funções da aplicação.
3. Adicione tarefas à sua lista.
4. Marque tarefas como concluídas quando terminar.
5. Para sair, clique em "Logout" para encerrar sua sessão.

## Estrutura do Projeto 💭

- **`server.js`:** Arquivo principal que configura o servidor Express.
- **`views/`:** Pasta contendo os arquivos de visualização EJS.
- **`public/`:** Pasta para arquivos estáticos, como CSS e imagens.
- **`routes/`:** Pasta para definir as rotas da aplicação.
- **`middlewares/`:** Pasta para armazenar middlewares personalizados, como a verificação de usuário logado.
- **`models/`:** Pasta para definição dos modelos de dados, como o modelo de usuário e de tarefa.

-----------------------------------------------------------------











