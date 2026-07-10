export const reactTopics = [
  "What is React?",
  "How React Works - Virtual DOM",
  "Setting Up a React Project",
  "JSX Basics",
  "Components Intro",
  "Functional Components",
  "Props Basics",
  "Props - Passing Different Data Types",
  "useState Hook",
  "Handling Events in React",
  "Conditional Rendering",
  "Lists & Keys",
  "Forms in React",
  "useEffect Hook",
  "useEffect - Dependency Array",
  "Component Lifecycle",
  "Lifting State Up",
  "Component Composition",
  "React Router - Setup",
  "React Router - Dynamic Routes",
  "React Router - useNavigate & useParams",
  "useRef Hook",
  "useContext Hook",
  "Custom Hooks",
  "React Developer Tools",
  "Fetching Data with useEffect",
  "Loading & Error States",
  "Controlled vs Uncontrolled Components",
  "Component Reusability Patterns",
  "Styling in React",
  "React.memo",
  "useCallback Hook",
  "useMemo Hook",
  "Code Splitting & Lazy Loading",
  "React with LocalStorage",
  "React with Axios",
  "Protected Routes",
  "Deploying a React App",
  "React Best Practices",
  "React Project Architecture"
];

export const reactLessons = [

  {
    title: "What is React?",
    subtitle: "Explained Like Building with LEGO Blocks Instead of Carving From One Stone",

    sections: [

      {
        heading: "Think About Two Ways to Build Something",

        paragraphs: [
          "Imagine building a toy house in two ways: carving it entirely from one single block of stone (one massive, rigid structure — change one thing, the whole thing shifts), or building it from separate LEGO blocks, each piece independent, snapping together, and replaceable individually without touching the rest.",

          "React follows this exact LEGO philosophy — building a webpage from small, independent, reusable 'components' (blocks), each managing its own little piece of the screen, rather than one massive, tangled webpage trying to do everything at once."
        ]
      },

      {
        heading: "What React Actually Is",

        paragraphs: [
          "React is a JavaScript library created by Facebook (now Meta) in 2013, specifically for building user interfaces — the visible, interactive parts of a webpage. It's not a full framework that handles everything (like routing, HTTP, databases), just the UI layer, which is why it's often combined with other tools (like React Router for navigation, and axios for API calls — both already used in your MERN project!)."
        ]
      },

      {
        heading: "Why React Became So Popular",

        points: [
          "Reusable components — build one button, use it everywhere, change it once and every instance updates",
          "Automatic UI updates — when data changes, React figures out exactly what needs to update on screen, without you manually finding and changing DOM elements (remember the DOM manipulation from 'Changing Content & Styles via DOM'?)",
          "Huge ecosystem — massive community, thousands of packages, used by Facebook, Instagram, Netflix, Airbnb, and many others",
          "Once you learn it, the same skills apply to React Native for mobile apps too"
        ]
      },

      {
        heading: "What You've Already Been Building",

        paragraphs: [
          "Here's something important to realize — you've already been writing React throughout this entire course! Your Login.jsx, Home.jsx, CourseDetails.jsx, MyCourses.jsx are all React components. This course will now explain WHY things work the way they do, naming and understanding the patterns you've already been using hands-on throughout your MERN learning platform."
        ]
      },

      {
        heading: "Important Points to Remember",

        points: [
          "React is a JavaScript library for building user interfaces, not a complete framework.",
          "It follows a component-based approach — building UIs from small, reusable, independent pieces.",
          "React automatically updates the UI when data changes, without manual DOM manipulation.",
          "You've already been writing React — this course explains the why behind what you've been doing."
        ]
      }

    ]
  },

  {
    title: "How React Works - Virtual DOM",
    subtitle: "Explained Like Sketching a Draft Before Repainting the Wall",

    sections: [

      {
        heading: "Think About Repainting a Room",

        paragraphs: [
          "Imagine a painter who repaints an entire wall every single time you change one tiny word on a notice pinned to it — inefficient, wasteful, and slow. A smarter painter would first sketch what the updated wall should look like on paper, compare that sketch with the current wall, find exactly which parts actually differ, and only repaint those specific spots.",

          "This is exactly how React's Virtual DOM works — a clever system that minimizes expensive, slow real-DOM updates, repainting only what genuinely changed."
        ]
      },

      {
        heading: "What the 'Real DOM' Problem Was",

        paragraphs: [
          "Remember 'DOM Intro' from JavaScript — the browser's live model of your page? Directly updating real DOM elements (like we did with document.querySelector and innerHTML) is relatively slow, since the browser has to recalculate layouts and repaint the screen each time. When updates happen frequently (like typing in a search box updating results live), this gets noticeably sluggish."
        ]
      },

      {
        heading: "React's Solution — the Virtual DOM",

        paragraphs: [
          "React keeps a lightweight copy of the entire DOM structure in memory — this is the Virtual DOM, like that paper sketch. When something changes (say, a state update), React first updates this virtual sketch, then compares it against the previous sketch ('diffing'), finds exactly which parts changed, and only updates those specific real DOM elements ('reconciliation')."
        ]
      },

      {
        heading: "A Simple Visual",

        points: [
          "Step 1 — Data changes (e.g. user clicks a button)",
          "Step 2 — React updates the Virtual DOM (the paper sketch)",
          "Step 3 — React compares new Virtual DOM vs previous Virtual DOM (diffing)",
          "Step 4 — React updates ONLY the changed parts in the real browser DOM (reconciliation)",
          "Result — Minimum repainting, maximum performance"
        ]
      },

      {
        heading: "Why This Matters for Your MERN Project",

        paragraphs: [
          "In your CourseDetails.jsx, when you click 'Mark as Complete' and completedTopics state updates, React doesn't rebuild the entire sidebar — it finds exactly which topic div changed (just that one's class from '' to 'completed') and updates only that. This is the Virtual DOM working silently for you, every single time."
        ]
      },

      {
        heading: "Important Points to Remember",

        points: [
          "The Virtual DOM is a lightweight in-memory copy of the real DOM, maintained by React.",
          "When state changes, React updates the Virtual DOM, compares it with the previous version (diffing), and only updates changed parts in the real DOM.",
          "This makes React UIs fast, since expensive real DOM operations are minimized.",
          "This all happens automatically — you never manually manage the Virtual DOM yourself."
        ]
      }

    ]
  },

  {
    title: "Setting Up a React Project",
    subtitle: "Explained Like Preparing a Kitchen Before Cooking",

    sections: [

      {
        heading: "Think About a Professional Kitchen Setup",

        paragraphs: [
          "Before a chef can cook anything, the kitchen needs to be set up — the right equipment installed, ingredients stocked, and everything arranged properly. Trying to cook without this foundation wastes time and causes confusion.",

          "Setting up a React project does the same — getting the right tools installed and project structure created, so you can actually start writing components and building things."
        ]
      },

      {
        heading: "The Modern Way — Vite (What You're Already Using!)",

        code: `npm create vite@latest my-app -- --template react
cd my-app
npm install
npm run dev`,

        paragraphs: [
          "You've already done this — your MERN learning platform's frontend was created with Vite. npm create vite sets up the complete project structure, npm install downloads all dependencies, and npm run dev starts the local development server (that localhost:5173 URL you've been using throughout this entire course)."
        ]
      },

      {
        heading: "What Vite Gives You — The Project Structure",

        code: `my-app/
├── src/
│   ├── App.jsx          // Root component
│   ├── main.jsx         // Entry point
│   └── assets/          // Images, etc.
├── public/              // Static files
├── index.html           // The one HTML file React uses
├── package.json         // Dependencies list
└── vite.config.js       // Vite configuration`,

        paragraphs: [
          "Notice index.html — there's only ONE HTML file in a React app (unlike traditional multi-page websites). React renders everything dynamically inside one single <div id='root'> in that file. Your entire learning platform — login, home, courses, course details — all renders inside that one root div."
        ]
      },

      {
        heading: "The Old Way — Create React App (CRA)",

        paragraphs: [
          "You might see npx create-react-app my-app in older tutorials — CRA was the previous standard way to set up React projects, but it's now considered slow and outdated compared to Vite. Vite is significantly faster for both project creation and development server speed."
        ]
      },

      {
        heading: "Important Points to Remember",

        points: [
          "npm create vite@latest with the React template is the modern way to start a React project.",
          "npm run dev starts the development server, usually at localhost:5173.",
          "A React app has only ONE HTML file — React renders everything dynamically inside one root div.",
          "You've already been working inside a Vite+React project throughout this entire course."
        ]
      }

    ]
  },

  {
    title: "JSX Basics",
    subtitle: "Explained Like Writing Stage Directions Inside a Script",

    sections: [

      {
        heading: "Think About a Film Script",

        paragraphs: [
          "A film script has dialogue written in plain text, but also stage directions mixed right in — '(Character walks to window)', '(Lights dim)' — describing what should appear visually, embedded directly alongside the spoken words in the same document.",

          "JSX (JavaScript XML) is exactly this — a special syntax that lets you write what looks like HTML tags directly inside JavaScript code, describing what the UI should look like, embedded right alongside the logic that controls it."
        ]
      },

      {
        heading: "JSX Looks Like HTML — But It's Not",

        code: `function Welcome() {
  return (
    <h1>Hello, World!</h1>
  );
}`,

        paragraphs: [
          "That <h1> looks like HTML, but it's actually JSX — it gets transformed by Vite/Babel into plain JavaScript before the browser ever sees it. The browser never actually receives JSX; it receives the regular JavaScript that JSX compiles down to."
        ]
      },

      {
        heading: "The Key Rules JSX Has That HTML Doesn't",

        code: `// 1. Return only ONE root element (or use a Fragment <>)
return (
  <>
    <h1>Title</h1>
    <p>Paragraph</p>
  </>
);

// 2. className instead of class (class is a reserved JS word)
<div className="card">

// 3. Self-closing tags must close explicitly
<img src="photo.jpg" alt="photo" />
<input type="text" />`,

        paragraphs: [
          "These three rules catch most beginners off guard, since JSX looks so similar to HTML — especially className vs class, which you've already been using throughout your MERN project's component files."
        ]
      },

      {
        heading: "Embedding JavaScript Inside JSX — Curly Braces",

        code: `let userName = "Nishitha";
let hour = 14;

return (
  <div>
    <h1>Hello, {userName}!</h1>
    <p>Hour is: {hour}</p>
    <p>Is afternoon: {hour >= 12 ? "Yes" : "No"}</p>
  </div>
);`,

        paragraphs: [
          "Curly braces { } inside JSX are like the script's stage directions — they let you step out of the 'HTML-like' writing and embed any JavaScript expression directly, like your Home.jsx already does with {user?.name} and {greeting}."
        ]
      },

      {
        heading: "Important Points to Remember",

        points: [
          "JSX is JavaScript with HTML-like syntax — it gets compiled to plain JavaScript before running.",
          "Use className instead of class, and explicitly close all tags (including self-closing ones).",
          "Every component must return a single root element — use <> </> (Fragment) to wrap multiple elements without adding a real DOM node.",
          "Curly braces { } embed any JavaScript expression directly inside JSX."
        ]
      }

    ]
  },

  {
    title: "Components Intro",
    subtitle: "Explained Like Separate, Reusable LEGO Blocks",

    sections: [

      {
        heading: "Think About LEGO Building Blocks",

        paragraphs: [
          "A LEGO set doesn't give you one huge pre-built structure — it gives you many smaller, specialized blocks (flat plates, window frames, roof pieces) that you combine in various ways to build different things. Each block has one specific purpose, and any block can be reused in multiple places within the same build.",

          "React components are exactly these blocks — small, focused, reusable UI pieces that combine to build complete pages, each managing its own specific part of the screen."
        ]
      },

      {
        heading: "What a Component Actually Is",

        paragraphs: [
          "A component is simply a JavaScript function that returns JSX — it describes what a specific part of the UI looks like. That's genuinely the entire definition. You've already written many of these: Login, Home, CourseDetails, MyCourses, Sidebar — each one is a React component."
        ]
      },

      {
        heading: "A Simple Component",

        code: `function CourseCard() {
  return (
    <div className="card">
      <h3>HTML5</h3>
      <p>43 Topics • 10 Hours</p>
      <button>Start Course</button>
    </div>
  );
}`,

        paragraphs: [
          "This one component describes exactly what a course card looks like. Once defined, you can use it anywhere in your app, as many times as needed — like placing the same LEGO window frame block in multiple places across your build."
        ]
      },

      {
        heading: "Using a Component Inside Another Component",

        code: `function MyCourses() {
  return (
    <div>
      <h1>My Courses</h1>
      <CourseCard />
      <CourseCard />
      <CourseCard />
    </div>
  );
}`,

        paragraphs: [
          "Components are used like custom HTML tags — capital letter first (React uses this to distinguish components from regular HTML tags), self-closing if nothing goes inside. This nesting is exactly how your project's pages work: Home nests Sidebar, CourseDetails nests its own course-sidebar and hero sections."
        ]
      },

      {
        heading: "Important Points to Remember",

        points: [
          "A component is a JavaScript function that returns JSX, describing a UI piece.",
          "Components are reusable — define once, use anywhere, as many times as needed.",
          "Component names must start with a capital letter, to distinguish them from plain HTML tags.",
          "Components nest inside other components, building complex UIs from small pieces."
        ]
      }

    ]
  },

  {
    title: "Functional Components",
    subtitle: "Explained Like a Vending Machine With One Specific Job",

    sections: [

      {
        heading: "Think About Different Vending Machines",

        paragraphs: [
          "A snack vending machine does one thing: given some input (button pressed), it produces one specific output (delivers that snack). It doesn't also wash dishes or make phone calls — it has one clear, focused job.",

          "Functional components in React follow this exact philosophy — a JavaScript function with one clear job: take some input (props, covered next) and return UI output (JSX). No more, no less."
        ]
      },

      {
        heading: "The Basic Structure",

        code: `function Greeting() {
  return (
    <div>
      <h2>Good Morning!</h2>
      <p>Welcome to EduNexa</p>
    </div>
  );
}

export default Greeting;`,

        paragraphs: [
          "Three parts: the function definition (the machine itself), the returned JSX (its output), and export default (making it available to import into other files). You've already been writing this exact structure throughout your project — every .jsx file in your src/pages/ and src/components/ folders follows this exact pattern."
        ]
      },

      {
        heading: "Functional vs Class Components — A Brief Note",

        paragraphs: [
          "If you look at older React tutorials (pre-2019), you'll see class components — a different syntax using class keyword, this.state, and lifecycle methods. Modern React uses only functional components, since the introduction of Hooks (useState, useEffect, covered in upcoming topics) made them just as capable, with far less complexity. Every component in your MERN project is already a functional component."
        ]
      },

      {
        heading: "One Component Per File — The Standard Convention",

        code: `// Sidebar.jsx — one component, one file
function Sidebar() {
  return (
    <div className="sidebar">
      ...
    </div>
  );
}

export default Sidebar;`,

        paragraphs: [
          "While you technically can define multiple components in one file, keeping one component per file is the strong industry convention — matching your project's already-correct structure where Login.jsx, Home.jsx, Sidebar.jsx etc. each contain exactly one component."
        ]
      },

      {
        heading: "Important Points to Remember",

        points: [
          "A functional component is simply a JavaScript function that returns JSX.",
          "export default makes a component available to import into other files.",
          "Modern React uses functional components exclusively — class components are outdated.",
          "Convention: one component per file, filename matching the component name."
        ]
      }

    ]
  },

  {
    title: "Props Basics",
    subtitle: "Explained Like Customizing an Order at a Restaurant",

    sections: [

      {
        heading: "Think About Ordering at a Restaurant",

        paragraphs: [
          "A restaurant has one 'Dosa' component (recipe, process, presentation style), but each customer's order might specify different details — plain dosa, masala dosa, onion dosa. The underlying recipe and process is the same; it's the specific details passed in with each order that customize the result.",

          "Props (short for 'properties') in React are exactly this customization mechanism — data passed into a component when using it, so the same component can produce different outputs based on what's passed in."
        ]
      },

      {
        heading: "Passing Props When Using a Component",

        code: `<CourseCard name="HTML5" topics={43} duration="10 Hours" />
<CourseCard name="CSS3" topics={42} duration="12 Hours" />
<CourseCard name="JavaScript" topics={45} duration="15 Hours" />`,

        paragraphs: [
          "These look like HTML attributes — that's intentional, JSX syntax makes passing props feel natural. Each usage of CourseCard gets its own specific order details (name, topics, duration), producing a different card despite using the exact same component."
        ]
      },

      {
        heading: "Receiving Props Inside the Component",

        code: `function CourseCard(props) {
  return (
    <div className="card">
      <h3>{props.name}</h3>
      <p>{props.topics} Topics • {props.duration}</p>
    </div>
  );
}`,

        paragraphs: [
          "props is a plain JavaScript object containing every attribute passed in — props.name, props.topics, props.duration. Inside JSX, curly braces access them just like any other variable (from 'JSX Basics')."
        ]
      },

      {
        heading: "The Common Way — Destructuring Props Directly",

        code: `function CourseCard({ name, topics, duration }) {
  return (
    <div className="card">
      <h3>{name}</h3>
      <p>{topics} Topics • {duration}</p>
    </div>
  );
}`,

        paragraphs: [
          "Remember destructuring from the JavaScript course ('Destructuring')? This is that exact pattern, applied to props — pulling name, topics, duration directly from the props object, so you can use them without the props. prefix every time. This is the most common style you'll see in real React code."
        ]
      },

      {
        heading: "Important Points to Remember",

        points: [
          "Props pass data into a component from outside, customizing its output.",
          "They're passed as attributes when using the component, like HTML attributes.",
          "Inside the component, they arrive as a plain props object — or you can destructure them directly.",
          "Props flow one way: from parent to child, never the other direction."
        ]
      }

    ]
  },

  {
    title: "Props - Passing Different Data Types",
    subtitle: "Explained Like Different Types of Items in a Courier Package",

    sections: [

      {
        heading: "Think About Sending a Courier Package",

        paragraphs: [
          "A courier package can carry different types of items — a letter (plain text), a number showing declared value, a fragile label (boolean: fragile or not), a list of contents, or even detailed customs documentation (an object with multiple fields). Each type of item needs to be packaged slightly differently.",

          "Props can carry all these same types of data — strings, numbers, booleans, arrays, objects, even functions — each passed slightly differently in JSX."
        ]
      },

      {
        heading: "Strings — The Only Type Without Curly Braces",

        code: `<CourseCard name="HTML5" level="Beginner" />`,

        paragraphs: [
          "Plain text strings use regular quotes directly — the only prop type that doesn't need curly braces, exactly like a handwritten label on the package needing no special packaging."
        ]
      },

      {
        heading: "Numbers and Booleans — Always Use Curly Braces",

        code: `<CourseCard topics={43} duration={10} unlocked={true} />`,

        paragraphs: [
          "Everything that isn't a plain string needs curly braces — numbers, booleans, expressions. Without braces, {43} would arrive as the string \"43\", not the number 43, causing subtle bugs when doing calculations."
        ]
      },

      {
        heading: "Arrays and Objects",

        code: `let icons = ["🎨", "💻", "🚀"];
let courseInfo = { level: "Beginner", rating: 4.8 };

<CourseCard tags={icons} info={courseInfo} />`,

        paragraphs: [
          "Arrays and objects are passed inside curly braces too — like including a full customs document or a packing list inside the courier package, which the receiving component can then iterate over or access fields from."
        ]
      },

      {
        heading: "Functions — Passing Behavior",

        code: `function handleStart(courseName) {
  navigate(\`/course/\${courseName}\`);
}

<CourseCard onStart={handleStart} name="HTML5" />

// Inside CourseCard:
function CourseCard({ onStart, name }) {
  return (
    <button onClick={() => onStart(name)}>
      Start Course
    </button>
  );
}`,

        paragraphs: [
          "Passing functions as props is how child components communicate back up to parents — the child doesn't navigate itself, it just calls whatever function the parent gave it. You've actually been doing this already, with onClick handlers and navigation logic spread across your components."
        ]
      },

      {
        heading: "Important Points to Remember",

        points: [
          "Strings can be passed with plain quotes; everything else needs curly braces { }.",
          "Numbers without braces arrive as strings — always use {42} not \"42\" for numbers.",
          "Arrays and objects are passed inside curly braces as regular JS values.",
          "Functions can be passed as props, letting child components trigger parent behavior."
        ]
      }

    ]
  },

  {
    title: "useState Hook",
    subtitle: "Explained Like a Whiteboard Number That Updates the Display Automatically",

    sections: [

      {
        heading: "Think About a Scoreboard",

        paragraphs: [
          "A scoreboard at a sports match has a number displayed on a big screen. When a team scores, someone updates that number on the board, and the screen immediately reflects the new score — you don't manually redraw the screen yourself, the system automatically shows whatever the current board says.",

          "useState in React works exactly this way — it stores a value (like the score on the board), and whenever you update it, React automatically re-renders the component to reflect the new value on screen."
        ]
      },

      {
        heading: "The Basic Pattern",

        code: `import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>
        Add 1
      </button>
    </div>
  );
}`,

        paragraphs: [
          "useState(0) creates a state variable starting at 0 — count holds the current value, setCount is the function to update it. Whenever setCount is called, React automatically re-renders the component with the new count value visible on screen."
        ]
      },

      {
        heading: "Breaking Down the Syntax",

        points: [
          "const [count, setCount] = useState(0) — array destructuring (from 'Destructuring'), giving names to what useState returns",
          "count — the current value, read-only (never modify it directly)",
          "setCount — the only correct way to update the value",
          "useState(0) — 0 is the initial value (can be any type: number, string, boolean, array, object)"
        ]
      },

      {
        heading: "You've Already Used This Constantly",

        code: `// From your Login.jsx:
const [loginEmail, setLoginEmail] = useState("");
const [loginPassword, setLoginPassword] = useState("");
const [loginError, setLoginError] = useState("");

// From your CourseDetails.jsx:
const [completedTopics, setCompletedTopics] = useState([]);
const [currentTopic, setCurrentTopic] = useState(0);
const [searchQuery, setSearchQuery] = useState("");`,

        paragraphs: [
          "Every single one of these is useState in action — you've been using it throughout your entire MERN project, this topic just formally explains what it is and why it works the way it does."
        ]
      },

      {
        heading: "Important Points to Remember",

        points: [
          "useState creates a reactive value — when it changes, React automatically re-renders that component.",
          "Always use the setter function (setCount) to update state, never modify the variable directly.",
          "useState can hold any data type: number, string, boolean, array, or object.",
          "You've been using useState throughout your MERN project — this topic names and explains it."
        ]
      }

    ]
  },

  {
    title: "Handling Events in React",
    subtitle: "Explained Like Setting Up Automatic Responses to Doorbell Rings",

    sections: [

      {
        heading: "Think About a Smart Doorbell System",

        paragraphs: [
          "A smart doorbell system lets you set up specific automatic responses for each type of event — when the front doorbell rings, turn on the porch light; when the back gate buzzer sounds, send a phone notification. Each type of trigger has its own defined response.",

          "Event handling in React works this way — defining specific JSX attributes that trigger specific functions when user interactions happen."
        ]
      },

      {
        heading: "The Basic Pattern — onClick",

        code: `function LikeButton() {
  function handleClick() {
    console.log("Button was liked!");
  }

  return (
    <button onClick={handleClick}>
      Like
    </button>
  );
}`,

        paragraphs: [
          "onClick={handleClick} — notice there are no parentheses after handleClick here. Passing onClick={handleClick()} would call the function immediately when the component renders, not when clicked. Just the name (without parentheses) passes the function itself, to be called only when the click actually happens."
        ]
      },

      {
        heading: "Inline Arrow Function — For Simple Actions",

        code: `<button onClick={() => setCount(count + 1)}>
  Add 1
</button>`,

        paragraphs: [
          "For quick, one-line actions, an inline arrow function inside JSX is cleaner than defining a separate named function — like setting up a simple one-step doorbell response directly in the panel, rather than writing a separate full instruction manual for it."
        ]
      },

      {
        heading: "The Event Object — e",

        code: `function handleInput(e) {
  console.log(e.target.value); // What was typed
}

<input onChange={handleInput} />`,

        paragraphs: [
          "React passes an event object (e) automatically — just like the plain JavaScript event object from 'Event Listeners' in the JS course. e.target.value is the most common use, reading whatever the user typed into an input field — exactly like your Login.jsx's onChange handlers."
        ]
      },

      {
        heading: "Common Event Types in React",

        points: [
          "onClick — clicking a button, div, or any element",
          "onChange — typing in an input/textarea, changing a select dropdown",
          "onSubmit — submitting a form (remember to call e.preventDefault() first!)",
          "onMouseOver / onMouseOut — hovering over an element",
          "onKeyDown / onKeyUp — keyboard key pressed or released"
        ]
      },

      {
        heading: "Important Points to Remember",

        points: [
          "React event attributes are camelCase: onClick, onChange, onSubmit (not onclick, onchange).",
          "Pass the function reference, not a call: onClick={handleClick} not onClick={handleClick()}.",
          "Arrow functions inline are fine for simple one-liners: onClick={() => doSomething()}.",
          "The event object (e) is automatically passed and contains useful info like e.target.value."
        ]
      }

    ]
  },

  {
    title: "Conditional Rendering",
    subtitle: "Explained Like a Security Guard Showing Different Screens Based on ID Check",

    sections: [

      {
        heading: "Think About a Security Checkpoint",

        paragraphs: [
          "A security checkpoint shows different screens to different people — verified staff see the 'Welcome, access granted' screen, visitors see a 'Please wait for escort' screen, and unverified people see a 'Sorry, access denied' screen. What appears on the display depends entirely on who's presenting their ID.",

          "Conditional rendering in React works the same way — showing different JSX (or nothing at all) based on the current state or props, like changing what the screen shows based on the current condition."
        ]
      },

      {
        heading: "The if/else Way — For Complex Conditions",

        code: `function UserGreeting({ isLoggedIn }) {
  if (isLoggedIn) {
    return <h1>Welcome back!</h1>;
  } else {
    return <h1>Please log in.</h1>;
  }
}`,

        paragraphs: [
          "The simplest approach — a regular if/else deciding which JSX to return. Clean and readable, especially when each branch renders significantly different content."
        ]
      },

      {
        heading: "The Ternary Operator — Most Common in JSX",

        code: `function Status({ isLoading }) {
  return (
    <div>
      {isLoading ? <p>Loading...</p> : <p>Data loaded!</p>}
    </div>
  );
}`,

        paragraphs: [
          "Remember the ternary operator from 'Ternary Operator' in the JavaScript course? This is its most common real-world use — inside JSX, quickly switching between two pieces of UI based on a condition. You've already used this throughout your project with things like {islogin ? 'Welcome Back' : 'Create Account'} in your Login.jsx."
        ]
      },

      {
        heading: "The && Operator — Showing or Hiding One Thing",

        code: `function Notification({ hasError, errorMessage }) {
  return (
    <div>
      <h1>My Page</h1>
      {hasError && <p className="error">{errorMessage}</p>}
    </div>
  );
}`,

        paragraphs: [
          "When you only want to show something (or nothing), && is cleaner than a ternary — 'if hasError is true, show the error paragraph; otherwise show nothing at all.' Remember logical operators from the JavaScript course — this is exactly && working in JSX."
        ]
      },

      {
        heading: "Returning null — Rendering Nothing",

        code: `function Banner({ show }) {
  if (!show) return null;

  return <div className="banner">Special Offer!</div>;
}`,

        paragraphs: [
          "Returning null from a component renders absolutely nothing — like the security screen going blank rather than showing either the welcome or denied screen. Useful for completely hiding a component based on a condition."
        ]
      },

      {
        heading: "Important Points to Remember",

        points: [
          "if/else works for complex conditions where each branch renders very different content.",
          "Ternary (condition ? a : b) is most common for switching between two UI pieces inside JSX.",
          "{condition && <Component />} shows something or nothing, based on a condition.",
          "Returning null from a component renders nothing at all — the component effectively disappears."
        ]
      }

    ]
  },

  {
    title: "Lists & Keys",
    subtitle: "Explained Like an Attendance Register with Unique Roll Numbers",

    sections: [

      {
        heading: "Think About an Attendance Register",

        paragraphs: [
          "When a teacher calls attendance, each student has a unique roll number — the teacher doesn't just say 'student, present', but specifically '42, present; 43, present.' This unique number lets the teacher quickly find, update, or remove a specific student's record without confusion.",

          "React's key prop works on this exact principle — when rendering a list of items, each item needs a unique identifier so React can efficiently track which item changed, was added, or was removed."
        ]
      },

      {
        heading: "Rendering a List Without Keys — The Wrong Way",

        code: `let courses = ["HTML5", "CSS3", "JavaScript"];

function CourseList() {
  return (
    <ul>
      {courses.map(course => (
        <li>{course}</li>  // ⚠️ Missing key!
      ))}
    </ul>
  );
}`,

        paragraphs: [
          "This works but React warns you — without unique keys, React can't efficiently tell which list item changed when the list updates, potentially causing subtle bugs with reordering or updating."
        ]
      },

      {
        heading: "Adding Keys — The Correct Way",

        code: `let courses = [
  { id: 1, name: "HTML5" },
  { id: 2, name: "CSS3" },
  { id: 3, name: "JavaScript" }
];

function CourseList() {
  return (
    <ul>
      {courses.map(course => (
        <li key={course.id}>{course.name}</li>
      ))}
    </ul>
  );
}`,

        paragraphs: [
          "key={course.id} gives each list item its unique 'roll number' — React uses this to track each item individually, like a teacher using roll numbers to identify students instead of just their positions in a line."
        ]
      },

      {
        heading: "Why Not Just Use the Array Index as Key?",

        code: `// Avoid this unless items never reorder
{courses.map((course, index) => (
  <li key={index}>{course.name}</li>
))}`,

        paragraphs: [
          "Using the array index as key is technically valid but problematic if items can reorder or be deleted — index numbers shift when items move, confusing React's tracking, like reassigning roll numbers every time a student changes seats. Always prefer a stable unique ID from the data itself."
        ]
      },

      {
        heading: "Connection to Your Project",

        paragraphs: [
          "Look at your CourseDetails.jsx — the sidebar topic list uses key={index} in the .map(), and your lesson sections use key={index} too. This works fine here since the order never changes, but in a real dynamic list where items can be added, removed, or reordered, a stable unique ID key would be better practice."
        ]
      },

      {
        heading: "Important Points to Remember",

        points: [
          "Every item rendered in a .map() needs a key prop — React warns you if it's missing.",
          "Keys must be unique among siblings in the same list, but not globally.",
          "Use a stable unique ID from your data as the key, not the array index if possible.",
          "Keys help React efficiently track list changes, avoiding unnecessary re-renders."
        ]
      }

    ]
  },

  {
    title: "Forms in React",
    subtitle: "Explained Like a Live Typewriter That Shows What You Type Instantly",

    sections: [

      {
        heading: "Think About a Live Preview Typewriter",

        paragraphs: [
          "Imagine a special typewriter where, as you press each key, a small display screen immediately shows the current full text — the screen is always in sync with exactly what's typed, updating in real time with every single keystroke.",

          "Controlled forms in React work exactly this way — React state stores the current input value, and the input always displays exactly what's in state, keeping them perfectly in sync at all times."
        ]
      },

      {
        heading: "A Controlled Input",

        code: `import { useState } from "react";

function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    console.log("Email:", email, "Password:", password);
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Enter email"
      />
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Enter password"
      />
      <button type="submit">Login</button>
    </form>
  );
}`,

        paragraphs: [
          "This is exactly your Login.jsx's structure — value={loginEmail} keeps the input displaying whatever state holds, and onChange={e => setLoginEmail(e.target.value)} updates state with every keystroke, keeping the typewriter screen perfectly in sync."
        ]
      },

      {
        heading: "Why 'Controlled'?",

        paragraphs: [
          "The input is 'controlled' because React state controls what it displays — you're the one determining the value, not letting the browser manage it on its own. This gives you full control: you can validate before updating, transform input (like forcing uppercase), or reset all fields programmatically with one state update."
        ]
      },

      {
        heading: "The Pattern for Multiple Fields",

        code: `const [formData, setFormData] = useState({
  name: "",
  email: "",
  message: ""
});

function handleChange(e) {
  setFormData({
    ...formData,
    [e.target.name]: e.target.value
  });
}

<input name="email" value={formData.email} onChange={handleChange} />`,

        paragraphs: [
          "For forms with many fields, storing them all in one object (using spread and computed property names) keeps the code cleaner than separate useState for every field — remember spread operator and destructuring from the JavaScript course? Both in action here."
        ]
      },

      {
        heading: "Important Points to Remember",

        points: [
          "Controlled inputs tie their value to React state, keeping both always in sync.",
          "onChange updates state on every keystroke; value displays whatever state holds.",
          "e.preventDefault() in onSubmit stops the default browser page reload.",
          "Multiple fields can share one state object, updated using computed property names and spread."
        ]
      }

    ]
  },

  {
    title: "useEffect Hook",
    subtitle: "Explained Like an Assistant Who Does Side Jobs After You're Settled In",

    sections: [

      {
        heading: "Think About Moving Into a New Office",

        paragraphs: [
          "When you first move into a new office, you focus on getting settled — setting up your desk, arranging things. Once you're settled in, your assistant takes care of side tasks: ordering office supplies, sending out 'new address' notifications, scheduling a welcome meeting. These side tasks happen after the main setup is done, not during it.",

          "useEffect works exactly this way — it runs side effects after React has finished rendering the component to the screen, not during the rendering itself."
        ]
      },

      {
        heading: "The Basic Pattern",

        code: `import { useState, useEffect } from "react";

function CourseDetails() {
  const [data, setData] = useState(null);

  useEffect(() => {
    console.log("Component just rendered!");
    // Side effect code here — fetch data, set up subscriptions, etc.
  });

  return <div>...</div>;
}`,

        paragraphs: [
          "The function passed to useEffect runs after every render by default — like the assistant doing their side tasks after you're settled in, every single time you rearrange your desk (every render)."
        ]
      },

      {
        heading: "Common Side Effects useEffect Is Used For",

        points: [
          "Fetching data from an API when a component first appears",
          "Reading from localStorage when a component loads",
          "Setting up event listeners or subscriptions",
          "Updating the document title",
          "Any operation that affects something outside React's own rendering"
        ]
      },

      {
        heading: "You've Already Used This!",

        code: `// From your CourseDetails.jsx:
useEffect(() => {
  const savedTopics =
    JSON.parse(localStorage.getItem(\`\${courseName}CompletedTopics\`)) || [];

  let savedCurrentTopic =
    Number(localStorage.getItem(\`\${courseName}CurrentTopic\`)) || 0;

  setCompletedTopics(savedTopics);
  setCurrentTopic(0);
}, [courseName]);`,

        paragraphs: [
          "This is useEffect in your own project — reading from localStorage after the component renders, and updating state with those saved values. The [courseName] part controls when it re-runs, covered in the very next topic."
        ]
      },

      {
        heading: "Important Points to Remember",

        points: [
          "useEffect runs after React finishes rendering the component to the screen.",
          "It's for side effects — operations that affect something outside the component's own rendering.",
          "Common uses: fetching data, reading localStorage, setting up event listeners.",
          "You've been using useEffect throughout your MERN project already."
        ]
      }

    ]
  },

  {
    title: "useEffect - Dependency Array",
    subtitle: "Explained Like an Automatic Light That Responds to Specific Triggers Only",

    sections: [

      {
        heading: "Think About Motion-Sensor Lights",

        paragraphs: [
          "A basic light turns on constantly. A smarter motion-sensor light only turns on when specific movement triggers it. An even smarter one might turn on only when movement is detected AND the room is dark. You control exactly which conditions trigger the light's response.",

          "useEffect's dependency array is exactly this trigger control — deciding WHEN the effect should re-run, rather than running it after every single render."
        ]
      },

      {
        heading: "Three Behaviors Based on the Dependency Array",

        code: `// 1. No array — runs after EVERY render
useEffect(() => {
  console.log("Runs after every render");
});

// 2. Empty array [] — runs ONCE, after the first render only
useEffect(() => {
  console.log("Runs only once, on mount");
}, []);

// 3. With values [courseName] — runs when those values change
useEffect(() => {
  console.log("Runs when courseName changes");
}, [courseName]);`
      },

      {
        heading: "Empty Array — The 'Run Once on Load' Pattern",

        code: `useEffect(() => {
  fetchUserData(); // Fetch once when component first appears
}, []);`,

        paragraphs: [
          "The empty array [] means 'no triggers — run once when the component first mounts, then never again.' Like a light that turns on exactly once when you first enter the room, then ignores all further movement — perfect for one-time setup like fetching initial data."
        ]
      },

      {
        heading: "Specific Dependencies — Re-Run When They Change",

        code: `useEffect(() => {
  // Runs once on mount, then again whenever courseName changes
  const savedTopics =
    JSON.parse(localStorage.getItem(\`\${courseName}CompletedTopics\`)) || [];
  setCompletedTopics(savedTopics);
  setCurrentTopic(0);
}, [courseName]);`,

        paragraphs: [
          "This is your CourseDetails.jsx useEffect — it runs when the component first mounts, and again whenever courseName (the URL param) changes, like switching from HTML to CSS course. The sensor triggers when that specific thing changes, not every time anything changes."
        ]
      },

      {
        heading: "A Common Mistake — Missing Dependencies",

        paragraphs: [
          "If your effect uses a variable but you don't include it in the dependency array, the effect might use a stale, outdated version of that variable — like a sensor responding to motion in one room but actually controlling the light in a completely different room, causing confusing, hard-to-debug behavior."
        ]
      },

      {
        heading: "Important Points to Remember",

        points: [
          "No dependency array — effect runs after every single render.",
          "Empty array [] — effect runs only once, when the component first mounts.",
          "[value] — effect runs on mount, then re-runs whenever that value changes.",
          "Always include every variable the effect uses in the dependency array, to avoid stale data bugs."
        ]
      }

    ]
  },

  {
    title: "Component Lifecycle",
    subtitle: "Explained Like an Employee's Journey — Joining, Working, Leaving",

    sections: [

      {
        heading: "Think About an Employee's Journey",

        paragraphs: [
          "Every employee goes through the same three phases: they join the company (onboarding, getting set up), they work there daily (doing their job as things change around them), and eventually they leave (offboarding, handing over responsibilities and clearing their desk).",

          "React components follow this exact same lifecycle — they mount (appear on screen), update (re-render when state/props change), and unmount (disappear from screen), and useEffect gives you hooks into each of these phases."
        ]
      },

      {
        heading: "Phase 1 — Mounting (Joining)",

        code: `useEffect(() => {
  console.log("Component joined — first render done!");
  // Fetch initial data, read localStorage, set up subscriptions
}, []);`,

        paragraphs: [
          "The empty-array useEffect runs exactly once when the component first appears on screen — like running onboarding tasks just once, the first day an employee joins, never again for that same employee."
        ]
      },

      {
        heading: "Phase 2 — Updating (Working)",

        code: `useEffect(() => {
  console.log("Something changed — re-running this effect!");
  // Respond to courseName changing, user changing, etc.
}, [courseName]);`,

        paragraphs: [
          "When state or props change, React re-renders the component and runs any useEffect whose dependencies include the changed values — like an employee adjusting their daily work whenever their assigned project changes, but not whenever unrelated office things change."
        ]
      },

      {
        heading: "Phase 3 — Unmounting (Leaving)",

        code: `useEffect(() => {
  const timer = setInterval(() => {
    console.log("Timer ticking...");
  }, 1000);

  // Cleanup — runs when component unmounts (leaves the screen)
  return () => {
    clearInterval(timer);
    console.log("Component leaving — timer cleared!");
  };
}, []);`,

        paragraphs: [
          "Returning a function from useEffect creates a 'cleanup' — it runs when the component unmounts (disappears from screen). Like an employee clearing their desk and handing over responsibilities on their last day — essential for stopping timers, clearing subscriptions, or removing event listeners, to avoid memory leaks."
        ]
      },

      {
        heading: "Why This Matters for Your Project",

        paragraphs: [
          "When a user navigates from CourseDetails to Home, CourseDetails unmounts. If it had an active timer or event listener without cleanup, those would keep running invisibly even after the component disappeared — a common source of subtle bugs and performance issues in React apps."
        ]
      },

      {
        heading: "Important Points to Remember",

        points: [
          "Components go through three phases: mount (appear), update (re-render), unmount (disappear).",
          "useEffect with [] runs once on mount; with dependencies runs when those change.",
          "Returning a cleanup function from useEffect runs it on unmount (and before each re-run).",
          "Cleanup is essential for timers, event listeners, and subscriptions to prevent memory leaks."
        ]
      }

    ]
  },

  {
    title: "Lifting State Up",
    subtitle: "Explained Like Moving a Shared Whiteboard to a Common Room",

    sections: [

      {
        heading: "Think About a Shared Whiteboard",

        paragraphs: [
          "Two team members in separate rooms both need to see and update the same information — current task count. Keeping separate whiteboards in each room causes mismatches (they fall out of sync). The solution: move the one shared whiteboard to a common room both can access, with both rooms reading from and updating that one central board.",

          "Lifting state up in React is exactly this — when two sibling components need to share the same state, move that state up to their common parent, which then passes it down to both children as props."
        ]
      },

      {
        heading: "The Problem — State Stuck in the Wrong Place",

        code: `// ❌ Problem: siblings can't share state between each other
function SearchBar() {
  const [query, setQuery] = useState(""); // trapped here
  return <input onChange={e => setQuery(e.target.value)} />;
}

function TopicList() {
  // How does TopicList access SearchBar's query? It can't directly!
  return <ul>...</ul>;
}`,

        paragraphs: [
          "Props only flow downward (parent to child) — siblings can't directly share state with each other. When two components need the same data, the state needs to live in their common parent."
        ]
      },

      {
        heading: "The Solution — Lift State to the Parent",

        code: `// ✅ Solution: move shared state to the common parent
function CourseLayout() {
  const [query, setQuery] = useState(""); // lifted up here

  return (
    <div>
      <SearchBar query={query} onSearch={setQuery} />
      <TopicList query={query} />
    </div>
  );
}

function SearchBar({ query, onSearch }) {
  return <input value={query} onChange={e => onSearch(e.target.value)} />;
}

function TopicList({ query }) {
  // Now has access to query!
  return <ul>...</ul>;
}`,

        paragraphs: [
          "The parent holds the whiteboard. SearchBar updates it (via the function passed as prop), and TopicList reads it (via the value passed as prop) — both always seeing the same, synchronized value."
        ]
      },

      {
        heading: "You've Already Done This",

        paragraphs: [
          "In your CourseDetails.jsx, the search input and topic list are in the same component — so they share the same searchQuery state naturally. But if they were ever split into separate child components, lifting searchQuery to their parent would be the correct approach."
        ]
      },

      {
        heading: "Important Points to Remember",

        points: [
          "When siblings need to share state, lift it to their common parent component.",
          "The parent holds the state, passing it down as props to children who need it.",
          "Children update shared state by calling setter functions passed down as props.",
          "This is the fundamental pattern for sharing data in React, before more advanced solutions."
        ]
      }

    ]
  },

  {
    title: "Component Composition",
    subtitle: "Explained Like Modular Furniture You Assemble Differently Each Time",

    sections: [

      {
        heading: "Think About Modular Furniture",

        paragraphs: [
          "A modular shelving system gives you the same base unit, but you can attach different inserts — drawers, glass doors, open shelves, a wine rack — to customize each unit's content differently. The outer frame is always the same; what goes inside changes every time.",

          "Component composition in React works exactly this way — a component can define its structure (the outer frame), while accepting completely different content (the inserts) wherever it's used."
        ]
      },

      {
        heading: "The children Prop — Anything Between Tags",

        code: `function Card({ children }) {
  return (
    <div className="card">
      {children}
    </div>
  );
}

// Using Card with different content each time:
<Card>
  <h3>HTML5 Course</h3>
  <p>43 topics</p>
</Card>

<Card>
  <img src="profile.jpg" alt="Profile" />
  <h4>Nishitha</h4>
</Card>`,

        paragraphs: [
          "children is a special built-in prop — whatever you put between the opening and closing tags of a component automatically becomes children, like whatever insert you place inside the modular frame. Same Card component, completely different content inside each time."
        ]
      },

      {
        heading: "Why Composition Over Repetition",

        paragraphs: [
          "Without composition, you'd need a separate HTMLCourseCard, ProfileCard, StatCard component — all with identical wrapper styling, just different contents. With composition, one Card component handles the shared styling, accepting any content as children — change the card's styling once, every usage updates."
        ]
      },

      {
        heading: "A Layout Component Example",

        code: `function PageLayout({ children }) {
  return (
    <div className="home-page">
      <Sidebar />
      <div className="hero">
        {children}
      </div>
    </div>
  );
}

// Home.jsx using it:
<PageLayout>
  <h1>Welcome back!</h1>
  <p>Continue your journey...</p>
</PageLayout>`,

        paragraphs: [
          "Your existing project structure actually follows this idea — Home, MyCourses, and other pages all manually include Sidebar + hero div. A PageLayout wrapper component would extract that repeated structure, accepting different page content as children."
        ]
      },

      {
        heading: "Important Points to Remember",

        points: [
          "The children prop holds whatever is placed between a component's opening and closing tags.",
          "Composition lets one component define structure/styling, accepting variable content inside.",
          "It avoids duplicating wrapper structures across multiple specific components.",
          "Layout components (wrapping Sidebar + main content) are a classic composition use case."
        ]
      }

    ]
  },

  {
    title: "React Router - Setup",
    subtitle: "Explained Like Installing a Building's Signboard Directory",

    sections: [

      {
        heading: "Think About a Large Building's Directory",

        paragraphs: [
          "A large office building has a directory board at the entrance — 'Room 101: HR Department, Room 205: Finance, Room 310: IT Support.' When you arrive wanting to find IT Support, you check the directory, learn it's room 310, and go there directly. The building wouldn't work well without this organized map of what's where.",

          "React Router is exactly this directory for a React app — a map connecting URL paths to specific components, so when a user visits /login they see Login, /home shows Home, /mycourses shows MyCourses."
        ]
      },

      {
        heading: "Installing React Router",

        code: `npm install react-router-dom`,

        paragraphs: [
          "Already done in your project! react-router-dom is the web version of React Router, providing the routing components you've already been using throughout your MERN platform."
        ]
      },

      {
        heading: "The Basic Setup — Your App.jsx",

        code: `import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Home from "./pages/Home";
import MyCourses from "./pages/MyCourses";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/mycourses" element={<MyCourses />} />
      </Routes>
    </BrowserRouter>
  );
}`,

        paragraphs: [
          "This is your actual App.jsx structure — BrowserRouter is the whole directory board, Routes is the list of entries, and each Route maps one path to one component, like one directory entry pointing to one specific room."
        ]
      },

      {
        heading: "The Three Core Components",

        points: [
          "BrowserRouter — wraps the entire app, enabling routing; uses the browser's URL history API",
          "Routes — container that holds all Route definitions, rendering only the matching one",
          "Route — one mapping: path='/login' + element={<Login />} = 'path leads to this room'"
        ]
      },

      {
        heading: "Important Points to Remember",

        points: [
          "React Router connects URL paths to specific components, enabling navigation without page reloads.",
          "BrowserRouter wraps the entire app; Routes holds all Route definitions.",
          "Each Route maps one path to one component — only the matching route renders.",
          "Your existing App.jsx already implements this exact setup."
        ]
      }

    ]
  },

  {
    title: "React Router - Dynamic Routes",
    subtitle: "Explained Like a Hotel Using One Room Template for Every Room Number",

    sections: [

      {
        heading: "Think About Hotel Rooms",

        paragraphs: [
          "A hotel doesn't design a completely different room for room 101, another unique design for 102, another for 201, and so on — it uses one standard room template (same layout, furniture style, facilities), but each room has its own number that determines a few specific details like floor, view, and sometimes size.",

          "Dynamic routes in React Router work exactly this way — one route definition handles many different URLs, using a variable part in the path to know which specific content to display."
        ]
      },

      {
        heading: "Defining a Dynamic Route",

        code: `<Route path="/course/:courseName" element={<CourseDetails />} />`,

        paragraphs: [
          "The colon before courseName makes it a URL parameter — a variable slot that accepts any value. So /course/html5, /course/css3, /course/javascript all match this same single route definition, like room numbers all matching the same hotel room template, but each carrying its own specific number."
        ]
      },

      {
        heading: "Why Dynamic Routes Matter",

        paragraphs: [
          "Without dynamic routes, you'd need a separate route for every single course — /route/html5, /route/css3, /route/javascript, each mapped individually. For 10 courses that's manageable, but for a real platform with hundreds of items, it's completely impractical. One dynamic route handles all of them cleanly."
        ]
      },

      {
        heading: "Your Existing Route",

        code: `// Your App.jsx — already using a dynamic route:
<Route path="/course/:courseName" element={<CourseDetails />} />

// All of these match the same route:
// /course/html5     → CourseDetails, courseName = "html5"
// /course/css3      → CourseDetails, courseName = "css3"
// /course/reactjs   → CourseDetails, courseName = "reactjs"`,

        paragraphs: [
          "This is exactly what makes your learning platform work — one CourseDetails component serves all courses, with :courseName telling it which specific course to load. How that courseName value is actually read inside the component is covered in the very next topic."
        ]
      },

      {
        heading: "Important Points to Remember",

        points: [
          "Dynamic routes use :paramName in the path to create a variable URL segment.",
          "One dynamic route handles many different URLs, like one hotel template handling all rooms.",
          "The variable part changes per URL, letting one component serve many different items.",
          "Your existing /course/:courseName route already implements this pattern for all courses."
        ]
      }

    ]
  },

  {
    title: "React Router - useNavigate & useParams",
    subtitle: "Explained Like a GPS and a Room Number Sign",

    sections: [

      {
        heading: "Think About Navigating a Large Hotel",

        paragraphs: [
          "Two different tools help you navigate a hotel: a GPS (or the hotel staff) that actively takes you to a specific room when you ask — 'Take me to Room 310'; and the room number sign on each door that tells you which room you're currently in when you arrive — '310'.",

          "useNavigate and useParams are these exact two tools for React Router — one for actively navigating to a route, the other for reading which route's parameters you've arrived at."
        ]
      },

      {
        heading: "useNavigate — The GPS: Go Somewhere Programmatically",

        code: `import { useNavigate } from "react-router-dom";

function MyCourses() {
  const navigate = useNavigate();

  return (
    <button onClick={() => navigate("/home")}>
      Go Home
    </button>
  );
}`,

        paragraphs: [
          "navigate('/home') programmatically takes the user to that URL — like calling the GPS and saying 'take me to room 310', triggering navigation from JavaScript code rather than the user clicking a link. You've been using this throughout your project for logout redirects, post-login navigation, and course card buttons."
        ]
      },

      {
        heading: "Navigating with Data",

        code: `// Navigate to a dynamic route with a specific value:
navigate(\`/course/\${slugify(course.name)}\`);

// Navigate back (like browser back button):
navigate(-1);`,

        paragraphs: [
          "Template literals make building dynamic routes to navigate to very clean. navigate(-1) goes back one step in the browser's history — like retracing one step from where you came from, without needing to know the specific previous URL."
        ]
      },

      {
        heading: "useParams — The Room Number Sign: Read URL Parameters",

        code: `import { useParams } from "react-router-dom";

function CourseDetails() {
  const { courseName } = useParams();

  console.log(courseName); // "html5", "css3", "reactjs", etc.

  const lessons = courseLessonsMap[courseName] || [];
}`,

        paragraphs: [
          "useParams() returns an object containing all URL parameters from the current route — destructuring courseName from it reads the :courseName part of the current URL, like reading the room number sign to know which room you've arrived in. This is exactly what your CourseDetails.jsx already uses to know which course to load."
        ]
      },

      {
        heading: "Using Both Together — A Complete Navigation Pattern",

        code: `// MyCourses.jsx — navigate to a course (GPS):
navigate(\`/course/\${slugify(course.name)}\`);

// CourseDetails.jsx — read which course arrived (room sign):
const { courseName } = useParams();`,

        paragraphs: [
          "Together, these two hooks form the complete navigation pair in your project — one sending the user to the right course URL, the other reading that URL to load the correct course content. You've already been using both, now you know exactly why."
        ]
      },

      {
        heading: "Important Points to Remember",

        points: [
          "useNavigate() returns a function to programmatically navigate to any route.",
          "navigate('/path') goes to that route; navigate(-1) goes back one step in history.",
          "useParams() returns an object of all URL parameters from the current dynamic route.",
          "Destructure specific params by their name from the route definition: const { courseName } = useParams()."
        ]
      }

    ]
  },

  {
    title: "useRef Hook",
    subtitle: "Explained Like a Sticky Note That Doesn't Redecorate the Room",

    sections: [

      {
        heading: "Think About Two Kinds of Notes",

        paragraphs: [
          "Imagine two kinds of notes in your room: one on your whiteboard (when you change it, you immediately notice and react — repaint, rearrange), and one on a small sticky note tucked in a drawer (you can change its contents anytime, but changing it doesn't trigger you to redecorate the entire room).",

          "useState is like the whiteboard — changing it triggers a re-render. useRef is like that drawer sticky note — it holds a value that persists across renders, but changing it never causes the component to re-render."
        ]
      },

      {
        heading: "Two Main Uses of useRef",

        points: [
          "1. Storing a value that should persist between renders WITHOUT causing re-renders",
          "2. Directly accessing a real DOM element (like an input field), to focus it, read its value, etc."
        ]
      },

      {
        heading: "Use 1 — Accessing a DOM Element",

        code: `import { useRef } from "react";

function SearchBar() {
  const inputRef = useRef(null);

  function handleFocus() {
    inputRef.current.focus(); // Directly focuses the input
  }

  return (
    <>
      <input ref={inputRef} type="text" placeholder="Search..." />
      <button onClick={handleFocus}>Focus Input</button>
    </>
  );
}`,

        paragraphs: [
          "ref={inputRef} attaches the ref to that specific DOM element. inputRef.current then gives you direct access to the actual DOM node — like having a direct phone line to that specific element, without going through React's state system. Useful for programmatically focusing an input, scrolling to a position, or reading a value without state."
        ]
      },

      {
        heading: "Use 2 — Storing a Value Without Re-rendering",

        code: `import { useRef, useEffect } from "react";

function Timer() {
  const intervalRef = useRef(null);

  function startTimer() {
    intervalRef.current = setInterval(() => {
      console.log("tick");
    }, 1000);
  }

  function stopTimer() {
    clearInterval(intervalRef.current);
  }

  return (
    <>
      <button onClick={startTimer}>Start</button>
      <button onClick={stopTimer}>Stop</button>
    </>
  );
}`,

        paragraphs: [
          "The interval ID is stored in a ref — it persists across renders (so stopTimer can access the same ID that startTimer set), but updating it never triggers a re-render, which is exactly what you'd want for a timer ID that the UI doesn't need to display."
        ]
      },

      {
        heading: "useState vs useRef — Quick Comparison",

        points: [
          "useState — value change triggers re-render (use when UI needs to reflect the value)",
          "useRef — value change does NOT trigger re-render (use for DOM access or persisting values the UI doesn't display)",
          "Both persist their values across renders"
        ]
      },

      {
        heading: "Important Points to Remember",

        points: [
          "useRef returns an object with a .current property that holds the stored value.",
          "Changing .current never triggers a re-render — unlike setState.",
          "Attach to DOM elements via ref={myRef} to get direct access to that node.",
          "Common uses: focusing inputs, storing timer IDs, tracking previous values."
        ]
      }

    ]
  },

  {
    title: "useContext Hook",
    subtitle: "Explained Like a School-Wide PA System Instead of Passing Notes Room to Room",

    sections: [

      {
        heading: "Think About Sharing Information Across Many Classrooms",

        paragraphs: [
          "If a principal needs to share a message with every classroom, passing a written note through each classroom door in sequence is slow and error-prone — especially if there are 10 nested classrooms where the note must travel room by room. A school-wide PA system broadcasts once, and every classroom hears it directly.",

          "React Context is exactly this PA system — a way to share data globally across many components, without passing props through every level in between (a painful pattern called 'prop drilling')."
        ]
      },

      {
        heading: "The Problem Context Solves — Prop Drilling",

        code: `// Without context — prop drilling through every level:
<App user={user}>
  <Home user={user}>
    <Sidebar user={user}>
      <ProfileSection user={user} />  // Finally uses it here!
    </Sidebar>
  </Home>
</App>`,

        paragraphs: [
          "Every intermediate component (Home, Sidebar) has to receive and pass user as a prop, even if they don't use it themselves — like passing a note through every classroom just to reach the last one."
        ]
      },

      {
        heading: "Step 1 — Creating a Context",

        code: `import { createContext } from "react";

export const UserContext = createContext(null);`
      },

      {
        heading: "Step 2 — Providing the Value",

        code: `import { UserContext } from "./UserContext";

function App() {
  const [user, setUser] = useState(null);

  return (
    <UserContext.Provider value={user}>
      <Home />
    </UserContext.Provider>
  );
}`,

        paragraphs: [
          "The Provider wraps the part of the component tree that needs access — like the PA system's microphone broadcasting to every room inside the building."
        ]
      },

      {
        heading: "Step 3 — Consuming the Value Anywhere",

        code: `import { useContext } from "react";
import { UserContext } from "./UserContext";

function ProfileSection() {
  const user = useContext(UserContext);

  return <h3>Hello, {user?.name}!</h3>;
}`,

        paragraphs: [
          "Any component inside the Provider can call useContext(UserContext) and directly receive the value — no props needed at any level in between, like any classroom directly hearing the PA announcement without needing notes passed through."
        ]
      },

      {
        heading: "Important Points to Remember",

        points: [
          "Context avoids prop drilling — sharing data across many component levels without passing props manually.",
          "createContext() creates the context; Provider wraps components that need access; useContext() reads the value.",
          "Good for truly global data: current user, theme, language, authentication status.",
          "Don't overuse it for all state — local component state and props are still better for non-global data."
        ]
      }

    ]
  },

  {
    title: "Custom Hooks",
    subtitle: "Explained Like Writing Your Own Reusable Recipe Card",

    sections: [

      {
        heading: "Think About a Reusable Recipe Card",

        paragraphs: [
          "Instead of rewriting the same 'how to make chai' steps in every notebook that needs it, a cook writes one reusable recipe card — any notebook can reference it, and changing the recipe once updates it everywhere it's used.",

          "Custom Hooks are exactly this — extracting repeated stateful logic into a reusable function, so multiple components can use the same logic without duplicating code."
        ]
      },

      {
        heading: "The Problem — Duplicated Logic Across Components",

        code: `// Same fetch logic repeated in CourseDetails AND Home:
function CourseDetails() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("/api/courses")
      .then(r => r.json())
      .then(d => { setData(d); setLoading(false); })
      .catch(e => { setError(e); setLoading(false); });
  }, []);
}

// Same pattern copy-pasted in Home.jsx ← code smell!`,

        paragraphs: [
          "Copy-pasting logic is a sign it should become a custom hook — written once, usable anywhere."
        ]
      },

      {
        heading: "Extracting Into a Custom Hook",

        code: `// useFetch.js — a custom hook
import { useState, useEffect } from "react";

function useFetch(url) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(url)
      .then(r => r.json())
      .then(d => { setData(d); setLoading(false); })
      .catch(e => { setError(e); setLoading(false); });
  }, [url]);

  return { data, loading, error };
}

export default useFetch;`
      },

      {
        heading: "Using the Custom Hook Anywhere",

        code: `function CourseDetails() {
  const { data, loading, error } = useFetch("/api/courses");

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error loading data</p>;
  return <div>{data?.title}</div>;
}

function Home() {
  const { data, loading } = useFetch("/api/user");
  // Same hook, different URL, works perfectly
}`,

        paragraphs: [
          "Clean, reusable, and each component gets its own independent state — like each notebook having its own copy of the recipe's result (their own chai), even though they referenced the same recipe card."
        ]
      },

      {
        heading: "The One Rule — Must Start with 'use'",

        paragraphs: [
          "Custom hooks must be named starting with 'use' (useFetch, useLocalStorage, useWindowSize) — this is how React identifies them as hooks and enforces hook rules. A function that uses useState/useEffect but isn't named with 'use' won't get these protections."
        ]
      },

      {
        heading: "Important Points to Remember",

        points: [
          "Custom hooks extract reusable stateful logic into a separate function, shareable across components.",
          "They must start with 'use' — this is required for React to recognize and treat them as hooks.",
          "Each component using a custom hook gets its own independent state — they're not shared.",
          "A great signal to create a custom hook: the same useState/useEffect pattern appearing in multiple components."
        ]
      }

    ]
  },

  {
    title: "React Developer Tools",
    subtitle: "Explained Like X-Ray Glasses for Your Component Tree",

    sections: [

      {
        heading: "Think About X-Ray Vision",

        paragraphs: [
          "When something looks wrong on a webpage, you can only see the final visible result — not what's happening inside each component's state, which props are flowing where, or which component is causing a slow re-render. X-ray glasses would let you see inside each component directly, inspecting its exact current state.",

          "React Developer Tools is exactly these X-ray glasses — a browser extension that lets you inspect your component tree, see each component's current state and props, and identify performance issues."
        ]
      },

      {
        heading: "Installing React Developer Tools",

        points: [
          "Search 'React Developer Tools' in the Chrome Web Store (or Firefox Add-ons)",
          "Click 'Add to Chrome' and install — it's free and made by the React team",
          "Once installed, open DevTools (F12) — you'll see two new tabs: Components and Profiler"
        ]
      },

      {
        heading: "The Components Tab",

        paragraphs: [
          "This shows your entire component tree — just like your code's nesting structure, but live. Click any component (App → BrowserRouter → Routes → CourseDetails) and the right panel shows its current props and state values in real time.",

          "In your project: selecting CourseDetails would show you completedTopics, currentTopic, searchQuery state values, plus courseName prop — letting you verify they're correct without console.log statements."
        ]
      },

      {
        heading: "Editing State Live",

        paragraphs: [
          "You can click on any state value in the Components tab and edit it directly — change currentTopic to 5, and the component immediately updates to show topic 6 on screen, without clicking through the sidebar. Extremely useful for quickly testing different states without repeating user interactions."
        ]
      },

      {
        heading: "The Profiler Tab",

        paragraphs: [
          "Click 'Record', interact with your app, then stop — the Profiler shows exactly which components re-rendered, how long each took, and which renders were unnecessary. This is where you'd identify performance bottlenecks before applying React.memo or useCallback (covered in upcoming topics)."
        ]
      },

      {
        heading: "Important Points to Remember",

        points: [
          "React Developer Tools is a free browser extension with Components and Profiler tabs.",
          "Components tab lets you inspect live state/props of any component, and even edit them.",
          "Profiler tab records renders and helps identify performance bottlenecks.",
          "It's an essential daily tool for debugging React apps — install it before anything else."
        ]
      }

    ]
  },

  {
    title: "Fetching Data with useEffect",
    subtitle: "Explained Like Sending a Messenger and Displaying What They Bring Back",

    sections: [

      {
        heading: "Think About Sending a Messenger",

        paragraphs: [
          "When you need information from another office, you send a messenger, continue working while they travel, and update your display board once they return with the information. The board starts empty, shows 'fetching...' while the messenger is away, then shows the actual data once they're back.",

          "Fetching data in React follows this exact same sequence — the component renders first, then useEffect sends the fetch request, and when data returns, state updates trigger a re-render to display it."
        ]
      },

      {
        heading: "The Complete Pattern",

        code: `import { useState, useEffect } from "react";
import axios from "axios";

function UserProfile() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios.get("http://localhost:5000/api/user")
      .then(response => {
        setUser(response.data);
        setLoading(false);
      })
      .catch(err => {
        setError("Failed to load user data");
        setLoading(false);
      });
  }, []); // [] = fetch only once when component mounts

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;
  return <h2>Hello, {user?.name}</h2>;
}`,

        paragraphs: [
          "Three state variables work together: user for the data, loading for showing a spinner/message while fetching, error for showing something went wrong. This trinity — data/loading/error — is the universal pattern for any data-fetching component."
        ]
      },

      {
        heading: "With async/await — Cleaner Style",

        code: `useEffect(() => {
  async function fetchUser() {
    try {
      setLoading(true);
      const response = await axios.get("http://localhost:5000/api/user");
      setUser(response.data);
    } catch (err) {
      setError("Failed to load");
    } finally {
      setLoading(false);
    }
  }

  fetchUser();
}, []);`,

        paragraphs: [
          "useEffect's callback can't be async directly, so the pattern is defining an async function inside it and calling it immediately — just like you've seen in your project's handleComplete function using async/await with axios."
        ]
      },

      {
        heading: "Important Points to Remember",

        points: [
          "Always track three states: data (result), loading (waiting), error (failure).",
          "useEffect with [] fetches once on mount; add a dependency to refetch when something changes.",
          "useEffect's callback can't be directly async — define an inner async function and call it.",
          "This data/loading/error pattern is the universal standard for any component that fetches data."
        ]
      }

    ]
  },

  {
    title: "Loading & Error States",
    subtitle: "Explained Like a Restaurant Order Status Board",

    sections: [

      {
        heading: "Think About a Restaurant's Order Status Board",

        paragraphs: [
          "A good restaurant has a visible board showing your order's status — 'Order received', 'Being prepared', 'Ready for pickup'. If something goes wrong, the board shows 'Out of stock — sorry'. You're never left staring at a blank screen wondering what's happening.",

          "Loading and error states in React are exactly this status board — communicating to the user what's happening with their request, instead of showing them a blank screen or a sudden crash."
        ]
      },

      {
        heading: "The Three States Every Data-Fetching Component Needs",

        code: `const [data, setData] = useState(null);    // The food, when ready
const [loading, setLoading] = useState(true); // "Being prepared"
const [error, setError] = useState(null);     // "Out of stock"`,

        paragraphs: [
          "These three variables cover every possible situation a fetch request can be in, at any given moment — and every combination of them should show something meaningful to the user."
        ]
      },

      {
        heading: "Showing a Loading Spinner",

        code: `if (loading) {
  return (
    <div className="loading-container">
      <div className="spinner"></div>
      <p>Loading course content...</p>
    </div>
  );
}`,

        paragraphs: [
          "Rendering something completely different during loading (instead of trying to display null data) prevents crashes from accessing properties on null, and shows the user feedback that something is happening — like the restaurant board saying 'Being prepared', so you're not confused by an empty counter."
        ]
      },

      {
        heading: "Showing an Error State",

        code: `if (error) {
  return (
    <div className="error-container">
      <p>Something went wrong: {error}</p>
      <button onClick={() => window.location.reload()}>
        Try Again
      </button>
    </div>
  );
}`,

        paragraphs: [
          "Error states should be specific and actionable — telling the user what went wrong AND giving them a way to recover, like the board showing 'Out of stock — would you like to order something else?' rather than just going silent."
        ]
      },

      {
        heading: "The Render Order Pattern",

        code: `// Always check loading and error BEFORE trying to render data:
if (loading) return <LoadingSpinner />;
if (error) return <ErrorMessage message={error} />;

// Only reach here if data exists and loaded successfully:
return <div>{data.title}</div>;`,

        paragraphs: [
          "This guard pattern — check loading first, then error, then render data — is the universal order. It guarantees you never try to access data.title when data is still null, preventing the infamous 'Cannot read properties of null' crash."
        ]
      },

      {
        heading: "Important Points to Remember",

        points: [
          "Always handle three states: loading (in progress), error (failed), and success (data ready).",
          "Check loading and error BEFORE attempting to render actual data.",
          "Error states should be specific and give users a clear way to recover.",
          "Never try to access properties on data when it might still be null — guard with loading/error checks first."
        ]
      }

    ]
  },

  {
    title: "Controlled vs Uncontrolled Components",
    subtitle: "Explained Like a Managed Employee vs a Self-Managing One",

    sections: [

      {
        heading: "Think About Two Work Styles",

        paragraphs: [
          "A managed employee checks in with their manager before every action, getting approval and logging each step — the manager always knows exactly what they're doing at any moment. A self-managing employee just handles things independently, and the manager only checks in occasionally when they need a status update.",

          "Controlled and uncontrolled form components in React follow these two styles — controlled inputs check in with React state constantly, while uncontrolled inputs manage themselves and you read their value only when needed."
        ]
      },

      {
        heading: "Controlled Components — React State Is in Charge",

        code: `function ControlledInput() {
  const [value, setValue] = useState("");

  return (
    <input
      value={value}
      onChange={(e) => setValue(e.target.value)}
    />
  );
}`,

        paragraphs: [
          "React state controls the input's displayed value at all times — when the user types, onChange updates state, state updates the input display. React always knows exactly what's in the field, like the manager always knowing the employee's current task."
        ]
      },

      {
        heading: "Uncontrolled Components — DOM Is in Charge",

        code: `import { useRef } from "react";

function UncontrolledInput() {
  const inputRef = useRef(null);

  function handleSubmit() {
    console.log(inputRef.current.value); // Read value only when needed
  }

  return (
    <>
      <input ref={inputRef} type="text" />
      <button onClick={handleSubmit}>Submit</button>
    </>
  );
}`,

        paragraphs: [
          "The input manages its own value in the DOM — React doesn't track each keystroke, only reading the value when you specifically need it (on submit). Like the self-managing employee — less overhead day-to-day, but the manager only learns what they're doing when they specifically check."
        ]
      },

      {
        heading: "Which to Use When?",

        points: [
          "Controlled — almost always preferred in React for forms; enables live validation, conditional submit buttons, instant formatting, and easy resetting",
          "Uncontrolled — occasional use for simple cases (single file input), integrating with non-React libraries, or when you genuinely don't need to react to every keystroke",
          "Your MERN project's Login.jsx uses controlled inputs — the correct choice for login forms"
        ]
      },

      {
        heading: "Important Points to Remember",

        points: [
          "Controlled: React state drives the input's value; every change goes through state.",
          "Uncontrolled: DOM manages the value; React reads it only when needed, via ref.",
          "Controlled components enable live validation, easy reset, and conditional rendering based on input.",
          "Controlled is the standard React pattern — use uncontrolled only for specific edge cases."
        ]
      }

    ]
  },

  {
    title: "Component Reusability Patterns",
    subtitle: "Explained Like a Versatile Power Tool With Different Attachments",

    sections: [

      {
        heading: "Think About a Power Drill",

        paragraphs: [
          "A good power drill doesn't just drill holes — it comes with multiple attachments: a screwdriver bit, a sanding disc, a brush. The core tool is the same; swapping attachments changes its behavior completely. You don't buy a separate tool for each job.",

          "Component reusability patterns in React follow this philosophy — designing components that can be adapted for different use cases through props, children, or configuration, rather than building a separate, almost-identical component for each variation."
        ]
      },

      {
        heading: "Pattern 1 — Variant Props",

        code: `function Button({ variant = "primary", children, onClick }) {
  return (
    <button
      className={\`btn btn-\${variant}\`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

// Usage:
<Button variant="primary">Start Course</Button>
<Button variant="secondary">Go Back</Button>
<Button variant="danger">Delete</Button>`,

        paragraphs: [
          "One Button component handles all button styles via a variant prop — like swapping drill attachments. Adding a new variant means adding one CSS class, not a whole new component."
        ]
      },

      {
        heading: "Pattern 2 — Render Props / Children Function",

        code: `function CourseWrapper({ children, isLocked }) {
  return (
    <div className={isLocked ? "locked-card" : "unlocked-card"}>
      {typeof children === "function"
        ? children({ isLocked })
        : children}
    </div>
  );
}

<CourseWrapper isLocked={false}>
  {({ isLocked }) => (
    <button disabled={isLocked}>
      {isLocked ? "Locked" : "Start Course"}
    </button>
  )}
</CourseWrapper>`,

        paragraphs: [
          "Passing a function as children lets the parent control state/logic while the child controls what's actually rendered — sharing the 'what data' while leaving 'how to display it' flexible."
        ]
      },

      {
        heading: "Pattern 3 — Compound Components",

        code: `// Card and its sub-components work together as a unit:
<Card>
  <Card.Header>HTML5 Course</Card.Header>
  <Card.Body>43 topics, beginner level</Card.Body>
  <Card.Footer>
    <Button>Start</Button>
  </Card.Footer>
</Card>`,

        paragraphs: [
          "Related components grouped under one parent namespace — like a complete tool kit where each attachment is clearly part of the same set. This pattern keeps related pieces organized while allowing flexible composition."
        ]
      },

      {
        heading: "Important Points to Remember",

        points: [
          "Design components to handle variations via props, rather than making many similar components.",
          "The children prop enables flexible content insertion — same wrapper, different insides.",
          "Compound components group related pieces as sub-components of a parent namespace.",
          "Ask before building: 'Could this be one component with props, instead of three separate ones?'"
        ]
      }

    ]
  },

  {
    title: "Styling in React",
    subtitle: "Explained Like Different Ways to Get Dressed — Each With Trade-offs",

    sections: [

      {
        heading: "Think About Getting Dressed",

        paragraphs: [
          "You can dress in several ways: just throw on whatever's cleanest and available (inline styles — quick but not refined), follow a shared wardrobe rulebook your whole team uses (external CSS — consistent, professional), or wear an outfit designed specifically for your exact role (CSS Modules — scoped and conflict-free). Each approach suits different situations.",

          "Styling in React has these same several options, each with different trade-offs around scope, reusability, and flexibility."
        ]
      },

      {
        heading: "Option 1 — Plain CSS Files (What Your Project Uses)",

        code: `// App.css
.card {
  background: #f5efe6;
  border-radius: 20px;
  padding: 24px;
}

// In your component:
import "../App.css";
<div className="card">...</div>`,

        paragraphs: [
          "Simple, familiar, and exactly what your MERN project uses throughout. The trade-off: class names are global — a .card class defined in one CSS file could accidentally affect .card elements in completely unrelated components, unless you're careful with naming."
        ]
      },

      {
        heading: "Option 2 — CSS Modules (Scoped Styles)",

        code: `// Card.module.css
.card { background: #f5efe6; }

// Card.jsx
import styles from "./Card.module.css";
<div className={styles.card}>...</div>`,

        paragraphs: [
          "CSS Modules automatically make class names unique per file — .card becomes something like Card_card__x3f2y in the actual HTML, preventing any global naming conflicts. Great for larger projects where many developers write CSS."
        ]
      },

      {
        heading: "Option 3 — Inline Styles",

        code: `<div style={{ backgroundColor: "#f5efe6", borderRadius: "20px" }}>
  Content
</div>`,

        paragraphs: [
          "Double curly braces — outer for 'this is JavaScript', inner for the style object. Property names use camelCase (backgroundColor not background-color). Quick for one-off dynamic styles but hard to maintain for anything significant."
        ]
      },

      {
        heading: "Option 4 — Tailwind CSS (Very Popular in Modern React)",

        code: `<div className="bg-amber-50 rounded-2xl p-6 shadow-md">
  Content
</div>`,

        paragraphs: [
          "Tailwind provides pre-built utility classes for every CSS property — instead of writing CSS, you compose styles from small utility class names directly in JSX. No separate CSS file needed. Very popular in the React ecosystem today, though it has a learning curve of its own."
        ]
      },

      {
        heading: "Important Points to Remember",

        points: [
          "Plain CSS files are simple and already what your project uses — be careful with global class name conflicts.",
          "CSS Modules scope class names automatically, preventing conflicts in larger projects.",
          "Inline styles use camelCase property names and a JavaScript object — good for dynamic one-off styles.",
          "Tailwind CSS is a popular utility-first option in the React ecosystem, composing styles in JSX directly."
        ]
      }

    ]
  },

  {
    title: "React.memo",
    subtitle: "Explained Like a Smart Employee Who Skips Unnecessary Re-Work",

    sections: [

      {
        heading: "Think About an Efficient Employee",

        paragraphs: [
          "Every time the manager updates anything in the office — changes their own desk arrangement, answers a phone call, reorganizes something — an overly diligent employee might unnecessarily redo all their own work from scratch, even when nothing relevant to their task actually changed.",

          "A smarter employee checks: 'Did anything relevant to MY specific work change? If not, I'll keep my existing output and skip redoing it.' React.memo gives your components this exact smart-checking behavior."
        ]
      },

      {
        heading: "The Problem — Unnecessary Re-renders",

        code: `function Parent() {
  const [count, setCount] = useState(0);

  return (
    <>
      <button onClick={() => setCount(count + 1)}>Count: {count}</button>
      <CourseCard name="HTML5" topics={43} />
    </>
  );
}

function CourseCard({ name, topics }) {
  console.log("CourseCard re-rendered!");
  return <div>{name} — {topics} topics</div>;
}`,

        paragraphs: [
          "Every time the count button is clicked and Parent re-renders, CourseCard re-renders too — even though its own props (name, topics) didn't change at all. Like the overly diligent employee redoing their work simply because the manager moved their desk, even though the employee's task was completely unaffected."
        ]
      },

      {
        heading: "Wrapping With React.memo",

        code: `import { memo } from "react";

const CourseCard = memo(function CourseCard({ name, topics }) {
  console.log("CourseCard re-rendered!");
  return <div>{name} — {topics} topics</div>;
});`,

        paragraphs: [
          "Now CourseCard checks before re-rendering: 'Did my props (name, topics) actually change?' If they're exactly the same as before, React skips the re-render entirely and reuses the previous output — like the smart employee checking if their relevant inputs changed before deciding whether to redo their work."
        ]
      },

      {
        heading: "When to Actually Use React.memo",

        paragraphs: [
          "React.memo isn't needed for every component — React is already quite fast without it, and adding unnecessary memoization actually adds its own overhead (the comparison check itself has a cost). Use it specifically when: a component re-renders frequently, its props rarely change, and the render is computationally expensive (like a large list)."
        ]
      },

      {
        heading: "Important Points to Remember",

        points: [
          "React.memo wraps a component, causing it to skip re-rendering when its props haven't changed.",
          "It performs a shallow comparison of props — simple values (strings, numbers) work well.",
          "Don't apply it to every component — only where you've confirmed unnecessary re-renders are causing actual performance problems.",
          "The Profiler tab in React Developer Tools helps identify which components actually need it."
        ]
      }

    ]
  },

  {
    title: "useCallback Hook",
    subtitle: "Explained Like Giving a Teammate a Permanent Task Card Instead of Rewriting Instructions Each Time",

    sections: [

      {
        heading: "Think About Task Cards",

        paragraphs: [
          "Every morning, instead of rewriting the same task instructions fresh on a new piece of paper for your teammate, you hand them a laminated, permanent task card — same instructions, but it's the exact same physical card each time, not a newly created copy.",

          "useCallback does exactly this for functions in React — instead of creating a brand new function object on every render, it returns the same function reference, preventing child components wrapped in React.memo from seeing a 'changed' prop and unnecessarily re-rendering."
        ]
      },

      {
        heading: "The Problem Without useCallback",

        code: `function Parent() {
  const [count, setCount] = useState(0);

  // New function created on EVERY render — new reference each time
  function handleStart() {
    console.log("Course started");
  }

  return (
    <>
      <button onClick={() => setCount(count + 1)}>
        Count: {count}
      </button>
      <CourseCard onStart={handleStart} />
    </>
  );
}

const CourseCard = memo(function CourseCard({ onStart }) {
  console.log("CourseCard rendered!");
  return <button onClick={onStart}>Start</button>;
});`,

        paragraphs: [
          "Even with React.memo, CourseCard still re-renders on every count click — because handleStart is a new function object every render, React.memo's shallow comparison sees it as a 'changed' prop (like receiving a fresh piece of paper with the same instructions — it looks new even if the content is identical)."
        ]
      },

      {
        heading: "The Fix — useCallback",

        code: `function Parent() {
  const [count, setCount] = useState(0);

  // Same function reference preserved across renders
  const handleStart = useCallback(() => {
    console.log("Course started");
  }, []); // [] = recreate only if dependencies change

  return (
    <>
      <button onClick={() => setCount(count + 1)}>
        Count: {count}
      </button>
      <CourseCard onStart={handleStart} />
    </>
  );
}`,

        paragraphs: [
          "Now handleStart is the same laminated card every render — React.memo's comparison sees the same reference, CourseCard skips re-rendering entirely when only count changes."
        ]
      },

      {
        heading: "The Dependency Array — Same Logic as useEffect",

        code: `const handleSearch = useCallback(() => {
  fetchResults(searchQuery); // uses searchQuery
}, [searchQuery]); // recreate only when searchQuery changes`,

        paragraphs: [
          "Just like useEffect's dependency array — list every value the function uses inside it, so useCallback knows when a genuinely new function is actually needed (when dependencies change), versus when the same old card is still perfectly valid."
        ]
      },

      {
        heading: "When to Actually Use useCallback",

        paragraphs: [
          "useCallback adds its own overhead — the dependency comparison on every render. Only use it when: a function is passed as a prop to a child wrapped in React.memo, and that child is actually causing performance problems. Don't apply it everywhere by default."
        ]
      },

      {
        heading: "Important Points to Remember",

        points: [
          "useCallback memoizes a function, returning the same reference across renders unless dependencies change.",
          "Without it, functions passed as props create new references every render, breaking React.memo.",
          "Its dependency array works exactly like useEffect's — list every value the function uses.",
          "Only apply it where you've confirmed unnecessary re-renders are actually hurting performance."
        ]
      }

    ]
  },

  {
    title: "useMemo Hook",
    subtitle: "Explained Like Caching an Exam Answer Instead of Recalculating Every Time",

    sections: [

      {
        heading: "Think About Solving the Same Math Problem Repeatedly",

        paragraphs: [
          "Imagine a student who has already solved a complex calculation — instead of solving it from scratch every time someone asks, they write the answer in a notebook and refer back to it. The calculation only needs to be redone if the input numbers change.",

          "useMemo does exactly this for expensive calculations in React — caching a computed result and only recalculating when specific dependencies change, rather than recalculating on every single render."
        ]
      },

      {
        heading: "The Problem — Expensive Recalculation on Every Render",

        code: `function CourseStats({ courses }) {
  // This filters and calculates on EVERY render, even unrelated ones
  const completedCourses = courses.filter(c => c.progress === 100);
  const totalTopics = courses.reduce((sum, c) => sum + c.topics, 0);

  return (
    <div>
      <p>Completed: {completedCourses.length}</p>
      <p>Total Topics: {totalTopics}</p>
    </div>
  );
}`,

        paragraphs: [
          "If this component re-renders frequently (say, due to a parent's unrelated state change), those filter and reduce operations run every time — even when courses hasn't changed at all."
        ]
      },

      {
        heading: "The Fix — useMemo",

        code: `import { useMemo } from "react";

function CourseStats({ courses }) {
  const completedCourses = useMemo(
    () => courses.filter(c => c.progress === 100),
    [courses] // Only recalculate when courses changes
  );

  const totalTopics = useMemo(
    () => courses.reduce((sum, c) => sum + c.topics, 0),
    [courses]
  );

  return (
    <div>
      <p>Completed: {completedCourses.length}</p>
      <p>Total Topics: {totalTopics}</p>
    </div>
  );
}`,

        paragraphs: [
          "Now the filter and reduce only run when courses actually changes — exactly like the student only redoing the calculation when the input numbers change, referring to the cached answer otherwise."
        ]
      },

      {
        heading: "useMemo vs useCallback — The Key Difference",

        points: [
          "useMemo — memoizes a COMPUTED VALUE (the result of running a function)",
          "useCallback — memoizes a FUNCTION ITSELF (its reference, not its result)",
          "useMemo(() => expensiveCalc(), [dep]) ≈ useCallback(expensiveCalc, [dep]) but for a value vs a function"
        ]
      },

      {
        heading: "Important Points to Remember",

        points: [
          "useMemo caches a computed value, recalculating only when dependencies change.",
          "Use it for genuinely expensive computations — complex filters, sorts, or aggregations on large datasets.",
          "Don't apply it to simple calculations — the memoization overhead costs more than the calculation itself.",
          "useMemo returns a value; useCallback returns a function — that's the core difference."
        ]
      }

    ]
  },

  {
    title: "Code Splitting & Lazy Loading",
    subtitle: "Explained Like a Restaurant Serving Dishes One at a Time Instead of All at Once",

    sections: [

      {
        heading: "Think About a Restaurant Order",

        paragraphs: [
          "A restaurant doesn't bring every dish you've ordered simultaneously the moment you sit down — it brings the starter first, then the main course when you're ready for it, then dessert after that. You don't wait for all dishes to be fully prepared before eating anything.",

          "Code splitting and lazy loading work exactly this way — instead of forcing the browser to download your entire application at once before showing anything, you split it into smaller chunks, loading each part only when it's actually needed."
        ]
      },

      {
        heading: "The Problem — One Giant Bundle",

        paragraphs: [
          "By default, Vite bundles your entire React app into one JavaScript file — when a user visits your login page, they download code for CourseDetails, MyCourses, and every other page too, even if they never visit those pages. For small apps this is fine, but as your MERN platform grows with more courses and pages, this initial load gets noticeably slower."
        ]
      },

      {
        heading: "React.lazy — Load a Component Only When Needed",

        code: `import { lazy, Suspense } from "react";

// Instead of: import CourseDetails from "./pages/CourseDetails";
const CourseDetails = lazy(() => import("./pages/CourseDetails"));
const MyCourses = lazy(() => import("./pages/MyCourses"));`,

        paragraphs: [
          "lazy() wraps a dynamic import — CourseDetails's code is only downloaded the first time someone actually navigates to a course page, not upfront with everything else."
        ]
      },

      {
        heading: "Suspense — Showing Something While Loading",

        code: `function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<div>Loading page...</div>}>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/mycourses" element={<MyCourses />} />
          <Route path="/course/:courseName" element={<CourseDetails />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}`,

        paragraphs: [
          "Suspense wraps the lazy-loaded components and shows fallback (any JSX — a spinner, a loading message) while that component's code is downloading, exactly like the restaurant bringing your starter while the main course is still being prepared."
        ]
      },

      {
        heading: "Important Points to Remember",

        points: [
          "Code splitting divides your app bundle into smaller chunks, loaded only when needed.",
          "React.lazy() dynamically imports a component, deferring its download until first use.",
          "Suspense wraps lazy components and displays a fallback UI while they're loading.",
          "Start with lazy-loading route-level components (pages) first — they give the biggest performance gains."
        ]
      }

    ]
  },

  {
    title: "React with LocalStorage",
    subtitle: "Explained Like Saving Your Game Progress Automatically",

    sections: [

      {
        heading: "Think About a Video Game's Auto-Save",

        paragraphs: [
          "A good video game automatically saves your progress at key moments — when you complete a level, earn a badge, or reach a checkpoint. When you restart, it picks up exactly where you left off, not from the beginning. The save exists outside the game itself, on the device.",

          "Using localStorage in React follows this same pattern — saving important state to the browser's persistent storage at key moments, and restoring it when the component mounts, so the user's experience persists across page reloads and browser restarts."
        ]
      },

      {
        heading: "You've Already Been Doing This",

        paragraphs: [
          "Your entire CourseDetails.jsx progress system uses localStorage — saving completedTopics and currentTopic on every 'Mark as Complete' click, reading them back on every mount. This topic just formalizes the patterns you've been using."
        ]
      },

      {
        heading: "The Save-and-Restore Pattern",

        code: `import { useState, useEffect } from "react";

function ThemeToggle() {
  // Restore from localStorage on first render:
  const [isDark, setIsDark] = useState(() => {
    const saved = localStorage.getItem("theme");
    return saved === "dark";
  });

  // Save to localStorage whenever isDark changes:
  useEffect(() => {
    localStorage.setItem("theme", isDark ? "dark" : "light");
  }, [isDark]);

  return (
    <button onClick={() => setIsDark(!isDark)}>
      {isDark ? "Switch to Light" : "Switch to Dark"}
    </button>
  );
}`,

        paragraphs: [
          "Two pieces working together: useState with a lazy initializer (the function form) reads from localStorage once on mount for the initial value, and useEffect saves to localStorage whenever the state changes — exactly like game auto-save triggering at checkpoints."
        ]
      },

      {
        heading: "Extracting Into a Custom Hook",

        code: `function useLocalStorage(key, initialValue) {
  const [value, setValue] = useState(() => {
    const saved = localStorage.getItem(key);
    return saved ? JSON.parse(saved) : initialValue;
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  return [value, setValue];
}

// Usage — works exactly like useState, but persists automatically:
const [completedTopics, setCompletedTopics] = useLocalStorage(
  "html5CompletedTopics",
  []
);`,

        paragraphs: [
          "This reusable custom hook (from 'Custom Hooks') makes any state auto-persist to localStorage — replacing the manual localStorage.getItem and setItem calls scattered across your CourseDetails.jsx with a clean, reusable abstraction."
        ]
      },

      {
        heading: "Important Points to Remember",

        points: [
          "Combine useState + useEffect to restore from and save to localStorage around a state variable.",
          "useState's lazy initializer form (passing a function) reads localStorage only once on mount, not every render.",
          "Always JSON.stringify before saving arrays/objects; JSON.parse when reading them back.",
          "A useLocalStorage custom hook cleanly packages this pattern for reuse across components."
        ]
      }

    ]
  },

  {
    title: "React with Axios",
    subtitle: "Explained Like Having a Dedicated Messenger Service With Extra Features",

    sections: [

      {
        heading: "Think About a Premium Courier Service",

        paragraphs: [
          "The standard postal service (fetch API, from 'Fetch API' in the JS course) gets the job done — but a premium courier service (axios) adds conveniences: automatic package labeling (JSON headers), better error reporting when delivery fails, the ability to cancel mid-delivery, and easy address-book management (base URLs and interceptors).",

          "Axios is a popular library that wraps fetch with these exact conveniences — cleaner syntax, automatic JSON handling, and better error messages, which is why your MERN project already uses it throughout."
        ]
      },

      {
        heading: "axios Already In Your Project",

        code: `// From your Login.jsx — you're already using axios:
import axios from "axios";

const response = await axios.post("http://localhost:5000/login", {
  email: loginEmail,
  password: loginPassword,
});

localStorage.setItem("token", response.data.token);`,

        paragraphs: [
          "This is real axios in your own code — .post() sends a POST request, automatically serializing the data as JSON, and automatically parsing the JSON response back. No manual JSON.stringify or response.json() needed, unlike raw fetch."
        ]
      },

      {
        heading: "Setting Up an axios Instance — Base URL and Headers",

        code: `// api.js — create once, import everywhere
import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:5000",
});

// Automatically attach JWT token to every request:
api.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) {
    config.headers.Authorization = token;
  }
  return config;
});

export default api;`,

        paragraphs: [
          "An axios instance with a base URL and interceptor lets every API call automatically include the JWT token from localStorage — instead of manually adding Authorization headers in every single axios call across your components, like setting the return address and courier insurance policy once in the account settings, applied automatically to every package."
        ]
      },

      {
        heading: "Using the Instance",

        code: `import api from "../api";

// Clean — no need to repeat the base URL or token header:
const response = await api.get("/api/progress/html/userId123");
const result = await api.put("/api/progress/html/userId123", data);`,

        paragraphs: [
          "Instead of typing http://localhost:5000 and the Authorization header in every call across CourseDetails, Home, and other components, the shared api instance handles it automatically."
        ]
      },

      {
        heading: "Important Points to Remember",

        points: [
          "Axios automatically handles JSON serialization and parsing — no JSON.stringify or .json() needed.",
          "An axios instance (axios.create) sets a base URL and common headers once for all requests.",
          "Interceptors automatically modify every request/response — perfect for attaching JWT tokens.",
          "You've been using axios throughout your project — this topic explains the setup patterns behind it."
        ]
      }

    ]
  },

  {
    title: "Protected Routes",
    subtitle: "Explained Like a Keycard-Secured Office Floor",

    sections: [

      {
        heading: "Think About a Secure Office Building",

        paragraphs: [
          "A secure office building lets anyone into the lobby (the login page), but to reach the actual work floors (dashboard, employee-only areas), you need to scan a valid keycard. Without it, you're redirected back to reception.",

          "Protected routes in React work exactly this way — pages like /home, /mycourses, and /course/:courseName should only be accessible to logged-in users; anyone without a valid token gets redirected back to the login page."
        ]
      },

      {
        heading: "You Already Have a ProtectedRoute Component",

        code: `// Your existing ProtectedRoute.jsx (from your project):
import { Navigate } from "react-router-dom";

function ProtectedRoute({ children }) {
  const token = localStorage.getItem("token");

  if (!token) {
    return <Navigate to="/login" replace />;
  }

  return children;
}

export default ProtectedRoute;`,

        paragraphs: [
          "This is a ProtectedRoute wrapper — it checks for a JWT token in localStorage, and if none exists (user isn't logged in), it redirects to /login using React Router's Navigate component. If a token exists, it renders whatever children were passed to it."
        ]
      },

      {
        heading: "Using ProtectedRoute in App.jsx",

        code: `// Your existing App.jsx already does this:
<Route
  path="/home"
  element={
    <ProtectedRoute>
      <Home />
    </ProtectedRoute>
  }
/>

<Route path="/mycourses" element={<MyCourses />} />
// ↑ This one isn't protected yet — something to consider!`,

        paragraphs: [
          "Wrapping a route's element in ProtectedRoute adds the keycard check. Notice /mycourses in your current App.jsx isn't protected — a user who manually types that URL could access it without being logged in. Wrapping it with ProtectedRoute would fix that."
        ]
      },

      {
        heading: "Improving the Token Check",

        paragraphs: [
          "Simply checking if a token exists in localStorage isn't fully secure — a user could manually store any random string as 'token' and pass the check. A more robust approach verifies the token's expiry by decoding the JWT (using a library like jwt-decode) and checking if it's still valid — but for a learning platform like yours, the current approach is completely appropriate."
        ]
      },

      {
        heading: "Important Points to Remember",

        points: [
          "Protected routes check authentication before rendering, redirecting unauthenticated users to login.",
          "A ProtectedRoute wrapper component handles this cleanly, reusable for any route that needs protection.",
          "React Router's <Navigate> component performs the programmatic redirect inside JSX.",
          "Consider protecting all authenticated pages consistently — /mycourses, /course/:courseName, etc."
        ]
      }

    ]
  },

  {
    title: "Deploying a React App",
    subtitle: "Explained Like Moving From a Practice Kitchen to an Actual Restaurant",

    sections: [

      {
        heading: "Think About Opening a Restaurant",

        paragraphs: [
          "You've been cooking in a practice kitchen (localhost:5173 — your local dev server), perfecting your recipes. When you're ready for real customers, you move to an actual restaurant location — a proper address where anyone can find you, not just people on your local network.",

          "Deploying a React app is exactly this move — taking your local development project and publishing it to a real URL accessible to anyone on the internet."
        ]
      },

      {
        heading: "Step 1 — Build for Production",

        code: `npm run build`,

        paragraphs: [
          "This creates a dist/ folder containing optimized, minified versions of all your files — HTML, CSS, JavaScript — compressed and ready for production. Unlike the dev server (which is slow and includes debugging tools), this build is lean and fast, exactly what you'd serve to real users."
        ]
      },

      {
        heading: "Option 1 — Vercel (Easiest for React)",

        points: [
          "Visit vercel.com, sign in with your GitHub account",
          "Click 'New Project' → import your GitHub repository",
          "Vercel automatically detects it's a Vite/React project, sets up the build command and output folder",
          "Click 'Deploy' — your app gets a live URL (like yourproject.vercel.app) in minutes",
          "Every push to your GitHub main branch automatically re-deploys — like the restaurant's menu automatically updating whenever you change a recipe"
        ]
      },

      {
        heading: "Option 2 — Netlify (Also Very Popular)",

        points: [
          "Visit netlify.com, connect your GitHub repository",
          "Set build command: npm run build, publish directory: dist",
          "Deploy — get a live URL instantly",
          "Also supports automatic re-deployment on GitHub push"
        ]
      },

      {
        heading: "Important: Environment Variables on Production",

        code: `// .env (local — never committed, from .gitignore topic):
VITE_API_URL=http://localhost:5000

// In production, set this in Vercel/Netlify's dashboard:
VITE_API_URL=https://your-backend-api.com

// In your code:
const response = await axios.get(\`\${import.meta.env.VITE_API_URL}/login\`);`,

        paragraphs: [
          "Your API URL changes between local development and production — using environment variables (accessed via import.meta.env.VITE_* in Vite) keeps this flexible, without hardcoding localhost URLs that break in production."
        ]
      },

      {
        heading: "Important Points to Remember",

        points: [
          "npm run build creates an optimized production build in the dist/ folder.",
          "Vercel and Netlify both offer free hosting with automatic GitHub deployment — Vercel is particularly popular for React.",
          "Set production environment variables (like API URLs) in the hosting platform's dashboard, not in code.",
          "Your backend (Node.js/Express) needs to be deployed separately — platforms like Railway or Render work well."
        ]
      }

    ]
  },

  {
    title: "React Best Practices",
    subtitle: "Explained Like Professional Kitchen Rules That Prevent Chaos",

    sections: [

      {
        heading: "Think About a Professional Kitchen's Standards",

        paragraphs: [
          "A professional kitchen has clear rules that aren't arbitrary — mise en place before cooking, clean as you go, label everything with dates, keep raw and cooked food separate. These rules exist because ignoring them causes real problems: slower service, contamination, confusion, wasted effort.",

          "React best practices work exactly the same way — they're not style preferences, but patterns that prevent real bugs, improve performance, and make your codebase maintainable as it grows."
        ]
      },

      {
        heading: "Practice 1 — Keep Components Small and Focused",

        paragraphs: [
          "A component that does too many things (renders a form, fetches its own data, manages complex state, AND handles routing) becomes hard to test, debug, and reuse. If a component's function description needs the word 'and' multiple times, consider splitting it — just like a chef who both cooks AND manages inventory AND handles deliveries is less effective than three specialists."
        ]
      },

      {
        heading: "Practice 2 — Name Things Clearly",

        code: `// ❌ Unclear names
const [d, setD] = useState(null);
function h() { ... }

// ✅ Self-documenting names
const [courseData, setCourseData] = useState(null);
function handleMarkComplete() { ... }`,

        paragraphs: [
          "Code is read far more often than it's written — self-documenting names mean you understand what something does at a glance, without needing to trace through the entire logic. Your future self (and teammates) will thank you."
        ]
      },

      {
        heading: "Practice 3 — Don't Mutate State Directly",

        code: `// ❌ Direct mutation — React won't detect this change
completedTopics.push(currentTopic);

// ✅ Always create a new array/object
setCompletedTopics([...completedTopics, currentTopic]);`,

        paragraphs: [
          "React detects state changes by comparing references — directly mutating the existing array means the reference stays the same, React doesn't notice the change, and the UI doesn't update. Always create a new array or object when updating state containing arrays or objects."
        ]
      },

      {
        heading: "Practice 4 — Organize Files Consistently",

        code: `src/
├── components/     // Reusable UI pieces (Sidebar, Button, Card)
├── pages/          // Route-level components (Home, Login, MyCourses)
├── hooks/          // Custom hooks (useFetch, useLocalStorage)
├── data/           // Static data (htmlLessons, cssLessons)
├── utils/          // Helper functions (slugify, formatDate)
└── App.jsx`,

        paragraphs: [
          "This is exactly your project's current structure — and it's correct! A consistent, predictable organization means you always know where to find and add things, exactly like a kitchen where every ingredient and tool has a fixed, labeled spot."
        ]
      },

      {
        heading: "Important Points to Remember",

        points: [
          "Keep components small and single-purpose — if 'and' appears in its description, consider splitting it.",
          "Never mutate state directly — always create new arrays/objects when updating state.",
          "Use clear, self-documenting names for state, functions, and components.",
          "Maintain consistent file organization — your project's current structure is already well-organized."
        ]
      }

    ]
  },

  {
    title: "React Project Architecture",
    subtitle: "Explained Like the Blueprint of a Well-Designed Building",

    sections: [

      {
        heading: "Think About Building Architecture",

        paragraphs: [
          "A well-architected building has a clear plan before construction — where load-bearing walls go, how plumbing routes connect, where electrical panels sit. Without this plan, each contractor builds their section without considering how it connects to others, creating a building that's functional but chaotic to maintain or extend.",

          "React project architecture is this building plan — deliberate decisions about how components, state, data, and routing fit together, made early to prevent a codebase that works today but becomes painful to maintain tomorrow."
        ]
      },

      {
        heading: "Layer 1 — Component Architecture",

        points: [
          "Pages (route-level) — components mapped to routes, like Home, MyCourses, CourseDetails",
          "Layout components — wrappers shared across pages, like a PageLayout wrapping Sidebar + content area",
          "Feature components — medium-sized pieces specific to one feature, like CourseCard, TopicItem",
          "UI components — small, generic, reusable pieces, like Button, Input, Badge, Spinner"
        ]
      },

      {
        heading: "Layer 2 — State Architecture",

        code: `// Three levels of state, each at the right place:

// 1. Local state — only this component needs it
const [searchQuery, setSearchQuery] = useState("");

// 2. Lifted state — shared between siblings via parent
// (parent holds it, passes down to both children)

// 3. Global state (Context) — needed across many unrelated components
// user, theme, authentication status`,

        paragraphs: [
          "State at the wrong level causes prop drilling (too high) or sibling communication problems (too low). Your project already follows this naturally — searchQuery lives in CourseDetails (local), user lives in localStorage accessed directly (effectively global)."
        ]
      },

      {
        heading: "Layer 3 — Data Flow Architecture",

        code: `// Your project's clean data flow:
src/data/htmlLessons.js     // Static lesson data
    ↓ imported by
src/pages/CourseDetails.jsx // Reads courseName from URL
    ↓ passes to
JSX rendering               // Displays correct lesson`,

        paragraphs: [
          "Clean, one-directional data flow — data comes from one source, flows through components predictably. Your project already follows this correctly: lesson data in /data files → imported by CourseDetails → rendered in JSX, never flowing backwards."
        ]
      },

      {
        heading: "Your Project's Architecture — Already Correct",

        paragraphs: [
          "Look at your MERN learning platform: pages/ for route components, components/ for Sidebar, data/ for lesson content, App.jsx for routing with ProtectedRoute, axios for API calls, JWT in localStorage for auth. This is genuinely good React architecture — not accidental, but the result of decisions made throughout this course. The patterns you've been using are the same ones used in production React applications."
        ]
      },

      {
        heading: "Important Points to Remember",

        points: [
          "Layer components by responsibility: pages, layouts, features, and generic UI pieces.",
          "Place state at the lowest level where it's needed — local first, lift up only when siblings need to share.",
          "Data should flow one direction: from source through components to UI, never backwards.",
          "Your existing MERN project already implements correct React architecture — trust and extend it."
        ]
      }

    ]
  }

];