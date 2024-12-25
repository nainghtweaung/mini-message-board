const pool = require('./pool');

async function getAllMessages() {
  const { rows } = await pool.query('SELECT * FROM messages');
  return rows;
}

async function getMessageById(id) {
  const { rows } = await pool.query('SELECT * FROM messages WHERE id = $1', [
    id,
  ]);
  return rows[0];
}

async function postNewMessage(messageDetails) {
  const { messageText: message, author: user_name } = messageDetails;
  const date = new Date();
  await pool.query(
    'INSERT INTO messages (message, user_name, date ) VALUES ($1, $2, $3)',
    [message, user_name, date]
  );
  console.log('Message added.');
}

module.exports = {
  getAllMessages,
  getMessageById,
  postNewMessage,
};
