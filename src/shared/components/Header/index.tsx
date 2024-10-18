import { HTMLAttributes, ReactNode } from 'react'

import styled from 'styled-components'

const HeaderContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  padding-right: 15px;
  padding-left: 15px;

  background-color: #ffffff;
  border-bottom: 2px solid #5e5e5e;
  height: 50px;
`

interface HeaderProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode
}

const Header = ({ children, ...rest }: HeaderProps) => {
  return <HeaderContainer {...rest}>{children}</HeaderContainer>
}

export default Header
