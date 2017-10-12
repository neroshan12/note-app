(function(exports) {
  function NoteController(noteList) {
    this.noteList = noteList;
    this.noteList.createAndSave("Rice");
    this.noteListView = new NoteListView(this.noteList);
  }

  NoteController.prototype.displayNotes = function() {
    var notesHTML = this.noteListView.listToHTML();
    document.getElementById('app').innerHTML = notesHTML;
  };

  exports.NoteController = NoteController;
})(this);
