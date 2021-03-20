import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { useForm } from 'react-hook-form';
import fakeData from '../FakeData/FakeData.json'
import './Destination.css'
import { Card } from 'react-bootstrap';


const Destination = () => {
        const {title} = useParams();
        const [rider, setRider] = useState([]);
        const [res, setRes] = useState({});
        useEffect(() => {
            let result = fakeData.find(element => element.title === title);
           setRider(result)
          
                
        }, []);

        // const handleBlur = (e) =>{
        //     console.log(e.target.name, e.target.value);
        // }

        // const handleSubmit = (e) => {
        //     console.log(e.target.value);
        //     e.preventDefault();
        // }
        const { register, handleSubmit, errors } = useForm();
        const submit = false;

        const onSubmit = data => {
            const submit = true;
            setRes(data)
           
            
        };
    
        

            return (
                <div className="search-section pt-120">
                    <div className="container">
                        <div className="row">
                                <div className="col-12 col-lg-3">
                              <div className="search p-3">
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
                                        <button  className="btn btn-primary" type="submit" >Submit</button>
                                    </form>
                                   
                                </div> 
                                
                            </div>
                            <div className="col-12 col-lg-3">
                            {rider && <Card className=' my-5'>
                                   <div  className='text-center bg-info mb-5 pt-2'>
                                       <h5>{res.pickFrom}</h5>
                                       <p >To</p>
                                       <h5>{res.pickTo}</h5>
                                   </div>
                                    <div className='pickup-image mb-4'>
                                        <img src={rider.image} alt="" className="img-fluid mx-3" /> <span className="mx-3">{title}</span><span className="mx-3">${rider.rate}</span>
                                    </div>
                                </Card>}

                            </div>
                        </div>
                        <div className="col-12 col-lg-6">
                           
                        </div>
                    </div>
                    </div>
                    
            );
           
        };

        export default Destination;