import { defineUserConfig } from "vuepress";
import type { DefaultThemeOptions } from "vuepress";
const { path } = require('@vuepress/utils')
const Async = [
  {
    text: "useRequest",
    link: "/composition/Async/useRequest/",
  },
  {
    text: "useAsync",
    link: "/composition/Async/useAsync/",
  },
  {
    text: "useWaitTime",
    link: "/composition/Async/useWaitTime/"
  }
]
const Element = [
  {
    text: "useSize",
    link: "/composition/Element/useSize/",
  },
  {
    text: "useInViewport",
    link: "/composition/Element/useInViewport/",
  },
  {
    text: 'useClickAway',
    link: '/composition/Element/useClickAway/'
  },
  {
    text: 'useAwaitDom',
    link: '/composition/Element/useAwaitDom'
  },
  {
    text: 'useFullscreen',
    link: '/composition/Element/useFullscreen/'
  },
  {
    text: 'useHover',
    link: '/composition/Element/useHover/'
  }
]
const Effect = [
  {
    text: 'useClipboard',
    link: "/composition/Effect/useClipboard/"
  },
  {
    text: 'useDebounceFn',
    link: '/composition/Effect/useDebounceFn/'
  },
  {
    text: 'useDownloader',
    link: '/composition/Effect/useDownloader/'
  },
  {
    text: 'useEffect',
    link: '/composition/Effect/useEffect/'
  },
  {
    text: 'useEventBus',
    link: '/composition/Effect/useEventBus'
  },
  {
    text: 'useKeyPress',
    link: '/composition/Effect/useKeyPress/'
  },
  {
    text: 'usePermission',
    link: '/composition/Effect/usePermission/'
  },
  {
    text: 'useThrottleFn',
    link: '/composition/Effect/useThrottleFn/'
  },
  {
    text: "useTitle",
    link: "/composition/Effect/useTitle/",
  },
  {
    text: "useVModel",
    link: "/composition/Effect/useModel/",
  }
]
const children = [
  {
    text: 'Async',
    children: Async
  },
  {
    text: 'Element',
    children: Element
  },
  {
    text: 'Effect',
    children: Effect
  }
];
export default defineUserConfig<DefaultThemeOptions>({
  lang: "en-CN",
  base: "/composition/",
  title: "VueZApi",
  description: "Vue3的compositionApi's",
  alias: {
    '@': path.resolve(__dirname, '../../'),
    '@lib': path.resolve(__dirname, '../../lib/'),
  },
  themeConfig: {
    logo: "/images/logo.jpg",
    navbar: [
      {
        text: "指南",
        link: "/guide/",
      },
      {
        text: "compositionApi",
        children: children,
      },
      {
        text: "GitHub",
        link: 'https://github.com/phpjavac/composition'
      }
    ],
    sidebar: [
      {
        text: "指南",
        link: "/guide/",
      },
      {
        text: "compositionApi",
        children: children,
      }
    ],
  },
  plugins: [
    [
      '@vuepress/plugin-search',
      {
        locales: {
          '/': {
            placeholder: '请输入内容',
          },
          '/zh/': {
            placeholder: '请输入内容',
          },
        },
        maxSuggestions: 10, // 指定搜索结果的最大条数-5
      },
    ],
    [
      '@vuepress/register-components',
      {
        componentsDir: path.resolve(__dirname, './components'),
      },
    ],
  ],
  markdown: {
    importCode: { // 在文档中直接导入源码
      handleImportPath(importPath) {
        return importPath.replace('@', path.resolve(__dirname, '../../'))
      }
    }
  },
});
