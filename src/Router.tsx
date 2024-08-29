import { Routes, Route } from 'react-router-dom'

import { Blog } from './pages/Blog/index.tsx'
import { Post } from './pages/Post/index.tsx'
import { DefaultLayout } from './layouts/DefaultLayout/index.tsx'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Blog />} />
        <Route path="/post/:postId" element={<Post />} />
      </Route>
    </Routes>
  )
}
