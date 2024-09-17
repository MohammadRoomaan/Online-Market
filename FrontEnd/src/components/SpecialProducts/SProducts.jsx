import React from "react";
import { Link } from 'react-router-dom'

const SProducts = (props) => {
  return (
    <>
    <Link  to={`/buy/${props.id}`}>
    <div className="card bg-base-100 w-full shadow-xl">
      <figure>
         <img
          src={props.img}
          alt={props.name}
          className="h-48 w-full object-contain"
          onClick={window.scrollTo(0,0)}
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">
          {props.name}
          <div className="badge badge-secondary">NEW</div>
        </h2>
        <p>{props.description}</p>
        <div className="card-actions justify-end">
          <div className="badge badge-outline">{props.category}</div>
          <div className="badge badge-outline">Products</div>
        </div>
      </div>
    </div>
    </Link>
    </>
  );
};

export default SProducts;
