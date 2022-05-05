import React, { Component } from 'react';
import './Hero.scss';
import abstract from '../../abstract.png'

export default class Hero extends Component {
  render() {
    return (
      <section id="hero" className="mx-auto my-auto bg-gradient-to-t from-bckg-blue to-white">
        <img src={abstract} alt="" className="mx-auto"/>
        <div className="absolute">
        <h1 className="pt-56 text-5xl mb-8 md:mb-0 md:text-7xl max-w-5xl mx-auto font-extrabold leading-relaxed">Liquidity Provider infrastructure for Cardano</h1>
        <a href="#layers" className="md:mt-32 bg-gradient-to-r from-dark-blue to-light-blue hover:from-pink-500 hover:to-yellow-500 text-white font-bold py-2 px-4 rounded-lg">Explore Protocol</a>
        </div>
      </section>
    )
  }
}