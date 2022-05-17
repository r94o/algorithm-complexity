const time = require("./time");

describe(time, () => {
  it("calls the function passed to it once", () => {
    const mockFunction = jest.fn();
    time(mockFunction);
    expect(mockFunction).toHaveBeenCalledTimes(1);
  })
})