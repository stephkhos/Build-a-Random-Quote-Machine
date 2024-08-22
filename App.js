import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [quote, setQuote] = useState('');
  const [author, setAuthor] = useState('');

  const handleNewQuote = async () => {
    const response = await fetch('https://api.quotable.io/random');
    const data = await response.json();
    setQuote(data.content);
    setAuthor(data.author);
  };

  useEffect(() => {
    handleNewQuote();
  }, []);

  const tweetQuote = () => {
    const tweetURL = `https://twitter.com/intent/tweet?text=${encodeURIComponent(quote)} - ${encodeURIComponent(author)}`;
    window.open(tweetURL, '_blank');
  };

  return (
    <div className="quote-box" id="quote-box">
      <p id="text">{quote}</p>
      <p id="author">- {author}</p>
      <button id="new-quote" onClick={handleNewQuote}>New Quote</button>
      <a id="tweet-quote" href="#" onClick={tweetQuote}>
        <i className="fa-brands fa-twitter"></i> Tweet Quote
      </a>
    </div>
  );
}

export default App;
