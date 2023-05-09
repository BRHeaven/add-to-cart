import './components/css/main.css';
import Product from './components/javascripts/Product';
import Footer from "./components/layout/Footer";
import Header from "./components/layout/Header";

function App() {
  return (
    <div className="App">
      <Header/>
      <Product/>
      <Footer/>
    </div>
  );
}

export default App;
