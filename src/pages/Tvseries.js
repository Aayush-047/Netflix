import React from 'react';
import Row from '../Row';
import fetchdata from '../fetchdata';
import Navbar from '../Navbar';
function Tvseries() {
    return (
        <div>
            <Navbar />
            <div style={{ paddingTop: 80 }}>
                <Row Title='Popular' FetchUrl={fetchdata.fetchPopularTv} />
                <Row Title='TopRated' FetchUrl={fetchdata.fetchTopRatedTv} />
                <Row Title='Documentaries' FetchUrl={fetchdata.fetchDocumentaries} />
            </div>
        </div>
    )
}

export default Tvseries
