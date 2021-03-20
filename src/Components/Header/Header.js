import React, { useContext } from 'react';
import { Link, useParams } from 'react-router-dom';
import { userContext } from '../../App';
import './Header.css';
import logo from '../../img/logo.png'

const Header = () => {
     
        const [login, setLogin] = useContext(userContext);
       
    return (
        <section className="header sticky-top">
        <nav id="navbar" className="navbar text-center navbar-expand-md mb-5">
            <div className="container">
                
                <Link to="/home" className="nav-link active px-3"><h2><img src={logo} alt="logo" className='img-fluid'/></h2></Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
                <ul className="navbar-nav ml-auto mb-lg-0 nav justify-content-end">
                <li className="nav-item pt-2">
                        <span>                           
                            <Link to="/home" className="nav-link active px-3 "> <h5>Home</h5></Link>
                        </span>
                    </li>
                    <li className="nav-item pt-2">
                        <span>
                                <Link to='/destination' className="nav-link active px-3 "> <h5>Destination</h5></Link>
                        </span>
                    </li>
                    <li className="nav-item pt-2">
                        <span>
                            <a className="nav-link active px-3"  href="#navbar">
                            <h5>Contact</h5>
                            </a>
                        </span>
                    </li>
                    <li className="nav-item pt-2">
                        <span>
                            <a className="nav-link active px-3" href="#navbar">
                            <h5>Blog</h5>
                            </a>
                        </span>
                    </li>
                    <li className="nav-item pt-2">
                        <span>
                            <a className="nav-link active px-3"  href="#navbar">
                            <h5>{login.displayName ? <p>{login.displayName}</p> : <Link to="/login">Login</Link>}</h5>
                            </a>
                        </span>
                    </li>
                </ul>
                </div>
            </div>
        </nav>
    </section>
        // <div className='container'>
        //     {/* <Nav className="justify-content-left" activeKey="/home">
        //         <Nav.Item className='p-4'>
        //                 <Link to="/home">Home</Link>
        //         </Nav.Item>
        //     </Nav> */}
  
        //      <Nav  activeKey="/home">
        //         <Nav.Item className='p-4 justify-content-left'>
        //                 <Link to="/home">Home</Link>
        //         </Nav.Item>
        //         <Nav.Item className='p-4 justify-content-right' >
        //                 <Link to="/home">Home</Link>
        //         </Nav.Item>
        //         <Nav.Item className='p-4'>
        //                 <Link to="/destination">Destination</Link>
        //         </Nav.Item>
        //         <Nav.Item className='p-4'>
        //                 <Link to="/contact">Contact</Link>
        //         </Nav.Item>
        //         <Nav.Item className='p-4'>
        //                 {login.displayName ? <p>{login.displayName}</p> : <Link to="/login">Login</Link>
        //                 }
                        
        //         </Nav.Item>
        //     </Nav>
        // </div>
    );
};

export default Header;