// FILTER
function filterPlatform(type) {
  const cards = document.querySelectorAll(".card");

  cards.forEach(card => {
    const platform = card.getAttribute("data-platform");

    card.style.display =
      type === "all" || platform === type ? "block" : "none";
  });
}

// COPY DISCORD
function copyDiscord(name) {
  navigator.clipboard.writeText(name);
  alert("Copied: " + name);
}

// 🚀 ONE-TAP MOBILE REDIRECT (IMPORTANT)
function openDiscord(name) {
  const url = "https://discord.com/users/" + name;

  // mobile + desktop open
  window.open(url, "_blank");
}