import { resolve } from 'path';

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
    }],
  ],
  alias: {
    "@": resolve(__dirname, './src'),
  },
  proxy: {
    '/dev': {
      target: 'https://08ad1pao69.execute-api.us-east-1.amazonaws.com',
      changeOrigin: true,
    },
  },
};
