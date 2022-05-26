import './App.css';
import Nav from '../src/components/Nav';
import Hero from '../src/components/Hero';
import Layers from '../src/components/Layers';
import CallToAction from '../src/components/CallToAction';
import Footer from '../src/components/Footer';

function App() {
  return (
    <div className="App">
      {/* <Nav/> */}
      <Hero/>
      <Layers/>
      <CallToAction/>
      <Footer/>
    </div>
  );
}

export default App;
