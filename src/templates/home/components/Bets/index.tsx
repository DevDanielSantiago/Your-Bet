import { useBetStore } from 'stores/bet'
import styled from 'styled-components'
import { MarketSelectionType } from 'types/events'

interface BetsProps {
  selection: MarketSelectionType
}

const Bet = styled.div`
  width: 100%;
  height: fit-content;

  display: flex;
  flex-direction: column;
  align-items: center;

  padding: 10px;
`

const Title = styled.h3`
  font-size: 1.5rem;
  color: #5f6267;

  margin-bottom: 5px;
`

const Odd = styled.h2`
  font-size: 2.5rem;
  color: #51545e;
`

const Delete = styled.button`
  all: unset;
  display: inline-block;

  border-radius: 4px;

  color: #fff;
  background-color: #485160;

  margin-top: 15px;
  padding: 3px 15px;

  font-size: 1.2rem;

  &:hover {
    cursor: pointer;
  }
`

const Bets = ({ selection }: BetsProps) => {
  const { removeSelection } = useBetStore()

  const handleRemove = (selection: MarketSelectionType) => () => {
    removeSelection(selection)
  }

  return (
    <Bet>
      <Title>
        {selection.marketName.replace(/Team|Player/gi, selection.selectionName)}
      </Title>
      <Odd>{selection.selectionPrice}</Odd>

      <Delete onClick={handleRemove(selection)}>Delete</Delete>
    </Bet>
  )
}

export default Bets
