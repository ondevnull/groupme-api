var Helper;

module.exports = Helper = (function() {

  function Helper(api, token) {
    this.api = api;
    this.token = token;
  }

  Helper.prototype.get = function(url, callback) {
    var self = this,
        request = require('request');

    request({
      method: 'GET',
      uri: self.api + url + '?token=' + self.token
    }, function (err, response, body) {
      if (err)
        return callback(err);

      if (response.statusCode == 200)
        return callback(null, JSON.parse(body));

      return callback(new Error("Something went wrong: \n" + response.statusCode + "\n" + body));
    });
  };

  Helper.prototype.post = function(url, data, callback) {
    var self = this,
        request = require('request');

    request({
      method: 'POST',
      uri: self.api + url + '?token=' + self.token,
      body: JSON.stringify(data)
    }, function(err, response, body) {
      if (err)
        return callback(err);

      if (response.statusCode == 201)
        return callback(null, JSON.parse(body));

      return callback(new Error("Something went wrong: \n" + response.statusCode + "\n" + body));
    });
  };

  return Helper;
})();
