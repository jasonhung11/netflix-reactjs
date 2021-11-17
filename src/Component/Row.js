import React from 'react'
import { useState, useEffect } from 'react'
import YouTube from 'react-youtube'
import axios from '../axios'
import requests from '../request'
import '../Style/Row.css'
import movieTrailer from 'movie-trailer'

function Row({title, fetchUrl, isFirstRow}) {
    const [movieList, setMovieList] = useState([])
    const [trailerUrl, setTrailerUrl] = useState('')

    const baseURL = "http://image.tmdb.org/t/p/original/"

    const opts = {
        height: "390",
        width: "100%",
        playerVars:{
            autoplay: 1,
        },
    }

    const handleMovieClick = (movie) =>{
        if (trailerUrl){
            setTrailerUrl('')
        }
        else{
            movieTrailer(movie?.title || '')
            .then((url) => {
                const urlParams = new URLSearchParams(new URL(url).search)
                console.log(urlParams.get('v'))
                setTrailerUrl(urlParams.get('v'))
            }).catch((err) => {
                console.log(err)
            });
        }
    }

    useEffect(() =>{
        async function fetchMovie(){
            const response = await axios.get(fetchUrl)
            const data = await response.data.results
            setMovieList(data)
        }
        fetchMovie()
    }   
        ,[fetchUrl])
    return (
        <div className="row">
            <button className="button-title">{title}</button>
            <button className="explore-button">Explore All</button>

            <div className="row-poster">
                {movieList.map((movie) =>(
                    movie.backdrop_path &&
                    <img 
                    onClick={() => handleMovieClick(movie)}
                    key={movie.id} 
                    src={`${baseURL}${isFirstRow? movie.poster_path:movie.backdrop_path}`} 
                    alt={movie.title} 
                    className={`poster-img ${isFirstRow&& 'row-poster-large'}`}></img>
                    ))}
                
            </div>
            {trailerUrl && <YouTube videoId={trailerUrl} opts={opts}></YouTube>}
            
        </div>
    )
}

export default Row
