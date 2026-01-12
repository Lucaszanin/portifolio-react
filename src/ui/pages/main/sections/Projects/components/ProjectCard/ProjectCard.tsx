import * as S from './ProjectCard.styles'
import * as T from './ProjectCard.types'

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
        <div style={{ width: 'fit-content' }}>
          <S.Title>{cardContent.title}</S.Title>
          <S.Divider />
          <S.DescriptionText>{cardContent.description}</S.DescriptionText>
        </div>
        <S.TecnologiesWrapper>
          {cardContent?.tecnologies.map((text) => (
            <S.TecnologiesText key={text}>{text}</S.TecnologiesText>
          ))}
        </S.TecnologiesWrapper>
      </S.CardLink>
    </S.CardContainer>
  )
}
