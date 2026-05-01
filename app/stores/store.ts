import { defineStore } from 'pinia'
import type { Filme } from '~/types/index'

export const useListaStore = defineStore('lista', () => {
  const lista = ref<Filme[]>([])
  const possiveisNotas = ['-', '1', '2', '3', '4', '5']
  const possiveisEstados = [
    { label: 'Quero Ver', value: 'quero_ver' },
    { label: 'Assistindo', value: 'assistindo' },
    { label: 'Terminado', value: 'terminado' },
    { label: 'Pausado', value: 'pausado' }
  ]

  function add(filme: Filme, Estado: 'quero_ver' | 'assistindo' | 'terminado' | 'pausado', Nota: string) {
    if (estaNaLista(filme.imdbID)) {
      throw new Error('O filme já está na sua lista!')
    }
    lista.value = [...lista.value, { ...filme, Estado, Nota }]
  }

  function estaNaLista(imdbID: string) {
    return lista.value.some(f => f.imdbID === imdbID)
  }

  function alterarNota(imdbID: string, Nota: string) {
    lista.value = lista.value.map(f => f.imdbID === imdbID ? { ...f, Nota } : f)
  }

  function alterarEstado(imdbID: string, Estado: 'quero_ver' | 'assistindo' | 'terminado' | 'pausado') {
    lista.value = lista.value.map(f => f.imdbID === imdbID ? { ...f, Estado } : f)
  }

  function remover(imdbID: string) {
    lista.value = lista.value.filter(f => f.imdbID !== imdbID)
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
