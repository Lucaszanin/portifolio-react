export type CardProps = {
  image: string
  title: string
  description: string
  tecnologies: string[]
  categories: string[]
  redirectLink: string
}

export type ProjectCardProps = {
  cardContent: CardProps
}
