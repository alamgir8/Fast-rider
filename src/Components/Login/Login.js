
import Form from "react-bootstrap/Form";
import './Login.css'
import firebase from "firebase/app";
import "firebase/auth";
import { useContext, useState } from "react";
import { Link, useHistory, useLocation } from "react-router-dom";
import { userContext } from "../../App";
import firebaseConfig from "../../firebase.config";

!firebase.apps.length && firebase.initializeApp(firebaseConfig);

export default function Login() {
  const [login, setLogin] = useContext(userContext);
  const history = useHistory();
  const location = useLocation();
  const { from } = location.state || { from: { pathname: "/" } };
    const [user, setUser] = useState({
        name:'',
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
        let isFormValid = true;
        if (e.target.name === 'email') {
            isFormValid = /\S+@\S+\.\S+/.test(e.target.value);
        }
        if (e.target.name === 'password') {
            const isPasswordValid = e.target.value.length > 8;
            const isPasswordHasNumber = /\d{1}/.test(e.target.value);
            isFormValid = isPasswordValid && isPasswordHasNumber;
          }
        if (isFormValid) {
            const newUser = {...user};
            newUser[e.target.name] = e.target.value;
            setUser(newUser);
        }
    }
    
    const handleSubmit = (e) => {
     
      if (user.email && user.password) {
        firebase.auth().signInWithEmailAndPassword(user.email, user.password)
        .then((res) => {
            const user = res.user;
            setLogin(user);
            setUser(user);
            history.replace(from);
            console.log(user.displayName);
       
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

   

  return (
        <div className="container">
            <div className="login m-auto mt-5 p-5">
             
                <form onSubmit={handleSubmit}>
                    <Form.Group >
                        <Form.Control  onBlur={handleBlur} name='email' type="email" placeholder='Email' required/>
                    </Form.Group>
                        <Form.Group >
                        <Form.Control  onBlur={handleBlur} name='password' type="password" placeholder='Password' required/>
                    </Form.Group>
                    <p className='text-danger'>{user.error}</p>
                    <button className='btn btn-success w-100'>Login</button>
                    <span>Don't have an account? </span><Link to="/signup">Sign Up</Link>
                  
                </form>
         </div>
            <p className='text-center'>---------------------Or-----------------------</p>
                  <div className='text-center'>
                        <button className='btn btn-info' onClick={handleGoogleSignIn}>Continue With Google</button>
                  </div>
     </div>
  );
}