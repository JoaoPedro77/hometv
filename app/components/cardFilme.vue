<script setup lang="ts">
interface Props {
  imagem?: string
  titulo: string
}

const { imagem, titulo } = defineProps<Props>()
</script>

<template>
  <div>
    <UCard
      variant="soft"
      class="m-2"
    >
      <template #default>
        <NuxtImg
          :src="imagem"
          alt="imagem de capa"
          placeholder="https://fastly.picsum.photos/id/237/200/300.jpg?hmac=TmmQSbShHz9CdQm0NkEjx1Dyh_Y984R9LpNrpvH2D_U"
          class="w-full  rounded-lg"
          loading="lazy"
        />
        <div />
      </template>
      <template #footer>
        <div class="flex flex-col justify-center items-center gap-2">
          <h2 class="text-lg font-bold">
            {{ titulo }}
          </h2>
          <div class="flex justify-end gap-2">
            <UButton
              label="Detalhes"
              trailing-icon="solar:eye-bold-duotone"
              block
            />
            <UButton
              trailing-icon="solar:bookmark-bold-duotone"
            />
          </div>
        </div>
      </template>
    </UCard>
  </div>
</template>
