import styled, { css } from 'styled-components'

export const Root = styled.div`
  display: flex;

  width: 100%;
  height: fit-content;
`

type MarketProps = {
  isLast: boolean
}

export const Content = styled.div<MarketProps>`
  ${({ isLast }) => css`
    display: flex;
    flex-direction: column;

    width: 100%;
    height: fit-content;

    padding: 16px;

    border-bottom: ${isLast ? '' : '2px solid #8991a6'};
  `}
`

export const Header = styled.div`
  width: 100%;

  display: flex;
  justify-content: left;
  align-items: center;
`

export const NameMarket = styled.span`
  font-size: 1.5rem;
  font-weight: 600;

  color: #8f9196;

  margin-bottom: 12px;
`

export const Selections = styled.div`
  width: 100%;
  height: fit-content;

  display: flex;
  justify-content: space-between;
`

type SelectionProps = {
  isSelected: boolean
}

export const Selection = styled.div<SelectionProps>`
  ${({ isSelected }) => css`
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

    background-color: ${isSelected ? '#01b93f' : ''};
  `}
`

export const SelectionName = styled.span<SelectionProps>`
  ${({ isSelected }) => css`
    font-size: 1.2rem;
    color: ${isSelected ? '#ffffff' : '#4f5052'};
  `}
`

export const SelectionOdd = styled.span<SelectionProps>`
  ${({ isSelected }) => css`
    font-size: 1.1rem;
    color: ${isSelected ? '#ffffff' : '#4f5052'};
  `}
`
