import React from 'react';

const Footer = () =>{
    return(

<footer class="page-footer font-small special-color-dark pt-4">


  <div class="container">


    <ul class="list-unstyled list-inline text-center">
      <li class="list-inline-item">
        <a className="btn-floating btn-fb mx-1" href="facebook.com">
          <i class="fa fa-facebook"> Facebook </i>
        </a>
      </li>
      <li class="list-inline-item">
        <a className="btn-floating btn-tw mx-1" href="twitter.com">
          <i class="fa fa-twitter">Twitter </i>
        </a>
      </li>
      <li class="list-inline-item">
        <a className="btn-floating btn-li mx-1" href="linkedin.com">
          <i class="fa fa-linkedin">LinkedIn </i>
        </a>
      </li>
    </ul>

  </div>
  <div class="footer-copyright text-center py-3">© 2022 Copyright:
    <a class="navbar-brand" href="/">Home</a>
  </div>

</footer>
       
    )
}

export default Footer 

