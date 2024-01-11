const amqp = require("amqplib");

const queue = "NewQUEUE";

var connection;

// Kết nối RabbitMQ
async function connectRabbitMQ() {
     try {
          console.info("connect to RabbitMQ success");

          const channel = await connection.createChannel();

          const exchange = "exchange_name";

          await channel.assertExchange(exchange, "fanout", { durable: false });

          await channel.publish(exchange, "", Buffer.from("Hello, Anonystick hien vip 1!"), {
               // RabbitMQ - Khi khởi động lại, tiếp tục chạy
               persistent: true,
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
