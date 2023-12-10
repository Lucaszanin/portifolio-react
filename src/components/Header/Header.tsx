import { CustomizeMiniButton } from '../CustomizeMiniButton/CustomizeMiniButton'
import { SVG } from '../SVG/Index'
import * as S from './styles'

export const Header = () =>{
  return (
    <S.HeaderContainer>
        <div>
        <SVG name='logo' />
        </div>
        <nav>
            <ul>
                <a href=""><li><SVG name='home-icon' /></li></a>
                <a href=""><li><SVG name='skills-icon' /></li></a>
                <a href=""><li><SVG name='suitcase-icon' /></li></a>
                <a href=""><li><SVG name='books-icon' /></li></a>
            </ul>
        </nav>
        <div>
            <CustomizeMiniButton text='Resumo'/>
        </div>
    </S.HeaderContainer>
  )
}

