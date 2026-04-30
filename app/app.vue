<script setup>
useHead({
  meta: [
    { name: 'viewport', content: 'width=device-width, initial-scale=1' }
  ],
  link: [
    { rel: 'icon', href: '/favicon.ico' }
  ],
  htmlAttrs: {
    lang: 'pt-br'
  }
})

const title = 'HomeTv'
const description = 'O lar do gerenciamento de filmes e séries'

useSeoMeta({
  title,
  description,
  ogTitle: title,
  ogDescription: description,
  ogImage: '/hometv.png'
})
</script>

<template>
  <UApp>
    <UHeader>
      <template #left>
        <NuxtLink to="/">
          <div class="flex items-center gap-2">
            <NuxtImg
              src="/hometv.png"
              alt="HomeTv"
              class="w-auto h-20 shrink-0"
            />
            <div>
              <h1 class="text-xl font-bold">HomeTv</h1>
              <p class="text-sm text-muted sm:block hidden">O lar do gerenciamento de filmes e séries</p>
            </div>
          </div>
        </NuxtLink>

        <TemplateMenu />
      </template>

      <template #right>
        <UColorModeButton />

        <UButton
          to="https://github.com/JoaoPedro77"
          target="_blank"
          icon="i-simple-icons-github"
          aria-label="GitHub"
          color="neutral"
          variant="ghost"
        />
      </template>
    </UHeader>

    <UMain>
      <NuxtPage />
    </UMain>

    <USeparator
      :avatar="{
        src: '/hometv.png',
        loading: 'lazy'
      }"
    />

    <UFooter>
      <template #left>
        <p class="text-sm text-muted">
          HomeTv • © {{ new Date().getFullYear() }}
        </p>
      </template>

      <template #right>
        <UButton
          to="https://github.com/JoaoPedro77"
          target="_blank"
          icon="i-simple-icons-github"
          aria-label="GitHub"
          color="neutral"
          variant="ghost"
        />
      </template>
    </UFooter>
  </UApp>
</template>
