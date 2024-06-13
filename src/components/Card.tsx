import React from "react";

function Card({ data }: any) {
  return (
    <div className="card">
      <img src={data.image} alt={data.name} className="circle-img" />
      <div className="card-text-container">
        <h2>{data.name}</h2>
        <div className="inline-text">
          <b>Species:</b>
          <p>{data.species}</p>
        </div>
        <div className="inline-text">
          <b> Place:</b>
          <p>{data.location?.name}</p>
        </div>
        <div className="inline-text">
          <b> Episodes:</b>
          <p>{data.episode?.length}</p>
        </div>
      </div>
    </div>
  );
}

export default Card;
