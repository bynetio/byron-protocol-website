import React, { Component } from 'react';
import './CallToAction.scss';
import abstract from '../../abstract.png';
import whitepaper from '../../BynetProtocolWhitepaper.pdf';

export default class CallToAction extends Component {
  render() {
    return (
      <section id="callToAction" className="">
        <div class="bg-bckg-blue">
        <div className="triangle"></div>
          <div className="rectangle"></div>
        </div>
        <div className="bg-navy text-left">
        <div className="mx-6 md:mx-8 xl:mx-auto flex flex-wrap-reverse max-w-6xl">

          <div className="w-full xl:w-1/2">
          <h4 className="text-sm text-blue uppercase font-bold tracking-[.5em] my-6">Get started</h4>
            <h2 className="text-[38px] md:text-[28px] xl:text-[56px] font-bold text-white">Empowering DeFi on Cardano</h2>
            <p className="text-grey mb-10">Bynet Protocol will serve as a vital hub, which eliminates the technology barrier and provides on-chain liquidity for DApps, DAOs and Lending Protocols. Our open-source code, libraries, SDK will attract and empower any project to build or adopt the advantages of our ecosystem.</p>
            <a href="https://docsend.com/view/5zj8emupedjs4gtt" rel="noopener noreferrer" target="blank" className="block w-fit mb-12 xl:mb-36 bg-gradient-to-r from-dark-blue to-light-blue hover:from-light-blue hover:to-dark-blue text-white font-bold py-2 px-4 rounded-lg">Explore our Whitepaper</a>
          </div>
          
        <div className="w-full md:invisible xl:visible md:h-0 xl:h-auto xl:w-1/2">
          <img src={abstract} alt="Logo" />
        </div>
        </div>
        </div>
      </section>
    )
  }
}