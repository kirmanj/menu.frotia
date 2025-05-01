'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "391ed53086b72b2220f04964a55e5ae8",
"version.json": "9277d48b19626a8ae332feba7cf8f3e0",
"index.html": "85298fc354753ee93b1df9be0e9a956f",
"/": "85298fc354753ee93b1df9be0e9a956f",
"main.dart.js": "fe9c6d814b0de72646598eb19c734308",
"flutter.js": "4b2350e14c6650ba82871f60906437ea",
"cors.json": "434eb804728f2a72969effd13fc48333",
"manifest.json": "866792a9cb1f40e5973e6b99de1cf373",
"assets/AssetManifest.json": "90cf1640543a944cc9a71c08fb0840b8",
"assets/NOTICES": "75d9e9730bc3349ac5dd3619826e009c",
"assets/FontManifest.json": "e7e91759d1186a8a6068f1b0c3329f5e",
"assets/AssetManifest.bin.json": "2c40c5fced0dc7457eea88c78aef98aa",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "c5959cdaf047e479d8af096f365d6e50",
"assets/fonts/LarkenDEMO-Regular.otf": "6b0f13dbbdf14087751dea11be607865",
"assets/fonts/Montserrat-Regular.ttf": "ee6539921d713482b8ccd4d0d23961bb",
"assets/fonts/MaterialIcons-Regular.otf": "92f54c2f35259d8bea1987caf87f0ae0",
"assets/assets/background2.png": "7a018afce23119d52a21b3034ce38956",
"assets/assets/background1.png": "cdd013eb7cbbd90718146896d261160a",
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
"assets/assets/images/logo-icon-green.png": "befe4ba425d31d45986631d71b7cb89f",
"assets/assets/images/8.png": "e312f567f3a3c07c4a6b09d3dcc1b026",
"assets/assets/images/9.png": "b91c336b8e505af2aa6f49105935a605",
"assets/assets/images/14.png": "f376f7032626743d8917ee89a9ae4a93",
"assets/assets/images/15.png": "d6a9f10deeca6400e355d19a28e935c2",
"assets/assets/images/12.png": "674f27362da41ffaf5d95eddca6be60f",
"assets/assets/images/13.png": "f376f7032626743d8917ee89a9ae4a93",
"assets/assets/images/11.png": "8ae2e3a52c45936c4de701ca8d258a54",
"assets/assets/images/10.png": "8ae2e3a52c45936c4de701ca8d258a54",
"assets/assets/images/logo-white.png": "f29988395c6da5da584c889446752c2f",
"assets/assets/images/locationn.png": "3defa390a3fc63ff1e5ed5ffbf48f759",
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
"assets/assets/images/insta.png": "c46bdfb1ca884717dc835bae3f29bf2c",
"assets/assets/images/phone.png": "c95f3c48c8d34e969d350805f0c768c8",
"assets/assets/images/plates/kurdish/4.png": "23a6dc902c2a0eef1dae29b4b9e0a3ba",
"assets/assets/images/plates/kurdish/5.png": "217f316b0f70d4c10211ad13cbe29706",
"assets/assets/images/plates/kurdish/7.png": "6fda4679cc534da00fcaff59e34cb0ae",
"assets/assets/images/plates/kurdish/6.png": "0162fbfa4872945c9cc351bba7316ed1",
"assets/assets/images/plates/kurdish/2.png": "30e5d1c9430f27c5068270f79b7f00e5",
"assets/assets/images/plates/kurdish/3.png": "fc590381f4d2d3f6999493a71a3256c7",
"assets/assets/images/plates/kurdish/1.png": "2ddd6b3f414db3205a0d0b978d7ecdd6",
"assets/assets/images/plates/imgs/77.png": "69e46e2a2530238cf704ae128c0a729c",
"assets/assets/images/plates/imgs/11.png": "0c03ca9a911e2990f2cd40f0c00d009b",
"assets/assets/images/plates/imgs/33.png": "9ecc9bf24ccd1dfe1c187e3550afb813",
"assets/assets/images/plates/imgs/4.png": "8f0a284b0082b4fb7c69cb5e259b2dbd",
"assets/assets/images/plates/imgs/5.png": "9c49f532c1f6c5ae32908315387e0dc2",
"assets/assets/images/plates/imgs/7.png": "ba3431cbd8acfa95bb2668d0016c1d6a",
"assets/assets/images/plates/imgs/6.png": "584d1df2cd1aef16ef525bec8ba5bbdc",
"assets/assets/images/plates/imgs/2.png": "41c09e81fc76c5b4c28a18cb66798675",
"assets/assets/images/plates/imgs/3.png": "6243753f64e25c80d130841dd14bc808",
"assets/assets/images/plates/imgs/1.png": "9d03f65c41c43c2adaf95a63c873a1e5",
"assets/assets/images/plates/english/4.png": "b69d15c79c228ffb7e2cf8607f4ac23d",
"assets/assets/images/plates/english/5.png": "dd28e65de63614fa4a35b43a1fbebad5",
"assets/assets/images/plates/english/7.png": "37df5f55722ef7b2ebd1f620939de002",
"assets/assets/images/plates/english/6.png": "05ac576f05a882ddaf9fc551532a2208",
"assets/assets/images/plates/english/2.png": "65eae1648153329ba09d64e363ea774a",
"assets/assets/images/plates/english/3.png": "c2baebe2ce2476efafe1b241ef2f1084",
"assets/assets/images/plates/english/1.png": "f88404e1d9c11ba042ed9f989347041e",
"assets/assets/images/plates/4.png": "0030e7cc7e62aae457532a5fed6a82c1",
"assets/assets/images/plates/5.png": "55c9bf30f1663ca590d0423c65a0367f",
"assets/assets/images/plates/7.png": "15a61d666e49f7ccffc7af334db3ac61",
"assets/assets/images/plates/arabic/4.png": "eaef8201f0953efc41b111613dd6ba04",
"assets/assets/images/plates/arabic/5.png": "3e7f7d65c5098ee4d66eee4ba741f3cb",
"assets/assets/images/plates/arabic/7.png": "505257a36977183ee7efa20bd2706cd7",
"assets/assets/images/plates/arabic/6.png": "ce3841aebb684e492c894288bfcf3368",
"assets/assets/images/plates/arabic/2.png": "3c468fde4e28d535e2acfb9ad6fb6bca",
"assets/assets/images/plates/arabic/3.png": "f04d20fa02168ca84f95800390c01e9e",
"assets/assets/images/plates/arabic/1.png": "331f100eb188cf74b6d94ccc513ecf14",
"assets/assets/images/plates/6.png": "d11f29fb28a5b2930d53ddebc19f9265",
"assets/assets/images/plates/2.png": "838812e78f7eeaf9254ae0187dec40e8",
"assets/assets/images/plates/3.png": "aec55b6d46d35b54e23b03f9611298c9",
"assets/assets/images/plates/1.png": "53b5eb74b59772ac89f7b79a3135a73e",
"assets/assets/images/4.png": "6fa18cf756063adcda08f3dd28c9efbf",
"assets/assets/images/mainLogo.png": "084c1bcfd9bf5c4d5278dc839843acbb",
"assets/assets/images/5.png": "a2205d2ceeb2b35c0289de966d592657",
"assets/assets/images/logo.jpeg": "b5cb2c017942da8f4da4f4031061ffe4",
"assets/assets/images/7.png": "a2205d2ceeb2b35c0289de966d592657",
"assets/assets/images/arabic/8.png": "743d6ad4c85e1bc38563935dfe0ce708",
"assets/assets/images/arabic/14.png": "b111bb2a96521427a5a2d9eef2e47d10",
"assets/assets/images/arabic/29.png": "59fa39e285c9fa9c894a459896e0e55f",
"assets/assets/images/arabic/17.png": "cf8104987aa8bfb0c1fcde776b60ba40",
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
"assets/assets/images/arabic/1.png": "457533a1f4b5c62814ec5222350e48c4",
"assets/assets/images/arabic/47.png": "cf1e408761e02c9e4024c741dabe6411",
"assets/assets/images/6.png": "4ca04280ed68e02bd9e52ff51e62a508",
"assets/assets/images/2.png": "0e22717a32e0fe65a283175d0d6b68dc",
"assets/assets/images/3.png": "be7102e77d7d8c4789d80a2ae53adb48",
"assets/assets/images/1.png": "d097bc5052fac44d2ffe9be25e54b1bb",
"assets/assets/images/p.png": "72b807fb1fcf51abe6f03af382be07f8",
"assets/assets/images/phonee.png": "1f426b52e2c1b372237f6ec5de9eeee1",
"assets/assets/background.png": "d41d8cd98f00b204e9800998ecf8427e",
"assets/assets/Main-color.png": "246cc4c6380f41bb20fea962b0b1aeb2",
"assets/assets/white.png": "02a2a3d3e9106851c5b5cf707de559d5",
"canvaskit/skwasm.js": "ac0f73826b925320a1e9b0d3fd7da61c",
"canvaskit/skwasm.js.symbols": "96263e00e3c9bd9cd878ead867c04f3c",
"canvaskit/canvaskit.js.symbols": "efc2cd87d1ff6c586b7d4c7083063a40",
"canvaskit/skwasm.wasm": "828c26a0b1cc8eb1adacbdd0c5e8bcfa",
"canvaskit/chromium/canvaskit.js.symbols": "e115ddcfad5f5b98a90e389433606502",
"canvaskit/chromium/canvaskit.js": "b7ba6d908089f706772b2007c37e6da4",
"canvaskit/chromium/canvaskit.wasm": "ea5ab288728f7200f398f60089048b48",
"canvaskit/canvaskit.js": "26eef3024dbc64886b7f48e1b6fb05cf",
"canvaskit/canvaskit.wasm": "e7602c687313cfac5f495c5eac2fb324",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c"};
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
