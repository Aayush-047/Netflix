import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Row.css';
import Youtube from 'react-youtube';
import movieTrailer from 'movie-trailer';

const base_url = 'https://image.tmdb.org/t/p/original';

function Row({ Title, FetchUrl }) {
    const [movies, setmovies] = useState([]);
    const [trailerUrl, settrailerUrl] = useState('');
    useEffect(() => {
        async function fetchdata() {
            const req = await axios.get(FetchUrl);
            setmovies(req.data.results);
            console.log(req.data.results);
            return req;
        }
        fetchdata();
    }, [FetchUrl])

    const opts = {
        height: '390',
        width: '100%',
        playerVars: {
            autoplay: 1,
        },
    };

    const handleClick = (movie) => {
        if (trailerUrl) {
            settrailerUrl('');
        }
        else {
            movieTrailer(movie?.name || movie?.title || movie?.original_name || "").then((url) => {
                const urlparams = new URLSearchParams(new URL(url).search);
                settrailerUrl(urlparams.get('v'));
            }).catch(err => console.log(err))
        }
    }
    const handleBannerClick = () => {
        if (trailerUrl) {
            settrailerUrl('');
        }
    };
    return (
        <div className='row' onClick={handleBannerClick}>
            <h2>{Title}</h2>
            <div className='row_posters'>
                {
                    movies?.map(movie => (
                        <img key={movie.id} src={`${base_url}${movie.poster_path}`} onClick={() => handleClick(movie)} className='row_poster' alt='posters' />
                    ))
                }
            </div>
            {trailerUrl && <Youtube videoId={trailerUrl} opts={opts}></Youtube>}
        </div >
    )
}

export default Row
