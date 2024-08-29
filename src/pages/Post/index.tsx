import {
  ArrowSquareUpRight,
  CalendarBlank,
  CaretLeft,
  Chat,
  GithubLogo,
} from 'phosphor-react'
import { Content, PostInfo } from './styles'
// import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
// import { dracula } from 'react-syntax-highlighter/dist/esm/styles/prism'
import { useGithubAPISearch } from '../../context/GithubContext'

import { Link, useParams } from 'react-router-dom'
import { formatDistance, parseISO } from 'date-fns'

export function Post() {
  const { searchResult } = useGithubAPISearch()
  const { postId } = useParams()

  const post = searchResult.find((result) => result.number === Number(postId))

  return (
    <>
      <PostInfo>
        <div className="postInfo-links">
          <Link to="/">
            <CaretLeft size={12} />
            VOLTAR
          </Link>

          <Link
            to={`https://github.com/casbern/github-blog/issues/${postId}`}
            target="_blank"
            rel="noreferrer"
          >
            VER NO GITHUB
            <ArrowSquareUpRight size={13} />
          </Link>
        </div>

        <h1>{post?.title}</h1>

        <div className="postInfo-info">
          <div className="postInfo">
            <GithubLogo size={18} />
            <span>{post?.user.login}</span>
          </div>

          <div className="postInfo">
            <CalendarBlank size={18} />

            <span>
              {formatDistance(parseISO(post.created_at), new Date(), {
                addSuffix: true,
              })}
            </span>
          </div>

          <div className="postInfo">
            <Chat size={18} />
            <span>{post?.comments} comentários</span>
          </div>
        </div>
      </PostInfo>

      <Content>
        <p>{post?.body}</p>
      </Content>
    </>
  )
}
