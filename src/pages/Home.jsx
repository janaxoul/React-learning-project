import { useState, useEffect} from 'react';
import MovieCard from '../components/MovieCard';
import { searchMovies, getPopularMovies } from '../service/api';
import "../css/Home.css"

function Home() {
    const [searchQuery, setSearchQuery] =useState("");
    const [movies, setMovie]=useState([]);
    const [error, setError]= useState(null);
    const[loading, setLoading] = useState(true)
    useEffect(()=>{
        const loadPopularMovies= async ()=>{
            try{
                const popularMovies = await getPopularMovies();
                setMovie(popularMovies);
            }
            catch(err){
                console.log(err)
                setError("Failed to load movies")
            }
            finally{
                setLoading(false)
            }
        }
        loadPopularMovies();
    }, [])
    const handleSerach=(e)=>{
        e.preventDefault()
        alert(searchQuery)
        setSearchQuery("")

    };
    return (
    <div className='home'>
        <form action="" onSubmit={handleSerach} className='search-form'>
            <input type="text"
            placeholder='search for movies'
            className='search-input'
            value={searchQuery}
            onChange={(e)=>setSearchQuery(e.target.value)}/>
            <button type='submit' className='search-button'>Search</button>
        </form>
        <div className='movies-grid'>
            {movies.map(movie=> (<MovieCard movie={movie} key={movie.id}/>)
            )}
        </div>
    </div>
    )
}

export default Home