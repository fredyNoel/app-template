export interface ApiData {
  success: boolean,
  data: Usuario | Colaborador,
  mensaje: any,
  errors: any
}

export interface Usuario {
  nombre: string,
  apellidos: string,
  direccion: string,
  telefono: string,
  usuario: string,
  email: string,
  password: string,
  img: string,
  role: string,
  isActive: boolean,
  isDelete: boolean,
  createAt: Date,
  _id: string
}

export interface Colaborador {
  nombre: string,
  apellidos: string,
  direccion: string,
  telefono: string,
  role: string,
  isActive: boolean,
  _id: string,
  usuario: Usuario
}

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
