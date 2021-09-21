import React, { Component } from "react";
import "bootswatch/dist/lux/bootstrap.min.css";

class HomeComponent extends Component {
  constructor(props) {
    super(props);

    this.registerUser = this.registerUser.bind(this);
    this.loginUser = this.loginUser.bind(this);
    // this.About = this.About.bind(this);
    // this.contactus = this.contactus.bind(this);
  }

  registerUser() {
    this.props.history.push("/register");
  }

  loginUser() {
    this.props.history.push("/login");
  }

  // About(){
  //   this.props.history.push("/about");
  // }

  // contactus(){
  //   this.props.history.push("/contact")
  // }

  render() {
    return (
      <div id="intro-example" class=" p-6 text-center bg-image">
        <div>
          <button
            className="btn btn-outline-dark mt-5"
            onClick={this.registerUser}
          >
            Register
          </button>
        </div>
        <br></br>

        <div>
          <button
            className="btn btn-outline-secondary"
            onClick={this.loginUser}
          >
            Login
          </button>
        </div>
        <br></br>
        <h2>Welcome!</h2>
      </div>
    );
  }
}

export default HomeComponent;
