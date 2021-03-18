
function createNoteSpec (noteText = "what a day to create a note", output = null) {
  localStorage.clear();
  console.log('running test createNote');
  var noteInput = document.getElementById("textField");
  var noteButton = document.getElementById("createButton");
  noteInput.value = noteText;
  noteButton.click();

  var shortNote = noteText.slice(0, 20);
  console.log(shortNote);
  var notes = document.getElementsByClassName('note');
  
  if (output === null){
    output = shortNote;
  }
  function checkNotesThisIsAPrivateFunctionYouGuys() {
    console.log("short note: " + output);
    for ( note of notes ){
      console.log("note text: " + note.text);
      if (note.text.includes(output)){
        console.log("test passed: createNote " + noteText);
        return 1;
      }
    }
    throw "test failed: createNote " + noteText;
  }
  
  setTimeout(checkNotesThisIsAPrivateFunctionYouGuys, 1000);
};

createNoteSpec();
createNoteSpec("the rains down in :earth_africa:", "the rains down in 🌍");
// setTimeout(createNoteSpec(), 1000)