import React from "react";

function LocationCard(data: any) {
  console.log("placeholder", data.data);
  return (
    <div className="card">
      <div className="card-text-container">
        <h2>{data.data.name}</h2>
        <div className="inline-text">
          <b>Species:</b>
          <p>{data.data.dimension}</p>
        </div>
        <div className="inline-text">
          <b> Place:</b>
          <p>{data.data.type}</p>
        </div>
        <div className="inline-text">
          <b> Episodes:</b>
          <p>{data.data.residents?.length}</p>
        </div>
        <div className="inline-text">
          <b> Create Date:</b>
          <p>{data.data.created}</p>
        </div>
      </div>
    </div>
  );
}

export default LocationCard;
