import styled from 'styled-components'

export const BlogContainer = styled.div``

export const Profile = styled.div`
  padding: 3.2rem 4rem;
  max-width: 86.4rem;
  background-color: ${(props) => props.theme['base-profile']};

  display: flex;
  flex-direction: row;
  gap: 3.2rem;
  justify-content: center;
  align-items: center;

  position: relative;
  top: -50px;

  border-radius: 10px;
  box-shadow: 0px 2px 28px 0px rgba(0, 0, 0, 0.2);

  img {
    width: 14rem;
  }

  .profile-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 0.8rem;

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
        display: flex;
        align-items: center;
        gap: 0.8rem;
        color: ${(props) => props.theme.blue};
      }
    }
  }

  .profile-info {
    display: flex;
    gap: 2.4rem;
    margin-top: 2.8rem;

    .profile {
      display: flex;
      align-items: center;
      gap: 0.8rem;

      svg {
        color: ${(props) => props.theme['base-label']};
      }
    }
  }
`

export const Search = styled.div`
  margin-bottom: 4.8rem;

  .search-header {
    display: flex;
    justify-content: space-between;
    margin-bottom: 1.2rem;

    h2 {
      font-size: 1.8rem;
      font-style: normal;
      font-weight: 700;
      line-height: 160%;
      color: ${(props) => props.theme['base-subtitle']};
    }

    span {
      font-size: 1.4rem;
      font-style: normal;
      font-weight: 400;
      line-height: 160%;
      color: ${(props) => props.theme['base-span']};
    }
  }

  input {
    width: 100%;

    padding: 12px 16px;
    border-radius: 6px;
    border: 1px solid ${(props) => props.theme['base-border']};
    background-color: ${(props) => props.theme['base-input']};

    font-size: 1.6rem;
    font-style: normal;
    font-weight: 400;
    line-height: 160%;
    color: ${(props) => props.theme['base-title']};

    &::placeholder {
      color: ${(props) => props.theme['base-label']};
    }
  }
`

export const Cards = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3.2rem;
`

export const Card = styled.div`
  padding: 3.2rem;
  border-radius: 10px;
  background-color: ${(props) => props.theme['base-post']};

  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  width: 100%;

  .card-header {
    display: flex;
    justify-content: space-between;
    margin-bottom: 2rem;

    h1 {
      font-size: 2rem;
      font-style: normal;
      font-weight: 700;
      line-height: 160%;
      color: ${(props) => props.theme['base-title']};
    }

    span {
      font-size: 1.4rem;
      font-style: normal;
      font-weight: 400;
      line-height: 160%;
      color: ${(props) => props.theme['base-span']};
    }
  }

  p {
    color: ${(props) => props.theme['base-text']};
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    width: 100%;

    font-size: 1.6rem;
    font-style: normal;
    font-weight: 400%;
    line-height: 160%;
  }
`
