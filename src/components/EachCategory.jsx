import React, { useState } from 'react'
import './EachCategory.css'
import Modal from './Modal'


function EachCategory({topic,rowList,onRemove}) {
 const [modalOpen, setModalOpen] = useState(false);
 const [selectedMovie,setSelectedMovie] = useState(null);

const handleImageClick = (movie) =>{
  setSelectedMovie(movie);
  setModalOpen(true);
}

const closeModal = ()=>{
  setModalOpen(false);
  setSelectedMovie(null);
 
}

  return (
    <div className='eachOuterContainer'>
        <p className='topicStyle'>{topic}</p>
        
        
        <div className="boxContainer">
{rowList.map((item,i)=>(
 
    <div className="boxC" key={i}>
       
<img src={`https://image.tmdb.org/t/p/original${item.poster_path}`} alt="poster" className="box" onClick={()=>handleImageClick(item)} />

{onRemove && (
              <button 
                className="removeButton" 
                onClick={() => onRemove(item)}
              >
                Remove
              </button>
            )}
</div>
))}
           {/*map over the below image to make boxes */}
           <Modal isOpen={modalOpen} onClose={closeModal} movie={selectedMovie} />
       </div>
       
    </div>
  )
}

export default EachCategory