const time = require("./time");

describe(time, () => {
  it("calls the function passed to it once", () => {
    const mockFunction = jest.fn();
    time(mockFunction);
    expect(mockFunction).toHaveBeenCalledTimes(1);
  })
  it("calls the function with the parameter given", () => {
    const mockFunction = jest.fn();
    time(mockFunction, "Test");
    expect(mockFunction).toHaveBeenCalledWith("Test");
  })
})