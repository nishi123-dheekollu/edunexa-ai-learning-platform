export const mongoTopics = [
  "What is MongoDB?",
  "MongoDB vs SQL Databases",
  "Setting Up MongoDB",
  "MongoDB Atlas - Cloud Setup",
  "MongoDB Compass",
  "Collections & Documents",
  "BSON & Data Types",
  "CRUD - Insert Operations",
  "CRUD - Find & Query",
  "Query Operators",
  "Update Operations",
  "Delete Operations",
  "Indexes in MongoDB",
  "Compound & Text Indexes",
  "Aggregation Pipeline",
  "Aggregation Stages Deep Dive",
  "Schema Design Principles",
  "Relationships - Embedding vs Referencing",
  "One-to-Many Relationships",
  "Many-to-Many Relationships",
  "MongoDB with Mongoose - Deep Dive",
  "Mongoose Virtuals & Methods",
  "Mongoose Middleware - Pre & Post Hooks",
  "Transactions in MongoDB",
  "MongoDB Security",
  "Backup & Restore",
  "Performance & Query Optimization",
  "MongoDB Best Practices"
];

export const mongoLessons = [

  {
    title: "What is MongoDB?",
    subtitle: "Explained Like a Flexible Filing System vs Rigid Spreadsheets",
    sections: [
      {
        heading: "Think About Two Ways to Store Records",
        paragraphs: [
          "Imagine storing employee records in a rigid spreadsheet — every row must have the exact same columns (Name, Age, Department, Salary). If one employee has three phone numbers and another has none, you still need the same columns for everyone, leaving many cells empty or requiring extra tables.",
          "MongoDB solves this with a different philosophy — instead of rigid rows and columns, it stores flexible documents, like individual physical folders where each folder can contain whatever information is relevant to that specific record, with no requirement for identical structure."
        ]
      },
      {
        heading: "What MongoDB Actually Is",
        paragraphs: [
          "MongoDB is a NoSQL document database — it stores data as JSON-like documents (called BSON internally) instead of tables with rows and columns. Each document can have different fields, nested objects, and arrays, making it naturally suited for the kind of data modern web applications work with.",
          "In your MERN stack, MongoDB is the 'M' — it stores your users, their course progress, and any other application data. Your server.js connects to it via Mongoose, and every User.save() and User.findOne() ultimately talks to MongoDB."
        ]
      },
      {
        heading: "Key MongoDB Terminology",
        points: [
          "Database — a container of collections (like a physical filing cabinet)",
          "Collection — a group of related documents (like a drawer in that cabinet, equivalent to a SQL table)",
          "Document — one individual record (like one file folder, equivalent to a SQL row)",
          "Field — a key-value pair inside a document (like one piece of information written on the folder)"
        ]
      },
      {
        heading: "Why MongoDB for MERN?",
        points: [
          "JavaScript everywhere — documents are JSON-like, matching JavaScript objects naturally",
          "Flexible schema — user profiles, course progress, and nested data fit naturally without rigid table design",
          "Horizontal scaling — MongoDB scales across multiple servers easily for large applications",
          "Rich query language — powerful filtering, aggregation, and text search built in"
        ]
      },
      {
        heading: "Important Points to Remember",
        points: [
          "MongoDB is a document database — stores flexible JSON-like documents, not rigid table rows.",
          "Key terms: database → collection → document → field (cabinet → drawer → folder → information).",
          "It's the 'M' in MERN — every database operation in your project ultimately talks to MongoDB.",
          "Documents in the same collection can have different fields — no rigid schema required at the database level."
        ]
      }
    ]
  },

  {
    title: "MongoDB vs SQL Databases",
    subtitle: "Explained Like a Custom Filing System vs a Standardized Spreadsheet",
    sections: [
      {
        heading: "Think About Two Office Systems",
        paragraphs: [
          "A traditional government office uses standardized forms — every citizen's record must have the same fields in the same order, even if many are irrelevant. A modern startup uses flexible case files — each customer's folder contains exactly what's needed for that specific customer, no more, no less.",
          "SQL databases are the government office — rigid, structured, powerful for complex relationships. MongoDB is the startup's filing system — flexible, document-oriented, powerful for varied data shapes."
        ]
      },
      {
        heading: "Core Differences",
        points: [
          "Structure — SQL: tables with fixed columns; MongoDB: collections of flexible documents",
          "Schema — SQL: defined upfront, changing it requires migrations; MongoDB: flexible, each document can differ",
          "Relationships — SQL: foreign keys and JOINs across tables; MongoDB: embedding or referencing between documents",
          "Query language — SQL: SQL (Structured Query Language); MongoDB: JSON-based query API",
          "Scaling — SQL: typically vertical (bigger server); MongoDB: designed for horizontal (more servers)"
        ]
      },
      {
        heading: "When MongoDB Wins",
        points: [
          "Rapidly changing data structures (agile development where requirements evolve)",
          "Hierarchical or nested data (user profile with nested address, preferences, history)",
          "Large volumes of varied data that don't fit rigid tables neatly",
          "Real-time analytics and high-write-throughput applications"
        ]
      },
      {
        heading: "When SQL Wins",
        points: [
          "Complex multi-table relationships with frequent JOINs (e.g., banking, accounting)",
          "Strict data consistency requirements with ACID transactions across many tables",
          "Well-defined, stable schema that won't change frequently",
          "Complex reporting with many aggregations across related datasets"
        ]
      },
      {
        heading: "Important Points to Remember",
        points: [
          "Neither is universally better — choose based on your data shape and access patterns.",
          "MongoDB excels at flexible, hierarchical, document-like data — perfect for MERN apps.",
          "SQL excels at complex relational data with many JOINs and strict consistency needs.",
          "Many modern apps use both — MongoDB for flexible application data, SQL for financial/reporting data."
        ]
      }
    ]
  },

  {
    title: "Setting Up MongoDB",
    subtitle: "Explained Like Installing and Opening a Filing Cabinet",
    sections: [
      {
        heading: "Two Ways to Use MongoDB",
        paragraphs: [
          "You can run MongoDB locally on your computer (like having a physical filing cabinet in your office) or use MongoDB Atlas, a cloud-hosted version (like renting space in a professional document storage facility). For learning and development, local is fine; for production and team projects, Atlas is standard.",
          "Your existing MERN project uses MongoDB Atlas — that mongodb+srv:// URI in your .env file connects to Atlas, not a local installation."
        ]
      },
      {
        heading: "Installing MongoDB Locally (Optional)",
        points: [
          "Visit mongodb.com/try/download/community and download MongoDB Community Server",
          "Install it as a service — it runs automatically when your computer starts",
          "Local MongoDB runs on port 27017 by default",
          "Connection string for local: mongodb://localhost:27017/your-database-name"
        ]
      },
      {
        heading: "Verifying a Local Installation",
        code: `# Start MongoDB shell:
mongosh

# Shows connected message and prompt:
# Current Mongosh Log ID: ...
# Connecting to: mongodb://127.0.0.1:27017/
# test>

# Basic test commands:
test> show dbs         // List all databases
test> use myapp        // Switch to (or create) a database
myapp> show collections // List collections in current DB`
      },
      {
        heading: "When to Use Local vs Atlas",
        points: [
          "Local — offline development, learning without internet, testing with large data sets",
          "Atlas (cloud) — team projects, production apps, access from anywhere, built-in backups",
          "Your project already uses Atlas — you don't need local MongoDB for your MERN platform",
          "Both use identical MongoDB query syntax — learning either transfers to the other"
        ]
      },
      {
        heading: "Important Points to Remember",
        points: [
          "Local MongoDB runs on mongodb://localhost:27017; Atlas uses a mongodb+srv:// URI.",
          "mongosh is the modern MongoDB shell — use it for direct database exploration.",
          "Your MERN project already connects to Atlas via Mongoose — no local MongoDB needed.",
          "Connection string format matters: local vs Atlas URIs are different but Mongoose handles both."
        ]
      }
    ]
  },

  {
    title: "MongoDB Atlas - Cloud Setup",
    subtitle: "Explained Like Renting Space in a Professional Document Storage Facility",
    sections: [
      {
        heading: "Think About Professional Document Storage",
        paragraphs: [
          "Instead of maintaining your own filing room (with all the costs of space, security, backups, and maintenance), you rent space at a professional document storage facility that handles all of that — you just access your documents when needed through a secure interface.",
          "MongoDB Atlas is exactly this — MongoDB runs in the cloud, managed by MongoDB Inc., with automatic backups, scaling, monitoring, and security, so you focus on your application instead of database administration."
        ]
      },
      {
        heading: "Creating an Atlas Account and Cluster",
        points: [
          "Visit cloud.mongodb.com and create a free account",
          "Create a new Project (e.g., 'EduNexa')",
          "Create a Cluster — choose the free M0 tier (512MB, perfect for learning projects)",
          "Choose a cloud provider and region (AWS, Google Cloud, or Azure — pick the nearest region)",
          "Wait ~3 minutes for provisioning — your cluster is being built"
        ]
      },
      {
        heading: "Connecting to Your Cluster",
        points: [
          "In Atlas: Security → Database Access → Add Database User (create username and password)",
          "Network Access → Add IP Address (Add Current IP for development, 0.0.0.0/0 for all IPs in production)",
          "Clusters → Connect → Connect your application → Copy the connection string",
          "Replace <password> in the string with your actual password → paste in your .env as MONGO_URI"
        ]
      },
      {
        heading: "Atlas Dashboard Features",
        points: [
          "Collections browser — view and edit your data directly in the browser, like your filing cabinet's contents",
          "Metrics — CPU, memory, operation counts — monitor your database's health",
          "Alerts — set up notifications when metrics exceed thresholds",
          "Backups — automated point-in-time backups (on paid tiers); free tier has some snapshots"
        ]
      },
      {
        heading: "Important Points to Remember",
        points: [
          "Free M0 cluster is sufficient for learning projects and small production apps.",
          "Always add your current IP to Network Access — connections from unlisted IPs are rejected.",
          "Store the connection string in .env as MONGO_URI — never hardcode it in your code.",
          "Atlas provides a web UI to browse collections — useful for verifying your app's data."
        ]
      }
    ]
  },

  {
    title: "MongoDB Compass",
    subtitle: "Explained Like a Visual Filing Cabinet Manager",
    sections: [
      {
        heading: "Think About a Visual Document Manager",
        paragraphs: [
          "Working with filing cabinets through a command-line interface is like searching through folders in complete darkness — possible but inefficient. A visual document manager lets you open drawers, browse folders, search contents, and edit records through a clear graphical interface.",
          "MongoDB Compass is this visual manager — a desktop application that connects to any MongoDB database (local or Atlas) and provides a rich GUI for exploring data, building queries visually, analyzing query performance, and understanding your collection structure."
        ]
      },
      {
        heading: "Installing and Connecting Compass",
        points: [
          "Download from mongodb.com/try/download/compass — free desktop application",
          "Open Compass → paste your Atlas connection string (or mongodb://localhost:27017 for local)",
          "Click Connect — your databases and collections appear in the left sidebar",
          "Browse collections, view documents, create indexes — all through the GUI"
        ]
      },
      {
        heading: "Key Compass Features",
        points: [
          "Documents tab — browse, filter, add, edit, and delete documents with a visual form",
          "Schema tab — Compass analyzes your collection and shows field types, value distributions",
          "Indexes tab — view existing indexes, create new ones, see their sizes and usage",
          "Explain Plan tab — run a query and see exactly how MongoDB executes it (is it using indexes?)",
          "Aggregations tab — build aggregation pipelines visually, stage by stage"
        ]
      },
      {
        heading: "Building Queries Visually",
        code: `// Instead of writing this manually:
{ level: "Beginner", progress: { $gte: 50 } }

// Compass lets you build it through a GUI:
// Field: level | Operator: equals | Value: "Beginner"
// Field: progress | Operator: >= | Value: 50

// Then shows you the generated query code and results simultaneously`
      },
      {
        heading: "Important Points to Remember",
        points: [
          "Compass is a free desktop tool for visually exploring MongoDB databases.",
          "Connect using the same connection string as your application code.",
          "The Explain Plan feature shows whether queries use indexes — critical for optimization.",
          "Compass is invaluable for development — verify your app's database operations are working correctly."
        ]
      }
    ]
  },

  {
    title: "Collections & Documents",
    subtitle: "Explained Like Filing Drawers and Individual Case Files",
    sections: [
      {
        heading: "Think About a Physical Filing System",
        paragraphs: [
          "A filing cabinet has multiple drawers — one labeled 'Employees', one 'Invoices', one 'Contracts'. Each drawer holds individual folders — each folder is a complete, self-contained record for one specific item. Folders in the same drawer are related but can contain different types of information.",
          "MongoDB's collections and documents work exactly this way — collections are the drawers (grouping related records), documents are the folders (individual records that can vary from each other)."
        ]
      },
      {
        heading: "Collections",
        code: `// MongoDB automatically creates collections when you first insert data
// Naming conventions: plural, lowercase, no spaces
// users, courses, orders, blog_posts

// In mongosh:
use edunexa           // Switch to/create database
show collections      // List all collections
db.createCollection("courses") // Explicit creation (optional)
db.courses.drop()     // Delete a collection and all its documents`
      },
      {
        heading: "Documents",
        code: `// A MongoDB document — JSON-like, flexible structure:
{
  "_id": ObjectId("64f1a2b3c4d5e6f7a8b9c0d1"),
  "name": "Nishitha",
  "email": "nishitha@example.com",
  "courses": {
    "html5": {
      "completedTopics": [0, 1, 2, 3],
      "progress": 9,
      "completed": false
    }
  },
  "createdAt": ISODate("2024-01-15T10:30:00.000Z")
}

// Another document in the SAME collection — different structure is OK:
{
  "_id": ObjectId("..."),
  "name": "Ravi",
  "email": "ravi@example.com",
  "role": "admin"   // This field doesn't exist in the first document — that's fine!
}`
      },
      {
        heading: "The _id Field",
        paragraphs: [
          "Every document gets an _id field automatically — a unique identifier within that collection. By default it's an ObjectId (a 12-byte value encoding timestamp + random data), but you can provide your own _id value. ObjectId's timestamp component means you can determine when a document was created from its _id alone.",
          "In Mongoose, _id is automatically included and Mongoose adds an id virtual (string version of _id) for convenience. Your routes that use req.params.userId are passing this _id value."
        ]
      },
      {
        heading: "Important Points to Remember",
        points: [
          "Collections group related documents — like drawers in a filing cabinet.",
          "Documents are JSON-like records — flexible, can have different fields in the same collection.",
          "Every document gets a unique _id automatically — an ObjectId encoding timestamp + random data.",
          "Collections are created automatically on first insert — no CREATE TABLE equivalent needed."
        ]
      }
    ]
  },

  {
    title: "BSON & Data Types",
    subtitle: "Explained Like Understanding What Types of Information Different Forms Accept",
    sections: [
      {
        heading: "What is BSON?",
        paragraphs: [
          "MongoDB stores documents as BSON (Binary JSON) — a binary-encoded format that extends JSON with additional data types. While you work with regular JSON in your code, MongoDB serializes it to BSON for storage and back to JSON when you retrieve it. The conversion happens automatically; you rarely interact with BSON directly.",
          "BSON supports more data types than plain JSON — this is important because JSON only has strings, numbers, booleans, arrays, objects, and null, which isn't enough for a full database (dates, binary data, and unique IDs need dedicated types)."
        ]
      },
      {
        heading: "Common BSON Data Types",
        points: [
          "String — text data: \"Hello World\" (UTF-8 encoded)",
          "Number — Integer (32/64-bit) and Double (floating point): 42, 3.14",
          "Boolean — true or false",
          "Date — ISODate(\"2024-01-15T10:30:00Z\") — stores as milliseconds since epoch",
          "ObjectId — 12-byte unique identifier, default _id type",
          "Array — ordered list: [\"HTML5\", \"CSS3\", \"JavaScript\"]",
          "Object/Embedded Document — nested document: { street: \"MG Road\", city: \"Hyderabad\" }",
          "Null — explicit absence of value",
          "Binary Data — for storing files/images (though usually better to store file paths)"
        ]
      },
      {
        heading: "Data Types in Mongoose Schemas",
        code: `const userSchema = new mongoose.Schema({
  name: String,           // BSON String
  age: Number,            // BSON Number
  isVerified: Boolean,    // BSON Boolean
  createdAt: Date,        // BSON Date
  tags: [String],         // BSON Array of Strings
  address: {              // BSON Embedded Document
    city: String,
    state: String
  },
  profileId: mongoose.Schema.Types.ObjectId, // BSON ObjectId
  bio: { type: String, default: null }       // Nullable String
});`
      },
      {
        heading: "Date Handling",
        code: `// Storing dates:
const user = new User({ createdAt: new Date() });

// Querying by date range:
User.find({
  createdAt: {
    $gte: new Date("2024-01-01"),
    $lt: new Date("2025-01-01")
  }
});

// Mongoose adds timestamps automatically if configured:
const schema = new mongoose.Schema({...}, { timestamps: true });
// Adds: createdAt and updatedAt fields automatically`
      },
      {
        heading: "Important Points to Remember",
        points: [
          "BSON extends JSON with additional types: Date, ObjectId, Binary — stored efficiently in binary.",
          "MongoDB automatically converts between your JSON code and BSON storage.",
          "Always use new Date() for date values, not date strings — ensures proper date comparison in queries.",
          "Add { timestamps: true } to Mongoose schemas for automatic createdAt/updatedAt fields."
        ]
      }
    ]
  },

  {
    title: "CRUD - Insert Operations",
    subtitle: "Explained Like Adding New Files to the Filing Cabinet",
    sections: [
      {
        heading: "Think About Adding a New Case File",
        paragraphs: [
          "Adding a new employee record to a filing cabinet: you prepare the folder with all relevant information, slide it into the correct drawer, and the folder gets a label (unique ID) so you can find it again later. You can add one folder at a time or a batch of folders at once.",
          "MongoDB insert operations follow this same process — preparing a document with your data, inserting it into the correct collection, and MongoDB assigns an _id automatically."
        ]
      },
      {
        heading: "Inserting One Document",
        code: `// mongosh — direct MongoDB commands:
db.users.insertOne({
  name: "Nishitha",
  email: "nishitha@example.com",
  role: "student",
  createdAt: new Date()
})

// Result:
// { acknowledged: true, insertedId: ObjectId("64f1a2b3...") }

// The _id is assigned automatically by MongoDB
// You can provide your own: { _id: "custom-id", name: "..." }`
      },
      {
        heading: "Inserting Multiple Documents",
        code: `// Insert many at once — more efficient than individual inserts:
db.courses.insertMany([
  { title: "HTML5", level: "Beginner", topics: 43 },
  { title: "CSS3", level: "Beginner", topics: 42 },
  { title: "JavaScript", level: "Beginner", topics: 45 }
])

// Result:
// { acknowledged: true, insertedCount: 3, insertedIds: { 0: ObjectId(...), 1: ObjectId(...), 2: ObjectId(...) } }

// Ordered vs Unordered inserts:
db.courses.insertMany(docs, { ordered: false })
// ordered: false — continues inserting remaining docs if one fails
// ordered: true (default) — stops on first error`
      },
      {
        heading: "Inserts via Mongoose",
        code: `// These all ultimately call MongoDB's insert operations:

// Method 1: new + save()
const user = new User({ name: "Nishitha", email: "n@test.com" });
const saved = await user.save();
console.log(saved._id); // MongoDB's assigned ObjectId

// Method 2: Model.create() — shorthand
const user = await User.create({ name: "Nishitha", email: "n@test.com" });

// Method 3: Model.insertMany() — for bulk inserts
await User.insertMany([
  { name: "User1", email: "u1@test.com" },
  { name: "User2", email: "u2@test.com" }
]);`
      },
      {
        heading: "Important Points to Remember",
        points: [
          "insertOne() for single documents; insertMany() for bulk — both are in mongosh and Mongoose.",
          "MongoDB assigns _id automatically — a unique ObjectId for each inserted document.",
          "insertMany with ordered: false continues inserting after failures — useful for large batch imports.",
          "Mongoose's Model.create() is shorthand for new Model() + .save(), just more concise."
        ]
      }
    ]
  },

  {
    title: "CRUD - Find & Query",
    subtitle: "Explained Like Searching Through the Filing Cabinet",
    sections: [
      {
        heading: "Think About Searching Case Files",
        paragraphs: [
          "When you need records from a filing cabinet, you can search several ways: pull everything from a drawer (find all), look for a specific folder by its label (find by ID), or search folders matching a criteria (find by field value). A librarian's catalogue system lets you combine multiple criteria.",
          "MongoDB's find operations provide all these search patterns — from returning all documents to highly specific filtered queries."
        ]
      },
      {
        heading: "Basic Find Operations",
        code: `// Find ALL documents in a collection:
db.users.find()

// Find with a filter (equality):
db.users.find({ role: "student" })

// Find ONE document (returns first match):
db.users.findOne({ email: "nishitha@example.com" })

// Find by _id:
db.users.findOne({ _id: ObjectId("64f1a2b3c4d5e6f7a8b9c0d1") })

// Count matching documents:
db.users.countDocuments({ role: "student" })`
      },
      {
        heading: "Projection — Selecting Specific Fields",
        code: `// Include only specific fields (1 = include):
db.users.find({}, { name: 1, email: 1 })
// Returns: { _id: ..., name: "...", email: "..." }

// Exclude specific fields (0 = exclude):
db.users.find({}, { password: 0 })
// Returns all fields EXCEPT password

// Exclude _id too:
db.users.find({}, { password: 0, _id: 0 })

// In Mongoose:
await User.find().select("name email -password")
// -password means exclude password`
      },
      {
        heading: "Sorting, Limiting, Skipping",
        code: `// Sort by name ascending (1), then age descending (-1):
db.users.find().sort({ name: 1, age: -1 })

// Limit results to 10:
db.users.find().limit(10)

// Skip first 20 (for pagination):
db.users.find().skip(20).limit(10)

// Chaining — page 3 with 10 per page:
db.users.find().sort({ createdAt: -1 }).skip(20).limit(10)

// In Mongoose:
await User.find().sort("-createdAt").skip(20).limit(10).lean()`
      },
      {
        heading: "Important Points to Remember",
        points: [
          "find() returns all matches; findOne() returns the first match only.",
          "Projection (second argument to find) controls which fields are included or excluded.",
          "Chain .sort(), .skip(), .limit() for pagination — always sort before skip/limit for consistent results.",
          ".lean() in Mongoose returns plain JS objects instead of Mongoose documents — significantly faster for read-only operations."
        ]
      }
    ]
  },

  {
    title: "Query Operators",
    subtitle: "Explained Like Advanced Search Filters in a Case File System",
    sections: [
      {
        heading: "Think About Advanced Search Filters",
        paragraphs: [
          "A basic filing system lets you find files by name. An advanced system lets you find files created after a certain date, with amounts between two values, matching any of several status codes, or NOT matching specific criteria — combining multiple filters for precise results.",
          "MongoDB's query operators ($gt, $in, $or, etc.) provide exactly these advanced filter capabilities, going far beyond simple equality matching."
        ]
      },
      {
        heading: "Comparison Operators",
        code: `// $eq (equals — default, usually implicit), $ne (not equals):
db.courses.find({ level: { $ne: "Advanced" } })

// $gt (>), $gte (>=), $lt (<), $lte (<=):
db.courses.find({ topics: { $gte: 40 } })
db.users.find({ age: { $gt: 18, $lt: 65 } }) // Between 18 and 65

// $in (matches any in array), $nin (not in array):
db.courses.find({ level: { $in: ["Beginner", "Intermediate"] } })
db.users.find({ role: { $nin: ["admin", "moderator"] } })`
      },
      {
        heading: "Logical Operators",
        code: `// $and — all conditions must match (also the default for multiple fields):
db.courses.find({
  $and: [
    { level: "Beginner" },
    { topics: { $gte: 40 } }
  ]
})
// Shorter form (implicit AND):
db.courses.find({ level: "Beginner", topics: { $gte: 40 } })

// $or — at least one condition must match:
db.users.find({
  $or: [
    { role: "admin" },
    { isVerified: true }
  ]
})

// $not — negates a condition:
db.courses.find({ topics: { $not: { $lt: 20 } } }) // topics >= 20`
      },
      {
        heading: "Element & Array Operators",
        code: `// $exists — field exists (or not):
db.users.find({ phoneNumber: { $exists: true } })

// $type — field is a specific BSON type:
db.users.find({ age: { $type: "number" } })

// Array operators:
// $all — array contains ALL specified values:
db.courses.find({ tags: { $all: ["javascript", "frontend"] } })

// $elemMatch — at least one array element matches all criteria:
db.orders.find({
  items: { $elemMatch: { price: { $gt: 100 }, quantity: { $gt: 2 } } }
})

// $size — array has specific length:
db.users.find({ "courses": { $size: 3 } })`
      },
      {
        heading: "Important Points to Remember",
        points: [
          "Comparison: $gt/$gte/$lt/$lte for ranges; $in/$nin for matching any/none of a list.",
          "Logical: $or for alternatives, $and for multiple requirements (implicit for different fields).",
          "$exists checks field presence — useful for documents with varying structure.",
          "$elemMatch is essential for filtering arrays where multiple conditions must apply to the SAME element."
        ]
      }
    ]
  },

  {
    title: "Update Operations",
    subtitle: "Explained Like Updating Information in Existing Case Files",
    sections: [
      {
        heading: "Think About Updating Case Files",
        paragraphs: [
          "When an employee gets promoted, you don't throw away their entire file and create a new one — you update the specific information that changed (title, salary, department) while leaving everything else intact. Sometimes you might need to add a completely new section to the file.",
          "MongoDB update operations follow this same approach — targeted updates that modify only what changed, without rewriting the entire document."
        ]
      },
      {
        heading: "Update Operators",
        code: `// $set — set specific field values:
db.users.updateOne(
  { email: "nishitha@example.com" },  // Filter
  { $set: { role: "admin", updatedAt: new Date() } }  // Update
)

// $unset — remove a field:
db.users.updateOne({ email: "..." }, { $unset: { temporaryField: "" } })

// $inc — increment a number (positive or negative):
db.courses.updateOne({ title: "HTML5" }, { $inc: { views: 1 } })
db.users.updateOne({ _id: id }, { $inc: { loginCount: 1 } })

// $push — add to array:
db.users.updateOne({ _id: id }, { $push: { completedCourses: "HTML5" } })

// $pull — remove from array:
db.users.updateOne({ _id: id }, { $pull: { completedCourses: "HTML5" } })

// $addToSet — add to array only if not already present (like a Set):
db.users.updateOne({ _id: id }, { $addToSet: { tags: "javascript" } })`
      },
      {
        heading: "updateOne vs updateMany vs findByIdAndUpdate",
        code: `// updateOne — updates FIRST matching document:
db.courses.updateOne({ level: "Beginner" }, { $set: { updated: true } })

// updateMany — updates ALL matching documents:
db.courses.updateMany({ level: "Beginner" }, { $set: { reviewed: true } })

// findOneAndUpdate — returns the document (old by default):
db.users.findOneAndUpdate(
  { email: "..." },
  { $set: { name: "New Name" } },
  { returnDocument: "after" }  // Return updated version
)

// Mongoose equivalents:
await User.updateOne({ email: "..." }, { $set: { role: "admin" } });
await User.findByIdAndUpdate(id, { $set: { name: "New" } }, { new: true });`
      },
      {
        heading: "Upsert — Update or Insert",
        code: `// upsert: true — creates document if no match found:
db.userStats.updateOne(
  { userId: "64f1a2b3" },
  { $inc: { loginCount: 1 }, $set: { lastLogin: new Date() } },
  { upsert: true }
)
// If no document with that userId exists: creates one
// If it exists: updates it`
      },
      {
        heading: "Important Points to Remember",
        points: [
          "Always use update operators ($set, $inc, $push) — never pass a plain object without operators (it replaces the entire document).",
          "updateOne affects first match; updateMany affects all matches — choose carefully.",
          "{ new: true } in findByIdAndUpdate returns the updated document, not the original.",
          "upsert: true creates the document if no match exists — useful for 'create or update' patterns."
        ]
      }
    ]
  },

  {
    title: "Delete Operations",
    subtitle: "Explained Like Removing Files From the Cabinet",
    sections: [
      {
        heading: "Think About Removing Case Files",
        paragraphs: [
          "Removing files from a filing cabinet can mean several things: shredding one specific outdated record, clearing out an entire category of files, or archiving (soft delete) rather than physically destroying. Each serves a different purpose and carries different consequences.",
          "MongoDB's delete operations mirror these scenarios — targeted single-document deletion, bulk deletion by criteria, or the pattern of soft deletes (marking as deleted rather than physically removing)."
        ]
      },
      {
        heading: "Delete Operations",
        code: `// deleteOne — removes FIRST matching document:
db.users.deleteOne({ email: "spam@example.com" })
// Result: { acknowledged: true, deletedCount: 1 }

// deleteMany — removes ALL matching documents:
db.sessions.deleteMany({ expiresAt: { $lt: new Date() } })
// Result: { acknowledged: true, deletedCount: 47 }

// findOneAndDelete — removes and RETURNS the deleted document:
const deleted = await db.users.findOneAndDelete({ email: "..." })
// Useful when you need to process the document after removing it

// Delete ALL documents in a collection (be very careful!):
db.temporaryData.deleteMany({}) // Empty filter = all documents`
      },
      {
        heading: "Soft Delete — Marking Instead of Removing",
        code: `// Instead of actually deleting, mark as deleted:
const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  isDeleted: { type: Boolean, default: false },
  deletedAt: Date
});

// "Delete" a user:
await User.updateOne(
  { _id: userId },
  { $set: { isDeleted: true, deletedAt: new Date() } }
);

// All queries exclude deleted users:
await User.find({ isDeleted: false });

// Mongoose middleware to auto-exclude deleted:
userSchema.pre("find", function() {
  this.where({ isDeleted: false });
});`
      },
      {
        heading: "When to Use Soft Delete",
        points: [
          "When you need audit trails — who deleted what and when",
          "When data might need to be recovered (user account reactivation)",
          "When related data depends on the 'deleted' record (referenced by other documents)",
          "For compliance requirements where data must be retained even after 'deletion'"
        ]
      },
      {
        heading: "Important Points to Remember",
        points: [
          "deleteOne removes the first match; deleteMany removes all matches — always double-check your filter.",
          "deleteMany({}) with an empty filter removes ALL documents — use with extreme caution.",
          "findOneAndDelete returns the removed document — useful for cleanup workflows.",
          "Soft delete (isDeleted flag) is safer for production data — enables recovery and auditing."
        ]
      }
    ]
  },

  {
    title: "Indexes in MongoDB",
    subtitle: "Explained Like a Book's Index vs Reading Every Page",
    sections: [
      {
        heading: "Think About a Book's Index",
        paragraphs: [
          "To find all mentions of 'JWT' in a 500-page book, you have two options: read every page until you find every mention (slow, proportional to book length) or check the index at the back (instant, goes directly to the right pages). The index doesn't change the book's content — it's a separate structure that makes finding things dramatically faster.",
          "Database indexes work exactly this way — separate data structures that make specific queries dramatically faster, without changing the actual documents. The trade-off: indexes take up storage space and slow down writes slightly, since they must be updated when documents change."
        ]
      },
      {
        heading: "Creating Indexes",
        code: `// Single field index:
db.users.createIndex({ email: 1 })  // 1 = ascending, -1 = descending
db.courses.createIndex({ title: 1 })

// Unique index — prevents duplicate values:
db.users.createIndex({ email: 1 }, { unique: true })

// Sparse index — only indexes documents where field exists:
db.users.createIndex({ phoneNumber: 1 }, { sparse: true })

// TTL index — auto-deletes documents after a time period:
db.sessions.createIndex(
  { createdAt: 1 },
  { expireAfterSeconds: 3600 } // Delete 1 hour after createdAt
)

// View existing indexes:
db.users.getIndexes()`
      },
      {
        heading: "Indexes in Mongoose Schemas",
        code: `const userSchema = new mongoose.Schema({
  email: {
    type: String,
    unique: true,    // Creates unique index automatically
    index: true      // Creates a regular index
  },
  name: String,
  createdAt: {
    type: Date,
    index: true      // Index for sorting by date
  }
});

// Compound index defined separately:
userSchema.index({ role: 1, createdAt: -1 });

// Text index for search:
courseSchema.index({ title: "text", description: "text" });`
      },
      {
        heading: "Checking If Your Query Uses an Index",
        code: `// .explain() shows the query execution plan:
db.users.find({ email: "nishitha@example.com" }).explain("executionStats")

// Key fields to check in explain output:
// queryPlanner.winningPlan.inputStage.stage:
//   "IXSCAN" = using an index (fast!)
//   "COLLSCAN" = collection scan (reads every document — slow for large collections)

// executionStats.totalDocsExamined vs nReturned:
//   If examined >> returned, the query is inefficient — needs an index`
      },
      {
        heading: "Important Points to Remember",
        points: [
          "Indexes dramatically speed up reads but slightly slow writes — add indexes on frequently queried fields.",
          "MongoDB's _id field is automatically indexed — no need to create one.",
          "unique: true creates both a uniqueness constraint AND an index.",
          "TTL indexes auto-expire documents — perfect for sessions, temporary tokens, and cache entries."
        ]
      }
    ]
  },

  {
    title: "Compound & Text Indexes",
    subtitle: "Explained Like Multi-Column Spreadsheet Sorting and Full-Text Search",
    sections: [
      {
        heading: "Compound Indexes — Multiple Fields Together",
        paragraphs: [
          "A single-field index helps find all users by email. But if you frequently query 'all beginner courses sorted by newest first', you need an index on both level AND createdAt together — a compound index. The order of fields in a compound index matters: it determines which query patterns benefit from it."
        ]
      },
      {
        heading: "Creating and Using Compound Indexes",
        code: `// Compound index: level ascending, createdAt descending
db.courses.createIndex({ level: 1, createdAt: -1 })

// This index efficiently handles:
db.courses.find({ level: "Beginner" }).sort({ createdAt: -1 })
db.courses.find({ level: "Intermediate" }).sort({ createdAt: -1 })

// The ESR Rule for compound index field order:
// Equality fields first, Sort fields second, Range fields last

// Example: find active users by role, sorted by name, created in 2024:
// db.users.find({ isActive: true, role: "admin", createdAt: { $gte: ... } }).sort({ name: 1 })
// Optimal index: { isActive: 1, role: 1, name: 1, createdAt: 1 }
//                  Equality ↑      ↑  Sort ↑     Range ↑`
      },
      {
        heading: "Text Indexes — Full-Text Search",
        code: `// Create text index on multiple fields:
db.courses.createIndex({ title: "text", description: "text" })

// Text search queries:
db.courses.find({ $text: { $search: "javascript react" } })
// Finds documents containing "javascript" OR "react"

// Exact phrase search:
db.courses.find({ $text: { $search: "\"react hooks\"" } })

// Exclude term:
db.courses.find({ $text: { $search: "javascript -python" } })

// Sort by relevance score:
db.courses.find(
  { $text: { $search: "javascript" } },
  { score: { $meta: "textScore" } }
).sort({ score: { $meta: "textScore" } })`
      },
      {
        heading: "Text Index in Mongoose",
        code: `// Define in schema:
courseSchema.index({ title: "text", description: "text" });

// Query:
const results = await Course.find(
  { $text: { $search: req.query.q } },
  { score: { $meta: "textScore" } }
).sort({ score: { $meta: "textScore" } }).limit(20);`
      },
      {
        heading: "Important Points to Remember",
        points: [
          "Compound indexes help queries that filter and sort on multiple fields — field order follows ESR rule.",
          "A compound index can serve queries on its prefix fields — { a: 1, b: 1, c: 1 } serves queries on {a}, {a,b}, {a,b,c}.",
          "Text indexes enable full-text search with relevance scoring — far better than regex for search features.",
          "Only one text index per collection — include all searchable fields in a single text index."
        ]
      }
    ]
  },

  {
    title: "Aggregation Pipeline",
    subtitle: "Explained Like a Multi-Stage Food Processing Line",
    sections: [
      {
        heading: "Think About a Food Processing Factory",
        paragraphs: [
          "Raw ingredients enter a processing line and pass through multiple stations: washing removes dirt, sorting separates by size, cutting transforms shape, packaging puts items in containers, labeling adds information. Each station transforms the output of the previous one, producing a finished product very different from the raw input.",
          "MongoDB's aggregation pipeline is exactly this — raw documents pass through a sequence of transformation stages, each stage processing the results from the previous, producing a computed result set that may look completely different from the original collection."
        ]
      },
      {
        heading: "Basic Pipeline Structure",
        code: `db.users.aggregate([
  // Stage 1: Filter (like a WHERE clause)
  { $match: { role: "student", isVerified: true } },

  // Stage 2: Group and compute
  {
    $group: {
      _id: "$plan",           // Group by the 'plan' field
      count: { $sum: 1 },     // Count users per plan
      avgAge: { $avg: "$age" } // Average age per plan
    }
  },

  // Stage 3: Sort results
  { $sort: { count: -1 } },  // Most popular plan first

  // Stage 4: Limit
  { $limit: 5 }
])`
      },
      {
        heading: "Real Example — Course Completion Stats",
        code: `db.users.aggregate([
  // Match users with at least some HTML progress:
  { $match: { "courses.html5.progress": { $gt: 0 } } },

  // Group by completion status and compute stats:
  {
    $group: {
      _id: "$courses.html5.completed",
      userCount: { $sum: 1 },
      avgProgress: { $avg: "$courses.html5.progress" },
      maxProgress: { $max: "$courses.html5.progress" }
    }
  },

  // Rename _id to something meaningful:
  {
    $project: {
      isCompleted: "$_id",
      _id: 0,
      userCount: 1,
      avgProgress: { $round: ["$avgProgress", 1] },
      maxProgress: 1
    }
  }
])`
      },
      {
        heading: "Performance Tip",
        paragraphs: [
          "Always put $match and $limit stages as early as possible in your pipeline — they reduce the number of documents that subsequent, more expensive stages need to process. A $match at the beginning of a pipeline uses indexes; a $match later in the pipeline cannot."
        ]
      },
      {
        heading: "Important Points to Remember",
        points: [
          "The aggregation pipeline transforms documents through sequential stages — each stage processes the previous stage's output.",
          "Put $match first to filter early and use indexes; put $project last to reshape after computing.",
          "Aggregation can compute things find() cannot: averages, counts per group, joins, computed fields.",
          "Use .explain() on aggregations to verify early stages use indexes correctly."
        ]
      }
    ]
  },

  {
    title: "Aggregation Stages Deep Dive",
    subtitle: "Explained Like Learning Each Station on the Processing Line",
    sections: [
      {
        heading: "$lookup — Joining Collections",
        code: `// Join users with their orders:
db.users.aggregate([
  {
    $lookup: {
      from: "orders",           // Collection to join
      localField: "_id",        // Field from users collection
      foreignField: "userId",   // Field from orders collection
      as: "userOrders"          // Array field name in result
    }
  }
])

// Result: each user document now has a userOrders array
// containing all their matching orders

// Pipeline lookup (more powerful — join with conditions):
{
  $lookup: {
    from: "courses",
    let: { userId: "$_id" },
    pipeline: [
      { $match: { $expr: { $eq: ["$enrolledBy", "$$userId"] } } },
      { $sort: { enrolledAt: -1 } },
      { $limit: 5 }
    ],
    as: "recentCourses"
  }
}`
      },
      {
        heading: "$unwind — Flattening Arrays",
        code: `// If a document has: { name: "Nishitha", tags: ["html", "css", "js"] }
// $unwind creates one document per array element:
db.users.aggregate([{ $unwind: "$tags" }])
// Creates 3 documents:
// { name: "Nishitha", tags: "html" }
// { name: "Nishitha", tags: "css" }
// { name: "Nishitha", tags: "js" }

// Useful before $group to count/process array elements:
db.courses.aggregate([
  { $unwind: "$tags" },
  { $group: { _id: "$tags", courseCount: { $sum: 1 } } },
  { $sort: { courseCount: -1 } }
])
// Result: tags ranked by how many courses use them`
      },
      {
        heading: "$addFields & $project",
        code: `// $addFields — add computed fields without removing existing ones:
db.courses.aggregate([
  {
    $addFields: {
      completionRate: {
        $multiply: [{ $divide: ["$completedTopics", "$totalTopics"] }, 100]
      },
      isPopular: { $gte: ["$enrollments", 1000] }
    }
  }
])

// $project — include, exclude, rename, compute:
db.users.aggregate([
  {
    $project: {
      fullName: { $concat: ["$firstName", " ", "$lastName"] },
      email: 1,
      password: 0,   // Exclude password
      _id: 0
    }
  }
])`
      },
      {
        heading: "$facet — Multiple Aggregations in One Query",
        code: `// Run multiple pipelines simultaneously — useful for dashboards:
db.courses.aggregate([
  {
    $facet: {
      byLevel: [
        { $group: { _id: "$level", count: { $sum: 1 } } }
      ],
      topCourses: [
        { $sort: { enrollments: -1 } },
        { $limit: 5 },
        { $project: { title: 1, enrollments: 1 } }
      ],
      stats: [
        { $group: { _id: null, avgTopics: { $avg: "$topics" }, total: { $sum: 1 } } }
      ]
    }
  }
])
// Returns all three in one database round-trip`
      },
      {
        heading: "Important Points to Remember",
        points: [
          "$lookup joins collections — use pipeline lookup for conditional joins and filtering.",
          "$unwind flattens arrays into separate documents — essential before $group on array elements.",
          "$addFields adds computed fields; $project reshapes the output document.",
          "$facet runs multiple sub-pipelines in one query — perfect for dashboard statistics."
        ]
      }
    ]
  },

  {
    title: "Schema Design Principles",
    subtitle: "Explained Like Designing the Layout of Filing Drawers Before Using Them",
    sections: [
      {
        heading: "Think About Filing Cabinet Design",
        paragraphs: [
          "Before starting to file documents, a good office manager thinks about how information will be accessed — do you file by client name or by date? Do you keep contracts and invoices together or separate? The design decision affects how easy (or painful) it is to find and update records later.",
          "MongoDB schema design follows the same thinking — even though MongoDB is schemaless at the database level, a thoughtful design based on your application's access patterns dramatically affects performance and developer experience."
        ]
      },
      {
        heading: "The Golden Rule: Design for Your Access Patterns",
        paragraphs: [
          "In SQL, you normalize data and optimize for storage; in MongoDB, you denormalize and optimize for your application's specific queries. The primary question is: 'How will my application read and write this data?' — not 'What's the most theoretically normalized form?'",
          "If your application always reads user profiles with their recent activity together, store them together. If you always read courses independently from users, keep them separate. Let access patterns drive your schema."
        ]
      },
      {
        heading: "Common Schema Patterns",
        code: `// Pattern 1: Polymorphic — different document shapes in one collection
{ _id: ..., type: "video", url: "...", duration: 120 }
{ _id: ..., type: "quiz", questions: [...], passingScore: 70 }
{ _id: ..., type: "article", content: "...", readTime: 5 }

// Pattern 2: Bucket — group time-series data:
{
  sensorId: "sensor_01",
  date: ISODate("2024-01-15"),
  readings: [  // Store multiple readings per document
    { time: "09:00", temp: 22.5 },
    { time: "09:05", temp: 22.7 }
  ],
  count: 2
}

// Pattern 3: Computed — store pre-computed values:
{
  courseId: "...",
  title: "HTML5",
  enrollmentCount: 1250,  // Pre-computed, updated on each enrollment
  averageProgress: 67.3   // Updated periodically
}`
      },
      {
        heading: "The $schema Validator",
        code: `// MongoDB can enforce schema validation at the database level:
db.createCollection("users", {
  validator: {
    $jsonSchema: {
      bsonType: "object",
      required: ["name", "email", "role"],
      properties: {
        name: { bsonType: "string", minLength: 2 },
        email: { bsonType: "string", pattern: "^\\S+@\\S+\\.\\S+$" },
        role: { bsonType: "string", enum: ["student", "admin"] }
      }
    }
  },
  validationLevel: "strict",
  validationAction: "error"
})`
      },
      {
        heading: "Important Points to Remember",
        points: [
          "Design schemas based on access patterns, not normalized theory — MongoDB rewards denormalization when it matches read patterns.",
          "Pre-compute and cache values when they're expensive to calculate repeatedly.",
          "MongoDB supports JSON Schema validation at the database level — use it for critical data integrity.",
          "Schema design is the most important MongoDB decision — poor design causes performance problems that indexes alone can't fix."
        ]
      }
    ]
  },

  {
    title: "Relationships - Embedding vs Referencing",
    subtitle: "Explained Like Stapling Documents Together vs Cross-Referencing Folders",
    sections: [
      {
        heading: "Think About Two Ways to Relate Documents",
        paragraphs: [
          "When an employee's address is always needed with their profile, you staple the address information directly to their file — it's always there when you pull the file. When an employee's project assignments change frequently and projects are referenced by many employees, you keep project files separately and cross-reference with a project ID on each employee file.",
          "MongoDB's embedding and referencing follow exactly this logic — embed when data is always accessed together and belongs to one parent; reference when data is independent, shared, or too large to embed."
        ]
      },
      {
        heading: "Embedding — Stapling Together",
        code: `// Embed address inside user — always read together:
{
  _id: ObjectId("..."),
  name: "Nishitha",
  email: "nishitha@example.com",
  address: {              // Embedded document
    street: "MG Road",
    city: "Hyderabad",
    state: "Telangana",
    pincode: "500001"
  },
  courses: {             // Embedded progress data (your project does this!)
    html5: { progress: 43, completed: false },
    css3: { progress: 0, completed: false }
  }
}

// To get user AND their address: ONE query, no joins needed
// db.users.findOne({ email: "..." })  — returns everything`
      },
      {
        heading: "Referencing — Cross-Referencing Folders",
        code: `// User document with course references:
{
  _id: ObjectId("user123"),
  name: "Nishitha",
  enrolledCourses: [
    ObjectId("course456"),  // Just the ID, not the full course
    ObjectId("course789")
  ]
}

// Course document (separate collection):
{
  _id: ObjectId("course456"),
  title: "HTML5",
  level: "Beginner",
  topics: 43,
  instructor: ObjectId("instructor101")  // Reference to instructor
}

// To get user WITH course details: TWO queries or $lookup
// Query 1: find user
// Query 2: find courses by IDs
// OR: one aggregation with $lookup`
      },
      {
        heading: "The Decision Framework",
        points: [
          "Embed when: data is always accessed together, data belongs to one parent (never shared), data is small and bounded in size",
          "Reference when: data is accessed independently, data is shared across multiple documents, data can grow without bound (like comments on a post)",
          "Your project embeds course progress in the User document — correct, since progress always belongs to one user and is always read with the user",
          "16MB document size limit — if embedded data could grow very large, reference instead"
        ]
      },
      {
        heading: "Important Points to Remember",
        points: [
          "Embed for data always read together and owned by one parent — fewer queries, better performance.",
          "Reference for shared data, independently accessed data, or data that could grow large.",
          "MongoDB's 16MB document size limit makes unbounded embedded arrays problematic.",
          "Your project's embedded course progress in User is the correct design — always accessed with the user."
        ]
      }
    ]
  },

  {
    title: "One-to-Many Relationships",
    subtitle: "Explained Like a Teacher With Many Students",
    sections: [
      {
        heading: "Think About Teacher-Student Relationships",
        paragraphs: [
          "One teacher teaches many students. When you look up a teacher, do you need to see all students? When you look up a student, do you need to see their teacher's full profile? The answers to these questions determine how to model the relationship in MongoDB.",
          "One-to-many is the most common relationship type — one parent entity related to many child entities. MongoDB offers several ways to model this, each with different trade-offs."
        ]
      },
      {
        heading: "Option 1: Embed Array (One-to-Few)",
        code: `// Best when: parent has a manageable, bounded number of children
// Example: blog post with comments (up to ~100)
{
  _id: ObjectId("post123"),
  title: "Learning MongoDB",
  content: "...",
  comments: [         // Embedded array of comments
    {
      _id: ObjectId("..."),
      author: "Nishitha",
      text: "Great post!",
      createdAt: new Date()
    },
    {
      _id: ObjectId("..."),
      author: "Ravi",
      text: "Very helpful",
      createdAt: new Date()
    }
  ]
}
// Single query to get post + all comments
// But: can't paginate comments, document can grow large`
      },
      {
        heading: "Option 2: Child References (One-to-Many)",
        code: `// Best when: many children, children accessed independently
// Course has many lessons (could be 100+):
{
  _id: ObjectId("course123"),
  title: "HTML5",
  lessonIds: [     // Array of ObjectIds
    ObjectId("lesson1"),
    ObjectId("lesson2"),
    ObjectId("lesson3")
  ]
}

// Lesson documents (separate collection):
{ _id: ObjectId("lesson1"), courseId: ObjectId("course123"), title: "What is HTML?", content: "..." }
{ _id: ObjectId("lesson2"), courseId: ObjectId("course123"), title: "How Web Works", content: "..." }

// Get course with lessons:
const course = await Course.findById(id).populate("lessonIds")`
      },
      {
        heading: "Option 3: Parent Reference (One-to-Many, from child side)",
        code: `// Best when: many children per parent, reading children independently
// Orders belonging to a user:
{ _id: ObjectId("order1"), userId: ObjectId("user123"), total: 500, items: [...] }
{ _id: ObjectId("order2"), userId: ObjectId("user123"), total: 250, items: [...] }

// User document stays clean — no growing array:
{ _id: ObjectId("user123"), name: "Nishitha", email: "..." }

// Get all orders for a user:
await Order.find({ userId: userId }).sort({ createdAt: -1 })

// Get order count for user:
await Order.countDocuments({ userId: userId })`
      },
      {
        heading: "Important Points to Remember",
        points: [
          "Embed array for small, bounded, always-together child collections (comments, tags, addresses).",
          "Store child IDs in parent for medium collections you might populate — use Mongoose populate().",
          "Store parent ID in children for large, independent child collections — query children by parent ID.",
          "Consider: how many children? Do children grow unboundedly? Are children accessed independently?"
        ]
      }
    ]
  },

  {
    title: "Many-to-Many Relationships",
    subtitle: "Explained Like Students Enrolled in Multiple Courses",
    sections: [
      {
        heading: "Think About Course Enrollment",
        paragraphs: [
          "One student enrolls in many courses. One course has many enrolled students. This is a many-to-many relationship — unlike SQL, which uses a junction table (student_courses), MongoDB handles this differently depending on scale and access patterns.",
          "In SQL: create a student_courses table with studentId and courseId columns. In MongoDB: embed arrays of references in either direction, or use a separate enrollment collection."
        ]
      },
      {
        heading: "Option 1: References in Both Documents",
        code: `// Student stores enrolled course IDs:
{
  _id: ObjectId("student1"),
  name: "Nishitha",
  enrolledCourses: [
    ObjectId("course1"),
    ObjectId("course2"),
    ObjectId("course3")
  ]
}

// Course stores enrolled student IDs:
{
  _id: ObjectId("course1"),
  title: "HTML5",
  enrolledStudents: [
    ObjectId("student1"),
    ObjectId("student2")
  ]
}

// Fast either way: student's courses or course's students
// Problem: duplication — must update both documents on enrollment/unenrollment`
      },
      {
        heading: "Option 2: References in One Direction Only",
        code: `// Student stores course IDs (reads are student-centric):
{
  _id: ObjectId("student1"),
  name: "Nishitha",
  enrolledCourses: [ObjectId("course1"), ObjectId("course2")]
}

// Course stores NO student IDs:
{ _id: ObjectId("course1"), title: "HTML5" }

// Get student's courses — fast (direct from student document):
await Student.findById(id).populate("enrolledCourses")

// Get course's students — requires query on student collection:
await Student.find({ enrolledCourses: courseId })`
      },
      {
        heading: "Option 3: Separate Enrollment Collection (SQL-like Junction)",
        code: `// Enrollment documents — like SQL junction table:
{
  _id: ObjectId("..."),
  studentId: ObjectId("student1"),
  courseId: ObjectId("course1"),
  enrolledAt: new Date(),
  progress: 45,
  completedTopics: [0, 1, 2, 3]
}

// Get all courses for a student with their progress:
await Enrollment.find({ studentId }).populate("courseId")

// Get all students in a course with their progress:
await Enrollment.find({ courseId }).populate("studentId")

// Best when: the relationship itself has data (progress, enrollment date)`
      },
      {
        heading: "Important Points to Remember",
        points: [
          "Many-to-many in MongoDB: arrays of references in one direction (common), both directions (duplicate data), or a separate junction collection.",
          "The separate collection approach works best when the relationship itself has data (like enrollment progress).",
          "Your project's course progress is embedded in User — this is a simplified many-to-many where progress lives in the user document.",
          "Choose based on: which direction is read most, does the relationship have its own data?"
        ]
      }
    ]
  },

  {
    title: "MongoDB with Mongoose - Deep Dive",
    subtitle: "Explained Like a Sophisticated Document Management System",
    sections: [
      {
        heading: "Beyond Basic Mongoose",
        paragraphs: [
          "You've been using Mongoose throughout your MERN project — defining schemas, creating models, running queries. This topic goes deeper into Mongoose's more powerful features that make complex data modeling, validation, and query building much more elegant.",
          "Think of basic Mongoose as knowing how to file and retrieve documents. Deep Mongoose is like knowing how to set up automatic cross-referencing, generate computed summaries, and trigger actions when documents change."
        ]
      },
      {
        heading: "populate() — Resolving References",
        code: `// Schema with a reference:
const courseSchema = new mongoose.Schema({
  title: String,
  instructor: { type: mongoose.Schema.Types.ObjectId, ref: "User" }
});

// Basic populate:
const course = await Course.findById(id)
  .populate("instructor", "name email"); // Select only name and email

// Nested populate:
const course = await Course.findById(id)
  .populate({
    path: "instructor",
    select: "name email",
    populate: { path: "department", select: "name" } // Nested!
  });

// Populate array of references:
const user = await User.findById(id)
  .populate("enrolledCourses", "title level topics");`
      },
      {
        heading: "Query Chaining and Query Helpers",
        code: `// Mongoose queries are lazy — they don't execute until awaited:
const query = User.find({ role: "student" }); // Not executed yet!

// Chain conditions:
query.where("age").gte(18);
query.select("name email");
query.sort("-createdAt");
query.limit(10);

const results = await query; // Executes NOW

// Custom query helpers on schema:
userSchema.query.active = function() {
  return this.where({ isActive: true });
};

// Usage:
const activeStudents = await User.find({ role: "student" }).active();`
      },
      {
        heading: "Static Methods vs Instance Methods",
        code: `// Static method — called on the Model:
userSchema.statics.findByEmail = function(email) {
  return this.findOne({ email: email.toLowerCase() });
};

// Usage:
const user = await User.findByEmail("NISHITHA@example.com");

// Instance method — called on a document:
userSchema.methods.getFullName = function() {
  return \`\${this.firstName} \${this.lastName}\`;
};
userSchema.methods.generateAuthToken = function() {
  return jwt.sign({ id: this._id }, process.env.JWT_SECRET, { expiresIn: "1h" });
};

// Usage:
const user = await User.findById(id);
const token = user.generateAuthToken(); // Instance method
const name = user.getFullName();`
      },
      {
        heading: "Important Points to Remember",
        points: [
          "populate() resolves ObjectId references — always specify which fields to select for performance.",
          "Mongoose queries are lazy — they only execute when awaited or .exec() is called.",
          "Static methods belong to the Model class; instance methods belong to individual documents.",
          "Custom query helpers enable reusable query conditions — active(), verified(), recent()."
        ]
      }
    ]
  },

  {
    title: "Mongoose Virtuals & Methods",
    subtitle: "Explained Like Computed Columns and Smart Folder Tabs",
    sections: [
      {
        heading: "Virtuals — Computed Fields That Don't Store",
        paragraphs: [
          "Imagine a filing folder that has a small tab showing the person's age, automatically computed from their birth date every time you look at the folder — not written anywhere inside the folder, just calculated on the fly.",
          "Mongoose virtuals are exactly this — computed properties derived from stored data, available on document instances, but never saved to MongoDB. They're generated fresh each time the document is accessed."
        ]
      },
      {
        heading: "Creating Virtuals",
        code: `const userSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  birthDate: Date,
  courses: { html5: { progress: Number }, css3: { progress: Number } }
});

// Virtual: full name (combines two stored fields):
userSchema.virtual("fullName").get(function() {
  return \`\${this.firstName} \${this.lastName}\`;
});

// Virtual with setter:
userSchema.virtual("fullName")
  .get(function() { return \`\${this.firstName} \${this.lastName}\`; })
  .set(function(name) {
    const parts = name.split(" ");
    this.firstName = parts[0];
    this.lastName = parts[1];
  });

// Virtual: age from birthDate:
userSchema.virtual("age").get(function() {
  return Math.floor((Date.now() - this.birthDate) / (365.25 * 24 * 60 * 60 * 1000));
});

// Usage:
const user = await User.findById(id);
console.log(user.fullName); // "Nishitha Rao"
console.log(user.age);      // 22`
      },
      {
        heading: "Including Virtuals in JSON Output",
        code: `// By default, virtuals are NOT included in toJSON() or res.json():
const schema = new mongoose.Schema({...}, {
  toJSON: { virtuals: true },   // Include virtuals in JSON output
  toObject: { virtuals: true }  // Include in plain objects too
});

// Now res.json(user) includes the virtual fields`
      },
      {
        heading: "Virtual Populate — Count Without Embedding",
        code: `// Count related documents without storing an array:
userSchema.virtual("courseCount", {
  ref: "Enrollment",           // Which model to look in
  localField: "_id",           // User's field
  foreignField: "userId",      // Enrollment's field matching the user
  count: true                  // Return count instead of documents
});

// Use it:
const user = await User.findById(id).populate("courseCount");
console.log(user.courseCount); // 5 (number of enrollments)`
      },
      {
        heading: "Important Points to Remember",
        points: [
          "Virtuals are computed properties — not stored in MongoDB, calculated fresh on each access.",
          "Enable { toJSON: { virtuals: true } } to include virtuals in API responses.",
          "Virtual populate counts or fetches related documents without embedding — clean and flexible.",
          "Instance methods contain custom behavior; virtuals contain computed data — both live on document instances."
        ]
      }
    ]
  },

  {
    title: "Mongoose Middleware - Pre & Post Hooks",
    subtitle: "Explained Like Automatic Procedures That Trigger Before and After Filing",
    sections: [
      {
        heading: "Think About Automatic Office Procedures",
        paragraphs: [
          "When a new employee file is added, an automatic procedure runs before it's filed: stamp it with today's date, assign a badge number, and check it's complete. After it's filed, another procedure runs: notify HR, update the headcount report, send a welcome email. These procedures happen automatically without anyone remembering to do them manually.",
          "Mongoose middleware (hooks) work exactly this way — functions that automatically run before or after specific operations (save, find, update, delete), triggered by the operation itself rather than manual calls."
        ]
      },
      {
        heading: "Pre Hooks — Run Before the Operation",
        code: `// Hash password before saving:
userSchema.pre("save", async function(next) {
  // 'this' refers to the document being saved
  if (!this.isModified("password")) return next(); // Only hash if changed

  this.password = await bcrypt.hash(this.password, 10);
  next(); // Must call next() to proceed with the save
});

// Set updatedAt before every update:
userSchema.pre(["updateOne", "findOneAndUpdate"], function(next) {
  this.set({ updatedAt: new Date() });
  next();
});

// Validate before save:
courseSchema.pre("save", function(next) {
  if (this.topics < 1) {
    return next(new Error("Course must have at least 1 topic"));
  }
  next();
});`
      },
      {
        heading: "Post Hooks — Run After the Operation",
        code: `// After saving a new user, create their profile:
userSchema.post("save", async function(doc) {
  // doc is the saved document
  if (doc.isNew) {  // Only for new documents
    await UserProfile.create({ userId: doc._id });
    console.log(\`Profile created for \${doc.email}\`);
  }
});

// Log after deletion:
userSchema.post("findOneAndDelete", async function(doc) {
  if (doc) {
    console.log(\`User deleted: \${doc.email}\`);
    // Could: send farewell email, log to audit trail, etc.
  }
});

// Error handling in post hooks:
userSchema.post("save", function(error, doc, next) {
  if (error.code === 11000) { // Duplicate key error
    next(new Error("Email already registered"));
  } else {
    next(error);
  }
});`
      },
      {
        heading: "Query Middleware vs Document Middleware",
        code: `// Document middleware — 'this' is the document:
// Operations: save, validate, remove, updateOne (on document instance)
userSchema.pre("save", function() {
  console.log(this.email); // Access document fields
});

// Query middleware — 'this' is the query object:
// Operations: find, findOne, findOneAndUpdate, deleteOne, deleteMany, etc.
userSchema.pre("find", function() {
  this.select("-password"); // Modify the query — exclude password from all finds
  this.where({ isDeleted: false }); // Auto-filter deleted documents
});`
      },
      {
        heading: "Important Points to Remember",
        points: [
          "Pre hooks run before the operation — use for transformation, validation, or preparation.",
          "Post hooks run after — use for side effects like notifications, logging, creating related records.",
          "Always call next() in pre hooks — forgetting it hangs the operation indefinitely.",
          "Query middleware's 'this' is the query object; document middleware's 'this' is the document."
        ]
      }
    ]
  },

  {
    title: "Transactions in MongoDB",
    subtitle: "Explained Like an All-or-Nothing Bank Transfer",
    sections: [
      {
        heading: "Think About a Bank Transfer",
        paragraphs: [
          "Transferring money between accounts requires two operations: debit Account A and credit Account B. If the debit succeeds but the credit fails (due to a crash, network error, or any reason), money disappears — it left Account A but never reached Account B. A transaction ensures both operations succeed or both fail together, with no partial states.",
          "MongoDB multi-document transactions provide this same guarantee — a group of operations that either all succeed together (committed) or all fail together (rolled back), leaving the database in a consistent state."
        ]
      },
      {
        heading: "When Transactions Are Needed",
        paragraphs: [
          "MongoDB transactions require a replica set or sharded cluster (Atlas M0 free tier supports them). They're needed when: updating multiple documents where partial success would leave inconsistent state, transferring data between collections, and operations that must be atomic across documents.",
          "For your MERN platform: creating an enrollment record AND incrementing a course's enrollment count must both succeed or both fail — a transaction ensures this."
        ]
      },
      {
        heading: "Using Transactions With Mongoose",
        code: `const mongoose = require("mongoose");

async function enrollStudent(userId, courseId) {
  const session = await mongoose.startSession();
  session.startTransaction();

  try {
    // Both operations use the same session:
    await Enrollment.create([{
      userId,
      courseId,
      enrolledAt: new Date()
    }], { session });

    await Course.findByIdAndUpdate(
      courseId,
      { $inc: { enrollmentCount: 1 } },
      { session }
    );

    await session.commitTransaction(); // Both succeed — commit!
    console.log("Enrollment successful");

  } catch (error) {
    await session.abortTransaction(); // Something failed — rollback!
    console.log("Enrollment failed, rolled back");
    throw error;
  } finally {
    session.endSession(); // Always end the session
  }
}`
      },
      {
        heading: "Transaction Considerations",
        points: [
          "Transactions have overhead — they're slower than non-transactional operations. Use only when genuinely needed.",
          "Transactions timeout after 60 seconds by default — keep transaction logic fast and simple.",
          "If possible, design your schema to avoid transactions (embed data that changes together).",
          "Atlas M10+ tier supports transactions; M0 free tier has limited replica set support — check your tier."
        ]
      },
      {
        heading: "Important Points to Remember",
        points: [
          "Transactions ensure multiple operations either all succeed or all fail — no partial states.",
          "Pass { session } to every operation within a transaction — without it, they're not part of the transaction.",
          "Always call session.endSession() in finally block — even if transaction fails.",
          "Design schemas to minimize transaction needs — embedding related data avoids many cross-document operations."
        ]
      }
    ]
  },

  {
    title: "MongoDB Security",
    subtitle: "Explained Like a Multi-Layer Office Security System",
    sections: [
      {
        heading: "Think About Office Building Security",
        paragraphs: [
          "A secure office has multiple security layers — access cards to enter the building, role-based access within floors (only HR can access personnel files), network restrictions (visitors can only access the lobby WiFi), audit logs tracking who accessed what, and encrypted storage for sensitive files.",
          "MongoDB security follows these same layers — authentication, authorization, network security, encryption, and auditing."
        ]
      },
      {
        heading: "Authentication — Who Are You?",
        code: `// MongoDB supports multiple authentication mechanisms:
// SCRAM (username/password — default), x.509 certificates, LDAP, Kerberos

// Atlas handles authentication via:
// 1. Database users with username/password
// 2. X.509 certificates for application authentication
// 3. AWS IAM for cloud deployments

// Always use strong, unique passwords for database users
// Never use your Atlas username/password directly in app code
// Create specific users with minimal required permissions`
      },
      {
        heading: "Authorization — What Can You Do?",
        code: `// MongoDB built-in roles:
// Read roles: read, readAnyDatabase
// Write roles: readWrite, readWriteAnyDatabase
// Admin roles: dbAdmin, userAdmin, clusterAdmin
// Superuser: root (avoid for application users!)

// Atlas: create a database user with readWrite on your specific database only:
// Database Access → Add Database User:
// Role: readWrite on database: "edunexa"
// NOT: Atlas Admin (too much access)
// NOT: readWriteAnyDatabase (access to all databases)

// In Node.js — connect with limited permission user:
mongoose.connect("mongodb+srv://appUser:password@cluster.mongodb.net/edunexa")
// appUser has readWrite on 'edunexa' database only`
      },
      {
        heading: "Network Security",
        code: `// Atlas Network Access — restrict who can connect:
// Allow only your server's IP address in production
// For development: add your current IP
// Never leave 0.0.0.0/0 (allow all) in production

// Encryption in transit (TLS/SSL):
// Atlas enforces TLS by default — all connections encrypted
// Local MongoDB: enable with --tlsMode requireTLS

// Encryption at rest:
// Atlas M10+ encrypts data at rest automatically
// Local: enable with WiredTiger encryption (enterprise feature)`
      },
      {
        heading: "Important Points to Remember",
        points: [
          "Create dedicated database users with minimum required permissions — never use admin credentials in your app.",
          "Restrict Network Access to known IP addresses in production — never allow 0.0.0.0/0 permanently.",
          "Atlas enforces TLS automatically — all data in transit is encrypted.",
          "Store MongoDB credentials in .env files — never commit them to any repository."
        ]
      }
    ]
  },

  {
    title: "Backup & Restore",
    subtitle: "Explained Like Insurance and Recovery Plans for Important Files",
    sections: [
      {
        heading: "Think About Document Insurance",
        paragraphs: [
          "Important documents get photocopied and stored in a separate, secure location — so if the original is lost or damaged, the copy allows full recovery. Regular backups mean you lose at most the changes since the last backup, not everything.",
          "MongoDB backup strategies work the same way — creating copies of your data at regular intervals, stored separately, so you can recover from data loss, accidental deletion, or corruption."
        ]
      },
      {
        heading: "Atlas Automated Backups",
        points: [
          "M0 free tier: daily snapshots (retained for a short period)",
          "M10+ paid tiers: continuous cloud backup with point-in-time recovery",
          "Atlas backup UI: restore to any snapshot with a few clicks — no command-line needed",
          "Best practice: enable backups immediately for any production database"
        ]
      },
      {
        heading: "mongodump & mongorestore",
        code: `# Export entire database:
mongodump --uri="mongodb+srv://user:pass@cluster.mongodb.net/edunexa" --out=./backup

# Export specific collection:
mongodump --uri="..." --collection=users --out=./backup

# Creates: backup/edunexa/users.bson and users.metadata.json

# Restore entire backup:
mongorestore --uri="mongodb+srv://..." ./backup

# Restore specific collection:
mongorestore --uri="..." --collection=users ./backup/edunexa/users.bson`
      },
      {
        heading: "mongoexport & mongoimport — JSON/CSV Format",
        code: `# Export to JSON (human-readable, good for data migration):
mongoexport --uri="..." --collection=users --out=users.json

# Export to CSV (for spreadsheets):
mongoexport --uri="..." --collection=courses --type=csv --fields=title,level,topics --out=courses.csv

# Import from JSON:
mongoimport --uri="..." --collection=users --file=users.json

# Import from CSV:
mongoimport --uri="..." --collection=courses --type=csv --headerline --file=courses.csv`
      },
      {
        heading: "Important Points to Remember",
        points: [
          "Always have a backup strategy before deploying to production — data loss is catastrophic without backups.",
          "Atlas automated backups are the easiest approach — enable them for any production database.",
          "mongodump creates binary BSON backups (faster, complete); mongoexport creates JSON (human-readable, portable).",
          "Test your restore process regularly — a backup you've never tested may not actually work."
        ]
      }
    ]
  },

  {
    title: "Performance & Query Optimization",
    subtitle: "Explained Like Tuning an Efficient Filing and Retrieval System",
    sections: [
      {
        heading: "Think About an Efficient File Retrieval System",
        paragraphs: [
          "A poorly organized filing system requires searching through every drawer for a document. An optimized system has a card index (like a database index), documents filed in a consistent order, and frequently needed documents kept near the top. The difference between seconds and hours for finding the same document.",
          "MongoDB query optimization follows the same principles — indexes for fast lookups, efficient query patterns, and profiling to identify bottlenecks before they affect users."
        ]
      },
      {
        heading: "The MongoDB Query Profiler",
        code: `// Enable profiling (logs slow queries):
db.setProfilingLevel(1, { slowms: 100 }) // Log queries > 100ms

// Or level 2: log ALL queries (development only!):
db.setProfilingLevel(2)

// View profiled queries:
db.system.profile.find().sort({ ts: -1 }).limit(10)

// Key fields in profile output:
// millis — how long the query took
// nscanned — documents examined
// nreturned — documents returned
// planSummary — IXSCAN (index used) or COLLSCAN (full scan)

// Good: nscanned ≈ nreturned
// Bad: nscanned >> nreturned (scanning many, returning few — needs index)`
      },
      {
        heading: "Query Optimization Techniques",
        code: `// 1. Use indexes (most impactful — covered in Indexes topic)
// 2. Use projection — only fetch needed fields:
await User.find({ role: "student" }).select("name email").lean()

// 3. Avoid negation operators ($ne, $nin, $not) — can't use indexes efficiently:
// Bad:
await Course.find({ level: { $ne: "Advanced" } })
// Better:
await Course.find({ level: { $in: ["Beginner", "Intermediate"] } })

// 4. Use .lean() for read-only queries:
const users = await User.find().lean() // 3-5x faster than full Mongoose docs

// 5. Avoid regex anchoring issues:
// Bad (can't use index): db.users.find({ email: { $regex: "gmail" } })
// OK (anchored start, can use index): db.users.find({ email: { $regex: "^nishitha" } })`
      },
      {
        heading: "Connection Pooling",
        code: `// Mongoose manages a connection pool automatically
// Default pool size is 5 — adjust for high-traffic apps:
mongoose.connect(MONGO_URI, {
  maxPoolSize: 10,      // Max concurrent connections
  minPoolSize: 2,       // Always keep at least 2 connections open
  serverSelectionTimeoutMS: 5000, // Give up if can't connect in 5s
  socketTimeoutMS: 45000          // Close idle connections after 45s
});`
      },
      {
        heading: "Important Points to Remember",
        points: [
          "Enable profiling to identify slow queries — optimize based on data, not assumptions.",
          ".lean() is a simple, high-impact optimization for read-only queries — use it consistently.",
          "Indexes are the single biggest performance lever — identify frequently queried fields and index them.",
          "Projection (selecting only needed fields) reduces data transfer and speeds up queries."
        ]
      }
    ]
  },

  {
    title: "MongoDB Best Practices",
    subtitle: "Explained Like Professional Filing System Standards",
    sections: [
      {
        heading: "Think About Professional Records Management",
        paragraphs: [
          "A professional records management system has standards developed from years of experience: consistent naming, regular audits, clear retention policies, organized hierarchies. These standards exist because poor practices accumulate into serious problems — lost records, security breaches, retrieval failures.",
          "MongoDB best practices are these accumulated standards — patterns and anti-patterns discovered through real production experience."
        ]
      },
      {
        heading: "Schema Best Practices",
        points: [
          "Use consistent naming: camelCase for field names (firstName, createdAt), plural for collections (users, courses)",
          "Always add { timestamps: true } to schemas — automatic createdAt and updatedAt with zero effort",
          "Add indexes to fields you query frequently — email, role, userId — add at schema definition time",
          "Validate at the application layer (Mongoose validators) AND consider database-level JSON Schema validation",
          "Avoid growing unbounded arrays in documents — use a separate collection if array could grow large"
        ]
      },
      {
        heading: "Query Best Practices",
        code: `// ✅ Use lean() for read-only operations:
const users = await User.find().lean();

// ✅ Select only needed fields:
const user = await User.findById(id).select("name email role").lean();

// ✅ Use countDocuments() not find().length:
const count = await User.countDocuments({ role: "student" });
// Not: (await User.find({ role: "student" })).length — loads all documents!

// ✅ Index your sort fields:
await User.find().sort({ createdAt: -1 }); // Needs index on createdAt

// ✅ Use $text search not regex for text search:
await Course.find({ $text: { $search: "javascript" } });
// Not: await Course.find({ title: /javascript/i }) — no index support`
      },
      {
        heading: "Production Checklist",
        points: [
          "✅ Backups enabled (Atlas automated backups on M10+ for production)",
          "✅ Network access restricted to known IPs only",
          "✅ Dedicated database user with minimum permissions (readWrite on app database only)",
          "✅ Credentials in environment variables, never in code",
          "✅ Indexes created on all frequently queried fields",
          "✅ Profiling enabled in staging to catch slow queries before production",
          "✅ Connection pooling configured appropriately for expected load",
          "✅ Mongoose validation on all required/constrained fields"
        ]
      },
      {
        heading: "Important Points to Remember",
        points: [
          "Add timestamps: true to all schemas — automatic createdAt/updatedAt with zero maintenance.",
          "Design for your access patterns first — schema design decisions made early are expensive to change later.",
          "Always use lean() for read-only queries and select() for projection — these two alone significantly improve performance.",
          "Security and backups are not optional for production — enable both before your first real user signs up."
        ]
      }
    ]
  }

];