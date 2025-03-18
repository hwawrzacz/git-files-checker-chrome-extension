export class DomManipulator {
  searchPhrasesInputSelector = '#search-phrases'
  submitButtonSelector = '#submit-button'
  errorMessageSelector = '#error-message'

  getInputElement() {
    const element = document.querySelector(this.searchPhrasesInputSelector)
    if (!element) throw new Error('Input element was not found');

    return element
  }

  getSubmitButton() {
    const element = document.querySelector(this.submitButtonSelector)
    if (!element) throw new Error('Submit button was not found');

    return element
  }

  getErrorMessageElement() {
    const element =  document.querySelector(this.errorMessageSelector)
    if (!element) throw new Error('Error message element was not found');

    return element;
  }

  showErrorMessageElement() {
    const element = this.getErrorMessageElement()
    this.showElement(element);
  }

  hideErrorMessageElement() {
    const element = this.getErrorMessageElement()
    this.hideElement(element);
  }

  showElement(element) {
    element.classList.remove('hidden')
  }

  hideElement(element) {
    element.classList.add('hidden')
  }
}
