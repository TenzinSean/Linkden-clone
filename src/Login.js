import React, {useState} from 'react'
import './Login.css';


function Login() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");


    const loginToApp = (e) => {
        e.preventDefault();
    };    
    const register = () => {

    };


    return (
        <div className="login">
            <img
                src="https://openx-prod.s3.amazonaws.com/uploads/2017/04/linkedin_logo.jpg"
                alt="linken"
            />

            <form>
                <input 
                    type="text" 
                    placeholder="Full name require"
                />

                <input placeholder="Profile Pic url" type="text" />

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
