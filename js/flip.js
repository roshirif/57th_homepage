function handleTickInit(tick) {
  // カウントダウンの終了日時
  const targetDate = "2025-12-14T17:00:00+09:00";

  // カウントダウンを作成
  const counter = Tick.count.down(targetDate);

  counter.onupdate = function(value) {
    tick.value = value;
  };

  counter.onended = function() {
    // 今の画面を消さずに、bodyの一番最後に文字を追加する
    document.body.insertAdjacentHTML('beforeend', '<h1>🎶 演奏発表会 開演！</h1>');
  };
}
