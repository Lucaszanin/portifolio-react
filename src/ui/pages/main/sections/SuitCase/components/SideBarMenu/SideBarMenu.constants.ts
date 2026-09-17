export const paragraph1 = `No Grupo Boticário, atuei no desenvolvimento do sistema MAR (Modelo de Abastecimento de Rede), uma plataforma utilizada por todo o grupo para o abastecimento das franquias.

Trabalhei principalmente com React, TypeScript e arquitetura de micro frontends, utilizando o Design System do grupo para criação e manutenção de interfaces consistentes e escaláveis. No dia a dia, utilizei ferramentas e bibliotecas como Jest, Axios, React Query, Custom Hooks, além de New Relic para monitoramento de performance e estabilidade da aplicação. Também participei ativamente de revisões de Pull Requests, garantindo qualidade e boas práticas no código.
`

export const paragraph2 = `Tive a oportunidade de contribuir no BFF (Backend for Frontend), desenvolvendo e ajustando endpoints em Node.js, o que me proporcionou uma visão mais completa da aplicação e da integração entre front-end e back-end.

Apoiei o time em um refactor geral do projeto, com foco na melhoria da arquitetura, padronização de estilos e implementação de boas práticas de reutilização de código. Em uma das squads, fui responsável por refatorar todas as páginas, aplicando conceitos de Clean Code e elevando a manutenibilidade do projeto.`

export const paragraph3 = `Atuei em duas squads distintas: uma focada na gestão e recebimento de pedidos e outra no acompanhamento dos pedidos, trabalhando com feature toggles para controle e liberação segura de funcionalidades.

Além do desenvolvimento técnico, fui mentor no programa Desenvolve, iniciativa do Grupo Boticário voltada à formação e inclusão de grupos diversos na área de tecnologia.

Sempre tive forte preocupação com a experiência do usuário, propondo e implementando melhorias contínuas na interface e usabilidade, como a reorganização de menus laterais em ordem alfabética, entre outros ajustes que impactaram positivamente a navegação e o uso do sistema.`

export const paragrapTwoM3 = `Na M3 E-commerce, atuei em uma squad LATAM, trabalhando em um ambiente multicultural com PMs da Colômbia e da Argentina, o que me levou a aprender espanhol para garantir uma comunicação eficiente no dia a dia do time.

Atuei simultaneamente em três lojas, sendo responsável pela implementação e manutenção de componentes utilizando React, TypeScript, Sass, Custom Hooks e, em alguns contextos, jQuery, dentro da plataforma VTEX, com foco em VTEX IO. Durante esse período, tive a oportunidade de implantar três lojas do zero, participando de todas as etapas do desenvolvimento, o que proporcionou um período de intenso aprendizado técnico.`

export const paragrapThreeM3 = `Os principais desafios envolveram a rápida adaptação à plataforma VTEX e a comunicação em um time internacional. Após alguns meses, além de dominar melhor as ferramentas, tornei-me referência para apoiar novos integrantes, especialmente na comunicação com os PMs e no entendimento dos fluxos de trabalho da squad.

Também adquiri conhecimentos em GraphQL, aplicados na integração e consumo de dados, além de experiência com o painel administrativo do VTEX IO, ampliando minha visão sobre e-commerce, arquitetura da plataforma e gestão de lojas.`

export const paragraphOneShipay = `Na Shipay, atuei no desenvolvimento e evolução do Painel administrativo da empresa, participando ativamente do processo de migração de uma arquitetura monolítica para Micro Frontends (MFE). Esse processo exigiu planejamento cuidadoso para garantir a continuidade das funcionalidades existentes enquanto novas partes da aplicação eram desacopladas e modularizadas, contribuindo para maior escalabilidade e autonomia entre os times.`

export const paragraphTwoShipay = `Também fui responsável pela construção de um novo painel de acesso a clientes, atuando desde as definições iniciais de arquitetura até a implementação das funcionalidades, sempre com foco em performance, usabilidade e consistência visual.

Um dos principais desafios do período foi a criação da arquitetura inicial do Design System da empresa, o que envolveu decisões técnicas relevantes sobre padronização de componentes, reutilização de código e definição de boas práticas para os times de frontend. Esse trabalho ampliou minha visão sobre arquitetura de sistemas front-end, escalabilidade de produtos e o impacto de um Design System bem estruturado na velocidade e qualidade de entrega de um time.`

export const experiences = [
    {
    id: 'shipay',
    menuLabel: 'Shipay Tecnologia',
    title: 'Desenvolvedor Front End',
    company: 'Shipay Tecnologia',
    period: 'abril 2026 até setembro 2026',
    paragraphs: [
      { id: 'p6', text: paragraphOneShipay },
      { id: 'p7', text: paragraphTwoShipay },
    ],
  },
  {
    id: 'boticario',
    menuLabel: 'Grupo Boticário',
    title: 'Desenvolvedor Front End Pleno',
    company: 'Grupo Boticário',
    period: 'abril 2023 até agosto 2025',
    paragraphs: [
      { id: 'p1', text: paragraph1 },
      { id: 'p2', text: paragraph2 },
      { id: 'p3', text: paragraph3 },
    ],
  },
  {
    id: 'm3',
    menuLabel: 'M3 E-Commerce',
    title: 'Desenvolvedor Front End',
    company: 'M3 E-Commerce',
    period: 'setembro 2023 até abril 2023',
    paragraphs: [
      { id: 'p4', text: paragrapTwoM3 },
      { id: 'p5', text: paragrapThreeM3 },
    ],
  },

]