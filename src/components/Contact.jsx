import React from "react";
import "./contact.scss";

const Contact = ({
  name,
  avatar,
  company,
  department,
  admissionDate,
  phone,
  country,
}) => {
  return (
    <article className="contact" data-testid="contact">
      <span className="contact__avatar">
        <img src={avatar} alt={name} />
      </span>
      <span className="contact__data">{name}</span>
      <span className="contact__data">{phone}</span>
      <span className="contact__data">{country}</span>
      <span className="contact__data">{admissionDate}</span>
      <span className="contact__data">{company}</span>
      <span className="contact__data">{department}</span>
    </article>
  );
};

export default Contact;
