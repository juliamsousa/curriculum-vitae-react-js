import React from "react";
import "../experiences/experiences.css";
import Item from "../experiences/item/Item";

export default function Voluntary() {
  return (
    <section className="experience">
      <div>
        <h2 className="experience-title" id="unformatted-title">Atividades Extracurriculares</h2>
        <Item
          title="Bolsista de Iniciação Tecnológica"
          date="Setembro 2022 - Agosto 2023"
          location="Conselho Nacional de Desenvolvimento Científico e Tecnológico - CNPq"
          description="Desde 2015, nosso grupo de pesquisa realiza o mapeamento multidimensional e longitudinal de jovens futebolistas. Com os dados coletados é aperfeiçoado um modelo de identificação de talentos para o futebol. A partir de processos analíticos e heurísticos construímos uma equação matemática que estima o potencial do jovem futebolista para o alto rendimento. Atuação como bolsista no projeto GoldFit Soccer: Sistema Especialista de Identificação de Talentos no Futebol:"
          linkURL="https://www.monografias.ufop.br/handle/35400000/5979"
          linkDescription="Saiba mais sobre: GoldFit Soccer"
          // bullets={[
          //   "Desenho e modelagem Conceitual e Relacional do Banco de Dados",
          //   "Desenvolvimento de Banco de Dados em Python utilizando o framework Django",
          //   "Desenvolvimento de Dashboard utilizando React.js.",
          // ]}
        />

        <Item
          title="Voluta Soluções Digitais - Empresa Júnior"
          date="Julho 2020 - Dezembro 2021"
          location="Universidade Federal de Ouro Preto - Ouro Preto/MG"
          description="A Voluta Soluções Digitais deseja proporcionar oportunidades de acesso e aprimoramento à tecnologia para as micro e pequenas empresas, promovendo aprendizado e visão empreendedora para os alunos que nela colaboram. Atuação como assessora na diretoria de Presidência, participando das atividades de administração financeira, de contratos e documentação interna."
          linkURL="https://www.voluta.ufop.br/"
          linkDescription="Saiba mais sobre: Voluta Soluções Digiais"
        />

        <Item
          title="Bolsista em Desenvolvimento Institucional"
          date="Abril 2021 - Setembro 2021"
          location="Universidade Federal de Ouro Preto - Ouro Preto/MG"
          description="Atuação como bolsista de Desenvolvimento Institucional na
          Universidade Federal de Ouro Preto, com o objetivo de trabalhar na
          construção e alimentação do site do Museu da Farmácia, contribuindo
          para a ampla divulgação e promoção do acervo do Museu."
        />

        <Item
          title="NUERGD – Núcleo de Estudos em Raça, Gênero e Diversidade"
          date="Maio 2017 - Dez. 2017"
          location="Instituto Federal de Educação, Ciência e Tecnlogia - Cons. Lafaiete/MG"
          description=" O NUERGD – Núcleo de Estudos em Raça, Gênero e Diversidade - foi criado em 2017 e coordenado pela Profª. Marcela dos Santos Lima com o intuito de elucidar questões sobre a pluralidade de raça, gênero e sexualidade, criando um espaço seguro para os alunos e contribuindo para sua formação humana. Os encontros eram periódicos e representantes de cada turma ficavam responsáveis por apresentar um tema."
          linkURL="https://www.ifmg.edu.br/conselheirolafaiete/noticias/noticias-2016/campus-avancado-conselheiro-lafaiete-cria-o-nuergd-2013-nucleo-de-estudos-em-raca-genero-e-diversidade"
          linkDescription="Saiba mais sobre: NUERGD - IFMG"
        />
      </div>
    </section>
  );
}
