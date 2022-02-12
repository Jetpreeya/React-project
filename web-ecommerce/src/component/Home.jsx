import React from 'react';


function Home() {
    return (
      <div>
      <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1"  aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2"  aria-label="Slide 3"></button>
  </div>
  <div class="carousel-inner">
    <div class="carousel-item active">
    <img src="/asset/iStock.jpg" class="d-block w-100" alt="Stock" height={"480"}/>
      <div class="carousel-caption d-none d-md-block">
      </div>
    </div>
    <div class="carousel-item ">
    <img src="/asset/Namnlös.jpg" class="d-block w-100" alt="shop" height={"480"} />
      <div class="carousel-caption d-none d-md-block">
      </div>
    </div>
    <div class="carousel-item">
    <img src="/asset/bonus.jpg" class="d-block w-100" alt="bonus" height={"480"}/>
      <div class="carousel-caption d-none d-md-block">
      </div>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
</div>

    );
}

export default Home;