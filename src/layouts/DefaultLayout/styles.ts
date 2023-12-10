import styled from 'styled-components'

export const LayoutContainer = styled.div`
  width: 100%;
  padding: 2rem 10rem;
  height: 100vh;
  display: flex;
  flex-direction: column;

  @media (max-width: 1200px) {
    padding: 2rem 6rem;
  }
`
