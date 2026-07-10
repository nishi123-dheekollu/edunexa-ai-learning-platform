export const nodeTopics = [
  "What is Node.js?",
  "How Node.js Works - Event Loop",
  "Setting Up Node.js",
  "Your First Node.js Program",
  "Node.js Modules System",
  "Built-in Modules - fs",
  "Built-in Modules - path",
  "Built-in Modules - os",
  "npm & package.json",
  "Installing & Using Packages",
  "nodemon & Development Setup",
  "What is Express.js?",
  "Setting Up Express Server",
  "Routing Basics",
  "Route Parameters & Query Strings",
  "Middleware Basics",
  "Built-in Middleware",
  "Custom Middleware",
  "Third-Party Middleware",
  "Handling POST Requests",
  "REST API Design Principles",
  "CRUD Operations",
  "Express Router",
  "Error Handling in Express",
  "Environment Variables & dotenv",
  "Connecting to MongoDB",
  "Mongoose Basics",
  "Mongoose Schema & Model",
  "CRUD with Mongoose",
  "Data Validation with Mongoose",
  "JWT Authentication",
  "Password Hashing with bcrypt",
  "Protected Routes in Express",
  "CORS",
  "Deploying Node.js App"
];

export const nodeLessons = [

  {
    title: "What is Node.js?",
    subtitle: "Explained Like Taking a Restaurant Kitchen Outside the Restaurant",

    sections: [

      {
        heading: "Think About a Restaurant Kitchen",

        paragraphs: [
          "A restaurant kitchen's recipes and cooking techniques are incredibly useful — but traditionally, they only work inside the restaurant building itself. Imagine if you could pick up those exact same cooking skills and use them in a food truck, a catering event, or a home kitchen, anywhere at all.",

          "Node.js does exactly this for JavaScript — JavaScript was originally designed to run only inside browsers. Node.js took that same JavaScript language and made it runnable anywhere: on servers, your laptop's terminal, cloud computers, anywhere, no browser needed."
        ]
      },

      {
        heading: "What Node.js Actually Is",

        paragraphs: [
          "Node.js is a JavaScript runtime — a program that can read and execute JavaScript code outside a browser. It's built on Chrome's V8 JavaScript engine (the same engine that runs JavaScript in Chrome), but packaged so it can run as a standalone program on any computer.",

          "This is why your MERN project's backend (server.js) is written in JavaScript — because Node.js makes that possible. Without Node.js, you'd have to learn a completely different language (like Python or Java) just for the backend."
        ]
      },

      {
        heading: "What Node.js Is Used For",

        points: [
          "Building web servers and APIs (exactly what your server.js does)",
          "Command-line tools (npm itself is a Node.js program)",
          "Real-time applications (chat apps, live notifications)",
          "File system operations (reading, writing, processing files)",
          "Anything where JavaScript running outside a browser is useful"
        ]
      },

      {
        heading: "The MERN Connection",

        paragraphs: [
          "In your MERN learning platform, Node.js is the 'N' — it's what runs your Express server, processes login requests, connects to MongoDB, and sends JWT tokens back to your React frontend. Every time your frontend makes an axios call to http://localhost:5000, Node.js is what's listening and responding on the other end."
        ]
      },

      {
        heading: "Important Points to Remember",

        points: [
          "Node.js is a JavaScript runtime that runs JavaScript outside the browser.",
          "It's built on Chrome's V8 engine, the same engine that runs JS in Chrome.",
          "It enables using JavaScript for backend/server-side code, not just frontend.",
          "Your existing server.js already runs on Node.js — this course explains why and how."
        ]
      }

    ]
  },

  {
    title: "How Node.js Works - Event Loop",
    subtitle: "Explained Like a Single Chef Managing Multiple Orders Without Getting Stuck",

    sections: [

      {
        heading: "Think About a Smart Single Chef",

        paragraphs: [
          "A restaurant with one chef doesn't have to be slow — a smart chef doesn't stand frozen waiting for water to boil. They put the pot on, then immediately start chopping vegetables, then check on the pasta, then plate another dish — continuously moving between tasks, picking up each one exactly when it's ready to be worked on.",

          "Node.js's event loop works exactly this way — it's single-threaded (one chef), but instead of blocking and waiting for slow operations (like reading a file or waiting for a database response), it delegates those tasks and immediately moves on to handle other things, coming back when the slow task signals it's done."
        ]
      },

      {
        heading: "The Problem Node.js Solves",

        paragraphs: [
          "Traditional server approaches (like older Java or PHP setups) often created a new thread (a new chef) for every single incoming request — effective but expensive in memory and resources. Node.js handles many concurrent requests with one thread by never blocking on slow I/O operations, like the smart chef handling 20 tables without needing 20 separate chefs."
        ]
      },

      {
        heading: "How It Actually Works",

        points: [
          "Step 1 — A request comes in (a new order arrives)",
          "Step 2 — If it needs something slow (read a file, query a database), Node.js starts that task and immediately moves on (chef puts water to boil and turns to the next order)",
          "Step 3 — When the slow task finishes, it signals the event loop with a callback (the timer rings)",
          "Step 4 — The event loop picks up that callback and handles the result (chef checks the pot, finishes that dish)"
        ]
      },

      {
        heading: "Why This Matters for Your Server",

        paragraphs: [
          "In your server.js, when a login request comes in and you call User.findOne({ email }) — a MongoDB query that might take 50-100ms — Node.js doesn't freeze and block all other requests during that wait. It registers the callback, handles other incoming requests in the meantime, and processes the MongoDB result exactly when it arrives. This is why your single server.js file can handle many users simultaneously."
        ]
      },

      {
        heading: "Important Points to Remember",

        points: [
          "Node.js is single-threaded but non-blocking — it never freezes waiting for slow I/O operations.",
          "The event loop continuously checks for completed async tasks and runs their callbacks.",
          "This makes Node.js very efficient for I/O-heavy applications (APIs, databases, file operations).",
          "Your server.js's async/await database calls rely on this event loop working behind the scenes."
        ]
      }

    ]
  },

  {
    title: "Setting Up Node.js",
    subtitle: "Explained Like Installing Your Kitchen Equipment Before Cooking",

    sections: [

      {
        heading: "Think About Equipping a New Kitchen",

        paragraphs: [
          "Before cooking anything, a new kitchen needs its equipment installed — the oven, the refrigerator, the knives. Once installed, they're available for every recipe you'll ever cook in that kitchen, without needing to reinstall them for each meal.",

          "Installing Node.js is exactly this one-time equipment setup — install it once on your computer, and every Node.js project you ever create can use it, without reinstalling per project."
        ]
      },

      {
        heading: "Installing Node.js",

        points: [
          "Visit nodejs.org — you'll see two versions: LTS (Long Term Support) and Current",
          "Always download LTS for real projects — it's more stable and supported for longer",
          "Install it like any normal application (Windows installer, Mac .pkg, or Linux package manager)",
          "This installs both Node.js AND npm (Node Package Manager) together automatically"
        ]
      },

      {
        heading: "Verifying the Installation",

        code: `node --version
npm --version`,

        paragraphs: [
          "Run these in your terminal — they should print version numbers like 'v20.11.0' and '10.2.4'. If you see version numbers, both Node.js and npm are installed and ready. If you get 'command not found', the installation didn't complete correctly."
        ]
      },

      {
        heading: "You Already Have Node.js Installed!",

        paragraphs: [
          "Since your MERN project's backend is already running (server.js with Express, MongoDB connection, JWT routes), Node.js is definitely already installed on your computer — you used it every time you ran node server.js or npm install or npm run dev throughout this project. This topic is mainly for understanding what you're working with."
        ]
      },

      {
        heading: "NVM — Managing Multiple Node Versions (Bonus)",

        paragraphs: [
          "As you work on multiple projects, you might need different Node.js versions for different projects. NVM (Node Version Manager) lets you install and switch between multiple Node.js versions easily — nvm install 20, nvm use 18, etc. Not essential to start, but worth knowing exists when you encounter version mismatch issues later."
        ]
      },

      {
        heading: "Important Points to Remember",

        points: [
          "Download the LTS version from nodejs.org for stability in real projects.",
          "Installing Node.js automatically installs npm alongside it.",
          "Verify with node --version and npm --version in your terminal.",
          "You already have Node.js installed — your existing MERN backend uses it."
        ]
      }

    ]
  },

  {
    title: "Your First Node.js Program",
    subtitle: "Explained Like Cooking Your First Dish Outside the Restaurant",

    sections: [

      {
        heading: "Think About Cooking at Home for the First Time",

        paragraphs: [
          "After training in a restaurant kitchen, cooking at home for the first time feels slightly different — same skills, same ingredients, but no customers, no restaurant infrastructure, just you and a pan. The first thing you'd make is probably something simple, just to confirm the home kitchen works the same way.",

          "Writing your first Node.js program is exactly this — a simple script confirming that JavaScript runs perfectly outside the browser, with the same syntax you already know."
        ]
      },

      {
        heading: "Creating and Running Your First File",

        code: `// Create a file called app.js and write this:
console.log("Hello from Node.js!");
console.log("Node version:", process.version);`,

        paragraphs: [
          "Save this as app.js anywhere on your computer, open your terminal in that folder, and run node app.js — you'll see both messages printed in the terminal. No browser, no HTML file needed — just Node.js reading and executing your JavaScript directly."
        ]
      },

      {
        heading: "Running It",

        code: `node app.js

// Output:
// Hello from Node.js!
// Node version: v20.11.0`
      },

      {
        heading: "Node.js vs Browser JavaScript — What's Different",

        points: [
          "No window or document object — those are browser-specific, they don't exist in Node.js",
          "No DOM — Node.js has no concept of HTML elements to manipulate",
          "New globals instead: process (info about the running Node process), __dirname (current folder path), __filename (current file path)",
          "Access to the file system, operating system, network — things the browser deliberately blocks for security"
        ]
      },

      {
        heading: "The process Object",

        code: `console.log(process.version);      // Node.js version
console.log(process.platform);     // "win32", "darwin", "linux"
console.log(process.env.NODE_ENV); // environment variable
console.log(__dirname);            // full path to current folder
console.log(__filename);           // full path to current file`,

        paragraphs: [
          "process is Node.js's built-in global object for information about the current running program — like a dashboard showing the kitchen's current status. You've already used process.env.MONGO_URI and process.env.JWT_SECRET in your server.js — those come from this same process.env object."
        ]
      },

      {
        heading: "Important Points to Remember",

        points: [
          "Run a Node.js file with node filename.js in the terminal.",
          "No window, document, or DOM in Node.js — these are browser-only.",
          "process, __dirname, and __filename are Node.js-specific globals.",
          "process.env is how Node.js reads environment variables — used in your server.js already."
        ]
      }

    ]
  },

  {
    title: "Node.js Modules System",
    subtitle: "Explained Like Specialized Tool Kits You Bring In When Needed",

    sections: [

      {
        heading: "Think About a Professional Tool Collection",

        paragraphs: [
          "A professional craftsman doesn't carry every tool they own to every job site — they keep specialized kits (electrical kit, plumbing kit, carpentry kit) in separate bags, bringing only the specific kit relevant to each job. This keeps things organized and manageable.",

          "Node.js modules work exactly this way — code organized into separate files (modules), each focused on one job, brought in only where they're actually needed using require() or import."
        ]
      },

      {
        heading: "Two Module Systems in Node.js",

        paragraphs: [
          "Node.js has two module systems: the older CommonJS (CJS) system using require() and module.exports, and the newer ES Modules (ESM) system using import and export (the same syntax you've been using in your React frontend). Both work in Node.js, but CommonJS is still more common in backend Node.js code you'll encounter."
        ]
      },

      {
        heading: "CommonJS — require and module.exports",

        code: `// math.js — a module that exports some functions
function add(a, b) {
  return a + b;
}

function multiply(a, b) {
  return a * b;
}

module.exports = { add, multiply };

// app.js — importing and using that module
const math = require("./math");

console.log(math.add(5, 3));       // 8
console.log(math.multiply(4, 6));  // 24`,

        paragraphs: [
          "module.exports packages what this module shares with the world. require('./math') brings in that package — the './' means it's a local file in the same folder, not a built-in or installed package."
        ]
      },

      {
        heading: "ES Modules — import and export (Modern Style)",

        code: `// math.js
export function add(a, b) { return a + b; }
export function multiply(a, b) { return a * b; }

// app.js
import { add, multiply } from "./math.js";
console.log(add(5, 3)); // 8`,

        paragraphs: [
          "This is the same syntax you've been using in React — import/export. To use ESM in Node.js, either name files .mjs or add \"type\": \"module\" to your package.json. Your current server.js uses CommonJS (require), which is why you see const express = require('express') instead of import."
        ]
      },

      {
        heading: "Three Types of Modules",

        points: [
          "Built-in modules — come with Node.js, no installation needed (fs, path, os — covered in next topics)",
          "Local modules — your own .js files, imported with relative paths (./math, ../utils/helper)",
          "Third-party modules — installed via npm, imported by name (express, mongoose, bcrypt, jsonwebtoken)"
        ]
      },

      {
        heading: "Important Points to Remember",

        points: [
          "CommonJS uses require() and module.exports — most common in backend Node.js code.",
          "ES Modules use import/export — same syntax as React, increasingly used in modern Node.js too.",
          "Local modules use relative paths (./filename); built-in and npm packages use just the name.",
          "Your server.js already uses CommonJS — const express = require('express') is this pattern."
        ]
      }

    ]
  },

  {
    title: "Built-in Modules - fs",
    subtitle: "Explained Like a Digital Filing Cabinet You Can Read and Write",

    sections: [

      {
        heading: "Think About a Filing Cabinet",

        paragraphs: [
          "A filing cabinet lets you store documents in labeled folders, retrieve any document when needed, add new documents, update existing ones, or shred (delete) ones you no longer need — all without leaving your office.",

          "Node.js's fs (File System) module is this digital filing cabinet — it lets your Node.js program read files, write files, create folders, and delete files on your computer's actual disk, directly from JavaScript code."
        ]
      },

      {
        heading: "Reading a File",

        code: `const fs = require("fs");

// Async version (recommended — non-blocking):
fs.readFile("notes.txt", "utf8", (err, data) => {
  if (err) {
    console.log("Error:", err.message);
    return;
  }
  console.log(data);
});

// With Promises (modern style):
const fsPromises = require("fs").promises;

async function readNote() {
  try {
    const data = await fsPromises.readFile("notes.txt", "utf8");
    console.log(data);
  } catch (err) {
    console.log("Error:", err.message);
  }
}`,

        paragraphs: [
          "\"utf8\" tells Node.js to return the file contents as readable text, rather than raw binary data. The async version (with callback or Promise) is preferred — it reads the file without blocking Node.js from handling other things in the meantime, like our smart chef not standing frozen waiting for the oven."
        ]
      },

      {
        heading: "Writing a File",

        code: `const fs = require("fs");

fs.writeFile("output.txt", "Hello from Node.js!", "utf8", (err) => {
  if (err) {
    console.log("Error writing:", err.message);
    return;
  }
  console.log("File written successfully!");
});`,

        paragraphs: [
          "writeFile creates the file if it doesn't exist, or completely overwrites it if it does. For adding content to an existing file without overwriting, use appendFile instead."
        ]
      },

      {
        heading: "Checking If a File Exists and Other Operations",

        code: `const fs = require("fs");

// Check if a file/folder exists:
fs.access("notes.txt", fs.constants.F_OK, (err) => {
  console.log(err ? "Does not exist" : "Exists");
});

// Create a folder:
fs.mkdir("new-folder", (err) => {
  if (!err) console.log("Folder created!");
});

// Delete a file:
fs.unlink("old-file.txt", (err) => {
  if (!err) console.log("File deleted!");
});`
      },

      {
        heading: "Important Points to Remember",

        points: [
          "fs is Node.js's built-in file system module — require('fs'), no installation needed.",
          "Always use async versions (with callbacks or Promises) to avoid blocking the event loop.",
          "readFile reads contents; writeFile creates/overwrites; appendFile adds to existing content.",
          "fs operations work on your actual computer's file system — be careful with destructive operations like unlink."
        ]
      }

    ]
  },

  {
    title: "Built-in Modules - path",
    subtitle: "Explained Like a GPS That Formats Addresses Correctly for Every City",

    sections: [

      {
        heading: "Think About Address Formats",

        paragraphs: [
          "Different countries format addresses differently — India might use 'House 42, MG Road, Hyderabad, Telangana', while the US uses '42 Main Street, New York, NY 10001'. A GPS app that works internationally knows how to format and parse addresses correctly regardless of which country you're in.",

          "Node.js's path module is exactly this — it handles file path formatting correctly regardless of which operating system your code runs on, since Windows uses backslashes (C:\\Users\\file.txt) while Mac/Linux use forward slashes (/home/user/file.txt)."
        ]
      },

      {
        heading: "Why path Exists",

        paragraphs: [
          "If you hardcode file paths as strings ('files/data.json'), they break when your code runs on a different OS — Windows expects backslashes, Mac/Linux expect forward slashes. path builds and parses paths correctly for whichever OS the code is currently running on, automatically."
        ]
      },

      {
        heading: "The Most Common path Methods",

        code: `const path = require("path");

// Join path segments safely (OS-independent):
const filePath = path.join(__dirname, "data", "users.json");
console.log(filePath);
// Windows: C:\\project\\data\\users.json
// Mac/Linux: /project/data/users.json

// Get just the filename from a full path:
console.log(path.basename("/project/data/users.json"));
// "users.json"

// Get just the directory part:
console.log(path.dirname("/project/data/users.json"));
// "/project/data"

// Get just the file extension:
console.log(path.extname("users.json"));
// ".json"`,

        paragraphs: [
          "path.join() with __dirname is the most important pattern — it always builds the correct absolute path from your current file's location, regardless of OS. This is safer than string concatenation like __dirname + '/data/users.json', which breaks on Windows."
        ]
      },

      {
        heading: "You've Seen This in Express",

        code: `// Common Express pattern for serving static files:
const path = require("path");

app.use(express.static(path.join(__dirname, "public")));`,

        paragraphs: [
          "This tells Express to serve files from a 'public' folder relative to server.js's location — using path.join ensures this works on both Windows and Mac/Linux deployment environments, not just your local machine."
        ]
      },

      {
        heading: "Important Points to Remember",

        points: [
          "path handles file path differences between Windows (\\) and Mac/Linux (/) automatically.",
          "path.join(__dirname, 'folder', 'file.txt') builds OS-correct absolute paths — use this always.",
          "path.basename, path.dirname, path.extname extract parts from an existing path string.",
          "Always use path.join instead of string concatenation for file paths in Node.js code."
        ]
      }

    ]
  },

  {
    title: "Built-in Modules - os",
    subtitle: "Explained Like a Building Inspector Checking the Premises",

    sections: [

      {
        heading: "Think About a Building Inspector",

        paragraphs: [
          "A building inspector visits a premises and reports its current state — total floor space, how much is currently occupied, which systems are installed (electrical, plumbing), what the building's official address is. They read the building's status without changing anything.",

          "Node.js's os module is exactly this inspector for your computer — it reads and reports your operating system and hardware details: what OS is running, how much RAM is available, how many CPU cores exist, what the home directory path is."
        ]
      },

      {
        heading: "Common os Methods",

        code: `const os = require("os");

console.log(os.platform());      // "win32", "darwin", "linux"
console.log(os.arch());          // "x64", "arm64"
console.log(os.hostname());      // Your computer's name
console.log(os.homedir());       // "/home/username" or "C:\\Users\\username"

// Memory information:
console.log(os.totalmem());      // Total RAM in bytes
console.log(os.freemem());       // Free RAM in bytes

const totalGB = (os.totalmem() / (1024 ** 3)).toFixed(2);
const freeGB = (os.freemem() / (1024 ** 3)).toFixed(2);
console.log(\`Total: \${totalGB}GB, Free: \${freeGB}GB\`);

// CPU information:
console.log(os.cpus().length);   // Number of CPU cores
console.log(os.cpus()[0].model); // CPU model name`
      },

      {
        heading: "Where os Is Practically Used",

        points: [
          "Checking available memory before starting a memory-intensive operation",
          "Writing cross-platform code that behaves differently on Windows vs Mac/Linux",
          "Building system monitoring tools or dashboards",
          "Logging server environment details when an application starts up",
          "Building CLI tools that need to know the user's home directory location"
        ]
      },

      {
        heading: "os.EOL — End of Line Character",

        code: `const os = require("os");

// End of line character (\\r\\n on Windows, \\n on Mac/Linux):
const line1 = "Hello";
const line2 = "World";

const content = line1 + os.EOL + line2;
// Correct line ending for whichever OS is running`,

        paragraphs: [
          "Like path for file paths, os.EOL gives the correct line-ending character for the current OS — Windows uses '\\r\\n' while Mac/Linux use just '\\n'. Useful when writing text files that need to open correctly across platforms."
        ]
      },

      {
        heading: "Important Points to Remember",

        points: [
          "os provides system information: platform, architecture, memory, CPU, home directory.",
          "No installation needed — require('os'), it's built into Node.js.",
          "Mainly used for system monitoring, cross-platform compatibility checks, and environment-aware code.",
          "os.homedir() gives the current user's home folder path, os.platform() identifies the OS."
        ]
      }

    ]
  },

  {
    title: "npm & package.json",
    subtitle: "Explained Like a Recipe Book With a Complete Ingredients List",

    sections: [

      {
        heading: "Think About a Recipe Book",

        paragraphs: [
          "A professional recipe book doesn't just list cooking steps — it starts with a complete ingredients list (flour: 200g, eggs: 3, butter: 50g), so anyone who wants to reproduce the dish knows exactly what to gather before starting. If a page from the recipe is shared with someone else, they can get exactly the same ingredients from any grocery store.",

          "package.json is exactly this ingredients list for a Node.js project — it records every package your project depends on, so anyone who clones your project can run one command (npm install) and get all the exact same 'ingredients' automatically."
        ]
      },

      {
        heading: "What package.json Contains",

        code: `{
  "name": "mern-learning-platform",
  "version": "1.0.0",
  "description": "A MERN stack learning platform",
  "main": "server.js",
  "scripts": {
    "start": "node server.js",
    "dev": "nodemon server.js"
  },
  "dependencies": {
    "express": "^4.18.2",
    "mongoose": "^8.0.3",
    "bcrypt": "^5.1.1",
    "jsonwebtoken": "^9.0.2",
    "cors": "^2.8.5",
    "dotenv": "^16.3.1"
  },
  "devDependencies": {
    "nodemon": "^3.0.2"
  }
}`,

        paragraphs: [
          "This is your actual backend's package.json structure — dependencies are packages needed in production (express, mongoose, bcrypt, jsonwebtoken), while devDependencies are only needed during development (nodemon, for auto-restarting the server during coding)."
        ]
      },

      {
        heading: "npm Scripts — Custom Commands",

        code: `// In package.json:
"scripts": {
  "start": "node server.js",
  "dev": "nodemon server.js"
}

// In terminal:
npm start    // runs "node server.js"
npm run dev  // runs "nodemon server.js"`,

        paragraphs: [
          "Scripts let you define shortcut commands for your project — you've been using npm run dev throughout your MERN project. The 'dev' script runs nodemon instead of node, which automatically restarts the server on every file save."
        ]
      },

      {
        heading: "package-lock.json — The Exact Recipe",

        paragraphs: [
          "package.json lists approximate versions (\"express\": \"^4.18.2\" means 4.18.2 or higher patch versions), while package-lock.json records the exact versions actually installed. This ensures everyone on a team gets byte-for-byte identical installations, not just 'roughly the same' — like a recipe book versus a lab notebook recording exact measurements used in a specific batch."
        ]
      },

      {
        heading: "Important Points to Remember",

        points: [
          "package.json is the project manifest — name, version, scripts, and dependencies list.",
          "dependencies are for production; devDependencies are only for development.",
          "npm scripts create shortcut commands, run with npm run <scriptname>.",
          "Always commit package.json AND package-lock.json — but never commit node_modules."
        ]
      }

    ]
  },

  {
    title: "Installing & Using Packages",
    subtitle: "Explained Like Ordering Pre-Made Ingredients Instead of Making Everything From Scratch",

    sections: [

      {
        heading: "Think About a Professional Kitchen's Suppliers",

        paragraphs: [
          "A professional kitchen doesn't make every ingredient from scratch — they order pre-made pasta from a supplier, pre-mixed spices from another, bottled sauces from a third. Each supplier specializes in their product, making it better and faster than the kitchen could produce in-house.",

          "npm packages are exactly these suppliers — other developers have already written, tested, and published solutions to common problems (authentication, database connections, file parsing). You install their package and use their work instead of building it yourself from scratch."
        ]
      },

      {
        heading: "Installing a Package",

        code: `// Install a package (adds to dependencies in package.json):
npm install express

// Install multiple packages at once:
npm install express mongoose dotenv cors

// Install a dev-only package:
npm install --save-dev nodemon

// Install a specific version:
npm install express@4.18.2`,

        paragraphs: [
          "Running npm install creates/updates the node_modules folder with the actual package files, and updates package.json and package-lock.json to record what was installed. Remember from the .gitignore topic — node_modules goes in .gitignore since it can be regenerated with npm install from package.json."
        ]
      },

      {
        heading: "Using an Installed Package",

        code: `// After: npm install express
const express = require("express");
const app = express();

// After: npm install mongoose
const mongoose = require("mongoose");

// After: npm install dotenv
require("dotenv").config();
console.log(process.env.MONGO_URI);`,

        paragraphs: [
          "Once installed, packages are available via require() (CommonJS) or import (ESM) — just the package name, no path needed, because Node.js knows to look in node_modules for packages without a ./ prefix."
        ]
      },

      {
        heading: "Restoring Packages on a New Machine",

        code: `// After cloning a project or getting it from someone:
npm install

// This reads package.json and installs ALL listed dependencies
// No need to manually install each package individually`,

        paragraphs: [
          "npm install (without a package name) reads package.json and installs everything listed — like a new kitchen receiving the full supplier list from a recipe book and ordering everything at once, rather than discovering each ingredient one at a time."
        ]
      },

      {
        heading: "Uninstalling a Package",

        code: `npm uninstall packagename`,

        paragraphs: [
          "This removes the package from node_modules AND removes it from package.json — keeping the ingredients list accurate and not referencing packages you no longer use."
        ]
      },

      {
        heading: "Important Points to Remember",

        points: [
          "npm install <name> installs a package and records it in package.json.",
          "npm install (no name) installs all packages listed in an existing package.json — use this after cloning.",
          "Packages without ./ in require() are looked up in node_modules automatically.",
          "Never commit node_modules — always commit package.json so others can run npm install."
        ]
      }

    ]
  },

  {
    title: "nodemon & Development Setup",
    subtitle: "Explained Like a Kitchen Display That Auto-Refreshes When the Menu Changes",

    sections: [

      {
        heading: "Think About a Digital Menu Board",

        paragraphs: [
          "A restaurant's digital menu board could require someone to manually restart the display system every time the menu changes — tedious and interruptive. A smarter system automatically detects when the menu file changes and refreshes the display immediately, without anyone manually restarting anything.",

          "nodemon is exactly this smart refresh system for your Node.js server — it watches your project files and automatically restarts the server whenever you save any changes, so you never have to manually stop and restart node server.js every time you edit code."
        ]
      },

      {
        heading: "The Problem Without nodemon",

        code: `// Without nodemon — every code change requires:
// 1. Press Ctrl+C to stop the server
// 2. Run node server.js again
// 3. Wait for it to start
// 4. Test your change
// 5. Repeat for every single edit...`,

        paragraphs: [
          "This becomes incredibly tedious when actively developing — changing a route handler, saving, needing to test it, having to manually restart every single time, dozens of times per hour."
        ]
      },

      {
        heading: "Installing and Using nodemon",

        code: `// Install as a dev dependency:
npm install --save-dev nodemon

// Use it instead of node:
nodemon server.js

// Or via npm script (the way your project already does it):
// package.json:
"scripts": {
  "dev": "nodemon server.js"
}

// Then just run:
npm run dev`,

        paragraphs: [
          "Your MERN project's package.json already has this exact setup — npm run dev runs nodemon server.js, which watches all files and restarts automatically on every save. This is the setup you've been using throughout the entire backend development of your project."
        ]
      },

      {
        heading: "Configuring What nodemon Watches",

        code: `// nodemon.json (optional config file):
{
  "watch": ["server.js", "routes/", "models/"],
  "ext": "js,json",
  "ignore": ["node_modules/", "*.test.js"]
}`,

        paragraphs: [
          "By default, nodemon watches all .js files in your project. For large projects, you can configure it to only watch specific folders and file types, and ignore others — like telling the menu board to only refresh when the actual menu file changes, not when the inventory spreadsheet updates."
        ]
      },

      {
        heading: "Important Points to Remember",

        points: [
          "nodemon automatically restarts your server on every file save — essential for development.",
          "Install as a devDependency since it's only needed during development, not in production.",
          "Use it via an npm script ('dev': 'nodemon server.js') for convenience.",
          "Your existing MERN project already uses nodemon via npm run dev — this topic explains why."
        ]
      }

    ]
  },

  {
    title: "What is Express.js?",
    subtitle: "Explained Like a Professional Kitchen Framework",

    sections: [

      {
        heading: "Think About Building a Kitchen From Scratch vs Using a Professional Setup",

        paragraphs: [
          "Imagine building a restaurant kitchen completely from scratch — designing every shelf, wiring every outlet, installing every pipe, before cooking a single dish. Or, imagine walking into a professional kitchen that already has everything organized: labeled shelves, working equipment, clear workflow zones — you just start cooking.",

          "Express.js is exactly this professional kitchen setup for Node.js web servers — it doesn't replace Node.js, it builds on top of it, providing an organized structure for handling web requests so you can focus on your application's actual logic instead of low-level server setup."
        ]
      },

      {
        heading: "What Express Actually Provides",

        points: [
          "Routing — a clean way to define what happens for each URL path and HTTP method (GET /login, POST /signup, etc.)",
          "Middleware — a pipeline for processing requests before they reach your route handlers",
          "Request/Response helpers — simplified access to request data and response methods",
          "Less boilerplate — things that take 30+ lines in raw Node.js take 3-5 lines in Express"
        ]
      },

      {
        heading: "Raw Node.js vs Express — The Difference",

        code: `// Raw Node.js — manual, verbose:
const http = require("http");
const server = http.createServer((req, res) => {
  if (req.url === "/login" && req.method === "POST") {
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify({ message: "Login successful" }));
  }
});
server.listen(5000);

// Express — clean, organized:
const express = require("express");
const app = express();

app.post("/login", (req, res) => {
  res.json({ message: "Login successful" });
});

app.listen(5000);`,

        paragraphs: [
          "Same result, dramatically less code and complexity. Express handles content-type headers, JSON serialization, routing matching — everything that would require manual implementation in raw Node.js."
        ]
      },

      {
        heading: "Express in Your Existing Project",

        paragraphs: [
          "Your server.js already uses Express throughout — const express = require('express'), app.use(cors()), app.use(express.json()), app.post('/login', ...), app.get('/dashboard', ...). Every single route and middleware in your backend is Express code. This course simply names and explains what each piece does."
        ]
      },

      {
        heading: "Important Points to Remember",

        points: [
          "Express is a minimal web framework built on top of Node.js's http module.",
          "It provides routing, middleware, and request/response helpers — reducing boilerplate significantly.",
          "Express doesn't replace Node.js — it's a layer on top that makes server code cleaner.",
          "Your existing server.js is already an Express application — this course explains it properly."
        ]
      }

    ]
  },

  {
    title: "Setting Up Express Server",
    subtitle: "Explained Like Opening a Restaurant for the First Time",

    sections: [

      {
        heading: "Think About Opening Day Checklist",

        paragraphs: [
          "On a restaurant's opening day, there's a fixed checklist: unlock the door, turn on the kitchen equipment, brief the staff on today's specials, open the doors, and start accepting customers. Skip any step, and service breaks down.",

          "Setting up an Express server follows this exact checklist — initialize Express, configure it with middleware, define routes, and start listening for requests."
        ]
      },

      {
        heading: "The Complete Basic Setup",

        code: `const express = require("express");  // 1. Get Express
const app = express();               // 2. Create the application

app.use(express.json());             // 3. Configure: parse JSON bodies

// 4. Define routes (what to do for each request):
app.get("/", (req, res) => {
  res.send("Server is running!");
});

// 5. Open the doors — start listening:
app.listen(5000, () => {
  console.log("Server running on port 5000");
});`,

        paragraphs: [
          "This is the minimal viable Express server — five clear steps matching the opening checklist. Your server.js follows this exact same structure, just with more routes and middleware added between steps 3 and 5."
        ]
      },

      {
        heading: "Understanding req and res",

        code: `app.get("/welcome", (req, res) => {
  // req = the incoming request (what the customer ordered)
  console.log(req.method);   // "GET"
  console.log(req.url);      // "/welcome"
  console.log(req.headers);  // request headers

  // res = the outgoing response (what you serve back)
  res.status(200).json({
    message: "Welcome to EduNexa!",
    timestamp: new Date()
  });
});`,

        paragraphs: [
          "req (request) contains everything about what came IN — headers, body, URL params, query strings. res (response) is what you send BACK — status code, headers, body. Every route handler receives these two objects, and your entire backend logic revolves around reading from req and writing to res."
        ]
      },

      {
        heading: "Common Response Methods",

        code: `res.send("Plain text response");
res.json({ key: "value" });          // JSON (most common in APIs)
res.status(404).json({ error: "Not found" }); // With status code
res.redirect("/login");              // Redirect to another URL
res.sendFile(path.join(__dirname, "index.html")); // Send a file`,

        paragraphs: [
          "res.json() is what your server.js routes use most — it automatically sets Content-Type to application/json and serializes the object, exactly what your React frontend's axios calls expect to receive."
        ]
      },

      {
        heading: "Important Points to Remember",

        points: [
          "express() creates the app; app.listen(port) starts accepting requests.",
          "Every route handler receives req (incoming request) and res (outgoing response).",
          "res.json() sends a JSON response with correct Content-Type — most common in REST APIs.",
          "app.use(express.json()) is essential for reading JSON request bodies (like from axios POST calls)."
        ]
      }

    ]
  },

  {
    title: "Routing Basics",
    subtitle: "Explained Like a Building Directory Matching Floors to Departments",

    sections: [

      {
        heading: "Think About a Corporate Building's Directory",

        paragraphs: [
          "A corporate building directory maps specific locations to specific departments — 'Floor 3: HR, Floor 5: Finance, Room 101: Server Room, Roof: Only authorized staff.' Each entry says: if you're going to THIS specific location, you'll find THAT specific thing.",

          "Express routing is exactly this directory — defining which URL path and HTTP method combination maps to which function, so requests always reach the right handler."
        ]
      },

      {
        heading: "The Four Main HTTP Methods",

        code: `app.get("/courses", (req, res) => {
  // GET — fetch/retrieve data
  res.json({ courses: [] });
});

app.post("/courses", (req, res) => {
  // POST — create new data
  res.json({ message: "Course created" });
});

app.put("/courses/1", (req, res) => {
  // PUT — update existing data (full update)
  res.json({ message: "Course updated" });
});

app.delete("/courses/1", (req, res) => {
  // DELETE — remove data
  res.json({ message: "Course deleted" });
});`,

        paragraphs: [
          "Same URL (/courses) with different HTTP methods means completely different operations — like the same building address handling different business depending on which department you ask for. This is the foundation of REST API design (covered in an upcoming topic)."
        ]
      },

      {
        heading: "Routes in Your Existing server.js",

        code: `// Your actual routes:
app.get("/", (req, res) => {        // Health check
  res.send("Backend is Running 🚀");
});

app.post("/signup", async (req, res) => {  // Create user
  // ... bcrypt, save to DB
});

app.post("/login", async (req, res) => {   // Authenticate user
  // ... verify password, send JWT
});

app.get("/dashboard", verifyToken, (req, res) => { // Protected
  // ... only accessible with valid JWT
});`,

        paragraphs: [
          "Every route in your server.js follows this exact pattern — HTTP method + URL path + handler function. The third argument (verifyToken on /dashboard) is middleware, covered in an upcoming topic."
        ]
      },

      {
        heading: "Route Order Matters",

        paragraphs: [
          "Express matches routes top-to-bottom — the first matching route wins. This means specific routes must be defined BEFORE general ones. A catch-all route (app.get('*', ...)) should always be last, or it intercepts everything before more specific routes get a chance to match."
        ]
      },

      {
        heading: "Important Points to Remember",

        points: [
          "Each route combines an HTTP method (get/post/put/delete) with a URL path.",
          "Same URL path + different HTTP method = completely different operation.",
          "Express matches routes in the order they're defined — specific routes before general ones.",
          "Your server.js already defines multiple routes — this topic names and explains that pattern."
        ]
      }

    ]
  },

  {
    title: "Route Parameters & Query Strings",
    subtitle: "Explained Like a Hotel Room Number vs Filter Settings",

    sections: [

      {
        heading: "Think About Two Ways to Specify What You Want",

        paragraphs: [
          "When checking into a hotel, you might say 'I'm in Room 310' — a specific, required identifier. Or when browsing the hotel's amenities app, you might filter results: 'show amenities open after 8pm, near the pool' — optional filters that narrow a general list without being required.",

          "Route parameters and query strings serve these exact two purposes in Express APIs — parameters for required, specific identifiers (like a user ID or course name), query strings for optional filters or search terms."
        ]
      },

      {
        heading: "Route Parameters — Required Identifiers",

        code: `// :userId is a route parameter — part of the URL path
app.get("/users/:userId", (req, res) => {
  const userId = req.params.userId;
  res.json({ message: \`Fetching user \${userId}\` });
});

// Multiple parameters:
app.get("/courses/:courseName/topics/:topicId", (req, res) => {
  const { courseName, topicId } = req.params;
  res.json({ course: courseName, topic: topicId });
});`,

        paragraphs: [
          "req.params contains all route parameters — like reading the room number from the key card. Your server.js already uses this: /api/progress/html/:userId where :userId is a route parameter, read as req.params.userId in the handler."
        ]
      },

      {
        heading: "Query Strings — Optional Filters",

        code: `// URL: /courses?level=beginner&sort=newest&limit=10
app.get("/courses", (req, res) => {
  const level = req.query.level;   // "beginner"
  const sort = req.query.sort;     // "newest"
  const limit = req.query.limit;   // "10" (always a string!)

  res.json({ level, sort, limit });
});`,

        paragraphs: [
          "Query strings appear after ? in a URL, as key=value pairs separated by &. req.query contains all of them as string values (even numbers arrive as strings — convert with Number() or parseInt() if needed). They're optional — your route still works if none are provided."
        ]
      },

      {
        heading: "Parameters vs Query Strings — When to Use Which",

        points: [
          "Route parameter (/users/:id) — identifying one specific resource (this specific user, this specific course)",
          "Query string (?level=beginner) — filtering, sorting, paginating, or searching a collection",
          "Parameter makes the resource identity part of the path; query string adds optional context"
        ]
      },

      {
        heading: "In Your Project",

        code: `// Your existing progress route uses a route parameter:
router.put("/html/:userId", async (req, res) => {
  const { userId } = req.params; // Required: which user's progress
  const { completedTopics, currentTopic, progress } = req.body;
  // ...
});`,

        paragraphs: [
          "userId is a route parameter because it's required — every progress update must specify which user. If you added filtering (e.g., get courses above 50% progress), those would be query strings since they're optional additions."
        ]
      },

      {
        heading: "Important Points to Remember",

        points: [
          "Route parameters (:name) are in the URL path, accessed via req.params.name.",
          "Query strings (?key=value) are after the ?, accessed via req.query.key.",
          "Query string values are always strings — convert to Number if you need numeric operations.",
          "Parameters identify specific resources; query strings filter or modify how a collection is returned."
        ]
      }

    ]
  },

  {
    title: "Middleware Basics",
    subtitle: "Explained Like Airport Security Checkpoints",

    sections: [

      {
        heading: "Think About Going Through an Airport",

        paragraphs: [
          "To reach your departure gate, you pass through several checkpoints in sequence: check-in desk (verify ticket), security scanner (inspect luggage), passport control (verify identity), duty-free zone (optional stop), departure gate (final destination). Each checkpoint processes you, potentially modifying your experience, before passing you along to the next step.",

          "Express middleware works exactly this way — functions that run between receiving a request and sending a response, each one processing the request, potentially modifying it, and then passing control to the next function using next()."
        ]
      },

      {
        heading: "The Middleware Function Signature",

        code: `function myMiddleware(req, res, next) {
  // Do something with the request
  console.log("Request received at:", new Date());

  // Pass control to the next middleware or route handler
  next();
}

// Apply it to all routes:
app.use(myMiddleware);`,

        paragraphs: [
          "Every middleware receives the same req and res as route handlers, plus a third argument: next(). Calling next() passes control to the next function in the chain — like being cleared at one checkpoint and moving to the next. NOT calling next() (and not sending a response) hangs the request indefinitely."
        ]
      },

      {
        heading: "Middleware Can Do Four Things",

        points: [
          "Execute any code (logging, validation, processing)",
          "Modify req or res objects (adding properties, parsing body)",
          "End the request-response cycle (send a response directly — like passport control turning you back)",
          "Call next() to pass control to the next middleware or route handler"
        ]
      },

      {
        heading: "Your Existing verifyToken Middleware",

        code: `// From your auth.js middleware file:
const verifyToken = (req, res, next) => {
  const token = req.headers.authorization;

  if (!token) {
    return res.status(401).send("Access Denied. No token provided");
    // NOT calling next() — request ends here, like passport control turning you back
  }

  try {
    const verified = jwt.verify(token, process.env.JWT_SECRET);
    req.user = verified;  // Modifying req — attaching user data for later handlers
    next();               // Cleared — pass to the next checkpoint
  } catch (error) {
    res.status(400).send("Invalid Token");
  }
};`,

        paragraphs: [
          "This is middleware you've already written — it's the airport passport control checkpoint, rejecting invalid tokens (turning back unauthorized travelers) and stamping the request with user data (verified passport) before allowing it through to the route handler."
        ]
      },

      {
        heading: "Important Points to Remember",

        points: [
          "Middleware functions receive (req, res, next) — next() passes control to the next function.",
          "Always either call next() or send a response — never leave a request hanging with neither.",
          "app.use(middleware) applies it to all routes; placing it before specific routes applies it selectively.",
          "Your verifyToken is already a well-structured middleware — this topic names what you've built."
        ]
      }

    ]
  },

  {
    title: "Built-in Middleware",
    subtitle: "Explained Like Pre-Installed Equipment That Comes With the Kitchen",

    sections: [

      {
        heading: "Think About a Pre-Equipped Kitchen",

        paragraphs: [
          "When you rent a professional kitchen, some equipment is already installed and ready to use — built-in ovens, pre-wired electrical points, installed ventilation. You don't need to source or install these yourself; they come as part of the kitchen setup.",

          "Express comes with several built-in middleware functions that are already available without any extra installation — they handle common, universal needs that nearly every Express server requires."
        ]
      },

      {
        heading: "express.json() — Parsing JSON Request Bodies",

        code: `app.use(express.json());

// Now req.body contains the parsed JSON from POST/PUT requests:
app.post("/login", (req, res) => {
  console.log(req.body.email);    // "nishitha@example.com"
  console.log(req.body.password); // "secret123"
});`,

        paragraphs: [
          "Without express.json(), req.body is undefined — incoming POST request data arrives as raw text, not a usable JavaScript object. This middleware parses that raw JSON text into a proper JS object automatically. Your server.js's app.use(express.json()) line does exactly this — it's why your login route can access req.body.email directly."
        ]
      },

      {
        heading: "express.urlencoded() — Parsing Form Data",

        code: `app.use(express.urlencoded({ extended: true }));

// Handles form submissions with Content-Type: application/x-www-form-urlencoded
// Less common in modern MERN apps (which typically send JSON)
// but still useful for traditional HTML form submissions`,

        paragraphs: [
          "Traditional HTML form submissions (not using fetch/axios) send data in a different format — URL-encoded rather than JSON. express.urlencoded() parses this format. Modern React apps with axios typically send JSON, so express.json() is more relevant for your project."
        ]
      },

      {
        heading: "express.static() — Serving Static Files",

        code: `const path = require("path");

// Serve everything in the 'public' folder as static files:
app.use(express.static(path.join(__dirname, "public")));

// Now files like public/logo.png are accessible at:
// http://localhost:5000/logo.png`,

        paragraphs: [
          "This serves static assets (images, CSS files, HTML pages, PDFs) directly — no route handler needed for each file. Useful when deploying a full-stack app where the backend also serves the built React frontend files."
        ]
      },

      {
        heading: "Important Points to Remember",

        points: [
          "express.json() parses incoming JSON request bodies into req.body — essential for any API receiving data.",
          "express.urlencoded() parses traditional HTML form submissions.",
          "express.static() serves a folder's files as-is, without needing individual route handlers.",
          "Your server.js already uses express.json() and express.static() equivalents — built-in and ready to use."
        ]
      }

    ]
  },

  {
    title: "Custom Middleware",
    subtitle: "Explained Like Writing Your Own Security Guard Instructions",

    sections: [

      {
        heading: "Think About Custom Security Instructions",

        paragraphs: [
          "A building's default security handles standard checks — ID verification, bag scanning. But a specific floor might need custom rules: 'Log every visitor's entry time, require both ID AND a signed invitation, and stamp their visitor badge with today's date before letting them through.'",

          "Custom middleware in Express lets you write these specific, project-tailored functions — running exactly your logic on every request (or specific routes), supplementing the built-in middleware with your application's own needs."
        ]
      },

      {
        heading: "A Request Logger Middleware",

        code: `function requestLogger(req, res, next) {
  const timestamp = new Date().toISOString();
  console.log(\`[\${timestamp}] \${req.method} \${req.url}\`);
  next(); // Always call next, or requests hang
}

app.use(requestLogger);

// Output for every request:
// [2026-06-27T10:30:15.123Z] POST /login
// [2026-06-27T10:30:16.456Z] GET /dashboard`,

        paragraphs: [
          "This logs every incoming request's method and URL with a timestamp — useful during development to see exactly what your server is receiving. app.use(requestLogger) applies it globally, before any routes."
        ]
      },

      {
        heading: "Middleware That Modifies req",

        code: `function attachRequestTime(req, res, next) {
  req.requestTime = new Date();  // Add custom property to req
  next();
}

app.use(attachRequestTime);

app.get("/info", (req, res) => {
  res.json({
    message: "Request info",
    receivedAt: req.requestTime  // Available in all route handlers now
  });
});`,

        paragraphs: [
          "Middleware can attach custom properties to req — your verifyToken middleware does exactly this with req.user = verified, making the decoded user data available in any route handler that runs after it."
        ]
      },

      {
        heading: "Route-Specific Middleware",

        code: `function checkAdminRole(req, res, next) {
  if (req.user?.role !== "admin") {
    return res.status(403).json({ error: "Admin access only" });
  }
  next();
}

// Only applies to this specific route:
app.delete("/users/:id", verifyToken, checkAdminRole, (req, res) => {
  res.json({ message: "User deleted" });
});`,

        paragraphs: [
          "Middleware can be applied to specific routes by passing it as arguments between the path and handler — like custom security rules applying only to one specific floor of the building, not the entire building."
        ]
      },

      {
        heading: "Important Points to Remember",

        points: [
          "Custom middleware is just a function with (req, res, next) — same signature as built-in ones.",
          "app.use(myMiddleware) applies globally; passing it as a route argument applies it selectively.",
          "Always call next() unless you're deliberately ending the request with a response.",
          "Your verifyToken is custom middleware — this topic explains the pattern behind what you've built."
        ]
      }

    ]
  },

  {
    title: "Third-Party Middleware",
    subtitle: "Explained Like Hiring Specialist Service Providers",

    sections: [

      {
        heading: "Think About Specialist Services",

        paragraphs: [
          "A restaurant doesn't install its own security cameras, design its own POS system, or create its own payment processing infrastructure — it hires specialist service providers for each, getting professional-grade solutions without building from scratch.",

          "Third-party middleware in Express works exactly this way — packages published by other developers that solve common server problems professionally, installed via npm and plugged into your Express app with a single app.use() line."
        ]
      },

      {
        heading: "cors — Cross-Origin Resource Sharing",

        code: `npm install cors`,

        paragraphs: [],

        code: `const cors = require("cors");

// Allow all origins (development):
app.use(cors());

// Restrict to specific origins (production):
app.use(cors({
  origin: "https://your-frontend.vercel.app"
}));`,

        paragraphs: [
          "Browsers block requests to different domains by default (your React app at localhost:5173 can't call your API at localhost:5000 without permission). cors middleware adds the necessary response headers to allow this. Your server.js already has app.use(cors()) — this is why your React frontend can reach your backend without browser security errors."
        ]
      },

      {
        heading: "morgan — HTTP Request Logger",

        code: `npm install morgan`,

        paragraphs: [],

        code: `const morgan = require("morgan");

app.use(morgan("dev"));

// Output for every request:
// POST /login 200 45.123 ms - 312`,

        paragraphs: [
          "morgan provides professional-grade request logging — method, path, status code, and response time, in a format much more useful than a manual console.log. The 'dev' format is colorized and concise, perfect for development."
        ]
      },

      {
        heading: "helmet — Security Headers",

        code: `npm install helmet`,

        paragraphs: [],

        code: `const helmet = require("helmet");

app.use(helmet());`,

        paragraphs: [
          "helmet adds several HTTP security headers automatically (Content-Security-Policy, X-XSS-Protection, etc.) that protect against common web vulnerabilities. One line of code, significant security improvement — like a professional security firm installing proper locks and cameras rather than DIY solutions."
        ]
      },

      {
        heading: "express-rate-limit — Preventing Abuse",

        code: `const rateLimit = require("express-rate-limit");

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100                   // Max 100 requests per window
});

app.use("/api/", limiter);`,

        paragraphs: [
          "Rate limiting prevents one client from making too many requests in a short time — protecting your API from brute-force attacks and accidental hammering. Essential for login routes especially — without it, someone could try thousands of passwords automatically."
        ]
      },

      {
        heading: "Important Points to Remember",

        points: [
          "Third-party middleware is installed via npm and applied with app.use() — same pattern as built-in.",
          "cors is essential for any API accessed from a different domain/port (like your React frontend).",
          "morgan provides clean request logging during development.",
          "helmet and express-rate-limit add security — important before deploying any real application."
        ]
      }

    ]
  },

  {
    title: "Handling POST Requests",
    subtitle: "Explained Like Receiving and Processing a Filled Application Form",

    sections: [

      {
        heading: "Think About Receiving Application Forms",

        paragraphs: [
          "When a college receives application forms, they don't just acknowledge receipt — they open the envelope, read the applicant's details, validate required fields are filled, process the application, and respond with either an acceptance letter or a rejection with reasons.",

          "Handling POST requests in Express follows this exact sequence — receiving data from the client (opening the envelope), validating it, processing it (storing in database, checking credentials), and sending back a structured response."
        ]
      },

      {
        heading: "The Complete POST Request Flow",

        code: `app.use(express.json()); // Must be before any routes!

app.post("/signup", async (req, res) => {
  // 1. Read the incoming data from req.body:
  const { name, email, password } = req.body;

  // 2. Validate required fields:
  if (!name || !email || !password) {
    return res.status(400).json({
      error: "Name, email, and password are all required"
    });
  }

  // 3. Process the data (save to database, hash password, etc.):
  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new User({ name, email, password: hashedPassword });
    await newUser.save();

    // 4. Respond with success:
    res.status(201).json({
      message: "Account created successfully"
    });
  } catch (error) {
    res.status(500).json({ error: "Server error" });
  }
});`,

        paragraphs: [
          "This is nearly identical to your actual server.js signup route — all four steps are already there: read from req.body, validate, process (hash + save), respond. This topic connects those steps to the overall mental model."
        ]
      },

      {
        heading: "HTTP Status Codes — The Response Language",

        points: [
          "200 OK — success for GET/PUT/DELETE",
          "201 Created — success for POST that creates something new",
          "400 Bad Request — client sent invalid data (missing fields, wrong format)",
          "401 Unauthorized — not logged in or invalid token",
          "403 Forbidden — logged in but not allowed to do this",
          "404 Not Found — resource doesn't exist",
          "500 Internal Server Error — something unexpected broke on the server"
        ]
      },

      {
        heading: "Important Points to Remember",

        points: [
          "express.json() must be applied before any routes that need to read req.body.",
          "POST request data arrives in req.body — always validate before processing.",
          "Use appropriate HTTP status codes — 201 for created resources, 400 for bad input, 500 for server errors.",
          "Always send a response (success or error) — never leave a POST request without a reply."
        ]
      }

    ]
  },

  {
    title: "REST API Design Principles",
    subtitle: "Explained Like a Standardized Menu Ordering System",

    sections: [

      {
        heading: "Think About a Standardized Menu System",

        paragraphs: [
          "Imagine every restaurant in a city used the exact same ordering format — 'GET item' means browse the menu, 'POST item' means place an order, 'PUT item/id' means modify an existing order, 'DELETE item/id' means cancel — and every customer immediately knew how to interact with any restaurant without needing separate training for each one.",

          "REST (Representational State Transfer) is exactly this standardized menu system for APIs — a set of conventions that, when followed, makes any API immediately understandable and predictable to any developer who knows REST principles."
        ]
      },

      {
        heading: "Principle 1 — Resources as Nouns in URLs",

        code: `// ✅ Resources are nouns:
GET    /users          // Get all users
GET    /users/42       // Get user with ID 42
POST   /users          // Create a new user
PUT    /users/42       // Update user 42
DELETE /users/42       // Delete user 42

// ❌ Actions as verbs — not RESTful:
GET /getAllUsers
POST /createUser
GET /deleteUser/42`,

        paragraphs: [
          "URLs should identify what resource you're working with, not what action you're taking — the HTTP method (GET/POST/PUT/DELETE) already expresses the action. Like a menu listing 'Biryani', 'Dosa', 'Chai' — not 'OrderBiryani', 'CancelDosa'."
        ]
      },

      {
        heading: "Principle 2 — HTTP Methods Match the Operation",

        points: [
          "GET — retrieve data, never modify anything",
          "POST — create a new resource",
          "PUT — replace an entire resource with new data",
          "PATCH — partially update a resource (change only specific fields)",
          "DELETE — remove a resource"
        ]
      },

      {
        heading: "Principle 3 — Consistent Response Structure",

        code: `// Success response:
res.status(200).json({
  success: true,
  data: { id: 42, name: "Nishitha" }
});

// Error response:
res.status(400).json({
  success: false,
  error: "Email already exists"
});`,

        paragraphs: [
          "Consistent response shapes let frontend developers write reliable code — they always know where to find the actual data (response.data.data) and where to find error messages (response.data.error), without inspecting each endpoint separately."
        ]
      },

      {
        heading: "Principle 4 — Statelessness",

        paragraphs: [
          "Each request must contain all information needed to process it — the server doesn't remember previous requests. This is why you send the JWT token with every protected request, rather than logging in once and having the server 'remember' you're logged in. Statelessness makes servers easier to scale."
        ]
      },

      {
        heading: "Important Points to Remember",

        points: [
          "URLs identify resources (nouns), HTTP methods identify actions (verbs).",
          "Use plural nouns for collections (/courses), specific IDs for individuals (/courses/42).",
          "Consistent response structures make frontend integration reliable and predictable.",
          "REST is stateless — each request carries all needed context, like your JWT token."
        ]
      }

    ]
  },

  {
    title: "CRUD Operations",
    subtitle: "Explained Like Managing a Library's Book Collection",

    sections: [

      {
        heading: "Think About a Library's Book Management",

        paragraphs: [
          "A library needs exactly four operations for managing books: adding new books to the collection (Create), looking up books that exist (Read), updating a book's information like its status or location (Update), and removing books that are damaged or outdated (Delete).",

          "CRUD — Create, Read, Update, Delete — represents these same four fundamental operations that virtually every data-driven application needs. Every database table, every API, every backend service fundamentally does these four things, in various combinations."
        ]
      },

      {
        heading: "CRUD Mapped to REST",

        code: `// C — Create (like adding a new book to the library)
app.post("/courses", async (req, res) => {
  const course = new Course(req.body);
  await course.save();
  res.status(201).json(course);
});

// R — Read (like searching the library catalogue)
app.get("/courses", async (req, res) => {
  const courses = await Course.find();
  res.json(courses);
});

app.get("/courses/:id", async (req, res) => {
  const course = await Course.findById(req.params.id);
  if (!course) return res.status(404).json({ error: "Not found" });
  res.json(course);
});

// U — Update (like updating a book's availability status)
app.put("/courses/:id", async (req, res) => {
  const course = await Course.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }
  );
  res.json(course);
});

// D — Delete (like removing a damaged book from the collection)
app.delete("/courses/:id", async (req, res) => {
  await Course.findByIdAndDelete(req.params.id);
  res.json({ message: "Course deleted successfully" });
});`
      },

      {
        heading: "Your Project's Existing CRUD",

        paragraphs: [
          "Your server.js already implements CRUD — POST /signup (Create user), POST /login (Read user + verify), and your progress route PUT /api/progress/html/:userId (Update progress). The pattern you've been using throughout your MERN backend is exactly CRUD, just for specific resources (users, progress)."
        ]
      },

      {
        heading: "CRUD in Every Layer of MERN",

        points: [
          "React frontend — CRUD happens via axios calls to your API",
          "Express routes — CRUD logic lives in route handlers",
          "Mongoose models — CRUD translates to .save(), .find(), .findByIdAndUpdate(), .findByIdAndDelete()",
          "MongoDB — CRUD maps to insert, find, update, delete operations on the database"
        ]
      },

      {
        heading: "Important Points to Remember",

        points: [
          "CRUD = Create (POST), Read (GET), Update (PUT/PATCH), Delete (DELETE) — the four fundamental data operations.",
          "Almost every feature in any application reduces to some combination of these four operations.",
          "Your existing server.js already implements CRUD for users and progress tracking.",
          "CRUD spans all layers of MERN — from React UI actions down to MongoDB database operations."
        ]
      }

    ]
  },

  {
    title: "Express Router",
    subtitle: "Explained Like Organizing a Large Office Into Departments",

    sections: [

      {
        heading: "Think About a Large Corporate Office",

        paragraphs: [
          "A small office can manage everything from one reception desk — one person handles HR queries, finance questions, IT requests, all from the same spot. But as the company grows, this becomes chaotic. The solution: dedicated departments, each with their own reception, handling only their specific area.",

          "Express Router is exactly this departmentalization — splitting a growing server.js with dozens of routes into separate, organized files, each handling one specific area of your API."
        ]
      },

      {
        heading: "The Problem Without Router",

        code: `// server.js getting very long and messy:
app.post("/signup", ...);
app.post("/login", ...);
app.get("/users", ...);
app.put("/users/:id", ...);
app.delete("/users/:id", ...);
app.get("/courses", ...);
app.post("/courses", ...);
app.put("/courses/:id", ...);
app.get("/progress/:userId", ...);
app.put("/progress/:userId", ...);
// ... 50+ more routes, all in one file`,

        paragraphs: [
          "One massive server.js becomes impossible to navigate and maintain — like a single chaotic reception desk handling everything for a 500-person company."
        ]
      },

      {
        heading: "Creating a Router File",

        code: `// routes/userRoutes.js — the User department's reception:
const express = require("express");
const router = express.Router();

router.post("/signup", async (req, res) => {
  // ... signup logic
});

router.post("/login", async (req, res) => {
  // ... login logic
});

router.get("/:id", async (req, res) => {
  // ... get user by ID
});

module.exports = router;`,

        paragraphs: [
          "express.Router() creates a mini-application — a self-contained set of routes and middleware for one specific area. Notice the routes use / and /:id, not /users — the prefix gets added when mounting."
        ]
      },

      {
        heading: "Mounting Routers in server.js",

        code: `// server.js — now clean and organized:
const userRoutes = require("./routes/userRoutes");
const progressRoutes = require("./routes/progressRoutes");
const courseRoutes = require("./routes/courseRoutes");

app.use("/users", userRoutes);      // All /users/* routes
app.use("/api/progress", progressRoutes); // All /api/progress/* routes
app.use("/courses", courseRoutes);  // All /courses/* routes`,

        paragraphs: [
          "app.use('/users', userRoutes) mounts the router at /users — so the router's / becomes /users/, and /:id becomes /users/:id. Your server.js already does this with progressRoutes — app.use('/api/progress', progressRoutes)."
        ]
      },

      {
        heading: "Your Project's Folder Structure with Routers",

        code: `backend/
├── server.js              // Entry point, mounts routers
├── routes/
│   ├── userRoutes.js      // /users/* endpoints
│   └── progressRoutes.js  // /api/progress/* endpoints (already exists!)
├── models/
│   └── User.js
└── middleware/
    └── auth.js            // verifyToken (already exists!)`,

        paragraphs: [
          "Your project already has this structure — progressRoutes.js in routes/ and verifyToken in middleware/. This topic formalizes the pattern you're already using."
        ]
      },

      {
        heading: "Important Points to Remember",

        points: [
          "express.Router() creates a mini Express app for organizing related routes together.",
          "Mount routers with app.use('/prefix', router) — the prefix is added to all router's routes.",
          "Split routes by resource or feature — one file per major area (users, courses, progress).",
          "Your server.js already uses this pattern with progressRoutes — just expand it further."
        ]
      }

    ]
  },

  {
    title: "Error Handling in Express",
    subtitle: "Explained Like a Dedicated Customer Complaints Department",

    sections: [

      {
        heading: "Think About a Complaints Department",

        paragraphs: [
          "A professional business doesn't have every employee handle complaints on their own — there's a dedicated complaints department with trained staff, standard procedures, and consistent responses. Every unresolved issue from any department gets forwarded there for proper handling.",

          "Express has a special error-handling middleware that works exactly this way — a dedicated function that catches errors from any route or middleware, ensuring consistent, professional error responses instead of crashes or raw error messages."
        ]
      },

      {
        heading: "The Problem — Inconsistent Error Handling",

        code: `// Without centralized error handling — every route handles errors differently:
app.post("/login", async (req, res) => {
  try {
    // ...
  } catch (error) {
    res.status(500).json({ message: error.message }); // Different format
  }
});

app.get("/users", async (req, res) => {
  try {
    // ...
  } catch (error) {
    res.status(500).send("Server error"); // Different format again!
  }
});`,

        paragraphs: [
          "Every route handling its own errors differently means frontend code can't reliably expect a consistent error structure — like every department handling complaints with different procedures, confusing customers."
        ]
      },

      {
        heading: "Express Error-Handling Middleware",

        code: `// Error handler has 4 parameters — the extra 'err' makes Express
// recognize this as error-handling middleware:
app.use((err, req, res, next) => {
  console.error("Error:", err.message);

  const statusCode = err.statusCode || 500;

  res.status(statusCode).json({
    success: false,
    error: err.message || "Internal server error"
  });
});

// Must be defined AFTER all routes and other middleware`,

        paragraphs: [
          "The four-parameter signature (err, req, res, next) is what tells Express this is an error handler, not regular middleware. It must be registered after all routes — like the complaints department being available after all other departments have had their chance."
        ]
      },

      {
        heading: "Forwarding Errors With next(err)",

        code: `app.post("/signup", async (req, res, next) => {
  try {
    const user = new User(req.body);
    await user.save();
    res.status(201).json(user);
  } catch (error) {
    next(error); // Forward to the error-handling middleware
  }
});

// Custom error with status code:
app.get("/users/:id", async (req, res, next) => {
  const user = await User.findById(req.params.id);
  if (!user) {
    const error = new Error("User not found");
    error.statusCode = 404;
    return next(error); // Forwarded with a 404 status
  }
  res.json(user);
});`,

        paragraphs: [
          "next(error) forwards any error to the centralized error handler — like any department sending an unresolved complaint to the complaints department, which handles it consistently according to its own standard procedure."
        ]
      },

      {
        heading: "Important Points to Remember",

        points: [
          "Error-handling middleware has 4 parameters (err, req, res, next) — Express identifies it by this signature.",
          "Register it after ALL routes — errors flow to it only if no route handled the request.",
          "Use next(error) in route handlers to forward errors to the centralized handler.",
          "Centralized error handling ensures consistent error responses across your entire API."
        ]
      }

    ]
  },

  {
    title: "Environment Variables & dotenv",
    subtitle: "Explained Like Keeping the Restaurant's Secret Recipes Separate From the Menu",

    sections: [

      {
        heading: "Think About Secret Recipes",

        paragraphs: [
          "A restaurant's printed menu is public — customers see it, competitors can read it, anyone who walks in knows what dishes are available. But the actual recipes (exact spice ratios, secret sauce ingredients) are kept strictly separate, in a private kitchen notebook that never leaves the premises.",

          "Environment variables work exactly this way — your code is the public menu (shared on GitHub, visible to teammates), while sensitive configuration (database passwords, API keys, JWT secrets) lives separately in a .env file that never gets committed or shared."
        ]
      },

      {
        heading: "The Problem With Hardcoding Sensitive Values",

        code: `// ❌ Never do this — exposed on GitHub:
mongoose.connect("mongodb+srv://nishitha:mypassword123@cluster.mongodb.net/db");

const token = jwt.sign(payload, "mysecretkey123");`,

        paragraphs: [
          "Anyone who views your GitHub repository can read these values — database credentials, JWT secrets, API keys. Even on a private repository, this is bad practice since any teammate or security scan can see them."
        ]
      },

      {
        heading: "Creating a .env File",

        code: `# .env file (in your backend root folder):
MONGO_URI=mongodb+srv://username:password@cluster.mongodb.net/edunexa
JWT_SECRET=your_super_secret_key_here_minimum_32_characters
PORT=5000
NODE_ENV=development`,

        paragraphs: [
          "This file lives in your project but NEVER gets committed — it's in your .gitignore (which you've already set up). Each developer on a team has their own .env file with their own credentials, while the code itself remains credential-free."
        ]
      },

      {
        heading: "Reading .env Values With dotenv",

        code: `// Install:
npm install dotenv

// server.js — must be the VERY FIRST line:
require("dotenv").config();

// Now all .env values are available:
mongoose.connect(process.env.MONGO_URI);

const token = jwt.sign(
  payload,
  process.env.JWT_SECRET,
  { expiresIn: "1h" }
);

const PORT = process.env.PORT || 5000;
app.listen(PORT);`,

        paragraphs: [
          "require('dotenv').config() reads the .env file and loads all values into process.env — the same process.env you've been using throughout your server.js. This is exactly your project's current setup — MONGO_URI and JWT_SECRET are already loaded this way."
        ]
      },

      {
        heading: "Important Points to Remember",

        points: [
          "Never hardcode secrets in code — use .env files and access via process.env.",
          "Add .env to .gitignore immediately — it should never be committed to any repository.",
          "require('dotenv').config() must run before any code that accesses process.env.",
          "Your server.js already follows this pattern — MONGO_URI and JWT_SECRET loaded from .env."
        ]
      }

    ]
  },

  {
    title: "Connecting to MongoDB",
    subtitle: "Explained Like Opening a Connection to a Remote Warehouse",

    sections: [

      {
        heading: "Think About a Remote Warehouse",

        paragraphs: [
          "A store doesn't keep all its inventory on the shop floor — it has a remote warehouse connected by a reliable delivery system. When the store needs stock, it connects to the warehouse, requests items, and the items arrive. The connection must be established before any items can be requested.",

          "Connecting your Express server to MongoDB is exactly this warehouse connection — establishing a reliable link before your routes can store or retrieve any data."
        ]
      },

      {
        heading: "Installing Mongoose",

        code: `npm install mongoose`,

        paragraphs: [
          "Mongoose is the Node.js library for connecting to and interacting with MongoDB — it provides a clean interface, data modeling with schemas, validation, and much more (covered in upcoming topics). Your project already uses it."
        ]
      },

      {
        heading: "Connecting in server.js",

        code: `const mongoose = require("mongoose");
require("dotenv").config();

// Connect to MongoDB Atlas:
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB Connected ✅"))
  .catch((err) => console.log("MongoDB Error ❌", err.message));`,

        paragraphs: [
          "mongoose.connect() returns a Promise — .then() confirms a successful connection, .catch() handles connection failures. This is exactly your server.js's existing connection code — the warehouse link is established once when the server starts, then stays open for all subsequent requests."
        ]
      },

      {
        heading: "Connection Events",

        code: `mongoose.connection.on("connected", () => {
  console.log("Mongoose connected to MongoDB");
});

mongoose.connection.on("error", (err) => {
  console.log("Mongoose connection error:", err.message);
});

mongoose.connection.on("disconnected", () => {
  console.log("Mongoose disconnected");
});`,

        paragraphs: [
          "These event listeners let you respond to connection state changes — useful in production for logging, alerting, or attempting reconnection when the warehouse link drops unexpectedly."
        ]
      },

      {
        heading: "MongoDB Atlas vs Local MongoDB",

        points: [
          "MongoDB Atlas — cloud-hosted MongoDB (what your project uses), accessible from anywhere, managed by MongoDB Inc.",
          "Local MongoDB — installed on your computer, only accessible locally, good for offline development",
          "Your MONGO_URI starting with mongodb+srv:// indicates Atlas — the +srv part uses DNS SRV records for cluster discovery"
        ]
      },

      {
        heading: "Important Points to Remember",

        points: [
          "mongoose.connect(URI) establishes the database connection — must succeed before routes can access data.",
          "Store the MongoDB URI in .env as MONGO_URI — never hardcode it.",
          "The connection is established once at startup and stays open for the server's lifetime.",
          "Your server.js already implements this correctly — this topic explains what that code does."
        ]
      }

    ]
  },

  {
    title: "Mongoose Basics",
    subtitle: "Explained Like a Professional Warehouse Management System",

    sections: [

      {
        heading: "Think About a Warehouse Management System",

        paragraphs: [
          "A professional warehouse management system provides organized tools for working with inventory — not just random shelves to dump items on. It has defined storage categories (what types of items go where), validation rules (items must have a name and weight), and organized retrieval methods (find by category, sort by date).",

          "Mongoose is exactly this management system for MongoDB — it adds structure, validation, and organized query methods on top of MongoDB's raw document storage, making database interactions clean and predictable."
        ]
      },

      {
        heading: "What Mongoose Provides Over Raw MongoDB",

        points: [
          "Schemas — define what fields a document must/can have, and their types",
          "Validation — automatically reject documents that don't meet the schema's rules",
          "Models — JavaScript classes for creating, reading, updating, deleting documents",
          "Clean query API — .find(), .findById(), .findByIdAndUpdate() instead of raw MongoDB commands",
          "Middleware hooks — run code before/after save, update, delete operations"
        ]
      },

      {
        heading: "The Core Flow",

        code: `// 1. Connect to MongoDB (already covered):
mongoose.connect(process.env.MONGO_URI);

// 2. Define a Schema (the warehouse category rules):
const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String
});

// 3. Create a Model (the management system for that category):
const User = mongoose.model("User", userSchema);

// 4. Use the Model for CRUD:
const newUser = new User({ name: "Nishitha", email: "n@test.com" });
await newUser.save(); // Store in warehouse

const users = await User.find(); // Retrieve all
const user = await User.findById("someId"); // Retrieve one`,

        paragraphs: [
          "This three-step flow (Schema → Model → Use) is the Mongoose pattern you're already using in your project — User.js defines the schema and model, server.js uses the User model for signup and login."
        ]
      },

      {
        heading: "Documents — Individual Warehouse Items",

        paragraphs: [
          "When you create a new User instance and save it, Mongoose creates a 'document' in MongoDB — a single record in the 'users' collection. Each document gets a unique _id automatically (a MongoDB ObjectId), like a barcode assigned to each warehouse item automatically upon arrival."
        ]
      },

      {
        heading: "Important Points to Remember",

        points: [
          "Mongoose adds schemas, validation, and a clean API on top of raw MongoDB.",
          "The flow is always: define Schema → create Model → use Model for CRUD operations.",
          "Models are named singular (User) — Mongoose automatically creates a 'users' collection.",
          "Every saved document gets a unique _id automatically — used for findById() queries."
        ]
      }

    ]
  },

  {
    title: "Mongoose Schema & Model",
    subtitle: "Explained Like a Detailed Blueprint With Quality Standards",

    sections: [

      {
        heading: "Think About Building Blueprints",

        paragraphs: [
          "An architect's blueprint specifies every detail: wall materials must be brick or concrete, windows must have minimum dimensions, every room must have at least one power outlet. The blueprint both describes the structure AND enforces quality standards — no shortcuts allowed during construction.",

          "A Mongoose Schema works exactly this way — it both describes what fields a document has AND enforces rules about what values are acceptable, rejecting anything that doesn't meet the specification."
        ]
      },

      {
        heading: "Defining a Schema With Types",

        code: `const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true           // Auto-remove leading/trailing spaces
  },
  email: {
    type: String,
    required: true,
    unique: true,        // No two users can have the same email
    lowercase: true      // Auto-convert to lowercase
  },
  password: {
    type: String,
    required: true,
    minlength: 6
  },
  role: {
    type: String,
    enum: ["user", "admin"], // Only these values allowed
    default: "user"
  },
  createdAt: {
    type: Date,
    default: Date.now    // Auto-set to current time on creation
  }
});`,

        paragraphs: [
          "This is a more detailed version of your existing User schema — each field specifies its type, whether it's required, and additional constraints. These are enforced by Mongoose on every save/update operation."
        ]
      },

      {
        heading: "Your Existing Schema",

        code: `// From your models/User.js:
const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  courses: {
    html: {
      completedTopics: { type: [Number], default: [] },
      currentTopic: { type: Number, default: 0 },
      progress: { type: Number, default: 0 },
      completed: { type: Boolean, default: false }
    }
  }
});`,

        paragraphs: [
          "Your schema already demonstrates nested objects (courses.html), arrays (completedTopics), and default values — all standard Mongoose schema features working together."
        ]
      },

      {
        heading: "Creating the Model",

        code: `// Model name is singular, uppercase:
const User = mongoose.model("User", userSchema);

module.exports = User;

// Mongoose automatically:
// - Creates a "users" collection in MongoDB (lowercase, plural)
// - Enforces the schema on every operation
// - Provides .find(), .findById(), .save(), etc.`,

        paragraphs: [
          "mongoose.model('User', userSchema) creates a Model class — like a construction company that builds according to the blueprint. Every new User() creates an instance that must meet the blueprint's specifications."
        ]
      },

      {
        heading: "Important Points to Remember",

        points: [
          "Schemas define field types, requirements, defaults, and validation rules.",
          "Common schema options: required, unique, default, enum, minlength, trim, lowercase.",
          "mongoose.model('Name', schema) creates the Model — Mongoose auto-creates a lowercase plural collection.",
          "Your User.js already implements a well-structured schema — this topic names what each part does."
        ]
      }

    ]
  },

  {
    title: "CRUD with Mongoose",
    subtitle: "Explained Like Running a Complete Library Management System",

    sections: [

      {
        heading: "Think About All Library Operations Together",

        paragraphs: [
          "A complete library management system handles every operation a library needs: cataloguing new books (Create), searching the catalogue (Read), updating a book's information (Update), and removing books (Delete). All four operations work on the same Book model, just doing different things.",

          "CRUD with Mongoose uses the same four operations, using clean built-in methods on your Model — your full toolkit for managing any MongoDB collection."
        ]
      },

      {
        heading: "Create — Adding to the Collection",

        code: `// Method 1: new + save()
const user = new User({ name: "Nishitha", email: "n@test.com" });
await user.save();

// Method 2: Model.create() — shortcut
const user = await User.create({ name: "Nishitha", email: "n@test.com" });

console.log(user._id); // MongoDB automatically assigned ID`
      },

      {
        heading: "Read — Finding Documents",

        code: `// Find ALL documents:
const allUsers = await User.find();

// Find with a filter:
const admins = await User.find({ role: "admin" });

// Find ONE by a specific field:
const user = await User.findOne({ email: "nishitha@test.com" });

// Find by MongoDB _id:
const user = await User.findById("64f1a2b3c4d5e6f7a8b9c0d1");

// Select only specific fields (projection):
const user = await User.findById(id).select("name email -password");
// -password means "exclude password from result"`
      },

      {
        heading: "Update — Modifying Documents",

        code: `// Find and update, returning the NEW document:
const updatedUser = await User.findByIdAndUpdate(
  userId,
  { name: "Updated Name" },
  { new: true } // Without this, returns OLD document
);

// Update a specific nested field:
await User.findByIdAndUpdate(userId, {
  "courses.html.progress": 75,
  "courses.html.currentTopic": 5
});`
      },

      {
        heading: "Delete — Removing Documents",

        code: `// Find and delete by ID:
await User.findByIdAndDelete(userId);

// Delete documents matching a filter:
await User.deleteMany({ role: "guest" });`,

        paragraphs: [
          "Your server.js already uses findOne ({ email }) in the login route, and your progress route uses findById + save — you've been doing Mongoose CRUD throughout your project."
        ]
      },

      {
        heading: "Important Points to Remember",

        points: [
          "Create: new Model() + .save(), or Model.create() shorthand.",
          "Read: .find() for many, .findOne() for one by filter, .findById() for one by ID.",
          "Update: .findByIdAndUpdate() with { new: true } to get the updated document back.",
          "Delete: .findByIdAndDelete() for one, .deleteMany() for multiple matching documents."
        ]
      }

    ]
  },

  {
    title: "Data Validation with Mongoose",
    subtitle: "Explained Like a Quality Control Inspector at a Factory",

    sections: [

      {
        heading: "Think About a Factory's Quality Control",

        paragraphs: [
          "A professional factory doesn't ship every item blindly — a QC inspector checks each product against specifications before it leaves: is it the right size? Does it work? Is it missing any components? Products that fail inspection get rejected before reaching customers, not after.",

          "Mongoose validation is exactly this quality inspector — checking every document against your schema's rules before allowing it to be saved, rejecting invalid data immediately with clear error messages."
        ]
      },

      {
        heading: "Built-in Validators",

        code: `const courseSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, "Course title is required"],  // Custom error message
    trim: true,
    minlength: [3, "Title must be at least 3 characters"],
    maxlength: [100, "Title cannot exceed 100 characters"]
  },
  level: {
    type: String,
    enum: {
      values: ["Beginner", "Intermediate", "Advanced"],
      message: "{VALUE} is not a valid level"
    }
  },
  price: {
    type: Number,
    min: [0, "Price cannot be negative"],
    max: [10000, "Price seems unreasonably high"]
  },
  email: {
    type: String,
    match: [/^\S+@\S+\.\S+$/, "Please enter a valid email address"]
  }
});`,

        paragraphs: [
          "Each validator can include a custom error message in array format [rule, message] — making validation errors clear and user-friendly, like a QC report specifically stating why an item failed instead of just 'rejected'."
        ]
      },

      {
        heading: "Custom Validators",

        code: `const userSchema = new mongoose.Schema({
  username: {
    type: String,
    validate: {
      validator: function(value) {
        // Custom rule: no spaces in username
        return !/\s/.test(value);
      },
      message: "Username cannot contain spaces"
    }
  }
});`,

        paragraphs: [
          "When built-in validators aren't enough, custom validators accept any function returning true (pass) or false (fail) — like a QC inspector with a custom checklist for unusual product specifications."
        ]
      },

      {
        heading: "Handling Validation Errors",

        code: `try {
  await user.save();
} catch (error) {
  if (error.name === "ValidationError") {
    const messages = Object.values(error.errors)
      .map(err => err.message);

    return res.status(400).json({
      error: "Validation failed",
      details: messages
    });
  }
  res.status(500).json({ error: "Server error" });
}`,

        paragraphs: [
          "Mongoose throws a ValidationError when schema rules are violated — catching it by name lets you extract and return all specific validation messages to the client, exactly like a QC report listing every specific defect found."
        ]
      },

      {
        heading: "Important Points to Remember",

        points: [
          "Built-in validators: required, minlength, maxlength, min, max, enum, match (regex).",
          "Custom validators use a validate: { validator: fn, message: string } object.",
          "Validation runs automatically before every .save() and .create() call.",
          "Catch ValidationError by name to extract and return specific field error messages."
        ]
      }

    ]
  },

  {
    title: "JWT Authentication",
    subtitle: "Explained Like a Digitally Signed Theme Park Wristband",

    sections: [

      {
        heading: "Think About a Theme Park Wristband",

        paragraphs: [
          "When you pay for theme park entry, you get a wristband — it proves you paid, works for the whole day, and can be scanned at any ride to verify authenticity. The park doesn't need to look you up in their database at every ride; the wristband itself contains the proof. A counterfeit wristband is detected immediately because it lacks the park's invisible security marking.",

          "JWT (JSON Web Token) is exactly this digital wristband — a self-contained, digitally signed token that proves authentication without requiring a database lookup on every request."
        ]
      },

      {
        heading: "What a JWT Contains",

        code: `// A JWT looks like:
// eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0ZjFhMiIsImVtYWlsIjoibi50ZXN0LmNvbSIsImlhdCI6MTYzMDAwMDAwMCwiZXhwIjoxNjMwMDAzNjAwfQ.abc123signature

// It has three parts separated by dots:
// Header.Payload.Signature

// Decoded payload contains:
{
  "id": "64f1a2b3c4d5e6",
  "email": "nishitha@test.com",
  "iat": 1630000000,   // Issued at (timestamp)
  "exp": 1630003600    // Expires at (1 hour later)
}`,

        paragraphs: [
          "The signature is computed using your JWT_SECRET — any tampering with the payload invalidates the signature, like a counterfeit wristband lacking the park's invisible security marking."
        ]
      },

      {
        heading: "Generating a Token (Login)",

        code: `const jwt = require("jsonwebtoken");

// After verifying password in login route:
const token = jwt.sign(
  { id: user._id, email: user.email }, // Payload
  process.env.JWT_SECRET,              // Secret key
  { expiresIn: "1h" }                  // Token expires in 1 hour
);

res.json({ token, user: { id: user._id, name: user.name } });`,

        paragraphs: [
          "This is exactly your server.js's login route — jwt.sign() creates the wristband, signed with your JWT_SECRET. The client stores this token (your frontend uses localStorage.setItem('token', ...)) and sends it with every subsequent protected request."
        ]
      },

      {
        heading: "Verifying a Token (Protected Routes)",

        code: `// Your existing verifyToken middleware:
const jwt = require("jsonwebtoken");

const verifyToken = (req, res, next) => {
  const token = req.headers.authorization;

  if (!token) {
    return res.status(401).send("Access Denied");
  }

  try {
    const verified = jwt.verify(token, process.env.JWT_SECRET);
    req.user = verified; // { id, email, iat, exp }
    next();
  } catch (error) {
    res.status(400).send("Invalid Token");
  }
};`,

        paragraphs: [
          "jwt.verify() checks the signature against JWT_SECRET — if valid, it returns the decoded payload (like a ride scanner confirming the wristband is genuine and adding the guest's info to the ride's log). Invalid or expired tokens throw an error, caught and rejected immediately."
        ]
      },

      {
        heading: "Important Points to Remember",

        points: [
          "JWTs are self-contained — they carry user data and can be verified without a database lookup.",
          "jwt.sign() creates a token; jwt.verify() validates it and returns the decoded payload.",
          "Always store JWT_SECRET in .env — it's the security key for the entire system.",
          "Your server.js already implements complete JWT auth — this topic explains how it works."
        ]
      }

    ]
  },

  {
    title: "Password Hashing with bcrypt",
    subtitle: "Explained Like Converting a Key Into a Unique Lock That Can't Be Reversed",

    sections: [

      {
        heading: "Think About a One-Way Lock",

        paragraphs: [
          "Imagine a special process: you insert any key, the machine processes it and produces a unique, complex lock pattern — but you can NEVER reverse the process to get the original key back from the lock pattern. However, you can always test if a key matches the lock by running it through the same process and comparing the patterns.",

          "Password hashing with bcrypt works exactly this way — it converts a password into a unique, irreversible hash that can only be verified by comparing a new input against it, never by reversing it to reveal the original password."
        ]
      },

      {
        heading: "Why Never Store Passwords as Plain Text",

        paragraphs: [
          "If someone gains access to your database (through a breach, a disgruntled employee, or any leak), plain-text passwords immediately expose every user's actual password. Since many people reuse passwords, a single database breach could compromise their accounts on many other services too. Hashing ensures that even with full database access, passwords remain protected."
        ]
      },

      {
        heading: "Hashing a Password on Signup",

        code: `const bcrypt = require("bcrypt");

// In your signup route:
const hashedPassword = await bcrypt.hash(req.body.password, 10);

// The 10 is the 'salt rounds' — higher = more secure but slower
// 10-12 is the standard recommendation for most applications

const newUser = new User({
  name: req.body.name,
  email: req.body.email,
  password: hashedPassword // Store the hash, never the original
});

await newUser.save();`,

        paragraphs: [
          "This is your exact signup route code — bcrypt.hash() converts the password before storage. The salt rounds control how complex the hashing is — each additional round doubles the computation time, making brute-force attacks progressively harder."
        ]
      },

      {
        heading: "Comparing on Login",

        code: `// In your login route:
const isMatch = await bcrypt.compare(
  req.body.password,  // Plain text from login form
  user.password        // Stored hash from database
);

if (!isMatch) {
  return res.status(400).send("Invalid email or password");
}

// Generate JWT token...`,

        paragraphs: [
          "bcrypt.compare() runs the plain-text password through the same process and compares patterns — returning true if they match, false if not, without ever reversing the hash. This is your existing login route's password verification — exactly the right approach."
        ]
      },

      {
        heading: "Important Points to Remember",

        points: [
          "bcrypt.hash(password, saltRounds) creates an irreversible hash — store this, never the plain password.",
          "bcrypt.compare(plainText, hash) verifies a password without reversing the hash.",
          "Salt rounds of 10-12 balance security and performance — don't go below 10.",
          "Your server.js already implements this correctly — bcrypt.hash on signup, bcrypt.compare on login."
        ]
      }

    ]
  },

  {
    title: "Protected Routes in Express",
    subtitle: "Explained Like VIP Sections Requiring a Valid Pass",

    sections: [

      {
        heading: "Think About a VIP Section",

        paragraphs: [
          "A concert venue has general areas anyone can access — the lobby, restrooms, the merchandise stand. But the VIP lounge, backstage, and artist meet-and-greet areas require a valid VIP pass checked at the entrance. Staff at each VIP checkpoint verify the pass before allowing entry, regardless of how confident someone acts.",

          "Protected routes in Express work exactly this way — some routes (login, signup, health check) are publicly accessible, while others (dashboard, user profile, progress updates) require a valid JWT token verified at each request."
        ]
      },

      {
        heading: "Your Existing Pattern",

        code: `// Public routes — no middleware needed:
app.get("/", (req, res) => res.send("Backend Running"));
app.post("/signup", signupHandler);
app.post("/login", loginHandler);

// Protected route — verifyToken middleware as gatekeeper:
app.get("/dashboard", verifyToken, (req, res) => {
  res.json({ message: "VIP area!", user: req.user });
});`,

        paragraphs: [
          "verifyToken sits between the route path and the handler — like a VIP checkpoint between the entrance and the lounge. Only requests with a valid token pass through; others get rejected with 401 Unauthorized before the handler ever runs."
        ]
      },

      {
        heading: "Protecting Progress Routes",

        code: `// routes/progressRoutes.js — protecting with verifyToken:
const verifyToken = require("../middleware/auth");
const router = express.Router();

// Apply verifyToken to all routes in this router:
router.use(verifyToken);

router.put("/html/:userId", async (req, res) => {
  // Only reached if token is valid
  // req.user contains { id, email } from the decoded token
});`,

        paragraphs: [
          "router.use(verifyToken) applies the middleware to all routes in that router at once — like a single VIP checkpoint covering the entire backstage area, rather than separate checkpoints for each individual room backstage."
        ]
      },

      {
        heading: "Using req.user in Protected Routes",

        code: `app.get("/my-profile", verifyToken, async (req, res) => {
  // req.user was attached by verifyToken:
  const userId = req.user.id;

  const user = await User.findById(userId).select("-password");
  res.json(user);
});`,

        paragraphs: [
          "After verifyToken runs, req.user contains the decoded JWT payload — your route can trust this data completely (it was digitally signed), using req.user.id to fetch the correct user's data without needing the ID in the URL."
        ]
      },

      {
        heading: "Important Points to Remember",

        points: [
          "Pass verifyToken as a route argument to protect individual routes.",
          "Use router.use(verifyToken) to protect all routes within a specific router file.",
          "After verifyToken runs, req.user contains the authenticated user's decoded token data.",
          "Your server.js already protects /dashboard with verifyToken — extend this to all sensitive routes."
        ]
      }

    ]
  },

  {
    title: "CORS",
    subtitle: "Explained Like International Customs Rules Between Countries",

    sections: [

      {
        heading: "Think About International Customs",

        paragraphs: [
          "When goods travel from one country to another, customs rules determine what's allowed in — some countries allow everything freely, others require documentation, others block certain goods entirely. These rules protect each country from unwanted imports while allowing legitimate trade.",

          "CORS (Cross-Origin Resource Sharing) is exactly this customs system for web browsers — browser security rules that determine which external origins (domains/ports) are allowed to make requests to your API, protecting your server from unauthorized cross-site requests."
        ]
      },

      {
        heading: "Why CORS Exists",

        paragraphs: [
          "Browsers implement the 'Same-Origin Policy' by default — a page at localhost:5173 (your React app) can't make requests to localhost:5000 (your Express API) without explicit permission, because they're different 'origins' (different ports = different origins). This protects users from malicious websites silently making requests to banking or social media APIs on their behalf."
        ]
      },

      {
        heading: "The Error Without CORS",

        code: `// Without CORS middleware, your browser console shows:
// Access to XMLHttpRequest at 'http://localhost:5000/login'
// from origin 'http://localhost:5173' has been blocked by CORS policy:
// No 'Access-Control-Allow-Origin' header is present on the requested resource.`,

        paragraphs: [
          "You've likely seen this error — your React frontend's axios call blocked by the browser because your Express server didn't declare it as an allowed origin. Your app.use(cors()) already fixes this."
        ]
      },

      {
        heading: "Configuring CORS Properly",

        code: `const cors = require("cors");

// Development — allow all origins (convenient but not for production):
app.use(cors());

// Production — restrict to specific allowed origins:
app.use(cors({
  origin: [
    "https://your-app.vercel.app",
    "http://localhost:5173" // Keep for local development
  ],
  methods: ["GET", "POST", "PUT", "DELETE"],
  allowedHeaders: ["Content-Type", "Authorization"],
  credentials: true // Allow cookies/auth headers
}));`,

        paragraphs: [
          "For production, always specify exact allowed origins — app.use(cors()) with no config allows literally any website to call your API, which is a security risk once your app is live with real user data."
        ]
      },

      {
        heading: "Important Points to Remember",

        points: [
          "CORS is a browser security mechanism — servers set headers declaring which origins they trust.",
          "Your app.use(cors()) already fixes the cross-origin error between React (5173) and Express (5000).",
          "In production, specify exact origins instead of allowing all — app.use(cors({ origin: 'your-domain.com' })).",
          "CORS only applies to browser requests — tools like Postman and curl are unaffected by CORS rules."
        ]
      }

    ]
  },

  {
    title: "Deploying Node.js App",
    subtitle: "Explained Like Moving From a Home Kitchen to a Professional Restaurant Location",

    sections: [

      {
        heading: "Think About Opening a Real Restaurant",

        paragraphs: [
          "You've been perfecting recipes in your home kitchen (localhost:5000). Opening a real restaurant means finding a proper location (a hosting server), setting up the kitchen there (deploying your code), ensuring the health department approves (security configuration), and opening your doors to real customers (going live).",

          "Deploying your Node.js backend follows this same journey — moving from a server running on your laptop to a server running permanently on the internet, accessible to real users 24/7."
        ]
      },

      {
        heading: "Step 1 — Prepare for Production",

        code: `// package.json — ensure start script exists:
{
  "scripts": {
    "start": "node server.js",
    "dev": "nodemon server.js"
  }
}

// server.js — use PORT from environment:
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(\`Server on port \${PORT}\`));`,

        paragraphs: [
          "Hosting platforms assign their own PORT — using process.env.PORT || 5000 lets the platform control the port in production while defaulting to 5000 locally. The start script (not dev) is what production platforms run."
        ]
      },

      {
        heading: "Option 1 — Railway (Easiest for Node.js)",

        points: [
          "Visit railway.app, sign in with GitHub",
          "Click 'New Project' → 'Deploy from GitHub repo' → select your backend repo",
          "Add environment variables in Railway's dashboard: MONGO_URI, JWT_SECRET, NODE_ENV=production",
          "Railway automatically runs npm install and npm start — your API gets a live URL",
          "Every push to GitHub automatically redeploys"
        ]
      },

      {
        heading: "Option 2 — Render (Also Popular and Free Tier)",

        points: [
          "Visit render.com, connect GitHub",
          "New Web Service → select your backend repo",
          "Build command: npm install, Start command: node server.js",
          "Add environment variables in Render's dashboard",
          "Deploy — get a live URL like yourapp.onrender.com"
        ]
      },

      {
        heading: "Connecting Frontend to Deployed Backend",

        code: `// Frontend — update API base URL for production:
// .env (local):
VITE_API_URL=http://localhost:5000

// Set in Vercel dashboard for production:
VITE_API_URL=https://your-backend.railway.app

// In axios calls:
axios.post(\`\${import.meta.env.VITE_API_URL}/login\`, data)`,

        paragraphs: [
          "Your React frontend (deployed on Vercel) needs to call your backend's production URL — using environment variables (covered in 'Environment Variables & dotenv') means you only change the VITE_API_URL value, not every axios call in every component."
        ]
      },

      {
        heading: "Important Points to Remember",

        points: [
          "Use process.env.PORT for the server port — hosting platforms assign their own port.",
          "Railway and Render both offer free tiers and automatic GitHub deployment for Node.js apps.",
          "Set all environment variables (MONGO_URI, JWT_SECRET) in the hosting platform's dashboard.",
          "Update your frontend's API base URL to the production backend URL after deployment."
        ]
      }

    ]
  }

];