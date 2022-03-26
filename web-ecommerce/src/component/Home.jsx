import React, { useState } from "react";
import data from "../Data.json"

function Home() {
  const [searchTerm, setSearchTerm] = useState("");
  const [setShow] = useState(true);
    return (  
      <div>
         {/* Search function Here*/}
         <div className="templateContainer">
              <div className="text-center">
                <div className="cart nav-link" onClick={() => (setShow(false))}>
                  <button className="btn btn-primary"> Search</button>
                  <input id="searchInput" type="text" placeholder="Search here..." onChange={(event) => {
                    setSearchTerm(event.target.value);
                  }} />
                </div>
              </div>

              <div className="template_Container">
                {
                  // eslint-disable-next-line array-callback-return
                  data.filter((item) => {
                      if (searchTerm === "") {
                        return item;
                      } else if (item.title.toLowerCase().includes(searchTerm.toLowerCase())) {
                        return item;
                      }
                    })
                    .map((item) => {
                      return (
                        <div className="template" key={item.id}>
                          <img src={item.img} alt="" height="100px" />
                          <h3>{item.title}</h3>
                          <p className="price">{item.price} Kr</p>
                        </div>
                      )
                    })
                }
              </div>
            </div>
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