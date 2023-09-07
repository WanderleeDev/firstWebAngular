export interface IRow {
  data: string,
  item: string,
  date: string,
  flag: string,
  price: string
}

export interface IRowBoard extends IRow {
  id: string,
  color: string,
}

export interface IBoardGroup {
  id: string,
  title: string| null,
  boardDta: IRowBoard[]
}
