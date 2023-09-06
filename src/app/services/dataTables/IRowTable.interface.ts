export interface IRow {
  data: string,
  item: string,
  date: string,
  flag: string,
  price: string
}

export interface IRowTable extends IRow {
  id: string,
  color: string,
}

export interface IBoardGroup {
  id: string,
  boardDta: IRowTable[]
}
