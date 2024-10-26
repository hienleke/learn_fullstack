
const {  receiveMessage , listenTopicMessages , listenDirectMessages  , listenFanoutMessages  } = require("./config/rabbitmq");

const exchangeName = 'direct_logs';
const routingKey = 'info'; // Change routing key as needed for testing

// Start listening for messages
//listenDirectMessages(exchangeName, routingKey);
listenFanoutMessages('logs'); // Fanout Exchange
//listenTopicMessages('topic_logs', 'quick.orange.#'); // T
