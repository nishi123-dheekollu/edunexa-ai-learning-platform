export const expressTopics = [
  "Express.js Deep Dive",
  "Application vs Router Level Middleware",
  "Chaining Route Handlers",
  "express.Router() Advanced Patterns",
  "Request Object Deep Dive",
  "Response Object Deep Dive",
  "Template Engines",
  "Serving Static Files",
  "File Uploads with Multer",
  "Working with Cookies",
  "Sessions in Express",
  "Input Sanitization",
  "Rate Limiting",
  "API Versioning",
  "Pagination & Filtering",
  "Sorting & Searching",
  "Aggregation in Express APIs",
  "Advanced Error Handling",
  "Logging with Morgan & Winston",
  "Testing Express APIs",
  "Express with TypeScript Intro",
  "Express Security Best Practices",
  "Performance Optimization",
  "API Documentation with Swagger",
  "Express Project Structure Best Practices"
];

export const expressLessons = [

  {
    title: "Express.js Deep Dive",
    subtitle: "Explained Like Understanding How Your Kitchen's Plumbing Actually Works",

    sections: [

      {
        heading: "Beyond the Basics",

        paragraphs: [
          "In the Node.js course, we covered Express fundamentals — setting up a server, basic routing, middleware, and connecting to MongoDB. This course goes deeper — exploring Express's internal workings, advanced patterns, and professional-level techniques used in real production APIs.",

          "Think of it like the difference between knowing how to cook in a kitchen versus understanding how the plumbing, ventilation, and electrical systems actually work — same kitchen, much deeper understanding, enabling you to fix problems and build more sophisticated things."
        ]
      },

      {
        heading: "The Express Application Object",

        code: `const express = require("express");
const app = express();

// app IS the Express application — it has several key properties:
console.log(app.locals);     // App-wide local variables
console.log(app.settings);   // App settings (view engine, etc.)

// app.set() and app.get() for configuration:
app.set("env", "production");
console.log(app.get("env")); // "production"

// app.enable() and app.disable() for boolean settings:
app.enable("trust proxy");   // Trust reverse proxy headers
app.disable("x-powered-by"); // Hide Express fingerprint`,

        paragraphs: [
          "app is more than just a request handler — it's a full configuration object. app.set('trust proxy', 1) is important when deploying behind Nginx or load balancers, ensuring Express reads the correct client IP from forwarded headers rather than the proxy's IP."
        ]
      },

      {
        heading: "The Request-Response Cycle — In Depth",

        code: `// Every request flows through this exact pipeline:

// 1. Incoming HTTP request
// 2. Application-level middleware (app.use())
// 3. Router matching
// 4. Router-level middleware
// 5. Route handler
// 6. Error handling middleware (if error thrown)
// 7. Outgoing HTTP response

// This pipeline always runs top-to-bottom:
app.use(cors());           // Step 2a — runs for every request
app.use(express.json());   // Step 2b — runs for every request
app.use(requestLogger);    // Step 2c — custom middleware

app.post("/login", verifyInput, loginHandler); // Steps 3-5`,

        paragraphs: [
          "Understanding this pipeline's order is crucial — placing express.json() AFTER your routes means req.body is always undefined in those routes. The order of app.use() calls directly controls which middleware runs when."
        ]
      },

      {
        heading: "app.locals — Sharing Data Across the Application",

        code: `// Set once at startup:
app.locals.appName = "EduNexa";
app.locals.version = "1.0.0";
app.locals.startTime = new Date();

// Available in any route handler:
app.get("/info", (req, res) => {
  res.json({
    app: req.app.locals.appName,
    version: req.app.locals.version,
    uptime: new Date() - req.app.locals.startTime
  });
});`,

        paragraphs: [
          "app.locals stores application-wide data accessible anywhere via req.app.locals — useful for configuration values, shared utilities, or computed values you want available throughout your entire application without importing them separately everywhere."
        ]
      },

      {
        heading: "Important Points to Remember",

        points: [
          "The request pipeline runs top-to-bottom — middleware order in your code directly determines execution order.",
          "app.set() configures Express settings; app.get() reads them — trust proxy is important behind load balancers.",
          "app.locals stores app-wide data accessible via req.app.locals in any route handler.",
          "This course builds on Node.js course foundations — focusing on deeper patterns and production techniques."
        ]
      }

    ]
  },

  {
    title: "Application vs Router Level Middleware",
    subtitle: "Explained Like Company-Wide Rules vs Department-Specific Rules",

    sections: [

      {
        heading: "Think About a Large Company's Rules",

        paragraphs: [
          "A large company has two kinds of rules: company-wide rules that every employee follows regardless of department (ID badge required to enter the building, sign the attendance register) and department-specific rules that only apply within one team (finance team must log every transaction, HR team must keep records confidential).",

          "Express has exactly these two kinds of middleware — application-level middleware that runs for every request, and router-level middleware that only runs for requests handled by a specific router."
        ]
      },

      {
        heading: "Application-Level Middleware — Company-Wide Rules",

        code: `const app = express();

// Applies to EVERY request, regardless of route:
app.use(cors());
app.use(express.json());
app.use(morgan("dev"));

// Applies to every request starting with /api:
app.use("/api", rateLimiter);

// The order matters — these run before any routes:
app.use((req, res, next) => {
  console.log(\`[\${new Date().toISOString()}] \${req.method} \${req.url}\`);
  next();
});`,

        paragraphs: [
          "app.use() with no path runs for every single request — like the building entrance rule applying to everyone. app.use('/api', middleware) scopes it to a path prefix — like the finance floor's security checkpoint only activating for people going to that floor."
        ]
      },

      {
        heading: "Router-Level Middleware — Department Rules",

        code: `const router = express.Router();

// Only applies to requests handled by THIS router:
router.use(verifyToken); // All routes in this router need authentication

router.use((req, res, next) => {
  console.log("This only runs for progress routes");
  next();
});

router.put("/html/:userId", async (req, res) => {
  // verifyToken already ran — req.user is available
});

router.get("/html/:userId", async (req, res) => {
  // verifyToken ran here too
});

// Mount the router:
app.use("/api/progress", router);`,

        paragraphs: [
          "Router-level middleware is defined on the router instance, not on app — it only runs when a request matches that router's mount path. Your progressRoutes already works this way — any middleware added to that router applies only to progress-related endpoints."
        ]
      },

      {
        heading: "Combining Both Levels",

        code: `// server.js — Application level (company-wide):
app.use(cors());           // Everyone needs this
app.use(express.json());   // Everyone needs this
app.use(helmet());         // Security for everyone

// userRoutes.js — Router level (department specific):
const router = express.Router();
router.use(verifyToken);   // Only user routes need this

// adminRoutes.js — Router level (different department):
const adminRouter = express.Router();
adminRouter.use(verifyToken);
adminRouter.use(checkAdminRole); // Extra rule for admins only`,

        paragraphs: [
          "Layering application and router middleware keeps concerns cleanly separated — security headers globally, authentication per router, role checks per specific router. Clean, organized, and easy to audit."
        ]
      },

      {
        heading: "Important Points to Remember",

        points: [
          "app.use() applies middleware globally — runs for every matching request.",
          "router.use() applies middleware only within that router's scope.",
          "Both follow the same top-to-bottom execution order within their scope.",
          "Combine both levels: global concerns at app level, feature-specific concerns at router level."
        ]
      }

    ]
  },

  {
    title: "Chaining Route Handlers",
    subtitle: "Explained Like an Assembly Line With Specialized Stations",

    sections: [

      {
        heading: "Think About a Manufacturing Assembly Line",

        paragraphs: [
          "A car factory's assembly line has multiple specialized stations — one station installs the engine, the next installs the doors, another paints the car, the final one does quality inspection. Each station does one specific job and passes the product to the next. If quality inspection fails, the car is pulled before reaching the customer.",

          "Chaining route handlers in Express works exactly this way — multiple functions in sequence for one route, each handling one specific responsibility and passing control to the next via next()."
        ]
      },

      {
        heading: "The Basic Chain",

        code: `// Three handler functions chained for one route:
function validateInput(req, res, next) {
  if (!req.body.email || !req.body.password) {
    return res.status(400).json({ error: "Email and password required" });
  }
  next(); // Pass to next handler
}

function checkExistingUser(req, res, next) {
  // Could check if user already exists (for signup)
  req.userExists = false; // Attach data for next handler
  next();
}

function createUser(req, res) {
  // Final handler — actually creates the user
  res.status(201).json({ message: "User created" });
}

// Chain them as separate arguments:
app.post("/signup", validateInput, checkExistingUser, createUser);`,

        paragraphs: [
          "Each function in the chain is an assembly station — validateInput checks the product (request), checkExistingUser does its specific job, createUser is the final station. If validateInput sends an error response, the chain stops there, like a QC check pulling a car off the line."
        ]
      },

      {
        heading: "Passing Data Between Handlers",

        code: `function findUser(req, res, next) {
  // Attach user to req for subsequent handlers:
  User.findOne({ email: req.body.email })
    .then(user => {
      if (!user) {
        return res.status(404).json({ error: "User not found" });
      }
      req.foundUser = user; // Pass to next handler
      next();
    });
}

function verifyPassword(req, res, next) {
  const isMatch = bcrypt.compareSync(req.body.password, req.foundUser.password);
  if (!isMatch) {
    return res.status(401).json({ error: "Invalid password" });
  }
  next();
}

function generateToken(req, res) {
  const token = jwt.sign({ id: req.foundUser._id }, process.env.JWT_SECRET);
  res.json({ token });
}

app.post("/login", findUser, verifyPassword, generateToken);`,

        paragraphs: [
          "Attaching data to req (req.foundUser) is the standard way handlers communicate in a chain — like a car carrying its own build sheet through the assembly line, each station adding their stamp before passing it along."
        ]
      },

      {
        heading: "Array Syntax Alternative",

        code: `// Arrays work the same way — useful for programmatically building chains:
const loginMiddleware = [findUser, verifyPassword, generateToken];

app.post("/login", loginMiddleware);
app.post("/admin/login", [...loginMiddleware, checkAdminRole]);`,

        paragraphs: [
          "Arrays of middleware functions are equivalent to comma-separated arguments — and more flexible for building chains programmatically, like a configurable assembly line that can add extra stations for special products."
        ]
      },

      {
        heading: "Important Points to Remember",

        points: [
          "Multiple handler functions can be passed to one route — they run in order.",
          "Call next() to pass control; send a response to end the chain early.",
          "Attach data to req to share information between chained handlers.",
          "Array syntax is equivalent to comma-separated arguments, and more flexible for dynamic chains."
        ]
      }

    ]
  },

  {
    title: "express.Router() Advanced Patterns",
    subtitle: "Explained Like a Franchise Restaurant's Branch System",

    sections: [

      {
        heading: "Think About a Franchise System",

        paragraphs: [
          "A franchise restaurant has a headquarters that sets company-wide standards, plus individual branch locations that each have their own local management and some local customizations, while still following the core franchise rules. Each branch operates somewhat independently but connects to the same overall brand.",

          "Express Router's advanced patterns work exactly this way — nested routers creating hierarchical route structures, each router maintaining its own middleware and route definitions while fitting into the overall application structure."
        ]
      },

      {
        heading: "Router Parameters — Shared Across All Routes",

        code: `const userRouter = express.Router();

// router.param() runs whenever :userId appears in this router's routes:
userRouter.param("userId", async (req, res, next, userId) => {
  try {
    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }
    req.targetUser = user; // Available in all routes using :userId
    next();
  } catch (error) {
    next(error);
  }
});

// All these routes now have req.targetUser automatically:
userRouter.get("/:userId", (req, res) => res.json(req.targetUser));
userRouter.put("/:userId", (req, res) => {
  // req.targetUser already fetched and verified
});
userRouter.delete("/:userId", (req, res) => {
  // req.targetUser already fetched and verified
});`,

        paragraphs: [
          "router.param() is extremely powerful — it intercepts any route in that router containing a named parameter, running your function once before the route handler. Perfect for fetching a resource by ID once and sharing it across all routes that reference that ID, instead of repeating the findById call in every handler."
        ]
      },

      {
        heading: "Nested Routers — Hierarchical Routes",

        code: `// courseRouter.js:
const courseRouter = express.Router();

// Nested lesson router:
const lessonRouter = express.Router({ mergeParams: true });
// mergeParams: true lets lessonRouter access courseRouter's :courseId

lessonRouter.get("/", async (req, res) => {
  const { courseId } = req.params; // Available because of mergeParams
  const lessons = await Lesson.find({ course: courseId });
  res.json(lessons);
});

// Mount lessonRouter inside courseRouter:
courseRouter.use("/:courseId/lessons", lessonRouter);

// Results in routes like:
// GET /courses/123/lessons        → lessonRouter's /
// GET /courses/123/lessons/456    → lessonRouter's /:lessonId`,

        paragraphs: [
          "{ mergeParams: true } is crucial for nested routers — without it, the inner router can't access the outer router's URL parameters. Like a branch location needing to know which franchise region it belongs to."
        ]
      },

      {
        heading: "Router-Level Error Handling",

        code: `const userRouter = express.Router();

userRouter.get("/:id", async (req, res, next) => {
  try {
    const user = await User.findById(req.params.id);
    res.json(user);
  } catch (error) {
    next(error); // Passes to this router's error handler:
  }
});

// Router-specific error handler:
userRouter.use((err, req, res, next) => {
  if (err.name === "CastError") {
    return res.status(400).json({ error: "Invalid ID format" });
  }
  next(err); // Pass to app-level error handler for other errors
});`,

        paragraphs: [
          "Routers can have their own error handlers for domain-specific errors — like a branch location handling local complaints before escalating to headquarters only when truly necessary."
        ]
      },

      {
        heading: "Important Points to Remember",

        points: [
          "router.param() pre-processes named URL parameters for all routes in a router — eliminates repetitive DB lookups.",
          "Nested routers with { mergeParams: true } allow hierarchical URL structures.",
          "Routers can have their own error handlers for domain-specific error handling.",
          "These patterns scale cleanly as your API grows in complexity."
        ]
      }

    ]
  },

  {
    title: "Request Object Deep Dive",
    subtitle: "Explained Like a Detailed Order Form With Every Possible Field",

    sections: [

      {
        heading: "Think About a Comprehensive Order Form",

        paragraphs: [
          "A comprehensive purchase order form has many sections — buyer's details, shipping address, payment method, item list, special instructions, date/time, reference numbers. Every piece of information about that transaction is captured in one organized document.",

          "Express's req object is exactly this comprehensive form — it captures every possible detail about an incoming HTTP request, organized into clearly named properties for your route handlers to access."
        ]
      },

      {
        heading: "req.body — The Form's Main Content",

        code: `app.use(express.json());

app.post("/users", (req, res) => {
  console.log(req.body);         // { name: "Nishitha", email: "n@test.com" }
  console.log(req.body.name);    // "Nishitha"
  console.log(req.body.email);   // "n@test.com"
});`,

        paragraphs: [
          "req.body contains the parsed request body — only available after express.json() middleware runs. Without it, req.body is undefined. This is the most-used req property in any API that receives data."
        ]
      },

      {
        heading: "req.params, req.query, req.headers",

        code: `app.get("/courses/:id", (req, res) => {
  // URL parameters from the route pattern:
  console.log(req.params);        // { id: "64f1a2b3" }
  console.log(req.params.id);     // "64f1a2b3"

  // Query string: /courses/123?level=beginner&page=2
  console.log(req.query);         // { level: "beginner", page: "2" }
  console.log(req.query.level);   // "beginner"

  // Request headers:
  console.log(req.headers);                        // All headers
  console.log(req.headers.authorization);           // JWT token
  console.log(req.headers["content-type"]);         // "application/json"
  console.log(req.get("Authorization"));            // Helper method
});`,

        paragraphs: [
          "req.get() is a convenient helper for reading specific headers — case-insensitive, so req.get('authorization') and req.get('Authorization') both work. Your verifyToken middleware uses req.headers.authorization — req.get('authorization') is equivalent."
        ]
      },

      {
        heading: "req.method, req.url, req.path, req.ip",

        code: `app.use((req, res, next) => {
  console.log(req.method);       // "GET", "POST", "PUT", "DELETE"
  console.log(req.url);          // "/courses?level=beginner" (full URL with query)
  console.log(req.path);         // "/courses" (path only, no query string)
  console.log(req.ip);           // Client's IP address
  console.log(req.hostname);     // "localhost" or "yourdomain.com"
  console.log(req.protocol);     // "http" or "https"
  console.log(req.secure);       // true if https

  next();
});`,

        paragraphs: [
          "These properties are invaluable for logging, analytics, rate limiting (by IP), and security checks (enforcing HTTPS). req.ip requires trust proxy to be enabled if behind a load balancer, so Express reads the X-Forwarded-For header rather than the proxy's IP."
        ]
      },

      {
        heading: "req.cookies and req.user",

        code: `// After cookie-parser middleware:
console.log(req.cookies);            // { sessionId: "abc123" }
console.log(req.cookies.sessionId);  // "abc123"

// After your verifyToken middleware:
console.log(req.user);               // { id: "64f1a2", email: "n@test.com" }
console.log(req.user.id);            // The authenticated user's ID`,

        paragraphs: [
          "req.user is a convention, not a built-in — your verifyToken middleware attaches it. req.cookies requires the cookie-parser package (covered in 'Working with Cookies'). Both patterns follow the same idea: middleware enriches req with extra data for downstream handlers."
        ]
      },

      {
        heading: "Important Points to Remember",

        points: [
          "req.body — parsed request body (requires express.json() middleware).",
          "req.params — URL route parameters; req.query — query string values.",
          "req.headers / req.get() — access request headers (authorization, content-type, etc.).",
          "req.ip, req.method, req.path — metadata about the request itself."
        ]
      }

    ]
  },

  {
    title: "Response Object Deep Dive",
    subtitle: "Explained Like a Professional Delivery Package With Many Options",

    sections: [

      {
        heading: "Think About a Professional Courier Service",

        paragraphs: [
          "A professional courier service offers many delivery options — standard delivery with tracking, express delivery with a signature requirement, certified delivery with a receipt, or a rejection notice if the package can't be delivered. Each option serves a specific purpose and follows specific protocols.",

          "Express's res object offers similarly varied response options — sending JSON, redirecting, streaming files, setting cookies, controlling headers — each method appropriate for specific scenarios."
        ]
      },

      {
        heading: "Sending Responses — All the Options",

        code: `// JSON response (most common for APIs):
res.json({ success: true, data: user });

// Plain text:
res.send("Server is running");

// With explicit status code:
res.status(201).json({ message: "Created" });
res.status(404).json({ error: "Not found" });

// HTML:
res.send("<h1>Hello World</h1>");

// No content (successful but nothing to return):
res.sendStatus(204); // 204 No Content

// File download:
res.download("/path/to/file.pdf", "invoice.pdf");

// Redirect:
res.redirect(301, "https://new-url.com"); // Permanent redirect
res.redirect("/login");                   // Default 302 temporary`,

        paragraphs: [
          "res.sendStatus(204) is perfect for DELETE operations — the action succeeded but there's nothing meaningful to return. res.download() sends a file with Content-Disposition: attachment header, triggering browser download instead of display."
        ]
      },

      {
        heading: "Setting Headers",

        code: `// Set a single header:
res.set("X-Custom-Header", "EduNexa-API");

// Set multiple headers:
res.set({
  "X-API-Version": "v1",
  "X-Rate-Limit-Remaining": "95",
  "Cache-Control": "no-cache"
});

// Type shortcut:
res.type("json");    // Sets Content-Type: application/json
res.type("html");    // Sets Content-Type: text/html

// Check if headers already sent:
if (!res.headersSent) {
  res.json({ message: "Response not yet sent" });
}`,

        paragraphs: [
          "res.headersSent is crucial for avoiding the common 'Cannot set headers after they are sent' error — always check it before sending a response in async code where multiple paths might try to respond."
        ]
      },

      {
        heading: "Chaining — Fluent Interface",

        code: `// Most res methods return res itself — enabling chaining:
res
  .status(201)
  .set("X-Custom-Header", "value")
  .json({
    success: true,
    message: "User created",
    data: { id: user._id, name: user.name }
  });`,

        paragraphs: [
          "Express's res methods return res itself (except res.send(), which ends the chain), enabling fluent, readable chaining — like a form where you fill each field and the next field automatically appears."
        ]
      },

      {
        heading: "Important Points to Remember",

        points: [
          "Always send exactly ONE response per request — sending two throws 'headers already sent' error.",
          "res.json() automatically sets Content-Type: application/json and serializes the object.",
          "res.status() sets the HTTP status code — chain it with .json() or .send().",
          "Check res.headersSent in async/error scenarios before attempting to send a response."
        ]
      }

    ]
  },

  {
    title: "Template Engines",
    subtitle: "Explained Like a Mail Merge Letter Template",

    sections: [

      {
        heading: "Think About Mail Merge Letters",

        paragraphs: [
          "A bank sends thousands of account statements but doesn't write each one individually — it uses a template letter with placeholder slots ('Dear [NAME], your balance is [BALANCE] as of [DATE]') and merges each customer's actual data into the template, producing personalized letters at scale.",

          "Template engines in Express work exactly this way — HTML templates with placeholder slots that Express fills with dynamic data before sending the rendered HTML to the browser."
        ]
      },

      {
        heading: "When Template Engines Are Used",

        paragraphs: [
          "In a pure REST API (like your MERN backend), you'd rarely use template engines — your React frontend handles rendering. Template engines are used in traditional server-rendered applications, email generation (rendering HTML emails), and cases where you serve HTML pages directly from Express without a separate frontend framework."
        ]
      },

      {
        heading: "Setting Up EJS (Embedded JavaScript)",

        code: `npm install ejs`,

        paragraphs: [],

        code: `// server.js:
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views")); // Views folder

// views/welcome.ejs:
// <h1>Welcome, <%= user.name %>!</h1>
// <p>You have <%= courses.length %> courses enrolled.</p>

// Route that renders the template:
app.get("/welcome", (req, res) => {
  res.render("welcome", {
    user: { name: "Nishitha" },
    courses: ["HTML5", "CSS3", "JavaScript"]
  });
});`,

        paragraphs: [
          "res.render('welcome', data) tells Express to find views/welcome.ejs, merge the data object into it (replacing <%= %> placeholders), and send the resulting HTML. The template engine does the mail merge, producing a complete HTML document."
        ]
      },

      {
        heading: "EJS Syntax Quick Reference",

        code: `<!-- Output a value (escaped — safe from XSS): -->
<h1><%= user.name %></h1>

<!-- Output unescaped HTML (use carefully!): -->
<div><%- htmlContent %></div>

<!-- Conditional: -->
<% if (user.isAdmin) { %>
  <a href="/admin">Admin Panel</a>
<% } %>

<!-- Loop: -->
<ul>
  <% courses.forEach(course => { %>
    <li><%= course.name %></li>
  <% }) %>
</ul>`,

        paragraphs: [
          "<%= %> outputs escaped HTML (safe), <%- %> outputs raw HTML (use only with trusted content), and <% %> runs JavaScript logic without outputting anything — like mail merge fields, conditional blocks, and repeated sections in a letter template."
        ]
      },

      {
        heading: "Important Points to Remember",

        points: [
          "Template engines render HTML on the server by merging data into templates.",
          "app.set('view engine', 'ejs') configures Express to use EJS; res.render() triggers rendering.",
          "In MERN/API-focused projects, template engines are mostly used for email HTML generation.",
          "Always use <%= %> (escaped) for user-provided content — never <%- %> without sanitization."
        ]
      }

    ]
  },

  {
    title: "Serving Static Files",
    subtitle: "Explained Like a Library's Public Reading Room",

    sections: [

      {
        heading: "Think About a Library's Reading Room",

        paragraphs: [
          "A library has a public reading room where anyone can walk in and access the books on the open shelves — no librarian assistance needed, no request forms to fill, just direct access to what's available. The library simply makes those books available; visitors take what they need.",

          "Serving static files in Express works exactly this way — making a folder's files directly accessible via URL, with no route handler needed for each file."
        ]
      },

      {
        heading: "Basic Static File Serving",

        code: `const path = require("path");

// Make everything in 'public' folder directly accessible:
app.use(express.static(path.join(__dirname, "public")));

// Files are now accessible at:
// public/logo.png       → GET /logo.png
// public/style.css      → GET /style.css
// public/app.js         → GET /app.js
// public/images/bg.jpg  → GET /images/bg.jpg`,

        paragraphs: [
          "Every file in the public folder is immediately accessible by its relative path — no route handler needed. Express serves them directly, setting appropriate Content-Type headers (image/png, text/css, etc.) automatically."
        ]
      },

      {
        heading: "Virtual Path Prefix",

        code: `// Files accessible under /static/ prefix:
app.use("/static", express.static(path.join(__dirname, "public")));

// Now:
// public/logo.png   → GET /static/logo.png
// public/style.css  → GET /static/style.css`,

        paragraphs: [
          "Adding a virtual prefix helps organize URLs — like labeling the reading room's shelves with a section prefix, so visitors know they're accessing public/static content rather than API endpoints."
        ]
      },

      {
        heading: "Serving React Build Files — Full Stack Deployment",

        code: `// After building React with npm run build (creates dist/ folder):
app.use(express.static(path.join(__dirname, "../frontend/dist")));

// Catch-all route for React Router — serve index.html for all non-API routes:
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../frontend/dist", "index.html"));
});

// Important: This catch-all must come AFTER all API routes:
app.use("/api", apiRoutes); // API routes first
app.get("*", reactCatchAll); // React catch-all last`,

        paragraphs: [
          "This pattern lets your Express server serve both your API AND your React frontend — the Express server handles /api/* requests as JSON API, and all other requests get the React app's index.html, letting React Router handle frontend navigation. Perfect for deploying a full MERN app as one single server."
        ]
      },

      {
        heading: "Important Points to Remember",

        points: [
          "express.static() serves a folder's contents directly by URL — no route handlers needed.",
          "Use path.join(__dirname, 'public') for cross-platform compatible paths.",
          "Add a virtual prefix ('/static') to organize static file URLs separately from API endpoints.",
          "Serving React's dist/ folder with a catch-all route enables single-server full-stack deployment."
        ]
      }

    ]
  },

  {
    title: "File Uploads with Multer",
    subtitle: "Explained Like a Post Office's Parcel Receiving Counter",

    sections: [

      {
        heading: "Think About Receiving Parcels at a Post Office",

        paragraphs: [
          "A post office parcel counter has specific procedures: the receiver checks the parcel's size and weight (is it within limits?), verifies what type of item it is (restricted items aren't accepted), temporarily stores it (in a specific location with a reference number), and gives the sender a receipt. Regular letters (plain text data) go through a completely different, simpler process.",

          "Multer handles file uploads in Express exactly like this counter — it intercepts multipart file data (which requires completely different handling from regular JSON), validates size and type, stores the file, and makes file information available to your route handler."
        ]
      },

      {
        heading: "Installing and Basic Setup",

        code: `npm install multer`,

        paragraphs: [],

        code: `const multer = require("multer");

// Disk storage — save files to a specific folder:
const storage = multer.diskStorage({
  destination: function(req, file, cb) {
    cb(null, "uploads/"); // Save to 'uploads' folder
  },
  filename: function(req, file, cb) {
    // Create unique filename: timestamp-originalname
    const uniqueName = \`\${Date.now()}-\${file.originalname}\`;
    cb(null, uniqueName);
  }
});

const upload = multer({ storage });`,

        paragraphs: [
          "diskStorage lets you control exactly where and how files are saved. The cb (callback) pattern follows Node.js error-first convention: cb(null, value) for success, cb(new Error('message')) to reject. Each uploaded file gets a unique name using Date.now() to prevent overwriting."
        ]
      },

      {
        heading: "Using Multer in Routes",

        code: `// Single file upload:
app.post("/upload/avatar",
  upload.single("avatar"), // "avatar" = form field name
  (req, res) => {
    console.log(req.file);   // Info about the uploaded file
    // { fieldname, originalname, filename, path, size, mimetype }

    res.json({
      message: "File uploaded",
      filename: req.file.filename,
      path: req.file.path
    });
  }
);

// Multiple files:
app.post("/upload/documents",
  upload.array("documents", 5), // Max 5 files
  (req, res) => {
    console.log(req.files); // Array of file objects
    res.json({ count: req.files.length });
  }
);`,

        paragraphs: [
          "upload.single() for one file, upload.array() for multiple same-field files, upload.fields() for files from different form fields. After multer processes the upload, req.file (single) or req.files (multiple) contains the file information."
        ]
      },

      {
        heading: "File Type and Size Validation",

        code: `const upload = multer({
  storage,
  limits: {
    fileSize: 5 * 1024 * 1024 // 5MB limit
  },
  fileFilter: function(req, file, cb) {
    const allowedTypes = ["image/jpeg", "image/png", "image/webp"];

    if (allowedTypes.includes(file.mimetype)) {
      cb(null, true);  // Accept the file
    } else {
      cb(new Error("Only JPEG, PNG, and WebP images allowed"), false);
    }
  }
});`,

        paragraphs: [
          "limits.fileSize rejects oversized files automatically. fileFilter runs for each file before storage — cb(null, true) accepts it, cb(null, false) silently rejects it, cb(new Error()) rejects with an error. Like the post office counter checking parcel weight and verifying restricted items before accepting."
        ]
      },

      {
        heading: "Important Points to Remember",

        points: [
          "Multer handles multipart/form-data — the encoding type required for file uploads.",
          "diskStorage gives full control over filename and destination; memoryStorage stores in RAM (for cloud uploads).",
          "req.file (single upload) and req.files (multiple) contain uploaded file information.",
          "Always validate file type and size — never accept arbitrary uploads without restrictions."
        ]
      }

    ]
  },

  {
    title: "Working with Cookies",
    subtitle: "Explained Like a Restaurant's Loyalty Card",

    sections: [

      {
        heading: "Think About a Loyalty Card",

        paragraphs: [
          "When you first visit a restaurant, they give you a loyalty card with a unique ID. You keep this card and present it every time you return — the restaurant scans it to recognize you, check your accumulated points, and apply any rewards. The card is small, stored with you, and presented automatically with each visit.",

          "HTTP cookies work exactly this way — small pieces of data stored in the browser, automatically sent with every request to that domain, allowing the server to recognize and remember information about the user across multiple requests."
        ]
      },

      {
        heading: "Setting Up cookie-parser",

        code: `npm install cookie-parser`,

        paragraphs: [],

        code: `const cookieParser = require("cookie-parser");

// Apply globally — parses cookies from every request:
app.use(cookieParser());

// Now req.cookies contains all cookies:
app.get("/", (req, res) => {
  console.log(req.cookies); // { sessionId: "abc123", theme: "dark" }
});`,

        paragraphs: [
          "Without cookie-parser, req.cookies is undefined — the middleware parses the Cookie header into a usable object, exactly like having a system that can read the loyalty card's barcode."
        ]
      },

      {
        heading: "Setting Cookies",

        code: `app.post("/login", async (req, res) => {
  // After successful authentication:
  res.cookie("userId", user._id.toString(), {
    httpOnly: true,   // Not accessible via JavaScript (XSS protection)
    secure: true,     // Only sent over HTTPS
    maxAge: 24 * 60 * 60 * 1000, // 24 hours in milliseconds
    sameSite: "Strict" // CSRF protection
  });

  res.json({ message: "Logged in successfully" });
});`,

        paragraphs: [
          "Cookie security options matter enormously: httpOnly prevents JavaScript from reading the cookie (protecting against XSS attacks), secure ensures it only travels over HTTPS, and sameSite prevents cross-site request forgery. Always set all three for authentication cookies."
        ]
      },

      {
        heading: "Reading and Clearing Cookies",

        code: `// Reading:
app.get("/dashboard", (req, res) => {
  const userId = req.cookies.userId;

  if (!userId) {
    return res.redirect("/login");
  }

  res.json({ message: \`Welcome, user \${userId}\` });
});

// Clearing (logging out):
app.post("/logout", (req, res) => {
  res.clearCookie("userId");
  res.json({ message: "Logged out" });
});`,

        paragraphs: [
          "res.clearCookie() removes the cookie from the browser — like shredding the loyalty card when someone cancels their membership. The browser won't include it in future requests after clearing."
        ]
      },

      {
        heading: "JWT in Cookies vs localStorage",

        paragraphs: [
          "Your current project stores JWT in localStorage (more common in React SPAs). An alternative is storing JWT in an httpOnly cookie — more secure against XSS (JavaScript can't read httpOnly cookies) but requires handling CSRF. Both approaches are valid; cookies are generally considered more secure for sensitive tokens."
        ]
      },

      {
        heading: "Important Points to Remember",

        points: [
          "Cookies are automatically sent with every request to the domain — browsers handle this.",
          "Always set httpOnly, secure, and sameSite for authentication cookies.",
          "res.cookie() sets; req.cookies reads; res.clearCookie() removes.",
          "cookie-parser middleware is required to access req.cookies."
        ]
      }

    ]
  },

  {
    title: "Sessions in Express",
    subtitle: "Explained Like a Hotel's Room Key System",

    sections: [

      {
        heading: "Think About a Hotel's Key Card System",

        paragraphs: [
          "When you check into a hotel, you get a key card — a small card with a room number encoded on it. The card itself contains minimal information; all the real details (your full name, payment info, room preferences, special requests) stay securely in the hotel's own system. Your card is just a reference ID that the hotel uses to look up your complete details.",

          "Express sessions work exactly this way — the browser gets a small session ID cookie, while all the actual session data (user preferences, shopping cart, authentication state) stays on the server, retrieved using that ID on each request."
        ]
      },

      {
        heading: "Sessions vs JWTs — The Key Difference",

        points: [
          "JWT — stateless, all data IN the token, server verifies without any storage lookup",
          "Sessions — stateful, only an ID in the cookie, all data stored on the server/database",
          "JWT: scales easily (no server storage), but can't be invalidated until expiry",
          "Sessions: can be invalidated instantly (delete from server), but requires server-side storage"
        ]
      },

      {
        heading: "Setting Up express-session",

        code: `npm install express-session`,

        paragraphs: [],

        code: `const session = require("express-session");

app.use(session({
  secret: process.env.SESSION_SECRET, // Sign the session ID cookie
  resave: false,           // Don't save session if unmodified
  saveUninitialized: false, // Don't create session until data stored
  cookie: {
    secure: true,          // HTTPS only
    httpOnly: true,
    maxAge: 24 * 60 * 60 * 1000 // 24 hours
  }
}));`,

        paragraphs: [
          "The secret signs the session ID cookie — without it, anyone could forge a session ID. resave: false and saveUninitialized: false are performance-friendly defaults — no unnecessary storage operations."
        ]
      },

      {
        heading: "Using Sessions",

        code: `// Setting session data after login:
app.post("/login", async (req, res) => {
  const user = await User.findOne({ email: req.body.email });
  // ... verify password ...

  req.session.userId = user._id;  // Store in session
  req.session.role = user.role;

  res.json({ message: "Logged in" });
});

// Reading session data on protected routes:
app.get("/dashboard", (req, res) => {
  if (!req.session.userId) {
    return res.status(401).json({ error: "Not authenticated" });
  }
  res.json({ userId: req.session.userId });
});

// Destroying session on logout:
app.post("/logout", (req, res) => {
  req.session.destroy((err) => {
    res.clearCookie("connect.sid"); // Clear the session cookie
    res.json({ message: "Logged out" });
  });
});`,

        paragraphs: [
          "req.session is your data store for that specific user's session — like the hotel's database record for your room key. Any data you add persists across requests until the session expires or is destroyed."
        ]
      },

      {
        heading: "Production Session Storage",

        paragraphs: [
          "By default, express-session stores sessions in memory — this resets on every server restart and doesn't scale across multiple servers. For production, use a persistent store like connect-mongo (MongoDB) or connect-redis (Redis), ensuring sessions survive restarts and work across server instances."
        ]
      },

      {
        heading: "Important Points to Remember",

        points: [
          "Sessions store data on the server; only a session ID goes to the browser as a cookie.",
          "Sessions can be immediately invalidated (deleted from server); JWTs cannot until expiry.",
          "Always use a persistent session store (MongoDB/Redis) in production, never the default memory store.",
          "For MERN SPAs with React, JWTs are more common; sessions suit traditional server-rendered apps better."
        ]
      }

    ]
  },

  {
    title: "Input Sanitization",
    subtitle: "Explained Like a Security Guard Checking Bags at the Entrance",

    sections: [

      {
        heading: "Think About Airport Security",

        paragraphs: [
          "An airport security check doesn't just verify your ticket — it X-rays your bags, removes potentially dangerous items, and ensures only safe, permitted items pass through to the secure area. Even if you have a valid ticket (authenticated), dangerous items are removed before you reach the gate.",

          "Input sanitization in Express works exactly this way — even after authentication, incoming data is cleaned and stripped of potentially harmful content before it touches your database or business logic."
        ]
      },

      {
        heading: "Why Sanitization Is Critical",

        paragraphs: [
          "Two major attack categories target unsanitized input: XSS (Cross-Site Scripting) — where malicious JavaScript is stored in your database and served to other users, executing in their browsers; and NoSQL Injection — where MongoDB operators (like $gt, $where) are injected through request data, bypassing your queries entirely."
        ]
      },

      {
        heading: "NoSQL Injection Attack Example",

        code: `// An attacker sends this as the login body:
{
  "email": { "$gt": "" },  // MongoDB operator!
  "password": { "$gt": "" }
}

// Without sanitization, this query matches ANY user:
User.findOne({ email: { "$gt": "" }, password: { "$gt": "" } })
// Returns the first user in the database — attacker is logged in!`,

        paragraphs: [
          "MongoDB operators in request data can manipulate your queries in dangerous ways. Sanitization removes these operators before they reach your database queries."
        ]
      },

      {
        heading: "Sanitizing with express-mongo-sanitize",

        code: `npm install express-mongo-sanitize`,

        paragraphs: [],

        code: `const mongoSanitize = require("express-mongo-sanitize");

// Removes MongoDB operators from req.body, req.params, req.query:
app.use(mongoSanitize());

// Now the attack body becomes:
// { "email": {}, "password": {} } — harmless, query finds nothing`,

        paragraphs: [
          "express-mongo-sanitize strips keys starting with $ or containing dots from all user input — like the airport scanner removing prohibited items before they reach the secure area."
        ]
      },

      {
        heading: "XSS Prevention with xss-clean",

        code: `npm install xss-clean`,

        paragraphs: [],

        code: `const xss = require("xss-clean");

app.use(xss());

// If someone submits:
// { "name": "<script>alert('hacked!')</script>" }

// After xss-clean:
// { "name": "&lt;script&gt;alert('hacked!')&lt;/script&gt;" }
// Stored as escaped text — harmless when displayed`,

        paragraphs: [
          "xss-clean converts HTML special characters to their safe encoded equivalents — the script tags become harmless text, never executable JavaScript, even if stored in your database and later displayed to other users."
        ]
      },

      {
        heading: "Important Points to Remember",

        points: [
          "Sanitization removes or escapes dangerous content from user input before processing.",
          "express-mongo-sanitize prevents NoSQL injection by removing MongoDB operators from input.",
          "xss-clean prevents XSS attacks by HTML-encoding script tags and special characters.",
          "Apply both as global middleware — all input should be sanitized, not just specific routes."
        ]
      }

    ]
  },

  {
    title: "Rate Limiting",
    subtitle: "Explained Like an ATM's Daily Withdrawal Limit",

    sections: [

      {
        heading: "Think About ATM Withdrawal Limits",

        paragraphs: [
          "An ATM doesn't let you withdraw unlimited amounts — it has a daily limit and might temporarily block your card after too many failed PIN attempts, protecting both the bank and legitimate card holders from fraud and abuse.",

          "API rate limiting works exactly this way — limiting how many requests a single client can make in a time window, protecting your server from abuse, brute-force attacks, and accidental hammering by buggy clients."
        ]
      },

      {
        heading: "Installing express-rate-limit",

        code: `npm install express-rate-limit`,

        paragraphs: []
      },

      {
        heading: "Global Rate Limiter",

        code: `const rateLimit = require("express-rate-limit");

// Apply to all requests:
const globalLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minute window
  max: 100,                  // Max 100 requests per window per IP
  message: {
    error: "Too many requests, please try again in 15 minutes"
  },
  standardHeaders: true,  // Send RateLimit headers in response
  legacyHeaders: false
});

app.use(globalLimiter);`,

        paragraphs: [
          "standardHeaders: true adds RateLimit-Limit, RateLimit-Remaining, and RateLimit-Reset headers to responses — clients can read these to know how many requests they have left and when the window resets, like an ATM showing your remaining daily limit."
        ]
      },

      {
        heading: "Stricter Limits for Sensitive Routes",

        code: `// Much stricter for login — prevent brute force:
const loginLimiter = rateLimit({
  windowMs: 60 * 60 * 1000, // 1 hour window
  max: 10,                   // Only 10 login attempts per hour
  message: {
    error: "Too many login attempts. Please try again in 1 hour."
  },
  skipSuccessfulRequests: true // Don't count successful logins
});

// Apply to specific routes only:
app.post("/login", loginLimiter, loginHandler);
app.post("/signup", loginLimiter, signupHandler);`,

        paragraphs: [
          "skipSuccessfulRequests: true only counts failed/error responses — like an ATM that only counts failed PIN attempts toward the lockout, not successful withdrawals. This is perfect for login endpoints where legitimate users shouldn't be penalized for successfully logging in."
        ]
      },

      {
        heading: "Custom Key Generator — By User Instead of IP",

        code: `const userLimiter = rateLimit({
  windowMs: 60 * 1000,
  max: 60,
  keyGenerator: (req) => {
    // Rate limit by user ID instead of IP (after authentication):
    return req.user?.id || req.ip;
  }
});`,

        paragraphs: [
          "By default, rate limiting is per IP address. For authenticated routes, limiting per user ID is fairer — users behind shared IPs (offices, universities) won't share each other's limits, like the ATM tracking limits per card rather than per location."
        ]
      },

      {
        heading: "Important Points to Remember",

        points: [
          "Rate limiting protects against brute force attacks, DDoS, and accidental request flooding.",
          "Apply stricter limits to sensitive endpoints (login, signup, password reset) than general API routes.",
          "skipSuccessfulRequests: true on login endpoints only penalizes failed attempts.",
          "standardHeaders: true provides clients with limit information in response headers."
        ]
      }

    ]
  },

  {
    title: "API Versioning",
    subtitle: "Explained Like Product Editions That Can Coexist",

    sections: [

      {
        heading: "Think About Product Editions",

        paragraphs: [
          "When Microsoft releases Office 2024, they don't immediately force everyone still using Office 2021 to upgrade on day one — both versions coexist, serving different users, until old versions are eventually retired. Users who haven't upgraded yet continue with the old version while new features are available in the new one.",

          "API versioning works exactly this way — allowing multiple versions of your API to coexist, so existing clients using v1 continue working while new clients can use v2 with different or improved behavior."
        ]
      },

      {
        heading: "Why API Versioning Matters",

        paragraphs: [
          "Your React frontend and your Express API are separate deployments — if you change an API response structure (removing a field, renaming it), your already-deployed frontend breaks immediately. Versioning allows you to make breaking changes in v2 while v1 continues serving existing clients, giving you time to update the frontend."
        ]
      },

      {
        heading: "Method 1 — URL Path Versioning (Most Common)",

        code: `// Version 1 routes:
const v1Router = require("./routes/v1");
app.use("/api/v1", v1Router);

// Version 2 routes (new features, breaking changes):
const v2Router = require("./routes/v2");
app.use("/api/v2", v2Router);

// Both work simultaneously:
// GET /api/v1/courses → returns { courses: [...] }
// GET /api/v2/courses → returns { data: { courses: [...] }, meta: { total: 10 } }`,

        paragraphs: [
          "URL versioning is the most visible and widely used approach — the version is explicit in every URL, making it immediately clear which version is being used in logs, documentation, and debugging."
        ]
      },

      {
        heading: "Method 2 — Header Versioning",

        code: `// Client sends: Accept: application/vnd.edunexa.v2+json
// Or: API-Version: 2

app.use((req, res, next) => {
  const version = req.headers["api-version"] || "1";
  req.apiVersion = version;
  next();
});

app.get("/courses", (req, res) => {
  if (req.apiVersion === "2") {
    return res.json({
      data: { courses: [] },
      meta: { total: 0 }
    });
  }
  res.json({ courses: [] }); // v1 format
});`,

        paragraphs: [
          "Header versioning keeps URLs clean but is less visible — the version is hidden in headers. Preferred by some large APIs (GitHub uses Accept headers), but harder to test in a browser directly."
        ]
      },

      {
        heading: "Organizing Versioned Routes",

        code: `routes/
├── v1/
│   ├── index.js        // v1 router
│   ├── userRoutes.js   // v1 user endpoints
│   └── courseRoutes.js // v1 course endpoints
└── v2/
    ├── index.js        // v2 router
    ├── userRoutes.js   // v2 user endpoints (new fields)
    └── courseRoutes.js // v2 course endpoints (new format)`,

        paragraphs: [
          "Separate folders per version keeps the codebase organized — each version's routes are independent, and you can deprecate an entire version by simply removing its router mount from server.js without affecting other versions."
        ]
      },

      {
        heading: "Important Points to Remember",

        points: [
          "API versioning allows breaking changes without breaking existing clients.",
          "URL versioning (/api/v1/, /api/v2/) is the most common and transparent approach.",
          "Never make breaking changes to an existing version — only add features in the same version.",
          "Set a deprecation timeline for old versions — communicate it clearly to API consumers."
        ]
      }

    ]
  },

  {
    title: "Pagination & Filtering",
    subtitle: "Explained Like a Library Catalogue With Page Numbers and Subject Filters",

    sections: [

      {
        heading: "Think About a Library Catalogue",

        paragraphs: [
          "A library with 50,000 books doesn't show every book on one page — it shows 20 books per page with page numbers, and lets you filter by genre, author, or publication year. Without pagination, you'd get a single overwhelming list; without filtering, you'd have to scroll through irrelevant results.",

          "Pagination and filtering in Express APIs work exactly this way — returning manageable chunks of data (pages) and allowing clients to narrow results by specific criteria, making your API both performant and useful at scale."
        ]
      },

      {
        heading: "Basic Pagination",

        code: `app.get("/courses", async (req, res) => {
  const page = parseInt(req.query.page) || 1;
  const limit = parseInt(req.query.limit) || 10;
  const skip = (page - 1) * limit;

  const total = await Course.countDocuments();
  const courses = await Course.find()
    .skip(skip)
    .limit(limit);

  res.json({
    data: courses,
    pagination: {
      currentPage: page,
      totalPages: Math.ceil(total / limit),
      totalItems: total,
      itemsPerPage: limit,
      hasNextPage: page < Math.ceil(total / limit),
      hasPrevPage: page > 1
    }
  });
});

// Usage: GET /courses?page=2&limit=5`,

        paragraphs: [
          "skip((page-1) * limit) jumps to the correct starting position — like opening a book to exactly the right page. The pagination metadata in the response lets the frontend build proper page navigation without making extra requests."
        ]
      },

      {
        heading: "Filtering",

        code: `app.get("/courses", async (req, res) => {
  const page = parseInt(req.query.page) || 1;
  const limit = parseInt(req.query.limit) || 10;

  // Build filter object from query params:
  const filter = {};

  if (req.query.level) {
    filter.level = req.query.level;
  }

  if (req.query.minProgress) {
    filter.progress = { $gte: parseInt(req.query.minProgress) };
  }

  if (req.query.completed) {
    filter.completed = req.query.completed === "true";
  }

  const total = await Course.countDocuments(filter);
  const courses = await Course.find(filter)
    .skip((page - 1) * limit)
    .limit(limit);

  res.json({ data: courses, total, page, limit });
});

// Usage: GET /courses?level=Beginner&minProgress=50&page=1`,

        paragraphs: [
          "Building the filter object dynamically — only adding properties when query params are provided — means the same route handles both filtered and unfiltered requests cleanly, like a library catalogue that works equally well with or without subject filters applied."
        ]
      },

      {
        heading: "Reusable Pagination Helper",

        code: `// utils/pagination.js:
function paginate(query) {
  const page = parseInt(query.page) || 1;
  const limit = Math.min(parseInt(query.limit) || 10, 100); // Max 100
  const skip = (page - 1) * limit;
  return { page, limit, skip };
}

// Usage in any route:
const { page, limit, skip } = paginate(req.query);
const data = await Model.find(filter).skip(skip).limit(limit);`,

        paragraphs: [
          "Capping limit at 100 prevents clients from requesting unlimited data — like a library that shows at most 100 books per page regardless of what a patron requests, protecting server performance."
        ]
      },

      {
        heading: "Important Points to Remember",

        points: [
          "skip() and limit() implement pagination — skip((page-1)*limit) jumps to the right position.",
          "Always return pagination metadata so clients can build navigation without extra requests.",
          "Build filter objects dynamically from query params — only include fields when params are provided.",
          "Cap the maximum limit value server-side to prevent performance-destroying large queries."
        ]
      }

    ]
  },

  {
    title: "Sorting & Searching",
    subtitle: "Explained Like a Bookshelf That Can Be Rearranged and Searched",

    sections: [

      {
        heading: "Think About a Smart Bookshelf",

        paragraphs: [
          "A well-organized bookshelf can be arranged in multiple ways — alphabetically by title, by publication date newest-first, by author name, or by popularity. You can also search it for any book containing a specific keyword in its title or description, getting relevant results regardless of position.",

          "Sorting and searching in Express APIs provide these same capabilities — letting clients receive data in their preferred order and find relevant results by keyword, without returning everything and sorting client-side."
        ]
      },

      {
        heading: "Sorting",

        code: `app.get("/courses", async (req, res) => {
  // ?sort=title        → sort by title ascending
  // ?sort=-createdAt   → sort by createdAt descending (- prefix)
  // ?sort=level,-title → sort by level asc, then title desc

  let sortOption = {};

  if (req.query.sort) {
    const sortFields = req.query.sort.split(",");

    sortFields.forEach(field => {
      if (field.startsWith("-")) {
        sortOption[field.slice(1)] = -1; // Descending
      } else {
        sortOption[field] = 1; // Ascending
      }
    });
  } else {
    sortOption = { createdAt: -1 }; // Default: newest first
  }

  const courses = await Course.find().sort(sortOption);
  res.json(courses);
});`,

        paragraphs: [
          "The minus prefix convention for descending sort (?sort=-createdAt) is widely used in REST APIs — like a bookshelf that understands 'show me books from newest to oldest' without needing a separate parameter for direction."
        ]
      },

      {
        heading: "Text Search with Regex",

        code: `app.get("/courses/search", async (req, res) => {
  const { q } = req.query; // ?q=javascript

  if (!q) {
    return res.status(400).json({ error: "Search query required" });
  }

  // Case-insensitive partial match:
  const courses = await Course.find({
    $or: [
      { title: { $regex: q, $options: "i" } },
      { description: { $regex: q, $options: "i" } }
    ]
  });

  res.json({ results: courses, count: courses.length });
});`,

        paragraphs: [
          "$regex with $options: 'i' enables case-insensitive partial matching — searching 'java' finds 'JavaScript', 'Java Basics', 'Core Java' regardless of case. $or searches across multiple fields simultaneously, like checking both the book's title and description for the keyword."
        ]
      },

      {
        heading: "MongoDB Text Index — Professional Search",

        code: `// In your Mongoose schema — create text indexes:
courseSchema.index({ title: "text", description: "text" });

// Then use $text search (faster and more feature-rich than regex):
const courses = await Course.find({
  $text: { $search: "javascript node" }
}, {
  score: { $meta: "textScore" } // Relevance score
}).sort({ score: { $meta: "textScore" } }); // Sort by relevance`,

        paragraphs: [
          "MongoDB's native text search is faster than regex on large collections and supports relevance scoring — results ranked by how well they match the query, like a library catalogue sorting by how relevant each book is to your search terms."
        ]
      },

      {
        heading: "Important Points to Remember",

        points: [
          "Use the - prefix convention for descending sort fields — widely recognized REST convention.",
          "$regex with $options:'i' enables case-insensitive partial string matching.",
          "MongoDB text indexes enable faster, relevance-scored full-text search on large collections.",
          "Combine pagination + filtering + sorting in one route for a complete, flexible API endpoint."
        ]
      }

    ]
  },

  {
    title: "Aggregation in Express APIs",
    subtitle: "Explained Like a Data Analyst Producing a Custom Report",

    sections: [

      {
        heading: "Think About a Business Analyst's Report",

        paragraphs: [
          "A business analyst doesn't just pull raw data — they transform it: group sales by region, calculate averages, count totals per category, find the top performers, join data from multiple sources. The raw database records become a meaningful, computed summary that answers specific business questions.",

          "MongoDB's aggregation pipeline in Express does exactly this — transforming raw documents through a series of stages to produce computed results that can't be achieved with simple find() queries."
        ]
      },

      {
        heading: "The Aggregation Pipeline",

        code: `app.get("/stats/courses", async (req, res) => {
  const stats = await Course.aggregate([
    // Stage 1 — $match: filter documents (like WHERE in SQL)
    { $match: { completed: true } },

    // Stage 2 — $group: group and compute
    {
      $group: {
        _id: "$level",            // Group by level field
        count: { $sum: 1 },       // Count documents in each group
        avgProgress: { $avg: "$progress" }, // Average progress
        maxTopics: { $max: "$topics" }      // Max topics
      }
    },

    // Stage 3 — $sort: sort results
    { $sort: { count: -1 } },

    // Stage 4 — $project: shape the output
    {
      $project: {
        level: "$_id",
        _id: 0,
        count: 1,
        avgProgress: { $round: ["$avgProgress", 1] }
      }
    }
  ]);

  res.json(stats);
});`,

        paragraphs: [
          "Each stage transforms the documents from the previous stage — like passing data through an analyst's series of processing steps: first filter, then group and compute, then sort, then format for presentation."
        ]
      },

      {
        heading: "Lookup — Joining Collections",

        code: `app.get("/users-with-progress", async (req, res) => {
  const result = await User.aggregate([
    // $lookup = LEFT JOIN in SQL:
    {
      $lookup: {
        from: "progresses",    // The other collection to join
        localField: "_id",     // User's _id
        foreignField: "userId",// matches progresses.userId
        as: "progressData"     // Result field name
      }
    },
    {
      $project: {
        name: 1,
        email: 1,
        coursesCount: { $size: "$progressData" }
      }
    }
  ]);

  res.json(result);
});`,

        paragraphs: [
          "$lookup joins data from two collections in one query — like an analyst combining the sales spreadsheet with the customer database to produce a report showing each customer's purchase history without multiple separate queries."
        ]
      },

      {
        heading: "Common Aggregation Stages Reference",

        points: [
          "$match — filter documents (use early to reduce data processed by later stages)",
          "$group — group documents and compute values ($sum, $avg, $max, $min, $push)",
          "$project — include/exclude/rename/compute fields",
          "$sort — sort results by one or more fields",
          "$limit and $skip — pagination within aggregation",
          "$lookup — join data from another collection",
          "$unwind — flatten array fields into separate documents"
        ]
      },

      {
        heading: "Important Points to Remember",

        points: [
          "Aggregation pipeline transforms documents through sequential stages — each stage's output feeds the next.",
          "Use $match early to filter data before expensive operations like $group or $lookup.",
          "$lookup enables joining data across collections — powerful but can be slow on large unindexed collections.",
          "Aggregation is far more powerful than find() for analytics, reports, and complex computed responses."
        ]
      }

    ]
  },

  {
    title: "Advanced Error Handling",
    subtitle: "Explained Like a Hospital's Emergency Triage System",

    sections: [

      {
        heading: "Think About Hospital Triage",

        paragraphs: [
          "A hospital emergency room doesn't treat all patients the same — it triages them by severity. A patient with a minor cut waits longer than one with chest pain. Critical cases get specialized treatment immediately. Each type of emergency has a different protocol, and nurses are trained to categorize and respond appropriately to each.",

          "Advanced error handling in Express follows this triage philosophy — categorizing errors by type, assigning appropriate HTTP status codes, providing useful client-facing messages, and logging detailed internal information for developers, all through a well-designed error system."
        ]
      },

      {
        heading: "Custom Error Class",

        code: `// utils/AppError.js:
class AppError extends Error {
  constructor(message, statusCode) {
    super(message);
    this.statusCode = statusCode;
    this.status = statusCode >= 400 && statusCode < 500 ? "fail" : "error";
    this.isOperational = true; // We created this deliberately (vs unexpected bugs)

    Error.captureStackTrace(this, this.constructor);
  }
}

module.exports = AppError;

// Usage anywhere in your app:
const AppError = require("./utils/AppError");

if (!user) {
  throw new AppError("User not found", 404);
}

if (!isMatch) {
  throw new AppError("Invalid credentials", 401);
}`,

        paragraphs: [
          "isOperational distinguishes errors you deliberately throw (user not found, invalid input) from unexpected programmer errors (syntax errors, undefined variable access) — like triaging between a patient who came to the ER with a specific complaint versus someone who collapsed unexpectedly."
        ]
      },

      {
        heading: "Categorized Error Handler",

        code: `// middleware/errorHandler.js:
const AppError = require("../utils/AppError");

function handleCastError(err) {
  return new AppError(\`Invalid \${err.path}: \${err.value}\`, 400);
}

function handleDuplicateKey(err) {
  const field = Object.keys(err.keyValue)[0];
  return new AppError(\`\${field} already exists\`, 409);
}

function handleValidationError(err) {
  const messages = Object.values(err.errors).map(e => e.message);
  return new AppError(\`Validation failed: \${messages.join(". ")}\`, 400);
}

module.exports = (err, req, res, next) => {
  let error = { ...err, message: err.message };

  // Categorize Mongoose errors:
  if (err.name === "CastError") error = handleCastError(err);
  if (err.code === 11000) error = handleDuplicateKey(err);
  if (err.name === "ValidationError") error = handleValidationError(err);
  if (err.name === "JsonWebTokenError") error = new AppError("Invalid token", 401);
  if (err.name === "TokenExpiredError") error = new AppError("Token expired", 401);

  res.status(error.statusCode || 500).json({
    status: error.status || "error",
    message: error.message || "Something went wrong"
  });
};`,

        paragraphs: [
          "Each Mongoose and JWT error type gets translated into a clear, appropriate AppError — like each type of medical emergency getting the right triage category and treatment protocol."
        ]
      },

      {
        heading: "Async Error Wrapper — Eliminating try/catch Repetition",

        code: `// utils/catchAsync.js:
function catchAsync(fn) {
  return (req, res, next) => {
    fn(req, res, next).catch(next); // Catch any async error → next(err)
  };
}

module.exports = catchAsync;

// Clean route handlers — no try/catch needed:
const catchAsync = require("../utils/catchAsync");

router.get("/courses/:id", catchAsync(async (req, res) => {
  const course = await Course.findById(req.params.id);

  if (!course) {
    throw new AppError("Course not found", 404);
  }

  res.json(course);
}));`,

        paragraphs: [
          "catchAsync wraps async route handlers — any thrown error or rejected promise gets automatically forwarded to next(), which passes it to the global error handler, without writing try/catch in every single route."
        ]
      },

      {
        heading: "Important Points to Remember",

        points: [
          "A custom AppError class carries statusCode and isOperational — distinguishing expected from unexpected errors.",
          "The global error handler categorizes error types and translates them to appropriate HTTP responses.",
          "catchAsync eliminates repetitive try/catch blocks in async route handlers.",
          "Never expose raw error stack traces to clients — only show safe, user-friendly messages."
        ]
      }

    ]
  },

  {
    title: "Logging with Morgan & Winston",
    subtitle: "Explained Like a Restaurant's Order Log vs a Detailed Kitchen Journal",

    sections: [

      {
        heading: "Think About Two Kinds of Records",

        paragraphs: [
          "A restaurant keeps two kinds of records: the order log at the front desk (quick, simple entries showing who ordered what and when — visible to servers) and a detailed kitchen journal (full recipes, preparation notes, what went wrong, ingredient issues — used by the chef for improvement and troubleshooting).",

          "Morgan and Winston serve these exact two roles — Morgan is the fast, simple HTTP request logger (the order log), while Winston is the comprehensive, structured application logger (the kitchen journal) for tracking application events, errors, and diagnostics."
        ]
      },

      {
        heading: "Morgan — HTTP Request Logging",

        code: `npm install morgan`,

        paragraphs: [],

        code: `const morgan = require("morgan");

// Predefined formats:
app.use(morgan("dev"));     // Colorized, concise for development
app.use(morgan("combined")); // Apache combined format for production

// Custom format:
app.use(morgan(":method :url :status :res[content-length] - :response-time ms"));

// Output example (dev format):
// POST /login 200 312 - 45.123 ms
// GET /courses 404 - - 12.456 ms`,

        paragraphs: [
          "'dev' format is colorized (green for 2xx, red for 5xx) and concise — perfect for development. 'combined' produces the Apache log format widely understood by log analysis tools — better for production where logs are processed by external systems."
        ]
      },

      {
        heading: "Winston — Application-Level Logging",

        code: `npm install winston`,

        paragraphs: [],

        code: `const winston = require("winston");

const logger = winston.createLogger({
  level: "info",
  format: winston.format.combine(
    winston.format.timestamp(),
    winston.format.errors({ stack: true }),
    winston.format.json()
  ),
  transports: [
    // Write all logs to console:
    new winston.transports.Console({
      format: winston.format.combine(
        winston.format.colorize(),
        winston.format.simple()
      )
    }),
    // Write errors to a file:
    new winston.transports.File({ filename: "logs/error.log", level: "error" }),
    // Write all logs to a file:
    new winston.transports.File({ filename: "logs/combined.log" })
  ]
});

module.exports = logger;`,

        paragraphs: [
          "Transports define where logs go — console for development visibility, files for persistent production records. Multiple transports can run simultaneously, like the kitchen journal existing both as a whiteboard (immediate visibility) and a written record book (permanent reference)."
        ]
      },

      {
        heading: "Using Winston Throughout Your App",

        code: `const logger = require("./utils/logger");

// Different log levels:
logger.info("Server started on port 5000");
logger.warn("Rate limit approaching for IP: 192.168.1.1");
logger.error("Database connection failed", { error: err.message });

// In your error handler:
module.exports = (err, req, res, next) => {
  logger.error(\`\${err.statusCode || 500} - \${err.message} - \${req.url}\`, {
    stack: err.stack,
    userId: req.user?.id
  });

  res.status(err.statusCode || 500).json({ message: err.message });
};`,

        paragraphs: [
          "Structured logging with context (userId, URL, stack trace) makes debugging production issues dramatically easier — like a kitchen journal that records not just what went wrong but who was cooking, which recipe, and the full sequence of steps leading to the problem."
        ]
      },

      {
        heading: "Important Points to Remember",

        points: [
          "Morgan logs HTTP requests — fast, simple, placed as early middleware.",
          "Winston logs application events — structured, multi-transport, with log levels (error/warn/info/debug).",
          "Use 'dev' format for development, 'combined' for production with external log analysis.",
          "Always log errors with context (userId, route, stack trace) for effective production debugging."
        ]
      }

    ]
  },

  {
    title: "Testing Express APIs",
    subtitle: "Explained Like a Quality Assurance Department Running Systematic Checks",

    sections: [

      {
        heading: "Think About a QA Department",

        paragraphs: [
          "A professional product company has a QA department that systematically tests every feature before release — checking that login works with valid credentials, rejects invalid ones, returns the right error messages, and handles edge cases. They run these checks repeatedly after every code change, catching regressions before customers do.",

          "API testing follows this same systematic approach — automated tests that verify your Express routes behave correctly under various conditions, running automatically to catch bugs before deployment."
        ]
      },

      {
        heading: "Installing Testing Tools",

        code: `npm install --save-dev jest supertest`,

        paragraphs: [
          "Jest is the test runner and assertion library — it runs your test files and reports results. Supertest allows making HTTP requests to your Express app in tests without actually starting a server — like a QA tester with a simulated customer terminal that doesn't need the real shop to be open."
        ]
      },

      {
        heading: "Structuring Your App for Testing",

        code: `// app.js — export the app WITHOUT listening:
const express = require("express");
const app = express();

app.use(express.json());
app.use("/api/users", require("./routes/userRoutes"));

module.exports = app; // Export, don't listen here

// server.js — only starts the server:
const app = require("./app");
app.listen(5000, () => console.log("Server running"));`,

        paragraphs: [
          "Separating the app from the listener is crucial for testing — supertest imports the app module directly and handles the server lifecycle internally, without port conflicts or needing a running server."
        ]
      },

      {
        heading: "Writing Your First API Tests",

        code: `// tests/auth.test.js:
const request = require("supertest");
const app = require("../app");
const mongoose = require("mongoose");

// Connect to test database before tests:
beforeAll(async () => {
  await mongoose.connect(process.env.MONGO_URI_TEST);
});

// Clean up after tests:
afterAll(async () => {
  await mongoose.connection.dropDatabase();
  await mongoose.connection.close();
});

describe("POST /api/users/signup", () => {
  test("should create a new user with valid data", async () => {
    const response = await request(app)
      .post("/api/users/signup")
      .send({ name: "Nishitha", email: "test@test.com", password: "password123" });

    expect(response.statusCode).toBe(201);
    expect(response.body).toHaveProperty("message");
  });

  test("should reject signup with missing fields", async () => {
    const response = await request(app)
      .post("/api/users/signup")
      .send({ email: "test@test.com" }); // Missing name and password

    expect(response.statusCode).toBe(400);
  });

  test("should reject duplicate email", async () => {
    // First signup:
    await request(app)
      .post("/api/users/signup")
      .send({ name: "User", email: "dup@test.com", password: "pass123" });

    // Second with same email:
    const response = await request(app)
      .post("/api/users/signup")
      .send({ name: "User2", email: "dup@test.com", password: "pass456" });

    expect(response.statusCode).toBe(400);
  });
});`,

        paragraphs: [
          "Each test describes one specific behavior — valid input creates a user (201), missing fields return bad request (400), duplicate email returns error. Like a QA checklist where each item verifies one specific expected behavior."
        ]
      },

      {
        heading: "Important Points to Remember",

        points: [
          "Separate app.js (Express app) from server.js (listener) — enables supertest to import the app without port conflicts.",
          "Use a separate test database (MONGO_URI_TEST) — never test against your real data.",
          "Test success cases, validation errors, and edge cases — not just the happy path.",
          "Run tests with npm test — add jest to scripts in package.json: { 'test': 'jest --detectOpenHandles' }."
        ]
      }

    ]
  },

  {
    title: "Express with TypeScript Intro",
    subtitle: "Explained Like Adding a Strict Spell-Checker to Your Code Editor",

    sections: [

      {
        heading: "Think About a Strict Spell-Checker",

        paragraphs: [
          "A basic text editor lets you type anything — no warnings if you make a mistake. A strict spell-checker immediately underlines errors as you type, catching problems before you submit your document. It doesn't change what you're writing, just immediately flags when something is wrong.",

          "TypeScript is exactly this strict checker for JavaScript — it catches type errors during development (while coding), before your code ever runs. 'This function expects a string, you're passing a number' gets flagged immediately in your editor, not discovered as a runtime crash later."
        ]
      },

      {
        heading: "Setting Up TypeScript with Express",

        code: `npm install typescript ts-node @types/node @types/express --save-dev
npx tsc --init`,

        paragraphs: [],

        code: `// tsconfig.json key settings:
{
  "compilerOptions": {
    "target": "ES2020",
    "module": "commonjs",
    "outDir": "./dist",
    "rootDir": "./src",
    "strict": true,
    "esModuleInterop": true
  }
}`,

        paragraphs: [
          "@types/express provides TypeScript type definitions for Express — it knows that req.body is any, req.params is an object of strings, res.json() exists, etc. Without it, TypeScript has no idea what Express objects contain."
        ]
      },

      {
        heading: "A Typed Express Route",

        code: `// src/routes/userRoutes.ts:
import express, { Request, Response, NextFunction } from "express";

const router = express.Router();

interface CreateUserBody {
  name: string;
  email: string;
  password: string;
}

router.post(
  "/signup",
  async (req: Request<{}, {}, CreateUserBody>, res: Response, next: NextFunction) => {
    const { name, email, password } = req.body;
    // TypeScript now knows: name, email, password are all strings
    // Accessing req.body.phoneNumber would be a compile-time error

    res.status(201).json({ message: "User created" });
  }
);

export default router;`,

        paragraphs: [
          "Request<Params, ResBody, ReqBody> is Express's generic type — specifying the body interface means TypeScript verifies you only access fields that actually exist on the request body, catching typos and wrong field names during development."
        ]
      },

      {
        heading: "Typed Middleware",

        code: `// Extend Express's Request type to include custom properties:
declare global {
  namespace Express {
    interface Request {
      user?: { id: string; email: string };
    }
  }
}

// Now req.user is typed throughout your entire application:
function verifyToken(req: Request, res: Response, next: NextFunction) {
  const token = req.headers.authorization;
  if (!token) return res.status(401).json({ error: "No token" });

  const decoded = jwt.verify(token, process.env.JWT_SECRET!) as JwtPayload;
  req.user = decoded; // TypeScript knows req.user shape
  next();
}`,

        paragraphs: [
          "Declaration merging extends Express's built-in Request type to include req.user — so every route handler after verifyToken knows exactly what req.user contains, with full autocomplete and type checking."
        ]
      },

      {
        heading: "Important Points to Remember",

        points: [
          "TypeScript adds static type checking to JavaScript — catches type errors during development, not at runtime.",
          "@types/express provides type definitions for all Express objects (Request, Response, Router, etc.).",
          "Generic Request<Params, ResBody, ReqBody> types your route's input and output shapes precisely.",
          "Declaration merging allows safely extending Express's Request type with custom properties like req.user."
        ]
      }

    ]
  },

  {
    title: "Express Security Best Practices",
    subtitle: "Explained Like a Bank's Multi-Layer Security System",

    sections: [

      {
        heading: "Think About a Bank's Security Layers",

        paragraphs: [
          "A bank doesn't rely on one single security measure — it has physical security (guards, locks), electronic security (cameras, card readers), procedural security (dual authorization for large transactions), and audit trails (every transaction logged). Each layer covers what others miss.",

          "Express API security follows the same multi-layer philosophy — no single measure is sufficient, but together they create a robust defense-in-depth that's significantly harder to breach than any single protection."
        ]
      },

      {
        heading: "Layer 1 — HTTP Security Headers with Helmet",

        code: `const helmet = require("helmet");

app.use(helmet()); // Sets 11 security headers automatically

// Key headers helmet sets:
// X-XSS-Protection: prevents XSS in older browsers
// X-Frame-Options: prevents clickjacking (your app in iframes)
// X-Content-Type-Options: prevents MIME sniffing
// Strict-Transport-Security: enforces HTTPS
// Content-Security-Policy: restricts resource loading`,

        paragraphs: [
          "One line of code, 11 security headers — like installing professional security hardware where a DIY setup would miss critical pieces."
        ]
      },

      {
        heading: "Layer 2 — Input Validation and Sanitization",

        code: `const { body, validationResult } = require("express-validator");

// Validate AND sanitize in one middleware:
const signupValidation = [
  body("email")
    .isEmail().withMessage("Invalid email format")
    .normalizeEmail(), // Sanitize: lowercase, trim

  body("password")
    .isLength({ min: 8 }).withMessage("Password too short")
    .matches(/\d/).withMessage("Password must contain a number"),

  body("name")
    .trim()
    .escape() // Sanitize: HTML encode special chars
    .notEmpty().withMessage("Name required")
];

app.post("/signup", signupValidation, (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  // Data is now validated and sanitized
});`,

        paragraphs: [
          "express-validator combines validation (is this a valid email?) and sanitization (normalize it) in one declarative middleware chain — like a bank form that both validates and standardizes the information you write before it enters their system."
        ]
      },

      {
        heading: "Layer 3 — Additional Security Measures",

        code: `// Prevent HTTP Parameter Pollution:
const hpp = require("hpp");
app.use(hpp());

// Prevent too-large request bodies:
app.use(express.json({ limit: "10kb" }));

// Disable fingerprinting:
app.disable("x-powered-by");

// Always use HTTPS in production:
app.use((req, res, next) => {
  if (process.env.NODE_ENV === "production" && !req.secure) {
    return res.redirect("https://" + req.headers.host + req.url);
  }
  next();
});`,

        paragraphs: [
          "HPP prevents attackers from sending duplicate query parameters to confuse your route handlers. Limiting request body size prevents memory exhaustion attacks. Disabling x-powered-by hides that you're using Express — small detail, but reduces information leakage."
        ]
      },

      {
        heading: "Security Checklist Summary",

        points: [
          "✅ helmet() for HTTP security headers",
          "✅ express-rate-limit for brute force protection",
          "✅ express-mongo-sanitize for NoSQL injection prevention",
          "✅ xss-clean or helmet's XSS filter for cross-site scripting",
          "✅ Input validation with express-validator",
          "✅ HTTPS enforcement in production",
          "✅ JWT secrets in environment variables, never in code",
          "✅ bcrypt for password hashing, never plain text storage"
        ]
      },

      {
        heading: "Important Points to Remember",

        points: [
          "Security is multi-layered — each measure covers different attack vectors.",
          "Apply helmet(), rate limiting, and input sanitization as global middleware on every Express app.",
          "Validate AND sanitize all user input — validation catches bad format, sanitization removes harmful content.",
          "Your MERN project already implements several of these — cors, bcrypt, JWT, express.json — build on that foundation."
        ]
      }

    ]
  },

  {
    title: "Performance Optimization",
    subtitle: "Explained Like Tuning a Race Car for Speed Without Breaking It",

    sections: [

      {
        heading: "Think About Race Car Tuning",

        paragraphs: [
          "A race car engineer doesn't randomly add power — they measure current performance, identify specific bottlenecks (aerodynamics? engine? tires?), make targeted improvements to the identified weak points, then measure again to verify improvement. Guessing without measuring wastes effort.",

          "Express API performance optimization follows this exact methodology — measure first, identify real bottlenecks, apply targeted improvements, verify with measurements. Never optimize blindly."
        ]
      },

      {
        heading: "Caching With Node-Cache",

        code: `npm install node-cache`,

        paragraphs: [],

        code: `const NodeCache = require("node-cache");
const cache = new NodeCache({ stdTTL: 300 }); // 5 minute cache

app.get("/courses", async (req, res) => {
  const cacheKey = "all-courses";

  // Check cache first:
  const cached = cache.get(cacheKey);
  if (cached) {
    return res.json({ data: cached, source: "cache" });
  }

  // Cache miss — fetch from database:
  const courses = await Course.find().lean();
  cache.set(cacheKey, courses);

  res.json({ data: courses, source: "database" });
});`,

        paragraphs: [
          ".lean() returns plain JavaScript objects instead of Mongoose documents — significantly faster for read-only queries since Mongoose document overhead (getters, setters, methods) is skipped. Caching avoids hitting the database for frequently-requested, rarely-changing data — like a race car's fuel efficiency improvement by not burning fuel unnecessarily."
        ]
      },

      {
        heading: "Database Query Optimization",

        code: `// Indexes — crucial for query performance:
// In your Mongoose schema:
userSchema.index({ email: 1 });         // Frequent lookup field
courseSchema.index({ level: 1, progress: -1 }); // Compound index

// Select only needed fields (projection):
const user = await User
  .findById(id)
  .select("name email role")  // Only fetch what you need
  .lean();                     // Plain object, no Mongoose overhead

// Avoid N+1 queries — use populate instead of separate queries:
const courses = await Course
  .find()
  .populate("instructor", "name email") // Join in one query
  .lean();`,

        paragraphs: [
          "Database indexes are the single biggest performance improvement for read-heavy APIs — a query on an unindexed field scans every document; an indexed query jumps directly to results. Like the difference between reading every page of a book to find a word versus using the index at the back."
        ]
      },

      {
        heading: "Response Compression",

        code: `npm install compression`,

        paragraphs: [],

        code: `const compression = require("compression");

// Compress all responses:
app.use(compression());

// Or compress only large responses:
app.use(compression({
  threshold: 1024, // Only compress responses > 1KB
  level: 6         // Compression level 1-9 (6 is a good balance)
}));`,

        paragraphs: [
          "Compression reduces response size by 60-80% for JSON and HTML — dramatically improving transfer speed on slow connections. Essential for mobile API clients and large dataset responses."
        ]
      },

      {
        heading: "Important Points to Remember",

        points: [
          "Measure before optimizing — use profiling to identify actual bottlenecks, not assumed ones.",
          "Database indexes provide the biggest performance gains for read-heavy APIs — add them on frequently queried fields.",
          ".lean() returns plain objects instead of Mongoose documents — significantly faster for read-only queries.",
          "Response compression reduces payload size 60-80% — always enable in production."
        ]
      }

    ]
  },

  {
    title: "API Documentation with Swagger",
    subtitle: "Explained Like a Professional Product Manual That Updates Itself",

    sections: [

      {
        heading: "Think About a Self-Updating Product Manual",

        paragraphs: [
          "A traditional product manual goes out of date the moment the product changes — someone has to manually update the manual separately. A smarter system generates the manual automatically from the product's actual specifications, so it's always accurate and up to date.",

          "Swagger (OpenAPI) documentation works exactly this way — generated directly from your Express route definitions and annotations, always reflecting your actual API, not a separate document that falls behind."
        ]
      },

      {
        heading: "Installing Swagger Tools",

        code: `npm install swagger-jsdoc swagger-ui-express`,

        paragraphs: [
          "swagger-jsdoc reads JSDoc comments from your route files and generates an OpenAPI specification. swagger-ui-express serves an interactive web UI from that spec, letting developers explore and test your API visually."
        ]
      },

      {
        heading: "Setting Up Swagger",

        code: `const swaggerJsdoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "EduNexa API",
      version: "1.0.0",
      description: "MERN Learning Platform API documentation"
    },
    servers: [
      { url: "http://localhost:5000", description: "Development" }
    ],
    components: {
      securitySchemes: {
        bearerAuth: {
          type: "http",
          scheme: "bearer",
          bearerFormat: "JWT"
        }
      }
    }
  },
  apis: ["./routes/*.js"] // Files containing JSDoc comments
};

const specs = swaggerJsdoc(options);

// Serve Swagger UI at /api-docs:
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(specs));`,

        paragraphs: [
          "After setup, visiting http://localhost:5000/api-docs shows an interactive UI listing all your endpoints — like a product manual that's both readable and interactive, letting developers test calls directly in the browser."
        ]
      },

      {
        heading: "Documenting Routes With JSDoc",

        code: `/**
 * @swagger
 * /api/users/login:
 *   post:
 *     summary: Authenticate a user
 *     tags: [Authentication]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required: [email, password]
 *             properties:
 *               email:
 *                 type: string
 *                 example: nishitha@example.com
 *               password:
 *                 type: string
 *                 example: mypassword123
 *     responses:
 *       200:
 *         description: Login successful, returns JWT token
 *       400:
 *         description: Invalid credentials
 */
router.post("/login", loginHandler);`,

        paragraphs: [
          "These JSDoc comments live directly above your route definitions — they document the request format, response shapes, and example values, all in one place next to the actual code they describe."
        ]
      },

      {
        heading: "Important Points to Remember",

        points: [
          "Swagger/OpenAPI generates interactive API documentation from JSDoc comments in your routes.",
          "The /api-docs UI lets developers test API endpoints directly in the browser — no Postman needed.",
          "Keep documentation next to route code — it stays accurate when routes change.",
          "Good documentation is essential for team collaboration and is expected in professional API projects."
        ]
      }

    ]
  },

  {
    title: "Express Project Structure Best Practices",
    subtitle: "Explained Like a Well-Organized Hospital With Clear Departments",

    sections: [

      {
        heading: "Think About a Well-Organized Hospital",

        paragraphs: [
          "A well-run hospital has clearly labeled departments — Emergency, Radiology, Cardiology, Pharmacy — each with their own staff, equipment, and procedures. A patient moves predictably through the system: triage → diagnosis → treatment → pharmacy. New doctors joining can quickly understand where everything is and how it all connects.",

          "A well-structured Express project follows this same clear organization — anyone joining the codebase immediately understands where to find routes, where business logic lives, where database models are, and how requests flow through the system."
        ]
      },

      {
        heading: "The Professional Structure",

        code: `backend/
├── src/
│   ├── config/
│   │   ├── database.js      // MongoDB connection
│   │   └── swagger.js       // Swagger configuration
│   │
│   ├── controllers/         // Request handlers (thin layer)
│   │   ├── userController.js
│   │   └── courseController.js
│   │
│   ├── services/            // Business logic (fat layer)
│   │   ├── userService.js
│   │   └── courseService.js
│   │
│   ├── models/              // Mongoose schemas
│   │   ├── User.js
│   │   └── Course.js
│   │
│   ├── routes/              // Route definitions
│   │   ├── userRoutes.js
│   │   └── courseRoutes.js
│   │
│   ├── middleware/          // Custom middleware
│   │   ├── auth.js          // verifyToken
│   │   ├── errorHandler.js
│   │   └── validate.js
│   │
│   ├── utils/               // Helper functions
│   │   ├── AppError.js
│   │   ├── catchAsync.js
│   │   └── pagination.js
│   │
│   └── app.js               // Express app (no listen)
│
├── tests/                   // Test files
├── logs/                    // Log files
├── server.js                // Entry point (listen only)
├── .env
├── .gitignore
└── package.json`,

        paragraphs: [
          "The controllers/services split is the most important architectural decision — controllers handle HTTP concerns (read req, call service, send res), services handle business logic (database queries, calculations, external calls). This separation makes both layers independently testable and replaceable."
        ]
      },

      {
        heading: "Controller vs Service — The Key Split",

        code: `// controllers/userController.js — thin HTTP layer:
const userService = require("../services/userService");

exports.login = catchAsync(async (req, res) => {
  const { email, password } = req.body;
  const result = await userService.loginUser(email, password);
  res.json(result);
});

// services/userService.js — fat business logic layer:
exports.loginUser = async (email, password) => {
  const user = await User.findOne({ email });
  if (!user) throw new AppError("Invalid credentials", 401);

  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) throw new AppError("Invalid credentials", 401);

  const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);
  return { token, user: { id: user._id, name: user.name } };
};`,

        paragraphs: [
          "The controller is thin — it only reads from req, calls the service, and sends res. The service contains all the actual logic — it's pure JavaScript with no HTTP concerns, making it independently testable without needing Express at all."
        ]
      },

      {
        heading: "Your Project's Current Structure vs Ideal",

        paragraphs: [
          "Your current server.js puts routes and logic together — which works fine for a learning project and is how most beginners start. As your project grows, extracting business logic into services makes the codebase dramatically more maintainable, testable, and scalable. The controllers/services split is the biggest structural improvement to make next."
        ]
      },

      {
        heading: "Important Points to Remember",

        points: [
          "Separate app.js (Express setup) from server.js (listener) — enables clean testing.",
          "Controllers handle HTTP (req/res); services handle business logic — keep this separation strict.",
          "Group files by feature area (user, course, auth) not by type (all controllers together) in larger projects.",
          "Your project's existing routes/ and middleware/ folders are already on the right track — add controllers/ and services/ as the next structural improvement."
        ]
      }

    ]
  }

];