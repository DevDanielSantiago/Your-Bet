import { HTMLAttributes, ReactNode } from 'react'

import styled from 'styled-components'

interface EventRootProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode
}

const Event = styled.div`
  display: flex;

  width: 100%;
  height: fit-content;

  border: 2px solid #c3c7d3;

  & + & {
    margin-top: 15px;
  }
`

export function EventRoot({ children, ...rest }: EventRootProps) {
  return <Event {...rest}>{children}</Event>
}
