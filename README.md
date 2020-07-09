# graphql-no-data-base
Projetinho de GraphQL em Node JS sem a utilização de bando de dados.  

## Criando o projeto
Para utilização do projeto basta fazer um git clone, mas aqui seguem os passos de como criar o projeto do zero: 
1) Cria uma pasta e entra nela: **mkdir minha_pasta** e **cd minha_pasta**
2) Inicializa o package.json: **npm init -y** ou **yarn init -y**
3) Instala o apolo-server e o graphql: **npm i apollo-server graphql** ou **yarn add apollo-server graphql**
4) Na raíz do projeto cria uma pasta **src** e um arquivo **index.js**

### Nodemon
Dependência para ser utilizada apenas no ambiente de desenvolvimento.  
Ela faz com que ao salvar alguma alteração o servidor faça a atualização semprecisar parar e executar novamente.  
- Instalação:  
**npm install -D nodemon**

- Utilização:  
1) Acessa o package.json  
2) Em scripts, cria uma nova propriedade informando o local onde está o server, no caso está em **src**.
  2.1- Criando o comando: **"dev": "nodemon src/server.js"**  
3) No terminal executa a aplicação usando o comando: **npm run dev**  
Obs.: O npm run serve para executar os comandos que estão em script  

### Executando a aplicação
**npm run dev** ou **yarn dev**
