import { DomManipulator } from '../scripts/dom-manipulator.js'
import { InputHandler } from '../scripts/input-handler.js'
import { Messages } from '../scripts/messages.js'

const domManipulator = new DomManipulator()
const inputHandler = new InputHandler()

initialize();

function initialize() {
  document.addEventListener('DOMContentLoaded', () => addListeners())
}

function addListeners() {
  addSubmitButtonClickListener()
  addInputValueChangeListener()
}

function addSubmitButtonClickListener() {
  const submitButtonSelector = domManipulator.getSubmitButton()
  submitButtonSelector.addEventListener('click', () => getPhrasesAndSendCheckFilesNotification())
}

function addInputValueChangeListener() {
  const inputElement = domManipulator.getInputElement()
  inputElement.addEventListener('input', () => validateInput())
}

function validateInput() {
  const isInputValid = inputHandler.isInputValid()
  isInputValid
      ? domManipulator.hideErrorMessageElement()
      : domManipulator.showErrorMessageElement()
}

function getPhrasesAndSendCheckFilesNotification() {
  const searchPhrases = inputHandler.getSearchPhreases()
  sendCheckFilesNotification(searchPhrases);
}

/** 
 * @param searchPhrases {string[]}
 */
function sendCheckFilesNotification(searchPhrases) {
  const message = Messages.createCheckCheckboxesMessage(searchPhrases)

  chrome.runtime.sendMessage(message)
  console.log('[Extension Popup] Notification sent', message)
}
