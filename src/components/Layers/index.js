import React, { Component } from 'react';
import './Layers.scss';
import a from '../../1.png';
import b from '../../Group2.png';
import c from '../../Group3.png';
import dot1 from '../../dot1.svg';
import dot2 from '../../dot2.svg';
import dot3 from '../../dot3.svg';
export default class Layers extends Component {
  render() {
    return (
      <section id="layers" className="bg-bckg-blue text-left pt-12 md:pt-0">
        <div className="flex flex-wrap-reverse xl:flex-nowrap mx-6 md:mx-8 xl:mx-auto md:max-w-6xl">
          <div className="md:w-full xl:w-1/2 xl:mr-14">
          <h4 className="text-sm text-blue uppercase font-bold tracking-[.5em] mb-6">Meet protocol layers</h4>
          <h2 className="text-[38px] md:text-[56px] font-bold">On-chain Order-Book</h2>
          <p className="mt-8 text-lg">Byron Network offers a fundamental on-chain order book called Bynet Protocol utilizing an infrastructure layer that enables development on top of the protocol. DApps can use shared liquidity from Bynet Protocol’s order book by developing their products with the infrastructure. Having mass adoption in mind, Byron Network aims to provide a development layer that is ready to be implemented by projects like BynetDEX.</p>
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
              Partially Fulfillable Orders as a way of facing variable order parameters
              </span>
            </div>

            <div className="flex flex-row bg-white rounded-lg">
              <span className="basis-1/10 my-8 mx-6">
                <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="16" cy="16" r="16" fill="#D7ECFF"/><path d="M21.3332 12L13.9998 19.3333L10.6665 16" stroke="#1566E1" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>
                </span>
                <span className="basis-9/10 mt-6 mr-6 md:mr-0">
                Adjustable Liquidity Orders distribution depending on the price dynamics
            </span></div>
          </div>
          </div>
          <div className="w-0 invisible md:visible md:w-full xl:w-1/2 2xl:ml-14"><img src={a} alt="" ></img></div>
        </div>

        <div className="mx-6 mx-6 md:mx-8 xl:mx-auto flex flex-wrap-reverse xl:flex-nowrap max-w-6xl mt-12 xl:mt-52">
          <div className="md:w-full xl:w-1/2 2xl:mr-14">
          <h4 className="text-sm text-blue uppercase font-bold tracking-[.5em] mb-6">Meet protocol layers</h4>
          <h2 className="text-[38px] md:text-[56px] font-bold">Matchmaking Engine</h2>
          <p className="mt-8 text-lg">Matchmaking is a service that executes transactions by matching appropriate orders from the order book. Matchmaker is an algorithmic program that performs swaps while getting the difference between the bid and ask prices. It can decide on the commission they are aiming for, with diverse strategies dependent on a specific market.</p>
          <p className="mt-8 text-blue">Stake Pool Operators are a crucial part of the Cardano network, and they will be incentivized to perform swaps as matchmakers with various options of rewarding their delegators.</p>
          </div>
          <div className="w-0 invisible md:visible md:w-full xl:w-1/2 2xl:ml-14"><img src={b} alt="" ></img></div>
        </div>

        <div className="mx-6 md:mx-8 xl:mx-auto flex flex-wrap-reverse xl:flex-nowrap max-w-6xl mt-12 xl:mt-52">
          <div className="md:w-full xl:w-1/2 2xl:mr-14">
          <h4 className="text-sm text-blue uppercase font-bold tracking-[.5em] mb-6">Meet protocol layers</h4>
          <h2 className="text-[38px] md:text-[56px] font-bold">Problem solving with Bynet Protocol</h2>
          <ul className="mt-8 text-lg">
            <li>
              <img src={dot1} alt=""/>
              <p className="text-xl font-bold mt-2 mb-4">Shared liquidity is the answer to new-born markets struggling with initial liquidity.</p>
              <p className="mb-8">Different projects can use liquidity on the Bynet Protocol’s On-chain Order Book and therefore increase the number of UTxOs a project has access to. They are not limited by their own market and take advantage of other contributors 
              to the order book.</p>
            </li>
            <li>
            <img src={dot2} alt=""/>
              <p className="text-xl font-bold mt-2 mb-4">Easy way of deploying a DeFi project with a strong focus on the business model.</p>
              <p className="mb-8">Ever-changing trends in the blockchain space dictate a fast pace of project development. Our team has prepared advanced technology to lift the burden of technological research and to encourage teams to focus on innovative ways to utilize the trading potential. (kickstarter)</p>
            </li>
            <li>
            <img src={dot3} alt=""/>
              <p className="text-xl font-bold mt-2 mb-4">Greater returns on investments thanks to Liquidity Order’s model</p>
              <p className="mb-8">With a model that gives the possibility to impose a fee on Liquidity Provider's orders and more projects utilizing its liquidity, higher returns can be expected. With more attractive orders, more swaps will be performed, 
              increasing the initial investment size.</p>
            </li>
          </ul>
          </div>
          <div className="w-0 invisible md:visible md:w-full xl:w-1/2 2xl:ml-14"><img src={c} alt="" ></img></div>
        </div>
      </section>
    )
  }
}