import { inputsAreValid } from "./util/inputs-are-valid.js";
import { parseInputs } from "./util/parse-input.js";

export const run = (alertService, componentService) => {
  alertService.hideErrors();

  componentService.onClick(() => {
    alertService.hideErrors();
    const inputs = componentService.getInputs();
    const parsedInputs = parseInputs(...inputs);
    if (inputsAreValid(...parsedInputs)) {
      const [numA, numB] = parsedInputs;
      const result = numA + numB;
      componentService.setResult(result);
    } else {
      componentService.setResult("");
      alertService.handleAdditionError(inputs, parsedInputs);
    }
  });
};
