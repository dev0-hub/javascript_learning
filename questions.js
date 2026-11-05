// Each row: [question, [4 choices], index of correct choice, explanation, difficulty]
// To add a topic (Conditions, Loops, Functions), add a new key below. The app picks it up automatically.
const raw = {
  Variables: [
    ['Which keyword declares a variable you can reassign later?', ['const', 'let', 'fixed', 'static'], 1, '`let` creates a variable that can be reassigned. `const` cannot be reassigned.', 'Easy'],
    ['What happens here?\n\nconst x = 5;\nx = 6;', ['x becomes 6', 'TypeError', 'x becomes undefined', 'Nothing happens'], 1, 'Reassigning a `const` throws "TypeError: Assignment to constant variable."', 'Easy'],
    ['Which is a valid variable name?', ['2name', 'my-name', 'my_name', 'let'], 2, 'Names cannot start with a digit, contain "-", or be reserved words like `let`. Underscores are fine.', 'Easy'],
    ['What is the value of x?\n\nlet x;', ['null', '0', 'undefined', 'NaN'], 2, 'A declared variable with no value is `undefined`.', 'Easy'],
    ['What happens?\n\nlet a = 1;\nlet a = 2;', ['a is 2', 'SyntaxError', 'a is 1', 'a is undefined'], 1, 'You cannot redeclare a `let` variable in the same scope. Use `a = 2;` to reassign.', 'Medium'],
    ['Are `score` and `Score` the same variable?', ['Yes', 'No, JavaScript is case-sensitive', 'Only in strict mode', 'Only with var'], 1, 'Capital letters matter, so these are two different names.', 'Easy'],
    ['What happens?\n\nconst list = [1];\nlist.push(2);', ['TypeError', 'Works: list is [1, 2]', 'list stays [1]', 'SyntaxError'], 1, '`const` stops reassignment, not changes inside the array. The array itself can still be modified.', 'Medium'],
    ['Which keywords create block-scoped variables?', ['var only', 'let and const', 'const only', 'None of them'], 1, '`let` and `const` live only inside the { } block where they are declared. `var` ignores blocks.', 'Medium'],
    ['What is logged?\n\nconsole.log(x);\nvar x = 5;', ['5', 'ReferenceError', 'undefined', 'null'], 2, '`var` declarations are hoisted (moved to the top) but the value is not, so x is `undefined`.', 'Hard'],
    ['Which name follows the usual JavaScript camelCase style?', ['user_age', 'UserAge', 'userAge', 'user-age'], 2, 'JavaScript variables conventionally use camelCase: first word lowercase, later words capitalised.', 'Easy'],
  ],
  'Data Types': [
    ['What does typeof "hello" return?', ['"string"', '"text"', '"char"', '"String"'], 0, 'typeof returns lowercase type names; text values are "string".', 'Easy'],
    ['What does typeof 42 return?', ['"int"', '"number"', '"float"', '"numeric"'], 1, 'JavaScript has one number type for both integers and decimals.', 'Easy'],
    ['What does typeof null return?', ['"null"', '"object"', '"undefined"', '"number"'], 1, 'This is a famous historical bug in JavaScript. null is a primitive, but typeof reports "object".', 'Hard'],
    ['What does typeof undefined return?', ['"undefined"', '"null"', '"object"', '"void"'], 0, 'undefined is its own type.', 'Easy'],
    ['Which of these is NOT a primitive type?', ['string', 'boolean', 'object', 'symbol'], 2, 'Objects (including arrays and functions) are not primitives.', 'Medium'],
    ['What does typeof true return?', ['"boolean"', '"bool"', '"number"', '"string"'], 0, 'true and false are booleans.', 'Easy'],
    ['What does typeof [] return?', ['"array"', '"object"', '"list"', '"undefined"'], 1, 'Arrays are objects. Use Array.isArray([]) to check for an array.', 'Medium'],
    ['What is 0.1 + 0.2 === 0.3 ?', ['true', 'false', 'TypeError', 'undefined'], 1, 'Decimals are stored in binary, so 0.1 + 0.2 is 0.30000000000000004.', 'Hard'],
    ['What does typeof NaN return?', ['"NaN"', '"undefined"', '"number"', '"object"'], 2, 'NaN means "Not a Number" but its type is still "number".', 'Medium'],
    ['Which line creates a BigInt?', ['123n', '123b', 'big 123', 'BigInt(1.5)'], 0, 'A trailing n makes a BigInt literal. BigInt(1.5) throws because it is not a whole number.', 'Hard'],
  ],
  Operators: [
    ['What is 7 % 3 ?', ['2', '1', '0', '3'], 1, '% is the remainder operator. 7 divided by 3 leaves 1.', 'Easy'],
    ['What is 2 ** 3 ?', ['6', '8', '9', '5'], 1, '** is exponentiation: 2 × 2 × 2 = 8.', 'Easy'],
    ['What is "5" + 3 ?', ['8', '"53"', 'NaN', 'TypeError'], 1, 'With a string, + joins text, so the number 3 becomes "3" and the result is "53".', 'Medium'],
    ['What is "5" - 3 ?', ['"53"', '2', 'NaN', 'TypeError'], 1, '- only works with numbers, so "5" is converted to 5 and the result is 2.', 'Medium'],
    ['What is 5 == "5" ?', ['true', 'false', 'TypeError', 'undefined'], 0, '== converts types before comparing, so it is true.', 'Medium'],
    ['What is 5 === "5" ?', ['true', 'false', 'TypeError', 'undefined'], 1, '=== compares type and value. A number and a string are different types. Prefer ===.', 'Easy'],
    ['What is x?\n\nlet x = 5;\nx += 3;', ['5', '8', '3', '"53"'], 1, 'x += 3 is shorthand for x = x + 3.', 'Easy'],
    ['What is !true || true ?', ['true', 'false', 'undefined', 'Error'], 0, '!true is false, and false || true is true.', 'Medium'],
    ['What is null ?? "default" ?', ['null', '"default"', 'undefined', '""'], 1, '?? returns the right side when the left side is null or undefined.', 'Hard'],
    ['What is logged?\n\nlet i = 5;\nconsole.log(i++);', ['5', '6', 'undefined', 'Error'], 0, 'Post-increment returns the old value (5) first, then raises i to 6.', 'Hard'],
  ],
};

const XP = { Easy: 10, Medium: 20, Hard: 30 };

// Turn the compact rows into objects with ids and XP rewards.
export const topics = Object.keys(raw);
export const questions = topics.flatMap((topic) =>
  raw[topic].map(([question, options, answer, explanation, difficulty], i) => ({
    id: `${topic.replace(/\s/g, '')}-${i + 1}`,
    topic, question, options, answer, explanation, difficulty, xp: XP[difficulty],
  }))
);
