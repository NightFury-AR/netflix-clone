import React, { useState } from 'react';
import './sign-in.style.scss';
import {auth} from '../../firebase/firebase.util';

function SignIn({setSignIn,setSignUp}) {
    
    const [signInData,setSignInData]=useState({userName:"",userPassword:""});

    const handleChange = (e) => {
        setSignInData( (prevState) => ({...prevState,[e.target.name]:e.target.value}));
    }

    const toggleForm = () => { setSignIn(false);setSignUp(true);}

    const handleSignInSubmit = (e) => {
        e.preventDefault();
        auth.signInWithEmailAndPassword(
            signInData.userName,
            signInData.userPassword
        ).then((authUser)=> {console.log(authUser);})
        .catch((error)=>console.log(error.messsage));
    }

    return (
        <div className="sign__in">
            <h1 className="sign__in__header"> Sign In</h1>
            <form className='sign__in__form' onSubmit={handleSignInSubmit}>
                <input type="text" placeholder='Email or phone number' autoComplete='off' name='userName' value={signInData.userName} onChange={handleChange}/>
                <input type="password"  placeholder='password' name='userPassword' autoComplete='off' value={signInData.userPassword} onChange={handleChange}/>
                <input type="submit" value="Sign In"/>
            </form>
            <div className="redirect__signup">New to Netflix ? <span className='redirect__bold' onClick={toggleForm}>Sign Up Now </span></div>
        </div>
    )
}

export default SignIn;
