function addNumbers(a: number, b: number): number {
    return a + b;
}

function subtractNumbers(a: number, b: number): number {
    return a - b;
}

function addOrSubtract(a: number, b: number, add: boolean): number {
    return add ? addNumbers(a, b) : subtractNumbers(a, b);
}

export { addNumbers, subtractNumbers, addOrSubtract };
