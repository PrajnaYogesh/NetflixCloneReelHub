import React from 'react'
import MainImage from './MainImage'
import EachCategory from './EachCategory'

function BottomContainer({posterPath,upcomingMovie,nowPlaying,popular}) {
  return (
    <div>
<MainImage mainImage={posterPath}/>
<EachCategory topic={`Upcoming`} rowList={upcomingMovie} />
<EachCategory topic={`Now Playing`} rowList={nowPlaying} />
<EachCategory topic={`What's Popular`} rowList={popular} />
{/* 
<EachCategory rowList={rowList} />
<EachCategory rowList={popularCategory} />
<EachCategory rowList={popularCategory} /> */}
    </div>
  )
}

export default BottomContainer