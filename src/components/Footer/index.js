import React, { Component } from 'react';
import './Footer.scss';
import logo from '../../byron-protocol-logo.png';
import github from '../../github.png';
import instagram from '../../instagram.png';
import twitter from '../../twitter.png';
import figma from '../../figma.png';
export default class Footer extends Component {
  render() {
    return (
      <div className="bg-bckg-blue">

<div className="max-w-6xl mx-auto py-6">
        <div className="grid grid-rows-2 grid-cols-6 grid-flow-col">
          
          <div className="row-span-2 col-span-1"><img src={logo} alt="Logo" className=""/></div>

          <div className="row-span-1 col-span-3">
            <a href="/" className="font-bold mr-4">Privacy Policy</a>
            <a href="/" className="font-bold mr-4">Terms & Conditions</a>
            <span className="mr-4 text-grey">|</span>
            <a href="https://binarapps.com/" className="mr-4 text-blue" target="blank">BinarApps</a>
            <a href="https://iog.io/" className="mr-4 text-blue" target="blank">IOG</a>
          </div>

          <div className="row-span-1 col-span-3"><div className="mr-4 text-grey">Copyrignt@ 2022 Byron Network OU. All rights reserved.</div></div>

          <div className="row-span-2 col-span-2 flex">
            <a href="https://twitter.com/byron_cardano" target="blank"><img src={twitter} alt="Logo" className="mr-4"/></a>
            <a href="https://github.com/byron-network/" target="blank"><img src={github} alt="Logo" className="mr-4"/></a>
            <a href="https://discord.gg/Vp3w43Wt" target="blank"><img src={figma} alt="Logo" className="mr-4"/></a>
            <a href="https://t.me/byron_network" target="blank"><img src={instagram} alt="Logo" className="mr-4"/></a>
          </div>
        </div>

        </div>
      </div>
    )
  }
}