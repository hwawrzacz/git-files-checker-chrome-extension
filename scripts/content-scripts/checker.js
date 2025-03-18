let headerElementSelector = '.file-header'
let fileNameElementSelector = '.file-info a[title]'
let attributeToMatchSearchPhraseAgainst = 'title'
let viewedLabelSelector = '.js-reviewed-toggle'
let viewedCheckboxSelector = 'input[name=viewed][type=checkbox]'

initialize();

function initialize() {
  chrome.runtime.onMessage.addListener(message => {
    console.log('[Content Script] Message received', message)
    if (message.type === `CheckCheckboxes` && !!message.content) {
      checkFilesAndPrintReport(message.content);
    } else {
      console.error('Unspported message, or missing payload')
    }
  })
  console.log(`[Content Script] Initialized`);
}

function checkFilesAndPrintReport(searchPhrases) {
  checkFiles(searchPhrases);
  printReport(searchPhrases)
}

function checkFiles(searchPhrases) {
  const uncheckedViewedLabel = getUncheckedViewedLabels(searchPhrases)
  uncheckedViewedLabel.forEach((label) => label.click())
}

function printReport(searchPhrases) {
  const filesTotal = getAllHeaders(searchPhrases).length;
  const filesChecked = getHeadersMatchingSearchQuery(searchPhrases).length;

  console.log(`Files total: ${filesTotal}\nFiles just checked: ${filesChecked}`)
}

function getUncheckedViewedLabels(searchPhrases) {
  const allViewedLabels = getAllViewedLabels(searchPhrases)
  return allViewedLabels.filter((label) => {
    const checkbox = label.querySelector(viewedCheckboxSelector)
    return !(checkbox === null || checkbox === void 0 ? void 0 : checkbox.checked)
  })
}

function getAllViewedLabels(searchPhrases) {
  const headersMatchingSearchQuery = getHeadersMatchingSearchQuery(searchPhrases)
  return headersMatchingSearchQuery
  .map((parent) => parent.querySelector(viewedLabelSelector))
  .filter((label) => !!label)
}

function getHeadersMatchingSearchQuery(searchPhrases) {
  const allHeaders = getAllHeaders()
  return allHeaders.filter((header) => {
    const fileInfoElement = header.querySelector(fileNameElementSelector)
    const title = fileInfoElement === null || fileInfoElement === void 0 ? void 0 : fileInfoElement.getAttribute(attributeToMatchSearchPhraseAgainst)
    return searchPhrases.some((searchPhrase) => !!(title === null || title === void 0 ? void 0 : title.includes(searchPhrase)))
  })
}

function getAllHeaders() {
  return Array.from(document.querySelectorAll(headerElementSelector))
}