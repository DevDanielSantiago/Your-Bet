import { ReactNode } from 'react'
import styled from 'styled-components'

interface MenuListProps {
  children: ReactNode
}

const List = styled.div`
  margin: 60px 20px 0px 20px;
`

export function MenuList({ children }: MenuListProps) {
  return <List>{children}</List>
}
