import { Profile, Search, Cards, Card } from './styles'
import avatar from '../../assets/avatar.png'
import {
  ArrowSquareUpRight,
  Buildings,
  GithubLogo,
  Users,
} from 'phosphor-react'

import { api } from '../../lib/axios'
import { useEffect, useState } from 'react'

export function Blog() {
  const [userData, setUserData] = useState('')

  async function getUserData() {
    try {
      const response = await api.get('/users/casbern')
      setUserData(response.data)
    } catch (error) {
      console.error('Erro ao fazer requisição:', error)
    }
  }

  useEffect(() => {
    getUserData()
  })

  console.log(userData)
  return (
    <>
      <Profile>
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
              <span>Rocketseat</span>
            </div>

            <div className="profile">
              <Users size={18} />
              <span>{userData.followers} seguidores</span>
            </div>
          </div>
        </div>
      </Profile>

      <Search>
        <div className="search-header">
          <h2>Publicações</h2>
          <span>6 publicações</span>
        </div>

        <input type="text" placeholder="Buscar conteúdo" />
      </Search>

      <Cards>
        <Card>
          <div className="card-header">
            <h1>JavaScript data types and data structures</h1>
            <span>Há 1 dia</span>
          </div>

          <p>
            Programming languages all have built-in data structures, but these
            often differ from one language to another. This article attempts to
            list the built-in data structures available in JavaScript and what
            properties they have. These can be used to build other data
            structures. Wherever possible, comparisons with other languages are
            drawn. Dynamic typing JavaScript is a loosely typed and dynamic
            language. Variables in JavaScript are not directly associated with
            any particular value type, and any variable can be assigned (and
            re-assigned) values of all types: let foo = 42; // foo is now a
            number foo // foo is now a string foo = true; // foo is now boolean
          </p>
        </Card>

        <Card>
          <div className="card-header">
            <h1>JavaScript data types and data structures</h1>
            <span>Há 1 dia</span>
          </div>

          <p>
            Programming languages all have built-in data structures, but these
            often differ from one language to another. This article attempts to
            list the built-in data structures available in JavaScript and what
            properties they have. These can be used to build other data
            structures. Wherever possible, comparisons with other languages are
            drawn. Dynamic typing JavaScript is a loosely typed and dynamic
            language. Variables in JavaScript are not directly associated with
            any particular value type, and any variable can be assigned (and
            re-assigned) values of all types: let foo = 42; // foo is now a
            number foo // foo is now a string foo = true; // foo is now boolean
          </p>
        </Card>

        <Card>
          <div className="card-header">
            <h1>JavaScript data types and data structures</h1>
            <span>Há 1 dia</span>
          </div>

          <p>
            Programming languages all have built-in data structures, but these
            often differ from one language to another. This article attempts to
            list the built-in data structures available in JavaScript and what
            properties they have. These can be used to build other data
            structures. Wherever possible, comparisons with other languages are
            drawn. Dynamic typing JavaScript is a loosely typed and dynamic
            language. Variables in JavaScript are not directly associated with
            any particular value type, and any variable can be assigned (and
            re-assigned) values of all types: let foo = 42; // foo is now a
            number foo // foo is now a string foo = true; // foo is now boolean
          </p>
        </Card>

        <Card>
          <div className="card-header">
            <h1>JavaScript data types and data structures</h1>
            <span>Há 1 dia</span>
          </div>

          <p>
            Programming languages all have built-in data structures, but these
            often differ from one language to another. This article attempts to
            list the built-in data structures available in JavaScript and what
            properties they have. These can be used to build other data
            structures. Wherever possible, comparisons with other languages are
            drawn. Dynamic typing JavaScript is a loosely typed and dynamic
            language. Variables in JavaScript are not directly associated with
            any particular value type, and any variable can be assigned (and
            re-assigned) values of all types: let foo = 42; // foo is now a
            number foo // foo is now a string foo = true; // foo is now boolean
          </p>
        </Card>
      </Cards>
    </>
  )
}
