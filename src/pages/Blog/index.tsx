import { BlogContainer, Profile } from './styles'
import avatar from '../../assets/avatar.png'
import {
  ArrowSquareUpRight,
  Buildings,
  GithubLogo,
  Users,
} from 'phosphor-react'

export function Blog() {
  return (
    <BlogContainer>
      <Profile>
        <img src={avatar} alt="User image" />

        <div className="profile-content">
          <div className="profile-header">
            <h1>Cameron Williamson</h1>
            <div className="profile-link">
              <a href="#">GITHUB</a>
              <ArrowSquareUpRight size={12} />
            </div>
          </div>

          <p>
            Tristique volutpat pulvinar vel massa, pellentesque egestas. Eu
            viverra massa quam dignissim aenean malesuada suscipit. Nunc,
            volutpat pulvinar vel mass.
          </p>

          <div className="profile-info">
            <div className="profile-name">
              <GithubLogo size={18} />
              <span>cameronwll</span>
            </div>

            <div className="profile-repo">
              <Buildings size={18} />
              <span>Rocketseat</span>
            </div>

            <div className="profile-followers">
              <Users size={18} />
              <span>32 seguidores</span>
            </div>
          </div>
        </div>
      </Profile>
    </BlogContainer>
  )
}
