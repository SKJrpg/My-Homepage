/**
 * 一言(Hitokoto) API 集成
 * 从 https://v1.hitokoto.cn 获取随机句子并替换 subtitle
 * 句子正文显示在第一行，来源/作者显示在下一行
 */
(function () {
  const hitokotoEl = document.getElementById('hitokoto-text');
  const fromEl = document.getElementById('hitokoto-from');
  if (!hitokotoEl) return;

  fetch('https://v1.hitokoto.cn/')
    .then(function (res) {
      if (!res.ok) throw new Error('Network response was not ok');
      return res.json();
    })
    .then(function (data) {
      hitokotoEl.textContent = data.hitokoto;
      var fromWho = data.from_who;
      var from = data.from;
      if (fromWho || from) {
        var fromText = '';
        if (fromWho) fromText += fromWho;
        if (from) fromText += (fromWho ? ' ' : '') + '[' + from + ']';
        fromEl.textContent = '—— ' + fromText;
        fromEl.style.display = 'block';
      }
    })
    .catch(function (err) {
      console.error('Failed to fetch hitokoto:', err);
    });
})();
