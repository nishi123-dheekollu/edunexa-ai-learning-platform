export const cssTopics = [
  "What is CSS?",
  "Three Ways to Add CSS",
  "CSS Syntax",
  "Comments in CSS",
  "Element Selector",
  "Class Selector",
  "ID Selector",
  "Grouping Selectors",
  "Universal Selector",
  "Combinators",
  "Attribute Selectors",
  "Pseudo-classes",
  "Pseudo-elements",
  "Colors",
  "Background Properties",
  "Typography Basics",
  "Text Properties",
  "Google Fonts",
  "Box Model Intro",
  "Width & Height",
  "Padding",
  "Margin",
  "Border & Border-radius",
  "Box-sizing",
  "Display Property",
  "Position Property",
  "Z-index",
  "Overflow",
  "Flexbox Intro",
  "Flex Container Properties",
  "Flex Item Properties",
  "Common Flexbox Layouts",
  "Grid Intro",
  "Grid Template Columns & Rows",
  "Grid Gap & Areas",
  "Units in CSS",
  "Media Queries",
  "Responsive Design Principles",
  "Transitions",
  "Transform",
  "Animations",
  "Box-shadow & Text-shadow"
];

export const cssLessons = [
  {
    title: "What is CSS?",
    subtitle: "Explained Like Decorating an Empty House",

    sections: [

      {
        heading: "Remember the House Analogy?",

        paragraphs: [
          "Back in 'What is HTML?', we compared HTML to the walls and rooms of a house — the structure. Now imagine that house fully built, but completely undecorated: bare grey walls, no paint, no curtains, furniture just dumped wherever. It's structurally complete, but nobody would want to live in it like this.",

          "CSS is the decoration — the paint, the curtains, the furniture arrangement. It takes the same plain structure and makes it look good. CSS stands for Cascading Style Sheets, but just remember: CSS = the decorator."
        ]
      },

      {
        heading: "Seeing the Difference",

        paragraphs: [
          "Without CSS, every webpage would look like a plain government form — black text, default font, no colors, everything left-aligned, top to bottom. With CSS, that same content can have colors, spacing, custom fonts, neat alignment, even animations."
        ]
      },

      {
        heading: "What Can CSS Actually Control?",

        points: [
          "Colors — text color, background color",
          "Spacing — margin (outside space), padding (inside space)",
          "Fonts — font family, size, weight (bold/thin)",
          "Layout — how elements are arranged on the page (side by side, centered, etc.)",
          "Effects — hover effects, smooth transitions, animations"
        ]
      },

      {
        heading: "A Tiny Preview",

        paragraphs: [
          "We'll learn exactly how to write this properly in the next two topics, but here's a sneak peek — this CSS makes all <h1> headings dark green and centered."
        ],

        code: `h1 {
  color: darkgreen;
  text-align: center;
}`
      },

      {
        heading: "Important Points to Remember",

        points: [
          "CSS stands for Cascading Style Sheets — it styles/decorates what HTML structures.",
          "Without CSS, webpages would look plain and unstyled, like a basic text document.",
          "CSS controls colors, spacing, fonts, layout, and effects.",
          "HTML and CSS always work together — one builds, the other beautifies."
        ]
      }

    ]
  },

  {
    title: "Three Ways to Add CSS",
    subtitle: "Explained Like Three Ways to Give Instructions",

    sections: [

      {
        heading: "Think About Giving Instructions in a Classroom",

        paragraphs: [
          "A teacher can give instructions in three different ways: writing a tiny note on one specific student's desk (just for them), writing instructions on the classroom's whiteboard (for everyone in that room), or printing a school-wide rulebook that every classroom refers to (shared across the whole school).",

          "CSS can be added to a webpage in these exact same three ways — inline, internal, and external."
        ]
      },

      {
        heading: "Inline CSS — The Tiny Desk Note",

        paragraphs: [
          "This applies styling directly on one specific element, using the style attribute. It only affects that single element, nowhere else."
        ],

        code: `<h1 style="color: blue;">Hello!</h1>`,

        paragraphs: [
          "Just like a note stuck on one student's desk doesn't affect anyone else, this color:blue only applies to this one <h1>, not any other heading on the page."
        ]
      },

      {
        heading: "Internal CSS — The Whiteboard for This Room",

        paragraphs: [
          "This applies styling to an entire page, written inside a <style> tag in the <head> section. It affects every matching element on that one page, like a whiteboard instruction affecting everyone in that classroom."
        ],

        code: `<head>
  <style>
    h1 {
      color: blue;
    }
  </style>
</head>`
      },

      {
        heading: "External CSS — The School-Wide Rulebook",

        paragraphs: [
          "This keeps all your CSS in a completely separate .css file, linked to your HTML page. Multiple HTML pages can all link to this same one file — like every classroom in the school following the same shared rulebook, instead of each room writing its own instructions separately."
        ],

        code: `<head>
  <link rel="stylesheet" href="style.css">
</head>`,

        points: [
          "Create a file named style.css",
          "Write your CSS rules inside it (just the rules, no <style> tags needed)",
          "Link it in every HTML page that should use these styles"
        ]
      },

      {
        heading: "Which One Should You Actually Use?",

        paragraphs: [
          "External CSS is the standard, recommended approach for real projects — one shared rulebook is far easier to maintain than scattered notes everywhere. Internal CSS is fine for small, single-page experiments. Inline CSS should be used rarely, only for very specific, one-off cases."
        ]
      },

      {
        heading: "Important Points to Remember",

        points: [
          "Inline CSS styles one single element directly, using the style attribute.",
          "Internal CSS styles one entire page, written inside <style> in the <head>.",
          "External CSS lives in a separate .css file, reusable across multiple pages.",
          "External CSS is the preferred, professional approach for real projects."
        ]
      }

    ]
  },

  {
    title: "CSS Syntax",
    subtitle: "Explained Like Addressing a Letter Properly",

    sections: [

      {
        heading: "Think About Addressing a Letter",

        paragraphs: [
          "A properly addressed letter has three parts: who it's for (the recipient's name), what you're telling them about (the subject), and the actual message (the details). Miss any one part, and the letter doesn't make sense or doesn't even reach the right person.",

          "Every single CSS rule follows this exact same three-part pattern."
        ]
      },

      {
        heading: "The Three Parts of a CSS Rule",

        code: `h1 {
  color: blue;
}`,

        points: [
          "Selector (h1) — who this rule is addressed to, which element(s) it targets",
          "Property (color) — what aspect of that element you're talking about",
          "Value (blue) — the actual instruction, what that property should become"
        ]
      },

      {
        heading: "Breaking It Down Piece by Piece",

        points: [
          "Curly braces { } — wrap around all the instructions for one selector, like an envelope holding the message",
          "Colon (:) — separates the property from its value (color : blue)",
          "Semicolon (;) — ends each instruction, like a full stop at the end of a sentence"
        ]
      },

      {
        heading: "Writing Multiple Instructions for the Same Element",

        paragraphs: [
          "Just like one letter can mention several things to the same person, one CSS rule can have several property-value pairs, each ending with its own semicolon."
        ],

        code: `h1 {
  color: blue;
  font-size: 32px;
  text-align: center;
}`
      },

      {
        heading: "A Common Beginner Mistake",

        paragraphs: [
          "Forgetting the semicolon after a value is like forgetting a full stop mid-sentence — the next instruction might accidentally merge with the previous one, and the browser can misread your intent. Always end each property-value pair with a semicolon, even the last one in a rule, as a safe habit."
        ]
      },

      {
        heading: "Important Points to Remember",

        points: [
          "Every CSS rule has a selector, then curly braces containing property:value pairs.",
          "Colon (:) separates property from value; semicolon (;) ends each pair.",
          "One selector can have multiple property-value pairs inside the same braces.",
          "Always end each pair with a semicolon, even the last one, as good practice."
        ]
      }

    ]
  },

  {
    title: "Comments in CSS",
    subtitle: "Explained Like Sticky Notes for Yourself",

    sections: [

      {
        heading: "Remember Comments in HTML?",

        paragraphs: [
          "Back in 'Comments in HTML', we compared comments to sticky notes — reminders left for yourself or teammates, completely invisible to actual website visitors. CSS comments work on the exact same idea, just with a different symbol."
        ]
      },

      {
        heading: "How to Write a CSS Comment",

        code: `/* This is a comment, the browser ignores this */

h1 {
  color: blue; /* This makes headings blue */
}`,

        paragraphs: [
          "CSS comments start with /* and end with */ — different from HTML's <!-- --> style, but the exact same purpose: notes that never appear on the actual webpage."
        ]
      },

      {
        heading: "Why Bother Writing Comments in CSS?",

        points: [
          "To explain why a particular style choice was made, for your future self",
          "To organize a long stylesheet into clear sections, like 'Header Styles', 'Button Styles'",
          "To temporarily disable a style rule for testing, without deleting it",
          "To leave notes for teammates working on the same stylesheet"
        ]
      },

      {
        heading: "Example: Organizing a Stylesheet with Comments",

        code: `/* ===== Header Styles ===== */
header {
  background-color: darkgreen;
}

/* ===== Button Styles ===== */
button {
  padding: 10px;
}`
      },

      {
        heading: "Important Points to Remember",

        points: [
          "CSS comments use /* and */, different from HTML's <!-- -->.",
          "Comments are completely invisible to website visitors.",
          "Great for explaining decisions, organizing sections, or temporarily disabling rules.",
          "A small habit that makes stylesheets much easier to navigate later."
        ]
      }

    ]
  },

  {
    title: "Element Selector",
    subtitle: "Explained Like Announcing 'Everyone Wearing This Uniform'",

    sections: [

      {
        heading: "Think About a School Announcement",

        paragraphs: [
          "Imagine a teacher announcing: 'Everyone wearing the blue PE uniform, please line up.' This instruction doesn't single out any one student by name — it applies to anyone matching that description, however many of them there are.",

          "An element selector in CSS works exactly this way — it targets every single element of a certain tag type on the page, all at once."
        ]
      },

      {
        heading: "The Element Selector",

        code: `p {
  color: gray;
}`,

        paragraphs: [
          "This single rule makes every <p> paragraph on the entire page gray — whether there's one paragraph or fifty, all of them follow this same instruction, just like every student in that PE uniform follows the same announcement."
        ]
      },

      {
        heading: "Targeting Different Element Types",

        code: `h1 {
  color: darkgreen;
}

p {
  color: gray;
}

a {
  color: blue;
}`,

        paragraphs: [
          "Each selector here targets a different 'uniform group' — all <h1>s get one style, all <p>s get another, all <a> links get a third. They don't interfere with each other."
        ]
      },

      {
        heading: "The Limitation of Element Selectors",

        paragraphs: [
          "What if you want only some paragraphs styled differently, not every single one? An element selector can't do that — it's an all-or-nothing announcement, like the teacher's instruction applying to every student in that uniform, with no way to exclude just one of them. We'll solve this exact problem in the next two topics, with class and ID selectors."
        ]
      },

      {
        heading: "Important Points to Remember",

        points: [
          "An element selector targets every instance of that tag on the page.",
          "Write it by just naming the tag, with no extra symbol (p, h1, a, etc.).",
          "It applies the same style to all matching elements — no exceptions possible.",
          "Use it for styles that should genuinely apply page-wide, like a default paragraph color."
        ]
      }

    ]
  },

  {
    title: "Class Selector",
    subtitle: "Explained Like a Group Badge or Sticker",

    sections: [

      {
        heading: "Think About Event Badges",

        paragraphs: [
          "At a college fest, organizers might wear a yellow badge, while volunteers wear a green badge — regardless of which department or year they belong to. The badge groups people by their role at the event, not by who they already are.",

          "A class in CSS works exactly like this badge — you can 'stick' the same class name onto any elements you choose, regardless of their tag type, and style them all together as one group."
        ]
      },

      {
        heading: "Giving an Element a Class",

        code: `<p class="highlight">Important note here.</p>
<h2 class="highlight">Important heading here.</h2>`,

        paragraphs: [
          "Notice both a <p> and an <h2> got the same class=\"highlight\" — even though they're different tag types, they're now both wearing the same 'badge', ready to be styled together."
        ]
      },

      {
        heading: "Styling by Class — Using the Dot (.)",

        code: `.highlight {
  background-color: yellow;
  font-weight: bold;
}`,

        paragraphs: [
          "Notice the dot (.) before highlight in the CSS — this dot specifically means 'target elements wearing this badge', as opposed to targeting a tag name directly."
        ]
      },

      {
        heading: "One Element, Multiple Classes",

        paragraphs: [
          "Just like someone could wear both an 'organizer' badge and a 'speaker' badge at the same event, one HTML element can have multiple classes, separated by spaces."
        ],

        code: `<p class="highlight large-text">Very important note!</p>`
      },

      {
        heading: "Class vs Element Selector — Quick Comparison",

        points: [
          "Element selector (p) = announcing to everyone wearing one specific uniform (one tag type)",
          "Class selector (.highlight) = a badge that can be given to any elements you specifically choose",
          "Classes give you precise control, unlike element selectors which affect everything of that tag"
        ]
      },

      {
        heading: "Important Points to Remember",

        points: [
          "Add a class to HTML using class=\"name\"; target it in CSS using a dot, like .name.",
          "The same class can be reused on multiple, even different, types of elements.",
          "One element can have multiple classes, separated by spaces.",
          "Classes give you much more precise, flexible control than element selectors."
        ]
      }

    ]
  },

  {
    title: "ID Selector",
    subtitle: "Explained Like a Unique Roll Number",

    sections: [

      {
        heading: "Think About a Roll Number",

        paragraphs: [
          "In a classroom, many students might wear the same uniform (element selector) or the same event badge (class selector), but every single student has one unique roll number — no two students share it.",

          "An id in CSS works exactly like that roll number — it must be completely unique on the page, identifying exactly one specific element, and nothing else."
        ]
      },

      {
        heading: "Giving an Element an ID",

        code: `<div id="main-banner">Welcome to my site!</div>`,

        paragraphs: [
          "Just like a roll number, this id=\"main-banner\" should exist exactly once on this entire page — no other element should reuse this same id."
        ]
      },

      {
        heading: "Styling by ID — Using the Hash (#)",

        code: `#main-banner {
  background-color: darkgreen;
  color: white;
  padding: 20px;
}`,

        paragraphs: [
          "The hash (#) symbol before main-banner specifically means 'target the one element with this exact roll number', unlike the dot used for classes."
        ]
      },

      {
        heading: "ID vs Class — When to Use Which?",

        points: [
          "id = roll number, completely unique, used exactly once per page",
          "class = event badge, reusable on as many elements as you like",
          "If you find yourself wanting to reuse the same id more than once, you actually need a class instead"
        ]
      },

      {
        heading: "A Quick Recap of All Three Selectors So Far",

        points: [
          "Element selector (p) — targets every element of that tag, like a uniform-wide announcement",
          "Class selector (.highlight) — targets a chosen group, like a reusable badge",
          "ID selector (#main-banner) — targets exactly one specific element, like a unique roll number"
        ]
      },

      {
        heading: "Important Points to Remember",

        points: [
          "Add an id to HTML using id=\"name\"; target it in CSS using a hash, like #name.",
          "An id must be unique — never reuse the same id on more than one element.",
          "Use classes for groups of elements; reserve ids for one-off, unique elements.",
          "ids are also commonly used by JavaScript to target a specific element precisely."
        ]
      }

    ]
  },

  {
    title: "Grouping Selectors",
    subtitle: "Explained Like Calling Out Multiple Roll Numbers Together",

    sections: [

      {
        heading: "Think About a Teacher Calling Multiple Roll Numbers",

        paragraphs: [
          "Instead of separately announcing 'Roll number 5, stand up', then 'Roll number 12, stand up', then 'Roll number 20, stand up' — a teacher could just say once: 'Roll numbers 5, 12 and 20 — please stand up.' Same instruction, same result, but said only once instead of three times.",

          "Grouping selectors in CSS let you do exactly this — give the same style to several different selectors at once, instead of repeating yourself."
        ]
      },

      {
        heading: "Without Grouping — Repetitive",

        code: `h1 {
  color: darkgreen;
}

h2 {
  color: darkgreen;
}

h3 {
  color: darkgreen;
}`,

        paragraphs: [
          "Same color, written three separate times — that's three separate 'announcements' for the exact same instruction."
        ]
      },

      {
        heading: "With Grouping — One Instruction, Comma-Separated",

        code: `h1, h2, h3 {
  color: darkgreen;
}`,

        paragraphs: [
          "Just like calling out '5, 12 and 20' in one breath, separating selectors with commas lets you write the shared style only once, for all three at the same time."
        ]
      },

      {
        heading: "You Can Group Any Type of Selector",

        paragraphs: [
          "This works with any combination — element selectors, classes, ids — all mixed together, as long as they're separated by commas."
        ],

        code: `h1, .highlight, #main-banner {
  font-weight: bold;
}`
      },

      {
        heading: "Important Points to Remember",

        points: [
          "Separate multiple selectors with commas to apply the same style to all of them.",
          "This avoids repeating identical CSS rules multiple times.",
          "You can mix element, class, and id selectors together in one group.",
          "Each selector in the group still works exactly as it normally would on its own."
        ]
      }

    ]
  },

  {
    title: "Universal Selector",
    subtitle: "Explained Like a Whole-School Announcement",

    sections: [

      {
        heading: "Think About a Whole-School Announcement",

        paragraphs: [
          "Some announcements aren't meant for one uniform group or one badge — they're meant for absolutely everyone in the school, no exceptions. 'Everyone please assemble in the ground' applies to every single student and teacher, regardless of class, year, or role.",

          "The universal selector in CSS works exactly this way — it targets every single element on the entire page, with zero exceptions."
        ]
      },

      {
        heading: "The Universal Selector",

        code: `* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}`,

        paragraphs: [
          "The asterisk (*) means 'every element, of every type, everywhere on this page' — headings, paragraphs, divs, links, all of it, no exceptions."
        ]
      },

      {
        heading: "Why This Exact Code Looks So Familiar",

        paragraphs: [
          "If you remember the very top of your App.css file, you've actually already seen and used this — it's an extremely common 'reset', removing every browser's default spacing before you start adding your own styles, like wiping a whiteboard clean before writing fresh instructions on it."
        ]
      },

      {
        heading: "Use It Carefully",

        paragraphs: [
          "Because it touches literally every element, the universal selector should mainly be used for broad resets (like the margin/padding reset above), not for detailed styling. For anything specific, you'll want element, class, or id selectors instead, just like a whole-school announcement isn't the right tool for telling one specific student something."
        ]
      },

      {
        heading: "Important Points to Remember",

        points: [
          "The asterisk (*) targets every single element on the page.",
          "Commonly used for global resets, like removing default margin/padding.",
          "Affects performance slightly more than specific selectors, since it checks everything.",
          "Best reserved for broad, page-wide resets — not detailed, specific styling."
        ]
      }

    ]
  },

  {
    title: "Combinators",
    subtitle: "Explained Like Family Relationships",

    sections: [

      {
        heading: "Think About a Family Tree",

        paragraphs: [
          "In a family, relationships have specific names — your parent, your child, your sibling who shares the same parents. 'Talk to my child' means something very different from 'talk to my sibling' — the relationship itself matters, not just that they're related somehow.",

          "Combinators in CSS describe these exact same kinds of relationships, but between HTML elements, letting you target an element based on how it relates to another."
        ]
      },

      {
        heading: "Descendant Combinator (Space) — Any Family Member Inside",

        code: `div p {
  color: gray;
}`,

        paragraphs: [
          "A simple space between selectors means 'any <p> anywhere inside a <div>, no matter how deeply nested' — like saying 'anyone living under my roof', whether it's your child, grandchild, or great-grandchild."
        ]
      },

      {
        heading: "Child Combinator (>) — Only Direct Children",

        code: `div > p {
  color: blue;
}`,

        paragraphs: [
          "The > symbol is stricter — it means 'only the immediate, direct child', not grandchildren. Only <p> tags placed directly inside the <div> get styled; a <p> nested inside another tag inside that <div> would be skipped — exactly like 'my own child' versus 'anyone in my family line'."
        ]
      },

      {
        heading: "Adjacent Sibling Combinator (+) — The Very Next Sibling",

        code: `h2 + p {
  font-style: italic;
}`,

        paragraphs: [
          "The + symbol means 'the very next sibling immediately after this one' — like saying 'my younger sibling born right after me', not any sibling, just the next one in line. Here, only a <p> that comes immediately after an <h2> gets styled."
        ]
      },

      {
        heading: "General Sibling Combinator (~) — All Siblings After",

        code: `h2 ~ p {
  color: darkgreen;
}`,

        paragraphs: [
          "The ~ symbol is more relaxed — it means 'all siblings that come after this one', not just the very next one. Like saying 'all my younger siblings', not just the one born immediately after me."
        ]
      },

      {
        heading: "Important Points to Remember",

        points: [
          "Descendant (space) targets any nested element inside, at any depth.",
          "Child (>) targets only direct children, one level deep.",
          "Adjacent sibling (+) targets only the very next sibling element.",
          "General sibling (~) targets all sibling elements that come after."
        ]
      }

    ]
  },

  {
    title: "Attribute Selectors",
    subtitle: "Explained Like Sorting Books by a Label on the Spine",

    sections: [

      {
        heading: "Think About a Library Shelf",

        paragraphs: [
          "Imagine every book in a library has a small label on its spine — some say 'Fiction', some say 'Reference', some have a specific shelf code. A librarian could quickly pull out only the books labelled 'Reference', without caring about the book's title or author at all — just that one label.",

          "Attribute selectors in CSS let you target elements based on a specific attribute they carry — like href, type, or target — rather than their tag, class, or id."
        ]
      },

      {
        heading: "Selecting by the Presence of an Attribute",

        code: `[target] {
  color: red;
}`,

        paragraphs: [
          "This targets any element that has a target attribute at all, regardless of its value — like pulling out every book that has any label on its spine, no matter what that label says."
        ]
      },

      {
        heading: "Selecting by an Exact Attribute Value",

        code: `input[type="email"] {
  border-color: blue;
}`,

        paragraphs: [
          "This is far more specific — only <input> elements where type is exactly \"email\" get this style, like pulling out only the books labelled exactly 'Reference', ignoring 'Fiction' or anything else."
        ]
      },

      {
        heading: "A Practical Real-World Example",

        paragraphs: [
          "Remember target=\"_blank\" from 'Anchor Tags', used to open links in a new tab? You could style every such link distinctly, to visually signal to visitors that it opens elsewhere."
        ],

        code: `a[target="_blank"] {
  color: orange;
}`
      },

      {
        heading: "Important Points to Remember",

        points: [
          "[attribute] selects elements that simply have that attribute, regardless of its value.",
          "[attribute=\"value\"] selects elements where that attribute matches exactly.",
          "Very useful for styling form inputs differently based on their type.",
          "Square brackets [ ] are always used for attribute selectors."
        ]
      }

    ]
  },

  {
    title: "Pseudo-classes",
    subtitle: "Explained Like a Door's Current State",

    sections: [

      {
        heading: "Think About a Door",

        paragraphs: [
          "A door is the same physical door at all times, but it can be in different states — currently open, currently closed, currently locked. You wouldn't paint the door differently based on these states permanently, but you might want a light to turn on only while it's open.",

          "Pseudo-classes in CSS let you style an element based on a temporary state it's currently in — like being hovered over, focused, or being a specific position in a list — without that state being a permanent class or id."
        ]
      },

      {
        heading: ":hover — While the Mouse Is Over It",

        code: `button:hover {
  background-color: darkgreen;
}`,

        paragraphs: [
          "This style only applies while the visitor's mouse is currently sitting on top of the button — the moment they move away, the style disappears, exactly like a light that's only on while the door is currently open."
        ]
      },

      {
        heading: ":focus — While Actively Selected",

        code: `input:focus {
  border-color: blue;
}`,

        paragraphs: [
          "This applies while an input field is currently 'active' — the visitor has clicked into it or tabbed onto it, ready to type. The moment they click elsewhere, this state ends."
        ]
      },

      {
        heading: ":nth-child() — Targeting by Position",

        paragraphs: [
          "This one isn't about mouse interaction — it targets an element based on its position among its siblings, like saying 'the 3rd person in this line', regardless of who they are."
        ],

        code: `li:nth-child(2) {
  color: red;
}

li:nth-child(odd) {
  background-color: #f5f5f5;
}`
      },

      {
        heading: "A Few More Useful Pseudo-classes",

        points: [
          ":first-child — targets an element only if it's the very first one among its siblings",
          ":last-child — targets an element only if it's the very last one among its siblings",
          ":disabled — targets a form element only while it's currently disabled",
          ":checked — targets a checkbox/radio only while it's currently ticked"
        ]
      },

      {
        heading: "Important Points to Remember",

        points: [
          "Pseudo-classes start with a single colon (:), like :hover or :focus.",
          "They style elements based on a current state or position, not a permanent class.",
          ":hover and :focus are about user interaction; :nth-child is about position.",
          "The style automatically disappears once that temporary state ends."
        ]
      }

    ]
  },

  {
    title: "Pseudo-elements",
    subtitle: "Explained Like Sticking a Decoration That Wasn't Originally There",

    sections: [

      {
        heading: "Think About Decorating a Greeting Card",

        paragraphs: [
          "Imagine a plain greeting card with just text written on it. You could stick a small sticker right before the first word, or right after the last line — these stickers were never originally part of the card's content, but they visually become part of it once added.",

          "Pseudo-elements in CSS let you do exactly this — add small decorative content right before or after an element, without actually editing the HTML to add new tags."
        ]
      },

      {
        heading: "::before — Sticking Something Right Before",

        code: `h2::before {
  content: "✦ ";
  color: gold;
}`,

        paragraphs: [
          "This adds a small star symbol right before every <h2>'s text, purely through CSS — no extra HTML tag was added, just like sticking a decoration onto an already-written card without rewriting the message."
        ]
      },

      {
        heading: "::after — Sticking Something Right After",

        code: `p::after {
  content: " ✔";
  color: green;
}`,

        paragraphs: [
          "Same idea, but the decoration appears right after the element's content instead — a small checkmark added at the end of every paragraph, again without touching the actual HTML."
        ]
      },

      {
        heading: "A Practical Use: Required Field Markers",

        paragraphs: [
          "A common real use is adding a red asterisk after required form labels, without needing to manually type it into every label in your HTML."
        ],

        code: `label.required::after {
  content: " *";
  color: red;
}`
      },

      {
        heading: "Pseudo-class vs Pseudo-element — Quick Comparison",

        points: [
          "Pseudo-class (:hover) = styling based on a state the element is already in",
          "Pseudo-element (::before) = adding extra decorative content that didn't exist before, purely visual",
          "Pseudo-classes use one colon (:); pseudo-elements use two colons (::)"
        ]
      },

      {
        heading: "Important Points to Remember",

        points: [
          "::before and ::after add content right before/after an element, without editing HTML.",
          "The content property is required — it defines what gets added (text, symbols, even empty \"\").",
          "Pseudo-elements use double colons (::), unlike pseudo-classes which use a single colon (:).",
          "Great for decorative icons, markers, or small visual flourishes without extra HTML clutter."
        ]
      }

    ]
  },

  {
    title: "Colors",
    subtitle: "Explained Like Mixing Paint",

    sections: [

      {
        heading: "Think About a Paint Shop",

        paragraphs: [
          "At a paint shop, you can describe a color in several ways — point at a swatch named 'Sky Blue', or give the exact mixing ratio of red, green, and blue pigments to get that precise shade. Both describe the same color, just in different languages.",

          "CSS gives you several ways to describe colors too — some simple and named, others precise and numeric."
        ]
      },

      {
        heading: "Named Colors — The Easiest Way",

        code: `h1 {
  color: blue;
}

p {
  color: darkgreen;
}`,

        paragraphs: [
          "CSS understands about 140 plain English color names — blue, red, darkgreen, tomato, and more. Easiest to read, but limited to those specific named shades."
        ]
      },

      {
        heading: "Hex Codes — Precise Mixing Ratios",

        code: `h1 {
  color: #0f766e;
}`,

        paragraphs: [
          "A hex code is six characters after a #, representing exact amounts of red, green, and blue mixed together. You'll see these constantly in design tools and color pickers — they let you match a color exactly, not just an approximate named shade."
        ]
      },

      {
        heading: "RGB — Red, Green, Blue Amounts Directly",

        code: `h1 {
  color: rgb(15, 118, 110);
}`,

        paragraphs: [
          "This is the same color as the hex code above, just written as three numbers (0-255 each) for red, green, and blue — like directly stating the mixing ratio instead of using a shortcode for it."
        ]
      },

      {
        heading: "RGBA — Adding Transparency",

        code: `div {
  background-color: rgba(15, 118, 110, 0.5);
}`,

        paragraphs: [
          "The fourth number (0 to 1) controls opacity — 1 is fully solid, 0 is fully invisible, 0.5 is half-transparent. Useful for overlays, where you want to see through a color slightly."
        ]
      },

      {
        heading: "Background vs Text Color",

        points: [
          "color — sets the text color of an element",
          "background-color — sets the background color behind an element"
        ]
      },

      {
        heading: "Important Points to Remember",

        points: [
          "Named colors are simple but limited to fixed shades.",
          "Hex codes (#rrggbb) and RGB give precise control over the exact color.",
          "RGBA adds a fourth value for transparency (0 = invisible, 1 = solid).",
          "color sets text color; background-color sets the background behind it."
        ]
      }

    ]
  },

  {
    title: "Background Properties",
    subtitle: "Explained Like Decorating a Wall",

    sections: [

      {
        heading: "Think About Decorating a Wall",

        paragraphs: [
          "A wall could simply be painted one solid color, or covered with wallpaper that has a repeating pattern, or have one large poster placed in a specific spot, sized to fit perfectly. Each choice changes how that wall looks, without changing the wall itself.",

          "CSS background properties let you do exactly these things to any element — solid color, repeating pattern, or a single sized image."
        ]
      },

      {
        heading: "Solid Background Color",

        code: `div {
  background-color: #f5efe6;
}`,

        paragraphs: [
          "The simplest option — just one flat color filling the entire element, like painting a wall one plain color."
        ]
      },

      {
        heading: "Using an Image as Background",

        code: `div {
  background-image: url("pattern.png");
}`,

        paragraphs: [
          "By default, this image repeats automatically to fill the whole element — like wallpaper with a small repeating pattern, tiling itself across the entire wall."
        ]
      },

      {
        heading: "Controlling Repetition",

        code: `div {
  background-image: url("logo.png");
  background-repeat: no-repeat;
}`,

        points: [
          "repeat (default) — tiles the image both horizontally and vertically",
          "no-repeat — shows the image only once, like a single poster instead of repeating wallpaper",
          "repeat-x / repeat-y — tiles only horizontally or only vertically"
        ]
      },

      {
        heading: "Sizing and Positioning the Image",

        code: `div {
  background-image: url("banner.jpg");
  background-size: cover;
  background-position: center;
}`,

        points: [
          "background-size: cover — stretches the image to completely fill the element, like a poster sized to perfectly cover the whole wall",
          "background-position: center — centers the image within the element, like hanging a poster right in the middle of the wall"
        ]
      },

      {
        heading: "Important Points to Remember",

        points: [
          "background-color sets a flat color fill.",
          "background-image places an image; by default it tiles/repeats.",
          "background-repeat: no-repeat shows the image just once.",
          "background-size: cover and background-position: center are commonly used together for banner-style images."
        ]
      }

    ]
  },

  {
    title: "Typography Basics",
    subtitle: "Explained Like Choosing a Handwriting Style",

    sections: [

      {
        heading: "Think About Different Handwriting Styles",

        paragraphs: [
          "Some people write in neat, rounded handwriting; others in sharp, angular strokes. The same sentence looks completely different depending on whose handwriting it's in — and you'd naturally choose a clear, readable style for an important notice, versus a fancy style for a greeting card.",

          "Typography in CSS is exactly this choice — selecting which 'handwriting style' (font) your text uses, and how bold or large it appears."
        ]
      },

      {
        heading: "font-family — Choosing the Style",

        code: `body {
  font-family: Arial, sans-serif;
}`,

        paragraphs: [
          "This lists fonts in order of preference — the browser tries 'Arial' first, and if that's unavailable on the visitor's device, falls back to any generic sans-serif font. Always include a generic fallback like this, since not every visitor has every font installed."
        ]
      },

      {
        heading: "font-size — How Big the Text Is",

        code: `h1 {
  font-size: 32px;
}

p {
  font-size: 16px;
}`,

        paragraphs: [
          "Larger sizes for important text (like headings), smaller for regular reading text — just like a notice board uses bigger letters for the main heading than for the fine print below it."
        ]
      },

      {
        heading: "font-weight — How Bold the Text Is",

        code: `h1 {
  font-weight: bold;
}

p {
  font-weight: normal;
}`,

        paragraphs: [
          "Common values are normal, bold, or specific numbers like 400 (normal) and 700 (bold) — controlling how thick or thin the strokes of each letter appear."
        ]
      },

      {
        heading: "font-style — Italics",

        code: `em {
  font-style: italic;
}`
      },

      {
        heading: "Important Points to Remember",

        points: [
          "font-family lists preferred fonts, ending with a generic fallback (sans-serif, serif).",
          "font-size controls how large text appears; font-weight controls how bold.",
          "font-style: italic slants the text.",
          "Always include a fallback font, since visitors may not have your first-choice font installed."
        ]
      }

    ]
  },

  {
    title: "Text Properties",
    subtitle: "Explained Like Formatting a Letter's Layout",

    sections: [

      {
        heading: "Think About Formatting a Letter",

        paragraphs: [
          "Beyond just handwriting style, a well-formatted letter also has decisions about alignment (left-aligned or centered title), spacing between lines (so it doesn't look cramped), and sometimes specific spacing between letters for a heading to stand out.",

          "CSS text properties control exactly these layout details, separately from the font itself."
        ]
      },

      {
        heading: "text-align — Alignment",

        code: `h1 {
  text-align: center;
}

p {
  text-align: left;
}`,

        points: [
          "left (default) — text starts from the left edge",
          "center — text is centered within its container",
          "right — text aligns to the right edge",
          "justify — text stretches evenly to fill the full width on both edges, like a newspaper column"
        ]
      },

      {
        heading: "line-height — Spacing Between Lines",

        code: `p {
  line-height: 1.8;
}`,

        paragraphs: [
          "This controls the vertical space between lines of text within the same paragraph — too tight, and lines feel cramped together; too loose, and they feel disconnected. A value like 1.5-1.8 usually reads comfortably."
        ]
      },

      {
        heading: "letter-spacing and text-transform",

        code: `h2 {
  letter-spacing: 2px;
  text-transform: uppercase;
}`,

        points: [
          "letter-spacing — adds extra space between individual letters, often used for stylish headings",
          "text-transform: uppercase — displays text in all capitals, regardless of how it's typed in the HTML",
          "text-transform: capitalize — capitalizes the first letter of each word"
        ]
      },

      {
        heading: "text-decoration — Underlines and Strikethroughs",

        code: `a {
  text-decoration: none;
}

del {
  text-decoration: line-through;
}`,

        paragraphs: [
          "Links are underlined by default in browsers — text-decoration: none is commonly used to remove that underline for a cleaner look, especially on navigation menus."
        ]
      },

      {
        heading: "Important Points to Remember",

        points: [
          "text-align controls horizontal alignment: left, center, right, or justify.",
          "line-height controls spacing between lines within the same block of text.",
          "letter-spacing adjusts space between individual letters; text-transform changes capitalization.",
          "text-decoration: none is commonly used to remove the default underline from links."
        ]
      }

    ]
  },

  {
    title: "Google Fonts",
    subtitle: "Explained Like Borrowing a Book from a Library",

    sections: [

      {
        heading: "Think About a Library",

        paragraphs: [
          "Your own bookshelf has limited books, but a library has thousands — and you can borrow any of them for free, without owning a physical copy yourself. As long as the library is open, you can read that book whenever you want.",

          "Your visitor's device only has a limited set of fonts already installed. Google Fonts is like that library — a huge, free collection of fonts you can 'borrow' for your website, without your visitor needing to install anything."
        ]
      },

      {
        heading: "Step 1: Pick a Font and Get the Link",

        paragraphs: [
          "Visit fonts.google.com, search for a font you like (e.g. 'Poppins' or 'Roboto'), and Google gives you a <link> tag to copy — like getting a library card that lets you 'borrow' that exact font."
        ]
      },

      {
        heading: "Step 2: Link It in Your HTML",

        code: `<head>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;700&display=swap" rel="stylesheet">
</head>`,

        paragraphs: [
          "This goes inside your <head>, just like the favicon and meta tags we covered earlier — it tells the browser to 'fetch this font from Google's library' before the page even finishes loading."
        ]
      },

      {
        heading: "Step 3: Actually Use the Font in CSS",

        code: `body {
  font-family: "Poppins", sans-serif;
}`,

        paragraphs: [
          "Just like 'font-family' from 'Typography Basics' — now 'Poppins' is available to use, even though the visitor never had it installed on their own device."
        ]
      },

      {
        heading: "Important Points to Remember",

        points: [
          "Google Fonts gives access to free, professional fonts without visitors needing to install them.",
          "Get the font's <link> tag from fonts.google.com and place it inside your <head>.",
          "Use the font name in font-family afterward, exactly like any other font.",
          "Always include a generic fallback (sans-serif, serif) in case the font fails to load."
        ]
      }

    ]
  },

  {
    title: "Box Model Intro",
    subtitle: "Explained Like a Gift Box with Multiple Layers",

    sections: [

      {
        heading: "Think About Wrapping a Gift",

        paragraphs: [
          "Imagine a gift box: there's the actual gift inside, then some soft tissue paper cushioning it, then the cardboard box itself, and finally some empty space around the box before it touches anything else on the shelf. Four distinct layers, from the center outward.",

          "Every single HTML element follows this exact same four-layer structure in CSS, called the Box Model."
        ]
      },

      {
        heading: "The Four Layers, From Inside Out",

        points: [
          "Content — the actual gift itself; your text, image, or whatever the element holds",
          "Padding — the tissue paper; cushioning space between the content and the box's edge",
          "Border — the cardboard box itself; the visible edge wrapping around everything",
          "Margin — the empty shelf space; gap between this box and whatever sits next to it"
        ]
      },

      {
        heading: "Seeing It in Code",

        code: `div {
  width: 200px;
  padding: 20px;
  border: 2px solid darkgreen;
  margin: 30px;
}`,

        paragraphs: [
          "This single div now has: 200px of actual content width, 20px of cushioning padding around that content, a 2px visible border around the padding, and 30px of empty margin space pushing other elements away from it."
        ]
      },

      {
        heading: "Why This Matters So Much",

        paragraphs: [
          "Almost every layout problem in CSS — things looking too cramped, too far apart, or oddly sized — comes down to misunderstanding one of these four layers. Once you can clearly picture content, padding, border, and margin as separate layers, layout debugging becomes much easier."
        ]
      },

      {
        heading: "Important Points to Remember",

        points: [
          "Every element has four layers: content, padding, border, and margin, from inside out.",
          "Padding is space inside the border, cushioning the content.",
          "Border is the visible edge of the element.",
          "Margin is empty space outside the border, separating it from other elements."
        ]
      }

    ]
  },

  {
    title: "Width & Height",
    subtitle: "Explained Like Choosing a Cardboard Box's Dimensions",

    sections: [

      {
        heading: "Think About Choosing a Box Size",

        paragraphs: [
          "When packing something, you choose a box that's a specific length and width — too small, and your item won't fit; too large, and there's wasted space. You decide these dimensions deliberately, based on what needs to go inside.",

          "width and height in CSS let you deliberately control an element's content area size, instead of leaving it to whatever the browser decides by default."
        ]
      },

      {
        heading: "Setting Fixed Dimensions",

        code: `div {
  width: 300px;
  height: 150px;
  background-color: #dcfce7;
}`,

        paragraphs: [
          "This creates a box exactly 300px wide and 150px tall, regardless of how much content is inside it — like a fixed-size box, whether you're packing one small item or several."
        ]
      },

      {
        heading: "Percentage Widths — Relative Sizing",

        code: `div {
  width: 50%;
}`,

        paragraphs: [
          "Instead of a fixed pixel size, this makes the element exactly half the width of its parent container — like saying 'make this box exactly half as wide as the shelf it's sitting on', automatically adjusting if the shelf size changes."
        ]
      },

      {
        heading: "max-width — A Useful Safety Net",

        code: `div {
  width: 100%;
  max-width: 800px;
}`,

        paragraphs: [
          "This means 'be as wide as your container allows, but never wider than 800px' — useful for keeping text readable on very large screens, while still shrinking nicely on smaller ones."
        ]
      },

      {
        heading: "Important Points to Remember",

        points: [
          "width and height set an element's content area dimensions explicitly.",
          "Pixel values (300px) are fixed; percentage values (50%) are relative to the parent.",
          "max-width caps how large an element can grow, while still allowing it to shrink.",
          "By default, many elements (like <div>) automatically size based on their content unless you set width/height."
        ]
      }

    ]
  },

  {
    title: "Padding",
    subtitle: "Explained Like Cushioning Inside a Box",

    sections: [

      {
        heading: "Remember the Gift Box Analogy?",

        paragraphs: [
          "From 'Box Model Intro' — padding is the tissue paper cushioning your gift, sitting between the actual content and the box's edge. Without it, your gift would be pressed right up against the cardboard, looking cramped and unprotected.",

          "Padding in CSS does exactly this — it adds breathing space between an element's content and its border, making things feel less cramped."
        ]
      },

      {
        heading: "Setting Padding on All Sides Equally",

        code: `div {
  padding: 20px;
}`,

        paragraphs: [
          "This adds 20px of cushioning space on all four sides equally — top, right, bottom, and left, all the same amount."
        ]
      },

      {
        heading: "Setting Different Padding on Each Side",

        code: `div {
  padding-top: 10px;
  padding-right: 20px;
  padding-bottom: 10px;
  padding-left: 20px;
}`,

        paragraphs: [
          "Sometimes you want more cushioning on the sides than top/bottom, or vice versa — these four separate properties give you that individual control, like choosing thicker tissue paper on one side of the gift than another."
        ]
      },

      {
        heading: "The Shorthand Pattern (Very Commonly Used)",

        code: `div {
  padding: 10px 20px;
}`,

        paragraphs: [
          "This shorthand with two values means 'top and bottom get 10px, right and left get 20px' — a quicker way to write the four-value version above, when top/bottom match each other and left/right match each other."
        ]
      },

      {
        heading: "Important Points to Remember",

        points: [
          "padding adds space inside the border, around the content.",
          "padding: 20px applies equally to all four sides.",
          "Individual properties (padding-top, etc.) let you control each side separately.",
          "The two-value shorthand (padding: 10px 20px) sets top/bottom, then left/right."
        ]
      }

    ]
  },

  {
    title: "Margin",
    subtitle: "Explained Like a Personal Space Bubble",

    sections: [

      {
        heading: "Think About Standing in a Queue",

        paragraphs: [
          "When people stand in a queue, they naturally leave a small gap between themselves and the next person — a personal space bubble. This gap isn't part of either person; it's just empty space separating them.",

          "Margin in CSS is exactly this gap — empty space outside an element's border, pushing it away from neighboring elements."
        ]
      },

      {
        heading: "Setting Margin on All Sides",

        code: `div {
  margin: 20px;
}`,

        paragraphs: [
          "This pushes the element 20px away from whatever surrounds it, on all four sides — like everyone in the queue maintaining the same gap from the person in front and behind."
        ]
      },

      {
        heading: "Centering an Element with margin: auto",

        code: `div {
  width: 600px;
  margin: 0 auto;
}`,

        paragraphs: [
          "This is one of the most common CSS tricks — auto tells the browser to automatically split the remaining leftover space equally on the left and right, centering the element horizontally within its container. The 0 keeps top/bottom margin at zero."
        ]
      },

      {
        heading: "Margin vs Padding — A Quick Recap",

        points: [
          "Padding = cushioning inside the box, between content and border",
          "Margin = empty space outside the box, between it and other elements",
          "Padding affects how cramped content feels inside; margin affects how close elements are to each other"
        ]
      },

      {
        heading: "A Tricky Concept: Margin Collapse",

        paragraphs: [
          "When two elements stacked vertically both have margin, browsers don't always simply add them together — sometimes the larger margin 'wins' and the smaller one collapses into it. This is a known quirk called margin collapsing; don't worry about memorizing it now, just know it exists if spacing ever looks unexpectedly smaller than you calculated."
        ]
      },

      {
        heading: "Important Points to Remember",

        points: [
          "Margin is empty space outside an element's border, separating it from neighbors.",
          "margin: 0 auto is a common trick to horizontally center a fixed-width element.",
          "Unlike padding, margin doesn't get a background color — it's pure empty space.",
          "Vertical margins between elements can sometimes 'collapse' rather than simply add up."
        ]
      }

    ]
  },

  {
    title: "Border & Border-radius",
    subtitle: "Explained Like a Photo Frame",

    sections: [

      {
        heading: "Think About Framing a Photo",

        paragraphs: [
          "A photo frame wraps around a picture, giving it a clear visible edge. Some frames have sharp, square corners; others have nicely rounded corners, softening the overall look without changing the photo itself.",

          "Border in CSS is that visible frame around an element, and border-radius controls how rounded its corners are."
        ]
      },

      {
        heading: "The Three Parts of a Border",

        code: `div {
  border-width: 2px;
  border-style: solid;
  border-color: darkgreen;
}`,

        points: [
          "border-width — how thick the frame is",
          "border-style — solid, dashed, dotted, or double, among others",
          "border-color — what color the frame is"
        ]
      },

      {
        heading: "The Shorthand Version (Commonly Used)",

        code: `div {
  border: 2px solid darkgreen;
}`,

        paragraphs: [
          "Just like padding had a shorthand, border combines width, style, and color into one line — width first, then style, then color, all space-separated."
        ]
      },

      {
        heading: "border-radius — Rounding the Corners",

        code: `img {
  border-radius: 12px;
}

.profile-pic {
  border-radius: 50%;
}`,

        paragraphs: [
          "A small value like 12px gently rounds the corners, like a softened frame. A value of 50% turns a perfectly square element into a complete circle — this is the classic trick used for circular profile pictures everywhere."
        ]
      },

      {
        heading: "Important Points to Remember",

        points: [
          "border combines width, style, and color in one shorthand line.",
          "Common border-style values include solid, dashed, and dotted.",
          "border-radius rounds corners; small values soften them, 50% makes a square fully circular.",
          "Borders are part of the box model layer, sitting between padding and margin."
        ]
      }

    ]
  },

  {
    title: "Box-sizing",
    subtitle: "Explained Like a Tailor's Seam Allowance",

    sections: [

      {
        heading: "Think About Getting a Shirt Tailored",

        paragraphs: [
          "If you ask a tailor for a 'shirt that's exactly 40 inches wide', do they mean 40 inches for just the visible fabric, or 40 inches including the stitching seams around the edges too? This confusion changes the final shirt's actual size.",

          "By default, CSS has this exact same confusion with width — and box-sizing lets you clearly decide which measurement you actually mean."
        ]
      },

      {
        heading: "The Default Behavior: content-box",

        code: `div {
  width: 300px;
  padding: 20px;
  border: 2px solid black;
}`,

        paragraphs: [
          "By default, width: 300px only measures the content area — padding and border get added ON TOP of that 300px. So this element's actual total width becomes 300 + 20 + 20 + 2 + 2 = 344px, not 300px, which can be confusing and throw off your layouts."
        ]
      },

      {
        heading: "The Fix: box-sizing: border-box",

        code: `div {
  box-sizing: border-box;
  width: 300px;
  padding: 20px;
  border: 2px solid black;
}`,

        paragraphs: [
          "With border-box, width: 300px now means the TOTAL width, including padding and border — the content area automatically shrinks to fit, exactly like the tailor confirming '40 inches' means the entire finished shirt, seams included."
        ]
      },

      {
        heading: "Why You'll See This Everywhere",

        paragraphs: [
          "Because border-box is so much more predictable, most developers apply it globally right at the start of their stylesheet, using the universal selector we learned earlier."
        ],

        code: `* {
  box-sizing: border-box;
}`
      },

      {
        heading: "Important Points to Remember",

        points: [
          "By default (content-box), padding and border add extra size on top of your set width.",
          "box-sizing: border-box makes width/height include padding and border, more predictable.",
          "Most projects apply border-box globally using the universal selector.",
          "This single property prevents a huge amount of common layout confusion."
        ]
      }

    ]
  },

  {
    title: "Display Property",
    subtitle: "Explained Like Classroom Seating Arrangements",

    sections: [

      {
        heading: "Think About Different Classroom Layouts",

        paragraphs: [
          "Some classroom seating forces one student per row, each row stretching the full width of the room — nobody else can sit beside them in that row. Other layouts let students sit side-by-side in flexible groups, only taking up as much width as they actually need. And sometimes, a student is simply marked absent — not seated anywhere at all.",

          "The display property in CSS controls exactly this kind of behavior — how an element occupies space relative to others around it."
        ]
      },

      {
        heading: "display: block — One Per Row",

        code: `div {
  display: block;
}`,

        paragraphs: [
          "Block elements (like <div>, <p>, <h1> by default) take up the full width available, and always start on a new line — like that one-student-per-row layout, nobody else fits beside them."
        ]
      },

      {
        heading: "display: inline — Flowing Within Text",

        code: `span {
  display: inline;
}`,

        paragraphs: [
          "Inline elements (like <span>, <a> by default) only take up as much width as their content needs, and sit right alongside other inline content, flowing like words within a sentence."
        ]
      },

      {
        heading: "display: inline-block — The Best of Both",

        code: `.card {
  display: inline-block;
  width: 200px;
}`,

        paragraphs: [
          "This sits side-by-side like inline elements, but still respects a set width/height like block elements — like flexible seating groups that sit beside each other, but each group still has its own defined space."
        ]
      },

      {
        heading: "display: none — Completely Hidden",

        code: `.hidden-section {
  display: none;
}`,

        paragraphs: [
          "This completely removes the element from the page, as if it doesn't exist at all — like marking a student absent, leaving no empty seat behind, the room simply rearranges around their absence."
        ]
      },

      {
        heading: "Important Points to Remember",

        points: [
          "block elements take full width and start on a new line.",
          "inline elements only take needed width, flowing alongside other content.",
          "inline-block combines side-by-side flow with settable width/height.",
          "display: none completely removes an element, leaving no gap behind."
        ]
      }

    ]
  },

  {
    title: "Position Property",
    subtitle: "Explained Like Different Types of Classroom Seats",

    sections: [

      {
        heading: "Think About Different Kinds of Seats",

        paragraphs: [
          "Most students sit in their normal, assigned seat, in regular classroom flow. Some seats are 'reserved' but can be shifted slightly without disturbing anyone else around them. Other things — like a wall clock — stay fixed in one exact spot on the wall, regardless of how the room is rearranged. And a sticky note stuck to a specific page stays with that page, even as the notebook is flipped through.",

          "The position property in CSS describes these exact same different behaviors for how an element sits on the page."
        ]
      },

      {
        heading: "position: static — The Default, Normal Flow",

        paragraphs: [
          "Every element starts as static by default — sitting exactly where normal page flow places it, just like a student in their regular assigned seat, following the room's natural layout."
        ]
      },

      {
        heading: "position: relative — Shifted, But Still 'Reserved'",

        code: `div {
  position: relative;
  top: 10px;
  left: 20px;
}`,

        paragraphs: [
          "This nudges the element slightly from where it would normally sit, but its original spot in the page's flow is still respected by everything else around it — like sliding your chair slightly without anyone else needing to rearrange theirs."
        ]
      },

      {
        heading: "position: absolute — Removed From Normal Flow",

        code: `div {
  position: absolute;
  top: 0;
  right: 0;
}`,

        paragraphs: [
          "This completely removes the element from normal flow and positions it relative to its nearest positioned (relative/absolute) ancestor — like a wall clock, positioned exactly relative to that specific wall, not affected by where chairs and desks are arranged in the room."
        ]
      },

      {
        heading: "position: fixed — Stuck to the Screen, Not the Page",

        code: `nav {
  position: fixed;
  top: 0;
  width: 100%;
}`,

        paragraphs: [
          "This element stays glued to the same spot on the screen, even as the visitor scrolls down the page — like a wall clock that stays in view, no matter how far you walk around the room."
        ]
      },

      {
        heading: "position: sticky — A Mix of Both",

        code: `h2 {
  position: sticky;
  top: 0;
}`,

        paragraphs: [
          "This behaves normally until the visitor scrolls past it, then it 'sticks' in place, like a bookmark sticky note — it travels with its section, but once you reach a certain scroll point, it stays pinned at the top until that section ends."
        ]
      },

      {
        heading: "Important Points to Remember",

        points: [
          "static is the default — normal page flow, no special positioning.",
          "relative shifts an element slightly while still holding its original space.",
          "absolute removes it from flow, positioning relative to its nearest positioned ancestor.",
          "fixed sticks to the screen while scrolling; sticky sticks only after a scroll point."
        ]
      }

    ]
  },

  {
    title: "Z-index",
    subtitle: "Explained Like a Stack of Papers on a Desk",

    sections: [

      {
        heading: "Think About a Pile of Papers",

        paragraphs: [
          "When you stack papers on a desk, whichever one you placed last sits on top, covering whatever is beneath it. If two papers overlap, you can clearly see which one is 'above' the other in the pile.",

          "When elements on a webpage overlap (often using position: relative/absolute), z-index decides exactly this — which element sits on top of which."
        ]
      },

      {
        heading: "Setting the Stacking Order",

        code: `.box-1 {
  position: absolute;
  z-index: 1;
}

.box-2 {
  position: absolute;
  z-index: 2;
}`,

        paragraphs: [
          "A higher z-index number means 'place this paper higher in the stack' — so .box-2 (z-index: 2) sits visually on top of .box-1 (z-index: 1), even if .box-1 appears earlier in the HTML."
        ]
      },

      {
        heading: "An Important Rule: z-index Needs Positioning",

        paragraphs: [
          "z-index only works on elements that have position set to something other than static (relative, absolute, fixed, or sticky). Setting z-index on a regular static element does nothing — like trying to stack a paper that's glued flat to the desk, it simply won't move up or down in the pile."
        ]
      },

      {
        heading: "A Practical Example: A Modal Popup",

        paragraphs: [
          "A common real use is making sure a popup/modal always appears above all other page content, regardless of what else is happening on the page."
        ],

        code: `.modal {
  position: fixed;
  z-index: 1000;
}`
      },

      {
        heading: "Important Points to Remember",

        points: [
          "z-index controls stacking order when elements overlap.",
          "Higher numbers sit on top of lower numbers.",
          "z-index only has an effect on positioned elements (not position: static).",
          "Popups/modals often use a very high z-index to guarantee they stay on top."
        ]
      }

    ]
  },

  {
    title: "Overflow",
    subtitle: "Explained Like Water Overflowing a Glass",

    sections: [

      {
        heading: "Think About Pouring Water Into a Glass",

        paragraphs: [
          "If you pour more water than a glass can hold, you've got a few choices: let it spill over the edges onto the table, stop pouring and let extra water sit on top without spilling, or use a taller glass that simply holds everything without any issue.",

          "Overflow in CSS describes exactly this — what happens when content is too big to fit inside its container's set size."
        ]
      },

      {
        heading: "overflow: visible — The Default, Spills Out",

        code: `div {
  width: 200px;
  height: 100px;
  overflow: visible;
}`,

        paragraphs: [
          "By default, content that's too big simply spills outside the box's boundaries, visibly overlapping whatever is around it — like water spilling over the glass's edge onto the table."
        ]
      },

      {
        heading: "overflow: hidden — Cuts It Off",

        code: `div {
  overflow: hidden;
}`,

        paragraphs: [
          "This clips off anything that doesn't fit, simply hiding the excess — like a glass with a lid exactly at its rim, where anything poured beyond that level just gets wiped away, invisible."
        ]
      },

      {
        heading: "overflow: scroll — Adds a Scrollbar",

        code: `div {
  height: 150px;
  overflow: scroll;
}`,

        paragraphs: [
          "Instead of hiding or spilling content, this keeps everything accessible by adding a scrollbar — like keeping all the water, just storing the extra in a way you can still access by scrolling/tilting, rather than losing it."
        ]
      },

      {
        heading: "overflow: auto — Smart, Adds Scrollbar Only If Needed",

        code: `div {
  overflow: auto;
}`,

        paragraphs: [
          "This only shows a scrollbar if the content actually overflows — if everything already fits, no scrollbar appears at all. This is usually the safer, more practical default compared to forcing scroll always."
        ]
      },

      {
        heading: "Important Points to Remember",

        points: [
          "overflow: visible (default) lets content spill outside its container.",
          "overflow: hidden clips and hides anything that doesn't fit.",
          "overflow: scroll always shows a scrollbar; overflow: auto shows one only when needed.",
          "Commonly used on fixed-height containers like chat boxes or sidebars."
        ]
      }

    ]
  },

  {
    title: "Flexbox Intro",
    subtitle: "Explained Like Elastic-Band Seating Arrangement",

    sections: [

      {
        heading: "Think About Arranging Chairs with an Elastic Cord",

        paragraphs: [
          "Imagine chairs connected loosely by a stretchy elastic cord instead of being bolted to fixed spots. You can easily push them closer together, spread them apart evenly, or let one chair take up more space than the others — the whole row adjusts flexibly, without manually recalculating every chair's exact position.",

          "Flexbox is exactly this — a flexible, elastic-like layout system in CSS for arranging elements in a row or column, making spacing and alignment dramatically easier than older methods."
        ]
      },

      {
        heading: "Turning On Flexbox",

        code: `.container {
  display: flex;
}`,

        paragraphs: [
          "Just one line — display: flex — instantly turns a container into a 'flex container', and every direct child inside it automatically becomes a 'flex item', arranged side-by-side, like chairs lining up neatly along that elastic cord."
        ]
      },

      {
        heading: "What Changes Immediately",

        paragraphs: [
          "Before flexbox, getting a row of items to neatly space themselves, center themselves, or equally divide available width usually meant fiddling with floats or fixed widths. With flexbox, the children automatically arrange themselves in a row, ready for further fine-tuning with properties we'll cover in the next two topics."
        ]
      },

      {
        heading: "A Simple Before-and-After",

        code: `<!-- Before flex: each div stacks on its own line (default block behavior) -->
<div class="container">
  <div>Box 1</div>
  <div>Box 2</div>
  <div>Box 3</div>
</div>

<!-- container { display: flex; } makes them sit side-by-side automatically -->`
      },

      {
        heading: "Important Points to Remember",

        points: [
          "display: flex turns a container into a flex container; its direct children become flex items.",
          "Flex items automatically arrange in a row by default, side-by-side.",
          "Flexbox dramatically simplifies spacing, alignment, and equal distribution of items.",
          "The next two topics cover the specific properties for controlling this flexible arrangement."
        ]
      }

    ]
  },

  {
    title: "Flex Container Properties",
    subtitle: "Explained Like Controlling a Theatre's Seating Arrangement",

    sections: [

      {
        heading: "Think About Arranging Seats in a Movie Theatre",

        paragraphs: [
          "A theatre manager can decide several things about a row of seats: should the row run left-to-right or top-to-bottom? Should seats be pushed together on one side, spread evenly apart, or centered in the middle? Should everyone in the row sit at the same height, or can some sit higher than others?",

          "Flex container properties answer these exact questions — once display: flex is turned on (from 'Flexbox Intro'), these properties control how the flex items behave as a group."
        ]
      },

      {
        heading: "flex-direction — Row or Column?",

        code: `.container {
  display: flex;
  flex-direction: row;
}`,

        points: [
          "row (default) — items arranged left to right, horizontally",
          "column — items arranged top to bottom, vertically",
          "row-reverse / column-reverse — same directions, but order flipped"
        ]
      },

      {
        heading: "justify-content — Spacing Along the Main Direction",

        code: `.container {
  display: flex;
  justify-content: space-between;
}`,

        points: [
          "flex-start (default) — items pushed to the start, like seats pulled to one side",
          "center — items grouped in the middle",
          "space-between — equal gaps between items, but none at the very edges",
          "space-around — equal gaps around every item, including the edges"
        ]
      },

      {
        heading: "align-items — Alignment Across the Other Direction",

        code: `.container {
  display: flex;
  align-items: center;
}`,

        paragraphs: [
          "While justify-content handles spacing along the row, align-items controls how items line up across the row's height — center vertically centers them, flex-start aligns to the top, flex-end to the bottom, like deciding whether everyone in a row sits at the same height or some sit slightly higher."
        ]
      },

      {
        heading: "flex-wrap — What Happens When Items Don't Fit",

        code: `.container {
  display: flex;
  flex-wrap: wrap;
}`,

        paragraphs: [
          "By default, flex items try to all squeeze into one single row, shrinking if needed. flex-wrap: wrap instead lets extra items move to a new line, like a theatre adding a second row once the first one is full, rather than cramming everyone into one impossibly long row."
        ]
      },

      {
        heading: "Important Points to Remember",

        points: [
          "flex-direction sets whether items flow as a row or a column.",
          "justify-content controls spacing along the main direction.",
          "align-items controls alignment across the cross direction.",
          "flex-wrap lets items move to a new line instead of squeezing into one."
        ]
      }

    ]
  },

  {
    title: "Flex Item Properties",
    subtitle: "Explained Like a Student Adjusting Their Own Seat",

    sections: [

      {
        heading: "Think About One Student in a Flexible Row",

        paragraphs: [
          "While the teacher decides the overall row arrangement (covered in 'Flex Container Properties'), one specific student might still want to adjust their own seat — sit slightly higher than the row's general alignment, take up more space because they have extra books, or simply move themselves earlier in the row.",

          "Flex item properties are set on the individual child elements, not the container, letting one specific item behave differently from its siblings."
        ]
      },

      {
        heading: "flex-grow — Claiming Extra Space",

        code: `.item-1 {
  flex-grow: 1;
}

.item-2 {
  flex-grow: 2;
}`,

        paragraphs: [
          "If there's leftover space in the row, flex-grow decides how it's divided. Here, .item-2 grows twice as much as .item-1 — like one student spreading their books out to take up more of the empty desk space than their neighbor."
        ]
      },

      {
        heading: "flex-shrink — Allowing an Item to Shrink",

        code: `.item-1 {
  flex-shrink: 0;
}`,

        paragraphs: [
          "By default, items shrink if the row gets too crowded. Setting flex-shrink: 0 tells this specific item 'never shrink me, no matter how tight the row gets' — like one student refusing to squeeze their chair in further, keeping their original size."
        ]
      },

      {
        heading: "align-self — Overriding Alignment for One Item",

        code: `.item-3 {
  align-self: flex-end;
}`,

        paragraphs: [
          "Even if the container set align-items: center for everyone, one specific item can override this just for itself using align-self — like one student choosing to sit at the back of the row while everyone else stays centered."
        ]
      },

      {
        heading: "order — Changing Visual Position Without Changing HTML",

        code: `.item-1 {
  order: 2;
}

.item-2 {
  order: 1;
}`,

        paragraphs: [
          "Even though .item-1 appears first in the HTML, order: 2 makes it appear visually after .item-2 (order: 1) — like a student physically moving to a different seat in the row, without actually changing who's officially enrolled first."
        ]
      },

      {
        heading: "Important Points to Remember",

        points: [
          "flex-grow controls how much extra leftover space an item claims.",
          "flex-shrink: 0 prevents a specific item from shrinking when space is tight.",
          "align-self overrides the container's align-items for one specific item.",
          "order changes an item's visual position without touching the HTML structure."
        ]
      }

    ]
  },

  {
    title: "Common Flexbox Layouts",
    subtitle: "Explained Like Ready-Made Recipes",

    sections: [

      {
        heading: "Think About Using a Trusted Recipe",

        paragraphs: [
          "Instead of inventing a dish from scratch every time, cooks often rely on a handful of trusted, proven recipes for common situations. Flexbox has its own set of these 'go-to recipes' — patterns used so often that it's worth memorizing them directly."
        ]
      },

      {
        heading: "Recipe 1: Perfectly Centering Anything",

        code: `.container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}`,

        paragraphs: [
          "This is probably the single most searched CSS question ever — 'how to center a div'. These three lines together perfectly center any content both horizontally and vertically, no matter its size."
        ]
      },

      {
        heading: "Recipe 2: A Navbar with Logo on Left, Links on Right",

        code: `nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
}`,

        paragraphs: [
          "space-between pushes the logo to one end and the nav links to the other, with align-items: center keeping everything neatly aligned vertically — exactly the layout you'll see on almost every website's header."
        ]
      },

      {
        heading: "Recipe 3: A Row of Equal-Width Cards",

        code: `.card-container {
  display: flex;
  gap: 20px;
}

.card {
  flex: 1;
}`,

        paragraphs: [
          "flex: 1 on each card (a shorthand for flex-grow: 1) makes every card share the available space equally, automatically adjusting if you add or remove cards. gap adds clean spacing between them, without needing margin tricks."
        ]
      },

      {
        heading: "Recipe 4: A Sticky Footer Layout",

        code: `body {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

main {
  flex: 1;
}`,

        paragraphs: [
          "This pushes the footer to the bottom of the page even when content is short, because main: flex: 1 expands to fill any leftover vertical space, pushing whatever comes after it (the footer) down to the bottom edge."
        ]
      },

      {
        heading: "Important Points to Remember",

        points: [
          "Centering anything: justify-content + align-items, both set to center.",
          "Navbar pattern: justify-content: space-between with align-items: center.",
          "Equal-width cards: flex: 1 on each card, with gap for spacing.",
          "These patterns are worth memorizing directly — you'll use them constantly."
        ]
      }

    ]
  },

  {
    title: "Grid Intro",
    subtitle: "Explained Like a Chessboard or Graph Paper",

    sections: [

      {
        heading: "Think About a Chessboard",

        paragraphs: [
          "A chessboard has both rows and columns at the same time, forming a clear grid of squares — you can place a piece precisely at 'row 3, column 5' with no ambiguity. Flexbox, by comparison, really only thinks in one direction at a time (a single row, or a single column).",

          "CSS Grid is built specifically for this two-dimensional thinking — controlling rows and columns simultaneously, like placing pieces on a chessboard rather than just lining them up in one row."
        ]
      },

      {
        heading: "Turning On Grid",

        code: `.container {
  display: grid;
}`,

        paragraphs: [
          "Just like display: flex turned a container into a flex container, display: grid turns it into a grid container — ready to have its rows and columns explicitly defined, which we'll do in the next topic."
        ]
      },

      {
        heading: "Flexbox vs Grid — When to Use Which?",

        points: [
          "Flexbox = one-dimensional, great for a single row or column (navbars, button groups, centering)",
          "Grid = two-dimensional, great for full page layouts with both rows and columns (entire page structure, photo galleries, dashboards)",
          "Many real projects use both together — Grid for the overall page layout, Flexbox for arranging items within one specific section"
        ]
      },

      {
        heading: "A Glimpse of What's Coming",

        paragraphs: [
          "We'll properly define actual column/row sizes in the next topic — for now, just understand the core mental shift: Grid lets you think in a full two-dimensional chessboard, not just a single line of items."
        ]
      },

      {
        heading: "Important Points to Remember",

        points: [
          "display: grid turns a container into a grid container.",
          "Grid handles two dimensions (rows and columns) at once, unlike Flexbox's one dimension.",
          "Use Grid for overall page layouts; Flexbox for arranging items within a section.",
          "It's common and perfectly fine to use Grid and Flexbox together in the same project."
        ]
      }

    ]
  },

  {
    title: "Grid Template Columns & Rows",
    subtitle: "Explained Like Drawing a Seating Chart",

    sections: [

      {
        heading: "Think About Drawing a Seating Chart",

        paragraphs: [
          "Before assigning students to seats, you might first draw the actual chart — deciding there will be 3 columns of seats, with the middle column wider than the side ones, and 2 rows of a fixed height. Once that grid structure exists, you can place students into specific cells.",

          "grid-template-columns and grid-template-rows let you draw this exact structure for your webpage's layout."
        ]
      },

      {
        heading: "Defining Columns",

        code: `.container {
  display: grid;
  grid-template-columns: 200px 1fr 1fr;
}`,

        paragraphs: [
          "This creates exactly 3 columns: the first is a fixed 200px (like a fixed-width sidebar), and the remaining two share the rest of the space equally (1fr means 'one flexible share' of the leftover space, and 1fr 1fr splits it 50/50)."
        ]
      },

      {
        heading: "Understanding the fr Unit",

        paragraphs: [
          "fr stands for 'fraction' — it's Grid's own special unit representing a flexible share of available space. grid-template-columns: 1fr 2fr 1fr would create three columns where the middle one is exactly twice as wide as the other two, automatically adjusting as the page resizes."
        ]
      },

      {
        heading: "Defining Rows",

        code: `.container {
  display: grid;
  grid-template-rows: 80px 1fr 60px;
}`,

        paragraphs: [
          "Same idea, but for rows — a fixed 80px header row, a flexible middle row taking up remaining height, and a fixed 60px footer row, like a seating chart with a fixed-height stage area at front and a fixed walkway at the back."
        ]
      },

      {
        heading: "A Complete Simple Layout",

        code: `.page {
  display: grid;
  grid-template-columns: 200px 1fr;
  grid-template-rows: 80px 1fr;
}`,

        paragraphs: [
          "This single block defines an entire page skeleton: a fixed sidebar (200px wide) beside a flexible main area, with a fixed header (80px tall) above a flexible content area below it — a complete grid 'chart', ready for content to be placed into."
        ]
      },

      {
        heading: "Important Points to Remember",

        points: [
          "grid-template-columns defines the number and size of columns.",
          "grid-template-rows defines the number and size of rows.",
          "fr represents a flexible 'fraction' of available space, adjusting automatically.",
          "You can mix fixed units (px) with flexible units (fr) in the same definition."
        ]
      }

    ]
  },

  {
    title: "Grid Gap & Areas",
    subtitle: "Explained Like Tile Gutters and a Labeled Floor Plan",

    sections: [

      {
        heading: "Think About Floor Tiles",

        paragraphs: [
          "When laying floor tiles, there's usually a small gutter/gap left between each tile, rather than pushing them edge-to-edge. And a building's floor plan often labels rooms clearly — 'Kitchen', 'Bedroom', 'Hall' — so anyone can immediately understand which space serves what purpose.",

          "gap and grid-template-areas give you exactly these two things in CSS Grid — clean spacing between cells, and clearly named layout regions."
        ]
      },

      {
        heading: "gap — Spacing Between Grid Cells",

        code: `.container {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 20px;
}`,

        paragraphs: [
          "This adds a clean 20px gutter between every row and column in the grid — much simpler than manually adding margin to individual items, and it never adds extra space around the outer edges, only between cells."
        ]
      },

      {
        heading: "grid-template-areas — Naming Your Layout Regions",

        code: `.page {
  display: grid;
  grid-template-columns: 200px 1fr;
  grid-template-areas:
    "sidebar header"
    "sidebar content";
}

.sidebar { grid-area: sidebar; }
.header  { grid-area: header; }
.content { grid-area: content; }`,

        paragraphs: [
          "Each quoted row represents one row of the grid visually — here, 'sidebar' spans both rows on the left, while 'header' and 'content' stack on the right. Each element then simply states which named area it belongs to, like a room confidently announcing its own label on the floor plan, rather than you calculating exact row/column numbers."
        ]
      },

      {
        heading: "Why This Reads So Clearly",

        paragraphs: [
          "Looking at the grid-template-areas block, you can almost visually 'see' the page layout just from the quoted text shape — this is one of Grid's most readable features, especially for full-page layouts with several named sections."
        ]
      },

      {
        heading: "Important Points to Remember",

        points: [
          "gap adds clean spacing between grid cells, both rows and columns.",
          "grid-template-areas lets you name layout regions directly, in a visual, readable way.",
          "Each element is assigned to a named area using grid-area, matching the area name.",
          "This approach makes complex page layouts much easier to read at a glance."
        ]
      }

    ]
  },

  {
    title: "Units in CSS",
    subtitle: "Explained Like Different Kinds of Measuring Tools",

    sections: [

      {
        heading: "Think About Different Measuring Tools",

        paragraphs: [
          "A rigid steel ruler always measures the exact same length, no matter what you're measuring. A tailor's measuring tape, on the other hand, is used relative to a person's body — 'half of your waist size' means something different for every individual. And measuring 'half the width of this table' depends entirely on how big that specific table is.",

          "CSS units work on these exact same different philosophies — some are fixed, some are relative to text size, and some are relative to the screen itself."
        ]
      },

      {
        heading: "px — The Rigid Steel Ruler",

        code: `h1 {
  font-size: 32px;
}`,

        paragraphs: [
          "Pixels are an absolute, fixed unit — 32px is always 32px, regardless of anything else on the page. Simple and predictable, but doesn't automatically scale with anything."
        ]
      },

      {
        heading: "em and rem — The Tailor's Measuring Tape",

        code: `p {
  font-size: 1rem;
}

.note {
  font-size: 0.8em;
}`,

        points: [
          "rem — relative to the root (page-wide) font size; 1rem usually equals 16px by default",
          "em — relative to the current element's parent font size; 0.8em means '80% of the parent's font size'",
          "Both scale automatically if the base font size changes, unlike fixed px values"
        ]
      },

      {
        heading: "% — Relative to the Parent Container",

        code: `div {
  width: 50%;
}`,

        paragraphs: [
          "Just like 'half the width of this specific table' depends on the table's size, percentage values are always relative to their parent container's size, automatically adjusting if that parent resizes."
        ]
      },

      {
        heading: "vw and vh — Relative to the Screen Itself",

        code: `.banner {
  width: 100vw;
  height: 50vh;
}`,

        paragraphs: [
          "vw (viewport width) and vh (viewport height) are relative to the entire visible browser window, not any parent element — 100vw is always the full screen width, and 50vh is always half the screen height, regardless of any container."
        ]
      },

      {
        heading: "Important Points to Remember",

        points: [
          "px is a fixed, absolute unit, simple but doesn't scale.",
          "rem/em are relative to font size — rem to the root, em to the parent.",
          "% is relative to the parent container's size.",
          "vw/vh are relative to the entire visible screen, great for full-screen sections."
        ]
      }

    ]
  },

  {
    title: "Media Queries",
    subtitle: "Explained Like Changing Outfits for Different Weather",

    sections: [

      {
        heading: "Think About Dressing for the Weather",

        paragraphs: [
          "You naturally wear different clothes depending on conditions — a light shirt on a hot day, a heavy jacket on a cold one. Nobody hands you new clothes automatically; you decide your own outfit based on the current weather.",

          "Media queries let your CSS do exactly this — apply different styles depending on the 'weather conditions' of the visitor's screen, most commonly its width."
        ]
      },

      {
        heading: "The Basic Media Query Structure",

        code: `@media (max-width: 768px) {
  body {
    font-size: 14px;
  }
}`,

        paragraphs: [
          "This says: 'only on screens 768px wide or narrower (typically tablets/phones), apply this smaller font size.' On a wider desktop screen, this rule simply doesn't apply at all — like only wearing the jacket once temperature actually drops below a certain point."
        ]
      },

      {
        heading: "Common Breakpoints You'll See Often",

        points: [
          "max-width: 1024px — typically targets tablets and smaller laptops",
          "max-width: 768px — typically targets tablets in portrait mode",
          "max-width: 480px — typically targets most mobile phones",
          "These aren't fixed rules, just commonly used reference points"
        ]
      },

      {
        heading: "A Practical Example: Stacking Cards on Mobile",

        code: `.card-container {
  display: flex;
}

@media (max-width: 768px) {
  .card-container {
    flex-direction: column;
  }
}`,

        paragraphs: [
          "Cards sit side-by-side (row) normally, but on smaller screens, this media query switches them to stack vertically (column) instead — like swapping a wide, spread-out summer outfit for a more compact winter one when conditions change."
        ]
      },

      {
        heading: "Important Points to Remember",

        points: [
          "@media (max-width: Xpx) { } applies styles only when the screen is X wide or narrower.",
          "Common breakpoints target tablets (~768px) and phones (~480px), though these vary by project.",
          "Media queries override your normal styles only when their condition is true.",
          "You can write multiple media queries for different screen size ranges in the same stylesheet."
        ]
      }

    ]
  },

  {
    title: "Responsive Design Principles",
    subtitle: "Explained Like Water Adapting to Its Container",

    sections: [

      {
        heading: "Think About Pouring Water Into Different Containers",

        paragraphs: [
          "Water doesn't have a fixed shape — pour it into a tall glass, and it becomes tall and narrow; pour it into a wide bowl, and it spreads out flat and wide. It adapts naturally to whatever container holds it, without needing to be manually reshaped each time.",

          "Responsive design is this same philosophy applied to webpages — building layouts that naturally adapt to whatever screen size they're viewed on, rather than being rigidly fixed to one specific size."
        ]
      },

      {
        heading: "Principle 1: Avoid Fixed Pixel Widths for Layout",

        paragraphs: [
          "A layout fixed at exactly 1200px wide simply doesn't fit on a 375px-wide phone screen — like trying to pour a fixed-shape ice cube into a container it doesn't match. Prefer flexible units (%, fr, max-width) over rigid fixed widths for your overall layout structure."
        ]
      },

      {
        heading: "Principle 2: Mobile-First Thinking",

        paragraphs: [
          "Rather than designing for a large desktop screen first and then cramming things to fit smaller screens afterward, many developers design for the smallest screen first, then use media queries to add complexity for larger screens. It's often easier to add things for more space than to squeeze things into less."
        ]
      },

      {
        heading: "Principle 3: Combine Everything You've Learned",

        points: [
          "Flexbox/Grid — naturally flexible layouts (from earlier topics)",
          "Relative units (%, rem, vw/vh) — sizing that adapts automatically (from 'Units in CSS')",
          "Media queries — specific adjustments at specific breakpoints (from 'Media Queries')",
          "max-width — preventing content from stretching too wide on large screens (from 'Width & Height')"
        ]
      },

      {
        heading: "Don't Forget the Viewport Meta Tag",

        paragraphs: [
          "Remember the viewport meta tag from 'Meta Tags' back in the HTML course? Without it, mobile browsers often show a tiny, zoomed-out desktop version of your page — all your responsive CSS work would go unnoticed without this one line properly in place."
        ],

        code: `<meta name="viewport" content="width=device-width, initial-scale=1.0">`
      },

      {
        heading: "Important Points to Remember",

        points: [
          "Responsive design means layouts that adapt naturally to different screen sizes.",
          "Prefer flexible units and layout systems over rigid fixed pixel widths.",
          "Mobile-first design often makes scaling up easier than scaling down.",
          "The viewport meta tag is essential — without it, responsive CSS won't display correctly on mobile."
        ]
      }

    ]
  },

  {
    title: "Transitions",
    subtitle: "Explained Like a Door Closing Slowly Instead of Slamming",

    sections: [

      {
        heading: "Think About a Door with a Soft-Close Hinge",

        paragraphs: [
          "A normal door slams shut instantly the moment you let go. A door with a soft-close hinge instead eases shut smoothly over a second or two — same start, same end, but the journey between them feels noticeably smoother.",

          "Transitions in CSS add this exact smoothness — instead of a style change happening instantly (like a slammed door), it happens gradually over a set duration."
        ]
      },

      {
        heading: "Without a Transition — Instant, Abrupt Change",

        code: `button {
  background-color: darkgreen;
}

button:hover {
  background-color: lightgreen;
}`,

        paragraphs: [
          "Without anything extra, this color change happens instantly the moment the mouse touches the button — like a door slamming shut with zero smoothness."
        ]
      },

      {
        heading: "Adding the Transition",

        code: `button {
  background-color: darkgreen;
  transition: background-color 0.3s ease;
}

button:hover {
  background-color: lightgreen;
}`,

        paragraphs: [
          "Now the exact same color change happens smoothly over 0.3 seconds, instead of snapping instantly — like that soft-close hinge easing the door shut, rather than letting it slam."
        ]
      },

      {
        heading: "Breaking Down the Transition Property",

        points: [
          "background-color — which property should transition smoothly (could also be width, transform, opacity, etc.)",
          "0.3s — how long the transition takes",
          "ease — the 'pacing' of the transition (starts slightly slow, speeds up, slows down again near the end)"
        ]
      },

      {
        heading: "Transitioning Multiple Properties at Once",

        code: `.card {
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.card:hover {
  transform: scale(1.05);
  box-shadow: 0 8px 20px rgba(0,0,0,0.15);
}`,

        paragraphs: [
          "You can smooth out several properties simultaneously, separated by commas — here, both a slight zoom and a growing shadow happen together smoothly on hover, a very common 'card lift' effect."
        ]
      },

      {
        heading: "Important Points to Remember",

        points: [
          "transition makes a property change smoothly over time, instead of happening instantly.",
          "It needs a property name, a duration, and usually a pacing style (ease).",
          "Commonly paired with :hover, :focus, or other pseudo-classes for interactive smoothness.",
          "Multiple properties can be transitioned together, separated by commas."
        ]
      }

    ]
  },

  {
    title: "Transform",
    subtitle: "Explained Like Flipping, Spinning, or Resizing a Photo",

    sections: [

      {
        heading: "Think About Handling a Physical Photo",

        paragraphs: [
          "You can pick up a printed photo and move it slightly to one side, rotate it at an angle on the table, shrink it by holding it further away, or stretch it visually by tilting it — all without ever cutting or editing the photo itself, just changing how it's currently held in space.",

          "The transform property in CSS does exactly this — visually shifting, rotating, or resizing an element, without affecting the page's actual layout flow around it."
        ]
      },

      {
        heading: "translate — Moving an Element",

        code: `.box {
  transform: translate(20px, 10px);
}`,

        paragraphs: [
          "This shifts the element 20px right and 10px down from its normal position — like physically sliding the photo slightly to one side on the table, without anything else around it moving."
        ]
      },

      {
        heading: "rotate — Spinning an Element",

        code: `.icon {
  transform: rotate(45deg);
}`,

        paragraphs: [
          "This rotates the element by 45 degrees, like tilting the photo at an angle on the table — commonly used for spinning icons, or playful tilted card effects."
        ]
      },

      {
        heading: "scale — Resizing an Element",

        code: `.card:hover {
  transform: scale(1.1);
}`,

        paragraphs: [
          "1.1 means '110% of the original size' — slightly larger, like holding the photo a little closer to make it appear bigger. A value like 0.8 would shrink it instead, to 80% of its original size."
        ]
      },

      {
        heading: "Combining Multiple Transforms",

        code: `.card:hover {
  transform: scale(1.05) rotate(2deg);
}`,

        paragraphs: [
          "Just like you could simultaneously tilt and hold a photo slightly closer at the same time, multiple transform values can be combined in one line, space-separated."
        ]
      },

      {
        heading: "Why Transform Pairs So Well with Transitions",

        paragraphs: [
          "Remember 'Transitions' from the previous topic? transform changes are a perfect match for them — combining transform: scale(1.05) with a transition creates that smooth, gentle 'card lift' effect on hover, rather than an abrupt jump in size."
        ]
      },

      {
        heading: "Important Points to Remember",

        points: [
          "transform visually moves, rotates, or resizes an element, without affecting page layout flow.",
          "translate moves, rotate spins, and scale resizes the element.",
          "Multiple transform values can be combined together in one declaration.",
          "Pairs extremely well with transition for smooth, animated hover effects."
        ]
      }

    ]
  },

  {
    title: "Animations",
    subtitle: "Explained Like a Flipbook Cartoon",

    sections: [

      {
        heading: "Think About a Flipbook",

        paragraphs: [
          "A flipbook has a series of slightly different drawings on each page — flip through them quickly, and it creates the illusion of smooth movement, like a tiny cartoon. Each page is a specific 'checkpoint' in the motion, and flipping between them creates the animation.",

          "CSS animations work on this exact principle — you define specific 'checkpoint' styles at different points, and the browser smoothly fills in the motion between them, on a continuous loop if you want."
        ]
      },

      {
        heading: "Defining the Checkpoints with @keyframes",

        code: `@keyframes bounce {
  0% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-20px);
  }
  100% {
    transform: translateY(0);
  }
}`,

        paragraphs: [
          "This names an animation 'bounce', and describes three flipbook 'pages': starting at normal position (0%), moving up 20px at the halfway point (50%), then back to normal (100%) — creating a bouncing motion when played continuously."
        ]
      },

      {
        heading: "Playing the Animation on an Element",

        code: `.ball {
  animation: bounce 1s infinite;
}`,

        paragraphs: [
          "bounce refers to the @keyframes name we just defined, 1s means the full cycle takes one second, and infinite means it repeats forever, like continuously flipping through the same flipbook on a loop, never stopping."
        ]
      },

      {
        heading: "Transition vs Animation — What's the Real Difference?",

        points: [
          "transition needs a trigger (like :hover) and only moves between two states — start and end",
          "animation runs on its own automatically, and can have many checkpoints (0%, 25%, 50%, 75%, 100%), not just two",
          "Use transition for simple hover/focus effects; use animation for more complex, self-running motion"
        ]
      },

      {
        heading: "A Simple Fade-In Animation",

        code: `@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}

.card {
  animation: fadeIn 0.5s ease;
}`,

        paragraphs: [
          "from and to are simply friendlier names for 0% and 100% when you only need a simple two-point animation, gently fading an element in from invisible to fully visible."
        ]
      },

      {
        heading: "Important Points to Remember",

        points: [
          "@keyframes defines named checkpoints describing how an element should look at different points in time.",
          "The animation property plays that named keyframe sequence on an element.",
          "infinite repeats the animation forever; a specific number repeats it that many times.",
          "Unlike transitions, animations can have multiple checkpoints and run automatically, without needing a hover trigger."
        ]
      }

    ]
  },

  {
    title: "Box-shadow & Text-shadow",
    subtitle: "Explained Like Sunlight Casting a Shadow",

    sections: [

      {
        heading: "Think About Standing in Sunlight",

        paragraphs: [
          "When you stand in sunlight, your body casts a shadow on the ground — its direction and length depend on where the sun is, and how soft or harsh the shadow's edge looks depends on the light's intensity. The same object can cast very different-looking shadows depending on these conditions.",

          "box-shadow and text-shadow in CSS let you cast exactly this kind of shadow effect, behind elements and behind text, controlling direction, softness, and color."
        ]
      },

      {
        heading: "box-shadow — Shadows Behind Elements",

        code: `.card {
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
}`,

        points: [
          "0 — horizontal offset (how far left/right the shadow is cast)",
          "4px — vertical offset (how far down the shadow falls, like the sun being slightly above)",
          "12px — blur radius (how soft/spread-out the shadow's edge looks)",
          "rgba(0,0,0,0.15) — the shadow's color, here a soft, semi-transparent black"
        ]
      },

      {
        heading: "A Subtle Card Shadow — Very Commonly Used",

        paragraphs: [
          "This exact pattern — small vertical offset, decent blur, low-opacity black — is probably the single most common shadow style across modern websites, giving cards a gentle 'lifted off the page' look without being distracting."
        ]
      },

      {
        heading: "text-shadow — Shadows Behind Text",

        code: `h1 {
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
}`,

        paragraphs: [
          "Same four values, same logic, just applied to text instead of a whole box — useful for making light-colored text more readable over a busy background image, like sunlight casting just enough shadow to make the lettering stand out clearly."
        ]
      },

      {
        heading: "Multiple Shadows for a Glow Effect",

        code: `.glowing-button {
  box-shadow: 0 0 20px rgba(34, 197, 94, 0.6);
}`,

        paragraphs: [
          "With 0 0 (no offset at all) and a larger blur, the shadow spreads out evenly in every direction instead of falling to one side — creating a soft 'glow' effect, rather than a typical directional shadow."
        ]
      },

      {
        heading: "Important Points to Remember",

        points: [
          "box-shadow casts a shadow behind an entire element's box.",
          "text-shadow casts a shadow specifically behind text.",
          "Both follow the same pattern: horizontal offset, vertical offset, blur, then color.",
          "0 0 offsets with a larger blur create an even 'glow' instead of a directional shadow."
        ]
      }

    ]
  }

];