import React from "react";
import Api from "./services/api";
import Topbar from "./components/Topbar";
import Contacts from "./components/Contacts";

import Filters from "./components/Filters";

import "./App.scss";

class App extends React.Component {
  state = {
    contacts: [],
  };
  async componentDidMount() {
    const data = await Api.getContacts();

    this.setState({
      contacts: data,
    });
  }

  render() {
    return (
      <>
        <Topbar />
        <Filters />

        <Contacts contacts={this.state.contacts} />
      </>
    );
  }
}

export default App;
