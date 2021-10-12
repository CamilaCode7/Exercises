# Model
O model é onde nós manipulamos e definimos a estrutura dos nossos dados. Todo acesso aos dados deve passar por essa camada.
Os dados que a aplicação utiliza podem estar armazenados em um banco de dados, acessados através de uma API externa, arquivos ou outros dispositivos de armazenamento.

O model é responsável por abstrair completamente os detalhes de acesso e armazenamento, fornecendo somente uma API que permita requisitar e manipular esses dados. Por exemplo, é responsabilidade da camada de models estabelecer uma conexão com o banco de dados.

Para comunicar com o MySQL, precisa de um driver. Um driver é um software que permite comunicação com o banco de dados a partir de uma aplicação. " npm install mysql2 "

# Criando o model
A primeira coisa é criar uma rota que retornará uma lista com os nomes de todos os autores. Queremos também que seja exibido o nome completo do escritor, que será a concatenação do primeiro nome, nome do meio (se houver) e sobrenome.

Haverá uma entidade chamada Author na aplicação.

A entidade vai conter os campos firstName , middleName e lastName. Os nomes estão em camelCase , enquanto as colunas do banco estão em snake_case.

No código, um objeto contendo os campos mencionados acima será utilizado para representar um autor.

Existirão funções para ler e criar escritores do banco de dados.

A rota só irá interagir com os dados através da interface do model Author .