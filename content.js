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
    if (!post.is_modified) {
      console.log('want to modify: ', post);
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
    if (!comment.is_modified) {
      console.log('want to modify: ', comment);
      MathJax.Hub.Typeset(comment);
      comment.is_modified = true;
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

}, 500);

