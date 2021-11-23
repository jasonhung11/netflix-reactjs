import React, {useState, useEffect} from 'react'
import requests from '../request'
import axios from '../axios'
import '../Style/Banner.css'
import Navbar from './Navbar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faPlay, faInfoCircle } from '@fortawesome/free-solid-svg-icons'


function Banner() {
    const [movie, setMovie] = useState([])


    useEffect(() =>{
        async function fetchMovie(){
            const response = await axios.get(requests.fetchNetflixOriginals)
            const data = await response.data;
            
            const randomNum = Math.floor(Math.random() * 20 - 1)
            setMovie(data.results[randomNum])
        }
        fetchMovie()
    }
        ,[])

        function hideWording(str, n){
            return ((str.length > n)? str.substr(0, n-1) + "...":str);
        }
    return (
        <header 
            className="banner"
            style={{
                backgroundSize: "cover",
                backgroundImage: `url("http://image.tmdb.org/t/p/original/${movie.backdrop_path}")`,
                backgroundPosition: "center center",
            }}
        >
            
            <Navbar></Navbar>

            <div className="banner-contents">
                <h1 className="poster-title">
                    {movie.title || movie.name || movie.original_name}
                </h1>

                <div className="banner-buttons">
                    <h1 className="banner-description">
                        {hideWording(movie.overview, 150)}
                    </h1>

                    <button className="banner-button play-button">
                        <FontAwesomeIcon  icon={faPlay} className="banner-icon"/>
                        Play
                    </button>
                    

                    <button className="banner-button">
                        <FontAwesomeIcon  icon={faInfoCircle} className="banner-icon"/>
                        More Info
                    </button>
                </div>
            </div>

            <div className="banner-fadeBottom">

            </div>
            
        </header>
    )
}

export default Banner
