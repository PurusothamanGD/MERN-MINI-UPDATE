import logo from './logo.svg';
import Header from './Header/header'
import Slick from './Slick/Slick'
import Gallery from './Gallery/gallery'
import Footer from './Footer/footer'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  return (
    <div className="App">
      <div><Header></Header></div>
      <div><Slick></Slick></div>
      <div className="mt-5 py-5 bg-light">
        <h4 style={{color:"#62BED0",textAlign:"left",margin:"25px"}}>Product List</h4>
        <Gallery className="mt-4" />
      </div>
      <Footer></Footer>
      
    </div>
  );
}

export default App;
