<script setup lang="ts">
import type { IndexCollectionItem } from '@nuxt/content'

defineProps<{
  page: IndexCollectionItem
}>()
</script>

<template>
  <UPageSection
    :title="'我希望别人对我的评价'"
    :ui="{
      container: 'px-0 !pt-0 sm:gap-6 lg:gap-8',
      title: 'text-center text-xl sm:text-xl lg:text-2xl font-medium'
    }"
  >
    <UMarquee
      pause-on-hover
      :overlay="false"
      :ui="{ root: '[--gap:--spacing(4)]', content: 'w-auto py-1' }"
    >
      <UPageCard
        v-for="(testimonial, index) in page.testimonials"
        :key="index"
        variant="subtle"
        :description="testimonial.quote"
        :ui="{
          description: 'before:content-[open-quote] after:content-[close-quote] line-clamp-3'
        }"
        class="w-64 shrink-0"
      />
    </UMarquee>
    <UMarquee
      pause-on-hover
      reverse
      :overlay="false"
      :ui="{ root: '[--gap:--spacing(4)]', content: 'w-auto py-1' }"
    >
      <UPageCard
        v-for="(testimonial, index) in page.testimonials"
        :key="index"
        variant="subtle"
        :description="testimonial.quote"
        :ui="{
          description: 'before:content-[open-quote] after:content-[close-quote] line-clamp-3'
        }"
        class="w-64 shrink-0"
      />
    </UMarquee>
  </UPageSection>
</template>
