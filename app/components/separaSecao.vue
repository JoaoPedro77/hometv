<script setup lang="ts">
defineProps<{
  titulo: string
}>()
</script>

<template>
  <div class="flex items-center gap-3">
    <h1 class="text-3xl font-bold px-3 sm:whitespace-nowrap">
      {{ titulo }}
    </h1>
    <USeparator class="full" />
  </div>
</template>
