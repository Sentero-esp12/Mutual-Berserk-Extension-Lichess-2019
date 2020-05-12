chrome.webRequest.onHeadersReceived.addListener(
  function (details) {
    for (var i = 0; i < details.responseHeaders.length; ++i) {
      if (details.responseHeaders[i].name.toLowerCase() == 'x-frame-options') {
        console.log(details.responseHeaders[i]);
        //details.responseHeaders.splice(i, 1);
details.responseHeaders[i] = {name: "X-Frame-Options", value: "sameorigin"};
        return {
          responseHeaders: details.responseHeaders
        };
      }
    }
  }, {
    urls: ["https://lichess.org/study/MjObcRkT"]
  }, ["blocking", "responseHeaders"]);