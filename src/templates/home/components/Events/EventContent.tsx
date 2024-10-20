import { ReactNode } from 'react'
import styled from 'styled-components'

interface EventContentProps {
  children: ReactNode
}

const Event = styled.div`
  display: flex;
  flex-direction: column;

  width: 100%;
  height: fit-content;
`

export function EventContent({ children }: EventContentProps) {
  return <Event>{children}</Event>
}
