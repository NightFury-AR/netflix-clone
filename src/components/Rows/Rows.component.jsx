import React,{useState,useEffect} from 'react';
import './Rows.style.scss';

import MovieTrailer from 'movie-trailer';
import {API} from '../../API/axios';

function Rows({title,fetchUrl,isLargeRow,setTrailerUrl}) {

    const [movies, setmovies] = useState([]);
    const base_url="https://image.tmdb.org/t/p/original/";

    const GetTrailerURL = (trailer) => {
        MovieTrailer(trailer)
        .then((url)=>{
            const urlParams = new URLSearchParams(new URL(url).search);
            setTrailerUrl(urlParams.get('v'));
        })
        .catch((error)=>{ 
            console.log(error.message);
        })
     };

    useEffect(() => {
        async function fetchData() {
            const result = await API.get(fetchUrl);
            setmovies(result.data.results);
            return result;
        }
        fetchData();
    }, [fetchUrl])
    //console.log(movies);
    return (
        <div className="movie__row">

            <h2 className='movie__category'>{title}</h2>
            <div className="row__posters">
            {
                movies.map(movie=> (
                    ((isLargeRow && movie.poster_path) || (!isLargeRow && movie.backdrop_path)) && (
                    <div key={movie.id} className='movie__card'>
                    <img 
                    className={`row__poster ${isLargeRow && "row__poster__large"}`}
                    src={`${base_url}${isLargeRow ? movie.poster_path : movie.backdrop_path}`} 
                    alt={movie.name}
                    onClick = {()=>GetTrailerURL(movie?.title || movie?.name || movie?.original_name)}
                    />
                    {!isLargeRow && <div className='movie__title'>{movie?.title || movie?.name || movie?.original_name}</div>}
                    </div>
                    )
                ))
            }
            </div>
            
            
        </div>
    )
}

export default Rows;
