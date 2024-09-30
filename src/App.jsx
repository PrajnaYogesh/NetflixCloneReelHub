import { useState,useEffect,createContext, useContext } from 'react'
import './App.css'
import Header from './components/Header'
import {Routes,Route} from 'react-router-dom'
import BottomContainer from './components/BottomContainer'
import EachTab from './components/EachTab'
// import Collection from './components/Collection'
import List from './components/List'

// Create a context
 const CollectionContext = createContext();

// Custom hook to use the CollectionContext
export const useCollection = () => useContext(CollectionContext);

function App() {

const [mainImage, setMainImage] = useState([]);  //main page main Image
const [upcomingMovie, setUpcomingMovie] = useState([]);
const [nowPlaying,setNowPlaying] = useState([]);
const [popular,setPopular ]= useState([]);
// const [collection,setCollection] = useState([]);
const [tvCollection, setTVCollection] = useState([]);  // TV shows state
const [movieCollection, setMovieCollection] = useState([]); // Movies state
const [selectedMovies, setSelectedMovies] = useState([]);
const API_KEY = import.meta.env.VITE_API_KEY

  // main page main image
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc&year=2024&api_key=${API_KEY}`);
        // const response = await fetch(`https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1&sort_by=popularity.asc&api_key=${API_KEY}`);
                const data = await response.json();
                // console.log("Fetched data:", data); 
                const info = data.results.slice(0, 2);
                // console.log("info is:", info);
              
        setMainImage(info);
         
      } catch (err) {
        console.error(err);
      }
    };

    fetchData();  
  }, []);
 

  //MAIN =>  UPCOMING MOVIES
useEffect(()=>{
const fetchUpcomingMovies = async()=>{
 try {
  const response = await fetch(`https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1&api_key=${API_KEY}`)
const data = await response.json();
const info = data.results.slice(0,6);
setUpcomingMovie(info);
} catch (error) {
  console.error(err);
 }
}
fetchUpcomingMovies();
},[])

 
//mainPage => NOW PLAYING
useEffect(()=>{

  const fetchNowPlaying = async()=>{
    try {
    const response = await fetch(`https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1&api_key=${API_KEY}`);
const data = await response.json();
const info = data.results.slice(0,6);
setNowPlaying(info);  
  }
   catch (error) {
    console.error(err);
}
  }
  fetchNowPlaying();
},[])


  // main page Each category row =>  POPULAR ON NETFLIX
  useEffect(()=>{

  const fetchPopular = async()=>{
    try {
    const response = await fetch(`https://api.themoviedb.org/3/discover/tv?first_air_date_year=2024&include_adult=false&include_null_first_air_dates=false&language=en-US&page=1&screened_theatrically=false&sort_by=popularity.desc&with_origin_country=US&api_key=${API_KEY}`)
    const data = await response.json();
                
                const info = data.results.slice(0, 6);
    console.log("popular data array",info);
    
    setPopular(info);
        }
        catch (error) {
          console.error(err);
        }
  } 
  fetchPopular();
 },[]);




 //useEffect to get tvshows using useContext
 useEffect(()=>{
  const fetchTVCollection = async()=>{
    try {
      const response = await fetch(`https://api.themoviedb.org/3/trending/tv/day?language=en-US&api_key=${API_KEY}`)
      if (!response.ok) throw new Error('Network response was not ok');
      const data = await response.json();
      const info = data.results.slice(0, 18);
      setTVCollection(info);
      
    } catch (error) {
      console.error(err);
    }
  }
  fetchTVCollection();
 },[])


//useEffect to get movies using useContext
useEffect(()=>{
  const fetchMovieCollection = async()=>{
    try {
      const response = await fetch(`https://api.themoviedb.org/3/trending/movie/day?language=en-US&api_key=${API_KEY}`)
      if (!response.ok) throw new Error('Network response was not ok');
      const data = await response.json();
      const info = data.results.slice(0, 18);
      setMovieCollection(info);
      
    } catch (error) {
      console.error(err);
    }
  }
  fetchMovieCollection();
 },[])


 //Add selected movie to the List
 const addToList = (movie) => {
  setSelectedMovies((prev) => [...prev, movie]); // Add movie to the list
};


 //useEffect that is called on any state change
 useEffect(() => {
  if (mainImage.length > 0) {
    console.log("Updated mainImage:", mainImage);
  }
}, [mainImage,popular,upcomingMovie,nowPlaying,tvCollection,movieCollection,selectedMovies]);


   return (
    <CollectionContext.Provider value={{tvCollection,movieCollection,addToList}}>
    <div className='outerContainer'>
     <Header />
 

<Routes>

        <Route 
          path='/' 
          element={
            mainImage.length > 0 ? (
              <BottomContainer posterPath={mainImage}  upcomingMovie={upcomingMovie} nowPlaying={nowPlaying} popular={popular}/>
            ) : (
              <div>Loading...</div> 
            )
          } 
        />
     


      <Route path='/tv'  element={<EachTab type='tv' />} />
      <Route path='/movie'  element={<EachTab type='movie' />} /> 
     
      <Route path='/list'  element={<List movies={selectedMovies} setSelectedMovies={setSelectedMovies} />} /> 
       
      </Routes>
</div>
      
</CollectionContext.Provider>
  )
}

export default App
