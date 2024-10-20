import { HTMLAttributes, ReactNode } from 'react'
import styled from 'styled-components'

interface ContainerProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode
}

const Root = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`

const ContainerRoot = ({ children, ...rest }: ContainerProps) => {
  return <Root {...rest}>{children}</Root>
}

export default ContainerRoot
