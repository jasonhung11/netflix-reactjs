import Row from "../Component/Row";
import requests from "../request";
import React from 'react'
import Banner from '../Component/Banner'

function Home() {
    return (
        <div>
            <Banner>
            </Banner>
            <div>
                <Row title='fetchTrending' fetchUrl={requests.fetchTrending} isFirstRow></Row>
                <Row title='fetchNetflixOriginals' fetchUrl={requests.fetchNetflixOriginals}></Row>
                <Row title='fetchTopRated' fetchUrl={requests.fetchTopRated}></Row>
                <Row title='fetchActionMovies' fetchUrl={requests.fetchActionMovies}></Row>
                <Row title='fetchComedyMovies' fetchUrl={requests.fetchComedyMovies}></Row>
                <Row title='fetchHorrorMovies' fetchUrl={requests.fetchHorrorMovies}></Row>
                <Row title='fetchRomanceMovies' fetchUrl={requests.fetchRomanceMovies}></Row>
                <Row title='fetchDocumentaries' fetchUrl={requests.fetchDocumentaries}></Row>
            </div>
        </div>
    )
}

export default Home;