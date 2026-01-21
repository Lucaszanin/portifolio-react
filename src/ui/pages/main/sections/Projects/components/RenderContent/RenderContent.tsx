import { ProjectCard } from '../ProjectCard/ProjectCard'
import type * as T from './RenderContent.types'
import * as S from './RenderContent.styles'

export const RenderContent = ({ content }: T.RenderContentProps) => (
  <>
    {content?.map((item, index) => (
      <S.RenderContainer key={`${item.categories}-${index}`}>
        <ProjectCard cardContent={item} />
      </S.RenderContainer>
    ))}
  </>
)
