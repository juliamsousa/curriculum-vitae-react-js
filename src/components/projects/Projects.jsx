import React from "react";
import "../experiences/experiences.css";
import ProjectItem from "./item/ProjectItem";
import image1 from '../../assets/R15.jpg';
import image2 from '../../assets/decom.jpg';
import image3 from '../../assets/logo-2 1.svg';
import image4 from '../../assets/Cold Breeze.png';
import image5 from '../../assets/vensym.png';
import image6 from '../../assets/sudoku.png';
import "./projects.css"

export default function Projects() {
  return (
    <>
      <h2 className="experience-title" id="projetos">Projetos</h2>
      <section className="projects">
        <div className="project-item-container">
          <ProjectItem
            image={image1}
            link={"https://juliams-raleigh-lilith.netlify.app/"}
            title={"Raleigh Lilith - Website"}
            description={"Projeto criado durante a capacitação da Voluta Soluções Digitais utilizando React JS e hospedado no Netlify."}
          />
          <ProjectItem
            image={image2}
            link={"https://juliamsousa.github.io/projeto-final-prog-web/"}
            title={"DECOM UFOP - Website"}
            description={"Projeto criado durante a disciplina de Programação Web utiliando React JS e hospedado no GitHub Pages."}
          />

        </div>

        <div className="project-item-container">
          <ProjectItem
            image={image3}
            link={"https://www.monografias.ufop.br/handle/35400000/5979"}
            title={"GoldFit Soccer - TCC"}
            description={"Desenvolvimento full stack de um sistema inteligente de identificação de talentos no futebol utilizando Django e React JS."}
          />

          <ProjectItem
            image={image4}
            link={"https://github.com/juliamsousa/heuristic-evaluation"}
            title={"ONG AOPA - Avaliação Heurísitica"}
            description={"Design de um app para uma ONG. Foram utilizadas as heurísticas de Nielsen para a realização de avaliações da interface."}
          />
        </div>

        <div className="project-item-container">
          <ProjectItem
            image={image5}
            link={"https://github.com/juliamsousa/my-vensim"}
            title={"My Vensim - Simulador"}
            description={"Construção de uma API de uma biblioteca C++ destinada ao desenvolvimento de modelos ambientais baseados na Teoria de Sistemas."}
          />

          <ProjectItem
            image={image6}
            link={"https://github.com/juliamsousa/sudoku-plus-plus/tree/main"}
            title={"Sudoku - CLI"}
            description={"Jogo de Sudoku desenvolvido em C++. Lê uma matriz inicial de Sudoku e permita ao usuário resolvê-lo por meio de linha de comando."}
          />
        </div>
      </section>
    </>
  );
}