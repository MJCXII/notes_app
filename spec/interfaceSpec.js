
function createNote (noteText = "what a day to create a note") {
  console.log('running test createNote');
  var noteInput = document.getElementById("textField");
  var noteButton = document.getElementById("createButton");
  noteInput.value = noteText;
  noteButton.click();

  var notes = document.getElementsByClassName('note');
  for ( note of notes ){
    var shortNote = noteText.slice(0, 20);
    // console.log(shortNote);
    // console.log(note.text);
    if (note.text.includes(shortNote)){
      console.log("test passed: createNote " + noteText);
      return 1;
    }
  }
  throw "test failed: createNote " + noteText;
};

createNote();