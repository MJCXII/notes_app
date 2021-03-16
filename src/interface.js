


window.onload = showAllArticles();

function showAllArticles(){

      for(let i = 0; i < notebook.length ; i++){
        var oneNote = document.createElement("a")
        var string = notebook[i].content

        if(string.length > 20) {
          string = string.substring(0,20) + '...' ;
        }
        oneNote.setAttribute("href",'#' + `${string}`)
        oneNote.innerHTML = string
        document.getElementById("box").appendChild(oneNote)
      }

   }


  // makeUrlChangeShowArticleForCurrentPage();
  //
  //     function makeUrlChangeShowArticleForCurrentPage() {
  //       window.addEventListener("hashchange", showArticleForCurrentPage);
  //     };
  //
  //     function showArticleForCurrentPage() {
  //       let article = getArticleFromUrl(window.location)
  //
  //       if (article) {
  //       showArticle(article);
  //       }
  //       else {
  //           document.getElementById('newsWrap').innerHTML = ""
  //         showAllArticles();
  //       }
  //     };
  //
  //     function getArticleFromUrl(location) {
  //       return location.hash.split("#")[1];
  //     };
  //
  //     function showArticle(article) {
  //
  //
  //       fetch("http://news-summary-api.herokuapp.com/aylien?apiRequestUrl=https://api.aylien.com/api/v1/summarize?url=" + "https://www.theguardian.com/" + article )
  //         .then(res => res.json())
  //         .then(summary => {
  //           console.log(summary)
  //           document.getElementById('newsWrap').innerHTML = summary.sentences
  //         });
  //     };
