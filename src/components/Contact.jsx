import React from "react";
import "./contact.scss";

const Contact = (props) => {
  return (
    <>
      {props.contacts.map((contact) => {
        return (
          <article key={contact.id} className="contact" data-testid="contact">
            <span className="contact__avatar">
              <img src={contact.avatar} alt={contact.name} />
            </span>
            <span className="contact__data">{contact.name}</span>
            <span className="contact__data">{contact.phone}</span>
            <span className="contact__data">{contact.country}</span>
            <span className="contact__data">{contact.admissonDate}</span>
            <span className="contact__data">{contact.company}</span>
            <span className="contact__data">{contact.department}</span>
          </article>
        );
      })}
    </>
  );
};

export default Contact;
