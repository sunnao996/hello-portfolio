<script setup lang="ts">
import type { IndexCollectionItem } from '@nuxt/content'

defineProps<{
  page: IndexCollectionItem
}>()
</script>

<template>
  <UPageSection
    :title="page.skills.title"
    :ui="{
      container: 'px-0 !pt-0 sm:gap-6 lg:gap-8',
      title: 'text-center text-xl sm:text-xl lg:text-2xl font-medium'
    }"
  >
    <UPageGrid>
      <UPageCard
        v-for="(card, index) in page.skills.items"
        :key="index"
        v-bind="card"
      />
    </UPageGrid>
  </UPageSection>
</template>
