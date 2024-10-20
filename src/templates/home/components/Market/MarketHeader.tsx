import styled from 'styled-components'

interface MarketHeaderProps {
  text: string
}

const Market = styled.div`
  width: 100%;

  display: flex;
  justify-content: left;
  align-items: center;
`

const Name = styled.span`
  font-size: 1.5rem;
  font-weight: 600;

  color: #8f9196;

  margin-bottom: 12px;
`

export function MarketHeader({ text }: MarketHeaderProps) {
  return (
    <Market>
      <Name>{text}</Name>
    </Market>
  )
}
