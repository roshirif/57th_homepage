function handleTickInit(tick) {
  // カウントダウンの終了日時
  const targetDate = "2024-12-14T17:00:00+09:00";

  // カウントダウンを作成
  const counter = Tick.count.down(targetDate);

  counter.onupdate = function(value) {
    tick.value = value;
  };

  // カウントが終了したときの処理（何もしないように空っぽにする）
  counter.onended = function() {
    // ここに何も書かないことで、画面はそのままになります
  };
}

