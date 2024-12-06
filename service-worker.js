
self.addEventListener("install", (event) => {
    console.log("Service Worker installed");
});

self.addEventListener("activate", (event) => {
    console.log("Service Worker activated");
});

self.addEventListener("push", (event) => {
    const data = event.data ? event.data.text() : "Geofence alert!";
    self.registration.showNotification("Geofence Alert", {
        body: data,
    });
});
