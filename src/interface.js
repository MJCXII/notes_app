
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

   function hideNoteCreation(){
       if (window.location.href.includes("#") > -1) {
         var x = document.getElementById("notecreate");
         x.style.display = "none";
     };
   }

   function showNoteCreation(){
       if (window.location.href.includes("#") > -1) {
         var x = document.getElementById("notecreate");
         x.style.display = "block";
     };
   }

   window.onpopstate=function()
   {
     showNoteCreation();
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
            hideNoteCreation();
          };


  createButton.addEventListener('click', async function(e) {
    e.preventDefault()
    console.log(textField.value)
    let emojiText = await getEmoji(textField.value)
    let newNote = new Note(notebook.length, `${emojiText}`)
    // noteIndex ++;


    console.log(newNote.content)
    notebook.push(newNote)

    console.log(notebook)
    var oneNote = document.createElement("a")
    var string = newNote.content
    var url = newNote.id

    if(string.length > 20) {
      string = string.substring(0,20) + '...';
    }

    oneNote.setAttribute("href",'#' + `${url}`)
    oneNote.setAttribute("class", "note")
    oneNote.innerHTML = string + '<br>'

    document.getElementById("box").appendChild(oneNote)


  })

async function getEmoji(text) {

  var data = {"text": text};
  const request = async () => {
  const response = await fetch("https://makers-emojify.herokuapp.com",
  {method: 'POST',
  headers: {'Content-Type': 'application/json'},
  body: JSON.stringify(data)});
  const json = await response.json();

  console.log(json);
  return json.emojified_text;
   }
   return await request();
}
