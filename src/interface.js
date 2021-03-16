
var createButton = document.getElementById('createButton')
var textField = document.getElementById('textField')
// var noteIndex = 1;  // start at 1 because the pre-set note has id 0

window.onload = showAllArticles();

function showAllArticles(){

      for(let i = 0; i < notebook.length ; i++){
        var oneNote = document.createElement("a")
        var string = notebook[i].content
        var url = notebook[i].id
        if(string.length > 20) {
          string = string.substring(0,20) + '...' ;
        }
        oneNote.setAttribute("href",'#' + `${url}`)
        oneNote.setAttribute("class", "note")
        oneNote.innerHTML = string + '<br>'
        document.getElementById("box").appendChild(oneNote)
      }

   }



  makeUrlChangeShowArticleForCurrentPage();

      function makeUrlChangeShowArticleForCurrentPage() {
        window.addEventListener("hashchange", showArticleForCurrentPage);
      };

      function showArticleForCurrentPage() {
        let article = getArticleFromUrl(window.location)

        if (article) {
        showArticle(article);
        }
        else {
            document.getElementById('box').innerHTML = ""
          showAllArticles();
        }
      };

      function getArticleFromUrl(location) {
        var id = location.hash.split("#")[1];
        if (id === undefined){
          showAllArticles();
        }
        else{
          var content = notebook[id].content
          return content
        }
      };

      function showArticle(article) {
            document.getElementById('box').innerHTML = article
          };


  createButton.addEventListener('click', function(e) {
    e.preventDefault()
    console.log('something')
    let text = textField.value;
    let newNote = new Note(notebook.length, `${text}`)
    // noteIndex ++;
    console.log(newNote.content)
    notebook.push(newNote)
    console.log(notebook)
    var oneNote = document.createElement("a")
    var string = newNote.content
    var url = newNote.id

    if(string.length > 20) {
      string = string.substring(0,20) + '...' + '<br>' ;
    }

    oneNote.setAttribute("href",'#' + `${url}`)
    oneNote.setAttribute("class", "note")
    oneNote.innerHTML = string
    document.getElementById("box").appendChild(oneNote)
  })
