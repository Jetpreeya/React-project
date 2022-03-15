import React from 'react';

const Footer = () => {
  return (
    <footer className="page-footer font-small special-color-dark pt-4 bg-info">
      <div className="container">
        <ul className="list-unstyled list-inline text-center">
          <li className="list-inline-item">
            <a className="btn-floating btn-fb mx-1" href="facebook.com">
              <i className="fa fa-facebook"> Facebook </i>
            </a>
          </li>
          <li className="list-inline-item">
            <a className="btn-floating btn-tw mx-1" href="twitter.com">
              <i className="fa fa-twitter"> Twitter </i>
            </a>
          </li>
          <li className="list-inline-item">
            <a className="btn-floating btn-li mx-1 " href="linkedin.com">
              <i className="fa fa-linkedin"> LinkedIn </i>
            </a>
          </li>
        </ul>

      </div>
     
      <div className="footer-copyright text-center py-3">© {new Date().getFullYear()} Copyright: 
      <ul className="list-unstyled list-inline text-center text-light">
      <li ><a className="navbar-brand text-light" href="/"> Home</a></li>
      <li ><a className="navbar-brand text-light" href="/Products">Products</a></li>
        </ul>

      </div>

    </footer>

  )
}

export default Footer

