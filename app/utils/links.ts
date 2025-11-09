import type { NavigationMenuItem } from '@nuxt/ui'

export const navLinks: NavigationMenuItem[] = [
  {
    label: '首页',
    icon: 'i-lucide-home',
    to: '/'
  },
  {
    label: '我的项目',
    icon: 'i-lucide-folder',
    to: '/projects'
  },
  {
    label: '我的博客',
    icon: 'i-lucide-file-text',
    to: '/blog'
  },
  {
    label: '关于作者',
    icon: 'i-lucide-user',
    to: '/about'
  }
]
