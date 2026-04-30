<script setup lang="ts">
import type { Filme } from '~/types'

const store = useListaStore()

const props = defineProps<{
  filme: Filme
}>()

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
    <UPageCard
      variant="soft"
      class="m-2"
    >
      <template #body>
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
    </UPageCard>
  </div>
</template>
