window.onload = function() {

function canNoteControllerBeInstantiated() {

  var noteListStub = {
    createAndSave: function(){}
    };

  var testText = "<ul><li><div>Favourite drink: seltzer</div></li></ul>";
  var notelistviewdouble = {
    listToHTML: function() { return testText ;}
  };


  var noteController = new NoteController(noteListStub);
  noteController.noteListView = notelistviewdouble;


  noteController.displayNotes();
  assert.isTrue(document.getElementById('app').innerHTML === testText);
}
canNoteControllerBeInstantiated();
};
