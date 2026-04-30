<script setup lang="ts">
import FilmeCard from '~/components/filmeCard.vue'
import type { RespOMDb } from '~/types/index'

const categorias = [
  { titulo: 'Filmes do Batman', busca: 'Batman' },
  { titulo: 'Filmes do Homem-Aranha', busca: 'Spider-Man' },
  { titulo: 'Vingadores', busca: 'Avengers' },
  { titulo: 'Filmes irados', busca: 'movie' }
]

const { data } = await useAsyncData('home', async () => {
  const promessas = categorias.map(categoria =>
    $fetch<RespOMDb>('https://www.omdbapi.com/', {
      query: {
        apikey: 'ea31fccd',
        s: categoria.busca,
        type: 'movie'
      }
    })
  )
  const resultados = await Promise.all(promessas)

  return categorias.map((cat, index) => ({
    titulo: cat.titulo,
    filmes: resultados[index]?.Search || []
  }))
})
</script>

<template>
  <div>
    <UPageHero
      :links="[{
        label: 'Minha lista',
        to: '/minha-lista',
        trailingIcon: 'solar:video-frame-play-vertical-bold-duotone',
        size: 'xl'
      }, {
        label: 'Pesquisar',
        to: '/pesquisar',
        trailingIcon: 'streamline-ultimate:movies-reel-bold',
        size: 'xl',
        color: 'neutral',
        variant: 'subtle'
      }]"
      :ui="{
        root: 'bg-cover bg-center bg-no-repeat h-lg before:absolute before:inset-0 dark:before:bg-neutral-900/70 before:bg-neutral-200/60 before:z-0',
        container: 'relative z-10 pt-20 lg:pt-20'
      }"
      :style="{ backgroundImage: `url(/bg.jpg)` }"
    >
      <template #title>
        <div class="w-full scale-60 md:scale-100 flex items-center justify-center gap-4">
          <NuxtImg
            src="/hometv.png"
            alt="HomeTv"
            class="h-30"
          />
          <h1 class="text-8xl font-bold">
            HomeTv
          </h1>
        </div>
      </template>
      <template #description>
        <p class="text-lg dark:text-white/90 text-black">
          {{ "O lar do gerenciamento de filmes e séries" }}
        </p>
      </template>
    </UPageHero>

    <div
      v-for="(secao, index) in data"
      :key="index"
      class="my-10 mx-4 space-y-3"
    >
      <separaSecao
        :titulo="secao.titulo"
      />
      <UCarousel
        v-slot="{ item }"
        :items="secao.filmes"
        class=" select-none w-full"
        :ui="{ item: 'basis-1/2 md:basis-1/3 lg:basis-1/5' }"
        loop
      >
        <FilmeCard
          class="hover:scale-104 transition-all duration-200"
          :filme="item"
        />
      </UCarousel>
    </div>
  </div>
</template>
