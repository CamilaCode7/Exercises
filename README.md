# Arquitetura de Software
# Aprender a melhorar a organização e a divisão de responsabilidades em suas aplicações Node.js e Express,utilizando um dos padrões arquiteturais mais famosos do mercado: o MSC !

# O que é "Arquitetura de Software"?

É a maneira como o sistema se organiza, quais são seus componentes, como eles conversam entre si, como as responsabilidades são distribuídas e etc.

# Regras de negócio

regras de negócio definem ou restringem algum aspecto de um negócio . São elas que definem como o negócio deve se comportar, quando uma ação deve ser tomada e etc. As regras de negócio devem ser muito bem definidas e documentadas, pois guiam as tomadas de decisões e moldam processos.

# Arquitetura MSC

# Camada de Modelo (M):
 Arquivos onde ira executar as operações do banco de dados, como criar conexões e executar queries.

# Camada de Serviço (S):
Arquivos onde ira estruturar as regras de negócio, geralmente é quem chama os métodos definidos na camada de modelo.

# Camada de Controladores (C):
Interface mais próxima da pessoa usuária ou de uma requisição, vai processar e chamar as devidas funções da camada de serviço.