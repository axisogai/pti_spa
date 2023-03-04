// import { useState } from "react";
import "./App.css";
import 'bootstrap/dist/css/bootstrap.css';
import Card from "./components/Card";
import Footer  from "./components/Footer";
import Header from "./components/Header";

function App() {
  const card1 = {
    imagem: "https://rb.gy/2miyvl",
    titulo: "X-Infarto",
    preco: "30,99"
  };
  const card2 = {
    imagem: "https://rb.gy/netgjn",
    titulo: "Mamma Mia! Sono morto",
    preco: "40,99"
    };
  const card3 = {
    imagem: "https://rb.gy/kraxni",
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