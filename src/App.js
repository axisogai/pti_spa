import "./App.css";
import Articles from "./components/Articles";
import { Footer } from "./components/Footer";
import Header from "./components/Header";

function App() {
  const artigo1 = {
    titulo: "titulo 1",
    texto: "sdsadas das das dasdsa da",
  };
  const artigo2 = {
    titulo: "titulo 2",
    texto: "sdsadas das das dasdsa da",
  };
  const artigo3 = {
    titulo: "titulo 3",
    texto: "sdsadas das das dasdsa da",
  };
  return (
    <div className="App">
      <Header />
      <div className="container my-5">
        <div className="row row-cols g-4 p-4">
          <Articles artigo={artigo1} />
          <Articles artigo={artigo2} />
          <Articles artigo={artigo3} />
        </div>
      </div>
      <Footer />
    </div>
  );
}
export default App;
