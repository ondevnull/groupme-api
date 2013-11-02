var Messages,
    __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };

/**
 *  Module: Messages
 *  ================
 **/
module.exports = Messages = (function() {

  /**
   *  <a name='constructor'></a>
   *  Constructor
   *  -----------
   **/
  function Messages(api, token) {
    this.api = api;
    this.token = token;

    // bindings
    this.index = __bind(this.index, this);
    this.create = __bind(this.create, this);
  }

  /**
   *  <a name='index'></a>
   *  Public: get a list of all messages by group ID
   *  ----------------------------------------------
   *
   *  id
   *  callback
   **/
  Messages.prototype.index = function(id, callback) {
    var self = this,
        h = require('./helpers'),
        helper = new h(self.api, self.token);

    return helper.get('/groups/' + id + '/messages', callback);
  };

  /**
   *  <a name='create'></a>
   *  Public: create a new message
   *  ----------------------------
   *
   *  id
   *  message
   *  callback
   **/
  Messages.prototype.create = function(id, message, callback) {
    var self = this,
        h = require('./helpers'),
        helper = new h(self.api, self.token);

    return helper.post('/groups/' + id + '/messages', message, callback);
  };

  return Messages;
})();
