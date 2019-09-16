/**
 * Creates a new DOM manipulator.
 * @class
 */
export class ComponentService {
  constructor() {
    this.numberOneInput = document.getElementById("numberOne");
    this.numberTwoInput = document.getElementById("numberTwo");
    this.addValuesButton = document.getElementById("addValues");
    this.resultDiv = document.getElementById("result");
  }

  /**
   * Get both inputs from DOM and return into an array.
   * @method getInputs
   */
  getInputs() {
    return [this.numberOneInput.value, this.numberTwoInput.value];
  }

  /**
   * Set the result to the correspending div on DOM.
   * @method setResult
   * @param {string} str - result value
   */
  setResult(str) {
    this.resultDiv.innerText = str;
  }

  /**
   * Handle the click on submit button.
   * @method onClick
   * @param {funtion} cb - callback function
   */
  onClick(cb) {
    this.addValuesButton.addEventListener("click", cb);
  }
}
