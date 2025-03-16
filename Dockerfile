FROM node:18-alpine AS base

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

# Development stage
FROM base as dev
EXPOSE 3000
CMD ["npm", "run","dev"]

# Production Stage
FROM base as prod
RUN npm run build
CMD ["npx","serve","-s","build"]
