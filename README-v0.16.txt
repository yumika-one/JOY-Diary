JOY Diary v0.16 — 本棚画像実装版

今回の変更
- 承認済みの縦長本棚画像を assets/ui/library.webp に実装
- 画像上に透明なHTMLボタンを重ね、各日付のページを開ける仕様を維持
- デスクトップ／スマホで画像比率を崩さず表示
- Service Workerキャッシュをv0.16へ更新
- 表紙、Journey、Daily、ラブリー君、「意図する」ボタンは変更なし

アップロード方法
1. ZIPを展開
2. 中身を既存リポジトリの最上位（index.htmlがある場所）へ上書き
3. GitHub DesktopのSummary：
   JOY Diary v0.16 image library
4. Commit to main → Push origin

キャッシュが残る場合
- 公開ページを強制再読み込み
- それでも変わらない場合は、ブラウザを一度閉じて再度開く
