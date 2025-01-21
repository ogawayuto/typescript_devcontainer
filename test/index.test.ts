import { addNumbers, addOrSubtract, subtractNumbers } from "@/index";

test("addNumbers", () => {
    expect(addNumbers(1, 2)).toBe(3);
});

test("subtractNumbers", () => {
    expect(subtractNumbers(1, 2)).toBe(-1);
});

test("addOrSubtract", () => {
    expect(addOrSubtract(1, 2, true)).toBe(3);
    expect(addOrSubtract(1, 2, false)).toBe(-1);
});
