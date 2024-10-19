import { Fragment } from 'react'
import { atom, useAtom } from 'jotai'

import Header from 'shared/components/Header'
import { Menu } from 'shared/components/Menu'

import { IconButton } from '@mui/material'
import { Close } from '@mui/icons-material'

import * as S from './styles'

const statusMenu = atom(false)

const HomeTemplate = () => {
  const [openMenu, setOpenMenu] = useAtom(statusMenu)

  const toggleMenu = (status: boolean) => () => {
    setOpenMenu(status)
  }

  return (
    <Header>
      <S.Menu onClick={toggleMenu(true)} />

      <Menu.Root anchor="right" open={openMenu} onClose={toggleMenu(false)}>
        <Menu.Content sx={{ width: 315 }}>
          <Fragment>
            <IconButton
              aria-label="close"
              onClick={toggleMenu(false)}
              sx={{ position: 'absolute', right: 8, top: 8 }}
            >
              <Close sx={{ fontSize: '30px' }} />
            </IconButton>
            <Menu.List></Menu.List>
          </Fragment>
        </Menu.Content>
      </Menu.Root>
    </Header>
  )
}

export default HomeTemplate
