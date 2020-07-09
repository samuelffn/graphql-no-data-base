# api-graphql-sem-banco-de-dados
Projetinho de GraphQL em Node JS sem a utilização de bando de dados.  

## Para usar a API  
1) Baixa o diretório do projeto: **git clone https://github.com/samuelffn/api-graphql-sem-banco-de-dados.git** 
2) Baixa as dependências do projeto: **npm i** ou **yarn install** 
3) **npm run start** ou **yarn start**  

## Testando a API
1) Executando no terminal: **npm run start** ou **yarn start**  
2) Abra o navegador e acesse: **http://localhost:4000**  
3) Observe que o navegador que o **Playground** já é carregado. Ele é como um Insomnia ou Postman da vida. No Playground faremos os nossos testes. 
4) Na área abaixo da URL digite a query:  
No lado esquerdo digite:  
```
  query {
    hello   // É o nome da Query que criamos no nosso Schema
  }
```
O resultado será mostrado no lado direito:  
```
  {
    "data": {
      "hello": "Hello world"   // Nossa query "hello" retornou a frase "Hello world" que definimos no response
    }
  }
```
5) Observe que o Playground gerar uma mini documentação da API, basta clicar nas abas localizadas no lado direito da tela: **Docs** e **Schema**.  

## Informações sobre a criação do projeto
Para utilização do projeto basta fazer um git clone conforme informado anteriormente, mas aqui neste tópico seguem os passos de como criar o projeto do zero: 
1) Cria uma pasta e entra nela: **mkdir minha_pasta** e **cd minha_pasta**
2) Inicializa o package.json: **npm init -y** ou **yarn init -y**
3) Instala o apolo-server e o graphql: **npm i apollo-server graphql** ou **yarn add apollo-server graphql**
4) Na raíz do projeto cria uma pasta **src** e um arquivo **index.js**

### Nodemon  
Dependência para ser utilizada apenas no ambiente de *desenvolvimento*.  
Ela faz com que ao salvar alguma alteração o servidor faça a atualização semprecisar parar e executar novamente.  
- Instalação:  
**npm install -D nodemon**  

- Utilização:  
1) Acessa o package.json  
2) Em scripts, cria uma nova propriedade informando o local onde está o server, no caso está em **src**  
  2.1- Criando o comando: **"start": "nodemon src/index.js",** ou **"start": "npx nodemon src/index.js",**  
  2.2- O nome **dev** pode ser o que você quiser. Ex.: **"dev": "nodemon src/index.js",**   
3) No terminal executa a aplicação usando o comando: **npm run dev**  
Obs.: O npm run serve para executar os comandos que estão em script  

### Executando a aplicação
**npm run start** ou **yarn start**

### Código inicial para um Hello World
**index.js**  
```
  const { apolloServer, gql, ApolloServer } = require('apollo-server');

  const typeDefs = gql`  // Definindo o meu Schema
      type Query {
          hello: String
      }
  `;
  const resolvers = {    // Definindo os meu resolvers
      Query: {
          hello: () => 'Hello world'
      }
  };

  const server = new ApolloServer({ typeDefs, resolvers }); // Criando o Apollo com os meus schemas e resolvers
  server.listen().then(({ url }) => console.log(`Server started at ${url}`)); // Startando o meu server, que por padrão roda na porta 4000
```
### Exemplos para requisições no Playground
**Query**  
*hello*  
```
{
  hello
}
```  

*users*  
```
query {
	users {
    id name email active
  }
}
```  

*getUserByEmail*  
```
query {
    getUserByEmail(email: "samuel@mail.com") {
        id name email active
    }
}
```  

**Mutation**  
*createUser*  
```
mutation {
    createUser (name: "França", email: "franca@mail.com") {
        id name email active
    }
}
```  





