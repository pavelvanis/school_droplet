# Použití oficiálního Node.js obrazu s LTS verzí pro vývoj
FROM node:18-alpine3.17

# Vytvoření adresáře pro aplikaci v kontejneru
WORKDIR /app

# Zkopírování souborů package.json a package-lock.json pro efektivní instalaci závislostí
COPY package*.json ./

# Instalace závislostí (včetně devDependencies, protože jste v režimu vývoje)
RUN npm install

# Spuštění vývojového serveru Next.js
CMD ["npm", "run", "dev"]
