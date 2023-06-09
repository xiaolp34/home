if (!self.define) {
  let e,
    i = {}
  const s = (s, n) => (
    (s = new URL(s + '.js', n).href),
    i[s] ||
      new Promise((i) => {
        if ('document' in self) {
          const e = document.createElement('script')
          ;(e.src = s), (e.onload = i), document.head.appendChild(e)
        } else (e = s), importScripts(s), i()
      }).then(() => {
        let e = i[s]
        if (!e) throw new Error(`Module ${s} didn’t register its module`)
        return e
      })
  )
  self.define = (n, c) => {
    const r = e || ('document' in self ? document.currentScript.src : '') || location.href
    if (i[r]) return
    let a = {}
    const o = (e) => s(e, r),
      d = { module: { uri: r }, exports: a, require: o }
    i[r] = Promise.all(n.map((e) => d[e] || o(e))).then((e) => (c(...e), a))
  }
}
define(['./workbox-c2058018'], function (e) {
  'use strict'
  self.skipWaiting(),
    e.clientsClaim(),
    e.precacheAndRoute(
      [
        { url: 'assets/index.2620936b.js', revision: null },
        { url: 'assets/index.57a15da7.css', revision: null },
        { url: 'index.html', revision: '68ebf1a8aad0257dcf8a2e22ee98ca14' },
        { url: 'List.html', revision: '9eec20dc4e9dc3bc6b1a87890981b539' },
        { url: 'loading/loading.css', revision: '15b729c815adfee6048822901e14d96f' },
        { url: 'loading/loading.min.css', revision: '545e4423de4c59bc4303fc592da53790' },
        { url: 'registerSW.js', revision: '402b66900e731ca748771b6fc5e7a068' },
        { url: 'images/icon/48.png', revision: 'bdeb2b915105f31570a75f04717d4ec3' },
        { url: 'images/icon/72.png', revision: '92b2f2a7e6502b7f741829fb8f5d9c3a' },
        { url: 'images/icon/96.png', revision: 'b9f82b92026c095b1beefe14b5db782a' },
        { url: 'images/icon/128.png', revision: 'db59290018756c0b56353921e36b2700' },
        { url: 'images/icon/192.png', revision: '083848b8070ddaa1484564bb6f8876f3' },
        { url: 'images/icon/512.png', revision: '61317460c2ca3ddcce7067f766f2daa3' },
        { url: './images/icon/144.png', revision: '25a39aeb3e2dc916c168aacf4a128bed' },
        { url: 'manifest.webmanifest', revision: '2d66d9bd0bdfde21c98a0fdd1d0e9b8f' }
      ],
      {}
    ),
    e.cleanupOutdatedCaches(),
    e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL('index.html'))),
    e.registerRoute(/(.*?)\.(js|css|woff2|woff|ttf)/, new e.CacheFirst({ cacheName: 'js-css-cache', plugins: [] }), 'GET'),
    e.registerRoute(/(.*?)\.(png|jpe?g|svg|gif|bmp|psd|tiff|tga|eps)/, new e.CacheFirst({ cacheName: 'image-cache', plugins: [] }), 'GET')
})
