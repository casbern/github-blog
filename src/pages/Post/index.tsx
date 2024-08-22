import {
  ArrowSquareUpRight,
  CalendarBlank,
  CaretLeft,
  Chat,
  GithubLogo,
} from 'phosphor-react'
import { Content, PostInfo } from './styles'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { dracula } from 'react-syntax-highlighter/dist/esm/styles/prism'

export function Post() {
  return (
    <>
      <PostInfo>
        <div className="postInfo-links">
          <a href="/">
            <CaretLeft size={12} />
            VOLTAR
          </a>

          <a href="https://github.com/casbern" target="_blank" rel="noreferrer">
            VER NO GITHUB
            <ArrowSquareUpRight size={13} />
          </a>
        </div>

        <h1>JavaScript data types and data structures</h1>

        <div className="postInfo-info">
          <div className="postInfo">
            <GithubLogo size={18} />
            <span>cameronwll</span>
          </div>

          <div className="postInfo">
            <CalendarBlank size={18} />

            <span>Há 1 dia</span>
          </div>

          <div className="postInfo">
            <Chat size={18} />
            <span>5 comentários</span>
          </div>
        </div>
      </PostInfo>

      <Content>
        <p>
          Programming languages all have built-in data structures, but these
          often differ from one language to another. This article attempts to
          list the built-in data structures available in JavaScript and what
          properties they have. These can be used to build other data
          structures. Wherever possible, comparisons with other languages are
          drawn.
        </p>
        <br />
        <p>
          Dynamic typing JavaScript is a loosely typed and dynamic language.
          Variables in JavaScript are not directly associated with any
          particular value type, and any variable can be assigned (and
          re-assigned) values of all types:
        </p>

        <br />

        {/* <pre>
          <code>
            let foo = 42; // foo is now a number <br />
            foo = ‘bar’; // foo is now a string <br />
            foo = true; // foo is now a boolean
          </code>
        </pre> */}

        <SyntaxHighlighter language="javascript" style={dracula}>
          {`
            let foo = 42; // foo is now a number 
            foo = ‘bar’; // foo is now a string 
            foo = true; // foo is now a boolean
          `}
        </SyntaxHighlighter>
      </Content>
    </>
  )
}
