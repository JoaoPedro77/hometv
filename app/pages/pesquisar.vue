<script setup lang="ts">
import type { RespOMDb } from '~/types'

const pesquisa = ref('')

const { data, refresh } = await useFetch('https://www.omdbapi.com/', {
  query: {
    apikey: 'ea31fccd',
    s: computed(() => pesquisa.value)
  },
  immediate: false
}) as { data: Ref<RespOMDb>, refresh: () => Promise<void> }

const filmes = computed(() => data.value?.Search || [])

function Pesquisar() {
  if (pesquisa.value.trim().length > 0) {
    refresh()
  }
}
</script>

<template>
  <div class="md:m-4 flex flex-col justify-center items-center">
    <h1 class="text-4xl font-bold flex items-center justify-center gap-2 my-8">
      <UIcon name="solar:clipboard-list-bold-duotone" />
      Pesquisar Filmes
    </h1>
    <UForm @submit="Pesquisar">
      <div class="flex flex-row justify-center items-center gap-2">
        <UInput
          v-model="pesquisa"
          placeholder="Pesquisar filmes..."
          size="xl"
          class="w-4xl"
          variant="subtle"
          color="primary"
        />
        <UButton
          type="submit"
          label="Pesquisar"
          icon="solar:magnifer-linear"
          color="primary"
          variant="subtle"
          size="xl"
        />
      </div>
    </UForm>
    <FilmeCard
      v-for="item in filmes"
      :key="item.imdbID"
      class="hover:scale-104 transition-all duration-200"
      :filme="item"
    />
  </div>
</template>
