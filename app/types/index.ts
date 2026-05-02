export interface Filme {
  Title: string
  Poster?: string
  imdbID: string
  nota?: string
  estado?: 'quero_ver' | 'assistindo' | 'terminado' | 'pausado'
  Plot?: string
  Genre?: string
  imdbRating?: string
  Year?: string
}

export interface RespOMDb {
  Search?: Filme[]
}
