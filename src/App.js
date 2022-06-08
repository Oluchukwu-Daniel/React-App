import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Home from './Screen/Home';
import Contact from './Screen/Contact';
import Project from './Screen/Project';
import About from './Screen/About';
import Footer from './components/Footer';
import SingleProject from './Screen/SingleProject';
import BlogApp from './App2';
import SingleBlog from './Screen/SingleBlog';

function App() {
  return (

    <div className="App">
      <BrowserRouter >
      {/* <!-- Navbar (sit on top) --> */}
      <div className="w3-top">
        <div className="w3-bar w3-white w3-wide w3-padding w3-card">
          <a href="#home" className="w3-bar-item w3-button"><b>BR</b> Architects</a>

            {/* <!-- Float links to the right. Hide them on small screens --> */}
            <div className="w3-right w3-hide-small">
              <Link to ="/home" className="w3-bar-item w3-button">Home</Link>
              <Link to ="/project" className="w3-bar-item w3-button">Projects</Link>
              <Link to ="/about" className="w3-bar-item w3-button">About</Link>
              <Link to ="/contact" className="w3-bar-item w3-button">Contact</Link>
              
            </div>
        </div>
      </div>

      {/* <!-- Header --> */}
        <Routes>
          <Route path = "/" element = {<Home/>}/>
          <Route path = "/home" element = {<Home/>}/>
        </Routes>
       
          
      {/* <!-- Page content --> */}
      <div className="w3-content w3-padding" style={{maxWidth:1564+"px"}}>
        <Routes>
          <Route path = "/contact" element = {<Contact/>}/>
          <Route path = "/about" element = {<About/>}/>
          <Route path = "/project" element = {<Project/>}/>
          <Route path = "/projects/:id" element = {<SingleProject />} />
        </Routes>
        
        {/* <!-- Project Section --> */}

        {/* <!-- About Section --> */}
        
        {/* <!-- Contact Section --> */}
        
        
        {/* <!-- Image of location/map --> */}
        

      {/* <!-- End page content --> */}
      </div>


      {/* <!-- Footer --> */}
      <Footer />
      <footer className="w3-center w3-black w3-padding-16">
        <p>Powered by <a href="https://www.w3schools.com/w3css/default.asp" title="W3.CSS" target="_blank" className="w3-hover-text-green">w3.css</a></p>
      </footer>
      </BrowserRouter >
    </div>
  );
}

export default App;
