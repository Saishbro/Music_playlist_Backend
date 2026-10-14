const { artists: Artist, sequelize } = require("./models");

async function updateArtist() {
  await Artist.update(
    { name: "Mikha Singh" },        // what to change
    { where: { id: 1 } }         // which row
  );
  console.log("Updated");
  await sequelize.close();
}

updateArtist();