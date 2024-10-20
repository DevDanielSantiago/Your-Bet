import { EventType, MarketSelectionType } from 'types/events'
import { create } from 'zustand'

interface BetState {
  events: EventType[]
  selections: MarketSelectionType[]
  setEvents: (events: EventType[]) => void
  addSelection: (selection: MarketSelectionType) => void
  removeSelection: (selection: MarketSelectionType) => void
}

export const useBetStore = create<BetState>((set, get) => ({
  events: [],
  selections: [],
  setEvents: (events) => set({ events }),
  addSelection: (selection) => {
    const selections = get().selections

    const findMarket = selections.find(
      (value) =>
        value.idEvent === selection.idEvent &&
        value.idMarket === selection.idMarket
    )

    if (findMarket && findMarket.idSelection === selection.idSelection) return

    const filterSelections = selections.filter(
      (value) =>
        !(
          value.idEvent === selection.idEvent &&
          value.idMarket === selection.idMarket
        )
    )

    console.log([...filterSelections, selection])
    set({ selections: [...filterSelections, selection] })
  },
  removeSelection: (selection) => {
    const selections = get().selections

    const filterSelections = selections.filter(
      (value) =>
        value.idEvent !== value.idEvent &&
        value.idMarket !== selection.idMarket &&
        value.idSelection !== selection.idSelection
    )

    set({ selections: [...filterSelections, selection] })
  }
}))
