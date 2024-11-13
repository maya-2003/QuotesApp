var quote = document.getElementById("quote");
var author = document.getElementById("author");
const btn = document.getElementById("quotesButton");
const quotes = [
    "\"Be yourself; everyone else is already taken.\"",
    "\"I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best.\"",
    "\"So many books, so little time.\"",
    "\"Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.\"",
    "\"A room without books is like a body without a soul.\"",
    "\"Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind.\"",
    "\"You've gotta dance like there's nobody watching, Love like you'll never be hurt, Sing like there's nobody listening, And live like it's heaven on earth.\"",
    "\"You know you're in love when you can't fall asleep because reality is finally better than your dreams.\"",
    "\"A friend is someone who knows all about you and still loves you.\"",
    "\"Live as if you were to die tomorrow. Learn as if you were to live forever.\""
  ];
  
  const authors = [
    "-- Oscar Wilde",
    "-- Marilyn Monroe",
    "-- Frank Zappa",
    "-- Albert Einstein",
    "-- Marcus Tullius Cicero",
    "-- Bernard M. Baruch",
    "-- William W. Purkey",
    "-- Dr. Seuss",
    "-- Elbert Hubbard",
    "-- Mahatma Gandhi"
  ];

  let prevPosition=-100;
  function generateQuote() {
    let position;
    do {
      position = Math.floor(Math.random() * 10);
    } while (position === prevPosition);
    quote.textContent = quotes[position];
    author.textContent = authors[position];
    prevPosition = position;
    console.log(position);
  }
  

  btn.onclick=generateQuote;
  