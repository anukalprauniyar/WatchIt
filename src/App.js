import {useEffect, useState} from "react";
import './App.css';
import SearchIcon from './search.svg';
import MovieCard from './MovieCard';

//ab4415f0
const APIURL = 'https://www.omdbapi.com/?apikey=ab4415f0';

const movie1 = {
    "Poster"
: 
"https://m.media-amazon.com/images/M/MV5BYjFhN2RjZTctMzA2Ni00NzE2LWJmYjMtNDAyYTllOTkyMmY3XkEyXkFqcGdeQXVyNTA0OTU0OTQ@._V1_SX300.jpg",
"Title"
: 
"Italian Spiderman",
"Type"
: 
"movie",
"Year"
: 
"2007",
"imdbID"
: 
"tt2705436"
}

const App = () => {

    const [movies, setMovies] = useState([]);
    const [searchTerm , setSearchTerm] = useState();

    const searchMovies = async (title) => {
        const response = await fetch(`${APIURL}&s=${title}`);
        const data = await response.json();

       setMovies(data.Search);
    }

    useEffect( () => {
        searchMovies('Batman');
    }, []);

    return(

        <div className="app">
            <h1>WatchIt</h1>

            <div className="search">
            <input 
                placeholder="Search for movies" 
                value={searchTerm}
                onChange={(e)=> setSearchTerm(e.target.value)}
            />
            <img  src={SearchIcon} 
            alt="search"
            onClick={() => searchMovies(searchTerm)}
            />
        </div>

        {
            movies?.length > 0
            ? (
                <div className="container">
                    {
                        movies.map((movie) => (
                            <MovieCard movie = {movie}/>
                        ))
                    }
                </div>
            ) : (
                <div className="empty">
                    <h2>No movies found</h2>
                </div>
            )
        }


        </div>
    );
}

export default App;