import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
    *{
        margin:0;
        padding:0;
        box-sizing:border-box;
        text-decoration: none;
        list-style:none;
        scroll-behavior: smooth;
    }

    html {
  font-size: 100%; 
      }

    :focus{
        outline:0;
        
    }

    body{
        background: ${(props) => props.theme['gray-900']};
        color: ${(props) => props.theme['gray-700']};
        --webkit-font-smoothing: antialiased;
    }

    body,input,textarea,button,h1,h2,span,p{
        font-family: 'Nunito', sans-serif;
        font-weight:400;
        font-style:normal;
        font-size:1.125rem;
        line-height: 130%;
    }
 
    button{
        outline:none;
        border:none;
    }

  img{
    max-width:100%;
  }

 
    
    @media (max-width: 576px) {
   html {
    font-size: 93.75%;
  }
    }
`
