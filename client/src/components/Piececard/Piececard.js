import React from "react";
import "./Piececard.css";

const Piececard = props => (
    <div className="artCard mb-3" style={cardStyle}>
    <div className="row">
        <div className="col-md-4">
        <img className="card-img" alt="colors" src={require("../../images/color_scheme.png")} />
        </div>
        <div className="col-md-8">
        <div className="card-header"><h3>Card title</h3></div>
        <div classNameName="card-body">
            <p className="card-text">Description: {props.descripton || "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer."}</p>
            <p className="card-text">Price: {props.price || "$100.00"}</p>
            <br></br>
            <hr></hr>
            <br></br>
            <button type="button" class="btn btn-secondary purchase">Click Here to Purchase</button>
        </div>
        </div>
    </div>
    </div>
)

export default Piececard;

const cardStyle = {
    width: "540px",
    height: "350px"
}
