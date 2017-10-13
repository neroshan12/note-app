function singleNoteViewTest(){
  var noteDouble = {
    getText: function() {
      return "Favourite drink: seltzer";
    }
  };

  var singleNoteView = new SingleNoteView(noteDouble);
  var testText2 = "<div>Favourite drink: seltzer</div>";
  assert.isTrue(singleNoteView.getHTML() === testText2);
}
singleNoteViewTest();
