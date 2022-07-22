import React from "react";
import "./voluntary.css";

export default function Voluntary() {
  return (
    <div className="experience">
      <h2>Voluntariado</h2>

      <div>
        <div className="experience-item">
          <div className="title-date">
            <h3 className="title">Bacharelado em Ciência da Computação</h3>
            <p className="date">Março 2018 - Agosto 2023</p>
          </div>

          <h4>Universidade Federal de Ouro Preto - Ouro Preto/MG</h4>
          <p className="descricao">
            <b>Atividades e grupos: </b> Voluntária na Empresa Junior Voluta Soluções Digitais e Bolsista em Desenvolvimento Institucional para o Museu da Farmácia.
          <br></br>
          <br></br>
          <b>Conhecimentos:  </b>          
          <ul>
              <li>Lógica de Programação</li>
              <li>Estruturas de Dados</li>
              <li>Programação Orientada a Objetos</li>
              <li>Teoria da Computação</li>
              <li>Analise de Algoritmos e Complexidade</li>
            </ul>
          <i>Coeficiente de Rendimento: 7.8</i>
          </p>
        </div>

        <div className="experience-item">
          <div className="title-date">
            <h3 className="title">Técnico Integrado em Eletrotécnica</h3>
            <p className="date">Fevereiro 2015 - Dezembro 2017</p>
          </div>

          <h4>Instituto Federal de Educação, Ciência e Tecnlogia - Cons. Lafaiete/MG</h4>
          <p className="descricao">
            <b>Atividades e grupos: </b> Voluntária no NUERGD – Núcleo de Estudos em Raça Gênero e Diversidade e Bolsista no projeto IFMG - Música.
          <br></br>
          <br></br>
          <b>Conhecimentos:  </b>          
          <ul>
              <li>Lógica de Programação</li>
              <li>Eletrônica</li>
              <li>Eletricidade</li>
              <li>Mecânica</li>
              <li>Segurança do Trabalho</li>
              <li>Automação</li>
              <li>Instalações Elétricas</li>
            </ul>
          <i>Coeficiente de Rendimento: 82.8</i>
          </p>
        </div>
      </div>
    </div>
  );
}
