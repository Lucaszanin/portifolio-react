import { Header } from '../../components/Header/Header'
import { AboutSection } from '../../sections/About/Index'
import { MainSection } from '../../sections/Main/MainSection'
import { LayoutContainer } from './styles'

export const DefaultLayout = () => {
  return (
    <LayoutContainer>
      <Header />
      <MainSection/>
      <AboutSection/>
    </LayoutContainer>
  )
}
