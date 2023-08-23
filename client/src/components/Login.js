import React, { useState } from "react";
import SignupForm from "./SignupForm";
import LoginForm from "./LoginForm";



    function Login({ setErrors, errors }) {
        const [newUser, setNewUser] = useState(false);


    return (
        <>
            
            <div className="top">   
                <h1>Welcome To Recipe Codex!</h1>
            </div>
            <div className="container">
                {newUser ? (
                    <div className="hero">
                        { errors ? <div className="errorMessage"><p>{errors.error}</p></div> : <></>}
                        <LoginForm />
                        <p className="account">Don't have an account?</p>&nbsp;
                        <button onClick={() => setNewUser(false)}>Sign Up</button>
                    </div>
                ) : (
                <div className="hero">
                    { errors ? <div className="errorMessage"><p>{errors.error}</p></div> : <></>}
                    <SignupForm />
                    <p className="account">Already have an account?&nbsp;</p>
                    <button onClick={() => setNewUser(true)}>Log In</button>
                </div>
                )}
            </div>
        </>
        
    );
    }

export default Login;