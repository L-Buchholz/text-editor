const butInstall = document.getElementById("buttonInstall");

// Logic for installing the PWA
// DONE: Add an event handler to the `beforeinstallprompt` event
window.addEventListener("beforeinstallprompt", (event) => {
  // Store triggered events
  window.deferredPrompt = event;

  // Removes hidden class from button
  butInstall.classList.toggle("hidden", false);
});

// DONE: Implement a click event handler on the `butInstall` element
butInstall.addEventListener("click", async () => {
  const promptEvent = window.deferredPrompt;
  if (!promptEvent) {
    return;
  }
  // Show prompt
  promptEvent.prompt();
  // Resets the deferred prompt variable (only useable once)
  window.deferredPrompt = null;
  butInstall.classList.toggle("hidden", true);
});

// DONE: Add an handler for the `appinstalled` event
window.addEventListener("appinstalled", (event) => {
  // Clears prompt
  window.deferredPrompt = null;
});
