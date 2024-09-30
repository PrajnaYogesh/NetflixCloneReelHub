import React from 'react'
import MainImage from './MainImage'
import Collection from './Collection'
import { useCollection } from '../App'; 

function EachTab({type}) {

    const {tvCollection,movieCollection} = useCollection();
const collection = type === 'tv'? tvCollection :movieCollection;
const name = type==='tv'? "TV shows" : "Movies"
  return (
    <>
   
    <MainImage mainImage={collection}/>
  <Collection topic={name} collection={collection}/>
  </>
  )
}

export default EachTab