const mqtt = require("mqtt");

const broker = "mqtt://broker.hivemq.com";

const topicStatus = "iot/sensor/status";
const topicTemp = "iot/sensor/temperatura";

const client = mqtt.connect(broker);

client.on("connect", () => {
  console.log("Subscriber conectado!");

  client.subscribe([topicStatus, topicTemp], (err) => {
    if (!err) {
      console.log("Inscrito nos tópicos!");
    }
  });
});

client.on("message", (topic, message) => {
  console.log(`Mensagem recebida [${topic}]: ${message.toString()}`);
});