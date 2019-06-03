
const add = (a, b) => a + b;

const multiply = (a, b) => a * b;

const getGreeting = (name = 'Anonymous') => {
    return `Hello ${name}!`;
};

test('Tests addition of two numbers.', () => {
    const result = add(2, 7);
    expect(result).toBe(9);
});

test('Tests multiplication', () => {
    expect(multiply(5, 3)).toBe(15);
});

test('Tests getGreeting with argument', () => {
    expect(getGreeting("Ammma, Naanna")).toBe("Hello Ammma, Naanna!");
});

test('Tests getGreeting with no argument', () => {
    expect(getGreeting()).toBe("Hello Anonymous!");
});