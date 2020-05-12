import React from "react";
import "./contacts.scss";

class Contacts extends React.Component {
  render() {
    return (
      <article className="contact" data-testid="contacts">
        <span className="contact__avatar"></span>
        <span className="contact__data">Nome</span>
        <span className="contact__data">Telefone</span>
        <span className="contact__data">País</span>
        <span className="contact__data">Admissão</span>
        <span className="contact__data">Empresa</span>
        <span className="contact__data">Departamento</span>
      </article>
    );
  }
}

export default Contacts;
