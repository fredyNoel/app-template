export interface ItemMenu {
  label: string,
  icon: string,
  submenu?: Submenu[]
}
export interface Submenu {
  label: string,
  icon: string,
  url?: string
}