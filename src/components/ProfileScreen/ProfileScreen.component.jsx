import React from 'react';
import './profile-screen.style.scss';

import NavBar from '../../components/NavBar/NavBar.component';
import { useSelector } from 'react-redux';
import {selectUser} from '../../features/user/userSlice';
import {auth} from '../../firebase/firebase.util';

function ProfileScreen() {
    const user = useSelector(selectUser);
    return (
        <div className="profile">
            <NavBar/>
            <div className="profile__banner">
                <h1>Edit Profile</h1>
                <div className="profile__details">
                    <img className='profile__logo'
                    src="https://mir-s3-cdn-cf.behance.net/project_modules/disp/84c20033850498.56ba69ac290ea.png"
                    alt="netflix-user" 
                    />

                    <div className="profile__info">
                        <div className="profile__name"> {user.email}</div>
                        <div className="plan__header"> Plans  (active : no plans)</div>
                        
                        <div className="plan__section">
                            <div className="plan__details">
                                <div className="plan__name">Netflix standard</div>
                                <div className="plan__price">Rs 299</div>
                            </div>
                            <div className="plan__subscription"> Subscribe </div>
                        </div>

                        <div className="plan__section">
                            <div className="plan__details">
                                <div className="plan__name">Netflix standard</div>
                                <div className="plan__price">Rs 299</div>
                            </div>
                            <div className="plan__subscription"> Subscribe </div>
                        </div>

                        <div className="plan__section">
                            <div className="plan__details">
                                <div className="plan__name">Netflix standard</div>
                                <div className="plan__price">Rs 299</div>
                            </div>
                            <div className="plan__subscription"> Subscribe </div>
                        </div>

                        <div onClick={()=>auth.signOut()} className="logout__button"> Log Out</div>
                    </div>

                </div>
                

            </div>
        </div>
        )
};

export default ProfileScreen;
