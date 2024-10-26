const amqp = require("amqplib");
const config = require("config");

const rbmq_url = config.get("rabbitmq.url");
// Function to send a message to a Direct Exchange
async function sendDirectMessage(exchange, routingKey, message) {
     const connection = await amqp.connect(rbmq_url);
     const channel = await connection.createChannel();
 
     await channel.assertExchange(exchange, 'direct', { durable: false });
 
     channel.publish(exchange, routingKey, Buffer.from(message));
     console.log(`Sent message "${message}" to Direct Exchange "${exchange}" with routing key "${routingKey}"`);
 
     setTimeout(() => {
         connection.close();
         process.exit(0);
     }, 500);
 }
 
 // Function to send a message to a Fanout Exchange
 async function sendFanoutMessage(exchange, message) {
     const connection = await amqp.connect(rbmq_url);
     const channel = await connection.createChannel();
 
     await channel.assertExchange(exchange, 'fanout', { durable: true });
 
     channel.publish(exchange, '', Buffer.from(message)); // No routing key for fanout
     console.log(`Sent message "${message}" to Fanout Exchange "${exchange}"`);
 
     setTimeout(() => {
         connection.close();
         process.exit(0);
     }, 500);
 }
 
 // Function to send a message to a Topic Exchange
 async function sendTopicMessage(exchange, routingKey, message) {
     const connection = await amqp.connect(rbmq_url);
     const channel = await connection.createChannel();
 
     await channel.assertExchange(exchange, 'topic', { durable: false });
 
     const topicQueue = await channel.assertQueue('topic_queue', { durable: false });

     // Bind the queue to the exchange with multiple routing keys
     const routingKeys = ['quick.*', 'lazy.#']; // Bindings with patterns
     for (const routingKey of routingKeys) {
         await channel.bindQueue(topicQueue.queue, topicExchange, routingKey);
         console.log(`Queue "${topicQueue.queue}" bound to Topic Exchange "${topicExchange}" with routing key "${routingKey}"`);
     }
     setTimeout(() => {
         connection.close();
         process.exit(0);
     }, 500);
 }
 
 async function listenTopicMessages(exchange, routingKey) {
     const connection = await amqp.connect(rbmq_url);
     const channel = await connection.createChannel();
 
     await channel.assertExchange(exchange, 'topic', { durable: false });
 
     const { queue } = await channel.assertQueue('', { exclusive: true });
     channel.bindQueue(queue, exchange, routingKey);
 
     console.log(`Waiting for messages in Topic Exchange "${exchange}" with routing key "${routingKey}". To exit press CTRL+C`);
 
     channel.consume(queue, (msg) => {
         if (msg !== null) {
             console.log(`Received from Topic Exchange: ${msg.content.toString()}`);
             channel.ack(msg);
         }
     });
 }

async function receiveMessage(queue) {
     const connection = await amqp.connect(rbmq_url);
     const channel = await connection.createChannel();

     await channel.assertQueue(queue, { durable: false });

     console.log(`Waiting for messages on queue "${queue}". To exit press CTRL+C`);

     channel.consume(queue, (msg) => {
          if (msg !== null) {
               console.log(`Received message: ${msg.content.toString()}`);
               channel.ack(msg);
          }
     });
}

async function listenFanoutMessages(exchange) {
     const connection = await amqp.connect(rbmq_url);
     const channel = await connection.createChannel();
 
     await channel.assertExchange(exchange, 'fanout', { durable: false });
     
     const { queue } = await channel.assertQueue('', { exclusive: true });
     channel.bindQueue(queue, exchange, '');
 
     console.log(`Waiting for messages in Fanout Exchange "${exchange}". To exit press CTRL+C`);
 
     channel.consume(queue, (msg) => {
         if (msg !== null) {
             console.log(`Received from Fanout Exchange: ${msg.content.toString()}`);
             channel.ack(msg);
         }
     });
 }
 async function listenDirectMessages(exchange, routingKey) {
     const connection = await amqp.connect(rbmq_url);
     const channel = await connection.createChannel();
 
     await channel.assertExchange(exchange, 'direct', { durable: false });
     
     const { queue } = await channel.assertQueue('', { exclusive: true });
     channel.bindQueue(queue, exchange, routingKey);
 
     console.log(`Waiting for messages in Direct Exchange "${exchange}" with routing key "${routingKey}". To exit press CTRL+C`);
 
     channel.consume(queue, (msg) => {
         if (msg !== null) {
             console.log(`Received from Direct Exchange: ${msg.content.toString()}`);
             channel.ack(msg);
         }
     });
 }

module.exports = { sendDirectMessage, sendFanoutMessage, sendTopicMessage, receiveMessage , listenDirectMessages , listenFanoutMessages , listenTopicMessages };
