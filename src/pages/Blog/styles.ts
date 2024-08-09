import styled from 'styled-components'

export const BlogContainer = styled.div``

export const Profile = styled.div`
  border: red 1px solid;
  width: 100%;
  padding: 3.2rem 4rem;

  background-color: ${(props) => props.theme['base-profile']};

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  img {
    width: 14rem;
  }

  .profile-header {
    display: flex;
    align-items: center;
    justify-content: space-between;

    h1 {
      font-size: 2rem;
    }

    .profile-link {
      display: flex;
      align-items: center;
      gap: 0.4rem;

      a {
        text-decoration: none;
        font-family: 'Nunito', sans-serif;
        font-size: 1.2rem;
        font-style: normal;
        line-height: 160%;
        font-weight: 700;
      }

      a,
      svg {
        color: ${(props) => props.theme.blue};
      }
    }
  }
`
