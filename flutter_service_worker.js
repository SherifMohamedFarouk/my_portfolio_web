'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "a5a4841bad82df179dca70b32f6def4d",
"assets/AssetManifest.json": "37488ceb293de9c62fb442edbfffe945",
"assets/assets/alienz/unnamed.png": "6f1bdaa087f7441359b4eb66dc6b61b6",
"assets/assets/alienz/unnamed1.png": "6afb4ff51887f22714f3f88babecb87e",
"assets/assets/alienz/unnamed2.png": "c6cdd1436290e9e7b8ebbce93820940f",
"assets/assets/alienz/unnamed3.png": "57bebb34fe5d108dce5d265f6fe60b59",
"assets/assets/alienz/unnamed4.png": "da66b047e75535903e1cfdc0717f0f7a",
"assets/assets/alienz/unnamed5.png": "829aea5b723fdd9a7fa38ec8d6d12fb1",
"assets/assets/appfusewebsites/Capture.PNG": "6892f727cdcbd0bc62b4b62a96afe8a5",
"assets/assets/appfusewebsites/Capture2.PNG": "94149730d5ba4ae888a3dcde454dc7e4",
"assets/assets/appfusewebsites/Capture3.PNG": "50c4e666386b25a7ac9c3ca161caf315",
"assets/assets/appfusewebsites/Capture4.PNG": "21463429d8da2dae45b9e92cbc8be96e",
"assets/assets/cars/cars1.png": "c4b971ead233456f0c3c4cb8680139d6",
"assets/assets/cars/cars2.png": "891d6e6ae8b218be9c1a3f4b500504ac",
"assets/assets/cars/cars3.png": "8bf193dad731f51c7daa9fadf3df2f11",
"assets/assets/easylife/Capture.PNG": "033836edf1ddc7104c8c5b952c015310",
"assets/assets/easylife/Capture2.PNG": "e4e85884118d4c9f6a5a0da20f3cca0f",
"assets/assets/easylife/Capture3.PNG": "308afd92042926db32a5c5ca66cfc4b7",
"assets/assets/easylife/Capture4.PNG": "a7d2016526db499b4280591c0fbbf733",
"assets/assets/easylife/Capture5.PNG": "a6cf3c4c27d775422669cb9bc9077667",
"assets/assets/easylife/Capture6.PNG": "dbb342139c4b8ef735df4c193d9f7707",
"assets/assets/easylife/Capture7.PNG": "307c65afa6e19cec9dd9849333e8edee",
"assets/assets/easylife/Capture8.PNG": "25335916cc77b046bac18c5763620c98",
"assets/assets/easylife/Capture9.PNG": "46b77128b8278fe2f9b43c022184fe73",
"assets/assets/images/android.png": "0c299f712ce78d0f4b1f7bf63a0301d7",
"assets/assets/images/anime1.png": "dc79b967cb0983cb08675223815b566f",
"assets/assets/images/anime2.png": "4dac144037a5e925c288f55c7a4be228",
"assets/assets/images/anime3.png": "75f1fd223abca2efb7f6b6f2daa6442f",
"assets/assets/images/Capture1.PNG": "cfbb1d24b61c1eb71adeb5ecf3d95dd1",
"assets/assets/images/Capture2.PNG": "7251f1c90efbc3775f923536a802d121",
"assets/assets/images/Capture3.PNG": "941b2d409c5fc48cfa7734d7461361ff",
"assets/assets/images/dark.png": "18312f496dfccd337f06c903f08e2379",
"assets/assets/images/flutter.png": "950081990a4a60c32cfe4fcdbebfcd21",
"assets/assets/images/Home.png": "48a3b3e39507a29bd8d6bd015059c75d",
"assets/assets/images/light.png": "c5e777c2e0b0ec9079fdddb5ec879dcb",
"assets/assets/images/Login%252001.png": "67968d2b4416b21a5aa89cbde52fdd6a",
"assets/assets/images/screen1.png": "c6296706c26a52a45adea5e09ddea5f3",
"assets/assets/images/screen2.png": "f258d47f484bacf98807aa31472cbe0e",
"assets/assets/images/screen3.png": "c7b0ac7758bc193eca984ef07baf48cd",
"assets/assets/images/Sherif%2520Farouk%2520Resume.pdf": "7337f58f642acd551832d2545aa35456",
"assets/assets/images/Spash%2520Screen.png": "23b7e69f5d2b595cffbafd379c6d0822",
"assets/assets/images/vlens1.png": "ec881ec13615908364f8030969978e50",
"assets/assets/images/vlens2.png": "55826c06a63a47b3cc6a1a90c23c777b",
"assets/assets/images/vlens3.png": "a4ef2a861f76109333f9a7ac1d245d96",
"assets/assets/purplebureau/Capture.PNG": "df666d147d71c566879d26ff1420591b",
"assets/assets/purplebureau/Capture2.PNG": "ea35033b09db755ae0f22abb463275f5",
"assets/assets/purplebureau/Capture3.PNG": "170b395dc16d1d44f6830c0ab241411a",
"assets/assets/purplebureau/Capture4.PNG": "641e42fcdc76cdc0da20824fca40317a",
"assets/assets/truzi/Capture.PNG": "d8c4db8f0becce1f64e43e0b191b52e7",
"assets/assets/truzi/Capture1.PNG": "cba32cb160249a8e02fd1e367ef5da65",
"assets/assets/truzi/Capture2.PNG": "4faad26305121a81cc1796d88a58ecdf",
"assets/assets/truzi/Capture3.PNG": "8220c69e7959553994bf3f0b46a614b1",
"assets/assets/truzi/Capture4.PNG": "4669b78c07ed956c5c3201d7c05f4a79",
"assets/assets/truzi/Capture5.PNG": "d9c7f3e4cd6013ab0059f21970c0c8c5",
"assets/assets/truzi/Capture6.PNG": "90e4163a50f368254c68cae5f46b3712",
"assets/assets/truzi/Capture7.PNG": "e04537ea98f403648db664b120d4d124",
"assets/assets/yojad/Capture.PNG": "daeee5249c35a122738bfd27df34cd5c",
"assets/assets/yojad/Capture2.PNG": "b35e67992bf521d26662f0dea2d6a4ae",
"assets/assets/yojad/Capture3.PNG": "17a24229042cedad7f90b81f500f4505",
"assets/assets/yojad/Capture4.PNG": "a88a902cb01d82fc0f801bbc8ffdc0ee",
"assets/FontManifest.json": "6a84e6c28a318c1ef29352d8cf66d39c",
"assets/fonts/MaterialIcons-Regular.otf": "e7069dfd19b331be16bed984668fe080",
"assets/NOTICES": "44d746d657a6b0421c683ef97837f9a6",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "b00363533ebe0bfdb95f3694d7647f6d",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "0a94bab8e306520dc6ae14c2573972ad",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "9cda082bd7cc5642096b56fa8db15b45",
"assets/packages/material_design_icons_flutter/lib/fonts/materialdesignicons-webfont.ttf": "dd74f11e425603c7adb66100f161b2a5",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"canvaskit/canvaskit.js": "76f7d822f42397160c5dfc69cbc9b2de",
"canvaskit/canvaskit.wasm": "f48eaf57cada79163ec6dec7929486ea",
"canvaskit/chromium/canvaskit.js": "8c8392ce4a4364cbb240aa09b5652e05",
"canvaskit/chromium/canvaskit.wasm": "fc18c3010856029414b70cae1afc5cd9",
"canvaskit/skwasm.js": "1df4d741f441fa1a4d10530ced463ef8",
"canvaskit/skwasm.wasm": "6711032e17bf49924b2b001cef0d3ea3",
"canvaskit/skwasm.worker.js": "19659053a277272607529ef87acf9d8a",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "6b515e434cea20006b3ef1726d2c8894",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "5c6afc981a7118e32fe3062351f52763",
"/": "5c6afc981a7118e32fe3062351f52763",
"main.dart.js": "07052552620cb50811cd5995086b6449",
"manifest.json": "2a27fb33f6d0532222215a292b9138b5",
"pngtree.jpg": "1423a72a548459dcdc57c23993bf2fec",
"version.json": "a278e46a1de5ba4354fffb22e9652252"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
