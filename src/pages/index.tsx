import { useEffect } from 'react'

import { Events } from 'mocks/events'
import { useBetStore } from 'stores/bet'

import HomeTemplate from 'templates/home'

export default function HomePage() {
  const { setEvents } = useBetStore()

  useEffect(() => {
    setEvents(Events)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return <HomeTemplate />
}
