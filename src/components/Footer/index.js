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
      <div className="overflow-hidden bg-bckg-blue">

      <div className="md:invisible md:max-w-6xl mx-auto py-6 h-auto md:h-0">

          
          <div className=""><img src={logo} alt="Logo" className="mx-auto"/></div>

          <div className="mx-auto">
            <a href="/" className="font-bold mr-4 block">Privacy Policy</a>
            <a href="/" className="font-bold mr-4 block">Terms & Conditions</a>
            <a href="https://binarapps.com/" className="mr-4 text-blue block" target="blank">BinarApps</a>
            <a href="https://iog.io/" className="mr-4 text-blue block" target="blank">IOG</a>
          </div>
          <div className="flex">
            <div className="mx-auto my-2">
            <a href="https://twitter.com/byron_cardano" target="blank"><img src={twitter} alt="Logo" className="mr-4 inline"/></a>
            <a href="https://github.com/byron-network/" target="blank"><img src={github} alt="Logo" className="mr-4 inline"/></a>
            <a href="https://discord.gg/Vp3w43Wt" target="blank"><img src={figma} alt="Logo" className="mr-4 inline"/></a>
            <a href="https://t.me/byron_network" target="blank"><img src={instagram} alt="Logo" className="mr-4 inline"/></a>
            </div>
          </div>

          <div className=""><div className="mr-4 text-grey block">Copyrignt@ 2022 Byron Network OU. <br/>All rights reserved.</div></div>
        </div>

        

      <div className="h-0 md:h-auto invisible md:visible md:max-w-6xl mx-auto py-6">
        <div className="grid md:grid-rows-2 md:grid-cols-6 grid-flow-col">
          
          <div className="md:row-span-2 md:col-span-1"><img src={logo} alt="Logo" className=""/></div>

          <div className="md:row-span-1 md:col-span-3">
            <a href="/" className="font-bold mr-4">Privacy Policy</a>
            <a href="/" className="font-bold mr-4">Terms & Conditions</a>
            <span className="mr-4 text-grey">|</span>
            <a href="https://binarapps.com/" className="mr-4 text-blue" target="blank">BinarApps</a>
            <a href="https://iog.io/" className="mr-4 text-blue" target="blank">IOG</a>
          </div>

          <div className="md:row-span-1 md:col-span-3"><div className="mr-4 text-grey">Copyrignt@ 2022 Byron Network OU. All rights reserved.</div></div>

          <div className="md:row-span-2 md:col-span-2 flex">
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