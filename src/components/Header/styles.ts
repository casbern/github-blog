import styled from 'styled-components'

export const HeaderContainer = styled.header`
  width: 100%;
  padding: 3rem 0;
  background-color: ${(props) => props.theme['base-profile']};

  display: flex;
  justify-content: space-between;
  align-items: center;

  .logo {
    width: 10rem;
  }

  img:first-child,
  img:last-child {
    width: 10rem;
  }

  @media (min-width: 768px) {
    img:first-child,
    img:last-child {
      width: 20rem;
    }
  }

  @media (min-width: 1440px) {
    .logo {
      width: initial;
    }

    img:first-child,
    img:last-child {
      width: initial;
    }
  }
`
