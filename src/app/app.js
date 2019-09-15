const alertService = new AlertService();
const componentService = new ComponentService();

const run = (alertService, componentService) => {
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

run(alertService, componentService);
