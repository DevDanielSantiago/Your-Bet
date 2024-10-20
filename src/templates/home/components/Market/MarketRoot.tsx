import { HTMLAttributes, ReactNode } from 'react'

import styled from 'styled-components'

interface MarketRootProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode
}

const Market = styled.div`
  display: flex;

  width: 100%;
  height: fit-content;
`

export function MarketRoot({ children, ...rest }: MarketRootProps) {
  return <Market {...rest}>{children}</Market>
}
