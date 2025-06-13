# Use a imagem oficial do Node.js LTS
FROM node:22-alpine

# Diretório de trabalho dentro do container
WORKDIR /usr/src/app

# Copia package.json e package-lock.json para instalar dependências
COPY package*.json ./
RUN npm install --production

COPY . .

# Executa build do projeto
run npm i -g @nestjs/cli
RUN npm run build

# Expõe porta da aplicação NestJS
EXPOSE 3000

# Comando padrão para iniciar a aplicação
CMD ["node", "dist/main.js"]