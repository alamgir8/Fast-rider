import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Rider = (props) => {
    const {id, image, title} = props.rider;
    return (
        <div className='col-12 col-lg-3 col-md-3'>
            <Card className='my-5'>
                <Card.Img src={image} alt='rider' className='img-fluid w-75 m-auto p-3'/>
                <Card.Body>
                    <Card.Title className='text-center'>{title}</Card.Title>
                    <Card.Text>
                        Enjoy fast speed ride with this {title}
                    </Card.Text>
                    
                        <Link to={`/destination/${id}`}>Ride with {title}</Link>
                    
                   
                </Card.Body>
                </Card>
        </div>
    );
};

export default Rider;