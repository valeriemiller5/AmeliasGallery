import React from "react";
import "./Carousel.css";

const Carousel = () => (
    <div>
        <div id="carouselExampleFade" className="carousel slide carousel-fade" data-ride="carousel">
        <div className="carousel-inner">
            <div className="carousel-item active">
            <img src={require("../../images/arale.jpg")} className="d-block w-100" alt={"arale"} />
            </div>
            <div className="carousel-item">
            <img src={require("../../images/goku.png")} className="d-block w-100" alt={"goku"} />
            </div>
            <div className="carousel-item">
            <img src={require("../../images/buu.jpg")} className="d-block w-100" alt={"buu"} />
            </div>
        </div>
        <a className="carousel-control-prev" href="#carouselExampleFade" role="button" data-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="sr-only">Previous</span>
        </a>
        <a className="carousel-control-next" href="#carouselExampleFade" role="button" data-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="sr-only">Next</span>
        </a>
        </div>
    </div>
);

export default Carousel;