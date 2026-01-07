import type { CustomizeTitleProps } from '../../components/CustomizeTitle/CustomizeTitle.types'

export const firstParagraph = `Olá! Sou Lucas Zanin, Desenvolvedor Frontend Pleno, com sólida experiência no desenvolvimento de aplicações web modernas, performáticas e escaláveis.
Atuei no Grupo Boticário em um projeto robusto e de alta criticidade, responsável pelo abastecimento de todas as franquias do grupo, contribuindo diretamente para a sustentação e evolução de uma solução de grande escala.`

export const secondParagraph = `Também atuei na M3, desenvolvendo projetos de e-commerce na plataforma VTEX, com atuação em projetos internacionais para Colômbia e Argentina, trabalhando em ambientes multiculturais e alinhados a padrões globais de qualidade. Essas experiências fortaleceram minha comunicação profissional, incluindo espanhol em nível intermediário.
`
export const thirtParagraph = `Tenho vivência em todo o ciclo de desenvolvimento front-end, integração com APIs, componentização, responsividade, performance e boas práticas, sempre com foco em código limpo, escalável e entrega de valor ao negócio.
Sou movido por desafios, responsabilidade técnica e aprendizado contínuo.
`
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

export const principalTitleProps: CustomizeTitleProps = {
  text: 'Lucas Zanin',
  align: 'start',
  textcolor: 'red',
  weight: 'bold',
  animation: true,
  margin: '12px',
}
