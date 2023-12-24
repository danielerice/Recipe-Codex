import React, { useState } from "react";
import SignupForm from "./SignupForm";
import LoginForm from "./LoginForm";



    function Login() {
        const [newUser, setNewUser] = useState(false);


    return (
        <>
            
            <div className="top">   
                <h1>Welcome To Recipe Codex!</h1>
            </div>
            <div className="container">
                {newUser ? (
                    <div className="hero">
                        <LoginForm />
                        <p className="account">Don't have an account?</p>&nbsp;
                        <button onClick={() => setNewUser(false)} className="bttn">Sign Up</button>
                    </div>
                ) : (
                <div className="hero">
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