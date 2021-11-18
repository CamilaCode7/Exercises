## Exercício

1. ##  Crie uma API simples que retorne uma mensagem. Feito isso, gerencie seus processos da seguinte maneira:

* Crie UM processo no PM2 utilizando o CLI;
```cmd
pm2 start index.js --name index-origin
```
* Restart e recarregue o processo utilizando o CLI do PM2 (lembre-se que há comandos distintos para cada um);
```cmd
pm2 restart index-origin
pm2 reload index-origin
```
* Pare o processo;
```cmd
pm2 stop index-origin
```
* (Bônus) - Escalone para mais 5 processos;
```cmd
pm2 scale index-origin +5
```
* (Bônus) - Defina para 3 a quantidade de processos;
```cmd
pm2 scale index-origin 3
```
* Remova o processo da listagem do PM2;
```cmd
pm2 delete index-origin
```

2. ## Crie um arquivo ecosystem . O arquivo configurará o PM2 para

* Observar alterações no diretório da aplicação e, caso ocorram, reiniciar automaticamente sua aplicação;
* Ativar o modo cluster e configurar a quantidade de processos rodando para o máximo possível;
* Reiniciar o processo sempre que ele alcançar o consumo de 100MB de memória.

3. ## Explorando variáveis de ambiente

* Adicione à API o uso de uma variável de ambiente que altere a mensagem exibida em sua resposta ou outro comportamento que preferir;
* Adicione ao arquivo ecosystem do exercício anterior dois contextos de variáveis: env_prod e env_homolog .
* Execute o processo utilizando o contexto prod . Em seguida, execute o processo utilizando o contexto homolog . Valide se o comportamento foi alterado.
```cmd
pm2 start ecosystem.config.yml --env prod
pm2 start ecosystem.config.yml --env homolog
```
4. ##  Adicione monitoramento à sua API

* Crie uma conta no PM2;
* Adicione o monitoramento à API dos exercícios anteriores, utilizando o comando do CLI do PM2;
* Verifique se o dashboard web está exibindo as informações de sua API.