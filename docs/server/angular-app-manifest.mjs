
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/test/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "redirectTo": "/test/home",
    "route": "/test"
  },
  {
    "renderMode": 2,
    "route": "/test/home"
  },
  {
    "renderMode": 2,
    "route": "/test/about"
  },
  {
    "renderMode": 2,
    "route": "/test/portfolio"
  },
  {
    "renderMode": 2,
    "route": "/test/contact"
  },
  {
    "renderMode": 2,
    "route": "/test/**"
  }
],
  assets: {
    'index.csr.html': {size: 6002, hash: 'c0b894cf328bf4fcd253cbf72357dbda5e4ad703b5a38baa0446f4ce3d48b7d5', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1079, hash: 'b8af5d869daccce2027fcbc9603e85d9f2fd67d620ae730ca40bbdd703379a8b', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'about/index.html': {size: 18275, hash: 'bd4ab79c847bfe7a2c7613df89765344c04d4a1c225b57b67abb1521d1d2451c', text: () => import('./assets-chunks/about_index_html.mjs').then(m => m.default)},
    'home/index.html': {size: 20315, hash: '2853467c6c5742d5b0f752b1eb96a01661941439615e47219c5dd915b18b6075', text: () => import('./assets-chunks/home_index_html.mjs').then(m => m.default)},
    'contact/index.html': {size: 24863, hash: '13ed224be37dcfd6f51b814cf46ddc6a7467e968437bc620fc53c7a0146910fa', text: () => import('./assets-chunks/contact_index_html.mjs').then(m => m.default)},
    'portfolio/index.html': {size: 25846, hash: '2c222f472c641e8cd68cafdd3091fbef4ef589cee805e122b01a24e7e844bcfa', text: () => import('./assets-chunks/portfolio_index_html.mjs').then(m => m.default)},
    'styles-DUCEDMTM.css': {size: 305940, hash: 'W0xnh5Fepc8', text: () => import('./assets-chunks/styles-DUCEDMTM_css.mjs').then(m => m.default)}
  },
};
