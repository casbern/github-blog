import styled from 'styled-components'

export const Spinner = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 5rem;
`

export const PostInfo = styled.div`
  padding: 3.2rem 4rem;
  /* width: 100%; */
  background-color: ${(props) => props.theme['base-profile']};

  display: flex;
  flex-direction: column;
  align-items: start;

  position: relative;
  top: -50px;

  border-radius: 10px;
  box-shadow: 0px 2px 28px 0px rgba(0, 0, 0, 0.2);

  .postInfo-links {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    margin-bottom: 2rem;

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

  h1 {
    color: ${(props) => props.theme['base-title']};
    font-size: 2.4rem;
    font-style: normal;
    font-weight: 700;
    line-height: 130%;
    margin-bottom: 0.8rem;
  }

  .postInfo-info {
    display: flex;
    gap: 2.4rem;
    margin-top: 2.8rem;

    .postInfo {
      display: flex;
      align-items: center;
      gap: 0.8rem;

      svg {
        color: ${(props) => props.theme['base-label']};
      }
    }
  }
`

export const Content = styled.div`
  padding: 0 3.2rem 4rem;

  p {
    font-size: 1.6rem;
    font-style: normal;
    font-weight: 400;
    line-height: 160%;
    color: ${(props) => props.theme['base-text']};
  }

  pre {
    padding: 1.6rem;
    background-color: ${(props) => props.theme['base-post']};
    border-radius: 2px;
    font-size: 1.6rem;
    font-style: normal;
    font-weight: 400;
    line-height: 160%;
  }
`
