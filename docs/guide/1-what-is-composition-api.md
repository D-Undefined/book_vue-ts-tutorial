## なぜ composition API を使うのか

他のフレームワークと比較して Vue は比較的に自由に書いても **ちゃんと** 動いてくれることが入門者向けとして歓迎されてきました。

しかし、 **ちゃんと** 動くということは、 Vue が裏側で **うまく処理してくれていた** から動いていたのです。

その弊害は開発規模が大規模になればなるほど、ロジックが複雑になり、様々な問題が見えてくるようになりました。

そこに、他の js フレームワーク (Angular や React) が TypeScript 対応する中で遅れを取っていた Vue のために Composition API が開発されました。

[qiita なぜcomposition API なのか](https://qiita.com/karamage/items/7721c8cac149d60d4c4a)