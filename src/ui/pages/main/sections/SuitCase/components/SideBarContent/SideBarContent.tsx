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
          <S.SpaceText>
            {content?.paragraphs?.map((p) => (
              <CustomizeText text={p.text} key={p.id} />
            ))}
          </S.SpaceText>
        </S.WrapperContent>
      )}
    </S.Container>
  )
}
