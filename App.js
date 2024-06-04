import React from 'react';
import './App.css';
import MovieLibrary from './Components/MovieLibrary';

function App() {
  
  const movies = [
    {
      title: 'Jersey',
      director: 'Gowtham Thinnanuri',
      year: 2019,
      image: 'https://via.placeholder.com/150',
      description:'"Jersey" is a Telugu sports drama film that follows the story of a failed cricketer who decides to revive his career for the sake of his son, showcasing themes of determination, love, and redemption in the face of adversity.'
    },
    {
      title: 'Pokiri',
      director: 'Puri Jagannadh',
      year: 2006,
      image: 'https://via.placeholder.com/150',
      description: '"Pokiri" is a Telugu action thriller film featuring an undercover police officer who infiltrates the underworld, embarking on a thrilling journey filled with twists, turns, and intense confrontations, ultimately leading to a dramatic showdown.'
    },
    {
      title: 'Hi Nanna',
      director: 'Shouryu V',
      year: 2023,
      image: 'https://via.placeholder.com/150',
      description:'"Hi Nanna" is a heartwarming Telugu family drama that explores the intricate bond between a father and his daughter, delving into themes of love, sacrifice, and the importance of familial relationships in shaping ones life journey.'
    },
    {
      title: 'Yeh Jawaani Hai deewani',
      director: 'Ayan Mukerji',
      year: 2013,
      image: 'https://via.placeholder.com/150',
      description:'"Yeh Jawaani Hai Deewani" is a Bollywood romantic drama that chronicles the journey of four friends as they navigate love, ambition, and personal growth, set against the backdrop of picturesque locations and lively dance sequences, capturing the essence of youthful exuberance and friendship.'
    },
    {
      title: 'Hanu-man',
      director: 'Prasanth Varma',
      year: 2024,
      image: 'https://via.placeholder.com/150',
      description:'"Hanu-Man" is a Telugu animated film that portrays the epic tale of the Hindu deity Hanuman, highlighting his adventures, bravery, and devotion in serving Lord Rama, while imparting timeless moral lessons for audiences of all ages.'
    },
    {
      title: 'Salaar',
      director: 'Prashanth Neel',
      year: 2023,
      image: 'https://via.placeholder.com/150',
      description:'"Salaar" is an upcoming Indian action thriller film directed by Prashanth Neel, known for his work in "KGF: Chapter 1" and "KGF: Chapter 2". Starring Prabhas in the lead role, the movie promises high-octane action sequences and intense drama set against a gritty backdrop.'
    },
    {
      title: 'Titanic',
      director: 'James Cameron',
      year: 1997,
      image: 'https://via.placeholder.com/150',
      description:'Rose, who is being forced to marry a wealthy man, falls in love with Jack, a talented artist, aboard the unsinkable Titanic. Unfortunately, the ship hits an iceberg, endangering their lives.'
    },
    {
      title: 'King Kong',
      director: 'Peter Jackson',
      year: 2005,
      image: 'https://via.placeholder.com/150',
      description:'Filmmaker Carl Denham and his crew encounter a giant ape in Skull Island and imprison it to bring it to New York. However, they land in trouble when the giant ape is set free in the city.'
    },
  ];

  return (
    <div className="App">
    <div className="background-image"></div>
      <MovieLibrary movies={movies} />

    </div>
    
  );
}

export default App;



