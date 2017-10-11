(function(exports){
  function NoteListView(noteList) {
    this.noteList = noteList;
  }

NoteListView.prototype.listToHTML = function(noteList) {

  //for (i=0; i<this.noteList.viewNoteList().length; i++) {
    var items = this.noteList.viewNoteList();
    var toReturn = items.map(function(item) {
      return "<div><li>" + item.getText() + "</li></div>" ;
    });
    return toReturn;

  };

exports.NoteListView = NoteListView;
})(this);
