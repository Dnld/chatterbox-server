var _ = require("../node_modules/underscore/underscore.js");

exports.storage = [];

exports.getMessage = function() {
  var temp = {};
  temp.results = this.storage.slice(-100);
  return temp;
};

exports.addMessage = function(message) {
  var date = new Date().dateString;
  message.createdAt = date;
  message.objectId = Math.floor(Math.random() * 1000000).toString();
  message.roomname = _.escape(message.roomname);
  message.text = _.escape(message.text);
  message.updatedAt = date;
  message.username = _.escape(message.username);

  this.storage.push(message);
};