import React from 'react'
import './MainImage.css'


function MainImage({mainImage}) {
    console.log(mainImage);
    
  return (
    <div className='imageOuterContainer'>
<img className='imageStyle' src={`https://image.tmdb.org/t/p/original${mainImage[1]?.backdrop_path}`} alt="Image" />

<div className="mainDetails">
  <p className='mainDetailsPara'>{mainImage[1]?.original_title ||mainImage[1]?.original_name}</p>
<div className="mainButtons">
  <button className='play-button'>Play</button>
  <button className='info-button'>More Info</button>
</div>

</div>

    </div>
  )
}

export default MainImage