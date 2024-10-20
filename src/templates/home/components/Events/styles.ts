import styled from 'styled-components'

export const Root = styled.div`
  display: flex;

  width: 100%;
  height: fit-content;

  border: 2px solid #c3c7d3;

  & + & {
    margin-top: 15px;
  }
`

export const Content = styled.div`
  display: flex;
  flex-direction: column;

  width: 100%;
  height: fit-content;
`

export const Header = styled.div`
  width: 100%;
  height: 64px;

  display: flex;
  justify-content: center;
  align-items: center;

  border-bottom: 2px solid #666666;
`

export const EventName = styled.span`
  font-size: 2rem;
  font-weight: 600;

  color: #4d5057;
`
