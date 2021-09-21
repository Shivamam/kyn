import React, { Component } from "react";
import AuthService from "../services/auth.service";

class LoginComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      // step 2
      userName: "",
      userPassword: "",
      errorMessage: "",
    };
    this.changeUserNameHandler = this.changeUserNameHandler.bind(this);
    this.changePasswordHandler = this.changePasswordHandler.bind(this);

    this.loginUser = this.loginUser.bind(this);
  }

  loginUser = (e) => {
    e.preventDefault();
    let user = {
      userName: this.state.userName,
      userPassword: this.state.userPassword,
    };
    console.log("loginuser => " + JSON.stringify(user));

    AuthService.login(user).then(
      () => {
        this.props.history.push("/dashboard");
        window.location.reload();
      },
      (error) => {
        const resMessage =
          (error.response &&
            error.response.data &&
            error.response.data.message) ||
          error.message ||
          error.toString();

        this.setState({
          errorMessage: resMessage,
        });
      }
    );
  };

  changeUserNameHandler = (event) => {
    this.setState({ userName: event.target.value });
  };

  changePasswordHandler = (event) => {
    this.setState({ userPassword: event.target.value });
  };

  cancel() {
    this.props.history.push("/");
  }

  render() {
    return (
      <div>
        <br></br>
        <div className="container-fluid">
          <div className="row">
            <div className="card col-md-6 offset-md-3 offset-md-3">
              <h1> Login Here </h1>
              <div className="card-body">
                {this.state.errorMessage && (
                  <div className="alert alert-danger" role="alert">
                    {" "}
                    {this.state.errorMessage}{" "}
                  </div>
                )}
                <form>
                  <div className="form-group">
                    <label> Username : </label>
                    <input
                      placeholder="Enter Your Username"
                      name="userName"
                      className="form-control"
                      value={this.state.userName}
                      onChange={this.changeUserNameHandler}
                    />
                  </div>
                  <br></br>
                  <div className="form-group">
                    <label> Password: </label>
                    <input
                      type="Password"
                      placeholder="Enter Your Password"
                      name="userPassword"
                      className="form-control"
                      value={this.state.userPassword}
                      onChange={this.changePasswordHandler}
                    />
                  </div>

                  <button
                    className="btn btn-outline-dark"
                    onClick={this.loginUser}
                  >
                    Login
                  </button>
                  <button
                    className="btn btn-outline-secondary"
                    onClick={this.cancel.bind(this)}
                    style={{ marginLeft: "10px" }}
                  >
                    Cancel
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default LoginComponent;
