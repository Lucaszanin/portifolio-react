import { ThemeProvider } from 'styled-components'
import { GlobalStyle } from './ui/styles/global'
import { defaultTheme } from './ui/styles/themes/default'

import { DefaultLayout } from './ui/layouts/DefaultLayout/Index'
import { AboutSection } from './ui/pages/main/components/sections/About/Index'
import { MainSection } from './ui/pages/main/components/sections/Main/MainSection'
import { SuitCaseSection } from './ui/pages/main/components/sections/SuitCase/Index'

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
