# syntax=docker/dockerfile:1
# Build context: katalog z tym plikiem (tam gdzie package.json).
# W Dokploy/Dockploy ustaw ścieżkę buildu na folder zawierający ten Dockerfile.

FROM node:22-alpine AS builder
WORKDIR /app

COPY package.json package-lock.json ./
RUN npm ci

COPY . .
RUN npm run build -- --configuration production

FROM nginx:alpine
COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=builder /app/dist/grom/browser /usr/share/nginx/html

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
