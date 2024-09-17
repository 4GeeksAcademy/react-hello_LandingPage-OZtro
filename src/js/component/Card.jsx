import React from "react";

const Card = (props) => {
    const {} = props
    return(
        <div className="col">
        <div className="card">
            <img src={props.imageUrl} className="card-img-top" alt="..."></img>
            <div className="card-body">
                <h5 className="card-title">{props.title}</h5>
                <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
            </div>
            <div className="card-body border-top">
            <button type="button" className="btn btn-primary">Find out more!</button>
            </div>
        </div>
     </div>
    );
}
export default Card