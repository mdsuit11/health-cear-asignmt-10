import Button from '@restart/ui/esm/Button';
import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css'
import img1 from '../../img/slider/slider-1.jpg';
import img2 from '../../img/slider/slider-2.jpg';
import img3 from '../../img/slider/slider-3.jpg';
import img4 from '../../img/home-img/download-1.jpg';
import img5 from '../../img/home-img/download-2.jpg';
import img6 from '../../img/home-img/download-3.jpg';




const Home = () => {
    return (
        <div className='main-container'> 

<div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src={img1} className="d-block w-100" alt="..." />
    </div>
    <div className="carousel-item">
      <img src={img2} className="d-block w-100" alt="..." />
    </div>
    <div className="carousel-item">
      <img src={img3} className="d-block w-100 h-50" alt="..." />
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
        
      <div className='last-container'>
          <div>
              <h2>
              Start your skincare today.
              </h2>
              <p>
              Suspendisse eget risus mollis, molestie lectus vel, pellentesque nulla. Aliquamum feugiat lacus in sem fermentum finibus. Morbi tempor ac dui vel ullamcorper accumsan augue.
              </p>
             <Link to="/courses"> <button className="buy-btn">SHOP ALL</button></Link>
          </div>
          <div>
              <img src={img4} alt="" />
              <h2>GOLDEN GLOW</h2>
              <p>Integer utcursus magna. Namid maximus velitvel pellente que turpis var pulvinar ligulaac hendr oreet habitant tristique.</p>
              <Link to='courses'><button className="buy-btn">SHOP ALL</button></Link>
          </div>
          <div>
              <img src={img5} alt="" />
              <h2>SKIN PARADISE</h2>
              <p>Pellentesque pulvinar laoreet dolor in varius. Nam tincidunt enimlibero, eget mollis nisl ullamcorper arcuacinia habitant.</p>
              <Link to="courses"><button className="buy-btn">SHOP ALL</button></Link>
          </div>
          <div>
              <img src={img6} alt="" />
              <h2>GREEN TOUCH</h2>
              <p>Morbi vene atis nisleget iaculisfelis pretium vehicula velit nonenim. Suspen aliquet facilisis purus malesuada felis vitae.</p>
              <Link to="/courses"><button className="buy-btn">SHOP ALL</button></Link>
          </div>
          
      </div>
 
        </div>
    );
};

export default Home;