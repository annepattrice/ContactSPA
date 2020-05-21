import React from "react";
import Api from "./services/api";
import Topbar from "./components/Topbar";
import Contacts from "./components/Contacts";

import Filters from "./components/Filters";

import "./App.scss";

class App extends React.Component {
  state = {
    contacts: [],
    search: "",
    filteredContacts: [],
    sortSelected: "",
  };
  async componentDidMount() {
    const data = await Api.getContacts();

    this.setState({
      contacts: data,
      filteredContacts: data,
    });
  }
  handleSearch = (e) => {
    e.preventDefault();
    const filteredContacts = this.state.contacts.filter((contact) =>
      contact.name.toLowerCase().includes(e.target.value.toLowerCase())
    );
    this.setState({ filteredContacts });
  };

  handleSort = (e) => {
    const { filteredContacts } = this.state;
    const {
      target: { name },
    } = e;
    this.setState({ sortSelected: name });

    const compareFilter = (a, b) => {
      const x = typeof a[name] === "string" ? a[name].toLowerCase() : a[name];
      const y = typeof b[name] === "string" ? b[name].toLowerCase() : b[name];

      return x < y ? -1 : x > y ? 1 : 0;
    };

    const dataFiltered = filteredContacts.sort(compareFilter);

    this.setState({ filteredContacts: dataFiltered });
  };

  render() {
    const { sortSelected, filteredContacts } = this.state;
    return (
      <>
        <Topbar />
        <Filters
          search={this.search}
          handleSearch={this.handleSearch}
          handleSort={this.handleSort}
          buttonSortSelected={sortSelected}
        />
        <Contacts contacts={filteredContacts} />
      </>
    );
  }
}

export default App;
