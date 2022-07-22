import React from "react";
import "./experiences.css";

export default function Experiences() {
  return (
    <div className="experience">
      <h2>Experiência</h2>

      <div>
        <div className="experience-item">
          <div className="title-date">
            <h3 className="title">Programadora Trainee RPA</h3>
            <p className="date">Outubro 2021 - Maio 2022</p>
          </div>

          <h4>Compass.uol - Passo Fundo/RS</h4>
          <p className="descricao">
            Atuação como Programadora Trainee trabalhando com ferramentas RPA e
            BPMS. Atuando nas seguintes atividades:
            <ul>
              <li>Capacitações na plataforma Universidade Zeev</li>
              <li>Capacitações na plataforma Universidade Zeev</li>
              <li>Capacitações na ferramenta Softexpert Excellence Suite</li>
              <li>
                Criação, manutenção e melhorias de processos mapeados na
                ferramenta BPMS Zeev
              </li>
            </ul>
            <a href="https://go.compass.uol/rpa-br" target="blank">
              Saiba mais sobre: RPA Compass.uol
            </a>
          </p>
        </div>

        <div className="experience-item">
          <div className="title-date">
            <h3 className="title">Estagiária em Desenvolvimento RPA</h3>
            <p className="date">Junho 2021 - Setembro 2021</p>
          </div>

          <h4>Compass.uol - Passo Fundo/RS</h4>
          <p className="descricao">
            Atuação como estagiária na Trilha de Bolsa RPA em parceria com a
            Universidade Federal de Ouro Preto. Realização das seguintes
            atividades:
            <ul>
              <li>Estudo da trilha RPA na plataforma UiPath Academy</li>
              <li>
                Estudo da trilha RPA na plataforma Automation Anywhere
                University
              </li>
              <li>Estudo de trilha RPA na Alura</li>
              <li>Capacitações em Metodologias Ágeis e Scrum</li>
              <li>Criação e apresentação de projeto final de RPA</li>
            </ul>
          <a href="https://ufop.br/noticias/compasso-uol-abre-selecao-de-bolsistas-em-parceria-com-ufop" target="blank">
              Saiba mais sobre: Programa de bolsas parceria UFOP/Compass.uol
            </a>
          </p>
        </div>

        <div className="experience-item">
          <div className="title-date">
            <h3 className="title">Bolsista em Desenvolvimento Institucional</h3>
            <p className="date">Abril 2021 - Setembro 2021</p>
          </div>

          <h4>Universidade Federal de Ouro Preto - Ouro Preto/MG</h4>
          <p className="descricao">
            Atuação como bolsista de Desenvolvimento Institucional na
            Universidade Federal de Ouro Preto, com o objetivo de trabalhar na
            construção e alimentação do site do Museu da Farmácia, contribuindo
            para a ampla divulgação e promoção do acervo do Museu. Atuação das
            seguintes atividades:
            <ul>
              <li>Estudo de WordPress</li>
              <li>Estudo do plugin Tainacan</li>
              <li>Análise de viabilidade da ferramenta OpenScholar</li>
            </ul>
          </p>
        </div>

        <div className="experience-item">
          <div className="title-date">
            <h3 className="title">Estagiária em Desenvolvimento de Software</h3>
            <p className="date">Outubro 2020 - Março de 2021</p>
          </div>

          <h4>Bold Bytes - Conselheiro Lafaiete/MG</h4>
          <p className="descricao">
          Desenvolvimento Mobile no projeto Via Real Segurança, atuando nas etapas de:
            <ul>
              <li>Levantamento de requisitos</li>
              <li>Prototipação utilizando a ferramenta Figma</li>
              <li>Desenvolvimento com React Native</li>
              <li>Controle de versão com Git</li>
              <li>Testes</li>
              <li>Criação de versões de teste na Google Play Store</li>
            </ul>
            <a href="http://viarealseg.com.br/" target="blank">
              Saiba mais sobre: ViaReal Segurança
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
