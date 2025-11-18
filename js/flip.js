function handleTickInit(tick) {
  // カウントダウンの終了日時
  const targetDate = "2025-12-14T17:00:00+09:00";

  // カウントダウンを作成
  const counter = Tick.count.down(targetDate);

  counter.onupdate = function(value) {
    tick.value = value;
  };

  counter.onended = function() {
    document.body.innerHTML = "<h1>🎶 演奏発表会 開演！</h1>";
  };
}
