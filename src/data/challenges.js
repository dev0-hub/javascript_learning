// tests: [ [arguments], expectedResult ]
export const challenges = [
  { id: 'C1', title: 'Add two numbers', fn: 'add', xp: 30, difficulty: 'Easy', prompt: 'Write a function add(a, b) that returns a + b.', starter: 'function add(a, b) {\n  // your code here\n}', tests: [[[2, 3], 5], [[-1, 1], 0], [[10, 15], 25]] },
  { id: 'C2', title: 'Even or odd', fn: 'isEven', xp: 30, difficulty: 'Easy', prompt: 'Write isEven(n) that returns true for even numbers, otherwise false. Hint: use %.', starter: 'function isEven(n) {\n  // your code here\n}', tests: [[[4], true], [[7], false], [[0], true]] },
  { id: 'C3', title: 'Reverse a string', fn: 'reverseString', xp: 40, difficulty: 'Medium', prompt: 'Write reverseString(text) that returns the text backwards. Hint: split, reverse, join.', starter: 'function reverseString(text) {\n  // your code here\n}', tests: [[['abc'], 'cba'], [['hello'], 'olleh'], [[''], '']] },
  { id: 'C4', title: 'Sum an array', fn: 'sumArray', xp: 50, difficulty: 'Medium', prompt: 'Write sumArray(numbers) that returns the total of all numbers in the array.', starter: 'function sumArray(numbers) {\n  // your code here\n}', tests: [[[[1, 2, 3]], 6], [[[]], 0], [[[10, -4]], 6]] },
];
