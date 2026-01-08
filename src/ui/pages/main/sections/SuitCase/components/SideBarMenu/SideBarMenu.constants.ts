export const paragraph1 = `No Grupo Boticário, atuei no desenvolvimento do sistema MAR (Modelo de Abastecimento de Rede), uma plataforma utilizada por todo o grupo para o abastecimento das franquias.

Trabalhei principalmente com React, TypeScript e arquitetura de micro frontends, utilizando o Design System do grupo para criação e manutenção de interfaces consistentes e escaláveis. No dia a dia, utilizei ferramentas e bibliotecas como Jest, Axios, React Query, Custom Hooks, além de New Relic para monitoramento de performance e estabilidade da aplicação. Também participei ativamente de revisões de Pull Requests, garantindo qualidade e boas práticas no código.
`

export const paragraph2 = `Tive a oportunidade de contribuir no BFF (Backend for Frontend), desenvolvendo e ajustando endpoints em Node.js, o que me proporcionou uma visão mais completa da aplicação e da integração entre front-end e back-end.

Apoiei o time em um refactor geral do projeto, com foco na melhoria da arquitetura, padronização de estilos e implementação de boas práticas de reutilização de código. Em uma das squads, fui responsável por refatorar todas as páginas, aplicando conceitos de Clean Code e elevando a manutenibilidade do projeto.`

export const paragraph3 = `Atuei em duas squads distintas: uma focada na gestão e recebimento de pedidos e outra no acompanhamento dos pedidos, trabalhando com feature toggles para controle e liberação segura de funcionalidades.

Além do desenvolvimento técnico, fui mentor no programa Desenvolve, iniciativa do Grupo Boticário voltada à formação e inclusão de grupos diversos na área de tecnologia.

Sempre tive forte preocupação com a experiência do usuário, propondo e implementando melhorias contínuas na interface e usabilidade, como a reorganização de menus laterais em ordem alfabética, entre outros ajustes que impactaram positivamente a navegação e o uso do sistema.`

export const paragraphOneM3 = `Desenvolvimento e implantação de E-comerce com a plataforma VTEX, utlizando React, Typescript e SASS.`

export const paragrapTwoM3 = `Também tabalhava com evolução de funcionalidades de projetos LATAM, principalmente com lojas da Argentina, Colombia e Chile.`

export const paragrapThreeM3 = `Realizava o acompanhamento dos projetos do inicio ao deploy, para armazenamento de código era utilizada a ferramente BitBucket.`

export const experiences = [
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
    menuLabel: 'M3 Desenvolvimento',
    title: 'Desenvolvedor Front End',
    company: 'M3 Desenvolvimento',
    period: 'setembro 2023 até abril 2023',
    paragraphs: [
      { id: 'p4', text: paragrapTwoM3 },
      { id: 'p5', text: paragrapThreeM3 },
    ],
  },
]
