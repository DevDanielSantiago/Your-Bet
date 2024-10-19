import { Drawer, DrawerProps } from '@mui/material'
import { ReactNode } from 'react'

interface MenuRootProps extends DrawerProps {
  children: ReactNode
}

export function MenuRoot({ children, ...rest }: MenuRootProps) {
  return <Drawer {...rest}>{children}</Drawer>
}
