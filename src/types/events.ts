export type ResponseType = EventType[]

export type EventType = {
  id: string
  name: string
  markets: MarketType[]
}

export type MarketType = {
  id: string
  name: string
  selections: SelectionType[]
}

export type SelectionType = {
  id: string
  name: string
  price: number
}

export type MarketSelectionType = {
  idEvent: string
  idMarket: string
  idSelection: string
  marketName: string
  selectionName: string
  selectionPrice: number
}
