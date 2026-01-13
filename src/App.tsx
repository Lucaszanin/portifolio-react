import { ThemeProvider } from 'styled-components'
import { GlobalStyle } from './ui/styles/global'
import { defaultTheme } from './ui/styles/themes/default'

import { DefaultLayout } from './ui/layouts/DefaultLayout/DefaultLayout'
import { MainSection } from './ui/pages/main/sections/Main/MainSection'
import { AboutSection } from './ui/pages/main/sections/About/AboutSection'
import { SuitCaseSection } from './ui/pages/main/sections/SuitCase/SuitCaseSection'
import { ProjectsSection } from './ui/pages/main/sections/Projects/ProjectsSection'
import { ContactSection } from './ui/pages/main/sections/Contact/ContactSection'

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <DefaultLayout />
      <MainSection />
      <AboutSection />
      <SuitCaseSection />
      <ProjectsSection />
      <ContactSection />
      <GlobalStyle />
    </ThemeProvider>
  )
}

export default App
