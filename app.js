document.addEventListener("DOMContentLoaded", () => {
  const statusEl = document.getElementById("status");
  const userEl = document.getElementById("userid");

  if (!window.Telegram || !window.Telegram.WebApp) {
    statusEl.innerText = "❌ Открыто не из Telegram";
  } else {
    const tg = window.Telegram.WebApp;
    tg.ready();
    const user = tg.initDataUnsafe?.user;

    if (user?.id) {
      statusEl.innerText = "✅ Telegram Mini App открыт";
      userEl.innerText = "User ID: " + user.id;
    } else {
      statusEl.innerText = "❌ user не передан";
    }
  }
});
