const { divide, multiply, subtract, sum } = require("./math")

describe("Math", () => {
test("should sum 2 + 2 to be 4", () => {
    const result = sum(2, 2)
    expect(result).toBe(4)
    expect(result).toBeGreaterThan(3)
})

it("should multiply 3 * 3 to result to 9", () => {
    const result = multiply(3, 3)
    expect(result).toBe(9)
})
})

it("should divide 4 / 2 to result to 2", () => {
    const result = divide(4, 2)
    expect(result).toBe(2)
})

it("should subtract 2 - 1 to result to 1", () => {
    const result = subtract(2, 1)
    expect(result).toBe(1)
})

it("should be falsy", () => {
    expect(undefined).toBeFalsy()
})

test("Array", () => {
    let days = ["Monday", "Tuesday", "Wednesday"]
    expect(days).toContain("Tuesday")
    expect(days).not.toContain("Friday")
})
