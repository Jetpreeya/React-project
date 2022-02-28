import React from "react";
import DATA from '../Data'
import "./styles/cart.css";

const Checkout = () => {
    return (
        <>
            <div className="container my-5">
                <div className="row">
                    <div className="col-md-4 order-md-2 mb-4">
                        <h4 className="d-flex justify-content-between align-items-center mb-3">
                            <span className="text-muted ms-5">Your cart <i class='fa fa-shopping-basket me-1'></i></span>
                        </h4>
                        <ul>
                            {DATA.map((item) => (
                                <li>
                                    <p className="my-4"><img src={item.img} alt="" style={{height: 20}} />{item.title}: Price {item.price} Kr </p></li>
                            ))}
                        </ul>

                        <div className="btn btn-success ms-5" >
                            <h3>Total 399.6 Kr</h3>
                        </div>
                    </div>
                    {/* Information customer in left side of the page */}
                    <div className="col-md-8 order-md-1">
                        <h4 className="mb-3">Address</h4>
                        <form className="needs-validation" novalidate="" />
                        <div className="row">
                            <div className="col-md-6 mb-3">
                                <label htmlfor="firstName">First name</label>
                                <input type="text" className="form-control" id="firstName" placeholder="" value="" required="" />
                                <div className="invalid-feedback">
                                    Valid first name is required.
                                </div>
                            </div>
                            <div className="col-md-6 mb-3">
                                <label htmlfor="lastName">Last name</label>
                                <input type="text" className="form-control" id="lastName" placeholder="" value="" required="" />
                                <div className="invalid-feedback">
                                    Valid last name is required.
                                </div>
                            </div>
                        </div>

                        <div className="mb-3">
                            <label htmlfor="email">Email <span className="text-muted"></span></label>
                            <input type="email" className="form-control" id="email" placeholder="you@example.com" />
                            <div className="invalid-feedback">
                                Please enter a valid email address for shipping updates.
                            </div>
                        </div>
                        <div className="mb-3">
                            <label htmlfor="phone">Moblie <span className="text-muted"></span></label>
                            <input type="tel" className="form-control" id="phone" placeholder="072-XXXXX12" />
                            <div className="invalid-feedback">
                                Please enter a valid Moblie address for shipping updates.
                            </div>
                        </div>

                        <div className="mb-3">
                            <label htmlfor="address">Address</label>
                            <input type="text" className="form-control" id="address" placeholder="1234 Main St" required="" />
                            <div className="invalid-feedback">
                                Please enter your shipping address.
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-3 mb-3">
                                <label htmlfor="address">State</label>
                                <input type="text" className="form-control" id="address" placeholder="" required="" />
                                <div className="invalid-feedback">
                                    Please enter your shipping address.
                                </div>
                            </div>
                            <div className="col-md-3 mb-3">
                                <label htmlfor="zip">Zip</label>
                                <input type="text" className="form-control" id="zip" placeholder="" required="" />
                                <div className="invalid-feedback">
                                    Zip code required.
                                </div>
                            </div>
                            <div className="col-md-5 mb-3">
                                <label htmlfor="country">Country</label>
                                <select className="custom-select d-block w-100" id="country" required="">
                                    <option value="">Choose...</option>
                                    <option>United States</option>
                                    <option>Sweden</option>
                                    <option>Finland</option>
                                    <option>Denmark</option>
                                    <option>China</option>
                                </select>
                                <div className="invalid-feedback">
                                    Please select a valid country.
                                </div>
                            </div>
                        </div>
                        <hr className="mb-4" />
                        <div className="custom-control custom-checkbox">
                            <input type="checkbox" className="custom-control-input" id="same-address" />
                            <label class="custom-control-label" htmlfor="same-address">Shipping address is the same as my billing address</label>
                        </div>
                        <div className="custom-control custom-checkbox">
                            <input type="checkbox" className="custom-control-input" id="save-info" />
                            <label className="custom-control-label" htmlfor="save-info">Save this information for next time</label>
                        </div>
                        <hr className="mb-4" />
                        <h4 className="mb-3">Payment</h4>

                        <div className="d-block my-3">
                            <div className="custom-control custom-radio">
                                <input id="credit" name="paymentMethod" type="radio" class="custom-control-input" checked="" required="" />
                                <label className="custom-control-label" htmlfor="credit">Credit card</label>
                            </div>
                            <div className="custom-control custom-radio">
                                <input id="debit" name="paymentMethod" type="radio" class="custom-control-input" required="" />
                                <label className="custom-control-label" htmlfor="debit">Debit card</label>
                            </div>
                            <div className="custom-control custom-radio">
                                <input id="paypal" name="paymentMethod" type="radio" class="custom-control-input" required="" />
                                <label className="custom-control-label" htmlfor="paypal">PayPal</label>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-6 mb-3">
                                <label htmlfor="cc-name">Name on card</label>
                                <input type="text" class="form-control" id="cc-name" placeholder="" required="" />
                                <small className="text-muted">Full name as displayed on card</small>
                                <div className="invalid-feedback">
                                    Name on card is required
                                </div>
                            </div>
                            <div className="col-md-6 mb-3">
                                <label htmlfor="cc-number">Credit card number</label>
                                <input type="text" className="form-control" id="cc-number" placeholder="" required="" />
                                <div className="invalid-feedback">
                                    Credit card number is required
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-3 mb-3">
                                <label htmlfor="cc-expiration">Expiration</label>
                                <input type="text" className="form-control" id="cc-expiration" placeholder="05/28" required="" />
                                <div className="invalid-feedback">
                                    Expiration date required
                                </div>
                            </div>
                            <div className="col-md-3 mb-3">
                                <label htmlfor="cc-cvv">CVV</label>
                                <input type="text" class="form-control" id="cc-cvv" placeholder="234" required="" />
                                <div className="invalid-feedback">
                                    Security code required
                                </div>
                            </div>
                        </div>
                        <div>
                            <div>
                                <hr className="mb-4" />
                                <button className="btn btn-primary btn-lg btn-block" type="submit">Continue to checkout</button>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )

}

export default Checkout