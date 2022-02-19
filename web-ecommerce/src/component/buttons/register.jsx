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
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            <form>
                            <div class="mb-3">
                                    <label for="NewInputName" class="form-label">First Name</label>
                                    <input type="text" class="form-control" id="NewInputName"/>
                                </div>
                                <div class="mb-3">
                                    <label for="NewInputLast" class="form-label">Last Name</label>
                                    <input type="text" class="form-control" id="NewInputLast"/>
                                </div>
                                <div class="mb-3">
                                    <label for="NewInputEmail1" class="form-label">Email address</label>
                                    <input type="email" class="form-control" id="NewInputEmail1" aria-describedby="emailHelp"/>
                                </div>
                                <div class="mb-3">
                                    <label for="NewInputPassword1" class="form-label">Password</label>
                                    <input type="password" class="form-control" id="NewInputPassword1"/>
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

