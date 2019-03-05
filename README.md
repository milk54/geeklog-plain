# plain ver1.0 について

## 著者
Masuko Koeda as みるく (<http://white-stage.com/>)

## 説明
Geeklog2.2.0次バージョンリリース前の「denim」をベースに  
PC2カラム、タブレットスマホ１カラムのテーマを作成。

詳しくは、<http://white-stage.com/article.php/plain>をご覧ください。

## ライセンス  
denimのライセンスに準じます。denimのライセンスは License:GPL-2.0+ です。  

==============================================================================  

## ファイル構成
plainフォルダ（テーマのファイルです。）  
  ｜  
RADME（解説ファイル[このファイルです。]）  

==============================================================================  


## 仕様
* アクセシブルなGeeklogテーマ「plain」は、Geeklog2.2.0次バージョンリリース前の「denim」をベースに作成したテーマです。

* PC2カラム、タブレットスマホ１カラムレイアウトのテーマです。

* 横幅1024以下の環境では、WAI-ARIAを使用したドロワーメニュー(Progressive Hamburger by @heydonworks http://www.heydonworks.com/)を使用させていただいていいます。(よりアクセシブルになるよう少し改良しています)

* ドロワーメニューを開いた時は、「×」ボタン又はメニューを選択するまではフォーカスはグローバルナビゲーション内のみの移動になります。

* 画面サイズが1024px以上の時、プラグインのカスタムメニューで第2階層のメニューを設定した際、WAI-ARIAを使ったアクセシブルなドロップダウンメニュー(Simple dropdownsby @heydonworks http://www.heydonworks.com/ を使用させていただいてます)になるよう設定しています。 （第2階層（1つのサブメニュー）までの対応）

* グローバルメニューとパンくずリストの中で選択されているメニューには、aria-current属性が記述されるよう設定しています。

* facebookの窓 等 横幅を絶対値で指定している箇所を追加される場合、その数値(横幅)より小さいサイズのデバイスで閲覧すると横スクロールバーが出てしまうかレイアウトが崩れる可能性があるのでご注意ください。(ご自身で横幅を調整してください)

* 記事及び静的ページ用テーブルのスタイルを設定していますが、管理画面及びプラグインに影響しないようtable要素にclass="default"を付けて使用してください。

* サイト名のフォントスタイルとサイズは、日本語に合わせて設定しています。

## テーマ使用方法
「plain」フォルダをlayout/にアップロードして下さい。管理画面のコンフィギュレーションのテーマで「plain」を選択してください。


## 表示確認
Windows 7 / Firefox 65.0.1,Google Chrome 72.0.3626.109,Internet Explorer 11
Windows 10 / Firefox 65.0.1,Google Chrome 72.0.3626.109,Edge 17.17134
Mac OS High Sierra 10.13.6 / Firefox 65.0.1,Google Chrome 72.0.3626.119,Safari 12.0.3
iPad / iOS 12.1.4 Safari,Xperia / Android 8.0.0 GoogleChrome 72.0.3626.105,iPhone7 / iOS 11.2.6 Safari,iPhone5s / iOS 11.2.6 Safari

## 読み上げ確認
Windows 7 / Internet Explorer 11 PC-Talker7
Windows 10 / Firefox 65.0.1 NVDA 2018.4.1jp
iPad / iOS 12.1.4 Safari VoiceOver,Xperia / Android8.0.0 GoogleChrome 72.0.3626.105 TalkBack7.2.0.220693075