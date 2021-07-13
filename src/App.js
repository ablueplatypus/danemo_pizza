import './App.css';
import './css/style.css';
import './css/bootstrap.css';
import Navbar from './Navbar.js'
import Footer from './Footer.js'
import Home from './Home.js'


function App() {
  return (
    <div className="App">
        <Navbar/>
        <header id="header">
          <div class="intro">
            <div class="overlay">
              <div class="container">
                <div class="row">
                  <div class="col-md-8 col-md-offset-2 intro-text">
                    <h1>I AM Danemo Pizza 🍕<span></span></h1>
                    <p>Half Stack Devloper</p>
                    <a href="#about" class="btn btn-custom btn-lg page-scroll">Learn More</a> </div>
                </div>
              </div>
            </div>
          </div>
        </header>
      <Home/>
      <Footer/>
    </div>
  );
}

export default App;
