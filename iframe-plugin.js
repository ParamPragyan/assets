(function () {
  var urlParams = new URLSearchParams(window.location.search);
  var iframeUrl = urlParams.get("iframe_url");

  if (iframeUrl) {
    var iframe = document.createElement("iframe");
    iframe.src = iframeUrl;
    iframe.style.width = "100%";
    iframe.style.height = "500px";
    document.body.appendChild(iframe);
  }
})();
