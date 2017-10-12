function testNoteListView() {
  var noteList = new NoteList();
  var text3 = "Rice";
  var text4 = "Eggs";
  noteList.createAndSave(text3);
  noteList.createAndSave(text4);
  var noteListView = new NoteListView(noteList);
  noteListView.listToHTML(noteList);
  console.log(noteListView.listToHTML(noteList));
  console.log(['<div><li>Rice</li></div>', '<div><li>Eggs</li></div>']);
  assert.isTrue(noteListView.listToHTML(noteList)[0] === ['<div><li>Rice</li></div>', '<div><li>Eggs</li></div>'][0]);
  assert.isTrue(noteListView.listToHTML(noteList)[1] === ['<div><li>Rice</li></div>', '<div><li>Eggs</li></div>'][1]);
}
testNoteListView();
