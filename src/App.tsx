import { ThemeProvider } from 'styled-components'
import { defaultTheme } from './styles/themes/default'
import { GlobalStyle } from './styles/global'
import { DefaultLayout } from './layouts/DefaultLayout/Index'
import { MainSection } from './sections/Main/MainSection'
import { AboutSection } from './sections/About/Index'
import { SuitCaseSection } from './sections/SuitCase/Index'

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <DefaultLayout />
      <MainSection />
      <AboutSection />
      <SuitCaseSection />
      <GlobalStyle />
    </ThemeProvider>
  )
}

export default App
