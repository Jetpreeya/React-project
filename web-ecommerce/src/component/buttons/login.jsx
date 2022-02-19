import React from 'react';

const Login = () => {
    return (
        <>
            <button type="button" className="btn btn-outline-success ms-2" data-bs-toggle="modal" data-bs-target="#exampleModal">
            <i className="fa fa-sign-in me-1 fa-2x"></i> Login
            </button>

            <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="exampleModalLabel">Member Login</h5>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            <form>
                                <div class="mb-3">
                                    <label for="exampleInputEmail1" class="form-label">Email address</label>
                                    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                                </div>
                                <div class="mb-3">
                                    <label for="exampleInputPassword1" class="form-label">Password</label>
                                    <input type="password" class="form-control" id="exampleInputPassword1"/>
                                </div>
                                <div class="mb-3 form-check">
                                    <input type="checkbox" class="form-check-input" id="exampleCheck1"/>
                                        <label class="form-check-label" for="exampleCheck1">Remember me</label>
                                </div>
                                <button type="submit" class="btn btn-primary w-100 ">Login</button>

                                <div className= "modal-body">
                            <button className="btn btn-outline-info w-100 mb-4">
                                <span className="fa fa-google me-2"></span> Log In With Google 
                            </button>
                            <button className="btn btn-outline-info w-100 mb-2">
                                <span className="fa fa-facebook me-2"></span> Log In With Facebook 
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

export default Login

