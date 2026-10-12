const { artists, album } = require("./models");

async function insertRecords() {
  try {

    // Insert Artists
    const artist1 = await artists.create({
      id:1,
      name: "Arijit Singh",
      genre: "Bollywood",
      country: "India"
    });

    const artist2 = await artists.create({
      id:2,
      name: "Taylor Swift",
      genre: "Pop",
      country: "USA"
    });

    const artist3 = await artists.create({
      id:3,
      name: "Ed Sheeran",
      genre: "Pop",
      country: "UK"
    });

    // Insert Albums
    await album.create({
      title: "Aashiqui 2",
      releaseYear: 2013,
      artistId: artist1.id
    });

    await album.create({
      title: "Rockstar",
      releaseYear: 2011,
      artistId: artist1.id
    });

    await album.create({
      title: "1989",
      releaseYear: 2014,
      artistId: artist2.id
    });

    await album.create({
      title: "Reputation",
      releaseYear: 2017,
      artistId: artist2.id
    });

    await album.create({
      title: "Divide",
      releaseYear: 2017,
      artistId: artist3.id
    });

    console.log("Records inserted successfully!");

  } catch (error) {
    console.error("Error inserting records:", error);
  }
}

insertRecords();