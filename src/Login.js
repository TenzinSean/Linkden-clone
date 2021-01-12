import { SettingsSystemDaydream, SettingsSystemDaydreamRounded } from '@material-ui/icons';
import React, {useState} from 'react';
import { useDispatch } from "react-redux";
import { login } from "./features/userSlice";
import { auth } from "./firebase";
import './Login.css';


function Login() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");
    const [profilePic, setProfilePic] = useState("");
    const dispatch = useDispatch();


    const loginToApp = (e) => {
        e.preventDefault();
    };    
    const register = () => {
        if (!name) {
            return alert("Please enter a full name");
        }

        auth.createUserWithEmailAndPassword(email, password)
            .then((userAuth) => {
                userAuth.user.updateProfile({
                    displayName: name,
                    photoURL: profilePic,
                })

                .then(() => {
                    dispatch(login({
                        email: userAuth.user.email,
                        uid: userAuth.user.uid,
                        displayName: name,
                        photoUrl: profilePic,
                    }));
                });
            }).catch((error) => alert(error));

    };


    return (
        <div className="login">
            <img
                src="https://openx-prod.s3.amazonaws.com/uploads/2017/04/linkedin_logo.jpg"
                alt="linken"
            />

            <form>
                <input 
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    type="text" 
                    placeholder="Full name require (required if registering)"
                />

                <input 
                    placeholder="Profile Pic url options" 
                    type="text" 
                    value={profilePic}
                    onChange={(e) => setProfilePic(e.target.value)}
                />

                <input 
                    value={email} 
                    onChange={(e) => setEmail(e.target.value)} 
                    placeholder="Email" type="text" 
                />


                <input 
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    type="password" 
                    placeholder="Password"
                />

                <button type="submit" onClick={loginToApp}>Sign In</button>
            </form>

            <p>Not a memeber ? { " " }
                <span className="login__register" onClick={register}>Register Now</span>
            </p>

        </div>
    )
}

export default Login
