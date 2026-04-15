### MQTT — Retain Flag e Last Will and Testament (LWT)

### Retain Flag

No MQTT, uma mensagem com Retain Flag é uma mensagem especial que permanece registrada no broker mesmo após ter sido entregue aos clientes conectados no momento da publicação.

Isso garante que novos assinantes de um tópico recebam imediatamente a última mensagem publicada, sem que o publicador precise reenviá-la.

Essa funcionalidade é útil para tópicos de estado, como sensores que enviam leituras periódicas, quando for importante manter o último estado conhecido de um dispositivo ou informação. Assim, quando um novo cliente assina um tópico, ele recebe a última leitura sem depender de uma nova publicação.

### Impactos do Retain Flag no IoT

- Reduz a necessidade de novas publicações constantes  
- Melhora a inicialização de novos clientes no sistema  
- Pode causar inconsistências se a mensagem não for atualizada corretamente  


### Last Will and Testament (LWT)

O Last Will and Testament (LWT) é um recurso do MQTT que permite ao cliente definir uma mensagem "de despedida" que será publicada pelo broker caso a conexão do cliente se encerre de forma inesperada.

A configuração do LWT é feita durante o envio do pacote CONNECT, onde o cliente especifica:

- O tópico onde a mensagem será publicada  
- O conteúdo da mensagem  
- O nível de QoS  
- A flag de retenção (se necessário)  

O LWT é particularmente útil em aplicações que dependem do estado de presença ou conectividade de dispositivos, como painéis de status, alarmes e serviços críticos que precisam saber se um componente caiu.

### Impactos do LWT no IoT

- Permite identificar rapidamente falhas de conexão  
- Aumenta a confiabilidade do sistema  
- Pode gerar notificações indevidas em casos de instabilidade de rede  
