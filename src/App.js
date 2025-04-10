import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/date-ideas" element={<DateIdeas />} />
          <Route path="/movie-suggestions" element={<MovieSuggestions />} />
          <Route path="/food-suggestions" element={<FoodSuggestions />} />
        </Routes>
      </div>
    </Router>
  );
}

function Home() {
  return (
    <div className="App-header">
      <h1>💖 Find the Perfect Date 💖</h1>
      <p>Plan your next unforgettable moment.</p>

      <div className="button-container">
        <Link to="/date-ideas"><button>🎡 Date Ideas Nearby</button></Link>
        <Link to="/movie-suggestions"><button>🎬 Movie Suggestions</button></Link>
        <Link to="/food-suggestions"><button>🍽️ Restaurant & Cuisine Ideas</button></Link>
      </div>
    </div>
  );
}

function DateIdeas() {
  const ideas = [
    '🧺 Picnic at the park',
    '🎳 Bowling night',
    '🎨 Paint and sip class',
    '🖼️ Visit a local art gallery',
    '🎤 Open mic or karaoke',
    '🌲 Scenic walk or hike',
    '🎮 Arcade or board game café',
    '🍦 Ice cream shop crawl'
  ];
  const randomIdea = ideas[Math.floor(Math.random() * ideas.length)];

  return (
    <div className="App-header">
      <h2 style={{ fontSize: '2.5rem', marginBottom: '2rem' }}>🎡 Your Date Idea</h2>
      <div style={{ fontSize: '2rem', backgroundColor: '#fff', padding: '2rem', borderRadius: '12px', boxShadow: '0 4px 10px rgba(0,0,0,0.1)', maxWidth: '80%', margin: '0 auto' }}>
        {randomIdea}
      </div>
      <Link to="/">
        <button style={{ marginTop: '3rem', fontSize: '1.2rem', padding: '1rem 2rem' }}>⬅️ Back to Home</button>
      </Link>
      <p style={{ marginTop: '2rem', color: '#777', fontSize: '1rem', maxWidth: '80%', margin: '2rem auto 0' }}>
        With your kind support, we'll add direct Google Maps integration to find actual places near you 💖
      </p>
    </div>
  );
}

function MovieSuggestions() {
  const [genre, setGenre] = useState('all');
  const [mood, setMood] = useState('any');

  const allMovies = [
    { title: '🎥 The Notebook', genre: 'romance', mood: 'emotional' },
    { title: '🌆 La La Land', genre: 'musical', mood: 'dreamy' },
    { title: '🕸️ Spider-Man: Into the Spider-Verse', genre: 'action', mood: 'exciting' },
    { title: '🌌 Interstellar', genre: 'sci-fi', mood: 'mind-bending' },
    { title: '👻 Ghost', genre: 'romance', mood: 'emotional' },
    { title: '🦁 The Lion King', genre: 'animated', mood: 'emotional' },
    { title: '🍿 10 Things I Hate About You', genre: 'comedy', mood: 'light-hearted' },
    { title: '🎭 Eternal Sunshine of the Spotless Mind', genre: 'drama', mood: 'deep' },
    { title: '🎬 Inception', genre: 'sci-fi', mood: 'mind-bending' },
    { title: '📖 Pride and Prejudice', genre: 'romance', mood: 'calm' }
  ];

  const filteredMovies = allMovies.filter(movie => {
    const genreMatch = genre === 'all' || movie.genre === genre;
    const moodMatch = mood === 'any' || movie.mood === mood;
    return genreMatch && moodMatch;
  });

  const randomMovie = filteredMovies[Math.floor(Math.random() * filteredMovies.length)] || { title: '🎞️ No matching movie found' };

  return (
    <div className="App-header">
      <h2 style={{ fontSize: '2.5rem', marginBottom: '2rem' }}>🎬 Your Movie Suggestion</h2>

      <div style={{ marginBottom: '2rem' }}>
        <label style={{ marginRight: '1rem' }}>Genre:
          <select value={genre} onChange={e => setGenre(e.target.value)} style={{ marginLeft: '0.5rem' }}>
            <option value="all">All</option>
            <option value="romance">Romance</option>
            <option value="musical">Musical</option>
            <option value="action">Action</option>
            <option value="sci-fi">Sci-Fi</option>
            <option value="animated">Animated</option>
            <option value="comedy">Comedy</option>
            <option value="drama">Drama</option>
          </select>
        </label>
        <label style={{ marginLeft: '2rem' }}>Mood:
          <select value={mood} onChange={e => setMood(e.target.value)} style={{ marginLeft: '0.5rem' }}>
            <option value="any">Any</option>
            <option value="emotional">Emotional</option>
            <option value="dreamy">Dreamy</option>
            <option value="exciting">Exciting</option>
            <option value="mind-bending">Mind-Bending</option>
            <option value="light-hearted">Light-Hearted</option>
            <option value="deep">Deep</option>
            <option value="calm">Calm</option>
          </select>
        </label>
      </div>

      <div style={{ fontSize: '2rem', backgroundColor: '#fff', padding: '2rem', borderRadius: '12px', boxShadow: '0 4px 10px rgba(0,0,0,0.1)', maxWidth: '80%', margin: '0 auto' }}>
        {randomMovie.title}
      </div>

      <Link to="/">
        <button style={{ marginTop: '3rem', fontSize: '1.2rem', padding: '1rem 2rem' }}>⬅️ Back to Home</button>
      </Link>

      <p style={{ marginTop: '2rem', color: '#777', fontSize: '1rem', maxWidth: '80%', margin: '2rem auto 0' }}>
        With your support, we will add live data and all movies coming soon 🎥💖
      </p>
    </div>
  );
}

function FoodSuggestions() {
  const foodOptions = [
    '🍕 Pizza night at a cozy pizzeria',
    '🍣 Sushi tasting for two',
    '🍜 Ramen and anime night',
    '🥗 Salad bar and smoothies',
    '🍔 Gourmet burger challenge',
    '🥘 Mediterranean mezze dinner',
    '🌮 Taco Tuesday feast',
    '🍰 Dessert-only café date'
  ];
  const randomFood = foodOptions[Math.floor(Math.random() * foodOptions.length)];

  return (
    <div className="App-header">
      <h2 style={{ fontSize: '2.5rem', marginBottom: '2rem' }}>🍽️ Your Food Date Idea</h2>
      <div style={{ fontSize: '2rem', backgroundColor: '#fff', padding: '2rem', borderRadius: '12px', boxShadow: '0 4px 10px rgba(0,0,0,0.1)', maxWidth: '80%', margin: '0 auto' }}>
        {randomFood}
      </div>
      <Link to="/">
        <button style={{ marginTop: '3rem', fontSize: '1.2rem', padding: '1rem 2rem' }}>⬅️ Back to Home</button>
      </Link>
      <p style={{ marginTop: '2rem', color: '#777', fontSize: '1rem', maxWidth: '80%', margin: '2rem auto 0' }}>
        With your support, we’ll add local restaurant listings and filters soon 🍴💖
      </p>
    </div>
  );

}

export default App;
