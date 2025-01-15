
export default {
  basePath: '/test/',
  entryPoints: {
    '': () => import('./main.server.mjs')
  },
};
