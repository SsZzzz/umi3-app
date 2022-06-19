import { defineConfig } from 'umi';

export default defineConfig({
  base: '/base', // 路由前缀
  title: 'title', // 页面标题
  // favicon: '/rocket.png', // 标签页图标
  hash: true,
  locale: {
    default: 'zh-CN',
    antd: true,
    title: true,
    baseNavigator: true,
    baseSeparator: '-',
  },
  dva: {
    hmr: true,
    immer: true,
  },
  nodeModulesTransform: {
    type: 'none',
  },
  fastRefresh: {},
  routes: [
    {
      path: '/',
      component: '@/layout',
      routes: [
        { path: '/', redirect: '/home' },
        { path: '/home', component: '@/pages/home' },
        { path: '/404', component: '@/pages/404', title: '页面不存在' },
      ],
    },
  ],
});
