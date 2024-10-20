import styled from 'styled-components'

interface EventHeaderProps {
  text: string
}

const Event = styled.div`
  width: 100%;
  height: 64px;

  display: flex;
  justify-content: center;
  align-items: center;

  border-bottom: 2px solid #666666;
`

const Name = styled.span`
  font-size: 2rem;
  font-weight: 600;

  color: #4d5057;
`

export function EventHeader({ text }: EventHeaderProps) {
  return (
    <Event>
      <Name>{text}</Name>
    </Event>
  )
}
