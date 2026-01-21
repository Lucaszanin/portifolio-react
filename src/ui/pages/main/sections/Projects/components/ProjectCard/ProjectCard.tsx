import * as S from './ProjectCard.styles'
import type * as T from './ProjectCard.types'

export const ProjectCard = ({ cardContent }: T.ProjectCardProps) => {
  return (
    <S.CardContainer>
      <S.CardLink
        href={cardContent.redirectLink}
        target="blank"
        rel="noreferrer "
      >
        <S.ImageWrapper>
          <img src={cardContent.image} alt="" />
        </S.ImageWrapper>
        <S.WrapperContent>
          <S.Title>{cardContent.title}</S.Title>
          <S.Divider />
          <S.DescriptionText>{cardContent.description}</S.DescriptionText>
        </S.WrapperContent>
        <S.TecnologiesWrapper>
          {cardContent?.tecnologies.map((text) => (
            <S.TecnologiesText key={text}>{text}</S.TecnologiesText>
          ))}
        </S.TecnologiesWrapper>
      </S.CardLink>
    </S.CardContainer>
  )
}
