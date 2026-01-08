import * as S from './SideBarContent.styles'
import { CustomizeText } from '../../../../components/CustomizeText/CustomizeText'
import * as T from './SideBarContent.types'

export const SideBarContent = ({ content }: T.SideBarMenuProps) => {
  return (
    <S.Container>
      {content && (
        <S.WrapperContent>
          <S.WrapperTitle>
            <S.WorkTitle>{content.title}</S.WorkTitle>
            <S.EvidenceText>{content.company}</S.EvidenceText>
            <S.WorkSubTitle>{content.period}</S.WorkSubTitle>
          </S.WrapperTitle>
          <S.TextContainer>
            {content?.paragraphs?.map((p) => (
              <S.SpaceText key={p.id}>
                <CustomizeText text={p.text} />
              </S.SpaceText>
            ))}
          </S.TextContainer>
        </S.WrapperContent>
      )}
    </S.Container>
  )
}
