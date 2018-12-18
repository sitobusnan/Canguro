import React, { Component } from 'react'
import { Link } from "react-router-dom";
import "./Topbar.css";

export default class Topbar extends Component {
  render() {
    return (
      <div className="top-bar">
        <div>
        <Link to='/profile'><button type="button" >PROFILE</button></Link>
        </div>
        <div>
        <Link to='/family'><button type="button" >FAMILY</button></Link>
        </div>
        <div>
        <Link to='/'><button type="button" >PANEL</button></Link>
        </div>
      </div>
    )
  }
}