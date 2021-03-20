import React, { useContext } from 'react';
import { Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { userContext } from '../../App';

const Header = () => {
        const [login, setLogin] = useContext(userContext);
       
    return (
        <div className='container'>
             <Nav className="justify-content-end" activeKey="/home">
                <Nav.Item className='p-4'>
                        <Link to="/home">Home</Link>
                </Nav.Item>
                <Nav.Item className='p-4'>
                        <Link to="/destination">Destination</Link>
                </Nav.Item>
                <Nav.Item className='p-4'>
                        <Link to="/contact">Contact</Link>
                </Nav.Item>
                <Nav.Item className='p-4'>
                        {login.displayName ? <p>{login.displayName}</p> : <Link to="/login">Login</Link>
                        }
                        
                </Nav.Item>
            </Nav>
        </div>
    );
};

export default Header;