$(document).ready(function () {
var scriptElement = document.createElement("script");
scriptElement.setAttribute('src', chrome.runtime.getURL('code.js'));
document.head.appendChild(scriptElement);
});