import { ThemeProvider } from 'styled-components'
import { GlobalStyle } from './ui/styles/global'
import { defaultTheme } from './ui/styles/themes/default'

import { DefaultLayout } from './ui/layouts/DefaultLayout/DefaultLayout'
import { MainSection } from './ui/pages/main/sections/Main/MainSection'
import { AboutSection } from './ui/pages/main/sections/About/AboutSection'
import { SuitCaseSection } from './ui/pages/main/sections/SuitCase/SuitCaseSection'
import { ContainerLayout } from './ui/pages/main/components/ContainerLayout/ContainerLayout'

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <DefaultLayout />
      <ContainerLayout>
        <MainSection />
        <AboutSection />
        <SuitCaseSection />
      </ContainerLayout>
      <GlobalStyle />
    </ThemeProvider>
  )
}

export default App
