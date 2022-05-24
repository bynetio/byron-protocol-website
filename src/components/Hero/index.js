import React, { useEffect } from 'react';
import './Hero.scss';
import astronautImage from '../../Frame.svg'
import Styled from "styled-components";
import Parallax from "parallax-js";
import PropTypes from "prop-types";

import backgroundImage from "../../abstract.png";

const layers = [
  {
    name: "astronaut",
    image: astronautImage,
    dataDepth: "2"
  }
];

const Container = Styled.div`
	width: 100%;
	height: 70vh;
  display: flex;
  justify-content: center;
  align-items: center;
	overflow: hidden;

`;

const ParallaxImagesContainer = ({ backgroundImage, layers }) => {
  useEffect(() => {
    const scene = document.getElementById("scene");
    new Parallax(scene);
  });

  return (
    <section id="hero" className="overflow-hidden mx-auto my-auto bg-gradient-to-t from-bckg-blue to-white">
    <Container backgroundImage={backgroundImage}>
      <div id="scene">
        {layers.map((l, index) => (
          <img
            key={index}
            data-depth={l.dataDepth}
            src={l.image}
            alt={l.name}
          />
        ))}
      </div>
    </Container>
    <div className="absolute">
    <h1 className="pb-8 md:pb-32 text-5xl md:text-7xl max-w-5xl mx-auto font-extrabold leading-relaxed">Scalable infrastructure empowering DeFi on Cardano</h1>
    <a href="#layers" className="bg-gradient-to-r from-dark-blue to-light-blue hover:from-light-blue hover:to-dark-blue text-white font-bold py-2 px-4 rounded-lg">Explore Protocol</a>
    </div>
    </section>
  );
};

ParallaxImagesContainer.propTypes = {
  backgroundImage: PropTypes.string,
  layers: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      image: PropTypes.string,
      dataDepth: PropTypes.string
    })
  )
};

ParallaxImagesContainer.defaultProps = {
  backgroundImage: backgroundImage,
  layers: layers
};

export default ParallaxImagesContainer;



{/* <section id="hero" className="overflow-hidden mx-auto my-auto bg-gradient-to-t from-bckg-blue to-white">

<div className="absolute">
<h1 className=" pt-16 md:pt-56 pb-8 md:pb-32 text-5xl md:text-7xl max-w-5xl mx-auto font-extrabold leading-relaxed">Scalable infrastructure empowering DeFi on Cardano</h1>
<a href="#layers" className="bg-gradient-to-r from-dark-blue to-light-blue hover:from-light-blue hover:to-dark-blue text-white font-bold py-2 px-4 rounded-lg">Explore Protocol</a>
</div>
</section> */}