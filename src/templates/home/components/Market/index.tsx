import { MarketSelectionType, MarketType } from 'types/events'

import * as S from './styles'
import { useBetStore } from 'stores/bet'

interface MarketProps {
  market: MarketType
  isLast: boolean
  idEvent: string
}

const Market = ({ market, isLast, idEvent }: MarketProps) => {
  const { addSelection, selections } = useBetStore()

  const handleMarket = (market: MarketSelectionType) => () => {
    addSelection(market)
  }

  return (
    <S.Root key={market.id}>
      <S.Content isLast={isLast}>
        <S.Header>
          <S.NameMarket>{market.name}</S.NameMarket>
        </S.Header>
        <S.Selections>
          {market.selections.map((selection) => {
            const idSelected = selections.find(
              (value) =>
                value.idEvent === idEvent &&
                value.idMarket === market.id &&
                value.idSelection === selection.id
            )
            return (
              <S.Selection
                key={selection.id}
                isSelected={!!idSelected}
                onClick={handleMarket({
                  idEvent: idEvent,
                  idMarket: market.id,
                  idSelection: selection.id
                })}
              >
                <S.SelectionName isSelected={!!idSelected}>
                  {selection.name}
                </S.SelectionName>
                <S.SelectionOdd isSelected={!!idSelected}>
                  {selection.price}
                </S.SelectionOdd>
              </S.Selection>
            )
          })}
        </S.Selections>
      </S.Content>
    </S.Root>
  )
}

export default Market
