import React from "react";
import MultiplePizzas from "../assets/multiplePizzas.jpeg";
import "../styles/About.css";

function About() {
  return (
    <div className="about">
       <div className="aboutTop" style={{ backgroundImage: `url(${MultiplePizzas})` }}
></div>
      <div className="aboutBottom">
        <h1>Sobre Nós</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque
          quibusdam quo, architecto cupiditate ea repellat ipsa recusandae
          voluptatibus totam? Impedit distinctio officiis eaque! Ea, ratione
          cumque? Inventore itaque nam sapiente. Lorem ipsum dolor sit, amet
          consectetur adipisicing elit. Explicabo minus est aspernatur nam
          laudantium at consectetur, dignissimos hic pariatur sunt, natus
          aliquid labore magni eaque accusamus praesentium, modi sed corrupti.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur
          maxime possimus reiciendis cum! Velit nostrum laboriosam veniam
          voluptatem inventore aspernatur. Culpa maxime laudantium, molestiae
          praesentium aspernatur eligendi veritatis id. Vel.
        </p>
      </div>
    </div>
  );
}

export default About;
