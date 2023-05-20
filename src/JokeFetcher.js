import React, { useState, useEffect } from 'react';

function JokeFetcher() {
  const [joke, setJoke] = useState('');
  const [count, setCount] = useState(0);

  // Fetch joke function
  const fetchJoke = async () => {
    const response = await fetch('https://official-joke-api.appspot.com/random_joke');
    const data = await response.json();
    setJoke(data.setup + " - " + data.punchline);
  }

  // Similar to componentDidMount and componentDidUpdate:
  useEffect(() => {
    fetchJoke();
  }, [count]); // Only re-run the effect if count changes

  return (
    <div>
      <p>{joke}</p>
      <button onClick={() => setCount(count + 1)}>
        Fetch new joke
      </button>
    </div>
  );
}

export default JokeFetcher;
