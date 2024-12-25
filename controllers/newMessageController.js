const db = require('../db/queries');

module.exports = {
  getNewMessage: (req, res) => {
    res.render('form');
  },
  postNewMessage: async (req, res) => {
    const messageDetails = req.body;
    await db.postNewMessage(messageDetails);
    res.redirect('/');
  },
};
