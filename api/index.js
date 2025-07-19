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
