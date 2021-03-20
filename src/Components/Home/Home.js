import React, { useEffect, useState } from 'react';
import fakeData from '../FakeData/FakeData.json'
import Riders from '../Riders/Riders';

import './Home.css'

const Home = () => {
    const [riders, setRiders] = useState([]);

    useEffect(() => {
        setRiders(fakeData);
    }, [])
    return (
        <div className="hero-section pt-120">
             <div className='container'>
               <div className="row">
               {
                    riders.map(rider => <Riders rider={rider} key={rider.id}></Riders>)
                }
               </div>
            </div>
        </div>
    );
};

export default Home;