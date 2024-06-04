import React,{useState} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';

function Movie({ title, director, year, image, description }) {
  const [liked, setLiked] = useState(false);
  const handleLikeToggle = () => {
    setLiked(!liked);
  };
  return (
    <div className="movie">
      <img src={image} alt={title} className="movie-image" />
      <div className="movie-details">
        <h2>{title}</h2>
        <div className="like-icon" onClick={handleLikeToggle}>
            <FontAwesomeIcon icon={faHeart} color={liked ? 'red' : 'grey'} />
          </div>          
        <p><strong>Director:</strong> {director}</p>
        <p><strong>Year: </strong>{year}</p>
        <p><strong>Description:</strong>{description}</p>
      </div>
    </div>
      
  );
   }


export default Movie;
