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
  it("returns the time taken for the function to finish", () => {
    jest.useFakeTimers();
    const mockFunction = jest.fn(() => jest.advanceTimersByTime(2.401));
    expect(time(mockFunction)).toBe(2.401)
    jest.useRealTimers();
  })
})