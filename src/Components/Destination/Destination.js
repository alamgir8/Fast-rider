import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { useForm } from 'react-hook-form';
import fakeData from '../FakeData/FakeData.json'
import './Destination.css'
import { Card } from 'react-bootstrap';
import Map from '../Map/Map';



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
    const setLogin = () => {
        const loginForm = document.getElementById('pickup-card');
        const destinationForm = document.getElementById('destination-card');
        loginForm.style.display = 'none';
        destinationForm.style.display = 'block';
        if (!rider) {
           alert('sorry you are not select ride option');
                  
        }
       
    }
        

            return (
                <div className="search-section pt-120">
                    <div className="container">
                        <div className="row">
                                <div id="pickup-card" className="col-12 col-lg-4">
                              <Card className="search p-3 mb-4">
                                <form className="ship-form" onSubmit={handleSubmit(onSubmit)}>
                                        <div className="form-group">
                                        <label htmlFor="">Pick From</label>
                                        <div>
                                            <input className='form-control' name="pickFrom" ref={register({ required: true })} placeholder='Uttara' required/> 
                                            {errors.pickFrom && <span className="error text-danger">Pick From is required</span>}
                                        </div>
                                        </div>
                                        <div className="form-group">
                                        <label htmlFor="">Pick To</label>
                                        <div>
                                            <input className='form-control' name="pickTo" ref={register({ required: true })} placeholder='Mirpur' required/> 
                                            {errors.pickTo && <span className="error text-danger">Pick to is required</span>}
                                        </div>
                                        </div>
                                        <button onClick={() => setLogin()} className="btn btn-primary button" type="submit" >Submit</button>
                                    </form>
                                    
                                </Card> 
                                
                            </div>
                            <div id="destination-card" className="col-12 col-lg-4 des-card">
                            {rider && <Card className=' mb-4 p-3'>
                                   <div  className='bg-color text-white rounded mb-2 p-3'>
                                       <h5 className='pick-option'>{res.pickFrom}</h5>
                                       <p className='mb-1'>To</p>
                                       <h5 className='pick-option'>{res.pickTo}</h5>
                                   </div>
                                    <div className='pickup-image rounded p-3 d-flex align-item-center '>
                                        <img src={rider.image} alt="" className="img-fluid" /> <span className='ride-name'>{title}</span><span className='ride-name'>${rider.rate}</span>
                                    </div>
                                </Card>}

                            </div>
                            <div className="col-12 col-lg-8">
                                <div className="google-map">
                                    <Map/>
                                </div>
                        </div>
                        </div>
                       
                    </div>
                    </div>
                    
            );
           
        };

        export default Destination;