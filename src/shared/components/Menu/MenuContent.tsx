import { Box, BoxProps } from '@mui/material'
import { ReactNode } from 'react'

interface MenuContentProps extends BoxProps {
  children: ReactNode
}

export function MenuContent({ children, ...rest }: MenuContentProps) {
  return (
    <Box {...rest} role="presentation">
      {children}
    </Box>
  )
}
