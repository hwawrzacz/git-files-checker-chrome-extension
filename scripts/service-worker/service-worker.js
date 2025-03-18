chrome.runtime.onMessage.addListener(message => handleMessage(message));

/** @param message {{ type: MessageType; content?: any }} */
async function handleMessage(message) {
  console.log('[Service worker] New message arrived', message)
  
  if ('CheckCheckboxes' === message.type) {
    await handleCheckCheckboxesMessage(message);
  } 
  else handleDefaultMessage(message)
}

async function handleCheckCheckboxesMessage(message) { 
  const tab = await this.getCurrentTab()
  chrome.tabs.sendMessage(tab.id, message)
  console.log('[Service worker] Message sent to tab', {tabId: tab.id, message})
}

/** @return {Promise} */
async function getCurrentTab() {
  let queryOptions = { active: true };
  let tabs = await chrome.tabs.query(queryOptions);

  return tabs[0];
}

function handleDefaultMessage(message) {
  console.log(`[Service Worker] Unknown message type ${message?.type}`)
}
