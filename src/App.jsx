import React, { Component } from "react";
import Api from "./services/api";
import Topbar from "./components/Topbar";
import Contacts from "./components/Contacts";

import Filters from "./components/Filters";

import "./App.scss";

class App extends Component {
  state = {
    contacts: [],
    filter: {
      search: {
        callback: null,
        type: "filter",
      },
      sort: {
        callback: null,
        type: "sort",
      },
    },
  };

  async componentDidMount() {
    const data = await Api.getContacts();

    this.setState({ contacts: data });
  }

  applyFilters = (entry) => {
    const { filter } = this.state;

    return Object.values(filter).reduce((acc, { type, callback }) => {
      if (!callback) {
        return acc;
      }

      return acc[type](callback);
    }, entry);
  };

  onFilter = (fn, name) => {
    this.setState((prevState) => ({
      ...prevState,
      filter: {
        ...prevState.filter,
        [name]: {
          ...prevState.filter[name],
          callback: fn,
        },
      },
    }));
  };

  render() {
    const { contacts } = this.state;

    const filteredContacts = this.applyFilters(contacts);

    return (
      <>
        <Topbar />
        <Filters onFilter={this.onFilter} />
        <Contacts contacts={filteredContacts} />
      </>
    );
  }
}

export default App;
