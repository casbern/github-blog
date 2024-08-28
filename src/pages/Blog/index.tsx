import { Profile, Search, Cards, Card } from './styles'
import avatar from '../../assets/avatar.png'
import {
  ArrowSquareUpRight,
  Buildings,
  GithubLogo,
  Users,
} from 'phosphor-react'

import { api } from '../../lib/axios'
import { useGithubAPISearch } from '../../context/GithubContext'
import { useEffect, useState } from 'react'
import { formatDistance, parseISO } from 'date-fns'

interface UserDataProps {
  avatar_url: string
  name: string
  bio: string
  login: string
  followers: number
  company: string
}

export function Blog() {
  const [userData, setUserData] = useState<UserDataProps | null>(null)
  const [searchIssues, setSearchIssues] = useState('')

  const { getSearch, searchResult } = useGithubAPISearch()

  function handleSearchIssues(event: React.ChangeEvent<HTMLInputElement>) {
    setSearchIssues(event.target.value)
  }

  async function getUserData() {
    try {
      const response = await api.get('/users/casbern')
      setUserData(response.data)
    } catch (error) {
      console.error(error)
    }
  }

  useEffect(() => {
    getUserData()
  }, [])

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      getSearch(searchIssues)
    }, 300)

    return () => {
      clearTimeout(timeoutId)
    }
  }, [searchIssues])

  return (
    <>
      <Profile>
        {userData ? (
          <>
            <img src={userData.avatar_url} alt="User image" />

            <div className="profile-content">
              <div className="profile-header">
                <h1>{userData.name}</h1>
                <div className="profile-link">
                  <a
                    href="https://github.com/casbern"
                    target="_blank"
                    rel="noreferrer"
                  >
                    GITHUB
                    <ArrowSquareUpRight size={13} />
                  </a>
                </div>
              </div>

              <p>{userData.bio}</p>

              <div className="profile-info">
                <div className="profile">
                  <GithubLogo size={18} />
                  <span>{userData.login}</span>
                </div>

                <div className="profile">
                  <Buildings size={18} />
                  <span>
                    {userData.company ? userData.company : 'Não informado'}
                  </span>
                </div>

                <div className="profile">
                  <Users size={18} />
                  <span>{userData.followers} seguidores</span>
                </div>
              </div>
            </div>
          </>
        ) : (
          <>
            <img src={avatar} alt="User image" />

            <div className="profile-content">
              <div className="profile-header">
                <h1>Cameron Williamson</h1>
                <div className="profile-link">
                  <a
                    href="https://github.com/casbern"
                    target="_blank"
                    rel="noreferrer"
                  >
                    GITHUB
                    <ArrowSquareUpRight size={13} />
                  </a>
                </div>
              </div>

              <p>
                Tristique volutpat pulvinar vel massa, pellentesque egestas. Eu
                viverra massa quam dignissim aenean malesuada suscipit. Nunc,
                volutpat pulvinar vel mass.
              </p>

              <div className="profile-info">
                <div className="profile">
                  <GithubLogo size={18} />
                  <span>cameronwll</span>
                </div>

                <div className="profile">
                  <Buildings size={18} />
                  <span>Rocketseat</span>
                </div>

                <div className="profile">
                  <Users size={18} />
                  <span>32 seguidores</span>
                </div>
              </div>
            </div>
          </>
        )}
      </Profile>

      <Search>
        <div className="search-header">
          <h2>Publicações</h2>
          <span>6 publicações</span>
        </div>

        <input
          type="text"
          placeholder="Buscar conteúdo"
          onChange={handleSearchIssues}
          value={searchIssues}
        />
      </Search>

      <Cards>
        {searchResult &&
          searchResult.map((result) => (
            <Card key={result.id}>
              <div className="card-header">
                <h1>{result.title}</h1>
                <span>
                  {formatDistance(parseISO(result.created_at), new Date(), {
                    addSuffix: true,
                  })}
                </span>
              </div>

              <p>{result.body}</p>
            </Card>
          ))}
      </Cards>
    </>
  )
}
