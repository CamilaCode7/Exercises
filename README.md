## Arquitetura - Princípios SOLID

Falar de SOLID significa falar de qualidade de código. A arquitetura SOLID é vastamente usada pelo mundo para criar aplicações de software fáceis de se manter e alterar ao longo do tempo. Embora parte dos princípios seja voltada especificamente para Programação Orientada a Objeto(POO).
## O que exatamente é SOLID?
A palavra solid (sólido) no contexto de programação, é um acrônimo para cinco princípios e que de fato, se aplicados de maneira conjunta e inteligente, geram solidez e durabilidade para sua arquitetura como um todo. Nas definições originais, SOLID significa o seguinte:

* S ingle responsibility principle ( Princípio da responsabilidade única ): uma classe deve ter apenas uma única responsabilidade;

* O pen/Closed principle ( Princípio aberto/fechado ): entidades de software devem ser abertas para extensão, mas fechadas para modificação;

* L iskov substitution principle ( Princípio de substituição de Liskov ): objetos em um programa devem ser substituíveis por instâncias de seus subtipos, sem alterar a funcionalidade do programa;

* I nterface segregation principle ( Princípio da segregação da interface ): muitas interfaces de clientes específicas são melhores do que uma para todos os propósitos;

* D ependency inversion principle ( Princípio da inversão da dependência ): deve-se depender de abstrações, não de objetos concretos.

## Single responsibility principle
A regra de Complexidade Cognitiva. Em poucas palavras, essa regra, como outras em conjunto (Complexidade Ciclomática, Número máximo de linhas por função Número máximo de caracteres por linha, entre outros) garante que nenhuma de suas funções é complicada demais. Se ela é muito grande e/ou muito confusa, a regra te alerta para que deixe seu código menor e mais simples.
