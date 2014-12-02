//console.log('content.js');

var configScript = document.createElement('script');
configScript.type = 'text/javascript';
configScript.src = chrome.extension.getURL('config.js');
/*
configScript.innerHTML = '\
MathJax.Hub.Config({ \
  tex2jax: {\
    inlineMath: [ [\'$\',\'$\'], [\'\\(","\\)\'] ],\
    processEscapes: true\
    },\
  });'
  */
document.body.appendChild(configScript);

var mathJaxScript = document.createElement('script');
mathJaxScript.type = 'text/javascript';
mathJaxScript.src = chrome.extension.getURL('MathJax/MathJax.js?config=TeX-AMS-MML_HTMLorMML');
//mathJaxScript.src = chrome.extension.getURL('MathJax/MathJax.js?config=TeX-AMS_HTML');
//mathJaxScript.src = chrome.extension.getURL('MathJax/MathJax.js');
//mathJaxScript.text = 'MathJax.Hub.Config({ tex2jax: {inlineMath: [[\'$\',\'$\'], [\'\\(\',\'\\)\']]} });';
document.body.appendChild(mathJaxScript);

var insertScript = document.createElement('script');
insertScript.type = 'text/javascript';
insertScript.src = chrome.extension.getURL('insert.js');
document.body.appendChild(insertScript);

