import './App.css';
import Nav from '../src/components/Nav';
import ParallaxImagesContainer from '../src/components/Hero';
// import Layers from '../src/components/Layers';
import CallToAction from '../src/components/CallToAction';
import Footer from '../src/components/Footer';
import Layers from './components/Layers';

function App() {
  return (
    <div className="App">
      <Nav/>
      <ParallaxImagesContainer/>
      <Layers/>
      <CallToAction/>
      <Footer/>
    </div>
  );
}

export default App;
