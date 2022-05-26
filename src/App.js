import './App.css';
import Nav from '../src/components/Nav';
import ParallaxImagesContainer from '../src/components/Hero';
import CallToAction from '../src/components/CallToAction';
import Footer from '../src/components/Footer';
import Layers from './components/Layers';
import LayersAnimation from './components/LayersAnimation';

function App() {
  return (
    <div className="App">
      <Nav/>
      <ParallaxImagesContainer/>
      <Layers/>
      <LayersAnimation/>
      <CallToAction/>
      <Footer/>
    </div>
  );
}

export default App;
