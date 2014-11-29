console.log('content.js');
var mathJaxScript = document.createElement('script');
mathJaxScript.type = 'text/javascript';
mathJaxScript.src = chrome.extension.getURL('MathJax/MathJax.js?config=TeX-AMS-MML_HTMLorMML');
mathJaxScript.text = "MathJax.Hub.Config({ tex2jax: {inlineMath: [['$','$'], ['\\(','\\)']]} });";
document.body.appendChild(mathJaxScript);

