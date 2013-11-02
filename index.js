var api = 'https://api.groupme.com/v3',
    Messages = require('./lib/messages');

module.exports.messages = function(token) {
  return new Messages(api, token);
}

module.exports = function(token) {
  return {
    messages: new Messages(api, token)
  }
}
