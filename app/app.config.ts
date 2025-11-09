export default defineAppConfig({
  global: {
    picture: {
      dark: 'https://hello-portfolio.oss-cn-hangzhou.aliyuncs.com/global/girl-8880144.svg',
      light: 'https://hello-portfolio.oss-cn-hangzhou.aliyuncs.com/global/girl-8880144.svg',
      alt: '头像'
    },
    meetingLink: 'https://cal.com/',
    email: 'sunnao996@qq.com'
  },
  ui: {
    colors: {
      primary: 'blue',
      neutral: 'neutral'
    },
    pageHero: {
      slots: {
        container: 'py-18 sm:py-24 lg:py-32',
        title: 'mx-auto max-w-xl text-pretty text-3xl sm:text-4xl lg:text-5xl',
        description: 'mt-2 text-md mx-auto max-w-2xl text-pretty sm:text-md text-muted'
      }
    }
  },
  footer: {
    credits: `Built with 孙闹 • © ${new Date().getFullYear()}`,
    colorMode: false,
    links: [
      {
        'icon': 'i-simple-icons-github',
        'to': 'https://github.com/sunnao996',
        'target': '_blank',
        'aria-label': 'GitHub'
      },
      {
        'icon': 'i-simple-icons:gitee',
        'to': 'https://gitee.com/sunnao',
        'target': '_blank',
        'aria-label': 'Gitee'
      },
      {
        'icon': 'i-simple-icons:leetcode',
        'to': 'https://leetcode.cn/u/ou-er-de-zhong-er-shao-nian',
        'target': '_blank',
        'aria-label': 'LeetCode'
      }
    ]
  }
})
