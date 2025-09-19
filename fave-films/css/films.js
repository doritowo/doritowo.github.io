
const films = [
  
  {
        title: "How to Train Your Dragon",
        poster: "images/howtotrainyourdragon.jpg",
        rating: "★★★★★",
        quote: "Some of us were just born different",
        genre:  "Animation, Fantasy, Adventure, Family"
    },
    {
        title: "Swing Girls",
        poster: "images/swinggirls.jpg",
        rating: "★★★★★",
        quote: "There are two types of people in the world, those who swing and people who don't",
        genre: "Teen Comedy, Musical, Drama"
    },
    {
        title: "Blade Runner 2049",
        poster: "images/bladerunner.jpg",
        rating: "★★★★★",
        quote: "Cells, cells, cells, interlinked",
        genre: "Sci-Fi, Thriller, Drama"
    },
    {
        title: "Us and Them",
        poster: "images/usandthem.jpg",
        rating: "★★★★★",
        quote: "Happiness is not a story, misfortune is.",
        genre: "Romantic Drama"
    },
    {
        title: "Her",
        poster: "images/her.jpg",
        rating: "★★★★★",
        quote: "We grew up together… But that's also the hard part: growing without growing apart or changing without it scaring the other person.",
        genre: "Sci-Fi, Romance, Drama"
    },
    {
        title: "Sing Street",
        poster: "images/singstreet.jpg",
        rating: "★★★★★",
        quote: "You can never do things by half, do you understand that?",
        genre: "Musical Comedy-Drama"
    },
    {
        title: "Perfect Blue",
        poster: "images/perfectblue.jpg",
        rating: "★★★★★",
        quote: "No, I'm the real thing.",
        genre: "Psychological Thriller, Animation"
    },
    {
        title: "Scott Pilgrim vs. the World",
        poster: "images/scottpilgrimvstheworld.jpg",
        rating: "★★★★★",
        quote: "We are Sex Bob-omb! 1, 2, 3, 4!",
        genre: "Action, Comedy, Romance, Fantasy"
    },
    {
        title: "All About Lily Chou-Chou",
        poster: "images/allaboutlilychouchou.jpg",
        rating: "★★★★★",
        quote: "The thing you hold dear—friends, family, lovers—hurt you the most. You live with that. That's why we have the ether… a place of eternal peace. That's the ether.",
        genre: "Drama, Music"
    },
    {
        title: "Bridging the Rift",
        poster: "images/bridgingtherift.jpg",
        rating: "★★★★★",
        quote: "The gamble was high, the payoff was immaculate",
        genre: "Documentary"
    }
];

const container = document.querySelector(".films");

films.forEach(film => {
  const card = `
    <div class="film">
      <img src="${film.poster}" alt="${film.title} poster">
      <h2>${film.title}</h2>
      <p class="rating">${film.rating}</p>
      <blockquote>"${film.quote}"</blockquote>
      <p class="genre">${film.genre}</p>
    </div>
  `;
  container.innerHTML += card;
});