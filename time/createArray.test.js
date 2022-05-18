const createArray = require("./createArray")

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


