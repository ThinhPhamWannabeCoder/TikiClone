FROM node:20-alpine

WORKDIR /client

COPY package.json .
COPY tsconfig.json .
COPY package-lock.json .

RUN npm i

COPY . .

## EXPOSE [Port you mentioned in the vite.config file]

EXPOSE 5173

CMD ["npm", "run", "dev"]