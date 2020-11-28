// animate()は、アニメーション効果を設定するjQueryの関数
// id="back内のaタグがクリックされたとき処理"
$(function () {
  $('#back a').on('click', function (event) {
    $('body, html').animate({
      scrollTop: 0
    }, 800);
    event.preventDefault();
  });
});
// $('セレクタ名').animate({
//   変化対象のプロパティ名:変化値
// }, アニメーションの動作時間);

// scrollTopはスクロール位置を取得できるメソッド
// :0を指定しているので最上部に移動するになる
// アニメーション動作時間800=0.8秒
// 動作時間の指定方法「slow」「normal」「fast」
// 5行目 ページ全体に対して処理を実行したいので、セレクタには、$('body, html')が設定されています。
// これは、「body要素またはhtml要素」の意味になります。
// 2つの要素を指定するのは、ユーザの利用環境によって指定対象の要素が変化するためです。
// 8行目 event.preventDefault(); は、aタグの機能を無効にするメソッドです。
// aタグは画面遷移をする機能を保ちますが、今回は必要ないため無効化しています。