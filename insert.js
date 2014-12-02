function parsePosts() {
  // expand posts
  var postContentList = document.getElementsByClassName('userContent');
  for (postContentIndex = 0; postContentIndex < postContentList.length; ++postContentIndex) {
    content=postContentList[postContentIndex];
    if (content&&!content.fbtexedTag) { 
      MathJax.Hub.Queue(["Typeset",MathJax.Hub,content]);
      content.fbtexedTag='fbtexed';
    }
  }

  var commentBodyList = document.getElementsByClassName('UFICommentBody');
  for (commentBodyIndex = 0; commentBodyIndex < commentBodyList.length; ++commentBodyIndex) {
    comment=commentBodyList[commentBodyIndex];
    if (comment&&!comment.fbtexedTag) { 
      MathJax.Hub.Queue(["Typeset",MathJax.Hub,comment]);
      comment.fbtexedTag='fbtexed';
    }
  }


/*
  var postMoreButton = document.querySelectorAll('.see_more_link');
  for (var i = 0, len = postMoreButton.length; i < len; ++i) {
    var elm = postMoreButton[i];
    elm.click();
    elm.parentNode && elm.parentNode.removeChild(elm);
  }

  // for each post...
  var posts = document.querySelectorAll('#pagelet_group_mall .userContent');
  for (var i = 0, l = posts.length; i < l; ++i) {
    var post = posts[i];
    if (window.MathJax && !post.is_modified) {
      MathJax.Hub.Typeset(post);
      post.is_modified = true;
    }
  }

  // expand comment...
  var seeMoreButtons = document.querySelectorAll('.UFICommentContent .SeeMoreLink');
  for (var i = 0, len = seeMoreButtons.length; i < len; ++i) {
    var elm = seeMoreButtons[i];
    elm.click();
    elm.parentNode && elm.parentNode.removeChild(elm);
  }

  // for each comment...
  var comments = document.querySelectorAll('.UFICommentContent');
  var commentAuthors = document.querySelectorAll('.UFICommentContent .UFICommentActorName');
  for (var i = 0, l = comments.length; i < l; ++i) {
    var comment = comments[i];
    if (window.MathJax && !comment.is_modified) {
      MathJax.Hub.Typeset(comment);
      comment.is_modified = true;
    }
  }
*/

}


function convertConversations() {
  var conversations = document.getElementsByClassName('conversation');
  //for each conversation
  for (conversationIndex = 0; conversationIndex < conversations.length; ++conversationIndex) {
    try{
      var messages = conversations[conversationIndex].childNodes[0].childNodes;
      //for each message
      for (msgIndex = 0; msgIndex < messages.length; ++msgIndex) {
        try{
          var message = messages[msgIndex];
          if (!message||message.fbtexedTag) { continue; }
          var lines = message.childNodes[0].childNodes[0].childNodes[0].childNodes[0].childNodes[0].childNodes[0].childNodes;
          //for each line
          for (lineIndex = 0; lineIndex < lines.length; ++lineIndex) {
            try{
              var wantLine = lines[lineIndex];
              MathJax.Hub.Queue(["Typeset",MathJax.Hub,wantLine]);
            } catch (err) {
              //console.log(err);
              //console.log('In lines loop');
            }
          }
        } catch (err) {
          //console.log(err);
          //console.log('In messages loop');
        }
        message.fbtexedTag='fbtexed';
      }
    } catch (err) {
      //console.log(err);
      //console.log('In conversations loop');
    }
  }
}

function recursivelyCheck() {
  convertConversations();
  if (location.pathname.match(/^\/groups/) !== null) {
    parsePosts();
  }
  setTimeout( recursivelyCheck, 800);
}

window.onload = function () {
  recursivelyCheck();
  /*
  //MathJax.Hub.Config({ tex2jax: {inlineMath: [['$','$'], ['\\(','\\)']]} });
  setTimeout(function() {
  // run this work only when we are in facebook "group" page
    if (location.pathname.match(/^\/groups/) !== null) {
      var script = document.createElement("script");
      script.text = parsePosts.toString() + "parsePosts();";
      document.body.appendChild(script);
    }
  }, 1000);
  */

};
