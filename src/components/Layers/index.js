import React, { Component } from 'react';
import './Layers.scss';
import a from '../../1.png';
import b from '../../Group2.png';
import c from '../../Group3.png';
import dot1 from '../../dot1.svg';
import dot3 from '../../dot3.svg';
export default class Layers extends Component {
  render() {
    return (
      <section id="layers" className="bg-bckg-blue text-left pt-12 md:pt-0">
        <div className="flex flex-wrap-reverse xl:flex-nowrap mx-6 md:mx-8 xl:mx-auto md:max-w-6xl">
          <div className="md:w-full xl:w-1/2 xl:mr-14">
          <h4 className="text-sm text-blue uppercase font-bold tracking-[.5em] mb-6">Meet protocol layers</h4>
          <h2 className="text-[38px] md:text-[56px] font-bold">Prime Liquidity</h2>
          <p className="mt-8 text-lg">DApps and third-party services are able to access Prime Liquidity from Bynet Protocol’s order book and enrich their DeFi products. Layer 1 consists of Liquidity Orders that form Liquidity Pools with UTxOs available for exchange.</p>
          <div className="mt-12 text-lg">
            <div className="flex flex-row bg-white rounded-lg mb-6">
              <span className="basis-1/10 my-8 mx-6"><svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="16" cy="16" r="16" fill="#D7ECFF"/><path d="M21.3332 12L13.9998 19.3333L10.6665 16" stroke="#1566E1" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg></span>

             <span className="basis-9/10 mt-6 mr-6 md:mr-0">Liquidity Orders increase in size with a fee specified by Liquidity Provider
             </span>
            </div>

            <div className="flex flex-row bg-white rounded-lg mb-6">
              <span className="basis-1/10 my-8 mx-6">
              <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="16" cy="16" r="16" fill="#D7ECFF"/><path d="M21.3332 12L13.9998 19.3333L10.6665 16" stroke="#1566E1" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg></span>
              <span className="basis-9/10 mt-6 mr-6 md:mr-0">
              Adjustable Liquidity Orders distribution depending on the price dynamics
              </span>
            </div>

            <div className="flex flex-row bg-white rounded-lg">
              <span className="basis-1/10 my-8 mx-6">
                <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="16" cy="16" r="16" fill="#D7ECFF"/><path d="M21.3332 12L13.9998 19.3333L10.6665 16" stroke="#1566E1" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>
                </span>
                <span className="basis-9/10 mt-6 mr-6 md:mr-0">
                Partially Fulfillable Orders as a way of processing various order parameters.
            </span></div>
          </div>
          </div>
          <div className="w-0 invisible md:visible md:w-full xl:w-1/2 2xl:ml-14"><img src={a} alt="" ></img></div>
        </div>

        <div className="mx-6 mx-6 md:mx-8 xl:mx-auto flex flex-wrap-reverse xl:flex-nowrap max-w-6xl mt-12 xl:mt-52">
          <div className="md:w-full xl:w-1/2 2xl:mr-14">
          <h4 className="text-sm text-blue uppercase font-bold tracking-[.5em] mb-6">Meet protocol layers</h4>
          <h2 className="text-[38px] md:text-[56px] font-bold">Matching Engine</h2>
          <p className="mt-8 text-lg">Matching is a service that executes transactions by matching appropriate orders from the order book. Matchmaker is an algorithmic program that performs swaps while getting the difference between the bid and ask prices. It can decide on the commission they are aiming for, with diverse strategies dependent on a specific market.</p>
          <p className="mt-8 text-blue">Stake Pool Operators are a crucial part of the next phase - scaling with the Layer 2. As incentivised contributors to the protocol, they are going to act as Matchmakers.</p>
          </div>
          <div className="w-0 invisible md:visible md:w-full xl:w-1/2 2xl:ml-14"><img src={b} alt="" ></img></div>
        </div>

        <div className="mx-6 md:mx-8 xl:mx-auto flex flex-wrap-reverse xl:flex-nowrap max-w-6xl mt-12 xl:mt-52">
          <div className="md:w-full xl:w-1/2 2xl:mr-14">
          <h4 className="text-sm text-blue uppercase font-bold tracking-[.5em] mb-6">Meet protocol layers</h4>
          <h2 className="text-[38px] md:text-[56px] font-bold">Overcoming challenges</h2>
          <ul className="mt-8 text-lg">
            <li>
              <img src={dot1} alt=""/>
              <p className="text-xl font-bold mt-2 mb-4">Ever-changing trends in the blockchain space dictate a fast pace of project development.</p>
              <p className="mb-8">Bynet Protocol is an easy way of integrating a DeFi project with a strong focus on the business model. Our team has prepared advanced infrastructure to lift the burden of technological research and to encourage projects to focus on innovative ways to utilize the trading potential.</p>
            </li>
            <li>
            <img src={dot3} alt=""/>
              <p className="text-xl font-bold mt-2 mb-4">DeFi projects are limited to liquidity locked only on their own protocols.</p>
              <p className="mb-8">Prime liquidity is the answer to new-born markets struggling with initial liquidity. Various projects can use liquidity on the On-chain Order book and therefore increase the number of UTxOs a project has access to. They are not limited to their own market and benefit from other protocol’s contributors.</p>
            </li>
          </ul>
          </div>
          <div className="w-0 invisible md:visible md:w-full xl:w-1/2 2xl:ml-14"><img src={c} alt="" ></img></div>
        </div>
      </section>
    )
  }
}