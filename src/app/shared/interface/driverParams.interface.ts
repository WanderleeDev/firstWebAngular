export interface DriverParam {
  showProgress: boolean,
  steps: Steps[],
}

export interface Steps {
  element:string,
  popover: PopPover
}

export interface PopPover{
  title:string,
  description:string
}
