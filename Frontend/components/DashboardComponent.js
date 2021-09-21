import React, { Component } from "react";
import AuthService from '../services/auth.service';
class UserDashboardComponent extends Component {
  constructor(props) {
    super(props);

    this.createStore = this.createStore.bind(this);
    this.searchStore = this.searchStore.bind(this);
    this.dashboard = this.dashboard.bind(this);
    this.getStoreById = this.getStoreById.bind(this);
    this.state = { currentUser:false,};
  }

  dashboard() {
    this.props.history.push(`/dashboard`);
  }

  createStore() {
    this.props.history.push(`/add-store/_add`);
  }

  searchStore() {
    this.props.history.push(`/search`);
  }

  getStoreById = (e) => {
    this.props.history.push("/stores");
  };
  componentDidMount() {
    const user = AuthService.getCurrentUser();

    if (user) {
      this.setState({
        currentUser: user,
      });
    }
  }
  render() {
    return (
      <div>
        <br></br><br></br><br></br>
        <h2>Welcome {this.state.currentUser.username}</h2>
        <div className="row">
          <div>
            {" "}
            <button
              type="button"
              className="btn btn-outline-dark mt-5"
              onClick={this.createStore}
            >
              Add Store
            </button>
          </div>
          <div>
            <button
              className="btn btn-outline-dark mt-5"
              onClick={this.stores}
              style={{ marginLeft: "10px" }}
            >
              List of Stores
            </button>
            <br></br> <br></br> <br></br> <br></br> <br></br> <br></br>{" "}
            <br></br> <br></br> <br></br>
          </div>
        </div>
      </div>
    );
  }
}

export default UserDashboardComponent;
