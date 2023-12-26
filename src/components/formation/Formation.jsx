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
        // description="Atividades e grupos:"
        // bullets={[
        //   "Bolsista de Iniciação Tecnológica pelo CNPq no projeto GoldFit Soccer",
        //   "Voluntária na Empresa Junior Voluta Soluções Digitais",
        //   "Bolsista em Desenvolvimento Institucional para o Museu da Farmácia",
        // ]}
        knowledge="Conhecimentos:"
        knowledges={
          [
            "Lógica de Programação e Estruturas de Dados",
            "Programação Orientada a Objetos e Programação Funcional",
            "Teoria da Computação e Teoria dos Grafos",
            "Análise de Algoritmos e Complexidade",
            "Bancos de Dados"
          ]
        }
        coeficiente="Coeficiente de Rendimento: 7.8"
        />

      <Item
        title="Técnico Integrado em Eletrotécnica"
        date="Fevereiro 2015 - Dezembro 2017"
        location="Instituto Federal de Educação, Ciência e Tecnlogia - Cons. Lafaiete/MG"
        // description="Atividades e grupos:"
        // bullets={[
        //   "Voluntária no NUERGD – Núcleo de Estudos em Raça Gênero e Diversidade",
        //   "Bolsista no projeto IFMG - Música"
        // ]}
        knowledge="Conhecimentos:"
        knowledges={
          [
            "Lógica de Programação",
            "Eletrônica, Eletricidade e Mecânica",
            "Segurança do Trabalho",
            "Automação",
            "Instalações Elétricas"
          ]
        }
        coeficiente="Coeficiente de Rendimento: 82.8"
        />
      </div>
    </section>
  );
}
