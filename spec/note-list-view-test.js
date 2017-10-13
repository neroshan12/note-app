function testNoteList(){
    var noteList = new NoteList();
    noteList.createAndSave("I HATE THIS WEEK WITH A PASSION!");
    notelistView = new NoteListView(noteList);
    text5 = "<ul><li><div>I HATE THIS WEEK WIT</div></li></ul>";
    assert.isTrue(notelistView.listToHTML() === text5);
  }
testNoteList();
