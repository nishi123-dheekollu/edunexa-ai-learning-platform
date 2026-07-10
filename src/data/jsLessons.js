export const jsTopics = [
  "What is JavaScript?",
  "How JS Works in the Browser",
  "Setting Up & console.log",
  "Variables (var, let, const)",
  "Data Types",
  "Type Conversion",
  "Operators",
  "Logical Operators",
  "Template Literals",
  "Conditional Statements",
  "Switch Statement",
  "Ternary Operator",
  "Loops - for",
  "Loops - while & do-while",
  "Break & Continue",
  "Functions Basics",
  "Function Parameters & Default Values",
  "Arrow Functions",
  "Function Expressions vs Declarations",
  "Scope",
  "Arrays Intro",
  "Array Methods - push, pop, shift, unshift",
  "Array Methods - map, filter, reduce",
  "Array Methods - forEach, find, includes",
  "Objects Intro",
  "Object Methods & this",
  "Destructuring",
  "Spread & Rest Operators",
  "DOM Intro",
  "Selecting DOM Elements",
  "Changing Content & Styles via DOM",
  "Event Listeners",
  "Event Object & Event Bubbling",
  "Form Handling with JS",
  "JSON Basics",
  "Callback Functions",
  "Promises",
  "Async/Await",
  "Fetch API",
  "Error Handling",
  "Local Storage with JS",
  "Classes & OOP Basics",
  "Closures",
  "Higher Order Functions",
  "ES6+ Features Recap"
];

export const jsLessons = [

  {
    title: "What is JavaScript?",
    subtitle: "Explained Like Giving a House Its Electricity",

    sections: [

      {
        heading: "Remember the House Analogy?",

        paragraphs: [
          "Back in the HTML course, we compared HTML to the walls and rooms of a house (structure), and CSS to the paint and decoration. A fully built, beautifully decorated house is still just... a house, sitting silently. No lights turning on, no fan spinning, no doorbell ringing — nothing actually happens until you add electricity and wiring.",

          "JavaScript is exactly that electricity. It's what makes a webpage actually do things — respond to clicks, show/hide content, validate a form, update without reloading the page. Without it, a website just sits there, looking nice but doing nothing."
        ]
      },

      {
        heading: "A Quick Comparison of the Three Languages",

        points: [
          "HTML = the structure (walls, rooms)",
          "CSS = the decoration (paint, curtains)",
          "JavaScript = the electricity and behavior (lights turning on, doorbell ringing, fan responding to a switch)"
        ]
      },

      {
        heading: "What Can JavaScript Actually Do?",

        points: [
          "Respond to clicks, typing, and other user actions",
          "Change text, images, or styles on a page without reloading it",
          "Validate form inputs before submitting (remember 'Form Validation' covered some basic HTML-only validation — JavaScript can do far more)",
          "Fetch data from a server and update the page with it",
          "Build entire interactive applications — including the React frontend you're already building for your MERN project!"
        ]
      },

      {
        heading: "A Tiny Taste of JavaScript",

        paragraphs: [
          "Don't worry about understanding this fully yet — just notice how it reacts to something, unlike HTML or CSS which are simply static descriptions."
        ],

        code: `document.querySelector("button").addEventListener("click", function() {
  alert("Button was clicked!");
});`
      },

      {
        heading: "Where Does JavaScript Actually Run?",

        paragraphs: [
          "Every modern web browser (Chrome, Firefox, Edge) has a built-in JavaScript engine that reads and runs this code directly — no separate installation needed by the visitor, unlike some other programming languages."
        ]
      },

      {
        heading: "Important Points to Remember",

        points: [
          "HTML structures a page, CSS styles it, JavaScript makes it interactive and dynamic.",
          "Without JavaScript, a webpage cannot respond to clicks, typing, or any user interaction.",
          "JavaScript runs directly inside the browser — no separate installation needed by visitors.",
          "It's also the language behind React, which you're already using in your MERN project."
        ]
      }

    ]
  },

  {
    title: "How JS Works in the Browser",
    subtitle: "Explained Like a Single Chef Taking Orders One at a Time",

    sections: [

      {
        heading: "Think About a Small Restaurant with One Chef",

        paragraphs: [
          "Imagine a tiny restaurant with exactly one chef. Orders come in one after another, and the chef cooks them strictly in order — one dish, finished completely, before starting the next. The chef can't magically cook two dishes at the exact same instant.",

          "JavaScript works almost exactly like this — it's 'single-threaded', meaning it runs one instruction at a time, in order, like that one chef working through orders one by one."
        ]
      },

      {
        heading: "How a Browser Reads Your Page",

        paragraphs: [
          "When a browser loads a webpage, it reads HTML top to bottom, builds the page structure, applies CSS styling, and then runs any JavaScript it finds — usually in the order the <script> tags appear, just like reading a recipe from top to bottom, step by step."
        ]
      },

      {
        heading: "Where Does the <script> Tag Go?",

        code: `<body>
  <h1>My Page</h1>
  <p>Some content here.</p>

  <script src="script.js"></script>
</body>`,

        paragraphs: [
          "Placing <script> near the bottom of <body> is a common, sensible practice — it ensures the chef (JavaScript) only starts working once the entire kitchen (the page's HTML) is already set up and ready, rather than trying to grab ingredients that haven't arrived yet."
        ]
      },

      {
        heading: "The JavaScript Engine",

        paragraphs: [
          "Every browser has a built-in JavaScript engine (Chrome uses one called V8) that actually reads and executes your code — like the chef's own brain and hands, doing the actual cooking, hidden away inside the kitchen."
        ]
      },

      {
        heading: "A Quick Preview: What About Slow Tasks?",

        paragraphs: [
          "You might wonder — if there's only one chef, what happens with a slow task, like waiting for food delivery data from a server? JavaScript has clever ways to handle this without freezing everything else (we'll cover this properly in 'Promises' and 'Async/Await' later) — for now, just understand the core idea: one instruction at a time, in order."
        ]
      },

      {
        heading: "Important Points to Remember",

        points: [
          "JavaScript is single-threaded — it runs one instruction at a time, in order.",
          "Browsers read HTML/CSS first, then run JavaScript, typically in the order scripts appear.",
          "Placing <script> near the end of <body> ensures the page's HTML is ready before JS runs.",
          "Every browser has a built-in engine that actually executes JavaScript code."
        ]
      }

    ]
  },

  {
    title: "Setting Up & console.log",
    subtitle: "Explained Like a Detective's Notepad",

    sections: [

      {
        heading: "Think About a Detective Investigating a Case",

        paragraphs: [
          "A good detective doesn't just think silently — they jot down clues in a notepad as they go: 'suspect entered at 9pm', 'found a torn ticket'. This notepad helps them track what they've discovered, step by step, especially when something doesn't add up.",

          "console.log() is exactly this notepad for JavaScript — a way to jot down and check values as your code runs, helping you understand what's actually happening 'under the hood'."
        ]
      },

      {
        heading: "Where to Write JavaScript",

        paragraphs: [
          "Just like writing HTML/CSS, you'll use VS Code (from 'Setting Up Environment' in the HTML course). You can write JS in its own .js file, or directly inside a <script> tag in your HTML — for this course, we'll often use the browser's console directly to experiment quickly."
        ]
      },

      {
        heading: "Opening the Browser Console",

        points: [
          "Right-click anywhere on a webpage → 'Inspect'",
          "Click the 'Console' tab in the panel that opens (you've actually used this already, back when debugging your CourseDetails page!)",
          "This is where console.log() output actually appears"
        ]
      },

      {
        heading: "Using console.log()",

        code: `console.log("Hello, World!");
console.log(5 + 3);

let userName = "Nishitha";
console.log(userName);`,

        paragraphs: [
          "Each line prints its value into the console — like writing a separate note for each clue, letting you 'see' values that would otherwise stay invisible while your code runs."
        ]
      },

      {
        heading: "Why This Tool Matters So Much",

        paragraphs: [
          "console.log() is, by far, the most-used debugging tool for any JavaScript developer — beginner or experienced. Whenever something isn't working as expected, sprinkling a few console.log() statements to check what values actually exist at different points is almost always the first step, exactly like a detective re-checking their notes when a case isn't adding up."
        ]
      },

      {
        heading: "Important Points to Remember",

        points: [
          "console.log() prints values to the browser's console, for you to inspect.",
          "Open the console via right-click → Inspect → Console tab.",
          "It's the single most common debugging tool in JavaScript.",
          "You can log text, numbers, variables — anything — to check what your code is actually doing."
        ]
      }

    ]
  },

  {
    title: "Variables (var, let, const)",
    subtitle: "Explained Like Labeled Lockers in a Gym",

    sections: [

      {
        heading: "Think About Gym Lockers",

        paragraphs: [
          "A gym locker holds your belongings, with your name on it so you can find it again. Some lockers let you swap items in and out throughout your visit (your phone, then your water bottle). Others might be sealed for the day, holding one specific item that can't be swapped out once placed inside.",

          "Variables in JavaScript work exactly like these lockers — a named storage spot for a value, which you can refer back to later using that name."
        ]
      },

      {
        heading: "Creating a Variable",

        code: `let userName = "Nishitha";
console.log(userName);`,

        paragraphs: [
          "let userName creates a locker named 'userName', and = \"Nishitha\" places that value inside it. Whenever you write userName afterward, JavaScript looks inside that exact locker and gives you what's stored there."
        ]
      },

      {
        heading: "let — A Locker You Can Reassign",

        code: `let score = 10;
score = 20; // perfectly fine, swapping the value
console.log(score); // 20`,

        paragraphs: [
          "Like a locker you're allowed to open and swap items in throughout the day, let allows you to change the value stored inside it later."
        ]
      },

      {
        heading: "const — A Sealed Locker",

        code: `const birthYear = 2003;
birthYear = 2005; // ❌ Error! Cannot reassign a const`,

        paragraphs: [
          "const creates a locker that gets sealed shut once you place something inside — you simply cannot swap its value afterward. Use const by default for anything that genuinely shouldn't change, like a fixed setting or a value you never intend to reassign."
        ]
      },

      {
        heading: "var — The Old, Less Predictable Locker",

        paragraphs: [
          "var is the original way to create variables, before let and const existed. It still works, but has some confusing, inconsistent behavior around scope (covered properly in the 'Scope' topic). Modern JavaScript almost always prefers let and const instead — you'll rarely need var in new code."
        ]
      },

      {
        heading: "Important Points to Remember",

        points: [
          "Variables are named storage spots for values, like labeled lockers.",
          "let allows the stored value to be reassigned later; const does not.",
          "Prefer const by default; switch to let only when you genuinely need to reassign.",
          "var is the older way of declaring variables — avoid it in modern code, prefer let/const."
        ]
      }

    ]
  },

  {
    title: "Data Types",
    subtitle: "Explained Like Sorting Groceries Into Sections",

    sections: [

      {
        heading: "Think About a Grocery Store",

        paragraphs: [
          "A grocery store doesn't pile everything into one giant heap — fruits go in one section, dairy in another, frozen items in a freezer. Each item has a 'type' that determines where it belongs and how it should be handled (you wouldn't freeze fresh bread the same way you'd freeze ice cream).",

          "JavaScript values also have specific 'types' — categories that determine what kind of operations make sense on them."
        ]
      },

      {
        heading: "The Basic Data Types",

        code: `let age = 25;                    // Number
let name = "Nishitha";           // String
let isStudent = true;            // Boolean
let nothing = null;               // Null
let notAssigned;                  // Undefined`,

        points: [
          "Number — any numeric value, whether whole or decimal (no separate 'integer' type, unlike some languages)",
          "String — text, always wrapped in quotes (single, double, or backticks)",
          "Boolean — only true or false, like a yes/no switch",
          "Null — deliberately 'nothing here', like an empty shelf you intentionally left clear",
          "Undefined — a variable that was created, but never given a value yet"
        ]
      },

      {
        heading: "Checking a Value's Type",

        code: `console.log(typeof 25);          // "number"
console.log(typeof "hello");     // "string"
console.log(typeof true);        // "boolean"`,

        paragraphs: [
          "typeof is like checking a grocery item's section label directly — it tells you exactly which 'aisle' a value belongs to, useful whenever you're unsure what type something actually is."
        ]
      },

      {
        heading: "Null vs Undefined — A Subtle Difference",

        paragraphs: [
          "Both seem like 'nothing', but the difference matters: undefined means 'this locker exists, but nobody put anything in it yet' (the default for a declared-but-empty variable), while null means 'someone deliberately placed an empty marker here on purpose' — a small but useful distinction."
        ]
      },

      {
        heading: "Important Points to Remember",

        points: [
          "JavaScript's basic types: Number, String, Boolean, Null, Undefined (and Object/Array, covered separately).",
          "typeof tells you which type a specific value currently is.",
          "undefined means no value was ever assigned; null means 'intentionally empty'.",
          "Knowing a value's type matters because operations behave differently per type."
        ]
      }

    ]
  },

  {
    title: "Type Conversion",
    subtitle: "Explained Like Exchanging Currency",

    sections: [

      {
        heading: "Think About Currency Exchange",

        paragraphs: [
          "If you're travelling and have US Dollars, but the local shop only accepts Indian Rupees, you'd exchange your currency at the correct rate before you can actually use it there. The value itself represents the same worth, just expressed in a different form.",

          "Type conversion in JavaScript is this exact exchange — converting a value from one type (like a String) into another (like a Number), so it can be used correctly in a specific context."
        ]
      },

      {
        heading: "Converting String to Number",

        code: `let priceText = "150";
let price = Number(priceText);

console.log(price + 50); // 200, treated as an actual number now`,

        paragraphs: [
          "Without converting, \"150\" + 50 would actually give \"15050\" (joining text together, not adding numbers) — like trying to pay with foreign currency directly, getting a nonsensical result instead of the intended value."
        ]
      },

      {
        heading: "Converting Number to String",

        code: `let score = 95;
let scoreText = String(score);

console.log("Your score is " + scoreText);`,

        paragraphs: [
          "Sometimes you need the opposite exchange — turning a number into text, often to combine it smoothly with other text."
        ]
      },

      {
        heading: "Implicit (Automatic) Conversion — Be Careful Here",

        code: `console.log("5" + 3);   // "53" (number got converted to string)
console.log("5" - 3);   // 2 (string got converted to number)`,

        paragraphs: [
          "JavaScript sometimes converts types automatically, without you asking — and this can produce surprising results, like a shop accidentally giving you the wrong exchange rate without telling you. + with a string joins text together, but - forces both sides to become numbers. This inconsistency is exactly why explicit conversion (using Number()/String() yourself) is usually safer and more predictable."
        ]
      },

      {
        heading: "Checking Before Converting",

        code: `let input = "abc";
let num = Number(input);

console.log(num); // NaN ("Not a Number")`,

        paragraphs: [
          "If a conversion genuinely doesn't make sense (like converting \"abc\" to a number), JavaScript gives back NaN — like a currency exchange counter refusing to convert a currency it doesn't recognize at all."
        ]
      },

      {
        heading: "Important Points to Remember",

        points: [
          "Number() and String() explicitly convert values between types.",
          "+ with a string joins text together; other operators (-, *, /) tend to convert to numbers.",
          "Implicit (automatic) conversion can produce surprising results — explicit conversion is safer.",
          "NaN means 'Not a Number' — the result of an invalid number conversion."
        ]
      }

    ]
  },

  {
    title: "Operators",
    subtitle: "Explained Like Buttons on a Calculator",

    sections: [

      {
        heading: "Think About a Calculator",

        paragraphs: [
          "A calculator has buttons for addition, subtraction, and also buttons to compare numbers (is this bigger or smaller, or exactly equal?). Each button does one specific job on the numbers you give it.",

          "JavaScript operators are exactly these buttons — symbols that perform a specific operation on values."
        ]
      },

      {
        heading: "Arithmetic Operators — The Math Buttons",

        code: `console.log(10 + 5);  // 15  (addition)
console.log(10 - 5);  // 5   (subtraction)
console.log(10 * 5);  // 50  (multiplication)
console.log(10 / 5);  // 2   (division)
console.log(10 % 3);  // 1   (remainder, called 'modulus')`,

        paragraphs: [
          "Most of these are familiar from basic math class. % (modulus) is the new one — it gives the leftover remainder after division, often used to check things like 'is this number even or odd?' (a number % 2 equals 0 only for even numbers)."
        ]
      },

      {
        heading: "Comparison Operators — The Compare Buttons",

        code: `console.log(10 > 5);    // true
console.log(10 < 5);    // false
console.log(10 === 10); // true (equal)
console.log(10 !== 5);  // true (not equal)`,

        paragraphs: [
          "These compare two values and give back true or false (a Boolean, from 'Data Types'), like a calculator simply lighting up 'yes' or 'no' depending on the comparison."
        ]
      },

      {
        heading: "=== vs == — A Crucial Difference",

        code: `console.log(5 == "5");   // true  (only compares value, ignores type)
console.log(5 === "5");  // false (compares both value AND type)`,

        paragraphs: [
          "== only checks if the values look similar, even converting types behind the scenes to make them match (similar to the implicit conversion from 'Type Conversion'). === is stricter — it requires both the value and the type to match exactly. Always prefer === in your code — it's more predictable and avoids unexpected bugs from automatic type conversion."
        ]
      },

      {
        heading: "Important Points to Remember",

        points: [
          "Arithmetic operators (+, -, *, /, %) perform calculations on numbers.",
          "Comparison operators (>, <, ===, !==) compare values, returning true or false.",
          "=== checks both value and type; == only checks value, converting types if needed.",
          "Always prefer === over == for safer, more predictable comparisons."
        ]
      }

    ]
  },

  {
    title: "Logical Operators",
    subtitle: "Explained Like Security Checkpoints with Multiple Gates",

    sections: [

      {
        heading: "Think About Entering a Secure Building",

        paragraphs: [
          "Some secure buildings require you to pass through both a fingerprint scanner AND a security guard's check before entry — both conditions must be true. Others might let you in if you show EITHER your ID card OR your visitor pass — just one of them being true is enough. And a 'staff only' sign means: NOT visitors.",

          "Logical operators in JavaScript combine multiple true/false conditions together using this exact same AND / OR / NOT logic."
        ]
      },

      {
        heading: "&& (AND) — Both Conditions Must Be True",

        code: `let hasTicket = true;
let hasID = true;

console.log(hasTicket && hasID); // true, only because BOTH are true`,

        paragraphs: [
          "Just like needing to pass both the fingerprint scanner AND the guard check, && only gives true if every single condition joined by it is also true."
        ]
      },

      {
        heading: "|| (OR) — At Least One Condition Must Be True",

        code: `let hasIDCard = false;
let hasVisitorPass = true;

console.log(hasIDCard || hasVisitorPass); // true, since at least one is true`,

        paragraphs: [
          "Like being let in with EITHER an ID card OR a visitor pass, || only needs one of the conditions to be true for the whole thing to be true."
        ]
      },

      {
        heading: "! (NOT) — Reverses a Condition",

        code: `let isVisitor = true;
console.log(!isVisitor); // false`,

        paragraphs: [
          "! flips true to false and false to true — like a 'staff only' sign reversing who's allowed: if you ARE a visitor, the staff-only condition becomes false for you."
        ]
      },

      {
        heading: "Combining Them in a Real Check",

        code: `let age = 20;
let hasPermission = true;

if (age >= 18 && hasPermission) {
  console.log("Access granted");
}`,

        paragraphs: [
          "This mirrors a real security check — both being old enough AND having permission must be true together before access is granted, exactly like needing to clear multiple checkpoints, not just one."
        ]
      },

      {
        heading: "Important Points to Remember",

        points: [
          "&& (AND) requires every joined condition to be true.",
          "|| (OR) requires just one of the joined conditions to be true.",
          "! (NOT) reverses a true/false value.",
          "These are commonly combined with comparison operators inside if statements (covered next)."
        ]
      }

    ]
  },

  {
    title: "Template Literals",
    subtitle: "Explained Like a Fill-in-the-Blanks Form Letter",

    sections: [

      {
        heading: "Think About a Form Letter",

        paragraphs: [
          "Imagine a printed letter template with blanks: 'Dear ___, your order ___ has been shipped.' Instead of writing a completely new letter for every customer, you just fill in the blanks with their specific name and order number — same letter structure, different inserted details each time.",

          "Template literals in JavaScript let you do exactly this — write a sentence with 'blanks' that automatically get filled in with variable values."
        ]
      },

      {
        heading: "The Old Way — String Concatenation",

        code: `let name = "Nishitha";
let course = "JavaScript";

console.log("Hello " + name + ", welcome to the " + course + " course!");`,

        paragraphs: [
          "This works, but all those + symbols stitching pieces together feel clunky and easy to mess up, especially with longer sentences — like manually cutting and taping pieces of text together instead of simply filling in a clean template."
        ]
      },

      {
        heading: "The Template Literal Way — Using Backticks",

        code: `let name = "Nishitha";
let course = "JavaScript";

console.log(\`Hello \${name}, welcome to the \${course} course!\`);`,

        paragraphs: [
          "Notice the backtick characters (`) instead of regular quotes, and \\${ } marking exactly where a variable's value should be 'filled in' — much cleaner and easier to read than stitching strings together with +."
        ]
      },

      {
        heading: "You Can Put Any Expression Inside ${ }",

        code: `let price = 100;
let quantity = 3;

console.log(\`Total: ₹\${price * quantity}\`);`,

        paragraphs: [
          "It's not limited to just variables — any valid JavaScript expression (even a calculation, like price * quantity here) can sit inside \\${ }, and its result gets filled into that exact spot."
        ]
      },

      {
        heading: "Multi-line Strings Made Easy",

        code: `let message = \`Hello,
This is line two.
This is line three.\`;`,

        paragraphs: [
          "As a bonus, template literals also let you write text across multiple lines directly, without needing special line-break characters — regular quotes don't allow this at all."
        ]
      },

      {
        heading: "Important Points to Remember",

        points: [
          "Template literals use backticks (`) instead of regular quotes.",
          "\\${variableName} inserts a variable's value directly into the string.",
          "Any valid expression, not just variables, can go inside \\${ }.",
          "They also support multi-line strings, unlike regular quoted strings."
        ]
      }

    ]
  },

  {
    title: "Conditional Statements",
    subtitle: "Explained Like a Traffic Signal's Decision",

    sections: [

      {
        heading: "Think About a Traffic Signal",

        paragraphs: [
          "A driver constantly makes a decision based on the signal: if it's green, go; otherwise, if it's yellow, slow down; otherwise (it must be red), stop. The driver's action genuinely depends on which condition is currently true.",

          "if/else statements in JavaScript let your code make exactly this kind of decision — running different code depending on whether a condition is true or false."
        ]
      },

      {
        heading: "The Basic if Statement",

        code: `let signal = "green";

if (signal === "green") {
  console.log("Go");
}`,

        paragraphs: [
          "The code inside the curly braces { } only runs if the condition inside ( ) is true — like only moving the car forward if the signal is actually green, and doing nothing otherwise."
        ]
      },

      {
        heading: "Adding else — A Fallback Action",

        code: `let signal = "red";

if (signal === "green") {
  console.log("Go");
} else {
  console.log("Stop");
}`,

        paragraphs: [
          "else covers every other case — like the driver's default action whenever the signal isn't green: just stop, no matter what the exact other color is."
        ]
      },

      {
        heading: "Adding else if — Multiple Checkpoints",

        code: `let signal = "yellow";

if (signal === "green") {
  console.log("Go");
} else if (signal === "yellow") {
  console.log("Slow down");
} else {
  console.log("Stop");
}`,

        paragraphs: [
          "else if lets you check additional specific conditions one after another, like the driver checking 'is it green? no. is it yellow? yes — slow down', only falling back to the final else if none of the specific conditions matched."
        ]
      },

      {
        heading: "Combining with Logical Operators",

        paragraphs: [
          "Remember && and || from 'Logical Operators'? They're commonly combined inside if conditions, for more complex checks."
        ],

        code: `let age = 20;
let hasLicense = true;

if (age >= 18 && hasLicense) {
  console.log("Allowed to drive");
} else {
  console.log("Not allowed to drive");
}`
      },

      {
        heading: "Important Points to Remember",

        points: [
          "if runs code only when its condition is true.",
          "else provides a fallback, running when the if condition is false.",
          "else if lets you check additional specific conditions, in order.",
          "Conditions are commonly built using comparison and logical operators together."
        ]
      }

    ]
  },

  {
    title: "Switch Statement",
    subtitle: "Explained Like a TV Remote's Channel Buttons",

    sections: [

      {
        heading: "Think About a TV Remote",

        paragraphs: [
          "A TV remote has specific number buttons — pressing '1' shows channel one, '2' shows channel two, and so on, with one extra button as a fallback for anything that's not a recognized channel number. Each button corresponds directly to one specific outcome.",

          "A switch statement in JavaScript works exactly this way — checking one value against several exact possibilities, running the matching block, like pressing the matching remote button."
        ]
      },

      {
        heading: "Rewriting Multiple else if as a Switch",

        code: `let day = "Monday";

switch (day) {
  case "Monday":
    console.log("Start of the work week");
    break;
  case "Friday":
    console.log("Almost weekend!");
    break;
  case "Sunday":
    console.log("Rest day");
    break;
  default:
    console.log("Just a regular day");
}`,

        paragraphs: [
          "Each case is like one remote button, checking if day exactly matches that specific value. default is the fallback button, covering anything that didn't match any specific case — like 'channel not found' on the remote."
        ]
      },

      {
        heading: "Why the break Statement Matters Here",

        paragraphs: [
          "Without break, JavaScript would keep 'falling through' and running every case below the matching one too, even though they don't match — like a faulty remote button that, once pressed, accidentally also presses every button below it. break stops this, exiting the switch once a match is found and handled."
        ]
      },

      {
        heading: "Switch vs if/else — When to Use Which?",

        points: [
          "switch is cleaner when checking one single value against many exact possibilities (like day, status, or a specific code)",
          "if/else if is more flexible for ranges, complex conditions, or combinations using && / ||",
          "Both can achieve the exact same result — switch is mainly about readability for that specific pattern"
        ]
      },

      {
        heading: "Important Points to Remember",

        points: [
          "switch checks one value against several exact case possibilities.",
          "Each case needs a break, or execution 'falls through' to the next case.",
          "default acts as the fallback, like else, for anything that didn't match.",
          "Best suited for checking exact value matches, not ranges or complex conditions."
        ]
      }

    ]
  },

  {
    title: "Ternary Operator",
    subtitle: "Explained Like a Quick Yes/No Stamp Instead of a Long Form",

    sections: [

      {
        heading: "Think About a Quick Approval Stamp",

        paragraphs: [
          "Instead of filling out a whole form with separate sections to record 'approved' or 'rejected', sometimes an officer just quickly stamps a single word directly onto the document — same decision, made and recorded in one fast motion, instead of a lengthy process.",

          "The ternary operator in JavaScript is exactly this — a compact, one-line way to write a simple if/else, when you just need to quickly decide between two outcomes."
        ]
      },

      {
        heading: "The Long Way — A Full if/else",

        code: `let age = 20;
let access;

if (age >= 18) {
  access = "Allowed";
} else {
  access = "Not Allowed";
}

console.log(access);`,

        paragraphs: [
          "This works perfectly fine, but feels like filling out a whole form just to record one simple yes/no decision."
        ]
      },

      {
        heading: "The Ternary Way — One Quick Stamp",

        code: `let age = 20;
let access = age >= 18 ? "Allowed" : "Not Allowed";

console.log(access);`,

        paragraphs: [
          "condition ? valueIfTrue : valueIfFalse — read it as 'is age >= 18? If yes, stamp Allowed; if no, stamp Not Allowed.' Same exact result as the if/else above, in a single compact line."
        ]
      },

      {
        heading: "Using It Directly Inside Other Code",

        code: `console.log(age >= 18 ? "You can vote" : "You cannot vote yet");`,

        paragraphs: [
          "Since it's an expression (it produces a value directly), you can use it right inside console.log(), a template literal, or anywhere else a value is expected — something a full if/else block can't do as cleanly."
        ]
      },

      {
        heading: "When Not to Use It",

        paragraphs: [
          "For simple two-outcome decisions, ternary is great. But nesting multiple ternaries inside each other quickly becomes hard to read — like trying to fit five different stamps onto one tiny line. For anything beyond a simple choice, a regular if/else (or switch) is more readable."
        ]
      },

      {
        heading: "Important Points to Remember",

        points: [
          "The ternary operator's pattern is condition ? valueIfTrue : valueIfFalse.",
          "It's a compact alternative to a simple if/else, producing a value directly.",
          "Can be used directly inside console.log(), template literals, or variable assignments.",
          "Avoid nesting multiple ternaries together — switch to if/else for anything more complex."
        ]
      }

    ]
  },

  {
    title: "Loops - for",
    subtitle: "Explained Like Doing a Fixed Number of Gym Reps",

    sections: [

      {
        heading: "Think About Counting Gym Reps",

        paragraphs: [
          "When doing push-ups, you usually decide a fixed count beforehand — 'I'll do 10 reps.' You start at rep 1, do the action, check if you've reached 10 yet, and if not, do another rep — repeating the exact same action a known number of times.",

          "A for loop in JavaScript works exactly this way — repeating an action a specific, known number of times."
        ]
      },

      {
        heading: "The for Loop Structure",

        code: `for (let i = 1; i <= 10; i++) {
  console.log("Rep number " + i);
}`,

        points: [
          "let i = 1 — starting point (rep 1)",
          "i <= 10 — the condition to keep going (keep repping while i is 10 or less)",
          "i++ — what happens after each rep (increase the count by 1)"
        ]
      },

      {
        heading: "Walking Through What Actually Happens",

        paragraphs: [
          "JavaScript starts at i = 1, checks if i <= 10 (true), runs the code inside { }, then increases i by 1, and checks again — repeating this exact cycle until i <= 10 finally becomes false (once i becomes 11), at which point it stops, exactly like stopping once you've completed all 10 reps."
        ]
      },

      {
        heading: "Looping Through an Array (A Very Common Use)",

        code: `let fruits = ["Apple", "Banana", "Mango"];

for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}`,

        paragraphs: [
          "Instead of a fixed number, here the loop runs exactly as many times as there are items in the array — fruits.length gives that count automatically, so the loop always matches the array's actual size, however many fruits are in it."
        ]
      },

      {
        heading: "Important Points to Remember",

        points: [
          "for loops repeat code a specific, calculable number of times.",
          "The structure has three parts: starting point, continue-condition, and what happens after each round.",
          "Looping through arrays using array.length is an extremely common pattern.",
          "The loop stops automatically once its condition becomes false."
        ]
      }

    ]
  },

  {
    title: "Loops - while & do-while",
    subtitle: "Explained Like Watering a Plant Until the Soil Feels Damp",

    sections: [

      {
        heading: "Think About Watering a Plant",

        paragraphs: [
          "Sometimes you don't know the exact number of times you'll need to pour water — instead, you just keep checking: is the soil still dry? If yes, pour a little more, then check again. You stop the moment it feels damp, however many pours that actually took.",

          "while loops in JavaScript work exactly this way — they keep repeating as long as a condition stays true, without a predetermined count, unlike for loops which usually have a known number of repetitions."
        ]
      },

      {
        heading: "The while Loop",

        code: `let waterLevel = 0;

while (waterLevel < 5) {
  console.log("Pouring water...");
  waterLevel++;
}

console.log("Soil is damp now!");`,

        paragraphs: [
          "Before each pour, JavaScript checks: is waterLevel still less than 5? If true, it pours again (runs the code) and increases the count; if false, it stops immediately — checking the condition first, every single time, before deciding to continue."
        ]
      },

      {
        heading: "do-while — Always Pour at Least Once",

        code: `let attempts = 0;

do {
  console.log("Trying to log in...");
  attempts++;
} while (attempts < 3);`,

        paragraphs: [
          "A do-while loop runs its code first, and only checks the condition afterward — guaranteeing the action happens at least once, even if the condition was already false to begin with. Like trying a locked door's handle at least once, before deciding whether to try again."
        ]
      },

      {
        heading: "while vs do-while — The Key Difference",

        points: [
          "while — checks the condition first, then decides whether to run the code (might run zero times)",
          "do-while — runs the code first, then checks the condition (always runs at least once)",
          "Most situations use while; do-while is useful specifically when you need that guaranteed first run"
        ]
      },

      {
        heading: "A Word of Caution: Infinite Loops",

        paragraphs: [
          "If you forget to update the condition variable (like waterLevel++ above), the condition might never become false — the loop runs forever, freezing your page. Always double-check that your loop's condition will eventually become false."
        ]
      },

      {
        heading: "Important Points to Remember",

        points: [
          "while loops repeat as long as a condition stays true, with no fixed count needed.",
          "while checks the condition before running; do-while runs once before checking.",
          "Always ensure the condition will eventually become false, to avoid infinite loops.",
          "Use while/do-while when you don't know in advance exactly how many repetitions are needed."
        ]
      }

    ]
  },

  {
    title: "Break & Continue",
    subtitle: "Explained Like Skipping or Stopping a Playlist",

    sections: [

      {
        heading: "Think About Listening to a Playlist",

        paragraphs: [
          "While going through a playlist, you might skip a song you don't like and move straight to the next one, without stopping the playlist entirely. Or, if you suddenly find the exact song you were searching for, you might just stop the whole playlist right there, no need to keep playing through the rest.",

          "continue and break in JavaScript loops give you exactly these two behaviors — skipping just one round, or stopping the entire loop completely."
        ]
      },

      {
        heading: "continue — Skip This One, Move to the Next",

        code: `for (let i = 1; i <= 5; i++) {
  if (i === 3) {
    continue;
  }
  console.log(i);
}
// Output: 1, 2, 4, 5 (3 is skipped, loop still continues)`,

        paragraphs: [
          "When i is exactly 3, continue immediately skips the rest of that round and jumps to the next one — like skipping just one disliked song, while the playlist keeps playing normally afterward."
        ]
      },

      {
        heading: "break — Stop the Loop Completely",

        code: `for (let i = 1; i <= 5; i++) {
  if (i === 3) {
    break;
  }
  console.log(i);
}
// Output: 1, 2 (loop stops entirely once i is 3)`,

        paragraphs: [
          "When i is exactly 3, break exits the loop entirely — nothing after it runs at all, like stopping the playlist completely the moment you find what you were looking for, rather than letting it continue."
        ]
      },

      {
        heading: "A Practical Example: Searching for an Item",

        code: `let numbers = [4, 8, 15, 16, 23, 42];

for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] === 16) {
    console.log("Found it at position " + i);
    break;
  }
}`,

        paragraphs: [
          "Once the target value is found, there's no point checking the remaining items — break immediately stops further, unnecessary checking, exactly like stopping a search the moment you've found what you needed."
        ]
      },

      {
        heading: "Important Points to Remember",

        points: [
          "continue skips just the current round of a loop, then moves to the next one.",
          "break stops the entire loop immediately, skipping all remaining rounds.",
          "Both work inside for, while, and do-while loops.",
          "break is especially useful for stopping early once you've found what you were searching for."
        ]
      }

    ]
  },

  {
    title: "Functions Basics",
    subtitle: "Explained Like a Vending Machine",

    sections: [

      {
        heading: "Think About a Vending Machine",

        paragraphs: [
          "A vending machine performs the exact same action every single time someone uses it — you select a snack, it dispenses that snack. You don't rebuild the machine every time you want a snack; it already exists, ready to perform its job repeatedly, whenever called upon.",

          "A function in JavaScript is exactly this — a reusable block of code that performs a specific task, which you can 'call' (use) as many times as you need, without rewriting that code each time."
        ]
      },

      {
        heading: "Defining a Function",

        code: `function greet() {
  console.log("Hello, welcome!");
}`,

        paragraphs: [
          "function greet() { } builds the vending machine itself — defining what it does — but notice nothing actually happens yet. The machine exists, ready and waiting, but hasn't dispensed anything yet."
        ]
      },

      {
        heading: "Calling a Function",

        code: `function greet() {
  console.log("Hello, welcome!");
}

greet(); // Now it actually runs!
greet(); // And again, as many times as needed`,

        paragraphs: [
          "greet() — adding those parentheses and writing the function's name is what actually 'presses the button' on the vending machine, triggering it to run. You can call it as many times as you like, each time performing the exact same action."
        ]
      },

      {
        heading: "Functions That Give Something Back — return",

        code: `function add(a, b) {
  return a + b;
}

let result = add(5, 3);
console.log(result); // 8`,

        paragraphs: [
          "return is like the vending machine actually dispensing a snack back to you — the function calculates something internally, and return hands that result back out, ready to be stored in a variable or used elsewhere."
        ]
      },

      {
        heading: "Why Functions Matter So Much",

        points: [
          "Avoid repeating the same code over and over (write once, call many times)",
          "Break a big problem into smaller, named, manageable pieces",
          "Make code easier to test and fix — fixing one function fixes every place that calls it",
          "Functions are the foundation of basically all JavaScript code you'll write going forward"
        ]
      },

      {
        heading: "Important Points to Remember",

        points: [
          "A function is a reusable, named block of code, defined using the function keyword.",
          "Defining a function doesn't run it — you must call it using its name followed by ().",
          "return sends a value back out of the function, to be used elsewhere.",
          "Functions let you avoid repeating code, and organize logic into manageable pieces."
        ]
      }

    ]
  },

  {
    title: "Function Parameters & Default Values",
    subtitle: "Explained Like Customizing a Food Order",

    sections: [

      {
        heading: "Think About Ordering a Sandwich",

        paragraphs: [
          "When ordering a sandwich, you might specify exactly what you want inside — 'cheese and tomato' — and the shop makes that specific sandwich for you. If you don't specify anything, the shop might just give you their standard default sandwich instead, rather than refusing to serve you at all.",

          "Function parameters let you pass in specific details when calling a function, customizing what it actually does — and default values provide a fallback when you don't specify anything."
        ]
      },

      {
        heading: "Functions Without Parameters — Always the Same Result",

        code: `function greet() {
  console.log("Hello, welcome!");
}

greet(); // Always exactly the same greeting, every single time`,

        paragraphs: [
          "Like a vending machine with only one snack option — every single press gives you the exact same thing, with no way to customize the order."
        ]
      },

      {
        heading: "Adding Parameters — Customizing the Order",

        code: `function greet(name) {
  console.log("Hello, " + name + "!");
}

greet("Nishitha"); // "Hello, Nishitha!"
greet("Ravi");      // "Hello, Ravi!"`,

        paragraphs: [
          "name here is a parameter — a placeholder for whatever specific value gets passed in when the function is actually called, like a blank on the order form you fill in each time, customizing the exact sandwich (or greeting) you get back."
        ]
      },

      {
        heading: "Multiple Parameters",

        code: `function addNumbers(a, b) {
  return a + b;
}

console.log(addNumbers(5, 3)); // 8`,

        paragraphs: [
          "Just like a sandwich order might have separate blanks for 'bread type' and 'fillings', a function can take multiple parameters, separated by commas, each one customizing a different aspect of what the function does."
        ]
      },

      {
        heading: "Default Values — A Fallback if Nothing Is Specified",

        code: `function greet(name = "Guest") {
  console.log("Hello, " + name + "!");
}

greet("Nishitha"); // "Hello, Nishitha!"
greet();            // "Hello, Guest!" (used the default, since nothing was passed)`,

        paragraphs: [
          "name = \"Guest\" sets a fallback — like the shop's standard default sandwich, automatically used whenever a customer doesn't specify a particular preference."
        ]
      },

      {
        heading: "Important Points to Remember",

        points: [
          "Parameters are placeholders inside a function's parentheses, customizing its behavior per call.",
          "The actual values passed in when calling the function are called 'arguments'.",
          "A function can have multiple parameters, separated by commas.",
          "Default values (param = value) provide a fallback when no argument is passed for that parameter."
        ]
      }

    ]
  },

  {
    title: "Arrow Functions",
    subtitle: "Explained Like Texting Shorthand vs a Formal Letter",

    sections: [

      {
        heading: "Think About Texting vs Writing a Formal Letter",

        paragraphs: [
          "A formal letter might say: 'I am writing to inform you that the meeting has been rescheduled.' A text message saying the exact same thing might just say: 'Meeting moved, fyi.' Same meaning, much shorter way of saying it.",

          "Arrow functions in JavaScript are exactly this — a shorter, more compact way to write the exact same kind of function, especially for simple one-task functions."
        ]
      },

      {
        heading: "The Regular Function (The 'Formal Letter')",

        code: `function add(a, b) {
  return a + b;
}`
      },

      {
        heading: "The Arrow Function (The 'Text Message')",

        code: `const add = (a, b) => {
  return a + b;
};`,

        paragraphs: [
          "Notice the function keyword is gone, replaced by => (an 'arrow') right after the parameters. Same exact behavior as the regular function above, just written more compactly, and stored in a variable instead of declared with the function keyword."
        ]
      },

      {
        heading: "Even Shorter — Implicit Return",

        code: `const add = (a, b) => a + b;

console.log(add(5, 3)); // 8`,

        paragraphs: [
          "When the function body is just a single expression, you can drop the curly braces { } and the return keyword entirely — the result is automatically returned, like an extremely condensed text message that still gets the full meaning across."
        ]
      },

      {
        heading: "One Parameter — Parentheses Become Optional",

        code: `const double = num => num * 2;

console.log(double(5)); // 10`,

        paragraphs: [
          "With exactly one parameter, the surrounding ( ) around it can also be dropped — though many developers still keep them for consistency/readability, it's purely a style choice."
        ]
      },

      {
        heading: "Where You'll See Arrow Functions Constantly",

        paragraphs: [
          "Arrow functions are extremely common in modern JavaScript and React — you'll see them everywhere, especially as short callback functions passed into array methods (covered in upcoming topics) or event handlers, exactly like in your CourseDetails.jsx file's onClick handlers."
        ]
      },

      {
        heading: "Important Points to Remember",

        points: [
          "Arrow functions use => instead of the function keyword, for a shorter syntax.",
          "Curly braces and return can be dropped for a single-expression function body.",
          "Parentheses around a single parameter are optional, but commonly kept for clarity.",
          "Extremely common in modern JavaScript, especially for short callback functions."
        ]
      }

    ]
  },

  {
    title: "Function Expressions vs Declarations",
    subtitle: "Explained Like a Cookie Cutter vs a Freehand Drawing",

    sections: [

      {
        heading: "Think About Making Cookies",

        paragraphs: [
          "A cookie cutter is a fixed shape, ready and named before you even start baking — you can use it the moment your kitchen is set up, even before you've mixed the dough. A freehand drawing, on the other hand, only exists once you've actually drawn it onto the dough — you can't use a shape that hasn't been drawn yet.",

          "Function declarations and function expressions in JavaScript behave with this exact same timing difference."
        ]
      },

      {
        heading: "Function Declaration — Ready Before Anything Else Runs",

        code: `greet(); // Works! "Hello!"

function greet() {
  console.log("Hello!");
}`,

        paragraphs: [
          "Surprisingly, this works even though greet() is called BEFORE its definition appears in the code. JavaScript sets up all function declarations first, before running anything else — like having every cookie cutter ready on the counter before baking even begins, regardless of where in the recipe they're mentioned."
        ]
      },

      {
        heading: "Function Expression — Only Exists Once That Line Runs",

        code: `greet(); // ❌ Error! Cannot access before initialization

const greet = function() {
  console.log("Hello!");
};`,

        paragraphs: [
          "Here, greet is just a regular variable holding a function value — and like any variable, it doesn't exist yet until that exact line of code actually runs, just like a freehand-drawn shape that doesn't exist until you've actually drawn it."
        ]
      },

      {
        heading: "Calling It Correctly — After Definition",

        code: `const greet = function() {
  console.log("Hello!");
};

greet(); // Works fine, since it's called after being defined`
      },

      {
        heading: "Arrow Functions Are Also Expressions",

        paragraphs: [
          "Remember the arrow functions from the last topic? const add = (a, b) => a + b is also a function expression, since it's stored in a variable — it follows this exact same 'must be defined before use' rule."
        ]
      },

      {
        heading: "Which Should You Use?",

        paragraphs: [
          "Both are valid and widely used. Function declarations are slightly more forgiving about ordering, while function expressions (especially arrow functions) are extremely common in modern JavaScript and React for their compact syntax. As a habit, defining functions before using them (regardless of which style) is always the safest, clearest approach."
        ]
      },

      {
        heading: "Important Points to Remember",

        points: [
          "Function declarations (function name() {}) are available throughout the file, even before their definition line.",
          "Function expressions (const name = function() {}) only exist once that line actually runs.",
          "Arrow functions are also a type of function expression.",
          "As a safe habit, always define functions before calling them, regardless of style."
        ]
      }

    ]
  },

  {
    title: "Scope",
    subtitle: "Explained Like a Classroom Announcement vs a School-Wide PA System",

    sections: [

      {
        heading: "Think About Two Kinds of Announcements",

        paragraphs: [
          "A teacher speaking inside one classroom can only be heard by students in that exact room — students in a different classroom have no idea what was said. A school-wide PA system announcement, on the other hand, can be heard by absolutely everyone in every classroom, all at once.",

          "Scope in JavaScript describes exactly this — where a variable can be 'heard' (accessed) from, and where it can't."
        ]
      },

      {
        heading: "Global Scope — The School-Wide PA System",

        code: `let schoolName = "ABC High School"; // Global

function announce() {
  console.log(schoolName); // Can hear it, even from inside this function
}

announce();
console.log(schoolName); // Can also hear it directly, from anywhere`,

        paragraphs: [
          "A variable declared outside any function (at the top level of your file) has global scope — accessible from literally anywhere in your code, just like that PA announcement reaching every classroom."
        ]
      },

      {
        heading: "Local (Function) Scope — One Classroom's Announcement",

        code: `function classroom() {
  let topic = "Mathematics"; // Local to this function
  console.log(topic); // Works fine, we're inside the classroom
}

classroom();
console.log(topic); // ❌ Error! topic doesn't exist out here`,

        paragraphs: [
          "topic is declared inside the function classroom() — it only exists, and can only be 'heard', within that function itself. Trying to access it from outside is like a student in a different classroom claiming to have heard an announcement that was never broadcast to their room at all."
        ]
      },

      {
        heading: "Block Scope — let/const and { }",

        code: `if (true) {
  let message = "Inside the if block";
  console.log(message); // Works
}

console.log(message); // ❌ Error! message doesn't exist out here`,

        paragraphs: [
          "let and const are also confined to whatever { } block they're declared inside — not just functions, but also if statements, loops, and any other curly-brace block. (This is actually one of the confusing behaviors of the older var keyword from 'Variables' — var ignores block scope, which is part of why let/const are preferred today.)"
        ]
      },

      {
        heading: "Why Scope Matters",

        paragraphs: [
          "Keeping variables scoped tightly (local/block, rather than global) prevents different parts of your code from accidentally interfering with each other — like keeping classroom discussions private, rather than every single classroom's conversation broadcasting over the same shared PA system and causing confusion."
        ]
      },

      {
        heading: "Important Points to Remember",

        points: [
          "Global scope variables are accessible from anywhere in the code.",
          "Function (local) scope variables only exist within that specific function.",
          "Block scope (let/const) confines a variable to its specific { } block, including if/loops.",
          "Keeping variables as tightly scoped as possible helps avoid accidental interference between code."
        ]
      }

    ]
  },

  {
    title: "Arrays Intro",
    subtitle: "Explained Like Numbered Train Coaches",

    sections: [

      {
        heading: "Think About a Train with Numbered Coaches",

        paragraphs: [
          "A train has multiple coaches, each with its own number — coach 1, coach 2, coach 3, and so on. Passengers know exactly which coach to board by its number, and the whole train (all coaches together) is still considered just one single train.",

          "An array in JavaScript is exactly this — a single, ordered collection holding multiple values, each accessible by its own number (called an 'index')."
        ]
      },

      {
        heading: "Creating an Array",

        code: `let fruits = ["Apple", "Banana", "Mango"];

console.log(fruits);`,

        paragraphs: [
          "Square brackets [ ] create the array — the entire train. Each item inside, separated by commas, is one coach of that train."
        ]
      },

      {
        heading: "Accessing Items by Index — Counting Starts at 0!",

        code: `console.log(fruits[0]); // "Apple"
console.log(fruits[1]); // "Banana"
console.log(fruits[2]); // "Mango"`,

        paragraphs: [
          "This is a crucial detail — array indexing starts at 0, not 1! So fruits[0] gets the FIRST item, not fruits[1]. Think of it like the very first coach being labelled 'Coach 0' instead of 'Coach 1' — unusual at first, but you'll quickly get used to this counting style."
        ]
      },

      {
        heading: "Finding the Array's Length",

        code: `console.log(fruits.length); // 3`,

        paragraphs: [
          "length tells you exactly how many coaches the train has — useful for loops (remember the for loop example using fruits.length from 'Loops - for'?) and for finding the last valid index (length - 1, since counting starts at 0)."
        ]
      },

      {
        heading: "Changing a Value at a Specific Index",

        code: `fruits[1] = "Orange";
console.log(fruits); // ["Apple", "Orange", "Mango"]`,

        paragraphs: [
          "Just like replacing whoever's sitting in coach 1 with someone new, you can directly reassign whatever's at a specific index."
        ]
      },

      {
        heading: "Important Points to Remember",

        points: [
          "Arrays are created using square brackets [ ], holding multiple ordered values.",
          "Each item has an index (position number) — counting starts at 0, not 1.",
          "array.length tells you how many items are in the array.",
          "You can read or change any item directly using its index, like array[0]."
        ]
      }

    ]
  },

  {
    title: "Array Methods - push, pop, shift, unshift",
    subtitle: "Explained Like People Joining or Leaving a Bus Queue",

    sections: [

      {
        heading: "Think About a Bus Stop Queue",

        paragraphs: [
          "People can join a queue at the very back, or sometimes a queue allows joining at the very front (rare, but imaginable for this analogy). People can also leave from the front (boarding the bus) or, in unusual cases, step out from the very back of the line.",

          "push, pop, shift, and unshift in JavaScript let you add or remove items from exactly these two ends of an array — the front and the back."
        ]
      },

      {
        heading: "push() — Add to the End",

        code: `let queue = ["Person A", "Person B"];
queue.push("Person C");

console.log(queue); // ["Person A", "Person B", "Person C"]`,

        paragraphs: [
          "Like someone joining the back of the queue — push() adds a new item to the very end of the array."
        ]
      },

      {
        heading: "pop() — Remove from the End",

        code: `let queue = ["Person A", "Person B", "Person C"];
let lastPerson = queue.pop();

console.log(lastPerson); // "Person C"
console.log(queue);       // ["Person A", "Person B"]`,

        paragraphs: [
          "pop() removes the very last item, and conveniently gives that removed item back to you — like the last person stepping out from the back of the queue, and someone noting down exactly who that was."
        ]
      },

      {
        heading: "unshift() — Add to the Beginning",

        code: `let queue = ["Person B", "Person C"];
queue.unshift("Person A");

console.log(queue); // ["Person A", "Person B", "Person C"]`,

        paragraphs: [
          "unshift() adds a new item right at the front — like someone being let in right at the start of the queue, ahead of everyone already waiting."
        ]
      },

      {
        heading: "shift() — Remove from the Beginning",

        code: `let queue = ["Person A", "Person B", "Person C"];
let firstPerson = queue.shift();

console.log(firstPerson); // "Person A"
console.log(queue);        // ["Person B", "Person C"]`,

        paragraphs: [
          "shift() removes the very first item — like the person at the front of the queue finally boarding the bus, and everyone else shuffling one step forward."
        ]
      },

      {
        heading: "Quick Comparison Table",

        points: [
          "push() — add to the end",
          "pop() — remove from the end",
          "unshift() — add to the beginning",
          "shift() — remove from the beginning"
        ]
      },

      {
        heading: "Important Points to Remember",

        points: [
          "push() and pop() work at the end of the array.",
          "unshift() and shift() work at the beginning of the array.",
          "pop() and shift() both return the item they removed.",
          "All four methods directly modify the original array, rather than creating a new one."
        ]
      }

    ]
  },

  {
    title: "Array Methods - map, filter, reduce",
    subtitle: "Explained Like Stations on a Factory Assembly Line",

    sections: [

      {
        heading: "Think About a Factory Assembly Line",

        paragraphs: [
          "On an assembly line, items pass through different stations, each performing one specific job: one station transforms every item the same way (like painting all of them red), another station removes items that don't meet a certain standard (like rejecting damaged pieces), and a final station might combine everything into a single summary count.",

          "map, filter, and reduce are exactly these three kinds of stations, for working through every item in an array."
        ]
      },

      {
        heading: "map() — Transform Every Item",

        code: `let prices = [100, 200, 300];
let withTax = prices.map(price => price * 1.18);

console.log(withTax); // [118, 236, 354]`,

        paragraphs: [
          "map() runs your function on EVERY item, and creates a brand new array with each transformed result — like every single item on the assembly line getting painted the same way, none skipped, and the original line (array) staying as it was, with a separate painted batch created instead."
        ]
      },

      {
        heading: "filter() — Keep Only Some Items",

        code: `let prices = [100, 250, 80, 500];
let expensiveItems = prices.filter(price => price > 150);

console.log(expensiveItems); // [250, 500]`,

        paragraphs: [
          "filter() checks every item against a condition, and creates a new array containing ONLY the items that passed — like the quality-control station rejecting anything that doesn't meet the standard, keeping only the good ones moving forward."
        ]
      },

      {
        heading: "reduce() — Combine Everything Into One Result",

        code: `let prices = [100, 200, 300];
let total = prices.reduce((sum, price) => sum + price, 0);

console.log(total); // 600`,

        paragraphs: [
          "reduce() goes through every item and gradually builds up a single combined result — like a final counting station tallying up everything that passed through the entire line into one total number. The 0 here is the starting point for sum, before adding anything."
        ]
      },

      {
        heading: "Why These Three Are So Important",

        paragraphs: [
          "map, filter, and reduce are used constantly in real-world JavaScript and React (you'll use .map() extensively to render lists of items in React, very similar to how your CourseDetails.jsx already maps over topics to render the sidebar!). They're cleaner and more readable than writing manual for loops for these exact same tasks."
        ]
      },

      {
        heading: "Important Points to Remember",

        points: [
          "map() transforms every item, returning a new array of the same length.",
          "filter() returns a new array containing only items that pass a condition.",
          "reduce() combines all items into a single final value.",
          "None of these three methods change the original array — they all return something new."
        ]
      }

    ]
  },

  {
    title: "Array Methods - forEach, find, includes",
    subtitle: "Explained Like Checking Every Fruit in a Basket",

    sections: [

      {
        heading: "Think About Checking a Fruit Basket",

        paragraphs: [
          "Sometimes you just want to look at and do something with every fruit in a basket, one by one (maybe wiping each one clean). Other times, you're specifically searching for one exact fruit — say, the only mango in the basket — and you can stop looking the moment you find it. And sometimes you just want a quick yes/no: 'is there an apple in here at all?'",

          "forEach, find, and includes give you exactly these three different ways of working through an array."
        ]
      },

      {
        heading: "forEach() — Do Something With Every Item",

        code: `let fruits = ["Apple", "Banana", "Mango"];

fruits.forEach(fruit => {
  console.log("Checking: " + fruit);
});`,

        paragraphs: [
          "forEach() runs your function once for every single item, simply performing an action — unlike map(), it doesn't build and return a new array; it's purely for 'doing something' with each item, like wiping each fruit clean without changing what's in the basket."
        ]
      },

      {
        heading: "find() — Get the First Matching Item",

        code: `let numbers = [4, 8, 15, 16, 23];
let found = numbers.find(num => num > 10);

console.log(found); // 15 (the FIRST one that matches)`,

        paragraphs: [
          "find() searches through the array and immediately stops at the very first item matching your condition, returning that one item directly — like finding the one specific mango you were searching for, and stopping the search right there."
        ]
      },

      {
        heading: "includes() — A Simple Yes/No Check",

        code: `let fruits = ["Apple", "Banana", "Mango"];

console.log(fruits.includes("Banana")); // true
console.log(fruits.includes("Orange")); // false`,

        paragraphs: [
          "includes() doesn't return an item at all — just a simple true or false, answering 'is this value present in the array at all?', like a quick glance into the basket just to confirm whether an apple exists in there, without caring exactly where."
        ]
      },

      {
        heading: "Quick Comparison",

        points: [
          "forEach() — just perform an action on every item, returns nothing useful",
          "find() — get back the first item matching a condition",
          "includes() — get back a simple true/false, checking if a value exists at all"
        ]
      },

      {
        heading: "Important Points to Remember",

        points: [
          "forEach() runs a function on every item, purely for performing actions, not transforming data.",
          "find() returns the first matching item based on a condition, or undefined if none match.",
          "includes() returns a simple true/false, checking for a value's existence.",
          "Choose the method based on what you actually need back: nothing, one item, or a yes/no."
        ]
      }

    ]
  },

  {
    title: "Objects Intro",
    subtitle: "Explained Like an ID Card with Multiple Labeled Fields",

    sections: [

      {
        heading: "Think About an ID Card",

        paragraphs: [
          "An ID card doesn't just show one single piece of information — it has several clearly labeled fields: Name: Nishitha, Age: 22, College: XYZ. Each label tells you exactly what that specific piece of information represents, unlike a plain list where you'd have to guess what each item means just from its position.",

          "An object in JavaScript works exactly like this ID card — a collection of labeled fields (called 'keys'), each holding a specific piece of information (called a 'value')."
        ]
      },

      {
        heading: "Creating an Object",

        code: `let student = {
  name: "Nishitha",
  age: 22,
  course: "MERN Stack"
};

console.log(student);`,

        paragraphs: [
          "Curly braces { } create the object — the entire ID card. Each key: value pair (like name: \"Nishitha\") is one labeled field on that card."
        ]
      },

      {
        heading: "Accessing a Value — Dot Notation",

        code: `console.log(student.name);   // "Nishitha"
console.log(student.age);    // 22`,

        paragraphs: [
          "Using a dot, followed by the exact label name, reads that specific field's value — like reading the 'Age' line directly off the ID card, without needing to know its position."
        ]
      },

      {
        heading: "Accessing a Value — Bracket Notation",

        code: `console.log(student["course"]); // "MERN Stack"`,

        paragraphs: [
          "This achieves the exact same result as dot notation, just written differently — bracket notation is especially useful when the key name is stored in a variable, or contains special characters/spaces."
        ]
      },

      {
        heading: "Changing or Adding a Field",

        code: `student.age = 23;             // changing an existing field
student.college = "ABC College"; // adding a brand new field

console.log(student);`,

        paragraphs: [
          "Just like updating the age printed on an ID card, or adding a brand new field that wasn't there originally (like adding a 'College' line to a card that didn't have one)."
        ]
      },

      {
        heading: "Objects vs Arrays — When to Use Which?",

        points: [
          "Array = ordered list of similar items, accessed by position/index (like [\"Apple\", \"Banana\"])",
          "Object = labeled collection of specific properties, accessed by name (like { name: \"Nishitha\", age: 22 })",
          "Use arrays for lists of similar things; objects for describing one specific 'thing' with multiple properties"
        ]
      },

      {
        heading: "Important Points to Remember",

        points: [
          "Objects are created using curly braces { }, with key: value pairs.",
          "Access values using dot notation (object.key) or bracket notation (object[\"key\"]).",
          "You can change existing fields or add entirely new ones after creation.",
          "Use objects to describe one specific thing with multiple labeled properties, unlike arrays which hold ordered lists."
        ]
      }

    ]
  },

  {
    title: "Object Methods & this",
    subtitle: "Explained Like an Employee Badge Referring to Itself",

    sections: [

      {
        heading: "Think About an Employee Introducing Themselves",

        paragraphs: [
          "When an employee wears their ID badge and says 'My name is Ravi, and I work in Sales,' they're referring to their own details directly — not someone else's badge, their own. They don't need to say 'Ravi's name is Ravi' awkwardly; 'my' naturally refers to themselves.",

          "this in JavaScript works exactly like that word 'my' — inside an object's method, this refers to the object itself, letting it access its own properties naturally."
        ]
      },

      {
        heading: "Adding a Function Inside an Object — A 'Method'",

        code: `let student = {
  name: "Nishitha",
  course: "MERN Stack",

  introduce: function() {
    console.log("Hi, I'm " + this.name + ", learning " + this.course);
  }
};

student.introduce(); // "Hi, I'm Nishitha, learning MERN Stack"`,

        paragraphs: [
          "A function stored as a property inside an object is called a 'method'. this.name inside introduce() refers to THIS specific object's own name field — like the employee's badge naturally pointing back to their own details, not anyone else's."
        ]
      },

      {
        heading: "Why Not Just Hardcode the Name?",

        code: `let student2 = {
  name: "Ravi",
  course: "Java",
  introduce: student.introduce // reusing the SAME method
};

student2.introduce(); // "Hi, I'm Ravi, learning Java"`,

        paragraphs: [
          "Notice the same introduce method, reused on a completely different object, automatically refers to Ravi's own details, not Nishitha's — because this always points to whichever object actually called the method, just like any employee wearing their own badge would introduce themselves correctly, using the exact same introduction script."
        ]
      },

      {
        heading: "A Common Beginner Trap: Arrow Functions and this",

        paragraphs: [
          "Arrow functions (from 'Arrow Functions') don't get their own this — they borrow it from their surrounding context, which can cause confusing behavior inside object methods. As a simple rule for now: prefer the regular function() syntax for object methods that need to use this."
        ]
      },

      {
        heading: "Important Points to Remember",

        points: [
          "A function stored as an object's property is called a 'method'.",
          "this, inside a method, refers to the object that the method was called on.",
          "The same method can be reused across different objects, with this adjusting automatically each time.",
          "Avoid arrow functions for object methods that rely on this — use regular function() instead."
        ]
      }

    ]
  },

  {
    title: "Destructuring",
    subtitle: "Explained Like Unpacking a Grocery Bag",

    sections: [

      {
        heading: "Think About Unpacking Groceries",

        paragraphs: [
          "Instead of reaching into a grocery bag one item at a time and naming each separately ('take out milk, then take out bread, then take out eggs'), you could just say once: 'milk, bread, and eggs come out of this bag' — directly pulling out exactly what you need, by name, in one motion.",

          "Destructuring in JavaScript lets you do exactly this — pull specific values directly out of an object or array, in one clean line, instead of accessing them one at a time."
        ]
      },

      {
        heading: "Destructuring an Object — The Old Way",

        code: `let student = { name: "Nishitha", age: 22, course: "MERN" };

let name = student.name;
let age = student.age;
let course = student.course;`,

        paragraphs: [
          "This works, but it's like reaching into the bag three separate times, naming each item individually — repetitive."
        ]
      },

      {
        heading: "Destructuring an Object — The Clean Way",

        code: `let student = { name: "Nishitha", age: 22, course: "MERN" };

let { name, age, course } = student;

console.log(name);   // "Nishitha"
console.log(age);    // 22`,

        paragraphs: [
          "One single line, naming exactly which fields you want pulled out — and JavaScript automatically creates matching variables with those exact names, like saying 'milk, bread, and eggs' once and getting all three out at the same time."
        ]
      },

      {
        heading: "Destructuring an Array",

        code: `let fruits = ["Apple", "Banana", "Mango"];

let [first, second, third] = fruits;

console.log(first);  // "Apple"
console.log(second); // "Banana"`,

        paragraphs: [
          "Same idea, but with square brackets — items get pulled out in order, matching the array's position, rather than by name."
        ]
      },

      {
        heading: "A Very Common Use: Function Parameters",

        code: `function introduce({ name, course }) {
  console.log(\`Hi, I'm \${name}, learning \${course}\`);
}

introduce({ name: "Nishitha", course: "MERN Stack" });`,

        paragraphs: [
          "You'll see this pattern constantly in React — destructuring props (the object passed into a component) directly in the function's parameters, pulling out exactly the fields needed, immediately."
        ]
      },

      {
        heading: "Important Points to Remember",

        points: [
          "Object destructuring uses { } and pulls fields out by matching their exact key names.",
          "Array destructuring uses [ ] and pulls items out based on their position/order.",
          "Destructuring avoids repetitive object.property or array[index] access.",
          "Extremely common for function parameters, especially in React component props."
        ]
      }

    ]
  },

  {
    title: "Spread & Rest Operators",
    subtitle: "Explained Like Photocopying vs Collecting Leftovers",

    sections: [

      {
        heading: "Think About Two Different Office Tasks",

        paragraphs: [
          "Photocopying a document spreads out every single page from the original, laying them all out individually, ready to be combined with other pages into a new file. Collecting 'whatever's left' after distributing some items, on the other hand, gathers up the remaining leftover items into one single pile.",

          "The spread operator (...) and rest operator (...) in JavaScript do exactly these two things — they look identical (three dots), but their job depends entirely on where you use them."
        ]
      },

      {
        heading: "Spread Operator — Expanding an Array",

        code: `let fruits = ["Apple", "Banana"];
let moreFruits = [...fruits, "Mango", "Orange"];

console.log(moreFruits); // ["Apple", "Banana", "Mango", "Orange"]`,

        paragraphs: [
          "...fruits 'photocopies' every single item out of the original array, spreading them individually into the new array — like spreading out every page of the original document, ready to combine with more new pages alongside them."
        ]
      },

      {
        heading: "Spread Operator — Copying an Object",

        code: `let student = { name: "Nishitha", course: "MERN" };
let updatedStudent = { ...student, course: "Full Stack" };

console.log(updatedStudent);
// { name: "Nishitha", course: "Full Stack" }`,

        paragraphs: [
          "This copies every field from student, then overwrites just the course field — an extremely common pattern in React for updating state without directly modifying the original object."
        ]
      },

      {
        heading: "Rest Operator — Collecting the Leftovers",

        code: `function sum(...numbers) {
  return numbers.reduce((total, num) => total + num, 0);
}

console.log(sum(1, 2, 3));       // 6
console.log(sum(5, 10, 15, 20)); // 50`,

        paragraphs: [
          "Here, ...numbers in the function's parameters collects every argument passed in, however many there are, gathering them all into a single array called numbers — like collecting 'whatever's left over' into one pile, regardless of how many leftover items there actually are."
        ]
      },

      {
        heading: "Telling Spread and Rest Apart",

        points: [
          "Spread (used when creating something) — expands/copies items OUT of an existing array/object",
          "Rest (used in function parameters) — gathers multiple individual values INTO one array",
          "Both use the exact same ... syntax — context (where it's used) tells you which behavior applies"
        ]
      },

      {
        heading: "Important Points to Remember",

        points: [
          "The spread operator (...) expands an array/object's items individually into a new one.",
          "The rest operator (...) gathers multiple function arguments into a single array.",
          "Spread is commonly used for copying/merging objects without mutating the original.",
          "Both share identical syntax — their behavior depends entirely on the context they're used in."
        ]
      }

    ]
  },

  {
    title: "DOM Intro",
    subtitle: "Explained Like a Blueprint Becoming an Actual Furniture Model",

    sections: [

      {
        heading: "Think About a Furniture Blueprint",

        paragraphs: [
          "An architect's blueprint is just flat paper with instructions — it isn't the actual furniture itself. But once a workshop builds it, you get a real, physical 3D model that you can actually touch, move, or repaint — something the flat blueprint alone never let you do.",

          "The DOM (Document Object Model) is exactly this — once the browser reads your flat HTML file, it builds a living, in-memory '3D model' of your page that JavaScript can actually touch, change, and interact with."
        ]
      },

      {
        heading: "HTML File vs the DOM",

        paragraphs: [
          "Your .html file is the static blueprint — fixed text sitting on your computer's disk. The DOM is what the browser actually builds from that blueprint while displaying the page — a live, structured representation that JavaScript can read and modify in real time, unlike the unchanging original file."
        ]
      },

      {
        heading: "The DOM as a Family Tree",

        paragraphs: [
          "The DOM organizes everything as a tree of connected elements — <html> at the very top, with <head> and <body> as its two children, <body> having its own children like <h1>, <p>, <div>, and so on, exactly like the parent-child relationships we explored back in 'Combinators' from the CSS course."
        ]
      },

      {
        heading: "A Tiny Glimpse of DOM Access",

        code: `console.log(document);

// You'll learn the actual selecting methods in the next topic
console.log(document.title);`,

        paragraphs: [
          "document represents the entire built model — the actual furniture, ready to be inspected or rearranged. We'll learn the specific tools for selecting and changing parts of it in the next two topics."
        ]
      },

      {
        heading: "Why This Matters for Everything You'll Build",

        paragraphs: [
          "Every single interactive thing JavaScript does on a webpage — showing/hiding content, responding to clicks, updating text without reloading — happens by reading and modifying this DOM model, not the original HTML file itself, which never changes once loaded."
        ]
      },

      {
        heading: "Important Points to Remember",

        points: [
          "The DOM is the browser's live, in-memory model of your page, built from your HTML.",
          "Unlike the static HTML file, the DOM can be read and changed by JavaScript in real time.",
          "The DOM organizes elements as a tree, with parent-child relationships.",
          "document represents the entire DOM, the starting point for accessing and changing the page."
        ]
      }

    ]
  },

  {
    title: "Selecting DOM Elements",
    subtitle: "Explained Like Finding a Specific Student by Roll Number or Row",

    sections: [

      {
        heading: "Think About Locating a Specific Student",

        paragraphs: [
          "A teacher could find a student in several ways — calling out their exact roll number (unique, finds exactly one student), calling out everyone wearing a specific badge (finds a whole group), or simply pointing at 'the third row' (finds by structural position).",

          "JavaScript gives you these exact same approaches for finding specific elements in the DOM, before you can change anything about them."
        ]
      },

      {
        heading: "Selecting by ID — Finding by Roll Number",

        code: `<div id="main-banner">Welcome!</div>`,

        paragraphs: [],
      },
      {
        heading: "",
        code: `let banner = document.getElementById("main-banner");
console.log(banner);`,
        paragraphs: [
          "Remember id from CSS's 'ID Selector' — unique, only one per page. getElementById() finds exactly that one specific element, like calling out one unique roll number and getting exactly one student."
        ]
      },

      {
        heading: "Selecting by Class — Finding a Group",

        code: `let cards = document.getElementsByClassName("card");
console.log(cards); // A collection of EVERY element with class="card"`,

        paragraphs: [
          "Like calling out a badge name and getting every student wearing it — this returns a whole collection of matching elements, not just one, since classes (from CSS's 'Class Selector') are meant to be reused."
        ]
      },

      {
        heading: "The Modern, Flexible Way — querySelector",

        code: `let banner = document.querySelector("#main-banner");  // by id
let firstCard = document.querySelector(".card");        // first matching class
let heading = document.querySelector("h1");              // first matching tag`,

        paragraphs: [
          "querySelector() accepts any valid CSS selector (#id, .class, tag name, even combinators from the CSS course!) and returns just the FIRST matching element — incredibly flexible, and the most commonly used selection method in modern JavaScript."
        ]
      },

      {
        heading: "Selecting Multiple Elements — querySelectorAll",

        code: `let allCards = document.querySelectorAll(".card");

allCards.forEach(card => {
  console.log(card);
});`,

        paragraphs: [
          "Like querySelector(), but returns EVERY matching element, not just the first — and notice it can be used directly with forEach (from 'Array Methods - forEach, find, includes'), to do something with every matched element."
        ]
      },

      {
        heading: "Important Points to Remember",

        points: [
          "getElementById() finds one specific element by its unique id.",
          "getElementsByClassName() finds every element sharing a specific class.",
          "querySelector() finds the FIRST element matching any CSS selector — most commonly used today.",
          "querySelectorAll() finds EVERY element matching a CSS selector, returning a full collection."
        ]
      }

    ]
  },

  {
    title: "Changing Content & Styles via DOM",
    subtitle: "Explained Like Rewriting on a Whiteboard",

    sections: [

      {
        heading: "Think About a Whiteboard",

        paragraphs: [
          "Once you've located the correct whiteboard (from the previous topic, 'Selecting DOM Elements'), you can wipe off existing writing and write something new, or simply change its border color without touching the words on it at all — two completely separate kinds of changes you can make.",

          "Once you've selected a DOM element, JavaScript lets you change its content (the text/HTML) or its appearance (the styling), exactly like rewriting or repainting that whiteboard."
        ]
      },

      {
        heading: "Changing Text Content",

        code: `let heading = document.querySelector("h1");
heading.textContent = "Welcome, Nishitha!";`,

        paragraphs: [
          "textContent simply replaces the plain text inside that element — like wiping the whiteboard and writing a brand new plain sentence, with no special formatting."
        ]
      },

      {
        heading: "Changing HTML Content",

        code: `let container = document.querySelector(".message-box");
container.innerHTML = "<strong>Important:</strong> Please read this.";`,

        paragraphs: [
          "innerHTML lets you insert actual HTML tags, not just plain text — like writing on the whiteboard with some words specifically underlined or boxed, not just plain handwriting. (Use this carefully with untrusted/user input, since it can introduce security risks if misused — for plain text, prefer textContent.)"
        ]
      },

      {
        heading: "Changing a Single Style Property",

        code: `let banner = document.querySelector("#main-banner");
banner.style.backgroundColor = "darkgreen";
banner.style.color = "white";`,

        paragraphs: [
          "element.style lets you directly set CSS properties through JavaScript — like repainting just the whiteboard's border color, without touching anything that's written on it."
        ]
      },

      {
        heading: "Adding or Removing a CSS Class",

        code: `let card = document.querySelector(".card");
card.classList.add("highlighted");
card.classList.remove("highlighted");`,

        paragraphs: [
          "Rather than setting individual style properties one by one, it's often cleaner to toggle an entire pre-written CSS class — like switching a pre-decorated frame on and off the whiteboard, instead of repainting each property by hand."
        ]
      },

      {
        heading: "Important Points to Remember",

        points: [
          "textContent changes plain text; innerHTML changes content including HTML tags.",
          "element.style.propertyName lets you set individual CSS styles directly via JS.",
          "classList.add()/remove() toggles entire CSS classes on or off an element.",
          "Prefer toggling classes over setting many individual style properties, for cleaner code."
        ]
      }

    ]
  },

  {
    title: "Event Listeners",
    subtitle: "Explained Like a Watchman Listening for the Doorbell",

    sections: [

      {
        heading: "Think About a Watchman at a Gate",

        paragraphs: [
          "A watchman doesn't constantly ring the doorbell themselves — they simply wait, listening, ready to react the moment someone else presses it. Nothing happens until that specific action (the bell ringing) actually occurs.",

          "Event listeners in JavaScript work exactly this way — code that waits patiently, only running when a specific action (like a click) actually happens, rather than running immediately."
        ]
      },

      {
        heading: "Adding a Click Event Listener",

        code: `let button = document.querySelector("#submitBtn");

button.addEventListener("click", function() {
  console.log("Button was clicked!");
});`,

        paragraphs: [
          "addEventListener() sets up the watchman — \"click\" is the specific sound it's listening for, and the function is what it does the moment that sound happens. Nothing runs until the visitor actually clicks."
        ]
      },

      {
        heading: "Common Events You'll Use Often",

        points: [
          "click — when an element is clicked",
          "input — when a form field's value changes, as the user types",
          "submit — when a <form> is submitted",
          "mouseover / mouseout — when the mouse enters or leaves an element (similar to CSS's :hover, but in JS)",
          "keydown — when any keyboard key is pressed"
        ]
      },

      {
        heading: "A Practical Example: Live Character Count",

        code: `let textarea = document.querySelector("#feedback");
let counter = document.querySelector("#charCount");

textarea.addEventListener("input", function() {
  counter.textContent = textarea.value.length + " characters";
});`,

        paragraphs: [
          "This watchman listens for every single keystroke (input), updating the character count in real time — exactly the kind of dynamic behavior that's impossible with HTML/CSS alone, and is JavaScript's whole purpose, as introduced in 'What is JavaScript?'."
        ]
      },

      {
        heading: "Arrow Functions Work Here Too",

        code: `button.addEventListener("click", () => {
  console.log("Clicked, using an arrow function!");
});`,

        paragraphs: [
          "Remember arrow functions from earlier? They're extremely commonly used as the 'reaction' inside addEventListener(), especially in React's onClick handlers, which you've already used throughout your CourseDetails.jsx."
        ]
      },

      {
        heading: "Important Points to Remember",

        points: [
          "addEventListener(eventType, function) waits for a specific event before running code.",
          "Common events include click, input, submit, and keydown.",
          "Code inside the listener only runs once that specific event actually occurs.",
          "Arrow functions are commonly used as the listener's reaction function."
        ]
      }

    ]
  },

  {
    title: "Event Object & Event Bubbling",
    subtitle: "Explained Like Ripples Spreading Out From a Dropped Stone",

    sections: [

      {
        heading: "Think About Dropping a Stone in Water",

        paragraphs: [
          "When you drop a stone into a pond, ripples don't stay confined to that one exact spot — they spread outward in expanding circles, eventually reaching the pond's edges too, even though the stone only touched one specific point.",

          "When you click a small button inside a larger card, inside an even larger page, the click 'ripples' outward through all of those containers too — this is called event bubbling."
        ]
      },

      {
        heading: "The Event Object — Details About What Just Happened",

        code: `button.addEventListener("click", function(event) {
  console.log(event.target);     // exactly which element was clicked
  console.log(event.type);       // "click"
});`,

        paragraphs: [
          "Every event listener automatically receives an event object, packed with details about exactly what happened — like a detailed incident report, telling you precisely which element triggered it, and what kind of event occurred."
        ]
      },

      {
        heading: "Event Bubbling — Ripples Spreading Outward",

        code: `<div id="card">
  <button id="likeBtn">Like</button>
</div>

<script>
  document.querySelector("#card").addEventListener("click", function() {
    console.log("Card was clicked (via bubbling)!");
  });
</script>`,

        paragraphs: [
          "Clicking the button (#likeBtn) doesn't just trigger listeners on the button itself — the click 'bubbles up' through every parent container too, including #card, even though you never directly clicked the card itself, only the button inside it."
        ]
      },

      {
        heading: "When Bubbling Becomes Useful: Event Delegation",

        code: `document.querySelector("#cardList").addEventListener("click", function(event) {
  if (event.target.classList.contains("like-btn")) {
    console.log("A like button was clicked!");
  }
});`,

        paragraphs: [
          "Instead of adding a separate listener to every single button (which could be dozens, especially in a dynamically generated list), you add just ONE listener to their shared parent container, and use the bubbled event's event.target to figure out exactly which button was actually clicked — much more efficient."
        ]
      },

      {
        heading: "Stopping the Ripple — stopPropagation()",

        code: `button.addEventListener("click", function(event) {
  event.stopPropagation();
  console.log("Only this button's listener runs, bubbling is stopped here");
});`,

        paragraphs: [
          "Sometimes you genuinely don't want the ripple spreading further outward — stopPropagation() stops the event from bubbling up to any parent listeners beyond this point, like a small barrier placed just past the stone's drop point."
        ]
      },

      {
        heading: "Important Points to Remember",

        points: [
          "The event object carries details about what happened, including event.target (the exact element involved).",
          "Event bubbling means an event triggers listeners on the element AND all its parent containers.",
          "Event delegation uses bubbling deliberately — one parent listener handling many child elements efficiently.",
          "event.stopPropagation() stops an event from bubbling further up to parent listeners."
        ]
      }

    ]
  },

  {
    title: "Form Handling with JS",
    subtitle: "Explained Like a Receptionist Checking a Form Before Forwarding It",

    sections: [

      {
        heading: "Think About Submitting a Form at an Office",

        paragraphs: [
          "When you hand over a filled application form, a receptionist doesn't just blindly forward it — they might quickly glance over it, stop you if something's missing, and only then send it along to the actual department. They control exactly what happens at the moment of submission.",

          "JavaScript lets you do exactly this with HTML forms — intercepting the submission, checking things, and deciding what actually happens, instead of letting the browser handle it entirely on its own."
        ]
      },

      {
        heading: "A Quick Recap: You've Already Done This!",

        paragraphs: [
          "Remember your Login.jsx file's handleSubmit function? e.preventDefault() right at the start, followed by your own logic — that's exactly this topic, which you've already been using throughout your MERN project."
        ],

        code: `function handleSubmit(e) {
  e.preventDefault(); // Stop the browser's default full-page reload
  console.log("Form submitted, handling it ourselves now");
}

document.querySelector("form").addEventListener("submit", handleSubmit);`
      },

      {
        heading: "Why preventDefault() Matters So Much",

        paragraphs: [
          "Without it, submitting an HTML <form> (from the HTML course's 'Form Tag') causes the entire page to reload, sending data via the form's action/method — exactly the old-fashioned way. preventDefault() stops this reload, like the receptionist physically holding onto your form instead of automatically dropping it into an outgoing mail slot, letting you decide what happens with it instead."
        ]
      },

      {
        heading: "Reading Values From Form Fields",

        code: `let emailInput = document.querySelector("#email");
let passwordInput = document.querySelector("#password");

console.log(emailInput.value);
console.log(passwordInput.value);`,

        paragraphs: [
          ".value reads exactly what the visitor typed into that field — like the receptionist reading the specific details written on the form, before deciding what to do next."
        ]
      },

      {
        heading: "A Simple Validation Check",

        code: `form.addEventListener("submit", function(e) {
  e.preventDefault();

  if (emailInput.value === "") {
    console.log("Email is required!");
    return;
  }

  console.log("Form looks good, proceeding...");
});`,

        paragraphs: [
          "This mirrors exactly what a receptionist would do — checking if a required field was left blank, and stopping right there with a message, rather than forwarding an incomplete form forward."
        ]
      },

      {
        heading: "Important Points to Remember",

        points: [
          "e.preventDefault() stops the browser's default full-page-reload form submission.",
          "Use .value to read whatever the visitor typed into a specific input field.",
          "You can validate fields yourself in JavaScript, beyond HTML's basic required attribute.",
          "This pattern is exactly what you've already used in your project's Login.jsx handleSubmit function."
        ]
      }

    ]
  },

  {
    title: "JSON Basics",
    subtitle: "Explained Like a Universal Shipping Label Every Country Understands",

    sections: [

      {
        heading: "Think About International Shipping",

        paragraphs: [
          "When a package travels between different countries, it needs a label format that customs officials everywhere can understand — not handwritten notes in one specific local language, but a standardized format (like weight in kg, dimensions in cm) that any country's system can read and process correctly.",

          "JSON (JavaScript Object Notation) is exactly this kind of universal format — a standard way of writing data that virtually every programming language and system can read, not just JavaScript."
        ]
      },

      {
        heading: "JSON Looks Very Familiar — Like a JS Object",

        code: `{
  "name": "Nishitha",
  "age": 22,
  "course": "MERN Stack"
}`,

        paragraphs: [
          "This looks almost identical to a JavaScript object (from 'Objects Intro') — the key difference is that JSON requires double quotes around every key, and JSON itself is just plain text, not actual running JavaScript code."
        ]
      },

      {
        heading: "Where You've Already Seen JSON",

        paragraphs: [
          "Remember your backend's login route, sending res.json({ message, token, user })? That's JSON — your Express server packages data into this universal format, and your React frontend (any frontend, in any language, really) can read and understand it perfectly."
        ]
      },

      {
        heading: "Converting Between JS Objects and JSON",

        code: `let student = { name: "Nishitha", course: "MERN" };

let jsonText = JSON.stringify(student);
console.log(jsonText); // '{"name":"Nishitha","course":"MERN"}'

let parsedBack = JSON.parse(jsonText);
console.log(parsedBack.name); // "Nishitha"`,

        points: [
          "JSON.stringify() — converts a JS object INTO a JSON text string (for sending/storing)",
          "JSON.parse() — converts a JSON text string BACK INTO a usable JS object"
        ]
      },

      {
        heading: "You've Already Used This Too!",

        paragraphs: [
          "Look back at your CourseDetails.jsx useEffect — JSON.parse(localStorage.getItem(\`${courseName}CompletedTopics\`)) and JSON.stringify(updatedTopics) when saving. localStorage can only store plain text, so JSON.stringify() packages your array into text for storage, and JSON.parse() unpacks it back into a real array when reading it."
        ]
      },

      {
        heading: "Important Points to Remember",

        points: [
          "JSON is a universal, text-based data format, understood across virtually all programming languages.",
          "It looks like a JS object, but requires double quotes around all keys, and is plain text.",
          "JSON.stringify() converts a JS value into JSON text; JSON.parse() converts it back.",
          "You're already using this pattern throughout your project — for localStorage and API responses."
        ]
      }

    ]
  },

  {
    title: "Callback Functions",
    subtitle: "Explained Like Telling a Delivery Driver 'Call Me Once You Arrive'",

    sections: [

      {
        heading: "Think About Ordering Food Delivery",

        paragraphs: [
          "When you order food, you don't stand at your door staring blankly until it arrives — you go about your day, and the delivery person calls you the moment they actually reach your location. You gave them your phone number in advance, specifically to be used once a certain event (arrival) happens.",

          "A callback function in JavaScript is exactly this — a function you hand over in advance, to be called later, once a specific task finishes."
        ]
      },

      {
        heading: "You've Actually Already Used Callbacks!",

        paragraphs: [
          "Remember addEventListener(\"click\", function() {...})? That function you passed in is a callback — JavaScript holds onto it, and only calls it later, the moment the click actually happens, exactly like the delivery driver holding onto your number, only calling once they arrive."
        ]
      },

      {
        heading: "Writing Your Own Function That Takes a Callback",

        code: `function processOrder(orderName, callback) {
  console.log("Processing order: " + orderName);
  callback(); // calling the function we were handed, once we're done
}

processOrder("Pizza", function() {
  console.log("Order is ready, calling the customer now!");
});`,

        paragraphs: [
          "processOrder() does its own work first, and only once that's done, it calls the callback function it was given — exactly like the restaurant finishing your order, then finally making that promised call."
        ]
      },

      {
        heading: "Why Callbacks Matter for Slow Tasks",

        paragraphs: [
          "Remember 'How JS Works in the Browser' — JavaScript runs one instruction at a time. For genuinely slow tasks (like fetching data from a server, which might take a few seconds), callbacks let JavaScript move on and do other things in the meantime, only running your callback once that slow task actually finishes — like you continuing your day instead of frozen at the door, only reacting once that call actually comes in."
        ]
      },

      {
        heading: "A Small Downside: 'Callback Hell'",

        paragraphs: [
          "When you need several slow tasks to happen one after another, nesting callbacks inside callbacks inside callbacks gets messy and hard to read fast — like a chain of delivery people each calling the next one, getting confusing to track. This exact problem is what 'Promises' (the next topic) was specifically designed to solve."
        ]
      },

      {
        heading: "Important Points to Remember",

        points: [
          "A callback is a function passed into another function, to be called later, once something finishes.",
          "addEventListener's reaction function is a callback you've already been using.",
          "Callbacks are especially useful for handling slow or delayed tasks without freezing everything else.",
          "Deeply nested callbacks become hard to read — a problem Promises help solve, covered next."
        ]
      }

    ]
  },

  {
    title: "Promises",
    subtitle: "Explained Like a Token/Receipt at a Service Counter",

    sections: [

      {
        heading: "Think About Getting a Token at a Service Counter",

        paragraphs: [
          "At a busy government office or bank, instead of standing and waiting at the counter, you take a numbered token and sit down. That token represents a promise: 'your turn will come, and you'll either be served successfully, or told something went wrong (missing document, etc.).' Right now, in this exact moment, you don't yet know which outcome will happen — you just know it's pending.",

          "A Promise in JavaScript is exactly this token — an object representing a task that hasn't finished yet, but will eventually either succeed or fail."
        ]
      },

      {
        heading: "The Three States of a Promise",

        points: [
          "Pending — the task hasn't finished yet, like waiting with your token, outcome still unknown",
          "Fulfilled (Resolved) — the task succeeded, like finally being called and served successfully",
          "Rejected — the task failed, like being told there's a problem with your documents"
        ]
      },

      {
        heading: "Using a Promise with .then() and .catch()",

        code: `let orderPromise = new Promise((resolve, reject) => {
  let orderReady = true; // imagine this depends on something real

  if (orderReady) {
    resolve("Your order is ready!");
  } else {
    reject("Sorry, order failed.");
  }
});

orderPromise
  .then(result => console.log(result))
  .catch(error => console.log(error));`,

        paragraphs: [
          ".then() runs if the promise is fulfilled — like finally being called to the counter successfully. .catch() runs if it's rejected — like being told about a problem instead, so you can react accordingly, in either case."
        ]
      },

      {
        heading: "Why Promises Are Better Than Plain Callbacks",

        paragraphs: [
          "Remember 'callback hell' from the previous topic? Promises can be chained cleanly with multiple .then() calls, one after another, far more readable than deeply nested callback functions stacked inside each other — like getting one token that smoothly guides you through several connected counters, instead of separately waiting and calling ahead ahead at each one manually."
        ]
      },

      {
        heading: "A Real Example You'll See Constantly: axios",

        paragraphs: [
          "Remember your Login.jsx using axios.post(...).then(response => {...})? Look closely — axios.post() actually returns a Promise! Every API call you've made throughout your MERN project has secretly been using this exact concept already."
        ]
      },

      {
        heading: "Important Points to Remember",

        points: [
          "A Promise represents a task that will eventually succeed (resolve) or fail (reject).",
          "Promises start in a 'pending' state, until they become either fulfilled or rejected.",
          ".then() handles the success case; .catch() handles the failure case.",
          "axios calls (which you've already used in your project) return Promises behind the scenes."
        ]
      }

    ]
  },

  {
    title: "Async/Await",
    subtitle: "Explained Like Politely Waiting for Your Token Number to Be Called",

    sections: [

      {
        heading: "Think About Waiting at the Same Service Counter",

        paragraphs: [
          "Instead of constantly checking back ('has my token been called yet? has it now? how about now?'), you could just calmly say 'I'll wait right here until my number is called', then proceed with the next thing only once it actually happens — a much more natural, linear way of describing the same waiting process.",

          "async/await is exactly this — a cleaner way of writing the exact same Promise-based code from the last topic, making it read like simple, top-to-bottom steps instead of chained .then() calls."
        ]
      },

      {
        heading: "Rewriting a Promise with async/await",

        code: `// The .then() way (from 'Promises'):
function getOrder() {
  orderPromise
    .then(result => console.log(result))
    .catch(error => console.log(error));
}

// The async/await way — same result, reads more naturally:
async function getOrder() {
  try {
    let result = await orderPromise;
    console.log(result);
  } catch (error) {
    console.log(error);
  }
}`,

        paragraphs: [
          "await pauses this specific function right at that line, calmly waiting for the promise to settle, before moving to the next line — like waiting patiently at your seat, only continuing once your token is actually called, rather than constantly checking back."
        ]
      },

      {
        heading: "The Two Required Keywords",

        points: [
          "async — must be added before a function that will use await inside it",
          "await — pauses execution at that line until the Promise settles, then continues with its result",
          "try/catch (covered properly in 'Error Handling') is the standard way to catch a rejected/failed await"
        ]
      },

      {
        heading: "Why This Reads So Much More Naturally",

        paragraphs: [
          "With several dependent steps (get user, then get their orders, then get order details), chained .then() calls nest awkwardly, while async/await lets you write each step as a simple, sequential line — almost exactly like writing regular, non-asynchronous code, even though it's still secretly handling all that waiting behind the scenes."
        ]
      },

      {
        heading: "A Quick Preview of What's Coming",

        paragraphs: [
          "In the next topic, 'Fetch API', you'll use exactly this async/await pattern to genuinely fetch real data from a server — this is one of the single most common, practical uses of everything you've learned about Promises so far."
        ]
      },

      {
        heading: "Important Points to Remember",

        points: [
          "async/await is a cleaner alternative syntax for working with Promises.",
          "async must be added to any function that uses await inside it.",
          "await pauses that function at that line until the Promise resolves or rejects.",
          "try/catch is the standard way to handle errors with async/await, instead of .catch()."
        ]
      }

    ]
  },

  {
    title: "Fetch API",
    subtitle: "Explained Like Sending a Messenger to Another Office for Files",

    sections: [

      {
        heading: "Think About Requesting Files From Another Office",

        paragraphs: [
          "If you need specific records from another department, you might send a messenger over with a written request. The messenger travels there, waits, and brings back either the requested files (success) or news that something went wrong (the office was closed, files didn't exist).",

          "The fetch() function in JavaScript is exactly this messenger — sending a request to a server somewhere else, and bringing back whatever response comes back."
        ]
      },

      {
        heading: "A Basic Fetch Request",

        code: `fetch("https://api.example.com/users")
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.log("Something went wrong:", error));`,

        paragraphs: [
          "fetch() sends the messenger off, returning a Promise (from 'Promises'). response.json() unpacks the raw response into usable JS data (remember JSON.parse from 'JSON Basics'? response.json() does something similar, automatically), and the final .then() lets you actually use that data."
        ]
      },

      {
        heading: "The Same Request, Using async/await",

        code: `async function getUsers() {
  try {
    let response = await fetch("https://api.example.com/users");
    let data = await response.json();
    console.log(data);
  } catch (error) {
    console.log("Something went wrong:", error);
  }
}

getUsers();`,

        paragraphs: [
          "Exactly the same task as above, but reading top-to-bottom like simple sequential steps — send the messenger, wait for them to return, unpack what they brought, exactly matching the calm 'wait at your seat' pattern from 'Async/Await'."
        ]
      },

      {
        heading: "Sending Data — A POST Request",

        code: `async function loginUser(email, password) {
  let response = await fetch("http://localhost:5000/login", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, password })
  });

  let data = await response.json();
  console.log(data);
}`,

        paragraphs: [
          "This is genuinely the exact same task your Login.jsx already performs using axios! axios is actually a popular library built specifically to make requests like this more convenient than writing raw fetch() — but underneath, both achieve the same goal: sending data to your backend's /login route and waiting for its response."
        ]
      },

      {
        heading: "fetch() vs axios — Which Should You Use?",

        paragraphs: [
          "fetch() is built directly into every browser, no installation needed. axios (which your MERN project already uses) adds convenient extras — automatic JSON parsing, easier error handling, and a slightly simpler syntax for sending data. Both fundamentally do the same job."
        ]
      },

      {
        heading: "Important Points to Remember",

        points: [
          "fetch() sends a request to a server and returns a Promise with the response.",
          "response.json() unpacks the raw response body into usable JavaScript data.",
          "async/await makes fetch() calls read more naturally, top to bottom.",
          "Your project's axios calls achieve the exact same goal as fetch(), with some added convenience."
        ]
      }

    ]
  },

  {
    title: "Error Handling",
    subtitle: "Explained Like a Safety Net Under a Tightrope Walker",

    sections: [

      {
        heading: "Think About a Tightrope Walker",

        paragraphs: [
          "A skilled tightrope walker still performs with a safety net stretched underneath them — not because they expect to fall, but because if something unexpected does happen, the net catches them safely, instead of letting the entire performance end in disaster.",

          "try/catch in JavaScript is exactly this safety net — code that 'catches' an error if something unexpectedly goes wrong, instead of letting your entire program crash."
        ]
      },

      {
        heading: "Without a Safety Net — A Crash",

        code: `let data = JSON.parse("this is not valid JSON");
console.log("This line never runs"); // Crashed before reaching here`,

        paragraphs: [
          "If this line throws an error, everything after it simply stops running — like the tightrope walker falling with no net at all, the whole performance abruptly ending."
        ]
      },

      {
        heading: "Adding the Safety Net — try/catch",

        code: `try {
  let data = JSON.parse("this is not valid JSON");
  console.log(data);
} catch (error) {
  console.log("Something went wrong:", error.message);
}

console.log("This line still runs!");`,

        paragraphs: [
          "Code inside try { } is attempted normally. If anything inside it throws an error, execution immediately jumps to catch (error) { } instead of crashing everything — and crucially, code AFTER the try/catch block still continues running normally, like the performance safely continuing even after that one fall."
        ]
      },

      {
        heading: "You've Already Used This Pattern!",

        paragraphs: [
          "Remember your server.js's signup/login routes, and your CourseDetails.jsx's handleComplete function? Both already use try { ... } catch (error) { ... } around their axios calls — exactly this safety net, ensuring one failed network request doesn't crash your entire app."
        ]
      },

      {
        heading: "Using try/catch with async/await",

        code: `async function getData() {
  try {
    let response = await fetch("https://api.example.com/data");
    let data = await response.json();
    console.log(data);
  } catch (error) {
    console.log("Fetch failed:", error.message);
  }
}`,

        paragraphs: [
          "This is the standard, expected way to handle potential errors from await — exactly matching the pattern used in your 'Fetch API' examples from the previous topic."
        ]
      },

      {
        heading: "Important Points to Remember",

        points: [
          "try/catch prevents an error from crashing your entire program.",
          "Code inside try runs normally; if it throws an error, catch handles it instead.",
          "Code after the try/catch block continues running normally, regardless of whether an error occurred.",
          "This is the standard way to safely handle potential errors from await/Promises."
        ]
      }

    ]
  },

  {
    title: "Local Storage with JS",
    subtitle: "Explained Like a Note Left in Your Own Drawer",

    sections: [

      {
        heading: "Think About Leaving Yourself a Note",

        paragraphs: [
          "If you write a note and leave it inside your own desk drawer, it stays there even after you leave the room, turn off the lights, and come back the next day — unlike a thought you simply kept in your head, which vanishes the moment you stop thinking about it or fall asleep.",

          "localStorage in JavaScript is exactly this drawer — a way to save data in the visitor's browser that persists even after they close the tab or restart their computer, unlike regular variables which vanish the moment the page reloads."
        ]
      },

      {
        heading: "You've Already Been Using This Extensively!",

        paragraphs: [
          "Throughout your MERN project, you've already used localStorage constantly — storing the JWT token after login, saving completedTopics and currentTopic for each course. This topic is simply naming and explaining what you've already been doing hands-on."
        ]
      },

      {
        heading: "Saving Data — setItem()",

        code: `localStorage.setItem("username", "Nishitha");`,

        paragraphs: [
          "Like writing a labeled note ('username') and placing it in the drawer, with the actual value ('Nishitha') written on it."
        ]
      },

      {
        heading: "Reading Data — getItem()",

        code: `let savedName = localStorage.getItem("username");
console.log(savedName); // "Nishitha"`,

        paragraphs: [
          "Like opening the drawer and reading whatever note is labeled 'username' — if it's not there at all, getItem() simply returns null, rather than crashing."
        ]
      },

      {
        heading: "Removing Data — removeItem() and clear()",

        code: `localStorage.removeItem("username"); // removes just this one note

localStorage.clear(); // empties the ENTIRE drawer, removing everything`,

        paragraphs: [
          "Remember your Sidebar.jsx logout button using localStorage.removeItem(\"token\") and localStorage.removeItem(\"user\")? That's exactly this — clearing out specific notes from the drawer when a visitor logs out."
        ]
      },

      {
        heading: "An Important Limitation: Text Only",

        paragraphs: [
          "localStorage can only store plain text — which is exactly why your CourseDetails.jsx uses JSON.stringify() before saving an array (from 'JSON Basics'), and JSON.parse() after reading it back. Without this conversion, trying to save an array or object directly would just store an unhelpful, broken text representation."
        ]
      },

      {
        heading: "Important Points to Remember",

        points: [
          "localStorage persists data in the browser, even after closing the tab or restarting the device.",
          "setItem(key, value) saves data; getItem(key) reads it back; removeItem(key) deletes one entry.",
          "localStorage can only store plain text — use JSON.stringify()/JSON.parse() for arrays/objects.",
          "You've already used this concept extensively throughout your MERN project."
        ]
      }

    ]
  },

  {
    title: "Classes & OOP Basics",
    subtitle: "Explained Like a Car Factory's Mold",

    sections: [

      {
        heading: "Think About a Car Factory",

        paragraphs: [
          "A car factory doesn't hand-build every single car from scratch — it designs one detailed mold/blueprint once, then uses it to produce many actual cars, each starting with the same base design but possibly with different colors, number plates, or owners.",

          "A class in JavaScript is exactly this mold — a blueprint for creating multiple similar 'objects' (like multiple students, multiple cars), each following the same structure but holding their own specific details."
        ]
      },

      {
        heading: "Defining a Class",

        code: `class Student {
  constructor(name, course) {
    this.name = name;
    this.course = course;
  }

  introduce() {
    console.log(\`Hi, I'm \${this.name}, learning \${this.course}\`);
  }
}`,

        paragraphs: [
          "constructor() is like the factory's assembly instructions — it runs automatically every time a new 'car' (object) is produced, setting up its specific details. this (remember 'Object Methods & this'?) refers to the specific object currently being built."
        ]
      },

      {
        heading: "Creating Objects from a Class — 'Instances'",

        code: `let student1 = new Student("Nishitha", "MERN Stack");
let student2 = new Student("Ravi", "Java");

student1.introduce(); // "Hi, I'm Nishitha, learning MERN Stack"
student2.introduce(); // "Hi, I'm Ravi, learning Java"`,

        paragraphs: [
          "new Student(...) is like pressing the factory's 'produce one' button — using the same mold (class) to create a distinct, individual object (called an 'instance'), each with its own specific name and course, despite coming from the exact same blueprint."
        ]
      },

      {
        heading: "How This Connects to Objects You Already Know",

        paragraphs: [
          "Remember plain objects from 'Objects Intro' (let student = { name: ..., course: ... })? Classes are essentially a more organized, reusable way to create many similar objects, instead of manually writing out the same { } structure repeatedly for every single student."
        ]
      },

      {
        heading: "Important Points to Remember",

        points: [
          "A class is a blueprint/mold for creating multiple similar objects.",
          "constructor() runs automatically when a new object is created, setting up its specific details.",
          "new ClassName(...) creates an 'instance' — one individual object built from that blueprint.",
          "Classes organize and reuse the object-creation pattern, rather than manually rewriting it each time."
        ]
      }

    ]
  },

  {
    title: "Closures",
    subtitle: "Explained Like a Backpack a Function Carries With It",

    sections: [

      {
        heading: "Think About Packing a Backpack Before Leaving Home",

        paragraphs: [
          "Before heading out, you might pack a backpack with specific items you'll need later — even after you've left the house entirely, those items are still accessible to you, zipped safely inside, traveling wherever you go.",

          "A closure in JavaScript is exactly this — a function that 'remembers' and carries along variables from where it was originally created, even after that outer code has already finished running."
        ]
      },

      {
        heading: "A Simple Closure Example",

        code: `function createGreeter(name) {
  let greeting = "Hello, " + name + "!";

  return function() {
    console.log(greeting);
  };
}

let greetNishitha = createGreeter("Nishitha");
greetNishitha(); // "Hello, Nishitha!"`,

        paragraphs: [
          "createGreeter(\"Nishitha\") runs and finishes completely — yet the returned inner function still remembers greeting, like a backpack packed with that specific item, carried along even after you've left the 'house' (the outer function) that originally packed it."
        ]
      },

      {
        heading: "A Practical Use: A Private Counter",

        code: `function createCounter() {
  let count = 0;

  return function() {
    count++;
    console.log(count);
  };
}

let counter = createCounter();
counter(); // 1
counter(); // 2
counter(); // 3`,

        paragraphs: [
          "Each call to counter() remembers and updates the SAME count variable from its backpack, persisting between calls — and notice count isn't accessible from anywhere else directly, kept safely tucked away inside that one specific backpack, private to this counter function alone."
        ]
      },

      {
        heading: "Why This Matters in Real Code",

        paragraphs: [
          "Closures are everywhere in real JavaScript and React, even if you don't always notice them by name — event listener callbacks (from 'Event Listeners') remembering variables from when they were set up, or React's useState remembering values between re-renders, are both built on this exact closure concept."
        ]
      },

      {
        heading: "Important Points to Remember",

        points: [
          "A closure is a function that remembers variables from where it was created, even after that outer code has finished.",
          "This 'remembered' data persists between multiple calls to the same closure function.",
          "Closures let you create private data, not directly accessible from outside that function.",
          "Many common JavaScript/React patterns (event callbacks, state) rely on closures behind the scenes."
        ]
      }

    ]
  },

  {
    title: "Higher Order Functions",
    subtitle: "Explained Like a Manager Assigning Tasks to Employees",

    sections: [

      {
        heading: "Think About a Manager Delegating Work",

        paragraphs: [
          "A manager doesn't personally do every task themselves — they hand specific tasks over to different employees, and sometimes even hand back a finished process or report from one employee to another. The manager's whole job revolves around working with other workers, not just raw materials directly.",

          "A higher order function in JavaScript is exactly this manager — a function that either takes another function as an input, or returns a function as its output (or both)."
        ]
      },

      {
        heading: "You've Already Been Using These Constantly!",

        paragraphs: [
          "Remember map(), filter(), and forEach() from earlier topics? Every single one of them is a higher order function — each one TAKES a function (your callback) as an argument, exactly like a manager being handed a specific employee (a function) to delegate the actual work to."
        ],

        code: `let doubled = [1, 2, 3].map(num => num * 2); // map takes a function!`
      },

      {
        heading: "addEventListener Is Also One",

        code: `button.addEventListener("click", function() {
  console.log("Clicked!");
});`,

        paragraphs: [
          "addEventListener() also takes a function as its second argument (the callback, from 'Callback Functions') — another everyday example of a higher order function you've already used many times throughout this course."
        ]
      },

      {
        heading: "Writing Your Own Higher Order Function",

        code: `function repeatAction(times, action) {
  for (let i = 0; i < times; i++) {
    action(i);
  }
}

repeatAction(3, function(i) {
  console.log("Action number " + i);
});`,

        paragraphs: [
          "repeatAction takes another function (action) and decides exactly when and how many times to delegate that work to it — like a manager deciding to have a specific task repeated three times by an employee, rather than doing it themselves."
        ]
      },

      {
        heading: "Functions That Return Functions",

        paragraphs: [
          "Remember createGreeter() and createCounter() from 'Closures'? Both of those are also higher order functions, since they each return a brand new function as their output — the other half of the 'higher order' definition, beyond just accepting functions as input."
        ]
      },

      {
        heading: "Important Points to Remember",

        points: [
          "A higher order function either takes a function as an argument, returns one, or both.",
          "map(), filter(), forEach(), and addEventListener() are all everyday higher order functions you've already used.",
          "They let you delegate specific 'how to do it' logic to a passed-in function.",
          "This is a core, recurring pattern throughout JavaScript, not a rarely-used advanced trick."
        ]
      }

    ]
  },

  {
    title: "ES6+ Features Recap",
    subtitle: "Explained Like Software Updates Adding New Phone Features",

    sections: [

      {
        heading: "Think About a Phone Getting a Software Update",

        paragraphs: [
          "Your phone didn't always have every feature it has now — over time, software updates added new capabilities (better camera modes, new gestures), making everyday tasks easier and more convenient, without changing the phone's fundamental purpose.",

          "ES6 (released in 2015) and later JavaScript versions added exactly this kind of 'software update' — convenient new features, on top of JavaScript's original foundation. This topic is a quick recap of the modern features you've already been using throughout this entire course."
        ]
      },

      {
        heading: "Features You've Already Learned and Used",

        points: [
          "let/const — from 'Variables', replacing the older, less predictable var",
          "Arrow functions (=>) — from 'Arrow Functions', a shorter function syntax",
          "Template literals (`...${}`) — from 'Template Literals', for cleaner string building",
          "Destructuring ({ } and [ ]) — from 'Destructuring', for cleanly extracting values",
          "Spread (...) and Rest (...) operators — from 'Spread & Rest Operators'",
          "Classes — from 'Classes & OOP Basics', a cleaner syntax for creating similar objects",
          "Promises and async/await — from 'Promises' and 'Async/Await', for cleaner asynchronous code",
          "Array methods like map/filter/reduce/find/includes — from the Array Methods topics"
        ]
      },

      {
        heading: "Quick Before/After: Old vs Modern Style",

        code: `// Older style
var name = "Nishitha";
function greet(n) {
  return "Hello, " + n + "!";
}

// Modern (ES6+) style
const name = "Nishitha";
const greet = (n) => \`Hello, \${n}!\`;`,

        paragraphs: [
          "Both versions do the exact same thing — the modern version is simply cleaner and more predictable, exactly like a phone's updated camera feature taking the same kind of photo, just with a better, more convenient process."
        ]
      },

      {
        heading: "Why This Recap Matters",

        paragraphs: [
          "Almost every single piece of JavaScript code in your MERN project — your Login.jsx, CourseDetails.jsx, server.js — already uses these exact ES6+ features constantly. You haven't just learned JavaScript theory across this course; you've been recognizing patterns you were already writing in your real project the whole time."
        ]
      },

      {
        heading: "Important Points to Remember",

        points: [
          "ES6 (2015) and later versions added many convenient features on top of older JavaScript.",
          "let/const, arrow functions, template literals, destructuring, and classes are all ES6+ features.",
          "Promises, async/await, and modern array methods are also part of this modern toolkit.",
          "Your existing MERN project code already uses these features extensively, even before this course explained them by name."
        ]
      }

    ]
  }

];