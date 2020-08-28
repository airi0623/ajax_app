function check() {
  const posts = document.querySelectorAll(".post");
  posts.forEach(function (post) {
    if (posts.getAttribute("data-load") != nul){
      return null;
    }
    post.setAttribute("data-load", "true")
    post.addEventListener("click", () => {
      const postId = post.getAttribute("data-id");
      const XHR = new XMLHttpRequest();
      //オブジェクトを実際に使うために変数に入れないといけない。
      XHR.open("GET", `/posts/${postId}`, true);
      //open どのようなリクエストをするのかを指定するメソッド
      XHR.responseType = "json";
      //そのリクエストの言葉はjson
      XHR.send();
      //ここでルーティングへ送る
      //受信ができたらしたのが実行される
      XHR.onload = () => {
        if (XHR.status !=200){
          alert('Error ${XHR.status}: ${XHR.statusText}')
          return null;
        }
        const item = XHR.response.post;
        if (item.checked === true) {
          //checkedはメソッド？
          post.setAttribute("data-check", "true");
        } else if (item.checked === false) {
          post.removeAttribute("data-check");
        }
      };
    });
  });
}
//window.addEventListener("load", check);
setInterval(check, 1000);