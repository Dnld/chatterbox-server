var _ = require("../node_modules/underscore/underscore.js");

exports.storage = [];

exports.getMessage = function(room) {
  var tempObj = {};
  if (room !== 'messages') {
    var tempArr = [];
    var max = this.storage.length <= 100 ? this.storage.length : 100;
    for (var i = 0; i < max; i++) {
      if (this.storage[i].roomname === room) {
        tempArr.push(this.storage[i]);
      }
    }
    tempObj.results = tempArr;
    return tempObj;
  } else {
    tempObj.results = this.storage.slice(0, 100);
    return tempObj;
  }
};

exports.addMessage = function(message, room) {
  var date = new Date();
  message.createdAt = date;
  message.objectId = Math.floor(Math.random() * 1000000).toString();
  message.roomname = _.escape(message.roomname) || _.escape(room);
  message.text = _.escape(message.text);
  message.updatedAt = date;
  message.username = _.escape(message.username);

  var priorLength = this.storage.length;
  this.storage.unshift(message);
  return this.storage.length === priorLength + 1;
};
