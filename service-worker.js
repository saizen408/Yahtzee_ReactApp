"use strict";var precacheConfig=[["/Yahtzee_ReactApp/index.html","0bcb3d84a84f12231f593ff027e9eabc"],["/Yahtzee_ReactApp/static/css/main.98606189.css","0ba1466c63c7327f4cd9b3f6ce6ada9a"],["/Yahtzee_ReactApp/static/js/main.fd71ff1d.js","da4b6035fc3a1bfa0ba15c9fd4a19c71"],["/Yahtzee_ReactApp/static/media/fa-brands-400.06147b6c.ttf","06147b6cd88c7346cecd1edd060cd5de"],["/Yahtzee_ReactApp/static/media/fa-brands-400.5063b105.eot","5063b105c7646c8043d58c5289f02cca"],["/Yahtzee_ReactApp/static/media/fa-brands-400.a9c4bb73.svg","a9c4bb7348f42626454c988dbde1d0a0"],["/Yahtzee_ReactApp/static/media/fa-brands-400.c5e0f14f.woff","c5e0f14f88a828261ba01558ce2bf26f"],["/Yahtzee_ReactApp/static/media/fa-brands-400.cccc9d29.woff2","cccc9d29470e879e40eb70249d9a2705"],["/Yahtzee_ReactApp/static/media/fa-regular-400.65b286af.ttf","65b286af947c0d982ca01b40e1fcab38"],["/Yahtzee_ReactApp/static/media/fa-regular-400.7b9568e6.svg","7b9568e6389b1f8ae0902cd39665fc1e"],["/Yahtzee_ReactApp/static/media/fa-regular-400.c1a866ec.eot","c1a866ec0e04a5e1915b41fcf261457c"],["/Yahtzee_ReactApp/static/media/fa-regular-400.c4f508e7.woff","c4f508e7c4f01a9eeba7f08155cde04e"],["/Yahtzee_ReactApp/static/media/fa-regular-400.f5f2566b.woff2","f5f2566b93e89391da4db79462b8078b"],["/Yahtzee_ReactApp/static/media/fa-solid-900.0bff33a5.ttf","0bff33a5fd7ec390235476b4859747a0"],["/Yahtzee_ReactApp/static/media/fa-solid-900.333bae20.woff","333bae208dc363746961b234ff6c2500"],["/Yahtzee_ReactApp/static/media/fa-solid-900.44d537ab.woff2","44d537ab79f921fde5a28b2c1636f397"],["/Yahtzee_ReactApp/static/media/fa-solid-900.8e4a6dcc.eot","8e4a6dcc692b3887f9f542cd6894d6d4"],["/Yahtzee_ReactApp/static/media/fa-solid-900.c2801fb4.svg","c2801fb415f03c7b170934769d7b5397"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var a=new URL(e);return"/"===a.pathname.slice(-1)&&(a.pathname+=t),a.toString()},cleanResponse=function(t){return t.redirected?("body"in t?Promise.resolve(t.body):t.blob()).then(function(e){return new Response(e,{headers:t.headers,status:t.status,statusText:t.statusText})}):Promise.resolve(t)},createCacheKey=function(e,t,a,c){var n=new URL(e);return c&&n.pathname.match(c)||(n.search+=(n.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(a)),n.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var a=new URL(t).pathname;return e.some(function(e){return a.match(e)})},stripIgnoredUrlParameters=function(e,a){var t=new URL(e);return t.hash="",t.search=t.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(t){return a.every(function(e){return!e.test(t[0])})}).map(function(e){return e.join("=")}).join("&"),t.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],a=e[1],c=new URL(t,self.location),n=createCacheKey(c,hashParamName,a,/\.\w{8}\./);return[c.toString(),n]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(c){return setOfCachedUrls(c).then(function(a){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(t){if(!a.has(t)){var e=new Request(t,{credentials:"same-origin"});return fetch(e).then(function(e){if(!e.ok)throw new Error("Request for "+t+" returned a response with status "+e.status);return cleanResponse(e).then(function(e){return c.put(t,e)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var a=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(t){return t.keys().then(function(e){return Promise.all(e.map(function(e){if(!a.has(e.url))return t.delete(e)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(t){if("GET"===t.request.method){var e,a=stripIgnoredUrlParameters(t.request.url,ignoreUrlParametersMatching),c="index.html";(e=urlsToCacheKeys.has(a))||(a=addDirectoryIndex(a,c),e=urlsToCacheKeys.has(a));var n="/Yahtzee_ReactApp/index.html";!e&&"navigate"===t.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],t.request.url)&&(a=new URL(n,self.location).toString(),e=urlsToCacheKeys.has(a)),e&&t.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(a)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(e){return console.warn('Couldn\'t serve response for "%s" from cache: %O',t.request.url,e),fetch(t.request)}))}});