# stage: 1
#FROM node:12 as react-build
#WORKDIR /app
#COPY . ./
#RUN npm install
#RUN npm install http-server
#RUN npm run publish

# stage: 2 — the production environment
#FROM nginx:alpine
#COPY — from=react-build /app/build /usr/share/nginx/html
#EXPOSE 80
#CMD ["nginx", "-g", "daemon off;"]

FROM nginx:alpine
COPY /build /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
