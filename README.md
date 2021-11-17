# Deploy - Process Managers
### Os Process Managers (PMs) foram criados para facilitar e tornar mais eficaz o gerenciamento de processos. Além disso, os PMs permitem aproveitar melhor os recursos do servidor, ajudando a garantir a disponibilidade das aplicações.

# PM2
### O PM2 é um PM popular, principalmente na comunidade Node.js. O PM2 foi feito com o intuito de auxiliar o gerenciamento de aplicações em ambiente de produção, permitindo manter suas aplicações sempre rodando, reiniciando-as quando necessário, sem downtime , e facilitando o gerenciamento dos processos.

# Start
### Executar um processo utilizando o PM2 é bem simples: basta utilizar o comando start . Imagine que temos um script rodando apenas com o Node.js. O exemplo abaixo ilustra como esse script seria executado com o PM2.

```cmd
pm2 start index.js
```

### Pode-se utilizar a flag name para nomear o processo. Se não definirmos explicitamente o nome do processo, ele terá o nome do arquivo que está sendo executado. No nosso caso, o nome do processo seria "index"
```cmd
pm2 start index.js --name <NOME_DO_PROCESSO>
```

# Stop

### Para parar um processo, basta executar o comando stop.

```cmd
pm2 stop <NOME_DO_PROCESSO>
```
### Esse comando somente interrompe o processo, permitindo iniciá-lo novamente utilizando o comando start .
```cmd
pm2 start <NOME_DO_PROCESSO>
```
### Caso queira executar um comando que terá efeito em todos os processos, basta usar all no lugar do nome do processo. Por exemplo, para parar todos os apps:
```cmd
pm2 stop all
```

# Delete

### Se você quiser excluir o app (o processo da aplicação) da lista de processo do PM2, utilize delete

```cmd
pm2 delete <NOME_DO_PROCESSO>
```
# Restart

### Para reiniciar um processo, utilize o comando restart
```cmd
pm2 restart <NOME_DO_PROCESSO>
```

# Reload

### Opostamente ao restart , o comando reload é 0-second-downtime , ou seja, não causa downtime em seu app. Isso acontece porque ele primeiro sobe o novo processo e depois finaliza o anterior.

```cmd
pm2 reload <NOME_DO_PROCESSO>
```