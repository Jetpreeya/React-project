import React from 'react';
import Products from './Products';


function Home() {
    return (
        <div id="carouselExampleControlsNoTouching" class="carousel slide" data-bs-touch="false" data-bs-interval="false">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="/asset/iStock.jpg" class="d-block w-100" alt="Stock" height={"585"}/>
    </div>
    <div class="carousel-item ">
      <img src="/asset/Namnlös.jpg" class="d-block w-100" alt="shop" height={"585"} />
    </div>
    <div class="carousel-item">
      <img src="/asset/bonus.jpg" class="d-block w-100" alt="bonus" height={"585"}/>
    </div>
    </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControlsNoTouching" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControlsNoTouching" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>

    );
}

export default Home;