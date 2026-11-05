export const extendedQuestions = [
  {
    id: 'TF1', type: 'trueFalse', difficulty: 'Easy', xp: 10,
    question: {
      en: 'This code prints true.\n\nconst isReady = true;\nconsole.log(isReady);',
      my: 'ဒီ Code က true ကို ပြမယ်။\n\nconst isReady = true;\nconsole.log(isReady);',
    },
    options: { en: ['True', 'False'], my: ['မှန်', 'မှား'] }, answer: 0,
    explanation: {
      en: 'The variable isReady stores the boolean value true, and console.log prints that value.',
      my: 'isReady Variable ထဲမှာ true ဆိုတဲ့ Boolean တန်ဖိုးရှိပြီး console.log က အဲဒီတန်ဖိုးကို ပြပါတယ်။',
    },
    hint: {
      en: 'Check the value assigned to isReady.',
      my: 'isReady ထဲကို ထည့်ထားတဲ့ တန်ဖိုးကို ကြည့်ပါ။',
    },
  },
  {
    id: 'TF2', type: 'trueFalse', difficulty: 'Easy', xp: 10,
    question: {
      en: 'In JavaScript, typeof [] returns "array".',
      my: 'JavaScript မှာ typeof [] က "array" ကို ပြန်ပေးတယ်။',
    },
    options: { en: ['True', 'False'], my: ['မှန်', 'မှား'] }, answer: 1,
    explanation: {
      en: 'Arrays are objects, so typeof [] returns "object". Use Array.isArray() to check whether a value is an array.',
      my: 'Array တွေက Object အမျိုးအစားဖြစ်လို့ typeof [] က "object" ကို ပြန်ပေးပါတယ်။ Array ဟုတ်မဟုတ် စစ်ဖို့ Array.isArray() ကို သုံးပါ။',
    },
    hint: {
      en: 'Remember the special behavior of typeof with arrays.',
      my: 'Array တွေနဲ့ typeof သုံးတဲ့အခါ ရလဒ်ကို သတိရပါ။',
    },
  },
  {
    id: 'TF3', type: 'trueFalse', difficulty: 'Medium', xp: 15,
    question: {
      en: 'This code runs without an error.\n\nconst score = 5;\nscore = 6;',
      my: 'ဒီ Code က Error မဖြစ်ဘဲ အလုပ်လုပ်မယ်။\n\nconst score = 5;\nscore = 6;',
    },
    options: { en: ['True', 'False'], my: ['မှန်', 'မှား'] }, answer: 1,
    explanation: {
      en: 'A const binding cannot be reassigned. Assigning 6 to score throws a TypeError.',
      my: 'const Variable ကို တန်ဖိုးအသစ် ပြန်သတ်မှတ်လို့မရပါဘူး။ score ကို 6 ပြန်ထည့်တဲ့အခါ TypeError ဖြစ်ပါတယ်။',
    },
    hint: {
      en: 'Can a const variable be assigned a new value?',
      my: 'const Variable ကို တန်ဖိုးအသစ် ပြန်ထည့်လို့ရသလား?',
    },
  },
  {
    id: 'GO1', type: 'guessOutput', difficulty: 'Easy', xp: 10,
    question: {
      en: 'What does this code print?\n\nconsole.log(2 + "3");',
      my: 'ဒီ Code က ဘာကို ပြမလဲ?\n\nconsole.log(2 + "3");',
    },
    options: { en: ['5', '"23"', 'NaN', 'TypeError'], my: ['5', '"23"', 'NaN', 'TypeError'] }, answer: 1,
    explanation: {
      en: 'When + has a string operand, JavaScript joins the values as text. The result is the string "23".',
      my: '+ Operator နဲ့ String ကို တွဲသုံးတဲ့အခါ တန်ဖိုးတွေကို စာသားအဖြစ် ဆက်ပေးပါတယ်။ ရလဒ်က "23" ဆိုတဲ့ String ပါ။',
    },
    hint: {
      en: 'What does + do when one value is a string?',
      my: 'တန်ဖိုးတစ်ခုက String ဖြစ်နေတဲ့အခါ + က ဘာလုပ်သလဲ?',
    },
  },
  {
    id: 'GO2', type: 'guessOutput', difficulty: 'Easy', xp: 10,
    question: {
      en: 'What does this code print?\n\nconsole.log(10 % 3);',
      my: 'ဒီ Code က ဘာကို ပြမလဲ?\n\nconsole.log(10 % 3);',
    },
    options: { en: ['3', '1', '0', '3.33'], my: ['3', '1', '0', '3.33'] }, answer: 1,
    explanation: {
      en: '% returns the remainder after division. 10 divided by 3 leaves a remainder of 1.',
      my: '% က စားပြီးအကြွင်းကို ပြန်ပေးပါတယ်။ 10 ကို 3 နဲ့စားရင် အကြွင်း 1 ကျန်ပါတယ်။',
    },
    hint: {
      en: 'The % operator gives the remainder, not the quotient.',
      my: '% Operator က စားလဒ်မဟုတ်ဘဲ အကြွင်းကို ပြန်ပေးပါတယ်။',
    },
  },
  {
    id: 'GO3', type: 'guessOutput', difficulty: 'Medium', xp: 15,
    question: {
      en: 'What does this code print?\n\nconsole.log(Boolean(""));',
      my: 'ဒီ Code က ဘာကို ပြမလဲ?\n\nconsole.log(Boolean(""));',
    },
    options: { en: ['true', 'false', '""', 'undefined'], my: ['true', 'false', '""', 'undefined'] }, answer: 1,
    explanation: {
      en: 'An empty string is falsy, so Boolean("") converts it to false.',
      my: 'စာသားအလွတ် "" က falsy တန်ဖိုးဖြစ်လို့ Boolean("") က false အဖြစ် ပြောင်းပေးပါတယ်။',
    },
    hint: {
      en: 'Is an empty string truthy or falsy in JavaScript?',
      my: 'JavaScript မှာ String အလွတ်က truthy လား falsy လား?',
    },
  },
  {
    id: 'FE1', type: 'findError', difficulty: 'Easy', xp: 10,
    question: {
      en: 'Which line throws a runtime error?\n\n1. const score = 10;\n2. console.log(score.toUpperCase());\n3. console.log("done");',
      my: 'ဘယ်စာကြောင်းမှာ အလုပ်လုပ်နေစဉ် Error ဖြစ်သလဲ?\n\n1. const score = 10;\n2. console.log(score.toUpperCase());\n3. console.log("done");',
    },
    options: { en: ['Line 1', 'Line 2', 'Line 3', 'Line 4'], my: ['စာကြောင်း ၁', 'စာကြောင်း ၂', 'စာကြောင်း ၃', 'စာကြောင်း ၄'] }, answer: 1,
    explanation: {
      en: 'score is a number, which has no toUpperCase() method. Calling it throws a TypeError.',
      my: 'score က Number ဖြစ်ပြီး toUpperCase() Method မရှိပါဘူး။ ခေါ်လိုက်တဲ့အခါ TypeError ဖြစ်ပါတယ်။',
    },
    hint: {
      en: 'Check whether the value is text or a number before calling toUpperCase().',
      my: 'toUpperCase() ခေါ်မယ့်တန်ဖိုးက String လား Number လား စစ်ကြည့်ပါ။',
    },
  },
  {
    id: 'FE2', type: 'findError', difficulty: 'Medium', xp: 15,
    question: {
      en: 'Which line causes an error when this code runs?\n\n1. const name = "Mya";\n2. console.log(name);\n3. name = "Aye";',
      my: 'ဒီ Code ကို အလုပ်လုပ်တဲ့အခါ ဘယ်စာကြောင်းက Error ဖြစ်စေသလဲ?\n\n1. const name = "Mya";\n2. console.log(name);\n3. name = "Aye";',
    },
    options: { en: ['Line 1', 'Line 2', 'Line 3', 'No error'], my: ['စာကြောင်း ၁', 'စာကြောင်း ၂', 'စာကြောင်း ၃', 'Error မရှိပါ'] }, answer: 2,
    explanation: {
      en: 'name was declared with const, so assigning a new value on line 3 throws a TypeError.',
      my: 'name ကို const နဲ့ ကြေညာထားတဲ့အတွက် စာကြောင်း ၃ မှာ တန်ဖိုးအသစ်ထည့်တဲ့အခါ TypeError ဖြစ်ပါတယ်။',
    },
    hint: {
      en: 'Find the line that tries to change a const variable.',
      my: 'const Variable ကို တန်ဖိုးပြောင်းဖို့ ကြိုးစားတဲ့ စာကြောင်းကို ရှာပါ။',
    },
  },
  {
    id: 'FE3', type: 'findError', difficulty: 'Medium', xp: 15,
    question: {
      en: 'Which line causes an error when this code runs?\n\n1. const scores = [8, 9];\n2. console.log(scores[2].toFixed(0));',
      my: 'ဒီ Code ကို အလုပ်လုပ်တဲ့အခါ ဘယ်စာကြောင်းက Error ဖြစ်စေသလဲ?\n\n1. const scores = [8, 9];\n2. console.log(scores[2].toFixed(0));',
    },
    options: { en: ['Line 1', 'Line 2', 'Both lines', 'No error'], my: ['စာကြောင်း ၁', 'စာကြောင်း ၂', 'နှစ်ကြောင်းလုံး', 'Error မရှိပါ'] }, answer: 1,
    explanation: {
      en: 'The array has items at indexes 0 and 1 only. scores[2] is undefined, and undefined has no toFixed method.',
      my: 'ဒီ Array မှာ Index 0 နဲ့ 1 ပဲ ရှိပါတယ်။ scores[2] က undefined ဖြစ်ပြီး undefined မှာ toFixed Method မရှိတဲ့အတွက် Error ဖြစ်ပါတယ်။',
    },
    hint: {
      en: 'Check which indexes exist in an array with two items.',
      my: 'အချက်အလက်နှစ်ခုပါတဲ့ Array မှာ ဘယ် Index တွေ ရှိသလဲ စစ်ကြည့်ပါ။',
    },
  },
];

export function getExtendedQuestionContent(question, language) {
  return {
    question: question.question[language],
    options: question.options[language],
    explanation: question.explanation[language],
    hint: question.hint[language],
  };
}
