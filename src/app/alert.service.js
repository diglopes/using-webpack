import { inputsAreValid } from "./util/inputs-are-valid.js";

/**
 * Creates a new DOM manipulator.
 * @class
 */
export class AlertService {
  constructor() {
    this.errorBox = document.getElementById("error");
  }

  /**
   * Set an error message
   * @method handleAdditionError
   * @param {Array} inputs - An array of primitive type data.
   * @param {Array} numbers - An array of primitive type data.
   */
  handleAdditionError(inputs, numbers) {
    const fullMessage = inputs.reduce((message, str, index) => {
      if (inputsAreValid(numbers[index])) {
        return message + "";
      } else {
        return message + `${str} is not a number. `;
      }
    }, "Please enter two valid numbers! ");

    this.errorBox.classList.remove("invisible");
    this.errorBox.innerText = fullMessage;
  }

  /**
   * Set the errors box to invisible.
   * @method hideErrors
   */
  hideErrors() {
    this.errorBox.classList.add("invisible");
  }
}
