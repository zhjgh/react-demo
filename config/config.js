import { resolve } from 'path';
import pageRoutes from './router.config';

export default {
  singular: true,
  theme: {},
  plugins: [
    ['umi-plugin-react', {
      antd: true,
      dva: true,
      locale: {
        enable: true,
      },
      polyfills: ['ie9'],
      dynamicImport: {
        webpackChunkName: true,
        // loadingComponent: './component/PageLoading',
      },
      title: 'Ant Design Pro',
    }],
  ],
  alias: {
    "@": resolve(__dirname, './src'),
    '@/util': resolve(__dirname, './src/util/'),
    '@/service': resolve(__dirname, './src/service/'),
    '@/component': resolve(__dirname, './src/component/'),
    '@/common': resolve(__dirname, './src/common/'),
    '@/service': resolve(__dirname, './src/service/'),
  },
  // 路由配置
  routes: pageRoutes,
  proxy: {
    "/api": {
      "target": "https://api.douban.com/",
      "changeOrigin": true,
      "pathRewrite": { "^/api" : "" }
    }
  },
};
