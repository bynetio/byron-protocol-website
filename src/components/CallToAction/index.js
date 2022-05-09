import React, { Component } from 'react';
import './CallToAction.scss';
import abstract from '../../abstract.png'

export default class CallToAction extends Component {
  render() {
    return (
      <section id="callToAction" className="">
        <div class="bg-bckg-blue">
        <div className="triangle"></div>
          <div className="rectangle"></div>
        </div>
        <div className="bg-navy text-left">
        <div className="mx-6 md:mx-auto flex flex-wrap-reverse md:flex-nowrap max-w-6xl">

          <div className="md:w-1/2">
          <h4 className="text-sm text-blue uppercase font-bold tracking-[.5em] my-6">Get started</h4>
            <h2 className="text-[56px] font-bold text-white">Build your own DeFi product</h2>
            <p className="text-grey mb-10">With a model that gives the possibility to impose a fee on Liquidity Provider's orders and more projects utilizing its liquidity, higher returns can be expected. With more attractive orders, more swaps will be performed, increasing the initial investment size.</p>
            <a href="https://twitter.com/byron_cardano" target="blank" className="mb-36 bg-gradient-to-r from-dark-blue to-light-blue hover:from-light-blue hover:to-dark-blue text-white font-bold py-2 px-4 rounded-lg">Get Started with Protocol →</a>
          </div>
          
        <div className="md:w-1/2">
          <img src={abstract} alt="Logo" />
        </div>
        </div>
        </div>
      </section>
    )
  }
}