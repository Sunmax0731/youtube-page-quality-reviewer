document.getElementById("run").addEventListener("click", async () => {
  const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
  const payload = { url: tab.url, title: tab.title, checkedAt: new Date().toISOString() };
  await chrome.storage.local.set({ lastReview: payload });
  document.getElementById("result").textContent = JSON.stringify(payload, null, 2);
});

