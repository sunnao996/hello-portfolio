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
    <UPageColumns>
      <UMarquee
        orientation="vertical"
        class="max-h-[400px]"
        pause-on-hover
      >
        <UIcon
          v-for="(item, index) in page.skills.items.backend"
          :key="index"
          :name="item"
          class="size-10 shrink-0"
        />
      </UMarquee>
      <UMarquee
        orientation="vertical"
        class="max-h-[400px]"
        pause-on-hover
      >
        <UIcon
          v-for="(item, index) in page.skills.items.frontend"
          :key="index"
          :name="item"
          class="size-10 shrink-0"
        />
      </UMarquee>
      <UMarquee
        orientation="vertical"
        class="max-h-[400px]"
        pause-on-hover
      >
        <UIcon
          v-for="(item, index) in page.skills.items.other"
          :key="index"
          :name="item"
          class="size-10 shrink-0"
        />
      </UMarquee>
    </UPageColumns>
  </UPageSection>
</template>
