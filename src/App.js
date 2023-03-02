import './App.css';
import Articles from './components/Articles';
import { Footer } from './components/Footer';
import Header from './components/Header';

function App() {
  return (
    <div className="App">
      <Header/>
      <Footer/>
      <Articles/>
    </div>
  );
}

export default App;
