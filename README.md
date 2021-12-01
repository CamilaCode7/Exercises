# Arquitetura de Software - Camada de View

## Por que isso é importante?
O MVC é um dos padrões arquiteturais mais utilizados no mercado. Inclusive, frameworks como Ruby on Rails e Cake PHP adotam o MVC como estrutura para suas aplicações

## O que é MVC?
MVC é uma sigla para Model-View-Controller , um dos mais antigos e mais utilizados padrões de arquitetura de software.
Como todo padrão de arquitetura, o MVC organiza e divide o código de uma aplicação em camadas, cada uma com suas responsabilidades. Ele é composto por três camadas, a camada de modelo (Model), a camada de apresentação/visão (View) e a camada de controle (Controller).

## Model e Controller
O model ainda é onde manipulamos e definimos a estrutura dos dados, sendo que todo acesso aos dados deve passar por essa camada. E o controller ainda é responsável por receber as requisições e enviar as respostas, mas agora ele faz a ponte entre a view e o model , recebendo as ações da view e decidindo o que deve ser mostrado para a pessoa realizando a ação, após consultar o modelo, se necessário.

## View

A view é a camada de apresentação, ou seja, a parte que tem contato com a pessoa que está usando nosso sistema. Serve basicamente como input e output de dados. Ela é responsável por duas coisas: criar a visualização dos dados vindos do model e fornecer meios para que a pessoa possa interagir com o sistema.
A view se comunica com o controller (recebendo ordens do que exibir e comunicando eventos que ocorrem à medida que a pessoa interage com o sistema) e com o model , recebendo os dados que deve apresentar.
Aqui, mais uma vez, vemos os benefícios da separação de responsabilidades: como a view se encarrega somente de exibir uma representação dos dados, ela não precisa saber como eles são armazenados.