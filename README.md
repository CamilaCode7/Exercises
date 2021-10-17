# Exercises
# Arquitetura MSC
Camada de Modelo (M):
Arquivos onde ira executar as operações do banco de dados, como criar conexões e executar queries.

# Camada de Serviço (S):
Arquivos onde ira estruturar as regras de negócio, geralmente é quem chama os métodos definidos na camada de modelo.

# Camada de Controladores (C):
Interface mais próxima da pessoa usuária ou de uma requisição, vai processar e chamar as devidas funções da camada de serviço.