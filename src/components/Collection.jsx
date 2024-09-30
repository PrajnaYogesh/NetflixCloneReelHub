import React from 'react'
import EachCategory from './EachCategory'

// import { useCollection } from '../App'; // Import the custom hook


function Collection({topic,collection}) {
   
  return (
    <EachCategory topic={topic} rowList={collection}/>
  )
}

export default Collection