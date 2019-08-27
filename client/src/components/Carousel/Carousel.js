import React from "react";
import "./Carousel.css";

const Carousel = () => (
    <div>
        <div id="carouselFade" className="carousel slide carousel-fade" data-ride="carousel">
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <img src={require("../../images/flower2.jpg")} className="d-block w-100" alt={"arale"} />
                </div>
                <div className="carousel-item">
                    <img src={require("../../images/flower3.jpg")} className="d-block w-100" alt={"goku"} />
                </div>
                <div className="carousel-item">
                    <img src={require("../../images/flower4.jpg")} className="d-block w-100" alt={"buu"} />
                </div>
            </div>
        </div>
    </div>
);

export default Carousel;