import styled from 'styled-components'

import { SelectionType } from 'types/events'

interface MarketSelectionsProps {
  selections: SelectionType[]
}

const Selections = styled.div`
  width: 100%;
  height: fit-content;

  display: flex;
  justify-content: space-between;
`

const Selection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  width: 100%;
  max-width: 118px;
  height: 45px;

  font-size: 1.5rem;
  font-weight: 600;

  border: 1px solid #4f5052;
  border-radius: 4px;

  padding: 6px;

  &:hover {
    cursor: pointer;
  }

  & + & {
    margin-left: 10px;
  }
`

const Name = styled.span`
  font-size: 1.2rem;
  color: #4f5052;
`

const Odd = styled.span`
  font-size: 1.1rem;
  color: #4f5052;
`

export function MarketSelections({ selections }: MarketSelectionsProps) {
  return (
    <Selections>
      {selections.map((selection) => (
        <Selection key={selection.id}>
          <Name>{selection.name}</Name>
          <Odd>{selection.price}</Odd>
        </Selection>
      ))}
    </Selections>
  )
}
