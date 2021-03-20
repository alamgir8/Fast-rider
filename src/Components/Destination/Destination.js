import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { useForm } from 'react-hook-form';
import fakeData from '../FakeData/FakeData.json'
import './Destination.css'

const Destination = () => {
        const {title} = useParams();
        const [rider, setRider] = useState([]);
        const [res, setRes] = useState();
        useEffect(() => {
            let result = fakeData.find(element => element.title === title);
           setRider(result)
           console.log(result);
           
                
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
            console.log(data);
            console.log(rider);
            
        };
     
    

            return (
                <div className="search-section pt-120">
                    <div className="container">
                        <div className="row">
                                <div className="col-12 col-lg-5">
                                <div className="search p-3 w-25">
                                <form className="ship-form" onSubmit={handleSubmit(onSubmit)}>
                                        <div className="form-group">
                                        <label htmlFor="">Pick From</label>
                                        <div>
                                            <input className='form-control' name="pickFrom" ref={register({ required: true })} placeholder='Uttara'/> 
                                            {errors.pickFrom && <span className="error text-danger">Pick From is required</span>}
                                        </div>
                                        </div>
                                        <div className="form-group">
                                        <label htmlFor="">Pick To</label>
                                        <div>
                                            <input className='form-control' name="pickTo" ref={register({ required: true })} placeholder='Mirpur'/> 
                                            {errors.pickTo && <span className="error text-danger">Pick to is required</span>}
                                        </div>
                                        </div>
                                        <button className="btn btn-primary" type="submit">Submit</button>
                                    </form>
                                </div> 
                                {/* <div>
                                    <div>
                                        <img src={rider.image} alt="" className="img-fluid w-25" />
                                    </div>
                                </div> */}
                            </div>
                            <div className="col-12 col-lg-7">

                            </div>
                        </div>
                    </div>
                    </div>
            );
        };

        export default Destination;