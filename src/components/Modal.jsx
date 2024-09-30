
import React from 'react';
import './Modal.css';
import { useCollection } from '../App';

function Modal({ isOpen, onClose, movie }) {
  if (!isOpen) return null;
  const {addToList} = useCollection();

  return (
    <div className="modalOverlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
      
        {movie.backdrop_path && (
          <img 
            src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`} 
            alt={movie.title} 
            className="modal-image"
          />
        )}

        <h2 className="modal-title">{movie.original_name|| movie.original_title}</h2>
        {/* <p className="modal-year">{movie.first_air_date || movie.release_date}</p> */}
        <p className="modal-overview">{movie.overview || 'No overview available.'}</p>

        <div className="modal-buttons">
          <button onClick={() => alert('Playing...')}>Play</button>
          <button onClick={() =>{addToList(movie);  alert('Added to list');}} >Add to List</button>
        </div>

       
      </div>
    </div>
  );
}

export default Modal;