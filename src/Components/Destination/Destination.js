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
                    <div className='container'>
                        <div className="search p-3 w-25">
                            <form className='ship-form' onSubmit={handleSubmit(onSubmit)}>
                                <div className="form-group">
                                <label htmlFor="">Pick From</label>
                                <div>
                                <input className='form-control' name="pickFrom" ref={register({ required: true })} placeholder='Uttara'/>
                                {errors.address && <span className='error' >Address is required</span>}
                            </div>
                                </div>
                            <div className="form-group">
                            <label htmlFor="">Pick To</label>
                           <div>
                           <input className='form-control' name="pickTo" ref={register({ required: true })} placeholder='Mirpur'/>
                            {errors.phone && <span className='error' >Phone is required</span>}
                           </div>
                            </div>
                            <button className='btn btn-primary' type="submit">Submit</button>
                            </form>  
                            </div>
                           <div>
                             {handleSubmit && <div>
                               <h4>{res.pickFrom}</h4>
                               <p>To</p>
                               <h4>{res.pickTo}</h4>
                              </div>
                              }
                              <div>
                                  <img src={rider.image} alt="" className='img-fluid w-25'/>
                              </div>
                           </div>
                        </div>
                </div>
            );
        };

        export default Destination;