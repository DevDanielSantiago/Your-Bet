import MenuIcon from '@mui/icons-material/Menu'
import IconButton from '@mui/material/IconButton'
import CloseIcon from '@mui/icons-material/Close'

import styled from 'styled-components'

export const Menu = styled(MenuIcon)`
  font-size: 50px;
  color: #676767;

  &:hover {
    cursor: pointer;
  }
`

export const Icon = styled(IconButton)`
  position: absolute;
  right: 8px;
  top: 8px;
`

export const Close = styled(CloseIcon)`
  font-size: 30px;
`
