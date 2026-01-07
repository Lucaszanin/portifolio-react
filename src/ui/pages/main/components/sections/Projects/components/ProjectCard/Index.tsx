import { CustomizeText } from '../../../../components/CustomizeText/Index'
import { CustomizeTitle } from '../../../../components/CustomizeTitle'
import * as S from './styles'

export const ProjectCard = () => {
  return (
    <S.CardContainer>
      <div>
        <img src="" alt="" />
      </div>
      <div>
        <CustomizeTitle
          text="Pokedex"
          textcolor="gray"
          align={'start'}
          weight={'bold'}
        />
        <CustomizeText />
      </div>
      <div>
        <p></p>
      </div>
      <div>
        <div></div>
        <div></div>
      </div>
    </S.CardContainer>
  )
}
