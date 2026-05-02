import { defineStore, skipHydrate } from 'pinia'
import type { Filme } from '~/types/index'

export const useListaStore = defineStore('lista', () => {
  const lista = skipHydrate(useLocalStorage<Filme[]>('lista-filmes', []))
  const possiveisNotas = ['-', '1', '2', '3', '4', '5']
  const possiveisEstados = [
    { label: 'Quero Ver', value: 'quero_ver' },
    { label: 'Assistindo', value: 'assistindo' },
    { label: 'Terminado', value: 'terminado' },
    { label: 'Abandonado', value: 'abandonado' },
    { label: 'Pausado', value: 'pausado' }
  ]

  function add(filme: Filme, estado: 'quero_ver' | 'assistindo' | 'terminado' | 'pausado', nota: string) {
    if (estaNaLista(filme.imdbID)) {
      throw new Error('O filme já está na sua lista!')
    }
    lista.value = [...lista.value, { ...filme, estado, nota }]
  }

  function estaNaLista(imdbID: string) {
    return lista.value.some((f: Filme) => f.imdbID === imdbID)
  }

  function alterarNota(imdbID: string, nota: string) {
    lista.value = lista.value.map((f: Filme) => f.imdbID === imdbID ? { ...f, nota } : f)
  }

  function alterarEstado(imdbID: string, estado: 'quero_ver' | 'assistindo' | 'terminado' | 'pausado') {
    lista.value = lista.value.map((f: Filme) => f.imdbID === imdbID ? { ...f, estado } : f)
  }

  function remover(imdbID: string) {
    lista.value = lista.value.filter((f: Filme) => f.imdbID !== imdbID)
  }

  return {
    lista,
    add,
    remover,
    alterarEstado,
    alterarNota,
    estaNaLista,
    possiveisEstados,
    possiveisNotas
  }
})
