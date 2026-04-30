export interface Filme {
  Title: string
  Poster?: string
  imdbID: string
  Nota?: string
  Estado?: 'quero_ver' | 'assistindo' | 'terminado' | 'pausado'
  Plot?: string
  Genre?: string
  imdbRating?: string
  Year?: string
}

export interface RespOMDb {
  Search?: Filme[]
}
