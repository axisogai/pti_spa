import React from "react";

export function Articles({ artigo }) {
  return (
    <div className="col">
      <div className="card h-100 text-bg-secondary border-light">
        <img
          src="https://placehold.co/176x80"
          className="card-img-top"
          alt=""
        />
        <div className="card-body text-light">
          <h5 className="card-title">{artigo.titulo}</h5>
          <p className="card-text">{artigo.texto}</p>
        </div>
        <div className="card-footer bg-transparent border-light">
          <a href="/*">
            <small className="text-light">Read more</small>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Articles;
