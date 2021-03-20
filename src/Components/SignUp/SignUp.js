import React, { useContext } from 'react';
import Form from "react-bootstrap/Form";
import firebase from "firebase/app";
import "firebase/auth";
import { useState } from "react";
import { Link, useHistory, useLocation } from 'react-router-dom';
import { userContext } from '../../App';
import firebaseConfig from '../../firebase.config';




!firebase.apps.length && firebase.initializeApp(firebaseConfig);

            const SignUp = () => {
                const [login, setLogin] = useContext(userContext);
                const history = useHistory();
                const location = useLocation();
                const { from } = location.state || { from: { pathname: "/" } };
                const [user, setUser] = useState({
                    name: '',
                    email: '',
                    password: '',
                    error: '',
                   })

                   const googleProvider = new firebase.auth.GoogleAuthProvider();
                    const handleGoogleSignIn = () => {
                        firebase.auth()
                        .signInWithPopup(googleProvider)
                        .then((res) => {
                        const user = res.user;
                        setLogin(user);
                        history.replace(from);
                                
                        }).catch((error) => {
                        const errorMessage = error.message;
                        const email = error.email;
                        console.log(errorMessage, email);
                        });
                    }

                
                
                const handleBlur = (e) => {
                    let isFormFieldValid = true;
                    if (e.target.name === 'email') {
                        isFormFieldValid = /\S+@\S+\.\S+/.test(e.target.value);
                    }
                    if (e.target.name === 'password') {
                        const isPasswordValid = e.target.value.length > 8;
                        const isPasswordHasNumber = /\d{1}/.test(e.target.value);
                        isFormFieldValid = isPasswordValid && isPasswordHasNumber;
                    }
                 
                    if (isFormFieldValid) {
                        const newUserInfo = {...user};
                        newUserInfo[e.target.name] = e.target.value;
                        setUser(newUserInfo);
                    }
                }
                
                const handleSubmit = (e) => {
          
                if (user.email && user.password) {
                    firebase.auth().createUserWithEmailAndPassword(user.email, user.password)
                    .then((res) => {
                        const newUserInfo = {...user};
                        newUserInfo.error = '';
                        setUser(newUserInfo);
                        updateUserName(user.name)
                        
                    })
                    .catch((error) => {
                        const errorMessage = error.message;
                        const newUserInfo = {...user};
                        newUserInfo.error = errorMessage;
                        setUser(newUserInfo);
                        
                   
                    });
                    
                }
                e.preventDefault();
                }

                const updateUserName = name => {
                    const user = firebase.auth().currentUser;
                
                    user.updateProfile({
                      displayName: name,
                      
                    })
                  
                   }

            return (
                    <div className="container">
                        <div className="login m-auto mt-5 p-5">
                            <form onSubmit={handleSubmit}>
                                <Form.Group >
                                    <Form.Control  onBlur={handleBlur} name='name' type="text" placeholder='Username' required/>
                                </Form.Group>
                                <Form.Group >
                                    <Form.Control  onBlur={handleBlur} name='email' type="email" placeholder='Email' required/>
                                </Form.Group>
                                 <p className='text-danger'>{user.error}</p>
                                <Form.Group >
                                    <Form.Control  onBlur={handleBlur} name='password' type="password" placeholder='Password' required/>
                                </Form.Group>
                                {/* <Form.Group >
                                    <Form.Control  onBlur={handleBlur} name='password' type="password" placeholder='Confirm password' required/>
                                </Form.Group> */}
                                <button className='btn btn-warning w-100'>Create an account</button>
                            </form>
                            <span className='text-center m-auto'>Already have an account? <Link to="/login">Login</Link></span>
                    </div>
                            <p className='text-center'>---------------------Or-----------------------</p>
                        <div className='text-center'>
                            <button className='btn btn-info' onClick={handleGoogleSignIn}>Continue With Google</button>
                        </div>
                       
                </div>
            );
};

export default SignUp;