const { createArray, time } = require("./addTimedFunction")

describe(createArray, () => {
  it("returns a random number", () => {
    jest.spyOn(Math, "random").mockReturnValue(0.31)
    expect(createArray(1)).toEqual([31])
  })
  it("returns 2 random numbers", () => {
    jest.spyOn(Math, "random").mockReturnValueOnce(0.31).mockReturnValueOnce(0.02)
    expect(createArray(2)).toEqual([31, 2])
  })
})

describe(time, () => {
  it("calls the function passed to it once", () => {
    const mockFunction = jest.fn();
    time(mockFunction);
    expect(mockFunction).toHaveBeenCalledTimes(1);
  })
  it("calls the function with the parameter given", () => {
    const mockFunction = jest.fn();
    const callSpy = jest.spyOn(mockFunction, "call")
    time(mockFunction, "Test");
    expect(callSpy).toHaveBeenCalledWith("Test");
  })
  it("returns the time taken for the function to finish", () => {
    jest.useFakeTimers();
    const mockFunction = jest.fn(() => jest.advanceTimersByTime(2.401));
    expect(time(mockFunction)).toBe(2.401)
    jest.useRealTimers();
  })
})