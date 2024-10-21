import { ReactNode } from 'react'

import { Container } from 'shared/components/Container'

interface ContentProps {
  children: ReactNode
}

export default function Content({ children }: ContentProps) {
  return (
    <Container.Root>
      <Container.Content
        style={{
          paddingTop: '30px',
          paddingRight: '11px',
          paddingLeft: '11px'
        }}
      >
        {children}
      </Container.Content>
    </Container.Root>
  )
}
