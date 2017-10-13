function listNotes () {
  //var text1 = ;
  // var text2 = "Eggs";
  var noteList = new NoteList();
  //noteList.lists = [];
  noteList.createAndSave("Favourite drink: seltzer");
  // noteList.createAndSave(text2);
  var entries = noteList.viewNoteList();
  assert.isTrue(entries[0].getText() === "Favourite drink: seltzer");
  // assert.isTrue(noteList.lists.length === 2);
}
listNotes();
