"use strict";var precacheConfig=[["/yahtzee-app/index.html","de1c1dbfa6146472c2cc420d7da288cc"],["/yahtzee-app/static/css/main.d5488333.css","691edc1c2660bac32cae1be8fed9df11"],["/yahtzee-app/static/js/main.2eea67cf.js","359c95f7c568979ffa8a73c287d205dc"],["/yahtzee-app/static/media/fa-brands-400.06147b6c.ttf","06147b6cd88c7346cecd1edd060cd5de"],["/yahtzee-app/static/media/fa-brands-400.5063b105.eot","5063b105c7646c8043d58c5289f02cca"],["/yahtzee-app/static/media/fa-brands-400.a9c4bb73.svg","a9c4bb7348f42626454c988dbde1d0a0"],["/yahtzee-app/static/media/fa-brands-400.c5e0f14f.woff","c5e0f14f88a828261ba01558ce2bf26f"],["/yahtzee-app/static/media/fa-brands-400.cccc9d29.woff2","cccc9d29470e879e40eb70249d9a2705"],["/yahtzee-app/static/media/fa-regular-400.65b286af.ttf","65b286af947c0d982ca01b40e1fcab38"],["/yahtzee-app/static/media/fa-regular-400.7b9568e6.svg","7b9568e6389b1f8ae0902cd39665fc1e"],["/yahtzee-app/static/media/fa-regular-400.c1a866ec.eot","c1a866ec0e04a5e1915b41fcf261457c"],["/yahtzee-app/static/media/fa-regular-400.c4f508e7.woff","c4f508e7c4f01a9eeba7f08155cde04e"],["/yahtzee-app/static/media/fa-regular-400.f5f2566b.woff2","f5f2566b93e89391da4db79462b8078b"],["/yahtzee-app/static/media/fa-solid-900.0bff33a5.ttf","0bff33a5fd7ec390235476b4859747a0"],["/yahtzee-app/static/media/fa-solid-900.333bae20.woff","333bae208dc363746961b234ff6c2500"],["/yahtzee-app/static/media/fa-solid-900.44d537ab.woff2","44d537ab79f921fde5a28b2c1636f397"],["/yahtzee-app/static/media/fa-solid-900.8e4a6dcc.eot","8e4a6dcc692b3887f9f542cd6894d6d4"],["/yahtzee-app/static/media/fa-solid-900.c2801fb4.svg","c2801fb415f03c7b170934769d7b5397"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,a){var t=new URL(e);return"/"===t.pathname.slice(-1)&&(t.pathname+=a),t.toString()},cleanResponse=function(a){return a.redirected?("body"in a?Promise.resolve(a.body):a.blob()).then(function(e){return new Response(e,{headers:a.headers,status:a.status,statusText:a.statusText})}):Promise.resolve(a)},createCacheKey=function(e,a,t,n){var c=new URL(e);return n&&c.pathname.match(n)||(c.search+=(c.search?"&":"")+encodeURIComponent(a)+"="+encodeURIComponent(t)),c.toString()},isPathWhitelisted=function(e,a){if(0===e.length)return!0;var t=new URL(a).pathname;return e.some(function(e){return t.match(e)})},stripIgnoredUrlParameters=function(e,t){var a=new URL(e);return a.hash="",a.search=a.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(a){return t.every(function(e){return!e.test(a[0])})}).map(function(e){return e.join("=")}).join("&"),a.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var a=e[0],t=e[1],n=new URL(a,self.location),c=createCacheKey(n,hashParamName,t,/\.\w{8}\./);return[n.toString(),c]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(n){return setOfCachedUrls(n).then(function(t){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(a){if(!t.has(a)){var e=new Request(a,{credentials:"same-origin"});return fetch(e).then(function(e){if(!e.ok)throw new Error("Request for "+a+" returned a response with status "+e.status);return cleanResponse(e).then(function(e){return n.put(a,e)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var t=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(a){return a.keys().then(function(e){return Promise.all(e.map(function(e){if(!t.has(e.url))return a.delete(e)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(a){if("GET"===a.request.method){var e,t=stripIgnoredUrlParameters(a.request.url,ignoreUrlParametersMatching),n="index.html";(e=urlsToCacheKeys.has(t))||(t=addDirectoryIndex(t,n),e=urlsToCacheKeys.has(t));var c="/yahtzee-app/index.html";!e&&"navigate"===a.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],a.request.url)&&(t=new URL(c,self.location).toString(),e=urlsToCacheKeys.has(t)),e&&a.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(t)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(e){return console.warn('Couldn\'t serve response for "%s" from cache: %O',a.request.url,e),fetch(a.request)}))}});