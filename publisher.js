const mqtt = require("mqtt");

const broker = "mqtt://broker.hivemq.com";

const topicStatus = "iot/sensor/status";
const topicTemp = "iot/sensor/temperatura";

const client = mqtt.connect(broker, {
  will: {
    topic: topicStatus,
    payload: "offline",
    qos: 1,
    retain: true
  }
});

client.on("connect", () => {
  console.log("Publisher conectado!");

  // publica que está online (com retain)
  client.publish(topicStatus, "online", { retain: true });

  setInterval(() => {
    const temperatura = Math.floor(Math.random() * 10) + 20;

    client.publish(topicTemp, temperatura.toString(), {
      retain: true
    });

    console.log("Temperatura enviada:", temperatura);
  }, 5000);
});

process.on("SIGINT", () => {
  console.log("\nEncerrando publisher...");

  client.publish(topicStatus, "offline", { retain: true }, () => {
    client.end();
    process.exit();
  });
});