import React, { useState } from "react";
import SignupForm from "./SignupForm";
import LoginForm from "./LoginForm";



    function Login() {
        const [newUser, setNewUser] = useState(false);


    return (
        <div className="container-fluid justify-content-center">
            
            <div className="row">
                <div className="col-sm-12 col-lg-6">
                    <h1>Welcome To Recipe Codex!</h1>
                </div>
            </div>
            <div className="">
                {newUser ? (
                    <>
                        <div className="row">
                            <LoginForm/>
                        </div>
                        <div className="row">
                            <p className="account">Don't have an account?</p>
                        </div>
                        <div className="row">
                            <button onClick={() => setNewUser(false)} className="bttn">Sign Up</button>
                        </div>
                    </>
                ) : (
                <>
                    <div className="row">
                        <SignupForm />
                    </div>
                    <div className="row">
                        <p className="account">Already have an account?&nbsp;</p>
                    </div>
                    <div className="row">
                        <button onClick={() => setNewUser(true)}>Log In</button>
                    </div>
                </>
                )}
            </div>
        </div>
        
    );
    }

export default Login;