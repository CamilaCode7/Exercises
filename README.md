## Introdução ao Heroku

O Heroku é um PaaS (Platform as a Service), o que significa que ele provém de uma plataforma em nuvem para configurar e realizar o deploy de maneira simples e fácil.
Para o Heroku, uma aplicação é um conjunto de códigos escritos em uma dessas linguagens citadas anteriormente, provavelmente utilizando um framework , com algumas dependências e descrições que indicam como rodá-la.
Um termo importante para ter na ponta da língua é build . No contexto de deploys , o build é como chamamos todo o processo em que o código é preparado para posteriormente ser executado. Por exemplo, é durante o build que se executa o npm install para instalar as dependências do projeto.

## Como funciona?
Para fazer um deploy com o Heroku , não é necessário realizar muitas alterações no projeto. O mais importante é o Heroku saber qual linguagem está sendo utilizada na sua aplicação e, caso esteja utilizando algum, qual o framework.
A partir dessas informações, o Heroku saberá, por exemplo, que é um projeto em Node.js e que, para executá-lo, ele terá que efetuar o comando descrito no campo scripts.start dentro do package.json (mais conhecido por npm start ).
Algumas linguagens não definem explicitamente o que deve ser feito para executar a aplicação. Pode acontecer, também, por algum motivo, de o Heroku não conseguir inferir como executar a aplicação. Para esses dois casos citados e outros, deve ser adicionado um Procfile à sua aplicação
