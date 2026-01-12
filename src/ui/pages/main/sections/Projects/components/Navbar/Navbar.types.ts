export type NavbarProps = {
  items: {
    id: string
    label: string
  }[]
  onChangeCategoria: (categoria: string) => void
  activeCategory: string
}
