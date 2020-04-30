#Abrir sessão do Azure e acessar o CloudShell
#Selecionar linguagem Bash
#Escolher um nome para o aplicativo e executar o seguinte comando

mkdir 'nomedoaplicativo'

#Acessar a nova pasta e inicalize o novo aplicativo do Node.js criado

cd 'nomedoaplicativo
npm init -y

#Crie um arquivo de origem index.js

touch index.js

#Abra o arquivo index com editor

code .

#após acessado a tela do aplicativo, acessar o menu index.js e inserir o primeiro script

#!/usr/bin/env node

function main() {
    console.log('Hello, World!');
}

main();

#salve o arquivo através das reticências, localizada na parte superior direita "..."

#Execute o aplicativo

node index.js


