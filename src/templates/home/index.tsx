import { Fragment } from 'react'
import { atom, useAtom } from 'jotai'

import Header from 'shared/components/Header'
import { Menu } from 'shared/components/Menu'
import Divider from 'shared/components/Divider'
import Content from './components/Content'

import Event from './components/Events'
import Market from './components/Market'
import Bets from './components/Bets'

import { useBetStore } from 'stores/bet'

import * as S from './styles'

const statusMenu = atom(false)

const HomeTemplate = () => {
  const [openMenu, setOpenMenu] = useAtom(statusMenu)
  const { events, selections } = useBetStore()

  const toggleMenu = (status: boolean) => () => {
    setOpenMenu(status)
  }

  return (
    <Fragment>
      <Header>
        <S.Menu onClick={toggleMenu(true)} />

        <Menu.Root anchor="right" open={openMenu} onClose={toggleMenu(false)}>
          <Menu.Content sx={{ maxWidth: '315px', width: 315 }}>
            <Fragment>
              <S.Icon aria-label="close" onClick={toggleMenu(false)}>
                <S.Close />
              </S.Icon>
              <Menu.List>
                {selections.map((bet, index) => (
                  <Fragment key={index}>
                    <Bets selection={bet} />
                    {selections.length > 1 &&
                      index >= 0 &&
                      index <= selections.length - 2 && <Divider />}
                  </Fragment>
                ))}
              </Menu.List>
            </Fragment>
          </Menu.Content>
        </Menu.Root>
      </Header>

      <Content>
        {events.map((event) => (
          <Fragment key={event.id}>
            {event.markets.length > 0 && (
              <Event name={event.name}>
                {event.markets.map((market, index) => (
                  <Market
                    key={market.id}
                    idEvent={event.id}
                    market={market}
                    isLast={event.markets.length - 1 === index}
                  />
                ))}
              </Event>
            )}
          </Fragment>
        ))}
      </Content>
    </Fragment>
  )
}

export default HomeTemplate
