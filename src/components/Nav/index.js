import React, {Component} from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  NavLink
} from "react-router-dom";
import Footer from "../Footer";
import './Nav.scss';

import a from '../../1.png';
import b from '../../2.png';
import c from '../../3.png';
import logo from '../../byron-logo.svg';
import arrow from '../../arrow-right.svg';
import whitepaper from '../../BynetProtocolWhitepaper.pdf';


export default class Nav extends Component{
  render() {
  return (
  <div class="md:max-w-6xl mx-auto pt-4 px-4">
    <ul className="flex justify-end items-center h-max">
      <li className="mr-6 w-full">
        <a href="#"><img src={logo} alt="" className=""/></a>
      </li>
      <li className="mr-6 invisible md:visible w-0 md:w-auto">
        <a className="text-black hover:text-blue font-bold" href="#">Home</a>
      </li>
      <li className="mr-6 invisible md:visible w-0 md:w-max">
        <a className="text-black hover:text-blue" href="#layers" >Protocol&nbsp;Layers</a>
      </li>
      <li className="mr-6">
        <a className="text-blue font-bold hover:underline w-max inline-block" href={whitepaper} rel="noopener noreferrer" target="blank">Whitepaper<img className="inline-block" src={arrow} alt=""/></a>
      </li>
    </ul>
</div>
  );
}
}