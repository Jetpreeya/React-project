import React from 'react';

const Login = () => {
    return (
        <>
            <button type="button" className="btn btn-outline-success ms-2" data-bs-toggle="modal" data-bs-target="#exampleModal">
            <i className="fa fa-sign-in me-1 fa-2x"></i> Login
            </button>

            <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Member Login</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <form>
                                <div className="mb-3">
                                    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                                    <input type="password" className="form-control" id="exampleInputPassword1"/>
                                </div>
                                <div className="mb-3 form-check">
                                    <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
                                        <label className="form-check-label" htmlFor="exampleCheck1">Remember me</label>
                                </div>
                                <button type="submit" className="btn btn-primary w-100 ">Login</button>

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

