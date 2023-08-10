import React from 'react';
import Row from '../Row';
import fetchdata from '../fetchdata';
import Banner from '../Banner';
import Navbar from '../Navbar';
// import Navbar from '../Navbar';

function Home() {
    return (
        <div>
            <Navbar />
            <Banner />
            <Row Title='Trending Now' FetchUrl={fetchdata.fetchTrending} />
            <Row Title='Top Rated' FetchUrl={fetchdata.fetchTopRated} />
            <Row Title='Netflix Originals' FetchUrl={fetchdata.fetchNetflixOriginals} />
        </div>
    )
}

export default Home
