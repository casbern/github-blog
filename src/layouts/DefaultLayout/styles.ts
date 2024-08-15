import styled from 'styled-components'

export const LayoutContainer = styled.div`
  max-width: 90rem;
  margin: 0 auto;

  display: flex;
  flex-direction: column;

  @media (max-width: 1024px) {
    padding: 0 2rem;
  }
`
