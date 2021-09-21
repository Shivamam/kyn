import React, { Component } from "react";
import StoreService from "../services/StoreService";

class ListSearchStoreComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      stores: [],
      searchKeyword: this.props.match.params.searchKeyword,
    };

    this.searchStore = this.searchStore.bind(this);
  }

  viewStore(id) {
    this.props.history.push(`/view-store/${id}`);
  }

  componentDidMount() {
    StoreService.searchStore(this.state.searchKeyword).then((res) => {
      this.setState({ stores: res.data });
    });
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
        <h2 className="text-center">Search Store Results</h2>

        <form className="">
          <input
            className="form-control mr-sm-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
            value={this.state.searchKeyword}
            onChange={this.changeSearchHandler}
          ></input>
          <br></br>
          <button
            onClick={() => this.searchStore(this.state.searchKeyword)}
            className="btn btn-outline-primary"
          >
            Search
          </button>
        </form>
        <br></br>
        <br></br>
        <br></br>
        <div className="row">
          <table className="table table-striped table-bordered">
            <thead>
              <tr>
                <th> Store No. </th>
                <th> Store Name</th>
                <th> Store Number</th>
                <th> Store Location</th>
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
                      style={{ marginLeft: "10px" }}
                      onClick={() => this.viewStore(store.storeId)}
                      className="btn btn-outline-primary"
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
export default ListSearchStoreComponent;
