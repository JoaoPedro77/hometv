<script setup lang="ts">
interface Props {
  titulo: string
}

const { titulo } = defineProps<Props>()
</script>

<template>
  <div class="flex items-center gap-3">
    <h1 class="text-3xl font-bold px-3 whitespace-nowrap">
      {{ titulo }}
    </h1>
    <USeparator class="full" />
  </div>
</template>
