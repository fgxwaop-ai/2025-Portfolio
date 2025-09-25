


function judgeArticleID ()
{
  var startButton = document.getElementById("button");
  console.log("スタート：：" + startButton);
  startButton.addEventListener("click", OutputArticle(), false);
}

function OutputArticle ()
{
  console.log("out");
  //<p>要素を生成
  let p = document.createElement('p');
  p.textContent = '記事が追加されたよ！！';
  let article = document.getElementById('article')
  article.appendChild(p);
}

//構文の記事に使う pre を生成。
//const tagArticleInCode = document.createElement("pre");

//記事の内容を配列で定義。
//const tagArticleInCodes = [];
//tagArticleInCodes.push("&lt;a href='※遷移先のサイト'&gt;aタグ&lt;/a&gt;", "未定義", "未定義");




