import React,{useState} from 'react';
import './landing-screen.style.scss';
import SignIn from '../SignIn/SignIn.component';
import SignUp from '../SignUp/SignUp.component';

function LandingScreen() {
    const [signIn,setSignIn] = useState(false);
    const [signUp,setSignUp] = useState(false);
    const [newEmail,setNewEmail] = useState('');

    const handleSignUpButton = (e) => {setSignUp(true);}
    const handleEmailChange = (e) => { setNewEmail(e.target.value);}

    return (
        <div className="landing">
            <div className="landing__overlay"></div>
            
            <div className="landing__nav">
                <img className='brand__logo'
                    src='http://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png'
                    alt="netflix-brand" 
                />
                { !signIn && <button onClick={()=>setSignIn(true)} className="redButton">Sign In</button>}
            </div>

            
            <div className="landing__content">
                { (signIn || signUp) ? 
                (signIn ? <SignIn setSignIn={setSignIn} setSignUp={setSignUp} /> : <SignUp newEmail={newEmail} setSignIn={setSignIn} setSignUp={setSignUp}/>)
                :
                <>
                <h1 className='landing__h1'>Unlimited movies, TV shows and more.</h1>
                <h3 className="landing__sub">Watch anywhere. Cancel anytime.</h3>
                <h3 className="landing__desc">Ready to watch? Enter your email to create or restart your membership.</h3>
                <form className='landing__getstarted'>
                    <input className='email__input' placeholder='enter your email here' onChange={handleEmailChange} type="email" name="signUpEmail" id="signUpEmail"/>
                    <input className='button__input' type="submit" value="GET STARTED  >" onClick={handleSignUpButton}/>
                </form>
                </>
                }
            </div>



        </div>
    )
}

export default LandingScreen;
