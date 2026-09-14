import type { CustomizeTitleProps } from '../../components/CustomizeTitle/CustomizeTitle.types'

export const firstParagraph = `Sou Desenvolvedor Front-End com 4 anos de experiência na construção de aplicações web modernas, performáticas e escaláveis, com forte atuação em React.js e TypeScript.`

export const secondParagraph = `Ao longo da minha trajetória, atuei em projetos de grande escala — como um sistema crítico de abastecimento utilizado nacionalmente pelo Grupo Boticário — e em projetos internacionais de e-commerce na plataforma VTEX, para os mercados da Colômbia e Argentina, o que fortaleceu minha comunicação profissional, incluindo espanhol em nível intermediário.
`
export const thirtParagraph = `Tenho experiência prática em Micro Frontends, Design Systems, componentização e migração de arquiteturas legadas, sempre com foco em código limpo, reutilização e entrega de valor real ao negócio.
`
export const fourParagraph = `Sou movido por desafios técnicos, responsabilidade e aprendizado contínuo.`

export const commonTitleProps: Omit<CustomizeTitleProps, 'text'> = {
  align: 'start',
  textcolor: 'gray',
  weight: 'regular',
}

export const firstTitleProps: CustomizeTitleProps = {
  text: 'Olá',
  ...commonTitleProps,
}

export const secondTitleprops: CustomizeTitleProps = {
  text: 'Eu sou',
  ...commonTitleProps,
}

export const thirthTitleprops: CustomizeTitleProps = {
  text: 'Desenvolvedor Front-End Pleno',
  ...commonTitleProps,
  fontSize:'2.5rem',
}

export const fourTitleprops: CustomizeTitleProps = {
  text: 'Transformo ideias em interfaces escaláveis com React, TypeScript, Micro Frontends e Design Systems.',
  ...commonTitleProps,
  fontSize:'1.5rem',
}

export const principalTitleProps: CustomizeTitleProps = {
  text: 'Lucas Zanin',
  align: 'start',
  textcolor: 'red',
  weight: 'bold',
  animation: true,
  margin: '12px',
}
