FROM node:20-alpine

WORKDIR /app
COPY package*.json ./

RUN npm install ci --only=production
COPY . .

RUN npm run build
EXPOSE 3000
CMD ["npm", "run", "start"]
