export const lessonDetails = {
  S1: {
    definition: {
      en: 'Coding is the process of writing instructions that a computer can execute.',
      my: 'Coding ဆိုတာ ကွန်ပျူတာကို လုပ်စေချင်တဲ့ အလုပ်တွေကို အဆင့်လိုက် ညွှန်ကြားချက်အဖြစ် ရေးသားခြင်း ဖြစ်ပါတယ်။',
    },
    explanation: {
      en: 'A computer follows instructions exactly as written. JavaScript lets us write those instructions in a language people can learn and read.',
      my: 'ကွန်ပျူတာက ရေးထားတဲ့ အမိန့်အတိုင်း တိတိကျကျ လုပ်ဆောင်ပါတယ်။ လူတွေလည်း ဖတ်နားလည်နိုင်တဲ့ Programming Language တွေထဲက တစ်ခုက JavaScript ပါ။',
    },
    simple: {
      en: 'Imagine giving a friend a clear list of steps. A computer also needs clear steps, one at a time.',
      my: 'သူငယ်ချင်းတစ်ယောက်ကို အလုပ်တစ်ခု အဆင့်လိုက်ပြောပြသလိုပါပဲ။ ကွန်ပျူတာကိုလည်း တစ်ဆင့်ချင်း ရှင်းရှင်းလင်းလင်း ပြောပြရပါတယ်။',
    },
    lines: [
      { en: 'Print the first instruction to the console.', my: 'ပထမအဆင့် ညွှန်ကြားချက်ကို Console မှာ ပြပါ။' },
      { en: 'Print the next instruction to the console.', my: 'ဒုတိယအဆင့် ညွှန်ကြားချက်ကို Console မှာ ပြပါ။' },
      { en: 'Print the final instruction to the console.', my: 'နောက်ဆုံးအဆင့် ညွှန်ကြားချက်ကို Console မှာ ပြပါ။' },
    ],
    realLife: {
      en: 'A recipe lists ingredients and steps. Leaving out a step can spoil the result; a program needs its instructions in the right order too.',
      my: 'ဟင်းချက်နည်းမှာ လိုအပ်တဲ့ ပစ္စည်းနဲ့ အဆင့်တွေကို စာရင်းပြုထားပါတယ်။ အဆင့်တစ်ခုကျော်သွားရင် အရသာမမှန်နိုင်သလို Program မှာလည်း အမိန့်တွေကို အစီအစဉ်မှန်အောင် ရေးရပါတယ်။',
    },
    mistakes: [
      { en: 'Giving steps in the wrong order can produce the wrong result.', my: 'အဆင့်တွေကို အစီအစဉ်မှားရေးရင် လိုချင်တဲ့ရလဒ် မရနိုင်ပါဘူး။' },
      { en: 'Computers cannot guess a missing instruction; write each step explicitly.', my: 'မရေးထားတဲ့ အမိန့်ကို ကွန်ပျူတာက ခန့်မှန်းမလုပ်ပေးနိုင်ပါဘူး။ လိုအပ်တဲ့အဆင့်တိုင်းကို ရေးပါ။' },
    ],
    practice: [
      { en: 'Write two console.log instructions that tell a computer to greet someone and then say goodbye.', my: 'လူတစ်ယောက်ကို နှုတ်ဆက်ပြီးနောက် ပြန်နှုတ်ဆက်တဲ့ စာကို ပြဖို့ console.log အမိန့်နှစ်ကြောင်း ရေးကြည့်ပါ။' },
      { en: 'Why does the order of instructions matter?', my: 'ညွှန်ကြားချက်တွေရဲ့ အစီအစဉ်က ဘာကြောင့် အရေးကြီးတာလဲ?' },
    ],
    takeaway: { en: 'Code is a set of clear instructions, arranged in an order a computer can follow.', my: 'Code ဆိုတာ ကွန်ပျူတာ လိုက်လုပ်နိုင်အောင် အစီအစဉ်တကျ ရေးထားတဲ့ ညွှန်ကြားချက်တွေပါ။' },
  },
  S2: {
    definition: {
      en: 'JavaScript is a programming language used to add behavior and interactivity to websites and applications.',
      my: 'JavaScript ဆိုတာ Website နဲ့ Application တွေမှာ တုံ့ပြန်လုပ်ဆောင်မှုတွေ ထည့်ပေးဖို့ သုံးတဲ့ Programming Language တစ်ခုပါ။',
    },
    explanation: {
      en: 'JavaScript can respond to clicks, update a page, check form entries, and power games. Browsers can run JavaScript directly.',
      my: 'Button နှိပ်တာကို တုံ့ပြန်ခြင်း၊ စာမျက်နှာကို ပြောင်းလဲခြင်း၊ Form စစ်ဆေးခြင်းနဲ့ Game လုပ်ဆောင်ခြင်းတွေမှာ JavaScript ကို သုံးနိုင်ပါတယ်။ Browser က JavaScript ကို တိုက်ရိုက် အလုပ်လုပ်စေနိုင်ပါတယ်။',
    },
    simple: {
      en: 'HTML describes what is on a page, CSS styles it, and JavaScript makes it respond to people.',
      my: 'HTML က စာမျက်နှာမှာ ဘာတွေရှိလဲ ဖော်ပြတယ်၊ CSS က ပုံစံအလှဆင်တယ်၊ JavaScript က လူတွေ လုပ်ဆောင်တဲ့အခါ တုံ့ပြန်စေပါတယ်။',
    },
    lines: [{ en: 'Show a greeting in the browser console.', my: 'Browser ရဲ့ Console မှာ နှုတ်ဆက်စကားကို ပြပါ။' }],
    realLife: {
      en: 'On an interactive door: HTML is the door, CSS is its appearance, and JavaScript is the bell that rings when someone presses it.',
      my: 'ခေါင်းလောင်းပါတဲ့ တံခါးတစ်ချပ်ကို စဉ်းစားကြည့်ပါ။ HTML က တံခါး၊ CSS က တံခါးပုံစံ၊ JavaScript က ခေါင်းလောင်းနှိပ်တဲ့အခါ မြည်စေတဲ့ အပိုင်းပါ။',
    },
    mistakes: [
      { en: 'JavaScript, Java, and JavaScript frameworks are different things; the names can be confusing.', my: 'JavaScript နဲ့ Java က မတူတဲ့ Programming Language တွေပါ။ နာမည်ဆင်တူတာကြောင့် မရောထွေးပါနဲ့။' },
      { en: 'JavaScript does not replace HTML or CSS; websites often use all three together.', my: 'JavaScript က HTML ဒါမှမဟုတ် CSS ကို အစားထိုးတာ မဟုတ်ပါဘူး။ Website တစ်ခုမှာ သုံးခုလုံးကို တွဲသုံးလေ့ရှိပါတယ်။' },
    ],
    practice: [
      { en: 'What language would you use to make a button respond to a click?', my: 'Button နှိပ်တဲ့အခါ တုံ့ပြန်စေချင်ရင် ဘယ် Language ကို သုံးမလဲ?' },
      { en: 'In a web page, what roles do HTML, CSS, and JavaScript each play?', my: 'Web page တစ်ခုမှာ HTML၊ CSS နဲ့ JavaScript တို့က ဘယ်လိုတာဝန်တွေ လုပ်ကြသလဲ?' },
    ],
    takeaway: { en: 'JavaScript adds behavior to pages; it works alongside HTML and CSS.', my: 'JavaScript က စာမျက်နှာကို တုံ့ပြန်လုပ်ဆောင်စေပြီး HTML နဲ့ CSS တို့နဲ့ တွဲဖက်အလုပ်လုပ်ပါတယ်။' },
  },
  S3: {
    definition: { en: 'console.log() writes a value to the developer console, which is useful for inspecting program output.', my: 'console.log() က တန်ဖိုးတစ်ခုကို Developer Console မှာ ပြပေးတဲ့ Function ဖြစ်ပြီး Program ရဲ့ ရလဒ်ကို ကြည့်ဖို့ အသုံးဝင်ပါတယ်။' },
    explanation: { en: 'Put the value you want to inspect inside the parentheses. Put text in quotes; numbers can be written without quotes.', my: 'ကြည့်ချင်တဲ့ တန်ဖိုးကို ကွင်းအတွင်း ရေးပါ။ စာသားကို Quote ထဲမှာ ထည့်ပြီး Number ကိုတော့ Quote မပါဘဲ ရေးနိုင်ပါတယ်။' },
    simple: { en: 'Use console.log() when you want to see what your code is producing.', my: 'Code က ဘာရလဒ်ထုတ်ပေးလဲ ကြည့်ချင်ရင် console.log() ကို သုံးပါ။' },
    lines: [
      { en: 'Print a text string; text is enclosed in quotes.', my: 'Quote အတွင်း ထည့်ထားတဲ့ စာသားကို ပြပါ။' },
      { en: 'Calculate 2 + 3, then print the numeric result.', my: '2 + 3 ကို တွက်ပြီး ရလာတဲ့ Number ကို ပြပါ။' },
      { en: 'A line starting with // is a comment for people; JavaScript does not run it.', my: '// နဲ့စတဲ့စာကြောင်းက ဖတ်သူအတွက် Comment ဖြစ်ပြီး JavaScript က အလုပ်မလုပ်ပါဘူး။' },
    ],
    realLife: { en: 'It is like writing a message on a noticeboard so you can check what happened.', my: 'တစ်ခုခု ဘာဖြစ်သွားလဲ ပြန်ကြည့်ဖို့ သတင်းဘုတ်မှာ မှတ်ချက်ရေးထားသလိုပါပဲ။' },
    mistakes: [
      { en: 'Putting a number in quotes makes it text: "25" is not the same type as 25.', my: 'Number ကို Quote ထဲထည့်ရင် စာသား ဖြစ်သွားပါတယ်။ "25" က 25 Number နဲ့ မတူပါဘူး။' },
      { en: 'Quotes must open and close with the same kind of quote mark.', my: 'Quote စဖွင့်ထားတဲ့ သင်္ကေတနဲ့ ပြန်ပိတ်တဲ့ သင်္ကေတ တူရပါမယ်။' },
    ],
    practice: [
      { en: 'Use console.log() to print your name, then print the result of 8 + 4.', my: 'ကိုယ့်နာမည်ကို console.log() နဲ့ ပြပြီးနောက် 8 + 4 ရလဒ်ကိုလည်း ပြပါ။' },
      { en: 'What is the difference between console.log("5") and console.log(5)?', my: 'console.log("5") နဲ့ console.log(5) တို့ရဲ့ ကွာခြားချက်က ဘာလဲ?' },
    ],
    takeaway: { en: 'console.log() helps you see program output; quotes distinguish text from numbers.', my: 'console.log() က Program ရလဒ်ကို ကြည့်စေပြီး Quote က စာသားနဲ့ Number ကို ခွဲပေးပါတယ်။' },
  },
  S4: {
    definition: { en: 'A variable is a named place to store a value so a program can use it later.', my: 'Variable ဆိုတာ Program က နောက်ပိုင်းမှာ ပြန်သုံးနိုင်ဖို့ တန်ဖိုးတစ်ခုကို နာမည်ပေးပြီး သိမ်းထားတဲ့ နေရာပါ။' },
    explanation: { en: 'Use const when you will not reassign the variable, and let when you will. A const array or object can still have its contents changed.', my: 'တန်ဖိုးကို နောက်မှ အသစ်ပြန်သတ်မှတ်မှာ မဟုတ်ရင် const ကို သုံးပါ။ ပြန်သတ်မှတ်မယ်ဆို let ကို သုံးပါ။ const နဲ့သိမ်းထားတဲ့ Array သို့မဟုတ် Object ရဲ့ အတွင်းတန်ဖိုးတွေကိုတော့ ပြောင်းနိုင်ပါတယ်။' },
    simple: { en: 'A variable is like a labelled box: the name is the label, and the value is what is inside.', my: 'Variable ကို နာမည်ကပ်ထားတဲ့ သေတ္တာတစ်လုံးလို မြင်နိုင်ပါတယ်။ နာမည်က အညွှန်းဖြစ်ပြီး တန်ဖိုးက သေတ္တာထဲက ပစ္စည်းပါ။' },
    lines: [
      { en: 'Create a constant named name and store the text "Sam".', my: 'name လို့ခေါ်တဲ့ ပြန်သတ်မှတ်လို့မရတဲ့ Variable တစ်ခုဖန်တီးပြီး "Sam" ကို သိမ်းပါ။' },
      { en: 'Create a changeable variable named score and set its first value to 0.', my: 'score လို့ခေါ်တဲ့ ပြန်ပြောင်းနိုင်တဲ့ Variable တစ်ခုဖန်တီးပြီး 0 ထည့်ပါ။' },
      { en: 'Update score by adding 10 to its current value.', my: 'score ထဲက လက်ရှိတန်ဖိုးကို 10 ပေါင်းပြီး အသစ်ပြန်သတ်မှတ်ပါ။' },
      { en: 'Print the name and updated score.', my: 'name နဲ့ ပြောင်းပြီးသား score ကို ပြပါ။' },
    ],
    realLife: { en: 'A reusable labelled storage box: the label helps you find the stored information later.', my: 'နာမည်ကပ်ထားတဲ့ သိမ်းဆည်းသေတ္တာလိုပါပဲ။ အညွှန်းကို ကြည့်ပြီး သိမ်းထားတဲ့ အချက်အလက်ကို နောက်မှ ရှာသုံးနိုင်ပါတယ်။' },
    mistakes: [
      { en: 'Use = to assign a value; === compares two values instead.', my: 'တန်ဖိုးထည့်ဖို့ = ကို သုံးပါ။ === ကတော့ တန်ဖိုးနှစ်ခု တူမတူ စစ်တာပါ။' },
      { en: 'Reassigning a const variable causes an error; choose let if its value must be replaced.', my: 'const Variable ကို တန်ဖိုးအသစ် ပြန်ထည့်ရင် Error ဖြစ်ပါတယ်။ ပြန်ထည့်ရမယ်ဆို let သုံးပါ။' },
    ],
    practice: [
      { en: 'Create a const variable named city, then print it.', my: 'city လို့ခေါ်တဲ့ const Variable ဖန်တီးပြီး Console မှာ ပြပါ။' },
      { en: 'Why does the score example use let rather than const?', my: 'score ဥပမာမှာ const မသုံးဘဲ let ကို ဘာကြောင့် သုံးထားတာလဲ?' },
    ],
    takeaway: { en: 'Give stored values clear names; choose const by default and let when reassignment is needed.', my: 'သိမ်းထားတဲ့ တန်ဖိုးတွေကို ရှင်းလင်းတဲ့နာမည်ပေးပါ။ ပြန်သတ်မှတ်စရာမလိုရင် const၊ လိုအပ်ရင် let ကို သုံးပါ။' },
  },
  S5: {
    definition: { en: 'A data type describes what kind of value is stored, such as text, a number, or a true/false value.', my: 'Data Type ဆိုတာ သိမ်းထားတဲ့တန်ဖိုးက စာသားလား၊ ကိန်းဂဏန်းလား၊ မှန်/မှားတန်ဖိုးလား ဆိုတာ ဖော်ပြပေးပါတယ်။' },
    explanation: { en: 'JavaScript treats strings, numbers, and booleans differently. typeof can report a value’s type.', my: 'JavaScript က String၊ Number နဲ့ Boolean တို့ကို မတူညီတဲ့ Data အမျိုးအစားအဖြစ် ကိုင်တွယ်ပါတယ်။ typeof နဲ့ တန်ဖိုးတစ်ခုရဲ့ အမျိုးအစားကို စစ်နိုင်ပါတယ်။' },
    simple: { en: 'A name is text, an age is a number, and an answer to a yes/no question is a boolean.', my: 'နာမည်ဆိုရင် စာသား၊ အသက်ဆိုရင် ကိန်းဂဏန်း၊ ဟုတ်/မဟုတ် အဖြေဆိုရင် Boolean ဖြစ်ပါတယ်။' },
    lines: [
      { en: 'typeof reports that "Sam" is a string.', my: 'typeof က "Sam" ဟာ String ဖြစ်ကြောင်း ပြပါတယ်။' },
      { en: 'typeof reports that 25 is a number.', my: 'typeof က 25 ဟာ Number ဖြစ်ကြောင်း ပြပါတယ်။' },
      { en: 'typeof reports that true is a boolean.', my: 'typeof က true ဟာ Boolean ဖြစ်ကြောင်း ပြပါတယ်။' },
    ],
    realLife: { en: 'A contact card has a text name, a numeric age, and a yes/no favorite checkbox.', my: 'ဖုန်း Contact ထဲမှာ နာမည်ကို စာသားအဖြစ်၊ အသက်ကို Number အဖြစ်၊ အကြိုက်ဆုံးလားဆိုတာကို ဟုတ်/မဟုတ်အဖြစ် သိမ်းနိုင်ပါတယ်။' },
    mistakes: [
      { en: 'Text needs quotes. Without quotes, JavaScript treats a word as a variable name.', my: 'စာသားကို Quote အတွင်း ထည့်ပါ။ Quote မပါရင် စာလုံးကို Variable နာမည်လို့ ယူဆပါတယ်။' },
      { en: 'JavaScript uses the lowercase value true, not the text "true", for a boolean.', my: 'Boolean တန်ဖိုးက Quote မပါသော true ဖြစ်ပါတယ်။ "true" ကတော့ စာသားပါ။' },
    ],
    practice: [
      { en: 'Use typeof to check the types of "Hello", 10, and false.', my: '"Hello"၊ 10 နဲ့ false တို့ရဲ့ Data Type ကို typeof နဲ့ စစ်ကြည့်ပါ။' },
      { en: 'Which value is text: 25 or "25"?', my: '25 နဲ့ "25" ထဲမှာ ဘယ်တစ်ခုက စာသားလဲ?' },
    ],
    takeaway: { en: 'Quotes mark text; numbers have no quotes; booleans are true or false.', my: 'Quote ပါရင် စာသား၊ Quote မပါတဲ့ကိန်းက Number၊ true/false က Boolean ဖြစ်ပါတယ်။' },
  },
  S6: {
    definition: { en: 'An operator is a symbol or keyword that performs an operation on one or more values.', my: 'Operator ဆိုတာ တန်ဖိုးတစ်ခု သို့မဟုတ် အများအပြားအပေါ် လုပ်ဆောင်ချက်တစ်ခု လုပ်ပေးတဲ့ သင်္ကေတ ဒါမှမဟုတ် စကားလုံးပါ။' },
    explanation: { en: 'Arithmetic operators calculate numbers. Comparison operators such as === compare values and produce a boolean.', my: 'အပေါင်း၊ အနုတ် စတဲ့ Arithmetic Operator တွေက ကိန်းတွေကို တွက်ပေးပါတယ်။ === လို Comparison Operator တွေက တန်ဖိုးတွေကို နှိုင်းယှဉ်ပြီး Boolean အဖြေ ထုတ်ပေးပါတယ်။' },
    simple: { en: 'Some symbols do maths; others ask questions such as “are these values equal?”', my: 'တချို့သင်္ကေတတွေက သင်္ချာတွက်တယ်။ တချို့က “ဒီတန်ဖိုးနှစ်ခု တူလား” လို့ စစ်ပေးတယ်။' },
    lines: [
      { en: 'Multiply 3 by 4 and store the result in total.', my: '3 နဲ့ 4 ကို မြှောက်ပြီး ရလဒ်ကို total ထဲမှာ သိမ်းပါ။' },
      { en: 'Print the calculated total.', my: 'တွက်ထားတဲ့ total ကို ပြပါ။' },
      { en: 'Check whether total is greater than 10; the result is true or false.', my: 'total က 10 ထက်ကြီးလား စစ်ပြီး true သို့မဟုတ် false အဖြေ ထုတ်ပါ။' },
      { en: 'Check whether total is exactly equal to 12 in both type and value.', my: 'total ရဲ့ Data Type နဲ့ တန်ဖိုး နှစ်ခုစလုံး 12 နဲ့ တူမတူ စစ်ပါ။' },
    ],
    realLife: { en: 'A shop multiplies the price by the quantity, then compares the total with your budget.', my: 'ဆိုင်မှာ ဈေးနှုန်းကို အရေအတွက်နဲ့ မြှောက်ပြီးနောက် စုစုပေါင်းက သင့်ဘတ်ဂျက်ထက် များမများ စစ်သလိုပါပဲ။' },
    mistakes: [
      { en: 'A single = assigns a value; it does not compare values.', my: '= တစ်ခုက တန်ဖိုးထည့်တာပါ။ တန်ဖိုးတွေကို နှိုင်းယှဉ်တာ မဟုတ်ပါဘူး။' },
      { en: 'Prefer === for comparisons so both the type and value must match.', my: 'နှိုင်းယှဉ်ရာမှာ Data Type နဲ့ တန်ဖိုး နှစ်ခုစလုံး တူဖို့ === ကို သုံးပါ။' },
    ],
    practice: [
      { en: 'What does 7 % 3 return?', my: '7 % 3 ရဲ့ အဖြေက ဘာလဲ?' },
      { en: 'What is the difference between = and ===?', my: '= နဲ့ === တို့ရဲ့ ကွာခြားချက်က ဘာလဲ?' },
    ],
    takeaway: { en: '= assigns; === compares; arithmetic and comparison operators do different jobs.', my: '= က တန်ဖိုးထည့်တယ်၊ === က နှိုင်းယှဉ်တယ်။ တွက်ချက်တဲ့ Operator နဲ့ နှိုင်းယှဉ်တဲ့ Operator တို့ရဲ့ အလုပ်မတူပါဘူး။' },
  },
  S7: {
    definition: { en: 'A conditional statement chooses which code to run based on whether a condition is true or false.', my: 'Condition ဆိုတာ သတ်မှတ်ထားတဲ့ အခြေအနေ မှန်/မမှန်ပေါ် မူတည်ပြီး ဘယ် Code ကို အလုပ်လုပ်မလဲ ရွေးပေးတာပါ။' },
    explanation: { en: 'if runs its block when the condition is true. else provides another block when it is false.', my: 'အခြေအနေမှန်ရင် if အတွင်းက Code အလုပ်လုပ်ပါတယ်။ မမှန်ရင် else အတွင်းက Code အလုပ်လုပ်ပါတယ်။' },
    simple: { en: 'Ask a yes/no question, then choose the matching action.', my: 'ဟုတ်/မဟုတ် မေးခွန်းတစ်ခု စစ်ပြီး ကိုက်ညီတဲ့ လုပ်ဆောင်ချက်ကို ရွေးတာပါ။' },
    lines: [
      { en: 'Store true to indicate that it is raining.', my: 'မိုးရွာနေကြောင်း ဖော်ပြဖို့ isRaining ထဲမှာ true ကို သိမ်းပါ။' },
      { en: 'Run the block below only when isRaining is true.', my: 'isRaining က true ဖြစ်တဲ့အခါမှ အောက်က Code အလုပ်လုပ်ပါမယ်။' },
      { en: 'Show the instruction to take an umbrella.', my: 'ထီးယူသွားဖို့ စာကို ပြပါ။' },
      { en: 'When it is not raining, show the alternative instruction.', my: 'မိုးမရွာတဲ့အခါ အခြားရွေးချယ်စရာစာကို ပြပါ။' },
    ],
    realLife: { en: 'If it is raining, take an umbrella; otherwise, you might wear sunglasses.', my: 'မိုးရွာရင် ထီးယူပါ။ မရွာရင် နေကာမျက်မှန် တပ်နိုင်ပါတယ်။ အခြေအနေပေါ်မူတည်ပြီး လုပ်ဆောင်ချက် ပြောင်းသလိုပါပဲ။' },
    mistakes: [
      { en: 'Use a condition that evaluates to true or false inside the parentheses.', my: 'ကွင်းထဲမှာ true သို့မဟုတ် false အဖြေထွက်တဲ့ အခြေအနေတစ်ခု ထည့်ပါ။' },
      { en: 'Braces { } group the code that belongs to each branch.', my: '{ } ကွင်းတွေက if နဲ့ else တစ်ခုစီမှာ ပါဝင်တဲ့ Code တွေကို အုပ်စုဖွဲ့ပေးပါတယ်။' },
    ],
    practice: [
      { en: 'Write an if/else statement that checks whether score is at least 50.', my: 'score က 50 နဲ့အထက်လား စစ်ဖို့ if/else ရေးကြည့်ပါ။' },
      { en: 'Which branch runs when the if condition is false?', my: 'if အခြေအနေ false ဖြစ်တဲ့အခါ ဘယ်အပိုင်း အလုပ်လုပ်မလဲ?' },
    ],
    takeaway: { en: 'if chooses a path when a condition is true; else handles the other case.', my: 'အခြေအနေမှန်ရင် if အလုပ်လုပ်ပြီး၊ မမှန်ရင် else အလုပ်လုပ်ပါတယ်။' },
  },
  S8: {
    definition: { en: 'A loop repeats a block of code while a chosen condition remains true.', my: 'Loop ဆိုတာ သတ်မှတ်ထားတဲ့ အခြေအနေမှန်နေသရွေ့ Code တစ်စုကို ထပ်ခါတလဲလဲ အလုပ်လုပ်စေတာပါ။' },
    explanation: { en: 'A for loop usually sets a starting value, checks when to stop, and updates the counter after each pass.', my: 'for Loop မှာ စတင်တန်ဖိုးသတ်မှတ်တာ၊ ဘယ်အချိန်ရပ်မလဲ စစ်တာနဲ့ တစ်ပတ်ပြီးတိုင်း ကောင်တာကို ပြောင်းတာတို့ ပါဝင်လေ့ရှိပါတယ်။' },
    simple: { en: 'Instead of writing the same instruction five times, ask the computer to repeat it five times.', my: 'တူညီတဲ့ အမိန့်ကို ငါးခါရေးမယ့်အစား ကွန်ပျူတာကို ငါးခါ ပြန်လုပ်ခိုင်းနိုင်ပါတယ်။' },
    lines: [
      { en: 'Start a counter at 1; keep looping while i is at most 5; add 1 after each pass.', my: 'i ကို 1 ကနေ စပါ။ 5 အထိ Loop ပတ်ပြီး တစ်ပတ်ပြီးတိုင်း 1 တိုးပါ။' },
      { en: 'Print which plate is being washed on this pass.', my: 'အခုဆေးနေတဲ့ ပန်းကန်နံပါတ်ကို ပြပါ။' },
    ],
    realLife: { en: 'When washing five plates, repeat the same washing steps once for each plate rather than writing them all out again.', my: 'ပန်းကန်ငါးချပ် ဆေးတဲ့အခါ ဆေးတဲ့အဆင့်တွေကို ငါးခါရေးမယ့်အစား ပန်းကန်တစ်ချပ်စီအတွက် အဲဒီအဆင့်ကို ထပ်လုပ်ပါ။' },
    mistakes: [
      { en: 'If the counter never changes toward the stopping condition, the loop may never end.', my: 'ကောင်တာက ရပ်မယ့်အခြေအနေဘက်ကို မပြောင်းသွားရင် Loop က မရပ်ဘဲ အမြဲလည်နေနိုင်ပါတယ်။' },
      { en: 'Check < versus <= carefully; they stop at different values.', my: '< နဲ့ <= ကို သေချာကြည့်ပါ။ ရပ်မယ့်အချိန် မတူနိုင်ပါတယ်။' },
    ],
    practice: [
      { en: 'What values of i does this loop print: for (let i = 0; i < 3; i++)?', my: 'for (let i = 0; i < 3; i++) Loop က i ရဲ့ ဘယ်တန်ဖိုးတွေကို ပြမလဲ?' },
      { en: 'What change makes a loop counter increase by one?', my: 'Loop ကောင်တာကို 1 တိုးဖို့ ဘယ်လိုရေးမလဲ?' },
    ],
    takeaway: { en: 'A loop needs a start, a stop condition, and a step that eventually reaches the stop.', my: 'Loop တစ်ခုမှာ စတင်တန်ဖိုး၊ ရပ်မည့်အခြေအနေနဲ့ အဲဒီအခြေအနေကို ရောက်စေမယ့် တိုး/လျှော့မှုတို့ လိုအပ်ပါတယ်။' },
  },
  S9: {
    definition: { en: 'A function is a reusable block of code that can accept inputs and return a result.', my: 'Function ဆိုတာ လိုအပ်တဲ့အခါ ပြန်သုံးနိုင်ပြီး Input လက်ခံကာ ရလဒ်ပြန်ပေးနိုင်တဲ့ Code အစုတစ်ခုပါ။' },
    explanation: { en: 'Declare a function once, give it values through parameters when calling it, and use return to send a result back.', my: 'Function ကို တစ်ခါသတ်မှတ်ထားပြီး ခေါ်သုံးတဲ့အခါ Parameter တွေထဲကနေ တန်ဖိုးပေးနိုင်ပါတယ်။ return ကို သုံးရင် တွက်ထားတဲ့ ရလဒ်ကို ပြန်ပေးပါတယ်။' },
    simple: { en: 'A function is like a machine: give it an input, let it do its steps, and receive an output.', my: 'Function ကို စက်တစ်ခုလို စဉ်းစားပါ။ အဝင်တန်ဖိုးပေးလိုက်ရင် အလုပ်လုပ်ပြီး ရလဒ်တစ်ခု ပြန်ထုတ်ပေးပါတယ်။' },
    lines: [
      { en: 'Declare a function named makeGreeting with one input named name.', my: 'name လို့ခေါ်တဲ့ Input တစ်ခုလက်ခံမယ့် makeGreeting Function ကို သတ်မှတ်ပါ။' },
      { en: 'Return a greeting that includes the supplied name.', my: 'ပေးလိုက်တဲ့ နာမည်ပါဝင်တဲ့ နှုတ်ဆက်စကားကို return နဲ့ ပြန်ပေးပါ။' },
      { en: 'Call the function with "Sam" and print the returned greeting.', my: '"Sam" ကို ထည့်ပြီး Function ခေါ်ကာ ပြန်လာတဲ့စာကို ပြပါ။' },
      { en: 'Call it again with "Alex" to reuse the same steps with another input.', my: 'တူညီတဲ့အဆင့်တွေကို ပြန်သုံးပြီး "Alex" ကို ထည့်ကာ ထပ်ခေါ်ပါ။' },
    ],
    realLife: { en: 'A coffee machine takes ingredients as input, performs its steps, and gives you a drink as output.', my: 'ကော်ဖီဖျော်စက်က ပါဝင်ပစ္စည်းတွေကို လက်ခံပြီး သတ်မှတ်ထားတဲ့ အဆင့်တွေအတိုင်း အလုပ်လုပ်ကာ ကော်ဖီတစ်ခွက် ပြန်ပေးသလိုပါပဲ။' },
    mistakes: [
      { en: 'Declaring a function does not run it; call it by writing its name followed by parentheses.', my: 'Function ကို သတ်မှတ်ထားရုံနဲ့ အလုပ်မလုပ်သေးပါဘူး။ နာမည်နောက်မှာ () ရေးပြီး ခေါ်သုံးရပါတယ်။' },
      { en: 'console.log() displays a value; return sends a value out of a function. They are not interchangeable.', my: 'console.log() က တန်ဖိုးကို ပြတာပါ။ return က Function အပြင်ကို တန်ဖိုးပြန်ပေးတာပါ။ အလုပ်မတူပါဘူး။' },
    ],
    practice: [
      { en: 'Write a double(n) function that returns n * 2.', my: 'n ကို 2 နဲ့မြှောက်ပြီး ရလဒ်ပြန်ပေးမယ့် double(n) Function ရေးပါ။' },
      { en: 'What does return do that console.log() does not?', my: 'console.log() မလုပ်ပေးနိုင်ပေမယ့် return က ဘာလုပ်ပေးသလဲ?' },
    ],
    takeaway: { en: 'Functions package reusable steps; parameters provide inputs and return provides a result.', my: 'Function တွေက ပြန်သုံးနိုင်တဲ့ အဆင့်တွေကို စုစည်းထားပါတယ်။ Parameter က Input ပေးပြီး return က ရလဒ်ပြန်ပေးပါတယ်။' },
  },
};

export const lessonTitles = {
  S1: { en: 'What is coding?', my: 'Code ဆိုတာ ဘာလဲ?' },
  S2: { en: 'What is JavaScript?', my: 'JavaScript ဆိုတာ ဘာလဲ?' },
  S3: { en: 'Your first command', my: 'ပထမဆုံး အမိန့်' },
  S4: { en: 'Variables: labelled boxes', my: 'Variable များ: နာမည်တပ်ထားသော သေတ္တာများ' },
  S5: { en: 'Data types: kinds of values', my: 'Data Type များ: တန်ဖိုးအမျိုးအစားများ' },
  S6: { en: 'Operators: maths and comparing', my: 'Operator များ: တွက်ချက်ခြင်းနှင့် နှိုင်းယှဉ်ခြင်း' },
  S7: { en: 'Conditions: making decisions', my: 'Condition များ: ဆုံးဖြတ်ချက်ချခြင်း' },
  S8: { en: 'Loops: repeat without retyping', my: 'Loop များ: စာပြန်မရေးဘဲ ထပ်လုပ်ခြင်း' },
  S9: { en: 'Functions: reusable machines', my: 'Function များ: ပြန်သုံးနိုင်သော အဆင့်များ' },
};
