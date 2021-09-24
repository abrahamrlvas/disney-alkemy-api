const dotenv = require('dotenv');
dotenv.config();
const app = require('./app');
const db = require('./database/database');

function main() {
  app.listen(process.env.PORT, async () => {
    await db.sync().then(() => {
      console.log('Drop and Resync Db');
    }).catch(error => {
      console.error(error);
    });
    console.log('App listening in port', process.env.PORT);
    console.log("Database is connected succesfully");
  })
}

main();