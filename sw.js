// Service worker for My Budget. Everything the app needs (your data) lives in
// localStorage, not on a server, so the only job here is caching the small
// set of static files (this HTML, manifest, icons) so the app still opens
// with no signal at all. Bump CACHE_NAME whenever these files change so old
// caches get cleaned up and the new version takes over.
const CACHE_NAME = "my-budget-cache-v40";
const CORE_ASSETS = [
  "./index.html",
  "./manifest.json",
  "./icon-192.png",
  "./icon-512.png",
  "./icon-maskable-512.png",
  "./apple-touch-icon.png",
  "./logo-piggy.png"
];

self.addEventListener("install", function(event) {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(function(cache) { return cache.addAll(CORE_ASSETS); })
      .then(function() { return self.skipWaiting(); })
  );
});

self.addEventListener("activate", function(event) {
  event.waitUntil(
    caches.keys().then(function(keys) {
      return Promise.all(
        keys.filter(function(key) { return key !== CACHE_NAME; })
            .map(function(key) { return caches.delete(key); })
      );
    }).then(function() { return self.clients.claim(); })
  );
});

self.addEventListener("fetch", function(event) {
  var req = event.request;
  if (req.method !== "GET") return;

  // The app shell (this page) always tries the network first, so you get
  // whatever's newest on GitHub the moment you're online, and only falls
  // back to the cached copy when there's no connection.
  if (req.mode === "navigate" || req.url.indexOf("index.html") !== -1) {
    event.respondWith(
      fetch(req).then(function(res) {
        var copy = res.clone();
        caches.open(CACHE_NAME).then(function(cache) { cache.put(req, copy); });
        return res;
      }).catch(function() {
        return caches.match(req).then(function(cached) { return cached || caches.match("./index.html"); });
      })
    );
    return;
  }

  // Everything else (manifest, icons) rarely changes -- serve from cache
  // instantly, and quietly refresh the cache in the background.
  event.respondWith(
    caches.match(req).then(function(cached) {
      var networkFetch = fetch(req).then(function(res) {
        var copy = res.clone();
        caches.open(CACHE_NAME).then(function(cache) { cache.put(req, copy); });
        return res;
      }).catch(function() { return cached; });
      return cached || networkFetch;
    })
  );
});
