const { artists: Artist, sequelize } = require("./models");


async function getArtist() {
  const artist = await Artist.findOne({
    where: { name: "Taylor Swift" }
  });
  console.log(artist);

}

getArtist();


//find my PK
// const { Artist } = require("./models");

// async function getArtistById() {
//   const artist = await Artist.findByPk(1);
//   console.log(artist);
// }

// getArtistById();