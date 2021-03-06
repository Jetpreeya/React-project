import React, { useState,useEffect} from "react";
import "./Styles/Cart.css";
import { Link } from "react-router-dom";

const Checkout = ({cart}) => {
    const [price, setPrice] = useState(0);
    const handlePrice = () => {
        let ans = 0;
        cart.map((item) => (ans += item.amount * item.price));
        setPrice(ans);
      };
    
      useEffect(() => {
        handlePrice();
      });
    
    return (
        <>
            <div className="container my-5">
                <div className="row">
                    <div className="col-md-4 order-md-2 mb-4">
                        <h4 className="d-flex justify-content-between mb-3">
                            <span className="text-muted ms-2">Your cart <i className='fa fa-shopping-basket me-1'></i></span> 
                        </h4>
                        <ul>
                            {cart.map((item) => (
                                <div className="cart_box" key={item.id}>
                                    <div className="cart_img">
                                        <img src={item.img} alt="" />
                                        <p>{item.title}</p>
                                        <p>({item.amount})</p>
                                        </div>
                                        <h6> Price: {item.price} kr</h6>
                                    </div>     
                            ))}
                        </ul>
                        <div className = "text-center">
                        <div className="btn btn-success ms-5" >
                            <h3>Total {price} Kr</h3>
                        </div>
                        </div>
                    </div>
                    {/* Information customer in left side of the page */}
                    <div className="col-md-8 order-md-1">
                    <div className = "text-center">
                        <h4 className="mb-3">Address</h4>
                        </div>
                        <form className="needs-validation" noValidate="" />
                        <div className="row">
                            <div className="col-md-6 mb-3">
                                <label htmlFor="firstName">First name<span className="text-muted"></span></label>
                                <input type="text" className="form-control" id="firstName" placeholder="" value="" required="" />
                                <div className="invalid-feedback">
                                    Valid first name is required.
                                </div>
                            </div>
                            <div className="col-md-6 mb-3">
                                <label htmlFor="lastName">Last name<span className="text-muted"></span></label>
                                <input type="text" className="form-control" id="lastName" placeholder="" value="" required="" />
                                <div className="invalid-feedback">
                                    Valid last name is required.
                                </div>
                            </div>
                        </div>

                        <div className="col-md-6 mb-3">
                            <label htmlFor="email">Email <span className="text-muted"></span></label>
                            <input type="email" className="form-control" id="email" placeholder="you@gmail.com" />
                            <div className="invalid-feedback">
                                Please enter a valid email address for shipping updates.
                            </div>
                        </div>
                        <div className="col-md-6 mb-3">
                            <label htmlFor="phone">Moblie <span className="text-muted"></span></label>
                            <input type="tel" className="form-control" id="phone" placeholder="072-XXXXX12" />
                            <div className="invalid-feedback">
                                Please enter a valid Moblie address for shipping updates.
                            </div>
                        </div>

                        <div className="mb-3">
                            <label htmlFor="address">Address</label>
                            <input type="text" className="form-control" id="address" placeholder="1234 Main St" required="" />
                            <div className="invalid-feedback">
                                Please enter your shipping address.
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-3 mb-3">
                                <label htmlFor="address">State</label>
                                <input type="text" className="form-control" id="address" placeholder="" required="" />
                                <div className="invalid-feedback">
                                    Please enter your shipping address.
                                </div>
                            </div>
                            <div className="col-md-3 mb-3">
                                <label htmlFor="zip">Zip</label>
                                <input type="text" className="form-control" id="zip" placeholder="" required="" />
                                <div className="invalid-feedback">
                                    Zip code required.
                                </div>
                            </div>
                            <div className="col-md-5 mb-3">
                                <label htmlFor="country">Country</label>
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
                            <label className="custom-control-label" htmlFor="same-address">Shipping address is the same as my billing address</label>
                        </div>
                        <div className="custom-control custom-checkbox">
                            <input type="checkbox" className="custom-control-input" id="save-info" />
                            <label className="custom-control-label" htmlFor="save-info">Save this information for next time</label>
                        </div>
                        <hr className="mb-4" />
                        <div className = "text-center">
                        <h4 className="mb-3">Payment </h4>
                        </div>

                        <div className="d-block my-3">
                            <div className="custom-control custom-radio">
                                <input id="credit" name="paymentMethod" type="radio" className="custom-control-input" checked="" required="" />
                                <label className="custom-control-label" htmlFor="credit">Credit card <i class="fa fa-cc-visa" aria-hidden="true"></i></label>
                            </div>
                            <div className="custom-control custom-radio">
                                <input id="debit" name="paymentMethod" type="radio" className="custom-control-input" required="" />
                                <label className="custom-control-label" htmlFor="debit">Debit card <i class="fa fa-cc-mastercard" aria-hidden="true"></i></label>
                            </div>
                            <div className="custom-control custom-radio">
                                <input id="paypal" name="paymentMethod" type="radio" className="custom-control-input" required="" />
                                <label className="custom-control-label" htmlFor="paypal">PayPal <i class="fa fa-cc-paypal" aria-hidden="true"></i></label>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-6 mb-3">
                                <label htmlFor="cc-name">Name on card</label>
                                <input type="text" className="form-control" id="cc-name" placeholder="" required="" />
                                <small className="text-muted">Full name as displayed on card</small>
                                <div className="invalid-feedback">
                                    Name on card is required
                                </div>
                            </div>
                            <div className="col-md-6 mb-3">
                                <label htmlFor="cc-number">Credit card number</label>
                                <input type="text" className="form-control" id="cc-number" placeholder="" required="" />
                                <div className="invalid-feedback">
                                    Credit card number is required
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-3 mb-3">
                                <label htmlFor="cc-expiration">Expiration</label>
                                <input type="text" className="form-control" id="cc-expiration" placeholder="05/28" required="" />
                                <div className="invalid-feedback">
                                    Expiration date required
                                </div>
                            </div>
                            <div className="col-md-3 mb-3">
                                <label htmlFor="cc-cvv">CVV</label>
                                <input type="text" className="form-control" id="cc-cvv" placeholder="234" required="" />
                                <div className="invalid-feedback">
                                    Security code required
                                </div>
                            </div>
                        </div>
                        <div>
                            <div>
                                <hr className="mb-4" />
                                <Link to="/deliver" className= "btn btn-success"> Continue to checkout</Link>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )

}

export default Checkout