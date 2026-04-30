<script setup lang="ts">
const store = useListaStore()
</script>

<template>
  <div class="m-4">
    <h1 class="text-4xl font-bold flex items-center justify-center gap-2 mb-8">
      <UIcon name="solar:clipboard-list-bold-duotone" />
      Minha Lista
    </h1>
    <div
      v-for="(filme, index) in store.lista"
      :key="index"
      class="my-10 mx-4 space-y-3"
    >
      <ListaCard
        class="hover:scale-101 transition-all duration-200"
        :filme="filme"
      />
    </div>
  </div>
</template>
