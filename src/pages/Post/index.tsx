import {
  ArrowSquareUpRight,
  CalendarBlank,
  CaretLeft,
  Chat,
  GithubLogo,
} from 'phosphor-react'
import { Content, PostInfo, Spinner } from './styles'
import { api } from '../../lib/axios'

import { Link, useParams } from 'react-router-dom'
import { formatDistance, parseISO } from 'date-fns'
import { useEffect, useState } from 'react'
import ClipLoader from 'react-spinners/ClipLoader'

interface PostDataProps {
  title: string
  user: {
    login: string
  }
  created_at: string
  comments: number
  body: string
}

export function Post() {
  const { postNumber } = useParams()

  const [postData, setPostData] = useState<PostDataProps | null>(null)
  const [loading, setLoading] = useState(true)

  async function getPostData() {
    setLoading(true)
    try {
      const response = await api.get(
        `/repos/casbern/github-blog/issues/${postNumber}`,
      )
      setPostData(response.data)
    } catch (error) {
      console.error(error)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    setTimeout(() => {
      getPostData()
    }, 2000)
  }, [])

  return (
    <>
      {loading ? (
        <Spinner>
          <ClipLoader color="#3294F8" loading={loading} size={50} />
        </Spinner>
      ) : postData ? (
        <>
          <PostInfo>
            <div className="postInfo-links">
              <Link to="/">
                <CaretLeft size={12} />
                VOLTAR
              </Link>

              <Link
                to={`https://github.com/casbern/github-blog/issues/${postNumber}`}
                target="_blank"
                rel="noreferrer"
              >
                VER NO GITHUB
                <ArrowSquareUpRight size={13} />
              </Link>
            </div>

            <h1>{postData.title}</h1>

            <div className="postInfo-info">
              <div className="postInfo">
                <GithubLogo size={18} />
                <span>{postData.user.login}</span>
              </div>

              <div className="postInfo">
                <CalendarBlank size={18} />

                <span>
                  {formatDistance(parseISO(postData.created_at), new Date(), {
                    addSuffix: true,
                  })}
                </span>
              </div>

              <div className="postInfo">
                <Chat size={18} />
                <span>{postData.comments} comentários</span>
              </div>
            </div>
          </PostInfo>

          <Content>
            <p>{postData.body}</p>
          </Content>
        </>
      ) : (
        <p>Post não encontrado.</p>
      )}
    </>
  )
}
