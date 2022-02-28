import React from 'react';

const Register = () => {
    return (
        <>
            <button type="button" className="btn btn-outline-info ms-2" data-bs-toggle="modal" data-bs-target="#NewModal">
            <i className="fa fa-sign-in me-1 fa-2x"></i> Register
            </button>

            <div class="modal fade" id="NewModal" tabindex="-1" aria-labelledby="NewModal" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="NewModal">Registration</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <form>
                            <div className="mb-3">
                                    <label for="NewInputName" className="form-label">First Name</label>
                                    <input type="text" className="form-control" id="NewInputName"/>
                                </div>
                                <div className="mb-3">
                                    <label for="NewInputLast" className="form-label">Last Name</label>
                                    <input type="text" className="form-control" id="NewInputLast"/>
                                </div>
                                <div className="mb-3">
                                    <label for="NewInputEmail1" className="form-label">Email address</label>
                                    <input type="email" className="form-control" id="NewInputEmail1" aria-describedby="emailHelp"/>
                                </div>
                                <div className="mb-3">
                                    <label for="NewInputPassword1" className="form-label">Password</label>
                                    <input type="password" className="form-control" id="NewInputPassword1"/>
                                </div>
        
                                <button type="submit" className="btn btn-success w-30 ms-3 ">Register</button>
                                <button type="submit" className="btn btn-danger w-30 ms-3">Cancle</button>

                                <div className= "modal-body">
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

