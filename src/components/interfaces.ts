export interface Iplayer {
  id: number
  name: string
  position: string
  gender: string
  number?: number
  height?: number
  handPreference?: string
  seasonStats?: IvoleyStats
}
export interface Istat {
  good: number
  bad: number
  total: number
}
export interface IabititiStat {
  current: Istat
  prev: Istat
}
export interface IvoleyStats {
  attack: IabititiStat
  recieve: IabititiStat
  set: IabititiStat
  block: IabititiStat
  serve: IabititiStat
}

export interface IgraphElement {
  type: string
  key: string
  id: string
  stroke: string
  strokeWidth: number
  d?: string
  cx?: number
  cy?: number
  r?: number
}
export interface IgraphLegend {
  key: string
  value: {
    key: string,
    val: number,
    color?: string
  }[],
  id?: string
}
