import { DomManipulator } from "./dom-manipulator.js"

export class InputHandler {
  domManipulator = new DomManipulator()

  isInputValid() {
    const inputElement = this.domManipulator.getInputElement()

    if (!inputElement) {
      console.error('No input was provided')
      return
    }

    const inputValue = inputElement.value.trim()
    return inputValue.length > 0
  }
  
  getSearchPhreases() {
    const input = this.domManipulator.getInputElement()
    const inputValue = input.value.trim()

    if (inputValue.length === 0) {
      console.error('No search phrases were provided')
      return
    }

    return inputValue.split(',').map(searchPhrase => searchPhrase.trim())
  }
}