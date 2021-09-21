import React, { Component } from "react";
import StoreService from "../services/StoreService";

class ListStoreComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      stores: [],
      keyword: "",
    };
    this.createStore = this.createStore.bind(this);
    this.updateStore = this.updateStore.bind(this);
    this.deleteStore = this.deleteStore.bind(this);
    this.searchStore = this.searchStore.bind(this);
  }

  componentDidMount() {
    StoreService.getStores().then((res) => {
      this.setState({ stores: res.data });
    });
  }

  deleteStore(id) {
    StoreService.deleteStore(id).then((res) => {
      this.setState({
        stores: this.state.stores.filter((store) => store.storeId !== id),
      });
    });
  }
  viewStore(id) {
    this.props.history.push(`/view-store/${id}`);
  }
  updateStore(id) {
    this.props.history.push(`/add-store/${id}`);
  }

  createStore() {
    this.props.history.push("/add-store/_add");
  }

  changeSearchHandler = (event) => {
    console.log("search Handler");
    this.setState({ searchKeyword: event.target.value });
  };

  searchStore(searchKeyword) {
    console.log("search Store Method " + searchKeyword);
    this.props.history.push(`/search-stores/${searchKeyword}`);
  }

  render() {
    return (
      <div>
        <br></br>
        <br></br>
        <br></br>
        <h2 className="text-center">Store List</h2>
        <div className="row">
          <div className="col-md-10">
            <form className="form-inline">
              <input
                className="form-control mr-sm-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
                value={this.state.searchKeyword}
                onChange={this.changeSearchHandler}
              />
              <br></br>
              <br></br>
              <br></br>
            </form>
          </div>
          <br></br>
          <div className="col-md-2">
            <button
              onClick={() => this.searchStore(this.state.searchKeyword)}
              className="btn btn-outline-info"
            >
              Search{" "}
            </button>
          </div>
        </div>

        <div className="row">
          <table className="table table-striped table-bordered">
            <thead>
              <tr>
                <th> Store No. </th>
                <th> Store Name</th>
                <th> Store Number</th>
                <th> Store Location</th>
                <th><button className="btn btn-primary">
                <a
                  href="/add-store/_add"
                  style={{ textDecoration: "none", color: "white" }}
                >
                  Add Store
                </a>
              </button></th>
              </tr>
            </thead>
            <tbody>
              {this.state.stores.map((store) => (
                <tr key={store.storeId}>
                  <td> {store.storeId} </td>
                  <td> {store.storeName} </td>
                  <td> {store.storeNumber}</td>
                  <td> {store.storeLocation}</td>

                  <td>
                    <button
                      onClick={() => this.updateStore(store.storeId)}
                      className="btn btn-outline-info"
                    >
                      Update{" "}
                    </button>
                    <button
                      style={{ marginLeft: "10px" }}
                      onClick={() => this.deleteStore(store.storeId)}
                      className="btn btn-outline-danger"
                    >
                      Delete{" "}
                    </button>
                    <button
                      style={{ marginLeft: "10px" }}
                      onClick={() => this.viewStore(store.storeId)}
                      className="btn btn-outline-info"
                    >
                      View{" "}
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default ListStoreComponent;
