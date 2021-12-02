# Sockets - TCP/UDP & NET

## Por que isso é importante?
Sockets permitem a comunicação entre computadores. Um exemplo de sockets usados para comunicação são as APIs que desenvolvemos em aulas passadas. A comunicação feita entre um site e uma API (que está em um servidor remoto) é feita através de um socket.

Essa tecnologia existe na maioria dos sistemas operacionais e linguagens de programação, possibilitando a quem desenvolve o estabelecimento de comunicação de aplicações que necessitam transmitir/receber dados através da internet e, também, desenvolver serviços de rede, como servidores web, FTP , SSH ou qualquer outro baseado em TCP/IP.

## O que são Sockets?
Hoje em dia existem muitas tecnologias que permitem a troca de mensagem entre computadores. Uma das tecnologias mais utilizadas para essa comunicação são os sockets.

Um socket é um mecanismo de comunicação usado normalmente para implementar um sistema de cliente e servidor, sendo o cliente quem requisita um serviço e servidor quem executa esse serviço, assim como as APIs, que permitem a troca de mensagens entre máquinas/aplicações.

## Como isso funciona?
Imagine que, por exemplo, precisemos desenvolver uma aplicação que funcione como uma “sala” de chat. Na prática, essa aplicação irá receber uma conexão dos clientes/usuários e, posteriormente, se um cliente enviar uma mensagem, o servidor irá enviá-la para todos os outros clientes para que a mensagem seja exibida para todo mundo. Ou seja, um site pode precisar abrir uma conexão fixa e manter essa conexão aberta por muito tempo e, quando ela enviar uma mensagem, essa mesma mensagem será enviada para todas as outras pessoas usuárias, que também estão conectadas a esse servidor.

* ##  Modelo OSI, TCP e UDP

## Modelo de camadas OSI
O `Modelo OSI` (Open System Interconnection) é um modelo de rede de computador, referência da ISO , dividido em camadas de papéis. `ISO` é uma sigla para `International Organization for Standardization` , ou Organização Internacional para Padronização, em tradução livre. A ISO é uma entidade de padronização e normalização mundial que garante a qualidade de serviços, produtos, metodologias etc.

* Camada 1: Física
É a camada que estabelece a comunicação real entre os dois dispositivos por meio físico, seja através do cabo de internet, seja através de onda de radiofrequência, como por exemplo a wifi, dentre outras.
* Camada 2: Enlace (ligação/link de dados)
Faz o controle de fluxo da transmissão dos dados, detectando e corrigindo erros do nível físico como instabilidades, interferências, e recebe/passa tudo para a camada física.
* Camada 3: Rede
Realiza o endereçamento/mapeamento dos dispositivos na rede, ou seja, quais os caminhos que as informações devem percorrer desde a origem até o destino.
* Camada 4: Transporte
A camada de transporte garante a confiança do pacote, o qual chegará na máquina com todos os dados necessários e enviados, sem perdas, erros ou duplicidade, além de obedecerem a uma sequência lógica. A unidade dessa camada é o segmento, e os protocolos de transporte são o TCP e o UDP.
* Camada 5: Sessão
É responsável por manter o controle de quando iniciar, gerenciar e terminar a conexão entre os hosts . Ou seja, é essa camada que controla as duas ou mais máquinas que estão se comunicando.
* Camada 6: Apresentação
Esta camada realiza a conversão dos formatos dos dados, de forma que sejam utilizados na transmissão. Há a compressão e criptografia para que o receptor possa entender os dados.
* Camada 7: Aplicação
É com essa camada, que são os softwares, que nós, desenvolvedores/usuários, interagimos no nosso dia a dia. Essa camada é, basicamente, a interface com que interagimos. É nela que o HTTP, SMTP, FTP etc. atuam.

## Como funcionam essas camadas?
O funcionamento, no dispositivo emissor, é da camada 7 até a 1. A camada de cima (7) vai passar dados para a de baixo (6), que fará o chamado "encapsulamento" dos dados, acrescentando informações de controle que dizem respeito a ela.
Assim, vai ocorrendo o encapsulamento dos dados camada a camada, da 7 para a 1. Começamos com dados e terminamos com bits, que serão transmitidos pelo meio físico (camada 1).
Quando a informação chega ao dispositivo de rede receptor ocorre o processo inverso, conhecido como "desencapsulamento". Os bits recebidos passam de camada para camada até se tornarem dados novamente.

## TCP/IP
Apesar de o modelo OSI ser a referência para as redes e toda sua nomenclatura, a arquitetura TCP/IP é que implementa esse modelo na prática e está em uso hoje em dia, tanto nas redes internas (intranets) quanto na internet. A arquitetura TCP/IP é composta por apenas quatro camadas (formando a pilha da estrutura do protocolo). As camadas 5, 6 e 7 do modelo OSI foram mescladas para formar a camada de "Aplicação" do TCP/IP.
Já as camadas 3 e 4 do modelo OSI são similares às camadas 2 e 3 do TCP/IP, inclusive a camada de transporte do TCP/IP tem o mesmo nome, porém a camada 3 do modelo OSI (rede) no TCP/IP é chamada de "Internet".
Por fim, as camadas 1 e 2 do modelo OSI foram mescladas no TCP/IP para formar a camada de acesso aos meios ou acesso à rede.

### Resumindo tudo:
* O Modelo OSI possui sete camadas;
* O TCP/IP está dividido em quatro camadas;
* As camadas 1 e 2 do modelo OSI estão agregadas na camada 1 do TCP/IP ou, como é chamada, camada de Acesso aos Meios;
* A camada 3 do modelo OSI (Redes) é chamada de Internet no TCP/IP;
* A camada 4, tanto no modelo OSI como no TCP/IP, é chamada de Camada de Transporte;
* As camadas 5, 6 e 7 do modelo OSI são agregadas em uma só camada no TCP/IP, a qual é chamada de Camada de Aplicação.

### TCP e UDP
Nos protocolos TCP e UDP existe a camada 4 do modelo OSI (camada de transporte) e define-se nela como uma determinada informação é transmitida na rede.
Por essa convenção, numa máquina existem, teoricamente, 65.536 (2 elevado a 16) portas TCP que podem ser usadas pelas mais diversas aplicações/serviços (lembrando que as portas são virtuais, não existem físicamente no hardware). Lembra-se do nosso famoso " http://localhost:3000"? Pois bem, temos ai o protocolo HTTP, o endereço da nossa máquina, o localhost , ou 127.0.0.1 , e a nossa porta: 3000 .
Mas, voltando às nossas portas, poderíamos ter 65.536 aplicações/APIs distintas, executando simultaneamente na nossa máquina. Além das portas TCP, também temos, teoricamente, 65.536 portas UDP.

### Sockets TCP
Sockets são uma abstração para endereços de comunicação através dos quais as máquinas se comunicam. Cada endereço tem um identificador único, composto pelo endereço da máquina e o identificador local da porta usado pelo processo/software. Ou seja, o endereço é o nosso próprio IP, e a porta é a porta que conhecemos, 127.0.0.1:3000 , ou localhost:3000 .
O uso do endereço é para identificar as máquinas. Mas o uso das portas é mais específico: ele identifica uma aplicação. É por esse motivo que não podemos ter duas APIs na mesma porta. O processo de comunicação com sockets ocorre da seguinte forma:
O servidor tem uma aplicação que é posta em uma determinada porta e aguarda por conexões nessa porta. O cliente deve saber previamente qual o nome ou IP do servidor e a respectiva porta onde a aplicação foi colocada à espera de conexões. Por fim, o cliente solicita uma conexão ao host (servidor)
