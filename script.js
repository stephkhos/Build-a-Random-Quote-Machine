const quoteContainer = document.getElementById('quote-container');
const quoteText = document.getElementById('quote');
const authorText = document.getElementById('author');
const newQuoteButton = document.getElementById('new-quote');

const quotes = [
  {
    quote: 'Believe you can and you\'re halfway there.',
    author: 'Theodore Roosevelt'
  },
  {
    quote: 'The only way to do great work is to love what you do.',
    author: 'Steve Jobs'
  },
  {
    quote: 'Success is not final, failure is not fatal: It is the courage to continue that counts.',
    author: 'Winston Churchill'
  },
  {
    quote: 'Don\'t watch the clock; do what it does. Keep going.',
    author: 'Sam Levenson'
  },
  {
    quote: 'You miss 100% of the shots you don\'t take.',
    author: 'Wayne Gretzky'
  }
];

function getRandomQuote() {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  const quote = quotes[randomIndex];
  quoteText.textContent = quote.quote;
  authorText.textContent = quote.author;
}

newQuoteButton.addEventListener('click', getRandomQuote);

getRandomQuote(); // display a quote on page load
