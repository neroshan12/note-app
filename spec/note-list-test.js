function listNotes () {
  var text1 = "Favourite drink: seltzer";
  var text2 = "Eggs";
  var noteList = new NoteList();
  noteList.lists = [];
  noteList.createAndSave(text1);
  noteList.createAndSave(text2);
  var entries = noteList.viewNoteList();
  assert.isTrue(entries[0].getText() === text1);
  assert.isTrue(noteList.lists.length === 2);
}
listNotes();
