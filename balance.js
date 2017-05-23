var randNum = require('./randNum');
var dollar = require('./convert');

function createMessage() {
 var message = 'Account Balance: \n';
 message += dollar(randNum(100, 1000000));
 return message;
}

module.exports = createMessage;
