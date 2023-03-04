// import { useState } from "react";
import "./App.css";
import 'bootstrap/dist/css/bootstrap.css';
import Card from "./components/Card";
import Footer  from "./components/Footer";
import Header from "./components/Header";

function App() {
  const card1 = {
    imagem: "https://guiadohamburguer.com/wp-content/uploads/2015/05/instagram-ezequiel-2517.jpg",
    titulo: "X-Infarto",
    preco: "30,99"
  };
  const card2 = {
    imagem: "https://assets.almanaquesos.com/wp-content/uploads/2018/04/burger_pizza_1_almanaquesos1-1000x570.jpg",
    titulo: "Mamma Mia! Sono morto",
    preco: "40,99"

    };
  const card3 = {
    imagem: "https://s2.glbimg.com/ecNBtjgGE20cR0GXR8ig9wawrrU=/0x0:871x441/1000x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_e84042ef78cb4708aeebdf1c68c6cbd6/internal_photos/bs/2019/v/b/gYgsB1SuGyajHosEdQRA/545454.png",
    titulo: "Carrocinha",
    preco: "35,99"

    };
  return (
    <div className="App">
      <Header />
      <section>
        <div className="row ">
          <Card card={card1} />
          <Card card={card2} />
          <Card card={card3} />
        </div>
      </section>
      <Footer/>
    </div>
  );
}
export default App;