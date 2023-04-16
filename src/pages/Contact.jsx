import React from "react";
import PizzaLeft from "../assets/pizzaLeft.jpeg";
import "../styles/Contact.css"

function Contact() {
  return (
    <div className="contact">
      <div
        className="leftSide"
        style={{ backgroundImage: `url(${PizzaLeft}` }}
      ></div>
      <div className="rightSide">
        <h1>Entre em Contato</h1>

        <form id="contact-form" method="POST">
          <label htmlFor="name">Nome Completo</label>
          <input
            name="name"
            placeholder="Digite seu nome completo"
            type="text"
          />
          <label htmlFor="email">Email</label>
          <input name="email" placeholder="Digite seu email" type="email" />
          <label htmlFor="message">Menssagem</label>
          <textarea
            rows="6"
            placeholder="Digite sua menssagem"
            name="message"
            required
          ></textarea>
          <button type="submit">Enviar</button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
