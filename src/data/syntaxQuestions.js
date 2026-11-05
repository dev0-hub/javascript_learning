// Syntax Master question bank (20 per difficulty, 5 per game mode).
// Row: [mode, code, options, explanation, hint]
//  - __0__, __1__ ... mark the blanks in the code.
//  - options = "correct answers (in blank order, split by #)" + "##" + "wrong choices (split by #)".
// Run `npm run verify:syntax` to compile and execute every answer and compare it with its wrong choices.
const easy = [
  ['fill', 'let name = "John"__0__\nconsole.log(name);', ';##,#.#:', 'A semicolon ends a statement, like a full stop ends a sentence.', 'Which symbol finishes an instruction?'],
  ['fill', 'console.log("Hello"__0__;', ')##]#}#>', 'Every opening ( needs a closing ). console.log( opens it and ) closes it.', 'Look for the opening bracket.'],
  ['fill', 'const greeting = "Hi there__0__;\nconsole.log(greeting);', '"##)#]#}', 'Text must start and end with the same quote mark, so the closing " is needed.', 'Strings are wrapped in quotes.'],
  ['fill', 'const colors = ["red", "blue"__0__;\nconsole.log(colors.length);', ']##)#}#>', 'Arrays open with [ and close with ].', 'Match the opening square bracket.'],
  ['fill', 'let price = 9__0__5;\nconsole.log(price);', '.##,#:#;', 'A decimal point separates the whole and fractional parts: 9.5 is one number.', 'Decimal numbers use this symbol.'],
  ['keyword', '__0__ age = 25;\nage = 26;\nconsole.log(age);', 'let##const#function#if', 'let makes a variable you can change later. const would throw an error on age = 26.', 'Which keyword allows reassignment?'],
  ['keyword', '__0__ sayHi() {\n  console.log("Hi");\n}\nsayHi();', 'function##let#const#return', 'function declares reusable code that can be called by its name.', 'What is a named block of steps called?'],
  ['keyword', 'let count = 3;\n__0__ (count > 0) {\n  console.log(count);\n  count--;\n}', 'while##if#for#else', 'while repeats as long as the condition is true. if would run only once.', 'Which keyword repeats while a condition holds?'],
  ['keyword', 'const score = 70;\n__0__ (score >= 50) {\n  console.log("Pass");\n}', 'if##for#function#return', 'if runs code only when its condition is true.', 'Which keyword makes a yes/no decision?'],
  ['keyword', 'function add(a, b) {\n  __0__ a + b;\n}\nconsole.log(add(2, 3));', 'return##let#const#new', 'return sends a result back out of the function. Without it you get undefined.', 'What gives a result back?'],
  ['symbol', 'let total = 5 __0__ 3;\n// total should be 8\nconsole.log(total);', '+##-#*#/', '+ adds numbers: 5 + 3 = 8.', 'Which operator adds?'],
  ['symbol', 'const fruits = __0__"apple", "banana"];\nconsole.log(fruits[0]);', '[##(#{#<', 'An array starts with [ and ends with ].', 'Match the closing ].'],
  ['symbol', 'let a = 4;\nlet b = a __0__ 2;\n// b should be 2\nconsole.log(b);', '/##*#+#%', '/ divides: 4 / 2 = 2.', 'Which operator divides?'],
  ['symbol', 'let x = 10;\nx __0__ 5;\n// x should become 15\nconsole.log(x);', '+=##=#-=#==', 'x += 5 means x = x + 5, so x becomes 15.', 'Add and store in one step.'],
  ['symbol', 'if ("5" __0__ 5) {\n  console.log("equal");\n} else {\n  console.log("different");\n}\n// strict: the type must match too', '===##==#=#!==', '=== checks type and value, so "5" (text) is not equal to 5 (number).', 'Use the strict equality operator.'],
  ['drag', '__0__ greeting = __1__;\nconsole.log(greeting);', 'const#"Hi"##function#Hi#if', 'const declares the variable and "Hi" is a string. Text needs quotes.', 'Declare it, then give it a text value.'],
  ['drag', 'let __0__ = 5;\nlet __1__ = 7;\nconsole.log(a __2__ 2, b);\n// should print 10 7', 'a#b#*##+#c#9', 'The names a and b are declared, and a * 2 gives 10.', 'The names must match the ones used below.'],
  ['drag', 'const isHappy = __0__;\nconsole.log(typeof isHappy __1__ "boolean");', 'true#===##"true"#=#!==', 'true without quotes is a boolean, and === checks its type equals "boolean".', 'Booleans have no quotes.'],
  ['drag', 'let nums = __0__1, 2, 3__1__;\nconsole.log(nums.length);', '[#]##(#{#)', 'Square brackets create an array, and arrays have a length.', 'Arrays use square brackets.'],
  ['drag', 'let user = "Ana"__0__\nconsole.log("Hi " __1__ user)__2__', ';#+#;##,#-', 'Statements end with ; and + joins text together.', 'End each statement; join strings with +.'],
];
const medium = [
  ['fill', 'let age = 20;\nif (age >= 18) __0__\n  console.log("Adult");\n}', '{##(#[#:', 'The body of an if statement goes between { and }.', 'What opens a code block?'],
  ['fill', 'for (let i = 0; i < 3; i++__0__ {\n  console.log(i);\n}', ')##}#]#;', 'The three loop parts sit inside ( ), so we close it with ).', 'Close the loop header.'],
  ['fill', 'function double(n) {\n  return n * 2__0__\n}\nconsole.log(double(4));', ';##,#:#)', 'A statement ends with a semicolon.', 'Which symbol ends the return line?'],
  ['fill', 'const person = { name: "Ana"__0__ age: 30 };\nconsole.log(person.age);', ',##;#:#)', 'Properties inside an object are separated by commas.', 'How do you separate object properties?'],
  ['fill', 'let i = 0;\nwhile (i < 3) {\n  console.log(i);\n  i__0__\n}', '++##+=#==#**', 'i++ adds 1 each round, so the loop eventually stops.', 'Which operator adds one?'],
  ['keyword', 'const nums = [1, 2, 3];\n__0__ (const n of nums) {\n  console.log(n);\n}', 'for##while#if#switch', 'for...of loops over each item in an array.', 'Which loop visits each array item?'],
  ['keyword', 'function check(n) {\n  if (n > 5) {\n    return "big";\n  } __0__ {\n    return "small";\n  }\n}\nconsole.log(check(2));', 'else##elseif#then#otherwise', 'else runs when the if condition is false.', 'What runs when if fails?'],
  ['keyword', 'const x = 3;\nswitch (x) {\n  __0__ 3:\n    console.log("three");\n    break;\n}', 'case##if#when#of', 'Inside a switch, each option starts with case.', 'Each switch option begins with this word.'],
  ['keyword', '// skip the number 2\nfor (let i = 0; i < 5; i++) {\n  if (i === 2) {\n    __0__;\n  }\n  console.log(i);\n}', 'continue##break#return#stop', 'continue skips the rest of this round and moves on. break would end the loop.', 'Skip one round only.'],
  ['keyword', 'console.log(__0__ 42);', 'typeof##new#let#return', 'typeof tells you the type of a value. For 42 it prints "number".', 'Which keyword reports the type of a value?'],
  ['symbol', 'const age = 25;\n// 18 or older counts as adult\nif (age __0__ 18) {\n  console.log("Adult");\n}', '>=##<=#==#<', '>= means greater than or equal, so 18 and above pass.', 'Greater than or equal.'],
  ['symbol', 'const isMember = true;\nconst hasCoupon = false;\n// either one is enough\nif (isMember __0__ hasCoupon) {\n  console.log("discount");\n}', '||##&&#==#!', '|| means OR: only one side must be true.', 'Which symbol means OR?'],
  ['symbol', 'let n = 17;\n// remainder when dividing by 2\nconsole.log(n __0__ 2);', '%##/#*#**', '% gives the remainder: 17 ÷ 2 leaves 1.', 'Which operator gives the remainder?'],
  ['symbol', 'const a = 5;\nconst b = 10;\n// both must be true\nif (a > 1 __0__ b > 20) {\n  console.log("both true");\n}', '&&##||#!=#!', '&& means AND: both sides must be true. Here b > 20 is false, so nothing prints.', 'Which symbol means AND?'],
  ['symbol', 'let text = "Hi";\nconsole.log(text __0__ " there");', '+##-#*#/', '+ joins strings together (concatenation).', 'Which operator joins text?'],
  ['drag', 'function add(a, b) __0__\n  __1__ a + b;\n}\nconsole.log(add(2, 3));', '{#return##(#let#}', 'The function body opens with { and return sends back the sum.', 'Open the body, then give back a value.'],
  ['drag', 'for (let i = __0__; i __1__ 3; i++) {\n  console.log(i);\n}', '0#<##1#<=#>', 'Start at 0 and continue while i < 3, printing 0, 1, 2.', 'Start at zero; stop before 3.'],
  ['drag', 'const age = 20;\n__0__ (age >= 18) {\n  console.log("Adult");\n} __1__ {\n  console.log("Minor");\n}', 'if#else##for#while#case', 'if checks the condition and else handles everything else.', 'A pair that makes a two-way decision.'],
  ['drag', 'const greet = (name) __0__ {\n  return "Hi " __1__ name;\n};\nconsole.log(greet("Ana"));', '=>#+##->#-#=', 'Arrow functions use =>, and + joins the text.', 'Arrow functions have a special symbol.'],
  ['drag', 'const items = ["pen", "cup"];\nfor (const item __0__ items) {\n  console.log(item);\n}\nconsole.log(items.__1__);', 'of#length##in#size#push', 'for...of gives each item, and .length is how many items there are.', 'Loop over values; count with a property.'],
];
const hard = [
  ['fill', 'const fruits = ["apple", "banana"];\nfruits__0__"cherry");\nconsole.log(fruits.length);', '.push(##.pop(#.length(#.add(', '.push() adds an item to the end of an array, so the length becomes 3.', 'Which method adds to the end?'],
  ['fill', 'const user = { name: "Ana", age: 30 };\nconsole.log(user__0__name);', '.##,#:#;', 'Dot notation reads a property: user.name.', 'How do you reach into an object?'],
  ['fill', 'const nums = [10, 20, 30];\nconsole.log(nums__0__2]);', '[##(#{#.', 'Square brackets read an item by its index: nums[2] is 30.', 'Index with square brackets.'],
  ['fill', 'const car = { brand: "Kia" };\ncar.year __0__ 2024;\nconsole.log(car.year);', '=##:#==#=>', '= assigns a value, which adds the new year property.', 'Which symbol assigns?'],
  ['fill', 'const {name__0__ age} = { name: "Ana", age: 30 };\nconsole.log(name, age);', ',##;#:#.', 'Destructuring pulls several properties out at once, separated by commas.', 'Separate the names.'],
  ['keyword', 'const nums = [1, 2, 3];\nconst doubled = nums.__0__(n => n * 2);\nconsole.log(doubled);', 'map##filter#forEach#reduce', '.map() builds a new array by changing every item.', 'Which method transforms every item?'],
  ['keyword', 'const nums = [1, 2, 3, 4];\nconst evens = nums.__0__(n => n % 2 === 0);\nconsole.log(evens);', 'filter##map#find#some', '.filter() keeps only the items that pass the test.', 'Which method keeps matching items?'],
  ['keyword', 'async function load() {\n  const value = __0__ Promise.resolve(7);\n  console.log(value);\n}\nload();', 'await##async#new#return', 'await pauses an async function until the promise gives a value.', 'Wait for the promise.'],
  ['keyword', 'class Dog {\n  __0__(name) {\n    this.name = name;\n  }\n}\nconsole.log(new Dog("Rex").name);', 'constructor##init#new#function', 'The constructor method runs automatically when you create an object with new.', 'The special setup method of a class.'],
  ['keyword', 'try {\n  JSON.parse("{bad");\n} __0__ (err) {\n  console.log("Invalid JSON");\n}', 'catch##except#finally#else', 'catch handles an error thrown inside try.', 'What catches errors?'],
  ['symbol', 'const a = [1, 2];\nconst b = [__0__a, 3];\n// b should be [1, 2, 3]\nconsole.log(b);', '...##..#**#&&', 'The spread operator ... copies array items into a new array.', 'Three dots.'],
  ['symbol', 'const user = { address: null };\n// no error if address is null\nconsole.log(user.address__0__city);', '?.##.#!.#::', '?. (optional chaining) stops safely with undefined instead of crashing.', 'A dot with a safety check.'],
  ['symbol', 'const nums = [1, 2, 3];\nconst total = nums.reduce((sum, n) __0__ sum + n, 0);\nconsole.log(total);', '=>##->#=#==', 'Arrow functions use =>. The reducer adds each number to sum: 6.', 'The arrow function symbol.'],
  ['symbol', 'const price = 0;\n// default only if price is null or undefined\nconsole.log(price __0__ 10);', '??##||#-#?:', '?? only replaces null or undefined, so 0 stays 0. || would wrongly replace 0.', 'Nullish coalescing.'],
  ['symbol', 'const n = "Ana";\nconsole.log(`Hello ${n}__0__);', '`##"#)#}', 'Template literals use backticks, which let ${} insert variables into text.', 'Template strings use a special quote.'],
  ['drag', 'const btn = document.__0__("#save");\nbtn.__1__("click", () => {\n  console.log("saved");\n});', 'querySelector#addEventListener##getElement#onClick#createElement', 'querySelector finds the element, and addEventListener runs code when it is clicked.', 'Find the element, then listen for clicks.'],
  ['drag', 'const title = document.querySelector("h1");\ntitle.__0__ = "Welcome";\ntitle.classList.__1__("big");', 'textContent#add##text#append#innerText', 'textContent changes the text, and classList.add attaches a CSS class.', 'Change the text, then add a class.'],
  ['drag', 'const person = {\n  name: "Ana",\n  greet__0__ {\n    return "Hi " + this.name;\n  }\n};\nconsole.log(person.greet__1__);', '()#()##(#:#)', 'A method needs () for its parameters, and () again to call it.', 'Parentheses appear twice.'],
  ['drag', 'const users = [{ name: "Ana" }, { name: "Bo" }];\nconst names = users.__0__(u => u.__1__);\nconsole.log(names);', 'map#name##filter#id#forEach', '.map() collects u.name from each user into a new array.', 'Transform each user into a name.'],
  ['drag', 'const data = { list: [1, 2, 3] };\nconst __0__ = data.list.__1__(n => n > 1);\nconsole.log(big);', 'big#filter##data#map#find', 'The variable big stores the result of .filter(), which keeps numbers above 1.', 'The name must match the one logged.'],
];

const withLevel = (rows, difficulty) => rows.map((r) => [r[0], difficulty, ...r.slice(1)]);
const rows = [...withLevel(easy, 'Easy'), ...withLevel(medium, 'Medium'), ...withLevel(hard, 'Hard')];

export const syntaxQuestions = rows.map(([mode, difficulty, code, opts, explanation, hint], i) => {
  const [good, bad = ''] = opts.split('##');
  return { id: `SM${i + 1}`, mode, difficulty, code, answers: good.split('#'), distractors: bad.split('#').filter(Boolean), explanation, hint };
});
