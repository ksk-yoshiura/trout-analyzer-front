if (!self.define) { let e, s = {}; const i = (i, c) => { return (i = new URL(i + ".js", c).href, s[i] || new Promise((s => { if ("document" in self) { const e = document.createElement("script"); e.src = i, e.onload = s, document.head.appendChild(e) } else e = i, importScripts(i), s() })).then((() => { const e = s[i]; if (!e) throw new Error(`Module ${i} didn’t register its module`); return e }))) }; self.define = (c, n) => { const a = e || ("document" in self ? document.currentScript.src : "") || location.href; if (s[a]) return; const t = {}; const r = e => { return i(e, a) }, o = { module: { uri: a }, exports: t, require: r }; s[a] = Promise.all(c.map((e => { return o[e] || r(e) }))).then((e => { return (n(...e), t) })) } } define(["./workbox-5afaf374"], ((e) => { "use strict"; importScripts(), self.skipWaiting(), e.clientsClaim(), e.precacheAndRoute([{ url: "/_next/static/chunks/2074-10c6e251b72937f2.js", revision: "fpJ5GNQ2EI4bkEy8tk78R" }, { url: "/_next/static/chunks/3061-e9867f5ead88c169.js", revision: "fpJ5GNQ2EI4bkEy8tk78R" }, { url: "/_next/static/chunks/3158-6a93ac6e4976c67d.js", revision: "fpJ5GNQ2EI4bkEy8tk78R" }, { url: "/_next/static/chunks/3190-284e359174d048c2.js", revision: "fpJ5GNQ2EI4bkEy8tk78R" }, { url: "/_next/static/chunks/36bcf0ca-ed2633eb8e841724.js", revision: "fpJ5GNQ2EI4bkEy8tk78R" }, { url: "/_next/static/chunks/3863-ccba08f3071a4712.js", revision: "fpJ5GNQ2EI4bkEy8tk78R" }, { url: "/_next/static/chunks/5364-778fc0adee139ae4.js", revision: "fpJ5GNQ2EI4bkEy8tk78R" }, { url: "/_next/static/chunks/5535-bbfee8148e48940d.js", revision: "fpJ5GNQ2EI4bkEy8tk78R" }, { url: "/_next/static/chunks/5914-501798e6f7519ab0.js", revision: "fpJ5GNQ2EI4bkEy8tk78R" }, { url: "/_next/static/chunks/6541-2d1cc3d1677ba9d4.js", revision: "fpJ5GNQ2EI4bkEy8tk78R" }, { url: "/_next/static/chunks/7578-92fcb5cdad68eb67.js", revision: "fpJ5GNQ2EI4bkEy8tk78R" }, { url: "/_next/static/chunks/8243-c2ba139d2db1b4b9.js", revision: "fpJ5GNQ2EI4bkEy8tk78R" }, { url: "/_next/static/chunks/8609-6a2ce8e2a4292c0f.js", revision: "fpJ5GNQ2EI4bkEy8tk78R" }, { url: "/_next/static/chunks/8871-e7ca226c2c306987.js", revision: "fpJ5GNQ2EI4bkEy8tk78R" }, { url: "/_next/static/chunks/8971-ad8e3a695691d640.js", revision: "fpJ5GNQ2EI4bkEy8tk78R" }, { url: "/_next/static/chunks/9906-78fbc635e833ca7d.js", revision: "fpJ5GNQ2EI4bkEy8tk78R" }, { url: "/_next/static/chunks/framework-7d488969745094b0.js", revision: "fpJ5GNQ2EI4bkEy8tk78R" }, { url: "/_next/static/chunks/main-830be1cb1dfddd85.js", revision: "fpJ5GNQ2EI4bkEy8tk78R" }, { url: "/_next/static/chunks/pages/404-d53332c44db167b5.js", revision: "fpJ5GNQ2EI4bkEy8tk78R" }, { url: "/_next/static/chunks/pages/500-f2c1eff6aad205b0.js", revision: "fpJ5GNQ2EI4bkEy8tk78R" }, { url: "/_next/static/chunks/pages/_app-ebbc22b629100357.js", revision: "fpJ5GNQ2EI4bkEy8tk78R" }, { url: "/_next/static/chunks/pages/_error-25839e52160ad85d.js", revision: "fpJ5GNQ2EI4bkEy8tk78R" }, { url: "/_next/static/chunks/pages/fields-41ec069848dfc9d4.js", revision: "fpJ5GNQ2EI4bkEy8tk78R" }, { url: "/_next/static/chunks/pages/fields/create-3609ec70bd689d77.js", revision: "fpJ5GNQ2EI4bkEy8tk78R" }, { url: "/_next/static/chunks/pages/fields/edit/%5Bid%5D-8f9a3685e4df8445.js", revision: "fpJ5GNQ2EI4bkEy8tk78R" }, { url: "/_next/static/chunks/pages/index-b46c783837e399e3.js", revision: "fpJ5GNQ2EI4bkEy8tk78R" }, { url: "/_next/static/chunks/pages/lines-b27aa33575f5e755.js", revision: "fpJ5GNQ2EI4bkEy8tk78R" }, { url: "/_next/static/chunks/pages/lines/create-096956f104501872.js", revision: "fpJ5GNQ2EI4bkEy8tk78R" }, { url: "/_next/static/chunks/pages/lines/edit/%5Bid%5D-c93c1ec2da7b156d.js", revision: "fpJ5GNQ2EI4bkEy8tk78R" }, { url: "/_next/static/chunks/pages/login-205f4bddcf35d797.js", revision: "fpJ5GNQ2EI4bkEy8tk78R" }, { url: "/_next/static/chunks/pages/lures-d9fcdf0023d6baba.js", revision: "fpJ5GNQ2EI4bkEy8tk78R" }, { url: "/_next/static/chunks/pages/lures/create-912fef246e0119c2.js", revision: "fpJ5GNQ2EI4bkEy8tk78R" }, { url: "/_next/static/chunks/pages/lures/edit/%5Bid%5D-1bfe83ac7bfdfe26.js", revision: "fpJ5GNQ2EI4bkEy8tk78R" }, { url: "/_next/static/chunks/pages/preparation/field-adf7a15c04e64a96.js", revision: "fpJ5GNQ2EI4bkEy8tk78R" }, { url: "/_next/static/chunks/pages/preparation/tackle-8cc30ce2cec8cbe9.js", revision: "fpJ5GNQ2EI4bkEy8tk78R" }, { url: "/_next/static/chunks/pages/records/%5Brecord_id%5D/patterns/analysis-895e959f7100f2af.js", revision: "fpJ5GNQ2EI4bkEy8tk78R" }, { url: "/_next/static/chunks/pages/records/%5Brecord_id%5D/patterns/create-937fe1b1196c2c8b.js", revision: "fpJ5GNQ2EI4bkEy8tk78R" }, { url: "/_next/static/chunks/pages/records/%5Brecord_id%5D/patterns/edit/%5Bid%5D-c8de27c3c0113a4c.js", revision: "fpJ5GNQ2EI4bkEy8tk78R" }, { url: "/_next/static/chunks/pages/records/%5Brecord_id%5D/patterns/list-c8cde2934722448d.js", revision: "fpJ5GNQ2EI4bkEy8tk78R" }, { url: "/_next/static/chunks/pages/records/all-71deefc668e8c0c0.js", revision: "fpJ5GNQ2EI4bkEy8tk78R" }, { url: "/_next/static/chunks/pages/records/serial_register/%5Brecord_id%5D-469f496e2d9ddc78.js", revision: "fpJ5GNQ2EI4bkEy8tk78R" }, { url: "/_next/static/chunks/pages/reels-653a4164cc960078.js", revision: "fpJ5GNQ2EI4bkEy8tk78R" }, { url: "/_next/static/chunks/pages/reels/create-97244a78fe0a755a.js", revision: "fpJ5GNQ2EI4bkEy8tk78R" }, { url: "/_next/static/chunks/pages/reels/edit/%5Bid%5D-96e8f8ea421d9c5b.js", revision: "fpJ5GNQ2EI4bkEy8tk78R" }, { url: "/_next/static/chunks/pages/rods-3ac9fe8759431942.js", revision: "fpJ5GNQ2EI4bkEy8tk78R" }, { url: "/_next/static/chunks/pages/rods/create-5b03f5e497d1405c.js", revision: "fpJ5GNQ2EI4bkEy8tk78R" }, { url: "/_next/static/chunks/pages/rods/edit/%5Bid%5D-b97473d50f6d92f5.js", revision: "fpJ5GNQ2EI4bkEy8tk78R" }, { url: "/_next/static/chunks/pages/sign_up-9e8523eb95224b0a.js", revision: "fpJ5GNQ2EI4bkEy8tk78R" }, { url: "/_next/static/chunks/pages/tackles-3c6bf86b33727990.js", revision: "fpJ5GNQ2EI4bkEy8tk78R" }, { url: "/_next/static/chunks/pages/tackles/create-a1cd64605aaf7716.js", revision: "fpJ5GNQ2EI4bkEy8tk78R" }, { url: "/_next/static/chunks/pages/tackles/edit/%5Bid%5D-21702b51afd2e12a.js", revision: "fpJ5GNQ2EI4bkEy8tk78R" }, { url: "/_next/static/chunks/polyfills-5cd94c89d3acac5f.js", revision: "fpJ5GNQ2EI4bkEy8tk78R" }, { url: "/_next/static/chunks/webpack-da2034d2522c3231.js", revision: "fpJ5GNQ2EI4bkEy8tk78R" }, { url: "/_next/static/fpJ5GNQ2EI4bkEy8tk78R/_buildManifest.js", revision: "fpJ5GNQ2EI4bkEy8tk78R" }, { url: "/_next/static/fpJ5GNQ2EI4bkEy8tk78R/_middlewareManifest.js", revision: "fpJ5GNQ2EI4bkEy8tk78R" }, { url: "/_next/static/fpJ5GNQ2EI4bkEy8tk78R/_ssgManifest.js", revision: "fpJ5GNQ2EI4bkEy8tk78R" }, { url: "/android-chrome-128x128.png", revision: "0ff5d0c48d55799efb225b90f03238ac" }, { url: "/android-chrome-144x144.png", revision: "cd0b8f1dd1ff4905475c19ba8931439c" }, { url: "/android-chrome-152x152.png", revision: "92d3bba7f1a127ae62776b3a57f41061" }, { url: "/android-chrome-192x192.png", revision: "b6739e7ea521ac9a49892fbea0b290a8" }, { url: "/android-chrome-256x256.png", revision: "84d17930a614026854b6aee48bf735e4" }, { url: "/android-chrome-36x36.png", revision: "ec676634ad723503cf441a6fce50681e" }, { url: "/android-chrome-384x384.png", revision: "542cafcd6488b870d5cfdcac2af96377" }, { url: "/android-chrome-48x48.png", revision: "60aa022360933dd2248cb23a6ca740f7" }, { url: "/android-chrome-512x512.png", revision: "b78d8d0be1317907efe9c739f5313cff" }, { url: "/android-chrome-72x72.png", revision: "0bd9d5b6950c7c896668c9aa0888145c" }, { url: "/android-chrome-96x96.png", revision: "cca8303ecfd817d7073791e5bbc22082" }, { url: "/apple-touch-icon-114x114-precomposed.png", revision: "3a238202272b2d3590cd2b87e8c30791" }, { url: "/apple-touch-icon-114x114.png", revision: "3a238202272b2d3590cd2b87e8c30791" }, { url: "/apple-touch-icon-120x120-precomposed.png", revision: "a008768620833aeec50fd799ec4629e2" }, { url: "/apple-touch-icon-120x120.png", revision: "a008768620833aeec50fd799ec4629e2" }, { url: "/apple-touch-icon-144x144-precomposed.png", revision: "cd0b8f1dd1ff4905475c19ba8931439c" }, { url: "/apple-touch-icon-144x144.png", revision: "cd0b8f1dd1ff4905475c19ba8931439c" }, { url: "/apple-touch-icon-152x152-precomposed.png", revision: "92d3bba7f1a127ae62776b3a57f41061" }, { url: "/apple-touch-icon-152x152.png", revision: "92d3bba7f1a127ae62776b3a57f41061" }, { url: "/apple-touch-icon-180x180-precomposed.png", revision: "87468ace474457b73ea670f30d813dd2" }, { url: "/apple-touch-icon-180x180.png", revision: "87468ace474457b73ea670f30d813dd2" }, { url: "/apple-touch-icon-57x57-precomposed.png", revision: "87f4d61e40545aa43c18b651394633b6" }, { url: "/apple-touch-icon-57x57.png", revision: "87f4d61e40545aa43c18b651394633b6" }, { url: "/apple-touch-icon-60x60-precomposed.png", revision: "2f8e3d70f3a1e39d0507cd82635360e5" }, { url: "/apple-touch-icon-60x60.png", revision: "2f8e3d70f3a1e39d0507cd82635360e5" }, { url: "/apple-touch-icon-72x72-precomposed.png", revision: "0bd9d5b6950c7c896668c9aa0888145c" }, { url: "/apple-touch-icon-72x72.png", revision: "0bd9d5b6950c7c896668c9aa0888145c" }, { url: "/apple-touch-icon-76x76-precomposed.png", revision: "5ec49adb7e2c970c3311697bbf82510e" }, { url: "/apple-touch-icon-76x76.png", revision: "5ec49adb7e2c970c3311697bbf82510e" }, { url: "/apple-touch-icon-precomposed.png", revision: "87468ace474457b73ea670f30d813dd2" }, { url: "/apple-touch-icon.png", revision: "87468ace474457b73ea670f30d813dd2" }, { url: "/favicon.ico", revision: "5ded3517bfd18ffd51e6a1ba7bfdf80c" }, { url: "/icon-128x128.png", revision: "0ff5d0c48d55799efb225b90f03238ac" }, { url: "/icon-144x144.png", revision: "cd0b8f1dd1ff4905475c19ba8931439c" }, { url: "/icon-152x152.png", revision: "92d3bba7f1a127ae62776b3a57f41061" }, { url: "/icon-160x160.png", revision: "98486e6a7cb2a1dab8fb4a06067dab14" }, { url: "/icon-16x16.png", revision: "b3ad82b9fa51450767fedc8600318854" }, { url: "/icon-192x192.png", revision: "b6739e7ea521ac9a49892fbea0b290a8" }, { url: "/icon-196x196.png", revision: "de9cf60d4dd5eafba544280ffc08162f" }, { url: "/icon-24x24.png", revision: "2b00eddb3d2ab94355495fa224fbb719" }, { url: "/icon-256x256.png", revision: "84d17930a614026854b6aee48bf735e4" }, { url: "/icon-32x32.png", revision: "d01a3c97338b3210f008b4e1e51f9dfb" }, { url: "/icon-36x36.png", revision: "ec676634ad723503cf441a6fce50681e" }, { url: "/icon-384x384.png", revision: "542cafcd6488b870d5cfdcac2af96377" }, { url: "/icon-48x48.png", revision: "60aa022360933dd2248cb23a6ca740f7" }, { url: "/icon-512x512.png", revision: "b78d8d0be1317907efe9c739f5313cff" }, { url: "/icon-72x72.png", revision: "0bd9d5b6950c7c896668c9aa0888145c" }, { url: "/icon-96x96.png", revision: "cca8303ecfd817d7073791e5bbc22082" }, { url: "/logo/logo.png", revision: "82f1b1ba74f6b60881aeab2086490376" }, { url: "/logo/logo_second.png", revision: "7130b3ff985783c28cd92737e3dca43d" }, { url: "/logo/logo_teal.png", revision: "f24908968c6e534b231035f1086c9bf6" }, { url: "/manifest.json", revision: "7ff8e93787448e86ed2d5477694c8214" }, { url: "/no_image.png", revision: "f3ff3e3a2171d2f35b6ed3bd3994b362" }, { url: "/site-tile-150x150.png", revision: "4fa6620a7f15ed80837f3a0f64ab8f89" }, { url: "/site-tile-310x150.png", revision: "b6410c0bc389143b8c49dcd1240d8bbb" }, { url: "/site-tile-310x310.png", revision: "ba41acbe9772a1122e98e8ce13509093" }, { url: "/site-tile-70x70.png", revision: "89c1fa9afcde7bfc453a9386d467d730" }, { url: "/vercel.svg", revision: "4b4f1876502eb6721764637fe5c41702" }], { ignoreURLParametersMatching: [] }), e.cleanupOutdatedCaches(), e.registerRoute("/", new e.NetworkFirst({ cacheName: "start-url", plugins: [{ cacheWillUpdate: async ({ request: e, response: s, event: i, state: c }) => { return s && "opaqueredirect" === s.type ? new Response(s.body, { status: 200, statusText: "OK", headers: s.headers }) : s } }] }), "GET"), e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i, new e.CacheFirst({ cacheName: "google-fonts-webfonts", plugins: [new e.ExpirationPlugin({ maxEntries: 4, maxAgeSeconds: 31536e3 })] }), "GET"), e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i, new e.StaleWhileRevalidate({ cacheName: "google-fonts-stylesheets", plugins: [new e.ExpirationPlugin({ maxEntries: 4, maxAgeSeconds: 604800 })] }), "GET"), e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i, new e.StaleWhileRevalidate({ cacheName: "static-font-assets", plugins: [new e.ExpirationPlugin({ maxEntries: 4, maxAgeSeconds: 604800 })] }), "GET"), e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i, new e.StaleWhileRevalidate({ cacheName: "static-image-assets", plugins: [new e.ExpirationPlugin({ maxEntries: 64, maxAgeSeconds: 86400 })] }), "GET"), e.registerRoute(/\/_next\/image\?url=.+$/i, new e.StaleWhileRevalidate({ cacheName: "next-image", plugins: [new e.ExpirationPlugin({ maxEntries: 64, maxAgeSeconds: 86400 })] }), "GET"), e.registerRoute(/\.(?:mp3|wav|ogg)$/i, new e.CacheFirst({ cacheName: "static-audio-assets", plugins: [new e.RangeRequestsPlugin, new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 })] }), "GET"), e.registerRoute(/\.(?:mp4)$/i, new e.CacheFirst({ cacheName: "static-video-assets", plugins: [new e.RangeRequestsPlugin, new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 })] }), "GET"), e.registerRoute(/\.(?:js)$/i, new e.StaleWhileRevalidate({ cacheName: "static-js-assets", plugins: [new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 })] }), "GET"), e.registerRoute(/\.(?:css|less)$/i, new e.StaleWhileRevalidate({ cacheName: "static-style-assets", plugins: [new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 })] }), "GET"), e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i, new e.StaleWhileRevalidate({ cacheName: "next-data", plugins: [new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 })] }), "GET"), e.registerRoute(/\.(?:json|xml|csv)$/i, new e.NetworkFirst({ cacheName: "static-data-assets", plugins: [new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 })] }), "GET"), e.registerRoute((({ url: e }) => { if (!(self.origin === e.origin)) return !1; const s = e.pathname; return !s.startsWith("/api/auth/") && !!s.startsWith("/api/") }), new e.NetworkFirst({ cacheName: "apis", networkTimeoutSeconds: 10, plugins: [new e.ExpirationPlugin({ maxEntries: 16, maxAgeSeconds: 86400 })] }), "GET"), e.registerRoute((({ url: e }) => { if (!(self.origin === e.origin)) return !1; return !e.pathname.startsWith("/api/") }), new e.NetworkFirst({ cacheName: "others", networkTimeoutSeconds: 10, plugins: [new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 })] }), "GET"), e.registerRoute((({ url: e }) => { return !(self.origin === e.origin) }), new e.NetworkFirst({ cacheName: "cross-origin", networkTimeoutSeconds: 10, plugins: [new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 3600 })] }), "GET") }));
