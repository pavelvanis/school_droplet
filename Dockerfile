# Použijete oficiální Node.js obraz s konkrétní verzí (21 je neexistující verze, zvolte platnou verzi)
FROM node:21

# Nastavíte pracovní adresář v kontejneru
WORKDIR /app

# Kopírujete package.json a package-lock.json (pokud existuje) do kontejneru
COPY package*.json ./

# Spustíte npm ci pro rychlou a konzistentní instalaci závislostí
RUN npm ci

# Kopírujete zbytek projektu do kontejneru
COPY . .

# Spustíte příkaz pro sestavení projektu (např. npm run build)
RUN npm run build

# Definujete příkaz pro spuštění aplikace (např. npm start)
CMD ["npm", "start"]
