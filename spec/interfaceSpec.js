
function createNoteSpec (noteText = "what a day to create a note") {
  console.log('running test createNote');
  var noteInput = document.getElementById("textField");
  var noteButton = document.getElementById("createButton");
  noteInput.value = noteText;
  noteButton.click();

  var shortNote = noteText.slice(0, 20);
  console.log(shortNote);
  var notes = document.getElementsByClassName('note');
  
  function checkNotesThisIsAPrivateFunctionYouGuys() {
    console.log("short note: " + shortNote);
    for ( note of notes ){
      console.log("note text: " + note.text);
      if (note.text.includes(shortNote)){
        console.log("test passed: createNote " + noteText);
        return 1;
      }
    }
    throw "test failed: createNote " + noteText;
  }
  
  setTimeout(checkNotesThisIsAPrivateFunctionYouGuys, 1000);
};

createNoteSpec();
// setTimeout(createNoteSpec(), 1000)