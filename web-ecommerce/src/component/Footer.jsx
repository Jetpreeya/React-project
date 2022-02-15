import React from 'react';

const Footer = () =>{
    return(

<footer class="page-footer font-small special-color-dark pt-4">


  <div class="container">


    <ul class="list-unstyled list-inline text-center">
      <li class="list-inline-item">
        <a class="btn-floating btn-fb mx-1">
          <i class="fa fa-facebook"> Facebook </i>
        </a>
      </li>
      <li class="list-inline-item">
        <a class="btn-floating btn-tw mx-1">
          <i class="fa fa-twitter">Twitter </i>
        </a>
      </li>
      <li class="list-inline-item">
        <a class="btn-floating btn-li mx-1">
          <i class="fa fa-linkedin">LinkedIn </i>
        </a>
      </li>
    </ul>

  </div>
  <div class="footer-copyright text-center py-3">© 2022 Copyright:
    <a href="http://localhost:3000/"> Localhost.com</a>
  </div>

</footer>
       
    )
}

export default Footer 

