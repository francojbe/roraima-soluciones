# Stage 1: Build the React application
FROM node:20-alpine as build

WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm ci --legacy-peer-deps

# Copy source code
COPY . .

# Build the application
RUN npm run build

# Stage 2: Serve with Node.js
FROM node:20-alpine

WORKDIR /app

# Copy package files (for production install of server deps)
COPY package*.json ./

# Install ONLY production dependencies (no dev deps like vite)
RUN npm install --omit=dev --legacy-peer-deps

# Copy server code
COPY server ./server

# Copy built frontend from build stage
COPY --from=build /app/dist ./dist

# Create uploads directory
RUN mkdir -p /app/data/uploads

ENV PORT=3000
EXPOSE 3000

CMD ["node", "server/index.js"]
