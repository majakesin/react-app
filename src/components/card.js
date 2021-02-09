import React from "react";
import "../App.css";
import "bootstrap/dist/css/bootstrap.css";
import { DeleteCard } from "../redux/actions";

function Card(props) {
  return (
    <div className="row">
      <div className="col-sm-11">
        <div className="card">
          <div className="card-body">
            <h4> {props.props.title}</h4>
            <h5 className="card-subtitle"> {props.props.subtitle} </h5>
            <p className="card-text"> {props.props.description}</p>
            <button
              className="btn btn-primary"
              onClick={() => {
                DeleteCard(props.props.id);
              }}
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Card;
