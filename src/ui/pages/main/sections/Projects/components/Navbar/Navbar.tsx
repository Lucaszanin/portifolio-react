import { CommonButton } from '../../../../../../components/CommonButton/CommonButton'
import * as T from './Navbar.types'

export const Navbar = ({
  items,
  onChangeCategoria,
  activeCategory,
}: T.NavbarProps) => {
  return (
    <nav style={{ width: '100%' }}>
      <ul style={{ display: 'flex', gap: '16px' }}>
        {items?.map((item, index) => (
          <li key={`${item.id}-${index}`}>
            <CommonButton
              handleClick={() => onChangeCategoria(item.id)}
              isActive={item.id === activeCategory}
              labelText={item.label}
            />
          </li>
        ))}
      </ul>
    </nav>
  )
}
