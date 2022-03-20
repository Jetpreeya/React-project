import React, { useState } from 'react'
import fakeAuth from "fake-auth";

// For Login I want to click Login and Show message that you are login 
const Login = (props) => {
    const [ setError] = useState();
    const google = () => {
        window.open("https://www.google.com/", "_self");
    };
    const facebook = () => {
        window.open("https://www.facebook.com/", "_self");
    };

    const handleSubmit = (email, pass) => {
        fakeAuth
            .signin(email, pass)
            .then((response) => {
                props.onSignin(response.user);
            })
            .catch((error) => {
                setError(error);
            });
    };



    return (
        <>
            <button type="button" className="btn btn-outline-success ms-2" data-bs-toggle="modal" data-bs-target="#exampleModal">
                <i className="fa fa-user me-1 fa-2x"></i> Login
            </button>

            <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Member Login</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <form
                                onSubmit={(event) => {
                                    const [email, pass] = event.target.children;
                                    handleSubmit(email, pass);
                                }}>
                                <div className="mb-3">
                                    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                                    <input type="email" name="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" required />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                                    <input type="password" name="password" className="form-control" id="exampleInputPassword1" required />
                                </div>
                                <div className="mb-3 form-check">
                                    <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                                    <label className="form-check-label" htmlFor="exampleCheck1">Remember me</label>
                                </div>
                                <button type="submit" className="btn btn-primary w-100 ">Login</button>


                                <div className="modal-body">
                                    <div className="loginButton google" onClick={google}>
                                        <button className="btn btn-outline-info w-100 mb-4">
                                            <span className="fa fa-google me-2"></span> Login With Google
                                        </button>
                                    </div>
                                    <div className="loginButton google" onClick={facebook}>
                                        <button className="btn btn-outline-info w-100 mb-2">
                                            <span className="fa fa-facebook me-2"></span> Login With Facebook
                                        </button>
                                    </div>
                                </div>
                            </form>
                            <p>
                                Need an Account?<br />
                                <span className="line">
                                    <a href="/">Register</a>
                                </span>
                            </p>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Login