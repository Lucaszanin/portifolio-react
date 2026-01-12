import { CardProps } from './components/ProjectCard/ProjectCard.types'

export const NavItems = [
  { id: 'Internet', label: 'Todos' },
  { id: 'JS', label: 'Javascript' },
  { id: 'React', label: 'React' },
  { id: 'Context', label: 'Context API' },
]

export const RenderItems: CardProps[] = [
  {
    image: 'https://i.ibb.co/rf2KVFpM/portifolio.png',
    title: 'Portifólio',
    description: `Portfólio pessoal desenvolvido com HTML, CSS e JavaScript, com foco na apresentação de projetos e informações profissionais.`,
    tecnologies: ['HTML', 'CSS', 'Javascript'],
    categories: ['Internet', 'JS'],
    redirectLink: 'https://my-portifolio-one.vercel.app/',
  },
  {
    image: 'https://i.ibb.co/tTX0m2yD/coffe.png',
    title: 'Coffe Delivery',
    description: `Projeto de aplicação de delivery desenvolvido com React e TypeScript, utilizando Context API para gerenciamento de estado, durante o curso Ignite da Rocketseat.`,
    tecnologies: ['React', 'Typescript', 'Context API'],
    categories: ['Internet', 'React', 'Context'],
    redirectLink: 'https://coffee-delivery-kohl-nine.vercel.app/',
  },
  {
    image: 'https://i.ibb.co/PZfsvkyf/instadog.png',
    title: 'Instadog',
    description: `Instadog: aplicação em React para compartilhamento de fotos de cachorros, com autenticação e interação entre usuários.`,
    tecnologies: ['React', 'Typescript', 'Context API'],
    categories: ['Internet', 'React', 'Context'],
    redirectLink: 'https://insta-dog-one.vercel.app/',
  },
  {
    image: 'https://i.ibb.co/6RyVRSMr/Pokedex.png',
    title: 'Pokedex com React e PokeAPI',
    description: `Projeto desenvolvido em React, utilizando Styled Components, React Router DOM, Context API e consumo de uma API REST para criação de uma Pokédex.`,
    tecnologies: ['React', 'Styled Components', 'Context API'],
    categories: ['React', 'Internet', 'Context'],
    redirectLink: 'https://pokedex-react-pi-virid.vercel.app/',
  },
  {
    image: 'https://i.ibb.co/VWR3Mx4k/github.png',
    title: 'Consumindo API do Github',
    description: `Projeto desenvolvido em JavaScript puro, responsável pelo consumo da API pública do GitHub para realizar a busca e exibição de usuários.`,
    tecnologies: ['Javascript', 'CSS', 'HTML'],
    categories: ['Internet', 'JS'],
    redirectLink: 'https://lucaszanin.github.io/desafio-js-avancado-devquest/',
  },
  {
    image: 'https://i.ibb.co/ycv6RcrF/doctorcare.png',
    title: 'Doctor Care',
    description: `Projeto desenvolvido durante a NLW Return 2022 da Rocketseat (trilha Discovery), utilizando HTML, CSS e JavaScript, consistindo em uma landing page para consulta médica.`,
    tecnologies: ['HTML', 'CSS', 'Javascript'],
    categories: ['Internet', 'JS'],
    redirectLink: 'https://lucaszanin.github.io/doctorcare-nlw-2022/',
  },

  {
    image: 'https://i.ibb.co/7Jq9Fk24/ignitetimer.png',
    title: 'Ignite Timer',
    description: `Aplicação de timer baseada no método Pomodoro, desenvolvida com React e TypeScript, utilizando Context API para gerenciamento de estado, durante o curso Ignite da Rocketseat.`,
    tecnologies: ['React', 'Typescript', 'Context API'],
    categories: ['Internet', 'React', 'Context'],
    redirectLink: 'https://ignite-timer-peach-three.vercel.app/',
  },

  {
    image: 'https://i.ibb.co/wFTnJm7y/todo-list.png',
    title: 'Todo List',
    description: `Aplicação de todo list desenvolvida com React, com funcionalidades de criação, edição, exclusão e exibição do status das tarefas.`,
    tecnologies: ['React', 'Typescript'],
    categories: ['Internet', 'React'],
    redirectLink: 'https://todo-list-gamma-teal.vercel.app/',
  },

  {
    image: 'https://i.ibb.co/whmd5jjk/Animais.png',
    title: 'Animais Fantásticos',
    description: `Projeto Animais Fantásticos desenvolvido com HTML, CSS e JavaScript, com foco em animações em JavaScript e manipulação do DOM.`,
    tecnologies: ['HTML', 'CSS', 'Javascript'],
    categories: ['Internet', 'JS'],
    redirectLink: 'https://lucaszanin.github.io/animais-fantasticos/',
  },
]
