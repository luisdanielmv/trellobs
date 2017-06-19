import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import './nav.scss';
import logo from './img/trello.svg';
import addIcon from './img/add-Icon.svg';
import bellIcon from './img/bell-Icon.svg';
import boardsIcon from './img/board-Icon.svg';
import importantIcon from './img/important-Icon.svg';
import searchIcon from './img/search-Icon.svg';

class Nav extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <nav className="navbar navbar-default" role="navigation">
        <div className="flex-row">
          <div className="flex-grow flex-row flex__space-between">
            <button type="button" className="nav__btn">
              <figure className='nav__icon'>
                <img src={boardsIcon} alt="Boards Icon" />
              </figure>
              <span className='hidden-xs hidden-sm'>Boards</span>
            </button>
            <form className="navbar-form navbar-left hidden-xs">
              <div className="input-group">
                <input type="text" className="form-control" placeholder="Search" aria-describedby="basic-addon2" />
                <span className="input-group-addon" id="basic-addon2">
                  <figure className='nav__search-icon'>
                    <img src={searchIcon} alt="Search Icon" />
                  </figure>
                </span>
              </div>
            </form>
          </div>

          <div className="flex-grow flex-row flex__center">
            <div className="navbar-brand" href="#">
              <div className='nav__logo '>
                <img src={logo} alt="" />
              </div>
            </div>
          </div>

          <div className="flex-grow flex-row flex__end">
            <ul className='nav navbar-nav flex-row flex__end'>
              <li>
                <figure className='nav__icon'>
                  <img src={addIcon} alt="Add Icon" />
                </figure>
              </li>
              <li>
                <figure className='nav__icon'>
                  <img src={importantIcon} alt="Notification Icon" />
                </figure>
              </li>
              <li>
                <figure className='nav__icon'>
                  <img src={bellIcon} alt="Bell Icon" />
                </figure>
              </li>
            </ul>
            <div className="dropdown username">
              <button className="btn btn-default dropdown-toggle nav__btn" type="button" id="dropdownMenu1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
                <span className='hidden-xs'>Username</span>
                <span className="caret"></span>
              </button>
              <ul className="dropdown-menu" aria-labelledby="dropdownMenu1">
                <li><a href="#">Action</a></li>
                <li><a href="#">Another action</a></li>
                <li><a href="#">Something else here</a></li>
                <li role="separator" className="divider"></li>
                <li><a href="#">Separated link</a></li>
              </ul>
            </div>
          </div>
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