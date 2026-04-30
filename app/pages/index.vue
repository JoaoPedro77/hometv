<script setup>
const search = ref('Batman')
const idtag = ref('')

const { data } = await useFetch('https://www.omdbapi.com/', {
  query: {
    apikey: 'ea31fccd',
    s: search,
    i: idtag
  }
})

const filmes = computed(() => data.value.Search || [])
</script>

<template>
  <div>
    <UPageHero
      description="O lar do gerenciamento de filmes e séries"
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
    </UPageHero>

    <div class="my-10 mx-4 space-y-3">
      <separaSecao
        titulo="Descubra novos Filmes"
      />
      <UCarousel
        v-slot="{ item }"
        :items="filmes"
        class=" select-none w-full"
        :ui="{ item: 'basis-1/5' }"
        loop
      >
        <CardFilme
          class="hover:scale-104 transition-all duration-200"
          :titulo="item.Title"
          :imagem="item.Poster"
        />
      </UCarousel>
    </div>
  </div>
</template>
