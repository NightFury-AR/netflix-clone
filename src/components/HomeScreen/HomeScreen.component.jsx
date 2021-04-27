import React, { useState } from 'react';
import './home-screen.style.scss';

import Navbar from '../NavBar/NavBar.component';
import Banner from '../Banner/Banner.component';
import Row from '../Rows/Rows.component';
import Footer from '../Footer/Footer.component';


import YouTube from 'react-youtube';
import {request} from '../../API/API_ENDPOINT';

function HomeScreen() {

    const opts = {height: '100',width: '100',playerVars: {
        // https://developers.google.com/youtube/player_parameters
        autoplay: 1,
      }}
    const [trailerUrl, setTrailerUrl] = useState('');
    
    return (
        <div className="homescreen">
            <Navbar/>
            <Banner setTrailerUrl={setTrailerUrl}/>
            
            { trailerUrl && 
            <div className="trailer__window">
                <YouTube className="trailer__video" videoId={trailerUrl} opts={opts}/>
                <div className="close__button" onClick={()=> setTrailerUrl('')}> X </div>
            </div>
            }


            <Row title='Trending Movies' fetchUrl={request.fetchTrending} setTrailerUrl={setTrailerUrl} isLargeRow/>
            <Row title='Top Rated' fetchUrl={request.fetchTopRated} setTrailerUrl={setTrailerUrl}/>
            <Row title='Action Movies' fetchUrl={request.fetchActionMovies} setTrailerUrl={setTrailerUrl}/>
            <Row title='Comedy Movies' fetchUrl={request.fetchComedyMovies} setTrailerUrl={setTrailerUrl}/>
            <Row title='Horror Movies' fetchUrl={request.fetchHorrorMovies} setTrailerUrl={setTrailerUrl}/>
            <Row title='Romantic Movies' fetchUrl={request.fetchRomanticMovies} setTrailerUrl={setTrailerUrl}/>
            <Row title='Documentaries' fetchUrl={request.fetchDocumentaries} setTrailerUrl={setTrailerUrl}/> 
            <Footer/>
        </div>
    )
}

export default HomeScreen;
