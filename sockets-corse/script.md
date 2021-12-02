# Sockets

## close
* "hadError": `boolean|true`, se o socket tiver um erro de transmissão;
* Emitido quando o soquete estiver totalmente fechado. O argumento "hadError" é um booleano que indica se o soquete foi fechado devido a um erro de transmissão.

## connect
* Emitido quando uma conexão de soquete é estabelecida com sucesso.

## data
* Buffer | string;
* Emitido quando os dados são recebidos. O argumento "data" será um Buffer ou String. A codificação de dados é definida por `socket.setEncoding()`.
* Os dados serão perdidos se não houver um ouvinte quando um socket emitir um "data" evento.

## drain
* Emitido quando o buffer de gravação fica vazio. Pode ser usado para acelerar envios;
* Consulte também: os valores de retorno de `socket.write()`.

## end
* Emitido quando a outra extremidade do socket envia um pacote "FIN", finalizando assim o lado legível do socket.
* Por padrão (`allowHalfOpen` é false), o socket envia um pacote FIN de volta e destrói seu descritor de arquivo depois de gravar sua fila de gravação pendente. No entanto, se `allowHalfOpen` estiver definido como true, o socket não terá automaticamente o "end()", seu lado gravável, permitindo que o usuário grave quantidades arbitrárias de dados. O usuário deve ligar o `end()` explicitamente para fechar a conexão (isto é, enviar um pacote FIN de volta).

## error
* `Erro` ;
* Emitido quando ocorre um erro. O evento "close" será chamado diretamente após esse evento.

## lookup
* Emitido após resolver o nome do host, mas antes de conectar. Não aplicável a sockets Unix;
* "err": `<Erro> | <nulo>` é o objeto de erro;
* "address": `<string>` é o endereço IP;
* "family": `<string> | <null>` é o tipo de endereço;
* "host": `<string>` é o nome do host.

## ready
* Emitido quando um socket está pronto para ser usado;
* Disparado imediatamente depois do 'connect'.

## timeout
Emitido se o socket exceder o tempo de inatividade. Isso é apenas para notificar que o socket está ocioso. O usuário deve fechar manualmente a conexão.
