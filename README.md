
# Teste técnico Alfasoft

Esse projeto está dividido em dois repositórios:

https://github.com/AwdreyCandido/alfasoft-api

https://github.com/AwdreyCandido/alfasoft-client

#### Stack escolhida para a API:

- Node.js + Express         → Servidor e criação das rotas da API
- MySQL + mysql2            → Banco de dados e conexão com o Node.js
- JWT para autenticação     → Criação e validação de tokens de acesso
- bcrypt para criptografia  → Criptografia de senhas e dados sensíveis
- dotenv variáveis de ambiente → Gerenciamento de configurações e segredos

#### Stack escolhida para o Frontend:

- Vue 3                     → Framework para criar a interface do usuário
- Vue Router                → Navegação entre páginas da aplicação
- Pinia                     → Gerenciamento de estado da aplicação
- Axios                     → Realizar requisições HTTP para a API
- Vite                      → Ferramenta para desenvolvimento rápido e build do frontend
- TypeScript                → Adiciona tipagem estática e maior segurança ao código

#

Decidi manter o projeto com Express, uma vez que eram necessárias apenas algumas rotas, mas optei por organizar a estrutura de pastas de forma semelhante ao NestJs, visando melhor escalabilidade e manutenção.

#

Alguns pontos que reconheço que poderiam ser melhorados no código:

- Validação das requisições: poderia ter implementado uma validação mais completa e consistente do corpo das requisições nos controllers.

- Tratamento de erros: não implementei tratamento global ou dedicado de erros, o que deixaria a API mais robusta.

- Try/catch nas conexões com o banco: em alguns pontos, não utilizei try/catch nas operações com o banco de dados, o que poderia gerar falhas silenciosas.

- Uso de ORM: poderia ter incorporado um ORM, como TypeORM ou Prisma, para facilitar a gestão das entidades e reduzir queries manuais.



## Como instalar e rodar

#### 👉 Clonar os repositórios

```
git clone https://github.com/AwdreyCandido/alfasoft-api

git clone https://github.com/AwdreyCandido/alfasoft-client
```


#### 👉 Instalar dependências
No diretório da API:

```
cd alfasoft-api
npm install
```

No diretório do Client:
```
cd alfasoft-client
npm install
```


Configurar variáveis de ambiente
Crie um arquivo ``.env`` na raiz da API com as seguintes variáveis:
```
DB_HOST=localhost
DB_USER=seu_usuario
DB_PASS=sua_senha
DB_NAME=nome_do_banco
JWT_SECRET=sua_chave_secreta
```


#### ⚙️ Rodar a API

```
npm run dev
```


#### ⚙️ Rodar o Client

```
npm run dev
```


#### Após isso, a API estará disponível em http://localhost:3000 e o Client normalmente em http://localhost:5173 (ou porta indicada pelo Vite).
