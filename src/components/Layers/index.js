import React, { Component } from 'react';
import './Layers.scss';
import a from '../../1.png';
import b from '../../2.png';
import c from '../../3.png';

export default class Layers extends Component {
  render() {
    return (
      <section id="layers" className="bg-bckg-blue text-left">

        <div className="flex max-w-6xl mx-auto">
          <div className="w-full sm:w-1/2 mr-14">
          <h4 className="text-sm text-blue uppercase font-bold tracking-[.5em] mb-6">Meet protocol layers</h4>
          <h2 className="text-[56px] font-bold">On-chain Order-Book</h2>
          <p className="mt-8 text-lg">Byron Network offers a fundamental on-chain order book called Bynet Protocol utilizing an infrastructure layer that enables development on top of the protocol. DApps can use shared liquidity from Bynet Protocol’s order book by developing their products with the infrastructure. Having mass adoption in mind, Byron Network aims to provide a development layer that is ready to be implemented by projects like BynetDEX.</p>
          <div className="mt-12 text-lg shadow">
            <div className="flex flex-row bg-white rounded-lg mb-6">
              <span className="basis-1/10 my-8 mx-6"><svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="16" cy="16" r="16" fill="#D7ECFF"/><path d="M21.3332 12L13.9998 19.3333L10.6665 16" stroke="#1566E1" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg></span>

             <span className="basis-9/10 mt-6">Liquidity Orders increase in size with a fee specified by Liquidity Provider
             </span>
            </div>

            <div className="flex flex-row bg-white rounded-lg mb-6">
              <span className="basis-1/10 my-8 mx-6">
              <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="16" cy="16" r="16" fill="#D7ECFF"/><path d="M21.3332 12L13.9998 19.3333L10.6665 16" stroke="#1566E1" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg></span>
              <span className="basis-9/10 mt-6">
              Partially Fulfillable Orders as a way of facing variable order parameters
              </span>
            </div>

            <div className="flex flex-row bg-white rounded-lg">
              <span className="basis-1/10 my-8 mx-6">
                <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="16" cy="16" r="16" fill="#D7ECFF"/><path d="M21.3332 12L13.9998 19.3333L10.6665 16" stroke="#1566E1" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>
                </span>
                <span className="basis-9/10 mt-6">
                Adjustable Liquidity Orders distribution depending on the price dynamics
            </span></div>
          </div>
          </div>
          <div className="w-full sm:w-1/2 ml-14"><img src={a} alt="" ></img></div>
        </div>

        <div className="flex max-w-6xl mx-auto mt-52">
          <div className="w-full sm:w-1/2 mr-14">
          <h4 className="text-sm text-blue uppercase font-bold tracking-[.5em] mb-6">Meet protocol layers</h4>
          <h2 className="text-[56px] font-bold">Matchmaking Engine</h2>
          <p className="mt-8 text-lg">Matchmaking is a service that executes transactions by matching appropriate orders from the order book. Matchmaker is an algorithmic program that performs swaps while getting the difference between the bid and ask prices. It can decide on the commission they are aiming for, with diverse strategies dependent on a specific market.</p>
          <p className="mt-8 text-blue">Stake Pool Operators are a crucial part of the Cardano network, and they will be incentivized to perform swaps as matchmakers with various options of rewarding their delegators.</p>
          </div>
          <div className="w-full sm:w-1/2 ml-14"><img src={b} alt="" ></img></div>
        </div>

        <div className="flex max-w-6xl mx-auto mt-52">
          <div className="w-full sm:w-1/2 mr-14">
          <h4 className="text-sm text-blue uppercase font-bold tracking-[.5em] mb-6">Meet protocol layers</h4>
          <h2 className="text-[56px] font-bold">Problem solving with Bynet Protocol</h2>
          <ul className="mt-8 text-lg">
            <li>
              <svg width="42" height="46" viewBox="0 0 42 46" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="22" cy="22" r="20" fill="#D7ECFF"/>
                <g filter="url(#filter0_d_168_237)">
                <circle cx="21.6426" cy="21.6429" r="12.5" fill="url(#paint0_linear_168_237)"/>
                </g>
                <g filter="url(#filter1_f_168_237)">
                <ellipse cx="16.4366" cy="15.807" rx="5.52321" ry="2.85714" transform="rotate(-38.9309 16.4366 15.807)" fill="white"/>
                </g>
                <defs>
                <filter id="filter0_d_168_237" x="1.99972" y="6.28573" width="39.2857" height="39.2857" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                <feOffset dy="4.28571"/>
                <feGaussianBlur stdDeviation="3.57143"/>
                <feComposite in2="hardAlpha" operator="out"/>
                <feColorMatrix type="matrix" values="0 0 0 0 0.145098 0 0 0 0 0.176471 0 0 0 0 0.368627 0 0 0 0.36 0"/>
                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_168_237"/>
                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_168_237" result="shape"/>
                </filter>
                <filter id="filter1_f_168_237" x="0.350238" y="0.256579" width="32.1726" height="31.1009" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                <feGaussianBlur stdDeviation="5.71429" result="effect1_foregroundBlur_168_237"/>
                </filter>
                <linearGradient id="paint0_linear_168_237" x1="17.5885" y1="13.8726" x2="30.4264" y2="31.4402" gradientUnits="userSpaceOnUse">
                <stop stop-color="#131940"/>
                <stop offset="1" stop-color="#273062"/>
                </linearGradient>
                </defs>
              </svg>
              <p className="text-xl font-bold mt-2 mb-4">Shared liquidity is the answer to new-born markets struggling with initial liquidity.</p>
              <p className="mb-8">Different projects can use liquidity on the Bynet Protocol’s On-chain Order Book and therefore increase the number of UTxOs a project has access to. They are not limited by their own market and take advantage of other contributors 
              to the order book.</p>
            </li>
            <li>
            <svg width="50" height="56" viewBox="0 0 50 56" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="27" cy="27" r="20" fill="#D7ECFF"/>
              <g filter="url(#filter0_d_168_247)">
              <circle cx="26.6431" cy="26.6429" r="12.5" fill="url(#paint0_linear_168_247)"/>
              </g>
              <g filter="url(#filter1_f_168_247)">
              <ellipse cx="21.4366" cy="20.807" rx="5.52321" ry="2.85714" transform="rotate(-38.9309 21.4366 20.807)" fill="white"/>
              </g>
              <defs>
              <filter id="filter0_d_168_247" x="4.14307" y="10.1429" width="45" height="45" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
              <feFlood flood-opacity="0" result="BackgroundImageFix"/>
              <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
              <feOffset dy="6"/>
              <feGaussianBlur stdDeviation="5"/>
              <feComposite in2="hardAlpha" operator="out"/>
              <feColorMatrix type="matrix" values="0 0 0 0 0.145098 0 0 0 0 0.176471 0 0 0 0 0.368627 0 0 0 0.36 0"/>
              <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_168_247"/>
              <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_168_247" result="shape"/>
              </filter>
              <filter id="filter1_f_168_247" x="0.778809" y="0.685143" width="41.3154" height="40.2437" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
              <feFlood flood-opacity="0" result="BackgroundImageFix"/>
              <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
              <feGaussianBlur stdDeviation="8" result="effect1_foregroundBlur_168_247"/>
              </filter>
              <linearGradient id="paint0_linear_168_247" x1="22.589" y1="18.8726" x2="35.4268" y2="36.4402" gradientUnits="userSpaceOnUse">
              <stop stop-color="#0B417B"/>
              <stop offset="1" stop-color="#245382"/>
              <stop offset="1" stop-color="#004B97"/>
              </linearGradient>
              </defs>
              </svg>
              <p className="text-xl font-bold mt-2 mb-4">Easy way of deploying a DeFi project with a strong focus on the business model.</p>
              <p className="mb-8">Ever-changing trends in the blockchain space dictate a fast pace of project development. Our team has prepared advanced technology to lift the burden of technological research and to encourage teams to focus on innovative ways to utilize the trading potential. (kickstarter)</p>
            </li>
            <li>
            <svg width="50" height="56" viewBox="0 0 50 56" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="27" cy="27" r="20" fill="#D7ECFF"/>
              <g filter="url(#filter0_d_168_254)">
              <circle cx="26.6431" cy="26.6429" r="12.5" fill="url(#paint0_linear_168_254)"/>
              </g>
              <g filter="url(#filter1_f_168_254)">
              <ellipse cx="21.4366" cy="20.807" rx="5.52321" ry="2.85714" transform="rotate(-38.9309 21.4366 20.807)" fill="white"/>
              </g>
              <defs>
              <filter id="filter0_d_168_254" x="4.14307" y="10.1429" width="45" height="45" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
              <feFlood flood-opacity="0" result="BackgroundImageFix"/>
              <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
              <feOffset dy="6"/>
              <feGaussianBlur stdDeviation="5"/>
              <feComposite in2="hardAlpha" operator="out"/>
              <feColorMatrix type="matrix" values="0 0 0 0 0.145098 0 0 0 0 0.176471 0 0 0 0 0.368627 0 0 0 0.36 0"/>
              <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_168_254"/>
              <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_168_254" result="shape"/>
              </filter>
              <filter id="filter1_f_168_254" x="0.778809" y="0.68515" width="41.3154" height="40.2437" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
              <feFlood flood-opacity="0" result="BackgroundImageFix"/>
              <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
              <feGaussianBlur stdDeviation="8" result="effect1_foregroundBlur_168_254"/>
              </filter>
              <linearGradient id="paint0_linear_168_254" x1="22.589" y1="18.8726" x2="35.4268" y2="36.4402" gradientUnits="userSpaceOnUse">
              <stop stop-color="#0854C9"/>
              <stop offset="1" stop-color="#063E95"/>
              </linearGradient>
              </defs>
              </svg>
              <p className="text-xl font-bold mt-2 mb-4">Greater returns on investments thanks to Liquidity Order’s model</p>
              <p className="mb-8">With a model that gives the possibility to impose a fee on Liquidity Provider's orders and more projects utilizing its liquidity, higher returns can be expected. With more attractive orders, more swaps will be performed, 
              increasing the initial investment size.</p>
            </li>
          </ul>
          </div>
          <div className="w-full sm:w-1/2 ml-14"><img src={c} alt="" ></img></div>
        </div>
      </section>
    )
  }
}