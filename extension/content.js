chrome.runtime?.onMessage?.addListener((message, _sender, sendResponse) => {
  if (message?.type === "collect-page-summary") {
    sendResponse({ title: document.title, imageCount: document.images.length, url: location.href });
  }
});

