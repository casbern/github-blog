import { HeaderContainer } from './styles'

import leftEffect from '../../assets/left-effect.svg'
import rightEffect from '../../assets/right-effect.svg'
import logo from '../../assets/logo.svg'

export function Header() {
  return (
    <HeaderContainer>
      <img src={leftEffect} alt="" />
      <img className="logo" src={logo} alt="" />
      <img src={rightEffect} alt="" />
    </HeaderContainer>
  )
}
