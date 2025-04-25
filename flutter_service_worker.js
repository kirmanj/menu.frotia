'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "da6482449da9997c76a17b32c6e7dfd1",
"version.json": "9277d48b19626a8ae332feba7cf8f3e0",
"index.html": "4787b7624a0e16ef94e117d015e0a27f",
"/": "4787b7624a0e16ef94e117d015e0a27f",
"main.dart.js": "5a2253a08eb40b88e64121c99c276a57",
"flutter.js": "76f08d47ff9f5715220992f993002504",
"cors.json": "434eb804728f2a72969effd13fc48333",
"manifest.json": "77f3e989e2a919b6edb6371b5827f142",
"assets/AssetManifest.json": "38c7508687242e06cbcd58a7aecc6bbc",
"assets/NOTICES": "cddb1437045c4a6dee682781884cef97",
"assets/FontManifest.json": "8d0976ef776204204d1ea8f915083cf0",
"assets/AssetManifest.bin.json": "5e9d96798f890b574a1031f2ad284aee",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "5f72d664707e4d711a1c0c240912cd50",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "47cc8bb384ecf7057244caca1def6e31",
"assets/fonts/Electrolize-Regular.ttf": "1be3e0aaeb2bbd1985615a49da7f2eaf",
"assets/fonts/Montserrat-Regular.ttf": "ee6539921d713482b8ccd4d0d23961bb",
"assets/fonts/MaterialIcons-Regular.otf": "9d6946a2195482f8414d520c1270b505",
"assets/assets/images/frotias.png": "40a730a776892d724b74ccb904d9eba3",
"assets/assets/images/kurdish/48.png": "8e629eb0636aca43c0d20479e0a00dc8",
"assets/assets/images/kurdish/9.png": "a2bd5c77a6c08df7128832bc1e3ddbc7",
"assets/assets/images/kurdish/15.png": "1a7b6eac5e59febd3a90d70a679b20b1",
"assets/assets/images/kurdish/12.png": "628c2c0e45e94014993348481fe5902a",
"assets/assets/images/kurdish/39.png": "b691b11589b04ff366c96f9d8d5238cb",
"assets/assets/images/kurdish/21.png": "912da94f7e96f5f110db588008936633",
"assets/assets/images/kurdish/36.png": "40b2da9d4354f59478dcad08880aca1f",
"assets/assets/images/kurdish/27.png": "34ff2df142dc226fac70f454f40c390a",
"assets/assets/images/kurdish/33.png": "aef22de28310e4f2325227ef9257d6ed",
"assets/assets/images/kurdish/18.png": "cf6e3a9d35f935a451062e92a038f730",
"assets/assets/images/kurdish/30.png": "b52fb9f369f30e7965de08c8ae90547f",
"assets/assets/images/kurdish/24.png": "159120275b7bc5c84403dd3b3a568d74",
"assets/assets/images/kurdish/42.png": "4f0a65dd636590e822a9908f67659c8c",
"assets/assets/images/kurdish/54.png": "260800d142d0bc698ff0393996c43253",
"assets/assets/images/kurdish/6.png": "685e41ea505234367abd2f8700fc9413",
"assets/assets/images/kurdish/3.png": "00c09e025e9aca9900d0c3924f98f478",
"assets/assets/images/kurdish/51.png": "c21a9ef880ff7b550ff34f7cadca5a80",
"assets/assets/images/kurdish/45.png": "37f0447aef174dc569aa08080844a41b",
"assets/assets/images/8.png": "e312f567f3a3c07c4a6b09d3dcc1b026",
"assets/assets/images/9.png": "b91c336b8e505af2aa6f49105935a605",
"assets/assets/images/14.png": "f376f7032626743d8917ee89a9ae4a93",
"assets/assets/images/15.png": "d6a9f10deeca6400e355d19a28e935c2",
"assets/assets/images/12.png": "674f27362da41ffaf5d95eddca6be60f",
"assets/assets/images/13.png": "f376f7032626743d8917ee89a9ae4a93",
"assets/assets/images/11.png": "8ae2e3a52c45936c4de701ca8d258a54",
"assets/assets/images/10.png": "8ae2e3a52c45936c4de701ca8d258a54",
"assets/assets/images/english/9.png": "c3b25ff0f01a6d0699cc7c730ebc1432",
"assets/assets/images/english/29.png": "d045d571d936670f79e2b1352348fca7",
"assets/assets/images/english/15.png": "4bb4648090b6f3a3a471898984eed57f",
"assets/assets/images/english/17.png": "0adfadceb85923e05e580a8eef337ded",
"assets/assets/images/english/13.png": "3b9a39043976b4f9195f9bcf98080210",
"assets/assets/images/english/11.png": "234455a447ebcbc03e241b5cd9504ca7",
"assets/assets/images/english/35.png": "1df0ed04c3a35c50dc5691b99afb020e",
"assets/assets/images/english/21.png": "c563481700c146302c698c3dece5571d",
"assets/assets/images/english/23.png": "b2d70d64a36817a4335cfdf5943ac7be",
"assets/assets/images/english/27.png": "349f21a36e4f1d0116b822a2ecfb93d0",
"assets/assets/images/english/33.png": "781689079a9b221720a5684dcfdeffee",
"assets/assets/images/english/25.png": "7580fc784bb0abfeee3e178792649ee5",
"assets/assets/images/english/31.png": "fa5d98a1f4ee6ebe4d10cb2f8b53faae",
"assets/assets/images/english/19.png": "bd83363e58bd3d653ba0d8a9fed47fcd",
"assets/assets/images/english/5.png": "f949262272dc27384359794d83f17b07",
"assets/assets/images/english/7.png": "426873f345763778f52fcf4e8b263da1",
"assets/assets/images/english/3.png": "7096bf72f794b35c779d03d6a861e909",
"assets/assets/images/english/1.png": "4038fca8d7ffdf7c7cfa7dfbde6687d4",
"assets/assets/images/whatsappb.png": "35323afcb9d6c0f3949a0b44619b85db",
"assets/assets/images/pp.png": "fabf0a702994e3dd496333599d72eae6",
"assets/assets/images/4.png": "6fa18cf756063adcda08f3dd28c9efbf",
"assets/assets/images/5.png": "a2205d2ceeb2b35c0289de966d592657",
"assets/assets/images/logo.jpeg": "b5cb2c017942da8f4da4f4031061ffe4",
"assets/assets/images/7.png": "a2205d2ceeb2b35c0289de966d592657",
"assets/assets/images/arabic/8.png": "743d6ad4c85e1bc38563935dfe0ce708",
"assets/assets/images/arabic/14.png": "b111bb2a96521427a5a2d9eef2e47d10",
"assets/assets/images/arabic/29.png": "59fa39e285c9fa9c894a459896e0e55f",
"assets/assets/images/arabic/17.png": "cf8104987aa8bfb0c1fcde776b60ba40",
"assets/assets/images/arabic/11.png": "457533a1f4b5c62814ec5222350e48c4",
"assets/assets/images/arabic/38.png": "eae2e024e51b034938988a142885b1de",
"assets/assets/images/arabic/35.png": "2993c6e12d03bf4fd0f1db36fb45692d",
"assets/assets/images/arabic/20.png": "b7c04bf07a18ca322bb05b0b8ceb56e4",
"assets/assets/images/arabic/23.png": "7cb60c1534fe6a7003884e5402096446",
"assets/assets/images/arabic/32.png": "219e6f364f4b9c2e03fcb06b8ab942d1",
"assets/assets/images/arabic/26.png": "baf46c964288181d87945d41bc963d9a",
"assets/assets/images/arabic/5.png": "647c963dee779eb5734c435964eed71e",
"assets/assets/images/arabic/41.png": "5166e1621d7826127c420ea98571b902",
"assets/assets/images/arabic/44.png": "12dd6c65a2ab0c30e31493540cb92d06",
"assets/assets/images/arabic/2.png": "ab1069b8f07d3ccf658021ad36c5b4db",
"assets/assets/images/arabic/50.png": "0a98fa6ea08e5f6461670e8b601f46f9",
"assets/assets/images/arabic/53.png": "fa71bd4f022ac65668f29623d637c49b",
"assets/assets/images/arabic/47.png": "cf1e408761e02c9e4024c741dabe6411",
"assets/assets/images/6.png": "4ca04280ed68e02bd9e52ff51e62a508",
"assets/assets/images/2.png": "0e22717a32e0fe65a283175d0d6b68dc",
"assets/assets/images/3.png": "be7102e77d7d8c4789d80a2ae53adb48",
"assets/assets/images/1.png": "d097bc5052fac44d2ffe9be25e54b1bb",
"assets/assets/images/p.png": "72b807fb1fcf51abe6f03af382be07f8",
"canvaskit/skwasm_st.js": "d1326ceef381ad382ab492ba5d96f04d",
"canvaskit/skwasm.js": "f2ad9363618c5f62e813740099a80e63",
"canvaskit/skwasm.js.symbols": "80806576fa1056b43dd6d0b445b4b6f7",
"canvaskit/canvaskit.js.symbols": "68eb703b9a609baef8ee0e413b442f33",
"canvaskit/skwasm.wasm": "f0dfd99007f989368db17c9abeed5a49",
"canvaskit/chromium/canvaskit.js.symbols": "5a23598a2a8efd18ec3b60de5d28af8f",
"canvaskit/chromium/canvaskit.js": "34beda9f39eb7d992d46125ca868dc61",
"canvaskit/chromium/canvaskit.wasm": "64a386c87532ae52ae041d18a32a3635",
"canvaskit/skwasm_st.js.symbols": "c7e7aac7cd8b612defd62b43e3050bdd",
"canvaskit/canvaskit.js": "86e461cf471c1640fd2b461ece4589df",
"canvaskit/canvaskit.wasm": "efeeba7dcc952dae57870d4df3111fad",
"canvaskit/skwasm_st.wasm": "56c3973560dfcbf28ce47cebe40f3206"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
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
