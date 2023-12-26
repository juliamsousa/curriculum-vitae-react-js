import React from "react";
import "./experiences.css";
import Item from "./item/Item";

export default function Experiences() {
  return (
      <section className="experience">
        <div>
        <h2 className="experience-title">Experiência Profissional</h2>
        <Item
            title="Desenvolvedora RPA Júnior"
            date="Agosto 2023 - Atualmente"
            location="Bellinati Perez - Curitiba/PR"
            description="Atuação como Desenvolvimento RPA com foco na automação de processos jurídicos e backoffice da empresa. Responsável pelo desenvolvimento, sustentação e documentação de automações. Atuando nas seguintes atividades:"
            bullets={[
              "Desenvolvimento RPA com IBM RPA",
              "Desenvolvimento de documentações PDD e SDD",
              "Implantação e suporte de automações"
            ]}
            linkURL="https://www.bellinatiperez.com.br/"
            linkDescription="Saiba mais sobre: Bellinati Perez"
          />

          <Item
            title="Desenvolvedora Trainee RPA"
            date="Outubro 2021 - Maio 2022"
            location="Compass.uol - Passo Fundo/RS"
            description="Atuação como Programadora Trainee trabalhando com ferramentas RPA e
          BPMS. Atuando nas seguintes atividades:"
            bullets={[
              "Capacitações na plataforma Universidade Zeev",
              "Capacitações na ferramenta Softexpert Excellence Suite",
              "Criação, manutenção e melhorias de processos mapeados na ferramenta BPMS Zeev"
            ]}
            linkURL="https://go.compass.uol/hyperautomation-rpa-pt"
            linkDescription="Saiba mais sobre: RPA Compass.uol"
          />

          <Item
            title="Estagiária em Desenvolvimento RPA"
            date="Junho 2021 - Setembro 2021"
            location="Compass.uol - Passo Fundo/RS"
            description=" Atuação como estagiária na Trilha de Bolsa RPA em parceria com a
            Universidade Federal de Ouro Preto. Realização das seguintes
            atividades:"
            bullets={[
              "Estudo da trilha RPA nas plataformas UiPath Academy, Automation Anywhere University e Alura",
              "Capacitações em: Metodologias Ágeis, Python, JavaScript, Controle de Versão e Git",
              "Criação e apresentação de projeto final de RPA"
            ]}
            linkURL="https://ufop.br/noticias/compasso-uol-abre-selecao-de-bolsistas-em-parceria-com-ufop"
            linkDescription="Saiba mais sobre: Programa de bolsas parceria UFOP/Compass.uol"
          />

          <Item
            title="Estagiária em Desenvolvimento de Software"
            date="Outubro 2020 - Março de 2021"
            location="Bold Bytes - Conselheiro Lafaiete/MG"
            description=" Desenvolvimento Mobile no projeto Via Real Segurança, atuando nas etapas de:"
            bullets={[
              "Desenvolvimento mobile com React Native, Typescrypt e Styled-Components",
              "Levantamento de requisitos e funcionalidades da aplicação",
              "Desenvolvimento do protótipo utilizando a ferramenta Figma",
              "Controle de versão com Git",
              "Criação de versões de teste na Google Play Store"
            ]}
            linkURL="http://viarealseg.com.br/"
            linkDescription="Saiba mais sobre: ViaReal Segurança"
          />
        </div>
      </section>
  );
}
