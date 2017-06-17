import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import './nav.scss';
import logo from './img/trello.svg';
import boards from './img/board-Icon.svg';
import searchIcon from './img/search-Icon.svg';

class Nav extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <nav className="navbar navbar-default" role="navigation">
        <div className="navbar-header">
          <button type="button" className="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
          </button>
          <div className="navbar-brand" href="#">
            <div className='nav__logo '>
              <img src={logo} alt="" />
            </div>
          </div>
        </div>
        <div className="navbar-collapse collapse">
          <ul className="nav navbar-nav navbar-left">
            <li><a href="#">Left</a></li>
            <li><a href="#about">Left</a></li>
          </ul>

          <form className="navbar-form navbar-left">
            <div className="input-group">
              <input type="text" className="form-control" placeholder="Search" aria-describedby="basic-addon2" />
              <span className="input-group-addon" id="basic-addon2">
                <figure className='nav__search--icon'>
                  <img src={searchIcon} alt="Search Icon" />
                </figure>
              </span>
            </div>
          </form>
          
          <ul className="nav navbar-nav navbar-right">
            <li><a href="#about">Right</a></li>
            <li><a href="#contact">Right</a></li>
          </ul>
        </div>
      </nav>
    );
  }
}

// const mapStateToProps = store => {
//   return {
//     searchTerm: store.searchTerm
//   };
// };

// export default connect(mapStateToProps)(Nav);
export default Nav;