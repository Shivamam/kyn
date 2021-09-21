import React, { Component } from "react";
import StoreService from "../services/StoreService";

class ViewStoreComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      storeId: this.props.match.params.id,
      storeName: "",
      storeNumber: "",
      storeLocation: "",
    };
  }

  componentDidMount() {
    StoreService.getStoreById(this.state.storeId).then((res) => {
      let store = res.data;
      this.setState({
        storeName: store.storeName,
        storeLocation: store.storeLocation,
        storeNumber: store.storeNumber,
      });
    });
  }

  render() {
    return (
      <div>
        <br></br>
        <div className="card col-md-6 offset-md-3">
          <h3 className="text-center"> View Store Details</h3>
          <div className="card-body">
            <div>
              <label> Store Name: </label>
              {this.state.storeName}
            </div>

            <div>
              <label> Store Number: </label>
              {this.state.storeNumber}
            </div>

            <div>
              <label> Store Location : </label>
              {this.state.storeLocation}
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default ViewStoreComponent;
