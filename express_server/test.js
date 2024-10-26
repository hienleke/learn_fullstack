const { sendMessage, receiveMessage , sendDirectMessage ,  sendFanoutMessage ,  sendTopicMessage } = require("./config/rabbitmq");

//sendMessage("example1", "this is message");
//sendDirectMessage('direct_logs', 'info', 'This is a direct message');
sendFanoutMessage('logs', 'This is a fanout message');
//sendTopicMessage('topic_logs', 'quick.orange.rabbit', 'This is a topic message');