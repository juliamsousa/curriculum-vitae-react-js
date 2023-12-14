import React from "react";
import "./voluntary.css";

export default function Voluntary() {
  return (
    <div className="experience">
      <h2>Voluntariado</h2>

      <div>
        <div className="experience-item">
          <div className="title-date">
            <h3 className="title">Voluta Soluções Digitais - Empresa Júnior</h3>
            <p className="date">Julho 2020 - Dezembro 2021</p>
          </div>

          <h4>Universidade Federal de Ouro Preto (UFOP) - Ouro Preto/MG
          <br/>
          Ciência e Tecnologia
          </h4>
          <p className="descricao">
          Atuação como assessora na diretoria de Presidência, participando das seguintes áreas:
          <ul>
              <li>Documentação interna como estatuto, regimento interno, atas e contratos de prestação de serviços</li>
              <li>Planejamento, controle financeiro e prestação de contas como livros diários e fluxos de caixa</li>
              <li>Processo Seletivo de novos membros</li>
              <li>Parcerias com empresas Sêniores e Juniores</li>
              <li>Relacionamento com a IES e professor orientador</li>
              <li>Capacitações em Hard e Soft Skills</li>
              <li>Desenvolvimento de projetos Front End com React</li>
            </ul>
          </p>
        </div>

        <div className="experience-item">
          <div className="title-date">
            <h3 className="title">NUERGD – Núcleo de Estudos em Raça, 
            <br/>Gênero e Diversidade</h3>
            <p className="date">Fevereiro 2015 - Dezembro 2017</p>
          </div>

          <h4>Instituto Federal de Educação, Ciência e Tecnlogia - Cons. Lafaiete/MG
            <br/>
            Direitos civis e ações sociais
          </h4>
          <p className="descricao">
          O NUERGD – Núcleo de Estudos em Raça, Gênero e Diversidade - foi criado em 2017 e coordenado pela Profª.
           Marcela dos Santos Lima com o intuito de elucidar questões sobre a pluralidade de raça, gênero e 
           sexualidade, criando um espaço seguro para os alunos e contribuindo para sua formação humana. 
           <br/><br/> 

           Os encontros eram periódicos e representantes de cada turma ficavam responsáveis por apresentar um tema.
           <br/><br/> 
           
           <a href="https://www.ifmg.edu.br/conselheirolafaiete/noticias/noticias-2016/campus-avancado-conselheiro-lafaiete-cria-o-nuergd-2013-nucleo-de-estudos-em-raca-genero-e-diversidade" target="blank">
              Saiba mais sobre: NUERGD - IFMG
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
