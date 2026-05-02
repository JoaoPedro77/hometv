<script setup lang="ts">
import type { Filme } from '~/types'

const props = defineProps<{
  filme: Filme
}>()

const store = useListaStore()
const abriuModal = ref(false)

const { data: detalhesFilme } = await useFetch('https://www.omdbapi.com/', {
  query: {
    apikey: 'ea31fccd',
    i: props.filme.imdbID
  },
  watch: [abriuModal],
  immediate: false,
  lazy: true
}) as { data: Ref<Filme> }

const nota = ref(store.lista.find((f: Filme) => f.imdbID === props.filme.imdbID)?.nota)

const estado = ref(store.lista.find((f: Filme) => f.imdbID === props.filme.imdbID)?.estado)
</script>

<template>
  <div>
    <UModal v-model:open="abriuModal">
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
        <div class="p-5 flex flex-col justify-center items-center gap-2">
          <div class="pb-5 flex flex-col sm:flex-row w-full justify-center items-center gap-2">
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
              <div class="flex gap-2">
                <UIcon
                  name="solar:info-circle-bold"
                  class="shrink-0"
                />
                <span class="text-sm text-white/60"> {{ detalhesFilme?.Plot }}</span>
              </div>
              <USeparator />
              <div class="flex items-center gap-2">
                <UIcon name="solar:medal-ribbons-star-bold-duotone" />
                Nota:
                <USelect
                  v-model="nota"
                  :items="store.possiveisNotas"
                  :default-value="store.possiveisNotas[0]"
                />
              </div>
              <div class="flex items-center gap-2">
                <UIcon name="solar:tv-bold-duotone" />
                Estado:
                <USelect
                  v-model="estado"
                  :items="store.possiveisEstados"
                  :default-value="store.possiveisEstados[0]?.value"
                />
              </div>
            </div>
          </div>
          <div class="flex justify-center items-center gap-2">
            <UButton
              v-if="!store.estaNaLista(filme.imdbID)"
              label="Adicionar"
              icon="solar:stars-bold-duotone"
              color="primary"
              variant="soft"
              @click="store.add(filme, estado || 'quero_ver', nota || '-'); abriuModal = false"
            />
            <UButton
              v-else
              label="Alterar"
              icon="solar:pen-2-bold-duotone"
              color="primary"
              variant="soft"
              @click="store.alterarEstado(filme.imdbID, estado || 'quero_ver'); store.alterarNota(filme.imdbID, nota || '-'); abriuModal = false"
            />
            <UButton
              label="Cancelar"
              color="neutral"
              variant="subtle"
              icon="solar:close-circle-line-duotone"
              @click="abriuModal = false"
            />
          </div>
        </div>
      </template>
    </UModal>
  </div>
</template>
