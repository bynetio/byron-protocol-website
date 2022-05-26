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
export default class Nav extends Component{
  render() {
  return (
  <nav>
    <div className="pt-4 px-4 xl:px-0 md:max-w-6xl mx-auto pb-20 sm:pb-40 lg:pb-0">
      <ul className="flex justify-end items-top h-max">
        <li className="mr-6 mt-2 w-full">
          <a href="#"><img src={logo} alt="" className="max-h-[77px] sm:max-h-[90px]"/></a>
        </li>
        <li className="mr-8 mt-2 invisible md:visible w-0 md:w-auto">
          <a className="text-black hover:text-blue font-bold" href="#">Home</a>
        </li>
        <li className="mr-8 mt-2 invisible md:visible w-0 md:w-max">
          <a className="text-black hover:text-blue border-left" href="#layers" >Protocol&nbsp;Layers</a><span class="ml-8 border-r-2"></span>
        </li>
        <li className="">
          <a className="text-blue mt-2 font-bold hover:underline w-max inline-block" href="https://docsend.com/view/5zj8emupedjs4gtt" rel="noopener noreferrer" target="blank">Whitepaper<img className="inline-block" src={arrow} alt=""/></a>
        </li>
      </ul>
  </div>
</nav>
  );
}
}