import React from "react";

export function Card({ card }) {
  return (
    <div className="col">
      <div className="card m-auto text-bg-secondary border-light Card">
        <a href="\#">
          <img src={card.imagem} className="card-img-top p-4" alt="" />
          <div className="card-body text-light">
            <h5 className="card-title">{card.titulo}</h5>
          </div>
          <div class="container">
            <div class="row p-2 ">
              <div class="col">
                <span className="bg-transparent text-light d-flex justify-content-start">R$ {card.preco}</span>
              </div>
              <div class="col d-flex justify-content-end">
                <button type="button" class="btn btn-primary d-flex justify-content-end">+</button>
              </div>
            </div>
          </div>
        </a>
      </div>
    </div>
  );
}
export default Card;
