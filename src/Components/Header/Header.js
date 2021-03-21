import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { userContext } from '../../App';
import './Header.css';
import logo from '../../img/logo.png'

const Header = () => {
     
        const [login, setLogin] = useContext(userContext);
       
    return (
        <section className="header">
        <nav id="navbar" className="navbar text-center navbar-expand-md mb-5">
            <div className="container">
                <Link to="/home" className="nav-link active px-3"><h2><img src={logo} alt="logo" className='img-fluid'/></h2></Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
                <ul className="navbar-nav ml-auto mb-lg-0 nav justify-content-end">
                    <li className="nav-item pt-2">            
                        <Link to="/home" className="nav-link px-3 h6"> Home </Link>
                    </li>
                    <li className="nav-item pt-2">
                        <Link to='/destination' className="nav-link px-3 h6">Destination</Link>
                    </li>
                    <li className="nav-item pt-2">
                        <Link to="/home" className="nav-link px-3 h6"> Contact </Link>
                    </li>
                    <li className="nav-item pt-2">
                        <Link to="/home" className="nav-link active px-3 h6"> Blog </Link>
                    </li>
                    <li className="nav-item pt-2">
                        {login.displayName ? <span className="nav-link active px-3 h6">{login.displayName}</span> : <Link to="/login" className="nav-link active px-3 h6 login-button">Login</Link>}
                    </li>
                </ul>
                </div>
            </div>
        </nav>
    </section>
       
    );
};

export default Header;