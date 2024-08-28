import { createContext, useState, ReactNode, useContext } from 'react'
import { api } from '../lib/axios'

interface SearchResultProps {
  id: number
  title: string
  body: string
  created_at: string
}

interface GithubAPIContextData {
  searchResult: SearchResultProps[]
  getSearch: (searchIssues: string) => void
}

interface SearchResultProviderProps {
  children: ReactNode
}

// Create a context
export const GithubAPIContext = createContext({} as GithubAPIContextData)
// Create a Provider
export function GithubAPIProvider({ children }: SearchResultProviderProps) {
  const [searchResult, setSearchResult] = useState<SearchResultProps[]>([])

  async function getSearch(searchIssues: string) {
    try {
      const response = await api.get('/search/issues', {
        params: {
          q: `${searchIssues} repo:casbern/github-blog`,
        },
      })
      setSearchResult(response.data.items)
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <GithubAPIContext.Provider value={{ searchResult, getSearch }}>
      {children}
    </GithubAPIContext.Provider>
  )
}

export function useGithubAPISearch() {
  return useContext(GithubAPIContext)
}
