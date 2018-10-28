var serviceWorkerOption = {
  "assets": [
    "./icons-05ba4b805f8a810423af5204b5b0d985/android-chrome-36x36.png",
    "./icons-05ba4b805f8a810423af5204b5b0d985/android-chrome-48x48.png",
    "./icons-05ba4b805f8a810423af5204b5b0d985/android-chrome-72x72.png",
    "./icons-05ba4b805f8a810423af5204b5b0d985/android-chrome-96x96.png",
    "./icons-05ba4b805f8a810423af5204b5b0d985/android-chrome-144x144.png",
    "./icons-05ba4b805f8a810423af5204b5b0d985/android-chrome-192x192.png",
    "./icons-05ba4b805f8a810423af5204b5b0d985/android-chrome-384x384.png",
    "./icons-05ba4b805f8a810423af5204b5b0d985/android-chrome-256x256.png",
    "./icons-05ba4b805f8a810423af5204b5b0d985/android-chrome-512x512.png",
    "./icons-05ba4b805f8a810423af5204b5b0d985/apple-touch-icon-57x57.png",
    "./icons-05ba4b805f8a810423af5204b5b0d985/apple-touch-icon-60x60.png",
    "./icons-05ba4b805f8a810423af5204b5b0d985/apple-touch-icon-76x76.png",
    "./icons-05ba4b805f8a810423af5204b5b0d985/apple-touch-icon-72x72.png",
    "./icons-05ba4b805f8a810423af5204b5b0d985/apple-touch-icon-114x114.png",
    "./icons-05ba4b805f8a810423af5204b5b0d985/apple-touch-icon-120x120.png",
    "./icons-05ba4b805f8a810423af5204b5b0d985/apple-touch-icon-144x144.png",
    "./icons-05ba4b805f8a810423af5204b5b0d985/apple-touch-icon-152x152.png",
    "./icons-05ba4b805f8a810423af5204b5b0d985/apple-touch-icon-167x167.png",
    "./icons-05ba4b805f8a810423af5204b5b0d985/apple-touch-icon.png",
    "./icons-05ba4b805f8a810423af5204b5b0d985/apple-touch-icon-180x180.png",
    "./icons-05ba4b805f8a810423af5204b5b0d985/apple-touch-icon-precomposed.png",
    "./icons-05ba4b805f8a810423af5204b5b0d985/favicon-32x32.png",
    "./icons-05ba4b805f8a810423af5204b5b0d985/favicon-16x16.png",
    "./icons-05ba4b805f8a810423af5204b5b0d985/favicon.ico",
    "./icons-05ba4b805f8a810423af5204b5b0d985/apple-touch-startup-image-640x1096.png",
    "./icons-05ba4b805f8a810423af5204b5b0d985/apple-touch-startup-image-320x460.png",
    "./icons-05ba4b805f8a810423af5204b5b0d985/apple-touch-startup-image-640x920.png",
    "./icons-05ba4b805f8a810423af5204b5b0d985/apple-touch-startup-image-768x1004.png",
    "./icons-05ba4b805f8a810423af5204b5b0d985/apple-touch-startup-image-748x1024.png",
    "./icons-05ba4b805f8a810423af5204b5b0d985/apple-touch-startup-image-750x1294.png",
    "./icons-05ba4b805f8a810423af5204b5b0d985/apple-touch-startup-image-1182x2208.png",
    "./icons-05ba4b805f8a810423af5204b5b0d985/apple-touch-startup-image-1242x2148.png",
    "./icons-05ba4b805f8a810423af5204b5b0d985/apple-touch-startup-image-1536x2008.png",
    "./icons-05ba4b805f8a810423af5204b5b0d985/apple-touch-startup-image-1496x2048.png",
    "./icons-05ba4b805f8a810423af5204b5b0d985/firefox_app_60x60.png",
    "./icons-05ba4b805f8a810423af5204b5b0d985/firefox_app_128x128.png",
    "./icons-05ba4b805f8a810423af5204b5b0d985/firefox_app_512x512.png",
    "./icons-05ba4b805f8a810423af5204b5b0d985/manifest.json",
    "./icons-05ba4b805f8a810423af5204b5b0d985/manifest.webapp",
    "./iconstats-c576e9605141a5182aad.json",
    "./assets/fonts/98b481e1ff888902698bc7f3a797f2dd.woff2",
    "./assets/fonts/a938437d7566748d14d57f641d31d984.woff",
    "./assets/fonts/04bbbfb4916d4f4ee846b88684c1eb31.woff2",
    "./assets/fonts/4448e86ecf81d6a7f53e8aceaea1dbd9.woff",
    "./assets/fonts/a7339411e4451258dd65231b45db5913.woff2",
    "./assets/fonts/05942619c53a60af731039d924a5ac58.woff",
    "./assets/audio/707-bd.mp3",
    "./assets/audio/707-sd-low.mp3",
    "./assets/audio/707-sd-high.mp3",
    "./assets/audio/707-ch.mp3",
    "./assets/audio/707-oh.mp3",
    "./assets/audio/707-clap.mp3",
    "./assets/audio/707-tamb.mp3",
    "./assets/audio/808-bd-short.mp3",
    "./assets/audio/808-bd-long.mp3",
    "./assets/audio/808-cowbell.mp3",
    "./assets/audio/808-sd.mp3",
    "./assets/audio/808-clap.mp3",
    "./assets/audio/808-ch.mp3",
    "./assets/audio/808-oh.mp3",
    "./assets/audio/808-cym.mp3",
    "./assets/audio/808-clav.mp3",
    "./assets/audio/808-rs.mp3",
    "./assets/audio/808-ht.mp3",
    "./assets/audio/808-mt.mp3",
    "./assets/audio/808-lt.mp3",
    "./assets/audio/acetone-bd.mp3",
    "./assets/audio/acetone-sd-1.mp3",
    "./assets/audio/acetone-sd-2.mp3",
    "./assets/audio/acetone-ch.mp3",
    "./assets/audio/acetone-oh.mp3",
    "./assets/audio/acetone-perc-1.mp3",
    "./assets/audio/acetone-perc-2.mp3",
    "./assets/audio/linn-bd.mp3",
    "./assets/audio/linn-sd.mp3",
    "./assets/audio/linn-ch.mp3",
    "./assets/audio/linn-ph.mp3",
    "./assets/audio/linn-clap.mp3",
    "./assets/audio/linn-tamb.mp3",
    "./assets/audio/linn-cowbell.mp3",
    "./assets/audio/linn-ht.mp3",
    "./assets/audio/linn-mt.mp3",
    "./assets/audio/linn-lt.mp3",
    "./assets/audio/linn-rim.mp3",
    "./assets/audio/hip-hop-bd-1.mp3",
    "./assets/audio/hip-hop-bd-2.mp3",
    "./assets/audio/hip-hop-sd-1.mp3",
    "./assets/audio/hip-hop-sd-2.mp3",
    "./assets/audio/hip-hop-ch-1.mp3",
    "./assets/audio/hip-hop-ch-2.mp3",
    "./assets/audio/hip-hop-oh.mp3",
    "./assets/images/construction-light.svg",
    "./assets/audio/vocal_duo.wav",
    "./assets/images/maschine-50.png",
    "./assets/images/github.svg",
    "./assets/js/bundle-827d9cde20dc2318339a.js"
  ]
};
        
        !function(e){var t={};function n(r){if(t[r])return t[r].exports;var u=t[r]={i:r,l:!1,exports:{}};return e[r].call(u.exports,u,u.exports,n),u.l=!0,u.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var u in e)n.d(r,u,function(t){return e[t]}.bind(null,u));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";var r=function(e,t){return fetch(t).then(function(t){return function(e,t){if(!t||200!==t.status||"basic"!==t.type)return t;var n=t.clone();return caches.open("wdsCache").then(function(t){t.put(e.request,n)}),t}(e,t)})};self.addEventListener("fetch",function(e){var t=e.request.clone();t.url.indexOf("/assets/")>=0?e.respondWith(caches.match(t).then(function(n){return n||r(e,t)})):e.respondWith(r(e,t))})}]);