// Learner-facing quiz text is kept outside the quiz UI and answer logic.
const rows = {
  Variables: [
    ['နောက်မှ တန်ဖိုးပြန်သတ်မှတ်နိုင်တဲ့ Variable ကို ကြေညာဖို့ ဘယ် Keyword ကို သုံးသလဲ?', null, '`let` ကို သုံးရင် Variable ကို နောက်မှ တန်ဖိုးအသစ် ပြန်သတ်မှတ်နိုင်ပါတယ်။ `const` ကတော့ ပြန်သတ်မှတ်လို့ မရပါဘူး။', 'တန်ဖိုးအသစ် ထပ်ထည့်လို့ရမယ့် Variable ကို စဉ်းစားပါ။'],
    ['ဒီ Code ကို အလုပ်လုပ်စေတဲ့အခါ ဘာဖြစ်မလဲ?\n\nconst x = 5;\nx = 6;', ['x ရဲ့ တန်ဖိုးက 6 ဖြစ်သွားမယ်', 'TypeError ဖြစ်မယ်', 'x ရဲ့ တန်ဖိုးက undefined ဖြစ်သွားမယ်', 'ဘာမှမဖြစ်ဘူး'], 'const Variable ကို တန်ဖိုးအသစ် ပြန်သတ်မှတ်လို့မရတဲ့အတွက် TypeError ဖြစ်ပါတယ်။', 'const Variable ကို တန်ဖိုးပြန်သတ်မှတ်လို့ ရမရ စဉ်းစားပါ။'],
    ['ဘယ်စာကြောင်းက တရားဝင် Variable နာမည်တစ်ခု ဖြစ်သလဲ?', null, 'Variable နာမည်ကို ကိန်းဂဏန်းနဲ့ စလို့မရပါဘူး။ - သင်္ကေတ ထည့်လို့မရသလို let လို Reserved Keyword ကိုလည်း နာမည်အဖြစ် မသုံးနိုင်ပါဘူး။ Underscore သုံးနိုင်ပါတယ်။', 'တစ်ခုချင်းစီရဲ့ စာလုံးနဲ့ သင်္ကေတတွေကို စစ်ကြည့်ပါ။'],
    ['ဒီ Code ပြီးရင် x ရဲ့ တန်ဖိုးက ဘာဖြစ်မလဲ?\n\nlet x;', ['null', '0', 'undefined', 'NaN'], 'ကြေညာထားပေမယ့် တန်ဖိုးမထည့်ရသေးတဲ့ Variable ရဲ့ တန်ဖိုးက undefined ဖြစ်ပါတယ်။', 'x ကို ကြေညာထားသလား၊ တန်ဖိုးထည့်ထားသလား ကြည့်ပါ။'],
    ['ဒီ Code မှာ ဘာဖြစ်မလဲ?\n\nlet a = 1;\nlet a = 2;', ['a က 2 ဖြစ်မယ်', 'SyntaxError ဖြစ်မယ်', 'a က 1 ဖြစ်မယ်', 'a က undefined ဖြစ်မယ်'], 'တူညီတဲ့ Scope ထဲမှာ let Variable တစ်ခုကို ထပ်ကြေညာလို့ မရပါဘူး။ တန်ဖိုးပြောင်းဖို့ `a = 2;` လို့ရေးပါ။', 'ဒီနေရာမှာ Variable အသစ်ကြေညာနေတာလား၊ ရှိပြီးသားကို ပြင်နေတာလား?'],
    ['`score` နဲ့ `Score` က Variable တစ်ခုတည်းလား?', ['တူပါတယ်', 'မတူပါဘူး၊ JavaScript မှာ စာလုံးအကြီးအသေးကို ခွဲပါတယ်', 'Strict mode မှာပဲ ကွာပါတယ်', 'var သုံးမှပဲ ကွာပါတယ်'], 'JavaScript မှာ စာလုံးအကြီးအသေးကို ခွဲခြားပါတယ်။ ဒါကြောင့် score နဲ့ Score က နာမည်မတူတဲ့ Variable တွေပါ။', 'နာမည်ထဲက ပထမစာလုံးကို သတိထားကြည့်ပါ။'],
    ['ဒီ Code မှာ ဘာဖြစ်မလဲ?\n\nconst list = [1];\nlist.push(2);', ['TypeError ဖြစ်မယ်', 'အလုပ်လုပ်ပြီး list က [1, 2] ဖြစ်မယ်', 'list က [1] အတိုင်းပဲ', 'SyntaxError ဖြစ်မယ်'], '`const` က Variable ကို အသစ်ပြန်သတ်မှတ်တာကို တားတာပါ။ Array အတွင်းက အချက်အလက်ကိုတော့ ပြောင်းနိုင်ပါတယ်။', 'const က Variable ကို တားတာလား၊ Array အတွင်းက အချက်အလက်ကိုပါ တားတာလား?'],
    ['Block အတွင်းမှာသာ အသုံးပြုနိုင်တဲ့ Variable ကို ဘယ် Keyword တွေက ဖန်တီးသလဲ?', ['var တစ်ခုတည်း', 'let နဲ့ const', 'const တစ်ခုတည်း', 'ဘယ် Keyword မှ မဟုတ်ပါ'], '`let` နဲ့ `const` ကို ကြေညာထားတဲ့ { } Block အတွင်းမှာပဲ အသုံးပြုနိုင်ပါတယ်။ `var` ကတော့ ဒီလို Block Scope မရှိပါဘူး။', '{ } အတွင်းမှာ အလုပ်လုပ်တဲ့ Keyword တွေကို သတိရပါ။'],
    ['ဒီ Code က ဘာကို ပြမလဲ?\n\nconsole.log(x);\nvar x = 5;', ['5', 'ReferenceError', 'undefined', 'null'], '`var` ကြေညာချက်ကို အပေါ်ကို မြှင့်တင်သလို ကိုင်တွယ်ပေမယ့် တန်ဖိုးသတ်မှတ်ချက်ကိုတော့ မမြှင့်ပါဘူး။ ဒါကြောင့် ဒီနေရာမှာ undefined ဖြစ်ပါတယ်။', 'ကြေညာချက်နဲ့ တန်ဖိုးသတ်မှတ်ချက် ဘယ်လိုကွဲသလဲ စဉ်းစားပါ။'],
    ['ပုံမှန် JavaScript camelCase ပုံစံနဲ့ ကိုက်ညီတဲ့ နာမည်က ဘယ်ဟာလဲ?', null, 'JavaScript မှာ Variable နာမည်တွေကို camelCase နဲ့ရေးလေ့ရှိပါတယ်။ ပထမစာလုံးကို အသေးထားပြီး နောက်စကားလုံးတွေရဲ့ ပထမစာလုံးကို အကြီးရေးပါတယ်။', 'စကားလုံးတစ်လုံးထက်ပိုတဲ့ နာမည်ပုံစံကို ကြည့်ပါ။'],
  ],
  'Data Types': [
    ['typeof "hello" က ဘာပြန်ပေးသလဲ?', null, 'typeof က Type အမည်ကို အသေးစာလုံးနဲ့ ပြန်ပေးပါတယ်။ စာသားတန်ဖိုးတွေရဲ့ Type က "string" ပါ။', 'စာသားကို Quote နဲ့ရေးထားတာကို သတိထားပါ။'],
    ['typeof 42 က ဘာပြန်ပေးသလဲ?', null, 'JavaScript မှာ ကိန်းပြည့်နဲ့ ဒဿမကိန်းအတွက် Number Type တစ်မျိုးတည်းကို သုံးပါတယ်။', 'JavaScript ရဲ့ ကိန်းဂဏန်း Type အမည်ကို စဉ်းစားပါ။'],
    ['typeof null က ဘာပြန်ပေးသလဲ?', null, 'null က Primitive Type ဖြစ်ပေမယ့် JavaScript ရဲ့ သမိုင်းကြောင်းအရ typeof က "object" လို့ ပြပါတယ်။', 'JavaScript ရဲ့ လူသိများတဲ့ ထူးခြားချက်ကို သတိရပါ။'],
    ['typeof undefined က ဘာပြန်ပေးသလဲ?', null, 'undefined မှာ ကိုယ်ပိုင် Type အမည် ရှိပါတယ်။', 'Value ရဲ့ အမည်နဲ့ Type အမည်က တူပါတယ်။'],
    ['အောက်ပါအရာတွေထဲမှာ Primitive Type မဟုတ်တာ ဘယ်ဟာလဲ?', null, 'Object တွေ (Array နဲ့ Function ပါဝင်) က Primitive Type မဟုတ်ပါဘူး။', 'Array နဲ့ Function တွေကို JavaScript က ဘယ်လိုသတ်မှတ်လဲ?'],
    ['typeof true က ဘာပြန်ပေးသလဲ?', null, 'true နဲ့ false တို့ဟာ Boolean တန်ဖိုးတွေပါ။', 'မှန်/မှားကို ကိုယ်စားပြုတဲ့ Data Type ကို စဉ်းစားပါ။'],
    ['typeof [] က ဘာပြန်ပေးသလဲ?', null, 'Array တွေဟာ Object အမျိုးအစားဖြစ်ပါတယ်။ Array ဟုတ်မဟုတ် တိတိကျကျ စစ်ဖို့ Array.isArray([]) ကို သုံးပါ။', 'Array တွေကို Object ရဲ့ အမျိုးအစားခွဲတစ်ခုအဖြစ် သတ်မှတ်ပါတယ်။'],
    ['0.1 + 0.2 === 0.3 ရဲ့ ရလဒ်က ဘာလဲ?', null, 'ဒဿမကိန်းတွေကို Binary ပုံစံနဲ့ သိမ်းတဲ့အတွက် 0.1 + 0.2 က 0.30000000000000004 ဖြစ်နိုင်ပါတယ်။ ဒါကြောင့် === စစ်တဲ့အခါ false ဖြစ်ပါတယ်။', 'ဒဿမကိန်းတွေကို ကွန်ပျူတာမှာ ကိုယ်စားပြုပုံကို သတိရပါ။'],
    ['typeof NaN က ဘာပြန်ပေးသလဲ?', null, 'NaN ဆိုတာ "Not a Number" ဖြစ်ပေမယ့် JavaScript မှာ သူ့ရဲ့ Type က "number" ပါ။', 'NaN ရဲ့ Type အမည်ကို စစ်ကြည့်ပါ။'],
    ['BigInt တန်ဖိုးဖန်တီးတဲ့ စာကြောင်းက ဘယ်ဟာလဲ?', null, 'ကိန်းပြည့်နောက်မှာ n ထည့်ရေးရင် BigInt Literal ဖြစ်ပါတယ်။ 1.5 က ကိန်းပြည့်မဟုတ်လို့ BigInt(1.5) က Error ဖြစ်ပါတယ်။', 'ကိန်းပြည့်နောက်မှာ သုံးတဲ့ စာလုံးကို သတိရပါ။'],
  ],
  Operators: [
    ['7 % 3 ရဲ့ ရလဒ်က ဘာလဲ?', null, '% က စားပြီးကျန်တဲ့ အကြွင်းကို ပြန်ပေးပါတယ်။ 7 ကို 3 နဲ့စားရင် အကြွင်း 1 ကျန်ပါတယ်။', 'စားလဒ်မဟုတ်ဘဲ အကြွင်းကို ရှာပါ။'],
    ['2 ** 3 ရဲ့ ရလဒ်က ဘာလဲ?', null, '** က ထပ်ကိန်းတင်တဲ့ Operator ဖြစ်ပါတယ်။ 2 × 2 × 2 = 8 ပါ။', '2 ကို သုံးခါမြှောက်ကြည့်ပါ။'],
    ['"5" + 3 ရဲ့ ရလဒ်က ဘာလဲ?', null, 'String နဲ့ + သုံးတဲ့အခါ စာသားတွေကို ဆက်ပေးပါတယ်။ 3 ကို "3" အဖြစ် ပြောင်းပြီး "53" ရပါတယ်။', 'String နဲ့ + တွဲသုံးရင် ပေါင်းတာလား၊ ဆက်တာလား?'],
    ['"5" - 3 ရဲ့ ရလဒ်က ဘာလဲ?', null, '- က ကိန်းဂဏန်းတွေကို တွက်တာဖြစ်လို့ "5" ကို 5 အဖြစ် ပြောင်းပြီး 2 ရပါတယ်။', 'နုတ်ခြင်းလုပ်တဲ့အခါ String ကို Number အဖြစ် ပြောင်းနိုင်ပါတယ်။'],
    ['5 == "5" ရဲ့ ရလဒ်က ဘာလဲ?', null, '== က နှိုင်းယှဉ်မီ Data Type တွေကို ပြောင်းပေးနိုင်တဲ့အတွက် ဒီတန်ဖိုးနှစ်ခုကို တူတယ်လို့ ပြပါတယ်။', '== က Type မတူတာကို ပြောင်းပြီး စစ်သလား?'],
    ['5 === "5" ရဲ့ ရလဒ်က ဘာလဲ?', null, '=== က Data Type နဲ့ တန်ဖိုးနှစ်ခုလုံးကို စစ်ပါတယ်။ Number နဲ့ String က Type မတူပါဘူး။ ပုံမှန်အားဖြင့် === ကို သုံးပါ။', 'Number နဲ့ String ရဲ့ Type ကို နှိုင်းယှဉ်ပါ။'],
    ['ဒီ Code ပြီးရင် x က ဘာဖြစ်မလဲ?\n\nlet x = 5;\nx += 3;', null, 'x += 3 ဆိုတာ x = x + 3 ကို အတိုချုံးရေးထားတာပါ။', '5 ထဲကို 3 ပေါင်းပြီး x ထဲ ပြန်ထည့်ပါ။'],
    ['!true || true ရဲ့ ရလဒ်က ဘာလဲ?', null, '!true က false ဖြစ်ပါတယ်။ ပြီးတော့ false || true ရဲ့ ရလဒ်က true ဖြစ်ပါတယ်။', '|| မှာ ဘယ်ဘက် သို့မဟုတ် ညာဘက်တစ်ခုခု true ဖြစ်ရင် ရလဒ်က true ပါ။'],
    ['null ?? "default" ရဲ့ ရလဒ်က ဘာလဲ?', null, 'ဘယ်ဘက်တန်ဖိုးက null သို့မဟုတ် undefined ဖြစ်မှ ?? က ညာဘက်တန်ဖိုးကို ပြန်ပေးပါတယ်။', 'ဘယ်ဘက်မှာ null ဖြစ်နေတဲ့အခါ ?? က ဘာလုပ်သလဲ?'],
    ['ဒီ Code က ဘာကို ပြမလဲ?\n\nlet i = 5;\nconsole.log(i++);', null, 'နောက်မှာ ++ ထည့်တဲ့ Post-increment က လက်ရှိတန်ဖိုး 5 ကို အရင်ပြပြီးမှ i ကို 6 ဖြစ်စေပါတယ်။', 'Post-increment က တန်ဖိုးတိုးမီ ပြသလား၊ ပြပြီးမှတိုးသလား?'],
  ],
};

const englishHints = {
  Variables: [
    'Which declaration keyword permits reassignment?',
    'Can a const binding be assigned a second value?',
    'Check the first character, hyphen, underscore, and reserved-word rules.',
    'What value does a declared but unassigned variable have?',
    'Is the second line declaring a new variable or updating the existing one?',
    'Check whether JavaScript treats uppercase and lowercase letters as different.',
    'Does const freeze the array, or only prevent assigning a different array?',
    'Which declarations are limited to the block where they appear?',
    'With var, what is initialized before its assignment is reached?',
    'Which choice follows the lowercase-first-word camelCase convention?',
  ],
  'Data Types': [
    'Look at the type of the value inside the quotation marks.',
    'JavaScript uses one numeric type for whole and decimal numbers.',
    'Consider the well-known historical typeof result for null.',
    'undefined has a type with the same name.',
    'Arrays and functions are objects, not primitive values.',
    'Which type represents true and false?',
    'Arrays are objects; there is a dedicated array-checking method.',
    'Binary floating-point cannot exactly represent every decimal fraction.',
    'NaN is unusual: check its actual typeof result.',
    'Which suffix marks a BigInt literal?',
  ],
  Operators: [
    '% returns the remainder after division.',
    '** means raising a number to a power.',
    'When + sees text, consider whether it joins or adds.',
    'Subtraction converts a numeric string to a number.',
    '== allows type conversion before comparing.',
    '=== compares both type and value.',
    'Expand += as an assignment plus addition.',
    'Evaluate ! first, then the || expression.',
    '?? uses its right side only for null or undefined.',
    'Post-increment returns the value from before the increment.',
  ],
};

const questionContent = Object.fromEntries(
  Object.entries(rows).flatMap(([topic, questions]) => questions.map(([question, options, explanation, hint], index) => [
    `${topic.replace(/\s/g, '')}-${index + 1}`,
    { question, options, explanation, hint, englishHint: englishHints[topic][index] },
  ])),
);

export function getQuestionContent(question, language) {
  const localized = questionContent[question.id];
  if (language === 'my' && localized) {
    return {
      question: localized.question,
      options: localized.options ?? question.options,
      explanation: localized.explanation,
      hint: localized.hint,
    };
  }
  return {
    question: question.question,
    options: question.options,
    explanation: question.explanation,
    hint: localized?.englishHint ?? 'Read the question carefully and check what each operator or keyword does.',
  };
}
