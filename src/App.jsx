import React from "react";
import Api from "./services/api";
import Topbar from "./components/Topbar";
import Contacts from "./components/Contacts";
import Contact from "./components/Contact";
import Filters from "./components/Filters";

import "./App.scss";

class App extends React.Component {
  state = {
    contacts: [],
  };
  async componentDidMount() {
    const contacts = await Api.getContacts();
    console.log(contacts);

    this.setState({
      contacts: contacts,
    });
  }

  render() {
    // const { contacts } = this.state;
    // contacts.map((contact) => console.log(contact.name));

    return (
      <>
        <Topbar />
        <Filters />

        <div className="container">
          <Contacts />
          <Contact contacts={this.state.contacts} />
          <section className="contacts"></section>
        </div>
      </>
    );
  }
}

export default App;
