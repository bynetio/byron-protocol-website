import React, { useEffect } from 'react';
import './Hero.scss';
import astronautImage from '../../Frame.svg'
import Styled from "styled-components";
import Parallax from "parallax-js";
import PropTypes from "prop-types";

import backgroundImage from "../../abstract.png";
import arrow from '../../arrow-down.svg';

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
  align-items: top;
	overflow: hidden;
  @media (min-width: 1280px) {
    align-items: center;
  } 
`;

const ParallaxImagesContainer = ({ backgroundImage, layers }) => {
  useEffect(() => {
    const scene = document.getElementById("scene");
    new Parallax(scene);
  });

  return (
    <section id="hero" className="overflow-hidden mx-auto my-auto bg-gradient-to-t from-bckg-blue to-white">
    <Container backgroundImage={backgroundImage}>
      <div id="scene" className="mx-6 md:mx-0">
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
    <div className="flex justify-center flex-wrap md:flex-nowrap gap-x-6 gap-y-6">
    <span className="stitch"></span><a href="#layers" className="btn-primary">Explore Protocol<img className="mx-auto inline-block" src={arrow} alt=""/></a>
    <span className="stitch"></span><a href="https://docsend.com/view/jdibiwr5mxdtfgd2" target="blank" className="btn-secondary">See Pitchdeck</a>
    </div>
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