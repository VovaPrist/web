window.addEventListener("pageshow", () => {
    location.href = location.pathname + "?t=" + Date.now();
});