const messages = require('../models/messages');

module.exports = {
  newMessage: (req, res) => {
    res.render('form');
  },
  addMessage: (req, res) => {
    const messageDetails = req.body;
    messages.push({
      text: messageDetails.messageText,
      user: messageDetails.author,
      added: new Date(),
    });
    res.redirect('/');
  },
};
