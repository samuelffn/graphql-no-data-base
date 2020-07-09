# graphql-no-data-base
Projetinho de GraphQL em Node JS sem a utilização de bando de dados.  

## Dependências utilizadas no projeto
### nodemon
**npm install -D nodemon**  
Dependência para ser utilizada apenas no ambiente de desenvolvimento.  
Ela faz com que ao salvar alguma alteração o servidor faça a atualização semprecisar parar e executar novamente.  
Utilização:  
1) Acessa o package.json  
2) Em scripts, cria uma nova propriedade informando o local onde está o server, no caso está em **src**.
Criando o comando: **"dev": "nodemon src/server.js"**  
3) No terminal executa a aplicação usando o comando: **npm run dev**  
Obs.: O npm run serve para executar os comandos que estão em script  

