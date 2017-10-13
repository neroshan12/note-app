(function (exports) {
function NoteList() {
  this.lists = [];
}
NoteList.prototype.createAndSave = function(text, NoteConstructor = Note) {  // purpose of this is that you  pass it a text and something else. if you dont pass it a something else then it will default to note
  var note = new NoteConstructor(text); // name of noteconstructor is irrelevant its just a placeholder, this method does not care what it is passed as long as it is a note (lowercase)
  this.lists.push(note);  // if text and nothing else is passed on line 5 then the default value will be note. if something else is passed in then it will just use that to create the note 
};

NoteList.prototype.viewNoteList = function() {
  return this.lists;
};

exports.NoteList = NoteList;
})(this);
