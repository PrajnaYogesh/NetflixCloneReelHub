import React from 'react'
import EachCategory from './EachCategory'



function Collection({topic,collection}) {
   
  return (
    <EachCategory topic={topic} rowList={collection}/>
  )
}

export default Collection