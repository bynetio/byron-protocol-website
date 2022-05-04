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


export default class Nav extends Component{
  render() {
  return (
<div>
	<ul id="cards">
		<li className="card" id="card_1">
      <img className="card__content" src={a} alt="" ></img>
		</li>
		<li className="card" id="card_2">
      <img className="card__content" src={b} alt="" ></img>
		</li>
		<li className="card" id="card_3">
      <img className="card__content" src={a} alt="" ></img>
		</li>
	</ul>
</div>
    
  );
}
}


{/* <Router>
      <div>
      <nav className="navbar navbar-expand-lg navbar-light justify-content-left">
       <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav text-uppercase" >
          <li className="nav-item">
            <NavLink className="nav-link" to="/about">About</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/dashboard">Dashboard</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/card">Card</NavLink>
          </li>
        </ul>
        </div>
        </nav>
        <Routes>
          <Route extact path="/dashboard" element={<Footer />}/>
        </Routes>
      </div>
    </Router> */}