'use strict';

(function(exports){
  function NoteListView(noteList) {
    this.noteList = noteList;
  }

NoteListView.prototype.listToHTML = function(noteList) {

  var topandtail = '<ul>'
  for( var i = 0 ; i < this.noteList.lists.length; i++ ) {
    topandtail = topandtail + "<li><div>" + this.noteList.lists[i]._text.slice(0,20) + "</div></li>";
  }
  topandtail = topandtail + '</ul>'
  return topandtail;
}

exports.NoteListView = NoteListView;
})(this);
