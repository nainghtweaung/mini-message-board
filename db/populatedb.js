const { Client } = require('pg');

const SQL = `
  CREATE TABLE IF NOT EXISTS messages (
  id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  message TEXT,
  user_name VARCHAR (50),
  date DATE
  );

  INSERT INTO messages (message, user_name, date)
  VALUES ('Hi', 'Naing', '2024-12-22'), ('Hello', 'Naing', '2024-12-23');
`;

async function main() {
  console.log('seeding');
  const client = new Client({
    connectionString: `postgresql://${process.env.USER}:${process.env.PASSWORD}@${process.env.HOST}:${process.env.PORT}/${process.env.DATABASE}`,
  });
  await client.connect();
  await client.query(SQL);
  await client.end();
  console.log('done');
}

main();
