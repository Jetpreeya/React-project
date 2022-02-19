import React from 'react';

const Register = () => {
    return (
        <div>
            <button type="button" className="btn btn-outline-dark ms-2" data-bs-toggle="modal" data-bs-target="#exampleModal">
            <i className="fa fa-user me-1 fa-2x"></i> Register
            </button>

            <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="exampleModalLabel"> Registration </h5>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            <form>
                                <div class="mb-3">
                                    <label for="exampleFormControlInput1" class="form-label">First Name</label>
                                    <input type="text" class="form-control" id="exampleFormControlInput1" />
                                </div>
                                <div class="mb-3">
                                    <label for="exampleInputEmail1" class="form-label">Last Name </label>
                                    <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                                </div>
                                <div class="mb-3">
                                    <label for="exampleInputEmail1" class="form-label"> Email </label>
                                    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                                </div>
                                <div class="mb-3">
                                    <label for="exampleInputPassword1" class="form-label">Password</label>
                                    <input type="password" class="form-control" id="exampleInputPassword1" />
                                </div>
                                <div class="mb-3 form-check">
                                    <input type="checkbox" class="form-check-input" id="exampleCheck1" />
                                    <label class="form-check-label" for="exampleCheck1">Agree to the terms</label>
                                </div>
                                <button type="submit" class="btn btn-primary">Register</button>
                                <button type="submit" class="btn btn-primary">Cancle</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Register

