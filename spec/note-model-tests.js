  function testNoteIncludesText() {
    var text = 'My favourite language is JavaScript';
    var note = new Note(text);

    assert.isTrue(note.getText() === text);
}
testNoteIncludesText();
