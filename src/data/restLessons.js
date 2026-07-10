export const restTopics = [
  "What is REST?",
  "REST Constraints & Principles",
  "HTTP Methods in Depth",
  "HTTP Status Codes",
  "Request & Response Headers",
  "URL Design & Resource Naming",
  "Query Parameters & Filtering",
  "Request Body & Content Types",
  "Authentication in REST APIs",
  "Authorization Patterns",
  "API Versioning Strategies",
  "Pagination in REST APIs",
  "Error Handling Standards",
  "HATEOAS",
  "REST vs GraphQL",
  "API Rate Limiting & Throttling",
  "Caching in REST APIs",
  "Testing REST APIs",
  "API Documentation Standards",
  "REST API Best Practices"
];

export const restLessons = [
  {
    title: "What is REST?",
    subtitle: "Explained Like a Standardized Menu System for the Internet",
    sections: [
      {
        heading: "Think About a Universal Restaurant Menu Format",
        paragraphs: [
          "Imagine if every restaurant in the world used the exact same menu format — the same sections, same ordering codes, same item descriptions. A customer from any country could walk into any restaurant and immediately know how to order, without a separate tutorial for each restaurant. The format itself communicates everything.",
          "REST (Representational State Transfer) is exactly this universal format for web APIs — a set of architectural principles that, when followed, makes any API immediately understandable and predictable to any developer who knows REST."
        ]
      },
      {
        heading: "What REST Actually Is",
        paragraphs: [
          "REST is not a protocol, a library, or a tool — it's an architectural style, a set of design principles for building web services. Roy Fielding defined these principles in his 2000 doctoral dissertation, describing how the web itself was designed to work.",
          "An API that follows REST principles is called 'RESTful'. Your MERN project's backend is a RESTful API — POST /signup creates a user, POST /login authenticates, GET /dashboard retrieves protected data. These patterns are REST in action."
        ]
      },
      {
        heading: "The Core REST Idea: Resources",
        paragraphs: [
          "REST centers everything around 'resources' — any piece of information that has an identity: a user, a course, a progress record, an order. Each resource gets its own URL (Uniform Resource Locator) — like a permanent address.",
          "Resources are nouns, not verbs. /users, /courses, /courses/html5/topics are resources. /getUser, /createCourse, /deleteProgress are NOT RESTful — the action is expressed by the HTTP method, not the URL."
        ]
      },
      {
        heading: "A RESTful API in Action",
        code: `// Your MERN backend's REST endpoints:
POST   /signup          → Create a new user resource
POST   /login           → Authentication action (special case)
GET    /dashboard       → Read the current user's data
PUT    /api/progress/html/:userId → Update a specific progress resource

// A more fully RESTful design would look like:
GET    /users           → Collection of all users
POST   /users           → Create a new user
GET    /users/:id       → One specific user
PUT    /users/:id       → Update a user completely
PATCH  /users/:id       → Update a user partially
DELETE /users/:id       → Remove a user`
      },
      {
        heading: "Important Points to Remember",
        points: [
          "REST is an architectural style — design principles, not a protocol or library.",
          "Everything centers on resources (nouns) with URLs as their addresses.",
          "HTTP methods (GET/POST/PUT/DELETE) express the action — URLs identify the resource.",
          "Your MERN project already implements a RESTful API — this course explains the principles behind it."
        ]
      }
    ]
  },

  {
    title: "REST Constraints & Principles",
    subtitle: "Explained Like the Building Codes That Make All Buildings Safe",
    sections: [
      {
        heading: "Think About Building Codes",
        paragraphs: [
          "Building codes aren't arbitrary — they're principles derived from experience about what makes buildings safe, functional, and maintainable. An architect doesn't have to follow them for a building to physically stand, but following them ensures safety, compatibility with utilities, and long-term maintainability.",
          "Roy Fielding defined six REST constraints with the same intent — not mandatory rules, but principles that produce APIs that are scalable, reliable, and work well with the web's infrastructure."
        ]
      },
      {
        heading: "Constraint 1: Stateless",
        paragraphs: [
          "Every request from a client must contain all information needed to process it. The server stores no session state between requests — each request stands completely alone.",
          "This is why you send a JWT token with every protected request — rather than logging in once and having the server remember you're logged in (stateful), you prove your identity on every request (stateless). Statelessness makes APIs easier to scale: any server instance can handle any request."
        ]
      },
      {
        heading: "Constraint 2: Client-Server Separation",
        paragraphs: [
          "The client (React frontend) and server (Express backend) are completely independent — they communicate only through the API. The client doesn't know how data is stored; the server doesn't know how it's displayed. This separation means your React frontend and Express backend can be developed, deployed, and scaled completely independently."
        ]
      },
      {
        heading: "Constraint 3: Uniform Interface",
        code: `// The uniform interface has 4 sub-constraints:
// 1. Resource identification in requests:
GET /courses/html5          // URL identifies the specific resource

// 2. Resource manipulation through representations:
PUT /courses/html5 { title: "HTML5 Complete", level: "Beginner" }
// Client sends a representation; server applies it to the resource

// 3. Self-descriptive messages:
Content-Type: application/json  // Tells client how to parse the response
Authorization: Bearer <token>   // Client tells server who they are

// 4. HATEOAS — responses include links to related actions (covered later)`
      },
      {
        heading: "Constraints 4-6: Cacheable, Layered System, Code on Demand",
        points: [
          "Cacheable — responses must declare if they can be cached. Caching reduces server load and improves client performance.",
          "Layered System — clients don't know if they're connected directly to the server or through intermediaries (load balancers, CDNs, caches). This enables transparent infrastructure.",
          "Code on Demand (optional) — servers can send executable code to clients (like JavaScript). The only optional constraint — most APIs don't use this."
        ]
      },
      {
        heading: "Important Points to Remember",
        points: [
          "Stateless: every request carries all context — no server-side session state between requests.",
          "Client-server separation: frontend and backend are independent, communicating only through the API.",
          "Uniform interface: consistent resource URLs, HTTP methods, and self-describing messages.",
          "These constraints make REST APIs scalable, cacheable, and interoperable with web infrastructure."
        ]
      }
    ]
  },

  {
    title: "HTTP Methods in Depth",
    subtitle: "Explained Like Different Types of Actions in a Document Management System",
    sections: [
      {
        heading: "Think About Document Management Actions",
        paragraphs: [
          "A document management system has distinct action types: retrieving a document (reading, no changes), submitting a new document (creating), replacing an existing document with a new version (updating completely), making corrections to an existing document (partial update), and archiving a document (removing). Each action has a specific intent that everyone understands.",
          "HTTP methods are these standardized action types — each has a specific, universally understood semantic meaning."
        ]
      },
      {
        heading: "GET — Retrieve, Never Modify",
        code: `// GET is safe and idempotent — calling it multiple times = same result
GET /courses              // Get all courses
GET /courses/html5        // Get one specific course
GET /users/123/progress   // Get user's progress

// GET should NEVER modify data — no side effects
// Browsers can cache GET responses, bookmark them, pre-fetch them
// Request body in GET is technically allowed but widely unsupported — use query params instead`
      },
      {
        heading: "POST, PUT, PATCH",
        code: `// POST — create a new resource (not idempotent — calling twice creates two resources)
POST /users               // Create a new user
POST /courses/html5/enroll // Enroll in a course (action, not a resource)
// Body: { name: "Nishitha", email: "n@test.com" }

// PUT — replace an entire resource (idempotent — same result every time)
PUT /users/123            // Replace user 123 completely
// Body: { name: "Nishitha", email: "new@test.com", role: "admin" }
// ALL fields must be provided — missing fields are removed/nulled

// PATCH — partial update (idempotent when designed correctly)
PATCH /users/123          // Update only specified fields
// Body: { name: "New Name" }  // Only name changes, other fields unchanged`
      },
      {
        heading: "DELETE, HEAD, OPTIONS",
        code: `// DELETE — remove a resource (idempotent — deleting twice = resource still gone)
DELETE /users/123         // Remove user 123
DELETE /courses/html5/topics/0  // Remove specific topic

// HEAD — same as GET but response has no body (just headers)
HEAD /files/large-video.mp4     // Check file size/type before downloading
// Used to check if resource exists, get metadata, without transferring data

// OPTIONS — what methods does this endpoint support?
OPTIONS /users            // Response: Allow: GET, POST, PUT, DELETE
// Browsers send this as a CORS preflight request before cross-origin requests`
      },
      {
        heading: "Idempotency — Why It Matters",
        paragraphs: [
          "An operation is idempotent if performing it multiple times produces the same result as performing it once. GET, PUT, DELETE, HEAD, and OPTIONS are idempotent. POST is not — posting the same form twice creates two records.",
          "Idempotency matters for retry logic — if a PUT request fails due to network timeout, safely retrying it won't cause unintended side effects. For POST, a failed request might have already created the resource — retrying could create a duplicate."
        ]
      },
      {
        heading: "Important Points to Remember",
        points: [
          "GET is safe and idempotent — never use it for operations that change data.",
          "POST creates new resources (not idempotent); PUT replaces entirely; PATCH updates partially.",
          "DELETE is idempotent — deleting a non-existent resource should still return 200 or 204.",
          "PUT requires all fields in the body; PATCH only requires fields being changed."
        ]
      }
    ]
  },

  {
    title: "HTTP Status Codes",
    subtitle: "Explained Like a Courier's Standardized Delivery Status System",
    sections: [
      {
        heading: "Think About Courier Tracking Statuses",
        paragraphs: [
          "A courier service has standardized status codes everyone understands: 'Delivered', 'Attempted - No One Home', 'Address Not Found', 'Package Damaged - Returned', 'In Transit'. These codes communicate precisely what happened without ambiguity.",
          "HTTP status codes are these delivery statuses for API responses — three-digit numbers organized into categories, each communicating exactly what happened with the request."
        ]
      },
      {
        heading: "2xx — Success",
        code: `200 OK              // General success (GET, PUT, PATCH, DELETE responses)
201 Created         // New resource created successfully (POST response)
204 No Content      // Success, but nothing to return (DELETE, some PUT)

// Examples:
res.status(200).json({ users: [...] });    // GET /users
res.status(201).json({ user: newUser });   // POST /users
res.status(204).send();                     // DELETE /users/123`
      },
      {
        heading: "4xx — Client Errors",
        code: `400 Bad Request     // Invalid request data, malformed syntax
401 Unauthorized    // Authentication required or failed (not logged in)
403 Forbidden       // Authenticated but not allowed (logged in, wrong role)
404 Not Found       // Resource doesn't exist
405 Method Not Allowed // GET only endpoint, received POST
409 Conflict        // Request conflicts with current state (duplicate email)
422 Unprocessable Entity // Syntactically valid but semantically wrong (validation errors)
429 Too Many Requests   // Rate limit exceeded

// Critical distinction: 401 vs 403
// 401: "Who are you? Please authenticate first" (no valid token)
// 403: "I know who you are, but you can't do this" (valid token, wrong role)`
      },
      {
        heading: "5xx — Server Errors",
        code: `500 Internal Server Error // Unexpected server error (never expose details to client)
502 Bad Gateway           // Server received invalid response from upstream
503 Service Unavailable   // Server temporarily down (maintenance, overloaded)
504 Gateway Timeout       // Upstream server didn't respond in time

// Your error handler should:
app.use((err, req, res, next) => {
  // Log full error internally:
  logger.error(err.stack);

  // Send safe message to client — never expose internal details:
  const statusCode = err.statusCode || 500;
  const message = err.isOperational ? err.message : "Something went wrong";

  res.status(statusCode).json({ success: false, error: message });
});`
      },
      {
        heading: "3xx — Redirects",
        code: `301 Moved Permanently    // Resource has a new permanent URL (update your bookmarks)
302 Found               // Temporary redirect (use original URL next time)
304 Not Modified        // Cached version is still valid (don't re-download)

// Use 301 when permanently changing an API endpoint:
res.redirect(301, "/api/v2/users"); // v1 endpoint permanently moved to v2`
      },
      {
        heading: "Important Points to Remember",
        points: [
          "2xx = success; 4xx = client made an error; 5xx = server made an error.",
          "201 for created resources (POST); 204 for success with no body (DELETE).",
          "401 = not authenticated; 403 = authenticated but not authorized — always use the right one.",
          "Never expose internal error details in 500 responses — log everything, show nothing sensitive."
        ]
      }
    ]
  },

  {
    title: "Request & Response Headers",
    subtitle: "Explained Like the Envelope and Customs Form Wrapping a Package",
    sections: [
      {
        heading: "Think About Shipping Documentation",
        paragraphs: [
          "When shipping a package internationally, the package itself is your data — but the envelope and customs form communicate essential metadata: what type of contents (fragile? food?), who it's from, who it's for, what's inside, what language the documents are in, whether to accept it if the address is wrong.",
          "HTTP headers are this shipping documentation — metadata about the request or response that travels alongside the actual data, communicating type, authentication, encoding, caching rules, and more."
        ]
      },
      {
        heading: "Common Request Headers",
        code: `// Content-Type — what format is the body in:
Content-Type: application/json          // JSON body
Content-Type: multipart/form-data      // File upload
Content-Type: application/x-www-form-urlencoded // HTML form

// Authorization — proving identity:
Authorization: Bearer eyJhbGciOiJIUzI1NiIs...  // JWT token
Authorization: Basic base64(username:password)   // Basic auth

// Accept — what format does the client want back:
Accept: application/json    // Want JSON response
Accept: text/html          // Want HTML response

// Custom headers:
X-API-Key: your-api-key-here
X-Request-ID: unique-request-identifier`
      },
      {
        heading: "Common Response Headers",
        code: `// Content-Type — what format is the response:
Content-Type: application/json; charset=utf-8

// Cache control:
Cache-Control: no-cache, no-store, must-revalidate  // Never cache
Cache-Control: max-age=3600                          // Cache for 1 hour
ETag: "abc123"                                       // Version identifier

// CORS headers (set by your cors() middleware):
Access-Control-Allow-Origin: https://your-frontend.com
Access-Control-Allow-Methods: GET, POST, PUT, DELETE
Access-Control-Allow-Headers: Content-Type, Authorization

// Rate limiting (set by express-rate-limit):
RateLimit-Limit: 100
RateLimit-Remaining: 87
RateLimit-Reset: 1630000000`
      },
      {
        heading: "Reading and Setting Headers in Express",
        code: `// Reading request headers:
app.post("/upload", (req, res) => {
  const contentType = req.get("Content-Type");      // "application/json"
  const authHeader = req.get("Authorization");       // "Bearer eyJ..."
  const token = authHeader?.replace("Bearer ", ""); // Extract token

  // Check content type:
  if (!contentType?.includes("application/json")) {
    return res.status(415).json({ error: "Only JSON accepted" });
  }
});

// Setting response headers:
app.get("/protected-data", verifyToken, (req, res) => {
  res
    .set("Cache-Control", "private, no-cache")    // Don't cache private data
    .set("X-API-Version", "v1")
    .json({ data: sensitiveData });
});`
      },
      {
        heading: "Important Points to Remember",
        points: [
          "Content-Type in requests tells the server how to parse the body — always set it when sending data.",
          "Authorization header carries authentication credentials — JWT in Bearer token format.",
          "Response headers control caching, CORS, and content format — express middleware sets most automatically.",
          "Custom X- prefixed headers are a convention for application-specific headers."
        ]
      }
    ]
  },

  {
    title: "URL Design & Resource Naming",
    subtitle: "Explained Like Professional Street Address Standards",
    sections: [
      {
        heading: "Think About Address Standards",
        paragraphs: [
          "Addresses follow standards: building number before street name, city before state, consistent format. 'MG Road 42, Hyderabad' would be confusing — '42 MG Road, Hyderabad' follows the standard. Good address formatting is consistent, hierarchical, and immediately understandable.",
          "RESTful URL design follows the same principles — consistent, hierarchical, immediately communicating what resource is being accessed."
        ]
      },
      {
        heading: "Core URL Design Rules",
        code: `// ✅ Plural nouns for collections:
/users              // Collection of all users
/courses            // Collection of all courses

// ✅ Specific items by ID:
/users/123          // Specific user
/courses/html5      // Specific course

// ✅ Nested resources for relationships:
/users/123/progress           // User's progress (belongs to user)
/courses/html5/topics         // Course's topics (belongs to course)
/courses/html5/topics/0       // Specific topic in a course

// ❌ Verbs in URLs (not RESTful):
/getUsers
/createCourse
/deleteUser/123
/updateProgress

// ❌ Mixed case or underscores (use hyphens):
/courseTopics    // ❌ camelCase
/course_topics   // ❌ underscores
/course-topics   // ✅ hyphens (kebab-case)`
      },
      {
        heading: "Actions That Aren't Simple CRUD",
        code: `// Some operations don't fit neatly into CRUD — be pragmatic:
POST /users/123/activate        // Activate a user account
POST /orders/456/cancel         // Cancel an order
POST /courses/html5/publish     // Publish a course
POST /auth/logout               // Authentication action
POST /auth/refresh-token        // Refresh JWT token

// For search:
GET /courses/search?q=javascript    // Search as query param
GET /search?type=course&q=react     // Global search endpoint

// For bulk operations:
POST /users/bulk-delete             // Delete multiple users
PATCH /courses/bulk-update          // Update multiple courses`
      },
      {
        heading: "Resource Hierarchy — How Deep?",
        code: `// Keep nesting max 2-3 levels deep:
/users/123/courses                  // ✅ Acceptable
/users/123/courses/html5/topics     // ✅ Acceptable
/users/123/courses/html5/topics/0/content/sections // ❌ Too deep!

// For deeply nested resources, consider:
GET /topics/0?courseId=html5        // Flatten with query params
GET /course-topics?course=html5&userId=123  // Alternative flat resource`
      },
      {
        heading: "Important Points to Remember",
        points: [
          "Use plural nouns for collections (/users), IDs for specific items (/users/123).",
          "Nest related resources: /users/123/orders — not a separate root URL.",
          "Use hyphens for multi-word URLs (/user-profiles), lowercase always.",
          "Limit nesting to 2-3 levels — deeper hierarchies become unwieldy to read and maintain."
        ]
      }
    ]
  },

  {
    title: "Query Parameters & Filtering",
    subtitle: "Explained Like Advanced Search Filters on an E-commerce Site",
    sections: [
      {
        heading: "Think About E-commerce Filtering",
        paragraphs: [
          "Shopping on Amazon, you can filter products by: category, price range, rating, availability, brand, and sort by popularity or price. These filters narrow a massive catalogue to what you actually want — they're optional additions to your basic browse request, not part of the resource's identity.",
          "REST API query parameters serve exactly this purpose — optional additions to a resource request that filter, sort, paginate, or shape the response without changing what resource is being accessed."
        ]
      },
      {
        heading: "Types of Query Parameters",
        code: `// Filtering — narrow the collection:
GET /courses?level=Beginner
GET /courses?level=Beginner&completed=false
GET /users?role=student&isVerified=true

// Searching — text search:
GET /courses?search=javascript
GET /users?name=Nishitha

// Sorting — order the results:
GET /courses?sort=title              // Ascending
GET /courses?sort=-createdAt         // Descending (- prefix)
GET /courses?sort=level,-topics      // Multiple: level asc, topics desc

// Pagination — chunk the results:
GET /courses?page=2&limit=10
GET /courses?offset=20&limit=10      // Offset-based alternative

// Sparse fieldsets — select specific fields:
GET /courses?fields=title,level,topics  // Only these fields`
      },
      {
        heading: "Handling Query Params in Express",
        code: `app.get("/courses", async (req, res) => {
  const {
    level, search, sort = "-createdAt",
    page = 1, limit = 10, fields
  } = req.query;

  // Build MongoDB filter:
  const filter = {};
  if (level) filter.level = level;
  if (search) filter.$text = { $search: search };

  // Parse sort string to Mongoose format:
  const sortOption = sort.split(",").reduce((acc, field) => {
    if (field.startsWith("-")) acc[field.slice(1)] = -1;
    else acc[field] = 1;
    return acc;
  }, {});

  // Parse fields for projection:
  const projection = fields ? fields.split(",").join(" ") : "";

  const skip = (parseInt(page) - 1) * parseInt(limit);
  const total = await Course.countDocuments(filter);

  const courses = await Course.find(filter)
    .sort(sortOption)
    .skip(skip)
    .limit(parseInt(limit))
    .select(projection)
    .lean();

  res.json({
    data: courses,
    pagination: { page: parseInt(page), limit: parseInt(limit), total }
  });
});`
      },
      {
        heading: "Important Points to Remember",
        points: [
          "Query params are for filtering, sorting, paginating, and field selection — not for identifying resources.",
          "Resource identity goes in the URL path (/courses/html5); optional context goes in query params.",
          "Always provide sensible defaults: default sort, default page size, maximum page size limit.",
          "Validate and sanitize query parameters — they're user input and must be treated with the same care as request bodies."
        ]
      }
    ]
  },

  {
    title: "Request Body & Content Types",
    subtitle: "Explained Like Different Ways to Package and Label Shipments",
    sections: [
      {
        heading: "Think About Shipping Different Items",
        paragraphs: [
          "Shipping a letter uses a standard envelope. Shipping fragile items requires special packaging with bubble wrap and a 'FRAGILE' label. Shipping food requires refrigerated packaging and specific labeling. The packaging type is communicated on the outside so the recipient knows how to handle the contents.",
          "HTTP Content-Type headers work the same way — they tell the server exactly how the request body is packaged, so it knows how to unpack and read it."
        ]
      },
      {
        heading: "application/json — The Standard for REST APIs",
        code: `// Most REST APIs exclusively use JSON:
fetch("/api/login", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
    "Accept": "application/json"
  },
  body: JSON.stringify({ email: "n@test.com", password: "pass123" })
});

// In Express, express.json() middleware parses this automatically:
app.use(express.json());

app.post("/login", (req, res) => {
  const { email, password } = req.body; // Already parsed!
  // ...
});`
      },
      {
        heading: "multipart/form-data — For File Uploads",
        code: `// File upload from React:
const formData = new FormData();
formData.append("avatar", selectedFile);
formData.append("userId", userId);

// DON'T set Content-Type manually — browser sets it with boundary automatically
const response = await axios.post("/upload/avatar", formData);

// In Express, multer handles this:
const upload = multer({ storage });
app.post("/upload/avatar", upload.single("avatar"), (req, res) => {
  console.log(req.file);    // File info
  console.log(req.body.userId); // Text fields from the form
});`
      },
      {
        heading: "Validating Request Body Structure",
        code: `const { body, validationResult } = require("express-validator");

// Define expected shape:
const loginValidation = [
  body("email").isEmail().normalizeEmail().withMessage("Valid email required"),
  body("password").isLength({ min: 8 }).withMessage("Min 8 characters")
];

app.post("/login", loginValidation, (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({
      error: "Validation failed",
      details: errors.array()
    });
  }

  // Safe to process — body is validated
  const { email, password } = req.body;
});`
      },
      {
        heading: "Important Points to Remember",
        points: [
          "Always set Content-Type: application/json when sending JSON — Express's express.json() requires it.",
          "Never set Content-Type manually for multipart/form-data — the browser adds the boundary automatically.",
          "Validate request body structure before processing — never trust user-provided data.",
          "Respond with 415 Unsupported Media Type when receiving an unexpected Content-Type."
        ]
      }
    ]
  },

  {
    title: "Authentication in REST APIs",
    subtitle: "Explained Like Different Types of Identity Verification",
    sections: [
      {
        heading: "Think About Different ID Verification Methods",
        paragraphs: [
          "Different situations require different identity verification: a library card for borrowing books, a government ID for opening a bank account, a biometric scan for entering a secure facility, a temporary visitor badge for one-day access. Each method has different security levels and use cases.",
          "REST API authentication has similarly different approaches, each with specific strengths and use cases. Your MERN project uses JWT — one of the most common for modern APIs."
        ]
      },
      {
        heading: "Authentication vs Authorization",
        code: `// Authentication = WHO are you?
// "Is this request from a legitimate, verified identity?"

// Authorization = WHAT can you do?
// "Is this verified identity allowed to perform this action?"

// Authentication happens first — if it fails, authorization doesn't run
// Your middleware order reflects this:
app.get("/admin/users",
  verifyToken,    // 1. Authentication — are you logged in?
  checkAdminRole, // 2. Authorization — are you an admin?
  getUsers        // 3. Handler — if both pass, proceed
);`
      },
      {
        heading: "JWT Authentication — Your Project's Approach",
        code: `// Login: issue a signed token
app.post("/login", async (req, res) => {
  const user = await authenticateUser(req.body.email, req.body.password);

  const token = jwt.sign(
    { id: user._id, email: user.email, role: user.role },
    process.env.JWT_SECRET,
    { expiresIn: "1h" }
  );

  res.json({ token });
});

// Client stores token and sends with every request:
// Authorization: Bearer eyJhbGciOiJIUzI1NiIs...

// Server verifies every protected request:
function verifyToken(req, res, next) {
  const token = req.headers.authorization?.replace("Bearer ", "");
  if (!token) return res.status(401).json({ error: "Token required" });

  try {
    req.user = jwt.verify(token, process.env.JWT_SECRET);
    next();
  } catch {
    res.status(401).json({ error: "Invalid or expired token" });
  }
}`
      },
      {
        heading: "Refresh Tokens — Extending Sessions Safely",
        code: `// Problem: short-lived access tokens (1 hour) expire, requiring re-login
// Solution: use refresh tokens (long-lived, stored securely) to get new access tokens

// Login response with both tokens:
res.json({
  accessToken: jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: "15m" }),
  refreshToken: jwt.sign({ id: user._id }, process.env.REFRESH_SECRET, { expiresIn: "7d" })
});

// Refresh endpoint:
app.post("/auth/refresh", (req, res) => {
  const { refreshToken } = req.body;

  try {
    const decoded = jwt.verify(refreshToken, process.env.REFRESH_SECRET);
    const newAccessToken = jwt.sign({ id: decoded.id }, process.env.JWT_SECRET, { expiresIn: "15m" });
    res.json({ accessToken: newAccessToken });
  } catch {
    res.status(401).json({ error: "Invalid refresh token — please log in again" });
  }
});`
      },
      {
        heading: "Important Points to Remember",
        points: [
          "Authentication verifies identity; authorization checks permissions — both are separate concerns.",
          "JWT tokens are stateless — the server verifies them without a database lookup.",
          "Short access token lifetimes (15min-1hr) + refresh tokens balance security and user experience.",
          "Always send tokens in the Authorization header, not in URLs or request bodies."
        ]
      }
    ]
  },

  {
    title: "Authorization Patterns",
    subtitle: "Explained Like Different Security Access Levels in a Building",
    sections: [
      {
        heading: "Think About Building Access Levels",
        paragraphs: [
          "A corporate building has multiple access levels: all employees can enter the building (general access), managers can access all conference rooms (role-based), project team members can access specific project rooms (resource-based), and facility staff can access everything (admin). Each access level is determined differently.",
          "REST API authorization follows these same patterns — different strategies for determining who can access what."
        ]
      },
      {
        heading: "Role-Based Access Control (RBAC)",
        code: `// Users have roles: student, instructor, admin
// Each role grants access to different endpoints

function requireRole(...allowedRoles) {
  return (req, res, next) => {
    if (!allowedRoles.includes(req.user.role)) {
      return res.status(403).json({
        error: \`Access denied. Requires role: \${allowedRoles.join(" or ")}\`
      });
    }
    next();
  };
}

// Usage:
app.get("/admin/users", verifyToken, requireRole("admin"), getUsers);
app.post("/courses", verifyToken, requireRole("admin", "instructor"), createCourse);
app.get("/courses", verifyToken, requireRole("student", "instructor", "admin"), getCourses);`
      },
      {
        heading: "Resource-Based Authorization",
        code: `// User can only modify their OWN resources
app.put("/users/:id", verifyToken, async (req, res) => {
  // Check if the requesting user is the resource owner:
  if (req.user.id !== req.params.id && req.user.role !== "admin") {
    return res.status(403).json({
      error: "You can only update your own profile"
    });
  }

  const updated = await User.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(updated);
});

// For course progress — user can only update their own progress:
router.put("/html/:userId", verifyToken, async (req, res) => {
  if (req.user.id !== req.params.userId) {
    return res.status(403).json({ error: "Cannot modify another user's progress" });
  }
  // Update progress...
});`
      },
      {
        heading: "Permission-Based Access Control",
        code: `// Fine-grained permissions (more flexible than simple roles):
const permissions = {
  student:    ["read:courses", "read:own-progress", "update:own-progress"],
  instructor: ["read:courses", "create:courses", "update:own-courses"],
  admin:      ["read:courses", "create:courses", "update:courses", "delete:courses", "read:users"]
};

function requirePermission(permission) {
  return (req, res, next) => {
    const userPermissions = permissions[req.user.role] || [];
    if (!userPermissions.includes(permission)) {
      return res.status(403).json({ error: "Insufficient permissions" });
    }
    next();
  };
}

app.delete("/courses/:id",
  verifyToken,
  requirePermission("delete:courses"),
  deleteCourse
);`
      },
      {
        heading: "Important Points to Remember",
        points: [
          "RBAC (Role-Based) is simple and covers most use cases — admin/instructor/student roles.",
          "Resource-based authorization ensures users can only modify their own resources.",
          "Always check authorization server-side — never trust client-sent role or permission claims.",
          "Your progress routes already implement resource-based authorization — users can only update their own progress."
        ]
      }
    ]
  },

  {
    title: "API Versioning Strategies",
    subtitle: "Explained Like Publishing Book Editions",
    sections: [
      {
        heading: "Think About Book Editions",
        paragraphs: [
          "When a textbook gets a major revision, the publisher releases a new edition — 'JavaScript: The Good Parts, 2nd Edition.' People with the first edition can still use it; new buyers get the second edition. The publisher doesn't recall all first editions when the second comes out.",
          "API versioning follows this same principle — existing clients continue using the version they were built for, while new clients access improved versions. Breaking changes go in a new version; backward-compatible changes can be added to existing versions."
        ]
      },
      {
        heading: "Strategy 1: URL Path Versioning (Most Common)",
        code: `// Mount different version routers at different paths:
app.use("/api/v1", v1Router);
app.use("/api/v2", v2Router);

// URLs:
// GET /api/v1/courses  → v1 response format
// GET /api/v2/courses  → v2 response format (new fields, restructured)

// V1 response:
{ "courses": [{ "id": "...", "name": "HTML5", "count": 43 }] }

// V2 response (breaking change — different structure):
{
  "data": [{ "id": "...", "title": "HTML5", "topicCount": 43 }],
  "meta": { "total": 6, "page": 1 }
}

// Advantages: clear, visible, easy to test in browser, easy to route
// Disadvantages: URL proliferation, clients must update URL`
      },
      {
        heading: "Strategy 2: Header Versioning",
        code: `// Version specified in request header:
// Accept: application/vnd.edunexa.v2+json
// Or: API-Version: 2

app.use((req, res, next) => {
  req.apiVersion = req.headers["api-version"] || "1";
  next();
});

app.get("/courses", (req, res) => {
  if (req.apiVersion === "2") {
    return res.json({
      data: courses,
      meta: { total: courses.length }
    });
  }
  // v1 response:
  res.json({ courses });
});

// Advantages: clean URLs, flexible
// Disadvantages: harder to test in browser, less visible`
      },
      {
        heading: "Deprecation Strategy",
        code: `// Warn clients of deprecated version:
app.use("/api/v1", (req, res, next) => {
  res.set("Sunset", "Sat, 01 Jan 2027 00:00:00 GMT");    // When it dies
  res.set("Deprecation", "Thu, 01 Jan 2026 00:00:00 GMT"); // When deprecated
  res.set("Link", '</api/v2>; rel="successor-version"');   // Migration link
  next();
}, v1Router);

// Response headers tell clients:
// "This version is deprecated, will be removed on Jan 1, 2027, use v2 instead"`
      },
      {
        heading: "Important Points to Remember",
        points: [
          "URL versioning (/api/v1/) is most common — explicit, easy to test, widely understood.",
          "Never make breaking changes to an existing version — add new versions for breaking changes.",
          "Communicate deprecation timelines clearly — use Sunset headers and documentation.",
          "Maintain v1 for a reasonable transition period after v2 release — don't remove immediately."
        ]
      }
    ]
  },

  {
    title: "Pagination in REST APIs",
    subtitle: "Explained Like a Library Catalogue With Page Numbers",
    sections: [
      {
        heading: "Why Pagination is Non-Negotiable",
        paragraphs: [
          "An API returning all 10,000 users in one response is dangerous — it exhausts server memory, overloads the network, and crashes the client trying to render 10,000 records. Pagination isn't optional for collections — it's a fundamental API design requirement once collections grow beyond a few dozen items.",
          "There are several pagination strategies, each with different strengths. Choosing the right one depends on your data's characteristics and how clients will navigate it."
        ]
      },
      {
        heading: "Page-Based Pagination",
        code: `// URL: GET /courses?page=2&limit=10
app.get("/courses", async (req, res) => {
  const page = Math.max(1, parseInt(req.query.page) || 1);
  const limit = Math.min(100, parseInt(req.query.limit) || 10); // Cap at 100!
  const skip = (page - 1) * limit;

  const [courses, total] = await Promise.all([
    Course.find().sort("-createdAt").skip(skip).limit(limit).lean(),
    Course.countDocuments()
  ]);

  const totalPages = Math.ceil(total / limit);

  res.json({
    data: courses,
    pagination: {
      page,
      limit,
      total,
      totalPages,
      hasNextPage: page < totalPages,
      hasPrevPage: page > 1,
      nextPage: page < totalPages ? page + 1 : null,
      prevPage: page > 1 ? page - 1 : null
    }
  });
});`
      },
      {
        heading: "Cursor-Based Pagination (Better for Real-Time Data)",
        code: `// Instead of page numbers, use a cursor (last seen item's ID or timestamp)
// Advantage: consistent even if data changes between requests

// URL: GET /courses?cursor=64f1a2b3&limit=10
app.get("/courses", async (req, res) => {
  const limit = Math.min(50, parseInt(req.query.limit) || 10);
  const filter = {};

  if (req.query.cursor) {
    // Get items created before the cursor (ID encodes timestamp):
    filter._id = { $lt: req.query.cursor };
  }

  const courses = await Course
    .find(filter)
    .sort({ _id: -1 })  // Newest first
    .limit(limit + 1)   // Fetch one extra to know if there's a next page
    .lean();

  const hasNextPage = courses.length > limit;
  if (hasNextPage) courses.pop(); // Remove the extra item

  const nextCursor = hasNextPage ? courses[courses.length - 1]._id : null;

  res.json({
    data: courses,
    pagination: {
      hasNextPage,
      nextCursor,   // Client uses this as cursor param for next request
      limit
    }
  });
});`
      },
      {
        heading: "Pagination Response Standard",
        code: `// Always include enough metadata for clients to build navigation:
{
  "data": [...],
  "pagination": {
    "page": 2,
    "limit": 10,
    "total": 156,
    "totalPages": 16,
    "hasNextPage": true,
    "hasPrevPage": true,
    "links": {
      "first": "/courses?page=1&limit=10",
      "prev":  "/courses?page=1&limit=10",
      "next":  "/courses?page=3&limit=10",
      "last":  "/courses?page=16&limit=10"
    }
  }
}`
      },
      {
        heading: "Important Points to Remember",
        points: [
          "Always paginate collections — never return unbounded lists.",
          "Cap the maximum limit server-side (e.g., 100) — prevent clients from requesting everything.",
          "Page-based is simpler; cursor-based is more consistent when data changes frequently.",
          "Include navigation links in pagination metadata — clients shouldn't have to construct URLs."
        ]
      }
    ]
  },

  {
    title: "Error Handling Standards",
    subtitle: "Explained Like Standardized Error Reports in a Medical System",
    sections: [
      {
        heading: "Think About Medical Error Reports",
        paragraphs: [
          "A hospital's error reporting system has a standardized format — incident type, severity level, what happened, who was affected, when it occurred, what action was taken. Every department follows the same format, making errors immediately understandable and actionable regardless of which department they came from.",
          "REST API error responses should follow the same philosophy — a consistent, standardized format that clients can rely on regardless of which endpoint generated the error."
        ]
      },
      {
        heading: "Consistent Error Response Format",
        code: `// Every error response follows the same structure:
{
  "success": false,
  "error": {
    "code": "VALIDATION_FAILED",    // Machine-readable error code
    "message": "Email is invalid",  // Human-readable message
    "details": [                    // Optional: field-level details
      { "field": "email", "message": "Must be a valid email address" },
      { "field": "password", "message": "Must be at least 8 characters" }
    ],
    "timestamp": "2024-01-15T10:30:00Z",
    "path": "/api/users/signup"
  }
}

// Success response follows complementary structure:
{
  "success": true,
  "data": { ... },   // The actual payload
  "message": "User created successfully"  // Optional human message
}`
      },
      {
        heading: "Error Code Conventions",
        code: `// Use consistent, machine-readable error codes:
const ErrorCodes = {
  // Authentication:
  UNAUTHORIZED: "UNAUTHORIZED",
  TOKEN_EXPIRED: "TOKEN_EXPIRED",
  TOKEN_INVALID: "TOKEN_INVALID",

  // Authorization:
  FORBIDDEN: "FORBIDDEN",
  INSUFFICIENT_PERMISSIONS: "INSUFFICIENT_PERMISSIONS",

  // Validation:
  VALIDATION_FAILED: "VALIDATION_FAILED",
  INVALID_INPUT: "INVALID_INPUT",

  // Resources:
  NOT_FOUND: "NOT_FOUND",
  ALREADY_EXISTS: "ALREADY_EXISTS",
  CONFLICT: "CONFLICT",

  // Server:
  INTERNAL_ERROR: "INTERNAL_ERROR",
  SERVICE_UNAVAILABLE: "SERVICE_UNAVAILABLE"
};

// Error codes let clients handle errors programmatically:
// if (error.code === "TOKEN_EXPIRED") { refreshToken(); }
// if (error.code === "VALIDATION_FAILED") { showFieldErrors(error.details); }`
      },
      {
        heading: "Global Error Handler Implementation",
        code: `app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const code = err.code || "INTERNAL_ERROR";

  // Log everything internally:
  if (statusCode >= 500) {
    console.error("Server Error:", {
      message: err.message,
      stack: err.stack,
      url: req.url,
      method: req.method,
      userId: req.user?.id
    });
  }

  // Send sanitized response to client:
  res.status(statusCode).json({
    success: false,
    error: {
      code,
      message: statusCode >= 500 ? "An unexpected error occurred" : err.message,
      ...(err.details && { details: err.details }),
      timestamp: new Date().toISOString(),
      path: req.path
    }
  });
});`
      },
      {
        heading: "Important Points to Remember",
        points: [
          "Use a consistent error response format — clients need predictable structure to handle errors reliably.",
          "Include machine-readable error codes (not just messages) — enables programmatic error handling.",
          "Never expose internal error details (stack traces, database errors) in production responses.",
          "Log everything internally but only return safe, user-friendly messages to clients."
        ]
      }
    ]
  },

  {
    title: "HATEOAS",
    subtitle: "Explained Like a Smart Directory That Always Tells You What to Do Next",
    sections: [
      {
        heading: "Think About a Well-Designed Directory",
        paragraphs: [
          "A smart building directory doesn't just list room locations — it also tells you: 'From HR (where you are), you can go to: Finance (Room 305), IT Support (Room 210), or the Exit (Ground Floor).' Each location in the directory provides navigation options based on where you are and what you can do from there.",
          "HATEOAS (Hypermedia As The Engine Of Application State) is this smart directory for REST APIs — responses include links to related actions and resources, allowing clients to navigate the API dynamically without hardcoding URLs."
        ]
      },
      {
        heading: "What HATEOAS Looks Like",
        code: `// Without HATEOAS — client must know all URLs in advance:
GET /courses/html5
{
  "_id": "html5",
  "title": "HTML5",
  "progress": 43
}
// Client must hardcode: /courses/html5/topics, /users/123/progress/html5, etc.

// With HATEOAS — response includes navigation:
GET /courses/html5
{
  "_id": "html5",
  "title": "HTML5",
  "progress": 43,
  "_links": {
    "self": { "href": "/courses/html5" },
    "topics": { "href": "/courses/html5/topics" },
    "progress": { "href": "/users/123/progress/html5" },
    "enroll": { "href": "/courses/html5/enroll", "method": "POST" },
    "collection": { "href": "/courses" }
  }
}`
      },
      {
        heading: "HATEOAS in Practice",
        code: `// Helper to build links:
function buildLinks(req, resource, links) {
  const base = \`\${req.protocol}://\${req.get("host")}\`;
  return Object.entries(links).reduce((acc, [key, path]) => {
    acc[key] = { href: \`\${base}\${path}\` };
    return acc;
  }, {});
}

app.get("/courses/:id", async (req, res) => {
  const course = await Course.findById(req.params.id).lean();

  res.json({
    data: course,
    _links: buildLinks(req, course, {
      self: \`/courses/\${course._id}\`,
      topics: \`/courses/\${course._id}/topics\`,
      enroll: \`/courses/\${course._id}/enroll\`
    })
  });
});`
      },
      {
        heading: "HATEOAS Reality Check",
        paragraphs: [
          "HATEOAS is the most theoretical of the REST constraints — Roy Fielding considers it essential for 'true' REST, but in practice, most production APIs (including GitHub, Stripe, Twitter) don't fully implement it. It adds complexity and payload size for benefits that are most valuable for truly generic clients.",
          "Understanding HATEOAS conceptually is important; fully implementing it is optional for most applications. Adding self and collection links is a lightweight start that provides real value without full HATEOAS complexity."
        ]
      },
      {
        heading: "Important Points to Remember",
        points: [
          "HATEOAS means responses include links to related actions — clients navigate using these links, not hardcoded URLs.",
          "It's the most theoretical REST constraint — valuable conceptually, partially implemented in most real APIs.",
          "At minimum: include a 'self' link in responses — tells clients the canonical URL for the resource.",
          "GitHub's API is a good real-world HATEOAS reference — partial implementation that provides practical value."
        ]
      }
    ]
  },

  {
    title: "REST vs GraphQL",
    subtitle: "Explained Like a Fixed Menu vs a Custom Order Restaurant",
    sections: [
      {
        heading: "Think About Two Restaurant Styles",
        paragraphs: [
          "A traditional restaurant has a fixed menu — you order from predefined dishes. You might get a dish with sides you don't want, or you might wish a dish had an extra ingredient it doesn't include. What you get is what's defined on the menu.",
          "A custom-order restaurant lets you specify exactly what you want — this ingredient, not that one, extra of this, less of that. You get precisely what you ask for, no more, no less. GraphQL is this custom-order experience; REST is the fixed menu."
        ]
      },
      {
        heading: "The Under-Fetching and Over-Fetching Problem",
        code: `// REST under-fetching — need multiple requests:
// To show a user's profile WITH their course list:
GET /users/123           // Get user
GET /users/123/courses   // Separate request for courses
// 2 round trips!

// REST over-fetching — getting too much:
GET /users/123
// Returns: name, email, password_hash, role, created_at, updated_at,
//          preferences, notification_settings, login_history...
// But you only need name and email!

// GraphQL — one request, exactly what you need:
query {
  user(id: "123") {
    name
    email
    courses {
      title
      progress
    }
  }
}`
      },
      {
        heading: "When to Use REST",
        points: [
          "Simple, well-defined CRUD operations — REST's verb + noun structure fits perfectly",
          "Public APIs with many unknown client types — REST is universally understood",
          "When HTTP caching is important — REST GET requests cache naturally; GraphQL POST requests don't",
          "Simple team — REST is easier to learn, debug, and reason about",
          "Your MERN project — REST is the right choice for a learning platform API"
        ]
      },
      {
        heading: "When to Use GraphQL",
        points: [
          "Complex, nested data with many relationships — one query replaces multiple REST requests",
          "Multiple client types with very different data needs (web vs mobile vs smartwatch)",
          "Rapidly evolving APIs where avoiding versioning is important",
          "When clients need precise control over exactly what data they receive",
          "Large teams where self-documenting schemas reduce coordination overhead"
        ]
      },
      {
        heading: "Important Points to Remember",
        points: [
          "REST: multiple endpoints, fixed response shapes — simple, cacheable, universally understood.",
          "GraphQL: single endpoint, flexible queries — precise data fetching, great for complex relationships.",
          "REST's simplicity is an advantage, not a limitation — most APIs don't need GraphQL's complexity.",
          "REST and GraphQL can coexist — use REST for simple CRUD, GraphQL for complex data-fetching needs."
        ]
      }
    ]
  },

  {
    title: "API Rate Limiting & Throttling",
    subtitle: "Explained Like Traffic Lights Controlling Road Congestion",
    sections: [
      {
        heading: "Think About Traffic Management",
        paragraphs: [
          "Traffic lights don't exist to be annoying — they prevent intersections from being overwhelmed by too many cars trying to cross simultaneously, which would cause gridlock for everyone. Controlled flow means everyone eventually gets through; uncontrolled flow means nobody moves.",
          "API rate limiting serves the same traffic management purpose — controlled, limited access ensures the API remains available and fast for all legitimate users, rather than being overwhelmed by a few heavy users."
        ]
      },
      {
        heading: "Rate Limiting Strategies",
        code: `const rateLimit = require("express-rate-limit");

// Tiered rate limits — different limits for different endpoints:

// Generous for read operations:
const readLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 300,                  // 300 reads per 15 minutes
  message: { error: "Read rate limit exceeded" },
  standardHeaders: true
});

// Strict for write operations:
const writeLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 50,                   // Only 50 writes per 15 minutes
  message: { error: "Write rate limit exceeded" }
});

// Very strict for sensitive operations:
const authLimiter = rateLimit({
  windowMs: 60 * 60 * 1000, // 1 hour window
  max: 10,                   // Only 10 attempts per hour
  skipSuccessfulRequests: true, // Only count failures
  message: { error: "Too many failed attempts, wait 1 hour" }
});

app.get("/courses", readLimiter, getCourses);
app.post("/courses", verifyToken, writeLimiter, createCourse);
app.post("/login", authLimiter, login);`
      },
      {
        heading: "Dynamic Rate Limiting",
        code: `// Different limits for different user tiers:
function createUserLimiter(tier) {
  const limits = {
    free: { max: 100, windowMs: 60 * 60 * 1000 },     // 100/hour
    pro: { max: 1000, windowMs: 60 * 60 * 1000 },     // 1000/hour
    enterprise: { max: 10000, windowMs: 60 * 60 * 1000 } // 10000/hour
  };

  return rateLimit({
    ...limits[tier],
    keyGenerator: (req) => req.user?.id || req.ip,
    handler: (req, res) => {
      res.status(429).json({
        error: "Rate limit exceeded",
        retryAfter: Math.ceil(req.rateLimit.resetTime / 1000),
        upgradeUrl: "/pricing"  // Suggest upgrading tier
      });
    }
  });
}`
      },
      {
        heading: "Rate Limit Headers",
        code: `// Clients can read these headers to manage their request rate:
RateLimit-Limit: 100          // Total allowed requests
RateLimit-Remaining: 87       // Requests left in current window
RateLimit-Reset: 1630000000   // Unix timestamp when window resets
Retry-After: 3600             // Seconds until the limit resets (when rejected)`
      },
      {
        heading: "Important Points to Remember",
        points: [
          "Apply stricter limits to sensitive operations (login: 10/hr) than read operations (300/15min).",
          "skipSuccessfulRequests: true on auth endpoints only penalizes failed attempts.",
          "Include rate limit info in response headers — clients can adapt their behavior proactively.",
          "Rate limit by user ID (when authenticated) not just IP — fairer in shared environments."
        ]
      }
    ]
  },

  {
    title: "Caching in REST APIs",
    subtitle: "Explained Like a Smart Photocopy System",
    sections: [
      {
        heading: "Think About Photocopying Frequently Needed Documents",
        paragraphs: [
          "If a document is needed dozens of times per day, constantly retrieving the original from a distant archive wastes time. Smart offices keep a photocopy nearby — slightly less authoritative than the original, but available immediately. The copy is refreshed when the original changes.",
          "API caching works on the same principle — storing responses closer to the client and reusing them for identical repeated requests, dramatically reducing server load and client latency."
        ]
      },
      {
        heading: "HTTP Caching Headers",
        code: `// Cache-Control — the master caching directive:
res.set("Cache-Control", "public, max-age=3600");
// public: any cache (browser, CDN) can store this
// max-age=3600: valid for 1 hour (in seconds)

// For private/sensitive data:
res.set("Cache-Control", "private, no-cache");
// private: only the user's browser should cache, not shared CDNs
// no-cache: must revalidate with server before using cached version

// Disable caching completely:
res.set("Cache-Control", "no-store");

// ETag — fingerprint of the response content:
const etag = generateEtag(responseData);
res.set("ETag", etag);

// If-None-Match — client sends back ETag to check if content changed:
// Request: If-None-Match: "abc123"
// Server: if ETag matches current content → 304 Not Modified (no body!)
//         if ETag doesn't match → 200 OK with new content`
      },
      {
        heading: "Implementing ETags in Express",
        code: `const crypto = require("crypto");

app.get("/courses", async (req, res) => {
  const courses = await Course.find().lean();
  const etag = crypto
    .createHash("md5")
    .update(JSON.stringify(courses))
    .digest("hex");

  // Check if client's cached version is still valid:
  if (req.headers["if-none-match"] === etag) {
    return res.status(304).end(); // Not Modified — client uses cache!
  }

  res.set("ETag", etag);
  res.set("Cache-Control", "public, max-age=300"); // Cache for 5 minutes
  res.json(courses);
});`
      },
      {
        heading: "Server-Side Caching with Redis",
        code: `// For expensive computations, cache results server-side:
const redis = require("redis");
const client = redis.createClient();

async function cacheMiddleware(key, ttl, fetchFn) {
  // Try cache first:
  const cached = await client.get(key);
  if (cached) return JSON.parse(cached);

  // Cache miss — fetch and store:
  const data = await fetchFn();
  await client.setEx(key, ttl, JSON.stringify(data));
  return data;
}

app.get("/courses/stats", async (req, res) => {
  const stats = await cacheMiddleware(
    "course-stats",
    300,  // Cache for 5 minutes
    () => Course.aggregate([...complexAggregation...])
  );
  res.json(stats);
});`
      },
      {
        heading: "Important Points to Remember",
        points: [
          "Cache-Control: public allows shared caches (CDNs); private means browser-only.",
          "ETags enable conditional requests — 304 Not Modified saves bandwidth when content hasn't changed.",
          "Never cache responses containing sensitive user data — use private or no-store.",
          "Server-side caching (Redis) for expensive DB queries; HTTP caching for reducing network transfer."
        ]
      }
    ]
  },

  {
    title: "Testing REST APIs",
    subtitle: "Explained Like a Quality Inspector Running Systematic Checks",
    sections: [
      {
        heading: "Types of API Tests",
        paragraphs: [
          "API testing covers several levels: unit tests (individual functions in isolation), integration tests (routes with real database), contract tests (API matches its documented specification), and end-to-end tests (full user flow from frontend to database).",
          "For most REST APIs, integration tests provide the best return — they test the complete request lifecycle including middleware, route handler, and database interaction, catching the bugs that matter most."
        ]
      },
      {
        heading: "Setting Up Integration Tests",
        code: `// tests/courses.test.js:
const request = require("supertest");
const app = require("../app");
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");

// Generate a test token:
const testToken = jwt.sign(
  { id: new mongoose.Types.ObjectId(), role: "student" },
  process.env.JWT_SECRET
);

const authHeader = \`Bearer \${testToken}\`;

beforeAll(async () => {
  await mongoose.connect(process.env.MONGO_URI_TEST);
});

afterAll(async () => {
  await mongoose.connection.dropDatabase();
  await mongoose.connection.close();
});

afterEach(async () => {
  // Clean up between tests:
  await Course.deleteMany({});
});`
      },
      {
        heading: "Testing CRUD Endpoints",
        code: `describe("GET /api/v1/courses", () => {
  test("returns empty array when no courses", async () => {
    const res = await request(app)
      .get("/api/v1/courses")
      .set("Authorization", authHeader);

    expect(res.status).toBe(200);
    expect(res.body.data).toEqual([]);
    expect(res.body.pagination).toBeDefined();
  });

  test("returns courses with pagination", async () => {
    // Seed test data:
    await Course.insertMany([
      { title: "HTML5", level: "Beginner" },
      { title: "CSS3", level: "Beginner" }
    ]);

    const res = await request(app)
      .get("/api/v1/courses?limit=1")
      .set("Authorization", authHeader);

    expect(res.status).toBe(200);
    expect(res.body.data).toHaveLength(1);
    expect(res.body.pagination.total).toBe(2);
    expect(res.body.pagination.hasNextPage).toBe(true);
  });

  test("filters by level", async () => {
    await Course.insertMany([
      { title: "HTML5", level: "Beginner" },
      { title: "React", level: "Intermediate" }
    ]);

    const res = await request(app)
      .get("/api/v1/courses?level=Beginner")
      .set("Authorization", authHeader);

    expect(res.status).toBe(200);
    expect(res.body.data).toHaveLength(1);
    expect(res.body.data[0].level).toBe("Beginner");
  });
});`
      },
      {
        heading: "Testing Authentication",
        code: `describe("Protected Routes", () => {
  test("returns 401 without token", async () => {
    const res = await request(app).get("/api/v1/protected");
    expect(res.status).toBe(401);
    expect(res.body.error.code).toBe("UNAUTHORIZED");
  });

  test("returns 401 with invalid token", async () => {
    const res = await request(app)
      .get("/api/v1/protected")
      .set("Authorization", "Bearer invalid.token.here");
    expect(res.status).toBe(401);
  });

  test("allows access with valid token", async () => {
    const res = await request(app)
      .get("/api/v1/protected")
      .set("Authorization", authHeader);
    expect(res.status).toBe(200);
  });
});`
      },
      {
        heading: "Important Points to Remember",
        points: [
          "Integration tests test the complete request pipeline — they catch real-world bugs that unit tests miss.",
          "Use a separate test database — MONGO_URI_TEST — never test against production data.",
          "Test happy paths, validation errors, auth failures, and edge cases — not just success scenarios.",
          "Clean up test data in afterEach — test isolation prevents tests from affecting each other."
        ]
      }
    ]
  },

  {
    title: "API Documentation Standards",
    subtitle: "Explained Like a Professional Service Manual",
    sections: [
      {
        heading: "Why API Documentation Matters",
        paragraphs: [
          "A great product with terrible documentation is a frustrating product — developers waste hours figuring out what requests to make, what responses to expect, and what errors might occur. API documentation is as much a product feature as the API itself.",
          "Good API documentation answers: What endpoints exist? What parameters do they accept? What do responses look like? What errors can occur? How do I authenticate? It should be accurate, complete, and easy to navigate."
        ]
      },
      {
        heading: "OpenAPI/Swagger Standard",
        code: `// openapi.yaml or openapi.json — the specification:
openapi: "3.0.0"
info:
  title: EduNexa API
  version: 1.0.0
  description: REST API for the EduNexa MERN learning platform

servers:
  - url: http://localhost:5000
    description: Development
  - url: https://api.edunexa.com
    description: Production

components:
  securitySchemes:
    bearerAuth:
      type: http
      scheme: bearer
      bearerFormat: JWT

  schemas:
    User:
      type: object
      properties:
        _id: { type: string }
        name: { type: string }
        email: { type: string, format: email }
        role: { type: string, enum: [student, instructor, admin] }
        createdAt: { type: string, format: date-time }`
      },
      {
        heading: "Documenting Endpoints With JSDoc",
        code: `/**
 * @swagger
 * /api/v1/courses:
 *   get:
 *     summary: Get all courses
 *     description: Returns a paginated list of courses with optional filtering
 *     tags: [Courses]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: query
 *         name: level
 *         schema: { type: string, enum: [Beginner, Intermediate, Advanced] }
 *         description: Filter by course level
 *       - in: query
 *         name: page
 *         schema: { type: integer, default: 1 }
 *       - in: query
 *         name: limit
 *         schema: { type: integer, default: 10, maximum: 100 }
 *     responses:
 *       200:
 *         description: Paginated course list
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 data:
 *                   type: array
 *                   items: { $ref: '#/components/schemas/Course' }
 *                 pagination:
 *                   $ref: '#/components/schemas/Pagination'
 *       401:
 *         description: Authentication required
 */
router.get("/courses", verifyToken, getCourses);`
      },
      {
        heading: "Documentation Best Practices",
        points: [
          "Document ALL endpoints — public and private — even internal APIs will have future consumers",
          "Include real request and response examples — not just schema definitions",
          "Document every possible error response — what codes, what messages, what causes them",
          "Keep documentation next to code — co-located JSDoc comments stay updated when code changes",
          "Version your documentation alongside your API — v1 docs for v1 endpoints, v2 for v2"
        ]
      },
      {
        heading: "Important Points to Remember",
        points: [
          "OpenAPI/Swagger is the industry standard for REST API documentation — generates interactive UIs.",
          "JSDoc comments in route files keep documentation co-located with code — easier to keep updated.",
          "Good documentation includes: endpoint purpose, parameters, request body, all response formats, error codes.",
          "An undocumented API is a liability — other developers (including future you) will struggle to use it."
        ]
      }
    ]
  },

  {
    title: "REST API Best Practices",
    subtitle: "Explained Like Professional Service Industry Standards",
    sections: [
      {
        heading: "Design Best Practices",
        points: [
          "Use nouns for resources, HTTP methods for actions — /users (GET = list, POST = create, etc.)",
          "Plural nouns for collections (/users), singular for specific items if you prefer (/user/:id)",
          "Version from day one — /api/v1/ — even if you think you won't need it",
          "Be consistent — if one endpoint returns { data: [...] }, all endpoints should use that structure",
          "Use HTTP status codes correctly — 201 for created, 204 for no-content, 401 vs 403"
        ]
      },
      {
        heading: "Security Best Practices",
        code: `// Security checklist for every REST API:

// 1. Always use HTTPS in production:
app.use((req, res, next) => {
  if (process.env.NODE_ENV === "production" && !req.secure) {
    return res.redirect(301, \`https://\${req.headers.host}\${req.url}\`);
  }
  next();
});

// 2. Validate all inputs:
app.use(mongoSanitize());  // Prevent NoSQL injection
app.use(xss());            // Prevent XSS

// 3. Set security headers:
app.use(helmet());

// 4. Rate limiting:
app.use("/api/", globalLimiter);
app.post("/login", authLimiter, login);

// 5. Never return sensitive fields:
User.findById(id).select("-password -__v");`
      },
      {
        heading: "Performance Best Practices",
        code: `// 1. Always paginate collections:
app.get("/courses", paginationMiddleware, getCourses);

// 2. Use lean() for read-only queries:
const courses = await Course.find(filter).lean();

// 3. Select only needed fields:
const user = await User.findById(id).select("name email role").lean();

// 4. Index your query fields:
courseSchema.index({ level: 1, createdAt: -1 });

// 5. Use appropriate HTTP caching headers:
res.set("Cache-Control", "public, max-age=300"); // 5 minutes for public data

// 6. Compress responses:
app.use(compression());`
      },
      {
        heading: "Response Consistency Checklist",
        code: `// Use the same structure everywhere:

// Success (collection):
{ success: true, data: [...], pagination: {...} }

// Success (single item):
{ success: true, data: { ...item } }

// Success (action/no content):
{ success: true, message: "User deleted" }

// Error (any error):
{
  success: false,
  error: {
    code: "ERROR_CODE",
    message: "Human readable message",
    details: [] // optional
  }
}`
      },
      {
        heading: "Important Points to Remember",
        points: [
          "Consistency is king — predictable structure lets clients be simpler and more reliable.",
          "Security is non-optional — authentication, input validation, rate limiting, HTTPS are all required.",
          "Performance: paginate everything, use lean(), select only needed fields, index query fields.",
          "Document as you build — documentation written after the fact is always incomplete."
        ]
      }
    ]
  }
];