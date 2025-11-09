<script setup lang="ts">
import type { IndexCollectionItem } from '@nuxt/content'

const { $AMap } = useNuxtApp()
const color = useColorMode()

// eslint-disable-next-line @typescript-eslint/no-explicit-any
let map: any = null

onMounted(async () => {
  map = new $AMap.Map('map-container', {
    zoom: 5,
    center: [120.023164, 30.28337],
    mapStyle: color.value === 'dark' ? 'amap://styles/grey' : 'amap://styles/macaron'
  })

  const marker = new $AMap.Marker({
    position: [120.023164, 30.28337],
    title: 'marker'
  })
  map.add(marker)

  // 确保地图内部元素应用圆角
  setTimeout(() => {
    const container = document.getElementById('map-container')
    if (container) {
      const canvas = container.querySelectorAll('canvas')
      const layers = container.querySelectorAll('.amap-layers, .amap-maps')
      canvas.forEach((el) => {
        el.style.borderRadius = '0.5rem'
      })
      layers.forEach((el) => {
        (el as HTMLElement).style.borderRadius = '0.5rem'
      })
    }
  }, 100)
})

// 监听颜色模式变化
watch(() => color.value, (newColor) => {
  if (map) {
    const mapStyle = newColor === 'dark' ? 'amap://styles/grey' : 'amap://styles/macaron'
    map.setMapStyle(mapStyle)
  }
})

defineProps<{
  page: IndexCollectionItem
}>()
</script>

<template>
  <UPageSection
    :ui="{
      container: 'px-0 !pt-0 sm:gap-6 lg:gap-8',
      title: 'text-center text-xl sm:text-xl lg:text-2xl font-medium',
      description: 'text-center mt-2 text-sm sm:text-md lg:text-sm text-muted'
    }"
  >
    <template #title>
      <Motion
        :initial="{
          scale: 1.1,
          opacity: 0,
          filter: 'blur(20px)'
        }"
        :animate="{
          scale: 1,
          opacity: 1,
          filter: 'blur(0px)'
        }"
        :transition="{
          duration: 0.6,
          delay: 0.1
        }"
      >
        {{ page.map.title }}
      </Motion>
    </template>

    <template #description>
      <Motion
        :initial="{
          scale: 1.1,
          opacity: 0,
          filter: 'blur(20px)'
        }"
        :animate="{
          scale: 1,
          opacity: 1,
          filter: 'blur(0px)'
        }"
        :transition="{
          duration: 0.6,
          delay: 0.2
        }"
      >
        {{ page.map.description }}
      </Motion>
    </template>

    <Motion
      :initial="{
        scale: 1.05,
        opacity: 0,
        filter: 'blur(20px)'
      }"
      :animate="{
        scale: 1,
        opacity: 1,
        filter: 'blur(0px)'
      }"
      :transition="{
        duration: 0.8,
        delay: 0.4
      }"
    >
      <!-- eslint-disable -->
      <div
        id="map-container"
        class="w-full h-[400px] rounded-md overflow-hidden"
      >
      </div>
    </Motion>
  </UPageSection>
</template>
