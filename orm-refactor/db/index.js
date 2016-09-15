var Sequelize = require('sequelize');
var db = new Sequelize('chat', 'root', '');

var User = db.define('User', {
  username: Sequelize.STRING
});

var Message = db.define('Message', {
  text: Sequelize.STRING,
  roomname: Sequelize.STRING
});

Message.belongsTo(User);
User.hasMany(Message);

User.sync();
Message.sync();

exports.User = User;
exports.Message = Message;
