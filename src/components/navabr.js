import React, { Component } from "react";
import "./styles/nav.css";
import {Link} from 'react-router-dom';

export default class navabr extends Component {
  constructor() {
    super();
    this.state = {
      scrolled: false,
    };
  }

  componentDidMount() {
    window.addEventListener("scroll", () => {
      const isTop = window.scrollY < 100;
      if (isTop !== true) {
        this.setState({ scrolled: true });
      } else {
        this.setState({ scrolled: false });
      }
    });
  }

  componentWillUnmount() {
    window.removeEventListener("scroll");
  }

  render() {
    return (
      <div className={this.state.scrolled ? "nav scrolled" : "nav"}>
        <div className="nav_text">
          <ul className="nav-link">
          <a href="/" className="navbar-brand">Nomad Diary</a>
              <li>
                  <a href="/">ABOUT US</a>
                  <a href="/">CONTACT</a>
                  <Link to="/signup">REGISTER</Link>
                  <Link to="/login">LOGIN</Link>
              </li>
          </ul>
        </div>
      </div>
    );
  }
}
