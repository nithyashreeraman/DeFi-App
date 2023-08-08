import React, { Component } from 'react'

class Navbar extends Component {

  render() {
    return (
      <nav className="navbar navbar-dark fixed-top bg-dark flex-md-nowrap p-0 shadow" style={{backgroundColor:"#000fff"}}>
        <div className='text-bold text-light navbar-brand' style={{padding:"0.75rem", fontSize:"1.5rem"}}>DeFi Farm</div>
        <ul className="navbar-nav px-3">
          <li className="nav-item text-nowrap d-none d-sm-none d-sm-block">
            <small className="text-large text-light">
              <small id="account" style={{fontSize:"0.75rem"}}>Account address: {this.props.account}</small>
            </small>
          </li>
        </ul>
      </nav>
    );
  }
}

export default Navbar;
