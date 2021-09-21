import React, { Component } from "react";
import "bootswatch/dist/lux/bootstrap.min.css";

class HomeComponent extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="container">
            <img
              src="https://i1.sndcdn.com/avatars-000394161252-tv5gz0-t500x500.jpg"
              style={{ align: "left", height: "6%", width: "6%" }}
            />{" "}
            <h1 className="float-left">
              {" "}
              Know Your <br></br>Neighbourhood
            </h1>
            <div>
              <button className="btn btn-primary">
                <a
                  href="/home"
                  style={{ textDecoration: "none", color: "white" }}
                >
                  Home
                </a>
              </button>
              <button className="btn btn-primary">
                <a
                  href="/about"
                  style={{ textDecoration: "none", color: "white" }}
                >
                  About
                </a>
              </button>
              <button className="btn btn-primary">
                <a
                  href="/contact"
                  style={{ textDecoration: "none", color: "white" }}
                >
                  Contact
                </a>
              </button>
              <button className="btn btn-primary">
                <a
                  href="/t&c"
                  style={{ textDecoration: "none", color: "white" }}
                >
                  Terms of Service
                </a>
              </button>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}

export default HomeComponent;
