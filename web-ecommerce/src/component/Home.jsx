import React from 'react'

function Home() {
  
    return (  
      <div>
        <div className = "text-center">
        <h2 style={{color: "SteelBlue"}}>Welcome to Jet E-commerce Website</h2>
        </div>
      <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
  <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1"  aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2"  aria-label="Slide 3"></button>
  </div>
  <div className="carousel-inner">
    <div className="carousel-item active">
    <img src="/asset/iStock.jpg" className="d-block w-100" alt="Stock" height={"480"}/>
      <div className="carousel-caption d-none d-md-block">
      </div>
    </div>
    <div className="carousel-item ">
    <img src="/asset/Namnlös.jpg" className="d-block w-100" alt="shop" height={"480"} />
      <div className="carousel-caption d-none d-md-block">
      </div>
    </div>
    <div className="carousel-item">
    <img src="/asset/bonus.jpg" className="d-block w-100" alt="bonus" height={"480"}/>
      <div className="carousel-caption d-none d-md-block">
      </div>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
</div>

    );
}

export default Home;