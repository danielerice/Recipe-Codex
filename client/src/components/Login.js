import React, { useState } from "react";
import SignupForm from "./SignupForm";
import LoginForm from "./LoginForm";



    function Login() {
        const [newUser, setNewUser] = useState(false);


    return (
        <div className="container-fluid">
            
            <div className="row justify-content-center">
                <div className="col-xsm-12 col-lg-6 text-center">
                    <h1>Welcome To Recipe Codex!</h1>
                </div>
            </div>
            <div className="">
                {newUser ? (
                    <>
                        <div className="row justify-content-center gy-5">
                            <LoginForm/>
                        </div>
                        <div className="row text-center gy-5">
                            <p className="account">Don't have an account?</p>
                        </div>
                        <div className="row  d-flex justify-content-center text-center">
                            <div className="col-lg-2 col-sm-1">
                                <button onClick={() => setNewUser(false)} type="button" className="btn btn-primary btn-lg">Sign Up</button>
                            </div>
                        </div>
                    </>
                ) : (
                <>
                    <div className="row justify-content-center">
                        <SignupForm />
                    </div>
                    <div className="row text-center">
                        <p className="account">Already have an account?</p>
                    </div>
                    <div className="row  d-flex justify-content-center text-center">
                        <div className="col-lg-2 col-sm-1">
                            <button onClick={() => setNewUser(true)} type="button" className="btn btn-primary btn-lg">Log In</button>
                        </div>
                    </div>
                </>
                )}
            </div>
        </div>
        
    );
    }

export default Login;