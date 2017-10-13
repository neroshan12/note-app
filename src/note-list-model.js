(function (exports) {
function NoteList() {
  this.lists = [];
}
NoteList.prototype.createAndSave = function(text, NoteConstructor = Note) {
  var note = new NoteConstructor(text);
  this.lists.push(note);
};

NoteList.prototype.viewNoteList = function() {
  return this.lists;
};

exports.NoteList = NoteList;
})(this);
