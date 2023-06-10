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
    let o = {}
    const a = (e) => s(e, r),
      f = { module: { uri: r }, exports: o, require: a }
    i[r] = Promise.all(n.map((e) => f[e] || a(e))).then((e) => (c(...e), o))
  }
}
define(['./workbox-c2058018'], function (e) {
  'use strict'
  self.skipWaiting(),
    e.clientsClaim(),
    e.precacheAndRoute(
      [
        { url: 'assets/index.16b99297.js', revision: null },
        { url: 'assets/index.c1cd0f0c.css', revision: null },
        { url: 'index.html', revision: 'd0a0f2c94371ecf540b0d631634ac4d2' },
        { url: 'List.html', revision: 'd348b18ef6bf99170282815624ca14ae' },
        { url: 'loading/loading.css', revision: '15b729c815adfee6048822901e14d96f' },
        { url: 'loading/loading.min.css', revision: '545e4423de4c59bc4303fc592da53790' },
        { url: 'registerSW.js', revision: '402b66900e731ca748771b6fc5e7a068' },
        { url: 'images/icon/48.png', revision: 'bdeb2b915105f31570a75f04717d4ec3' },
        { url: 'images/icon/72.png', revision: '92b2f2a7e6502b7f741829fb8f5d9c3a' },
        { url: 'images/icon/96.png', revision: 'b9f82b92026c095b1beefe14b5db782a' },
        { url: 'images/icon/128.png', revision: 'db59290018756c0b56353921e36b2700' },
        { url: 'images/icon/144.png', revision: '25a39aeb3e2dc916c168aacf4a128bed' },
        { url: 'images/icon/192.png', revision: '083848b8070ddaa1484564bb6f8876f3' },
        { url: 'images/icon/512.png', revision: '61317460c2ca3ddcce7067f766f2daa3' },
        { url: 'manifest.webmanifest', revision: 'bb52d41398482633eb0afd6ce710b19f' }
      ],
      {}
    ),
    e.cleanupOutdatedCaches(),
    e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL('index.html'))),
    e.registerRoute(/(.*?)\.(js|css|woff2|woff|ttf)/, new e.CacheFirst({ cacheName: 'js-css-cache', plugins: [] }), 'GET'),
    e.registerRoute(/(.*?)\.(png|jpe?g|svg|gif|bmp|psd|tiff|tga|eps)/, new e.CacheFirst({ cacheName: 'image-cache', plugins: [] }), 'GET')
})
