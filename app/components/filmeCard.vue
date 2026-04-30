<script setup lang="ts">
import type { Filme } from '~/types'

const props = defineProps<{
  filme: Filme
}>()

const store = useListaStore()

const nota = computed({
  get: () => props.filme.Nota,
  set: val => store.alterarNota(props.filme.imdbID, val!)
})

const estado = computed({
  get: () => props.filme.Estado,
  set: val => store.alterarEstado(props.filme.imdbID, val!)
})
</script>

<template>
  <div>
    <UModal>
      <UCard
        variant="soft"
        class="m-2"
      >
        <template #default>
          <NuxtImg
            :src="filme.Poster"
            alt="imagem de capa"
            placeholder="/placeholder.png"
            class="w-full  rounded-lg"
            loading="lazy"
          />
          <div />
        </template>
        <template #footer>
          <div class="flex flex-col justify-center items-center gap-2">
            <h2 class="text-lg font-bold">
              <UIcon
                v-if="store.estaNaLista(filme.imdbID)"
                name="solar:stars-bold-duotone"
                class="text-yellow-500"
              /> {{ filme.Title }}
            </h2>
          </div>
        </template>
      </UCard>

      <template #content>
        <div class="flex flex-row justify-center items-center gap-2">
          <NuxtImg
            :src="filme.Poster"
            alt="imagem de capa"
            placeholder="/placeholder.png"
            class="w-30  rounded-lg"
            loading="lazy"
          />
          <div class="flex flex-col justify-center items-start gap-2">
            <h2 class="text-md font-bold">
              {{ filme.Title }}
            </h2>
            <div class="flex items-center gap-2">
              <UIcon name="solar:calendar-bold-duotone" />
              <span class="text-sm text-white/60">{{ filme.Year }}</span>
            </div>
            <USeparator />
            <div class="flex items-center gap-2">
              <UIcon name="solar:text-bold-duotone" />
              <span class="text-sm text-white/60">Sinopse: {{ filme.Plot }}</span>
            </div>
            <USeparator />
            <div class="flex items-center gap-2">
              <UIcon name="solar:medal-ribbons-star-bold-duotone" />
              Nota:
              <USelect
                v-model="nota"
                :items="store.possiveisNotas"
              />
            </div>
            <div class="flex items-center gap-2">
              <UIcon name="solar:tv-bold-duotone" />
              Estado:
              <USelect
                v-model="estado"
                :items="store.possiveisEstados"
              />
            </div>
          </div>
        </div>
      </template>
    </UModal>
  </div>
</template>
