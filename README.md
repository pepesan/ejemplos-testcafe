# ejemplos-testcafe

## Requisitos
Instalar el chromedriver con la versión de chrome disponible

## ejecutar pruebas
npm test

## ejecutar sólo un test

testcafe chrome test/prueba.js

## ejecutar con concurrencia

testcafe chrome ./test/ --concurrency 3

## ejecutar prueba cucumber
npm run cucumber
## ejecutar prueba cucumber prueba especifica
npm run cucumber .features/test.feature