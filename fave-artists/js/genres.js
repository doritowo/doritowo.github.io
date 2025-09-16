// Data structure with genres, artists, and top songs
const genres = [
  {
    name: "Emo",
    artists: [
      {
        name: "Paramore",
        img: "images/paramore.jpg",
        songs: ["Pool", "Turn It Off", "When It Rains"]
      },
      {
        name: "Pierce the Veil",
        img: "images/piercetheveil.jpg",
        songs: ["Emergency Contact", "Hold On Till May", "Floral & Fading"]
      }
    ]
  },
  {
    name: "Bedroom Pop",
    artists: [
      {
        name: "Clairo",
        img: "images/clairo.jpg",
        songs: ["Amoeba", "Sexy to Someone", "Bags"]
      },
      {
        name: "beabadoobee",
        img: "images/beabadoobee.jpg",
        songs: ["Coffee", "If You Want To", "Glue Song"]
      }
    ]
  },
  {
    name: "Alternative/Indie",
    artists: [
      {
        name: "Turnover",
        img: "images/turnover.jpg",
        songs: ["Humming", "Nightlight Girl", "Temporary Love"]
      },
      {
        name: "The 1975",
        img: "images/the1975.jpg",
        songs: ["Nothing Revealed / Everything Denied", "Fallingforyou", "Nana"]
      }
    ]
  },
  {
    name: "Hardcore",
    artists: [
      {
        name: "Turnstile",
        img: "images/turnstile.jpg",
        songs: ["BIRDS", "BLACKOUT", "SEEIN'STARS"]
      }
    ]
  },
  {
    name: "K-pop",
    artists: [
      {
        name: "aespa",
        img: "images/aespa.jpg",
        songs: ["Dirty Work", "Whiplash", "ICONIC"]
      }
    ]
  },
  {
    name: "Dream Pop",
    artists: [
      {
        name: "Alvvays",
        img: "images/alvvays.jpg",
        songs: ["Dreams Tonite", "Archie, Marry Me", "Your Type"]
      }
    ]
  }
];

// Render genres → artists → songs
const genresDiv = document.getElementById("genres");

genres.forEach(genre => {
  const genreSection = document.createElement("div");
  genreSection.classList.add("genre");

  genreSection.innerHTML = `<h2>${genre.name}</h2>`;

  // Add artists for this genre
  genre.artists.forEach(artist => {
    const artistCard = document.createElement("div");
    artistCard.classList.add("artist-card");

    artistCard.innerHTML = `
      <img src="${artist.img}" alt="${artist.name}">
      <h3>${artist.name}</h3>
      <strong>Top 3 Songs:</strong>
      <ul>
        ${artist.songs.map(song => `<li>${song}</li>`).join("")}
      </ul>
    `;

    genreSection.appendChild(artistCard);
  });

  genresDiv.appendChild(genreSection);
});