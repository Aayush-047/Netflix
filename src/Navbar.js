import React from 'react'
import { Link } from 'react-router-dom';
import Home from './pages/Home';
// import Contact from './pages/Contact';
import Movies from './pages/Movies';
import TvSeries from './pages/Tvseries';

export default function Navbar() {
    return (
        <div className='Navbar'>
            {/* Navbar */}
            <nav style={{ position: 'fixed', zIndex: 1, display: 'flex', marginLeft: 20, alignItems: 'center' }}>
                {/* <div className='container-fluid'> */}
                <ul className='nav navbar-nav' style={{ display: 'contents' }}>
                    <li>
                        <Link to="/Home">
                            <div className="navbar-header">
                                <img src='https://cdn-icons-png.flaticon.com/512/5977/5977590.png' alt='Netflix' style={{ width: 120, paddingRight: 30 }}></img>
                            </div>
                        </Link>
                    </li>
                    <li>
                        <Link to="/movies" style={{ color: 'white', textDecoration: 'none', paddingRight: 25 }}>Movies</Link>
                    </li>
                    <li>
                        <Link to="/tvseries" style={{ color: 'white', textDecoration: 'none', paddingRight: 25 }}>TV Series</Link>
                    </li>
                    <li style={{ marginLeft: 1050 }}>
                        <Link to="/" style={{ textDecoration: 'none' }}>
                            <button style={{
                                paddingLeft: 12,
                                paddingRight: 13,
                                paddingTop: 5,
                                paddingBottom: 5,
                                borderRadius: 5,
                                backgroundColor: 'red',
                                color: 'white',
                                display: 'flex'
                            }}>Logout <div class="logout-icon">
                                    <i class="fas fa-sign-out-alt" style={{ marginLeft: 8 }}></i>
                                </div></button>
                        </Link>
                    </li>
                </ul>
                {/* </div> */}
            </nav>

            {/* Route Components */}
            {/* <Routes> */}
            {/* <Route path="/Home" element={<Home />} /> */}
            {/* <Route path="/contact" element={<Contact />} /> */}
            {/* <Route path="/movies" element={<Movies />} /> */}
            {/* <Route path="/tvseries" element={<TvSeries />} /> */}
            {/* </Routes> */}
        </div>
    )
}
