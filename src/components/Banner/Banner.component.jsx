import React,{useState,useEffect} from 'react';
import './banner.style.scss';

import {API} from '../../API/axios';
import {request} from '../../API/API_ENDPOINT';
import MovieTrailer from 'movie-trailer';

function Banner({setTrailerUrl}) {
    const [movies, setMovies] = useState([]);

    const truncate = (string,n) => {
        return string?.length > n ? string.substr(0,n-1)+'...' : string ; 
    }

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
        async function fetchData () {
            const result = await API.get(request.fetchNetflixOriginals);
            setMovies(result.data.results[Math.floor(Math.random() * result.data.results.length - 1)]);
            return result;
        }
        fetchData();
    }, []);

    return (
        <header
        className='banner'
        style={{
            backgroundSize:'cover',
            backgroundImage:`url("https://image.tmdb.org/t/p/original/${movies?.backdrop_path}")`,
            backgroundPosition:'top center'
        }}>

            <div className="banner__content">
                <div className="banner__title">{movies?.title || movies?.name || movies?.original_name}</div>
                <div className="banner__buttons">
                    <button className="banner__button" onClick={()=>GetTrailerURL(movies?.title || movies?.name || movies?.original_name)}>Play</button>
                    <button className="banner__button">My List</button>
                </div>
                <div className="banner__desc">
                    {truncate(movies?.overview,150)}
                </div>
            </div>

            <div className="banner__footerfade"></div>

        </header>
    )
}

export default Banner;
