# Usar LINTER
- PRIMERO ENTRAR EN EL DIRECTORIO DONDE SE ENCUENTRA EL REPOSITORIO:

cd "C:\Users\mjmar\Desktop\DAW\2 CURSO\DESARROLLO WEB ENTORNO CLIENTE\linter\linter-template"
dir 
- ANALIZAR TODO EL PROYECTO:

npm run eslint  -- .

- ANALIZAR SOLO UN ARCHIVO 

npm run eslintfile -- src/prueba.js  (prueba.js es el nombre del archivo)

- ALTERNATIVA RAPIDA

npx eslint src/prueba.js          # un archivo
npx eslint .                      # todo el proyecto
