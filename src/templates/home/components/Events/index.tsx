import { ReactNode } from 'react'

import * as S from './styles'

interface EventProps {
  name: string
  children: ReactNode
}

const Event = ({ name, children }: EventProps) => {
  return (
    <S.Root>
      <S.Content>
        <S.Header>
          <S.EventName>{name}</S.EventName>
        </S.Header>
        {children}
      </S.Content>
    </S.Root>
  )
}

export default Event
