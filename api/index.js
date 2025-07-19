<<<<<<< HEAD
//                       _oo0oo_
//                      o8888888o
//                      88" . "88
//                      (| -_- |)
//                      0\  =  /0
//                    ___/`---'\___
//                  .' \\|     |// '.
//                 / \\|||  :  |||// \
//                / _||||| -:- |||||- \
//               |   | \\\  -  /// |   |
//               | \_|  ''\---/''  |_/ |
//               \  .-\__  '-'  ___/-. /
//             ___'. .'  /--.--\  `. .'___
//          ."" '<  `.___\_<|>_/___.' >' "".
//         | | :  `- \`.;`\ _ /`;.`/ - ` : | |
//         \  \ `_.   \_ __\ /__ _/   .-` /  /
//     =====`-.____`.___ \_____/___.-`___.-'=====
//                       `=---='
//     ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
const server = require('./src/app.js');
const { conn } = require('./src/db.js');
const { createCountriesToDb } = require("./src/routes/Controllers/controllers.js")
const {PORT} = process.env


// Syncing all the models at once.
conn.sync({ force: false }).then(() => {
  createCountriesToDb()
  server.listen( PORT, () => {
    console.log('%s listening at 3001'); // eslint-disable-line no-console
  });
});
=======
const server = require("./src/app.js");
const { conn } = require("./src/db.js");
const {
  createCountriesToDb,
} = require("./src/routes/Controllers/controllers.js");
const PORT = process.env.PORT || 3001;

(async () => {
  try {
    await conn.sync({ force: false });
    await createCountriesToDb();
    server.listen(PORT, () => {
      console.log(`Listening at port: ${PORT}`);
    });
  } catch (err) {
    console.error(
      `Error initializing the database or country population: ${err}`
    );
  }
})();
>>>>>>> f72f63d (update react-scripts to 5.0.1 | refactor createCountriesToDb)
