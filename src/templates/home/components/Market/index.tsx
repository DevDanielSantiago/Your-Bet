import { MarketType } from 'types/events'

import * as S from './styles'

interface MarketProps {
  market: MarketType
  isLast: boolean
}

const Market = ({ market, isLast }: MarketProps) => {
  return (
    <S.Root key={market.id}>
      <S.Content isLast={isLast}>
        <S.Header>
          <S.NameMarket>{market.name}</S.NameMarket>
        </S.Header>
        <S.Selections>
          {market.selections.map((selection) => (
            <S.Selection key={selection.id} isSelected={false}>
              <S.SelectionName isSelected={false}>
                {selection.name}
              </S.SelectionName>
              <S.SelectionOdd isSelected={false}>
                {selection.price}
              </S.SelectionOdd>
            </S.Selection>
          ))}
        </S.Selections>
      </S.Content>
    </S.Root>
  )
}

export default Market
