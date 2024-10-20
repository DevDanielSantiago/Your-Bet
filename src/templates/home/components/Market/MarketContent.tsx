import { ReactNode } from 'react'
import styled, { css } from 'styled-components'

interface MarketContentProps {
  children: ReactNode
  isLast: boolean
}

type MarketProps = {
  isLast: boolean
}

const Market = styled.div<MarketProps>`
  ${({ isLast }) => css`
    display: flex;
    flex-direction: column;

    width: 100%;
    height: fit-content;

    padding: 16px;

    border-bottom: ${isLast ? '' : '2px solid #8991a6'};
  `}
`

export function MarketContent({ children, isLast }: MarketContentProps) {
  return <Market isLast={isLast}>{children}</Market>
}
