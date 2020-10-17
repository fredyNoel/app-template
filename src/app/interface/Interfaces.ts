export interface ApiData {
  success?: boolean,
  data?: any,
  mensaje?: any,
  errors?: any
}

export interface Embarque {
  folio?: string,
  chofer?: Colaborador,
  auxiliar?: Colaborador,
  supervisor?: Colaborador,
  ruta?: Ruta,
  unidad?: Flota,
  usuario?: Usuario,
  peso?: number,
  importe?: number,
  isDelete?: boolean,
  fecha_embarque?: Date,
  fecha_entrega?: Date,
  createAt?: Date,
  _id?: string
}

export interface Flota {
  clave?: string,
  placa?: string,
  anio?: string,
  capacidad?: number,
  tipo?: string,
  usuario?: Usuario,
  isDelete?: boolean,
  createAt?: Date,
  _id?: string
}

export interface Usuario {
  nombre?: string,
  apellidos?: string,
  direccion?: string,
  telefono?: string,
  usuario?: string,
  email?: string,
  password?: string,
  img?: string,
  role?: string,
  isActive?: boolean,
  isDelete?: boolean,
  createAt?: Date,
  _id?: string
}

export interface Colaborador {
  nombre?: string,
  apellidos?: string,
  direccion?: string,
  telefono?: string,
  role?: string,
  isActive?: boolean,
  _id?: string,
  usuario?: Usuario,
  createAt?: Date
}

export interface Ruta {
  clave?: string,
  nombre?: string,
  subrutas?: string,
  tipo_ruta?: string,
  isDelete?: boolean,
  createAt?: Date,
  _id?: string,
  usuario?: Usuario
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
