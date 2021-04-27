import React,{useState,useEffect} from 'react';
import './navbar-style.scss';
import {useHistory} from 'react-router-dom';


function NavBar() {
    const history = useHistory();
    const [Show, setShow] = useState(false);

    const transitionNavBar = () => {
        if(window.scrollY > 100) {
            setShow(true);
        }
        else {
            setShow(false);
        }
    }

    useEffect(() => {
        window.addEventListener("scroll",transitionNavBar);
        return () => {
            window.removeEventListener("scroll",transitionNavBar);
        }
    }, []);

    return (
        <div className={`navbar ${Show && "nav__black"}`}>

                   
               <img className='brand__logo'
                    src='http://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png'
                    alt="netflix-brand" 
                    onClick={()=>history.push('/')}
                />

                <img className='user__logo'
                    src="https://mir-s3-cdn-cf.behance.net/project_modules/disp/84c20033850498.56ba69ac290ea.png"
                    alt="netflix-user" 
                    onClick={()=>history.push('/profile')}
                />
               

        </div>

    )
}

export default NavBar;
