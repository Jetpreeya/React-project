import React, { useState } from 'react'
import { Navigate } from 'react-router-dom'
import firebaseConfig from '../../config'

const Register = () => {
    const [currentUser, setCurrentUser] = useState(null);

    const handleSubmit = (e) => {
        e.preventDefault();
        const { email, password } = e.target.elements;
        try {
            firebaseConfig.auth().createUserWithEmailAndPassword(email.value, password.value);
            setCurrentUser(true);

        } catch (error) {
            alert(error);
        }
    }
// Should I use Navigate or Link ?
    if (currentUser) {
        return <Navigate to = "/dashboard" />
    }
        return (
            <>
                <button type="button" className="btn btn-outline-info ms-2" data-bs-toggle="modal" data-bs-target="#NewModal">
                    <i className="fa fa-sign-in me-1 fa-2x"></i> Register
                </button>

                <div className="modal fade" id="NewModal" tabIndex="-1" aria-labelledby="NewModal" aria-hidden="true">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="NewModal">Registration</h5>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div className="modal-body">
                                <form onSubmit={handleSubmit}>
                                    <div className="mb-3">
                                        <label htmlFor="NewInputName" className="form-label">First Name</label>
                                        <input type="text" className="form-control" id="NewInputName" />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="NewInputLast" className="form-label">Last Name</label>
                                        <input type="text" className="form-control" id="NewInputLast" />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="NewInputEmail1" className="form-label">Email address</label>
                                        <input type="email" name="email" className="form-control" id="NewInputEmail1" aria-describedby="emailHelp" />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="NewInputPassword1" className="form-label">Password</label>
                                        <input type="password" name="password" className="form-control" id="NewInputPassword1" />
                                    </div>

                                    <button type="submit" className="btn btn-success w-30 ms-3 ">Register</button>
                                    <button type="submit" className="btn btn-danger w-30 ms-3">Cancle</button>

                                    <div className="modal-body">
                                        <button className="btn btn-primary w-100 mb-4">
                                            <span className="fa fa-google me-2"></span> Register With Google
                                        </button>
                                        <button className="btn btn-primary w-100 mb-2">
                                            <span className="fa fa-facebook me-2"></span> Register With Facebook
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </>

        )
    }

    export default Register