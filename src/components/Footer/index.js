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
        <div className="max-w-6xl mx-auto py-6 flex">
          <img src={logo} alt="Logo" className="sm:w-1/6"/>
          <div className="sm:w-1/2">
            <a href="/">Privacy Policy</a>
            <a href="/">Terms & Conditions</a>
            <a href="/">BinarApps</a>
            <a href="/">IOHK</a>
          </div>
          <div className="sm:w-1/3 flex justify-end">
            <a href="/"><img src={twitter} alt="Logo"/></a>
            <a href="/"><img src={github} alt="Logo"/></a>
            <a href="/"><img src={figma} alt="Logo"/></a>
            <a href="/"><img src={instagram} alt="Logo"/></a>
          </div>
          </div>
      </div>
    )
  }
}