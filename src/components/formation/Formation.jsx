import React from "react";
import "../experiences/experiences.css";
import Item from "../experiences/item/Item";

export default function Formation() {
  return (
    <section className="experience" id="experience-section">
      <div>
        <h2 className="experience-title" id="unformatted-title">Formação Acadêmica</h2>
        <Item
          title="Bacharelado em Ciência da Computação"
          date="Março 2018 - Agosto 2023"
          location="Universidade Federal de Ouro Preto - Ouro Preto/MG"
          description="Conhecimentos: Lógica de Programação, Estruturas de Dados,
        Paradigma Orientado a Objetos, Teoria da Computação e dos Grafos,
        Análise de Algoritmos e Complexidade e
        Bancos de Dados."
          coeficiente="Coeficiente de Rendimento: 7.8"
        />

        <Item
          title="Técnico Integrado em Eletrotécnica"
          date="Fevereiro 2015 - Dezembro 2017"
          location="Instituto Federal de Educação, Ciência e Tecnlogia - Cons. Lafaiete/MG"
          description="Conhecimentos: Lógica de Programação, Eletrônica, Eletricidade e Mecânica, Segurança do Trabalho, Automação e Instalações Elétricas."
          coeficiente="Coeficiente de Rendimento: 82.8"
        />
      </div>
    </section>
  );
}
