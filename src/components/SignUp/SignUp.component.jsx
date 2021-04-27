import React,{useState} from 'react';
import './sign-up.style.scss';
import {auth} from '../../firebase/firebase.util';

function SignUp({setSignIn,setSignUp,newEmail}) {
    
    const [signUpData,setSignUpData]=useState({userName:newEmail?newEmail:"",userPassword:""});
    const handleChange = (e) => { setSignUpData( (prevState) => ({...prevState,[e.target.name]:e.target.value}));}
    const toggleForm = () => {setSignUp(false);setSignIn(true);}

    const handleSignUpSubmit = (e) => {
        e.preventDefault();
        auth.createUserWithEmailAndPassword(signUpData.userName,signUpData.userPassword)
        .then( (authUser)=>{console.log(authUser);})
        .catch( (error) => {console.log(error.message);})
    }

    return (
        <div className="sign__up">
            <h1 className="sign__up__header"> Sign Up</h1>
            <form className='sign__up__form' onSubmit={handleSignUpSubmit}>
                <input type="text" placeholder='Email or phone number' autoComplete='off' name='userName' value={signUpData.userName} onChange={handleChange}/>
                <input type="password"  placeholder='password' autoComplete='off' name='userPassword' value={signUpData.userPassword} onChange={handleChange}/>
                <input type="submit" value="Sign Up"/>
            </form>
            <div className="redirect__signin">Already a Netflix User ? <span className='redirect__bold' onClick={toggleForm}>Sign in here </span></div>
        </div>
    )
}

export default SignUp;
