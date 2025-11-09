// plugins/amap.client.ts
import AMapLoader from '@amap/amap-jsapi-loader'

export default defineNuxtPlugin(async () => {
  // 配置安全密钥（必填）
  window._AMapSecurityConfig = {
    securityJsCode: 'e8c77e203890b5799e04e7e157b7384c'
  }

  const AMap = await AMapLoader.load({
    key: '5b53c985ad692c90d9f43383cb1fa07d',
    version: '2.0',
    plugins: ['AMap.Marker', 'AMap.Geolocation']
  })

  return {
    provide: {
      AMap
    }
  }
})
