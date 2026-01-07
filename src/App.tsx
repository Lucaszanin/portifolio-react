import { ThemeProvider } from 'styled-components'
import { GlobalStyle } from './ui/styles/global'
import { defaultTheme } from './ui/styles/themes/default'

import { DefaultLayout } from './ui/layouts/DefaultLayout/DefaultLayout'
import { MainSection } from './ui/pages/main/sections/Main/MainSection'
import { AboutSection } from './ui/pages/main/sections/About/AboutSection'
import { SuitCaseSection } from './ui/pages/main/sections/SuitCase/SuitCaseSection'

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
