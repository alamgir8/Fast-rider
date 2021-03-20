import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { useForm } from 'react-hook-form';
import fakeData from '../FakeData/FakeData.json'
import './Destination.css'

const Destination = () => {
        const {riderId} = useParams();
        const [rider, setRider] = useState([]);
        const [res, setRes] = useState();
        useEffect(() => {
            let result = fakeData.find(element => element.id = riderId);
            setRider(result);
           
                
        }, []);

        // const handleBlur = (e) =>{
        //     console.log(e.target.name, e.target.value);
        // }

        // const handleSubmit = (e) => {
        //     console.log(e.target.value);
        //     e.preventDefault();
        // }
        const { register, handleSubmit, errors } = useForm();
        const onSubmit = data => {
            setRes(data)
        };
     
    

            return (
                <div className='container'>
                   {handleSubmit ? <div className="search p-3 w-25">
                    <form className='ship-form' onSubmit={handleSubmit(onSubmit)}>
                        <label htmlFor="">Pick From</label>
                            <div>
                            <input name="pickFrom" ref={register({ required: true })} placeholder='Uttara'/>
                            {errors.address && <span className='error' >Address is required</span>}
                            </div>
                        <label htmlFor="">Pick To</label>
                           <div>
                           <input name="pickTo" ref={register({ required: true })} placeholder='Mirpur'/>
                            {errors.phone && <span className='error' >Phone is required</span>}
                           </div>
                        
                        
                        <input type="submit" />
                    </form>  
                    </div>:
                    <div className='booking-card p-3 w-25"'>
                            <h3>{res.pickFrom}</h3>
                            <p>To</p>
                            <h3>{res.pickTo}</h3>
                        </div>}
                </div>
            );
        };

        export default Destination;