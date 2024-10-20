import { HTMLAttributes, ReactNode } from 'react'
import styled from 'styled-components'

interface ContainerProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode
}

const Container = styled.div`
  width: 100%;
  max-width: 346px;
`

const ContainerContent = ({ children, ...rest }: ContainerProps) => {
  return <Container {...rest}>{children}</Container>
}

export default ContainerContent
