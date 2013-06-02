var script = document.createElement("script");
script.src  = "https://c328740.ssl.cf1.rackcdn.com/mathjax/latest/MathJax.js?config=TeX-AMS-MML_HTMLorMML";
script.text = "MathJax.Hub.Config({ tex2jax: {inlineMath: [['$','$'], ['\\(','\\)']]} });";
document.body.appendChild(script);

function parsePosts() {
  // expand posts
  var readMoreButtons = document.querySelectorAll('.text_exposed_link a');
  for (var i = 0, len = readMoreButtons.length; i < len; ++i) {
    var elm = readMoreButtons[i];
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

}


function findList(){
  var list = document.getElementById("webMessengerRecentMessages");
  if(list){
    var childNodes = list.getElementsByTagName('p');
    if(childNodes){
      for(i=0 ; i<childNodes.length ; i++){
        var elm = childNodes[i]
          if (elm && !elm.doneTag){
            elm.doneTag = 'done';
            MathJax.Hub.Typeset(elm);
          }else{
          }
      }
      return;
    }else{
      return;
    }
  }
}


setInterval(function() {

  // run this work only when we are in facebook "group" page
  if (location.pathname.match(/^\/groups/) !== null) {
    var script = document.createElement("script");
    script.text = parsePosts.toString() + "parsePosts();";
    document.body.appendChild(script);
  }

  var list = document.getElementById("webMessengerRecentMessages");
  if(list){
    var script = document.createElement("script");
    script.text = findList.toString() + ";findList();";
    document.body.appendChild(script);
  }else{
  }
}, 500);

