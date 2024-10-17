const messages = require('../models/messages');

module.exports = {
  getAllMessages: (req, res) => {
    res.render('index', { messages });
  },
  getMessage: (req, res) => {
    console.log(req.params.index);
    const index = req.params.index;
    res.render('message', { message: messages[index] });
  },
};
