import React, { Component } from 'react'
import { Link, NavLink } from 'react-router-dom';
import { withAuthConsumer } from '../../contexts/AuthStore';

class NavBar extends Component {

  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light mt-5" style={{ borderRadius: "5px"}}>
        <Link className="navbar-brand" to="/users">Auth Context Lab</Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
  
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav mr-auto">
          { this.props.isAuthenticated() && (
            <li className="nav-item">
              <NavLink className="nav-link" activeClassName="active" to="/users">Users</NavLink>
            </li>
          )}
          </ul>
          <ul className="navbar-nav my-2 my-lg-0">
          { !this.props.isAuthenticated() && (
             <React.Fragment>
              <li className="nav-item">
                <NavLink className="nav-link" activeClassName="active" to="/register">Register</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" activeClassName="active" to="/login">Login</NavLink>
              </li>
             </React.Fragment> 
          )}
          { this.props.isAuthenticated() && (
            <React.Fragment>
             <li className="nav-item">
               <NavLink className="nav-link" activeClassName="active" to="/register">{this.props.user.email}</NavLink>
             </li>
             <li className="nav-item">
               <NavLink className="nav-link" activeClassName="active" to="/login">Logout</NavLink>
             </li>
            </React.Fragment> 
          )} 
          </ul>
        </div>
      </nav>
    )
  }
}

export default withAuthConsumer(NavBar);