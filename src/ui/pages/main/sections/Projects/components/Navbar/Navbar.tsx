import { CommonButton } from '../../../../../../components/CommonButton/CommonButton'
import * as T from './Navbar.types'
import * as S from './Navbar.styles'

export const Navbar = ({
  items,
  onChangeCategoria,
  activeCategory,
}: T.NavbarProps) => {
  return (
    <S.NavBar>
      <S.MenuList>
        {items?.map((item, index) => (
          <S.ListItem key={`${item.id}-${index}`}>
            <CommonButton
              handleClick={() => onChangeCategoria(item.id)}
              isActive={item.id === activeCategory}
              labelText={item.label}
            />
          </S.ListItem>
        ))}
      </S.MenuList>
    </S.NavBar>
  )
}
