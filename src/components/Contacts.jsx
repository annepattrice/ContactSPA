import React from "react";
import "./contacts.scss";
import Contact from "./Contact";

<<<<<<< HEAD
const Contacts = ({ contacts }) => (
  <div className="container" data-testid="contacts">
    <section className="contacts">
      <article className="contact">
        <span className="contact__avatar" />
=======
class Contacts extends React.Component {
  render() {
    return (
      <article className="contact" data-testid="contacts">
        <span className="contact__avatar"></span>
>>>>>>> e1ff5f8a2f6d65be9b9d01659de52965e0080594
        <span className="contact__data">Nome</span>
        <span className="contact__data">Telefone</span>
        <span className="contact__data">País</span>
        <span className="contact__data">Admissão</span>
        <span className="contact__data">Empresa</span>
        <span className="contact__data">Departamento</span>
      </article>
      {contacts &&
        contacts.map((contact) => <Contact key={contact.id} {...contact} />)}
    </section>
  </div>
);

export default Contacts;
