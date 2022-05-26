import React, { Component } from 'react';
import './Hero.scss';

export default class Hero extends Component {
  render() {
    return (
      <section id="hero" className="container mx-auto my-auto">
        <h1 className="mt-56 text-7xl max-w-5xl mx-auto font-extrabold leading-relaxed">Liquidity Provider infrastructure for Cardano</h1>
        <button className="mt-32 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg">Explore Protocol</button>
      </section>
    )
  }
}