// 発表会の日付（年, 月-1, 日）
const eventDate = new Date(2025, 11, 14); // 12月は11（0始まり）

function updateCountdown() {
  const now = new Date();
  const diff = eventDate - now;

  if (diff <= 0) {
    document.getElementById("countdown-timer").innerHTML = "本日開催！🎉";
    return;
  }

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((diff / (1000 * 60)) % 60);
  const seconds = Math.floor((diff / 1000) % 60);

  document.getElementById("countdown-timer").innerHTML =
    `${days}日 ${hours}時間 ${minutes}分 ${seconds}秒`;
}

updateCountdown();
setInterval(updateCountdown, 1000);
