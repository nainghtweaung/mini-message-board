const db = require('../db/queries');

module.exports = {
  getAllMessages: async (req, res) => {
    const messages = await db.getAllMessages();
    res.render('index', { messages });
  },
  getMessage: async (req, res) => {
    const id = parseInt(req.params.id);
    const message = await db.getMessageById(id);
    res.render('message', { message });
  },
};
