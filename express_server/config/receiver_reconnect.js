const amqp = require("amqplib");

const queue = "NewQUEUE";

var connection;

//  Connect RabbitMQ
async function connectRabbitMQ() {
     try {
          connection = await amqp.connect("amqps://zzelcqqc:po4UULPginCZwyspR8JhJ730abutkKJo@cougar.rmq.cloudamqp.com/zzelcqqc");

          console.info("connect to RabbitMQ success");

          const channel = await connection.createChannel();
          const exchange = "exchange_name";
          await channel.assertExchange(exchange, "fanout", { durable: false });

          const { queue } = await channel.assertQueue("");

          console.log(" name queue: ", queue);

          await channel.bindQueue(queue, exchange, "");
          await channel.consume(queue, async function (message) {
               console.log(message.content.toString());
               channel.ack(message);
          });

          connection.on("error", function (err) {
               console.log(err);
               setTimeout(connectRabbitMQ, 10000);
          });

          connection.on("close", function () {
               console.error("connection to RabbitQM closed!");
               setTimeout(connectRabbitMQ, 10000);
          });
     } catch (err) {
          console.error(err);
          setTimeout(connectRabbitMQ, 10000);
     }
}
connectRabbitMQ();
