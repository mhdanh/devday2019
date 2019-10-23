# stage: 1
FROM node:12 as build-stage
WORKDIR /app
COPY . ./
RUN npm install
RUN npm run build -- --output-path=./build --configuration=production

# stage: 2 — the production environment
FROM nginx:alpine
COPY — from=build-stage /app/build /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
