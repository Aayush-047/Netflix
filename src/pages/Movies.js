import React from 'react'
import Row from '../Row';
import fetchdata from '../fetchdata';
import Navbar from '../Navbar';
function Movies() {
    return (
        <div>
            <Navbar />
            <div style={{ paddingTop: 80 }}>
                <Row Title='Comedy Movies' FetchUrl={fetchdata.fetchComedyMovies} />
                <Row Title='Horror Movies' FetchUrl={fetchdata.fetchHorrorMovies} />
                <Row Title='Romantic Movies' FetchUrl={fetchdata.fetchRomanceMovies} />
                <Row Title='Action Movies' FetchUrl={fetchdata.fetchActionMovies} />
            </div>
        </div>
    )
}

export default Movies
