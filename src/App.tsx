import { ThemeProvider } from "styled-components";
import { defaultTheme } from "./styles/themes/default";
import { GlobalStyle } from "./styles/global";
import { DefaultLayout } from "./layouts/DefaultLayout/Index";

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <DefaultLayout/>
      <GlobalStyle />
    </ThemeProvider>
  );
}

export default App;
