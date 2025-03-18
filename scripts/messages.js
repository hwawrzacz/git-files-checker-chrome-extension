export const MessageType = {
  CheckCheckboxes: 'CheckCheckboxes'
}

export class Messages {
  /** @param selectors {string[]} */
  static createCheckCheckboxesMessage(selectors) {
    return { 
      type: MessageType.CheckCheckboxes,
      content: selectors
    }
  }
}
