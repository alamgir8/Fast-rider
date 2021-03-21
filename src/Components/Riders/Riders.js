import React from 'react';
import { Link } from 'react-router-dom';
import './Riders.css'

const Rider = (props) => {
    const {image, title} = props.rider;
    return (
        <div className='col-12 col-lg-3 col-md-3 my-3'>
            <Link to={`/destination/${title}`} className='text-white m-auto'>
                <div className='custom-card'>
                    <img src={image} alt='rider' className='img-fluid m-auto p-4 pt-0'/>
                    <h2 className='text-dark text-center'>{title}</h2>  
                </div>
            </Link>
        </div>
    );
};

export default Rider;