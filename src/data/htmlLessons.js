export const htmlTopics = [
"What is HTML?",
"How the Web Works",
"Setting Up Environment",
"Your First HTML Page",
"HTML File Structure",
"Headings",
"Paragraphs & Line Breaks",
"Text Formatting",
"Comments in HTML",
"HTML Attributes",
"Anchor Tags",
"Internal vs External Links",
"Images",
"Audio & Video",
"Favicon",
"Unordered Lists",
"Ordered Lists",
"Nested Lists",
"Description Lists",
"Table Structure",
"Table Attributes",
"Thead Tbody Tfoot",
"Styling Tables",
"Form Tag",
"Input Types",
"Labels & Placeholders",
"Radio & Checkboxes",
"Dropdown",
"Textarea & Buttons",
"Form Validation",
"Semantic HTML",
"Header Nav Main Footer",
"Section Article Aside",
"Figure & Figcaption",
"Time Mark Details Summary",
"New Input Types",
"Data Attributes",
"Canvas Intro",
"Iframe",
"Meta Tags",

"Accessibility",
"HTML Validation",
"File & Folder Structure"
];


export const htmlLessons = [

  {
    title: "What is HTML?",
    subtitle: "Explained with Everyday Examples",

    sections: [

      {
        heading: "Let's Start with a Simple Story",

        paragraphs: [
          "Think about your school notice board. It has a title at the top, some lines of information, maybe a photo pinned on it, and a list somewhere. Everything has its own fixed place — title on top, photo in a box, list in a column.",

          "A website is exactly like that notice board, but on a screen. HTML is the tool that tells the computer: 'put the title here, put this photo there, put this list here.' That is all HTML does — it arranges things in their proper place.",

          "HTML stands for HyperText Markup Language, but you don't need to remember that long name right now. Just remember this: HTML = the arranger of a webpage."
        ]
      },

      {
        heading: "Why Do We Even Need HTML?",

        paragraphs: [
          "Imagine a letter typed without pressing Enter even once — no titles, no separate lines, just one long block of text. Very hard to read, right?",

          "HTML breaks that messy text into proper pieces: this is a heading, this is a paragraph, this is a picture, this is a button. The browser reads these instructions and shows everything neatly on screen."
        ]
      },

      {
        heading: "Simple Comparisons to Remember This",

        points: [
          "Building a house — first walls and rooms come up (structure), paint happens later. HTML is the walls and rooms.",
          "Writing an exam answer — first you write points in proper order (structure), highlighting comes later. HTML is the proper order.",
          "A school timetable — rows and columns in a fixed place. That fixed arrangement is what HTML gives a webpage."
        ]
      },

      {
        heading: "You Already See HTML Every Single Day",

        points: [
          "YouTube — video title, description, comments box — each placed using HTML.",
          "Instagram — profile picture in one place, posts arranged in a grid below — done with HTML.",
          "Swiggy — restaurant name, food photo, price, 'Add' button, each in its own spot — done with HTML."
        ]
      },

      {
        heading: "A Tiny Bit of History (Just for Fun)",

        points: [
          "1989 → Tim Berners-Lee had the idea of the World Wide Web.",
          "1991 → The very first version of HTML came out, with only 18 simple tags.",
          "1995–1999 → Tables, forms and images were added.",
          "2014 → HTML5 — the version we use today — became standard."
        ]
      },

      {
        heading: "Let's See HTML in Action",

        paragraphs: [
          "Don't worry about understanding every word below yet — just notice how it looks like a structured note, with clear sections, similar to the notice board example."
        ],

        code: `<!DOCTYPE html>
<html>
  <head>
    <title>My First Page</title>
  </head>

  <body>
    <h1>Hello, World!</h1>
    <p>This is my first webpage.</p>
  </body>
</html>`
      },

      {
        heading: "What Would You See in the Browser?",

        paragraphs: [
          'Just a page with a big heading "Hello, World!" and one line below it. That\'s it — that is HTML doing its job.'
        ]
      },

      {
        heading: "Important Points to Remember",

        points: [
          "HTML arranges things on a webpage, like a notice board arranges information.",
          "HTML is not a programming language — it doesn't calculate or make decisions, it just structures.",
          "Every website you use daily is built using HTML underneath.",
          "HTML works together with CSS (for colors/design) and JavaScript (for actions)."
        ]
      }

    ]
  },

  {
    title: "How the Web Works",
    subtitle: "Explained Using a Food Delivery Story",

    sections: [

      {
        heading: "Let's Start with a Food Order",

        paragraphs: [
          "Think about ordering food on Swiggy. You open the app, pick a restaurant, and tap 'Order'. A little while later, food reaches your door. Have you ever thought about what happens in between?",

          "Opening a website works in a surprisingly similar way — let's break it down step by step."
        ]
      },

      {
        heading: "Meet the Two Main Characters",

        paragraphs: [
          "Client is you — your phone or laptop, the one asking for something.",
          "Server is the restaurant kitchen — a powerful computer sitting far away, with everything ready, waiting for someone to ask for it."
        ],

        points: [
          "You = the hungry customer",
          "Browser = the waiter who takes your order to the kitchen",
          "Server = the kitchen that prepares everything",
          "Webpage data = the food that gets delivered back to your table"
        ]
      },

      {
        heading: "Step by Step: What Really Happens",

        points: [
          "Step 1 → You type an address like swiggy.com — like telling the waiter which restaurant you want.",
          "Step 2 → The browser finds the exact location of that restaurant. This step is called DNS.",
          "Step 3 → The browser sends your order to the kitchen. This is called a Request.",
          "Step 4 → The kitchen (server) prepares everything and sends it back. This is called a Response.",
          "Step 5 → The browser receives everything and serves it neatly on your screen — your food has arrived!"
        ]
      },

      {
        heading: "New Words, Explained Simply",

        points: [
          "URL — the address you type, like a restaurant's name (e.g. youtube.com)",
          "IP Address — the exact location of that restaurant, in numbers",
          "DNS — the guide that converts a restaurant's name into its exact location",
          "Request — what you ask for",
          "Response — what you get back"
        ]
      },

      {
        heading: "Important Points to Remember",

        points: [
          "Every website visit is just an order being placed and a response being delivered.",
          "Your browser is the waiter, not the kitchen — it doesn't cook, it just asks and delivers.",
          "All of this — order, cooking, delivery — usually happens in less than one second."
        ]
      }

    ]
  },

  {
    title: "Setting Up Environment",
    subtitle: "Getting Your Tools Ready, Like Setting Up a Kitchen",

    sections: [

      {
        heading: "Think of It Like Cooking",

        paragraphs: [
          "Before cooking even a simple dish, you need a kitchen and a couple of basic tools — you don't need a fancy 5-star kitchen for a simple meal at home.",

          "Same way, before writing HTML, you just need two simple things: somewhere to write code, and something to see the result. Nothing fancy, nothing paid."
        ]
      },

      {
        heading: "Tool 1: A Place to Write Code",

        paragraphs: [
          "We use Visual Studio Code (VS Code) — free, simple, and used by developers everywhere, including at real companies."
        ],

        points: [
          "Go to code.visualstudio.com",
          "Download the version for your computer (Windows/Mac/Linux)",
          "Install it like any normal app"
        ]
      },

      {
        heading: "Tool 2: A Helper That Saves Your Time",

        paragraphs: [
          "Imagine writing something on paper, and every time you change one word, someone automatically reads it out loud again for you, without you asking. That's exactly what the 'Live Server' extension does for your webpage — it refreshes the browser automatically every time you save."
        ],

        points: [
          "Open VS Code",
          "Click the Extensions icon on the left (4 small squares)",
          "Search for 'Live Server' by Ritwick Dey",
          "Click Install"
        ]
      },

      {
        heading: "Setting Up Your Workspace",

        points: [
          "Create one folder on your computer for this project — for example, 'my-first-website'",
          "Open that folder in VS Code (File → Open Folder)",
          "Create a new file inside it, name it index.html",
          "Right-click the file → 'Open with Live Server' — your page opens in the browser automatically"
        ]
      },

      {
        heading: "Important Points to Remember",

        points: [
          "You only need a code editor and a browser to start writing HTML — nothing else.",
          "VS Code is free and beginner-friendly.",
          "Live Server saves time by refreshing automatically, so you don't have to do it manually.",
          "Keep your project files in one organized folder from day one."
        ]
      }

    ]
  },

  {
    title: "Your First HTML Page",
    subtitle: "Explained Like Writing a Formal Letter",

    sections: [

      {
        heading: "Think About Writing a Formal Letter",

        paragraphs: [
          "When you write a formal letter — say, a leave letter to your college — it always has a fixed structure: address at the top, a greeting, the actual message in the middle, and a signature at the end. You don't randomly scatter these parts; they always appear in the same order.",

          "An HTML page works exactly the same way. It always has a few fixed parts, in a fixed order, no matter what website you're building."
        ]
      },

      {
        heading: "The Fixed Parts Every HTML Page Has",

        points: [
          "DOCTYPE — tells the browser 'this is a modern HTML page', like writing the date at the top of a letter",
          "<html> — the outer cover of the whole letter, everything goes inside this",
          "<head> — information about the page that isn't shown directly, like the letter's reference number",
          "<body> — the actual message, everything the reader actually sees"
        ]
      },

      {
        heading: "Let's Write Your First Page",

        paragraphs: [
          "Open the index.html file you created in the last topic, and type this exactly as shown:"
        ],

        code: `<!DOCTYPE html>
<html>
  <head>
    <title>My First Page</title>
  </head>

  <body>
    <h1>Hello, World!</h1>
    <p>This is my first webpage.</p>
  </body>
</html>`
      },

      {
        heading: "Breaking Down Each Line",

        points: [
          "<!DOCTYPE html> — always the very first line, never skip it",
          "<title>My First Page</title> — this text shows up on the browser tab, not on the page itself",
          "<h1>Hello, World!</h1> — a big bold heading, visible on the actual page",
          "<p>This is my first webpage.</p> — a normal paragraph of text"
        ]
      },

      {
        heading: "Try It Yourself",

        paragraphs: [
          "Save the file (Ctrl + S), then right-click anywhere inside it and choose 'Open with Live Server'. Your browser should open automatically and show 'Hello, World!' on the screen — that's your first webpage, live and running."
        ]
      },

      {
        heading: "Important Points to Remember",

        points: [
          "Every HTML page starts with <!DOCTYPE html>.",
          "<head> holds information about the page; <body> holds what the visitor actually sees.",
          "The <title> tag controls the browser tab text, not the page content.",
          "Tags usually come in pairs — an opening tag and a closing tag."
        ]
      }

    ]
  },

  {
    title: "HTML File Structure",
    subtitle: "Explained Like a Building's Reception and Floors",

    sections: [

      {
        heading: "Think About Walking into an Office Building",

        paragraphs: [
          "When you enter a big office building, there's a reception desk near the entrance — it has the building's name, some notices, security details. Visitors don't usually spend time there; it just holds information.",

          "Then there are the actual floors — where people work, meet, and do everything visible and useful. Visitors go straight to these floors for their actual purpose.",

          "An HTML page is built exactly like this: the <head> is the reception desk, and the <body> is the floors where everything actually happens."
        ]
      },

      {
        heading: "The Skeleton Every Page Follows",

        points: [
          "<!DOCTYPE html> — the building's permit, confirming it follows modern rules",
          "<html> ... </html> — the entire building, everything is inside this",
          "<head> ... </head> — the reception desk, holds info but isn't the main attraction",
          "<body> ... </body> — the floors, where all visible content lives"
        ]
      },

      {
        heading: "Inside the <head> — The Reception Desk",

        paragraphs: [
          "Visitors don't see what's written at reception directly on a floor, but it still matters. Similarly, things inside <head> don't show up on the webpage itself, but they matter for the browser and search engines."
        ],

        points: [
          "<title> — sets the browser tab text",
          "<meta charset='UTF-8'> — tells the browser which character set to use, so text displays correctly",
          "<link> — connects a CSS file (for styling) later on"
        ]
      },

      {
        heading: "Inside the <body> — Where Visitors Actually Go",

        paragraphs: [
          "Everything a visitor actually sees on a webpage — headings, paragraphs, images, buttons, lists — all of it lives inside <body>. This is where almost all of your work as a developer happens."
        ]
      },

      {
        heading: "Nesting — Boxes Inside Boxes",

        paragraphs: [
          "Think of gift boxes — a big box can have smaller boxes inside it, and those smaller boxes can have even smaller ones inside. HTML tags work the same way; one tag can sit comfortably inside another.",

          "That's why <head> and <body> sit inside <html>, just like floors sit inside a building. We indent (add space before) inner tags only to make this nesting easy to read — the browser doesn't care about the spacing, but your eyes will thank you."
        ]
      },

      {
        heading: "Important Points to Remember",

        points: [
          "Every page follows the same skeleton: DOCTYPE, html, head, body.",
          "<head> contains information, not visible content.",
          "<body> contains everything the visitor actually sees.",
          "Indentation makes nested tags easier to read for humans, not the browser."
        ]
      }

    ]
  },

  {
    title: "Headings",
    subtitle: "Explained Like Newspaper Headlines",

    sections: [

      {
        heading: "Think About a Newspaper",

        paragraphs: [
          "Open any newspaper and look at the front page. The biggest, boldest text is the main headline. Below it, smaller headings introduce each section — sports, business, entertainment. Inside each section, even smaller sub-headings break things down further.",

          "This size difference isn't random — it tells the reader what's most important at a glance. HTML headings work on the exact same idea."
        ]
      },

      {
        heading: "Meet the Six Heading Tags",

        points: [
          "<h1> — the biggest, used for the main title of the page (use only once per page, like a newspaper's main headline)",
          "<h2> — for major sections",
          "<h3> — for sub-sections inside an <h2>",
          "<h4>, <h5>, <h6> — for even smaller, more specific sub-points, used less often"
        ]
      },

      {
        heading: "Let's See Them in Action",

        code: `<h1>Main Page Title</h1>
<h2>A Major Section</h2>
<h3>A Sub-Section Inside It</h3>
<h4>An Even Smaller Point</h4>`
      },

      {
        heading: "Why Not Just Use <h1> for Everything?",

        paragraphs: [
          "Imagine a newspaper where every single line — the main headline and every small caption — was printed in the exact same giant bold font. It would look messy, and readers wouldn't know what's actually important.",

          "Headings also help screen readers (used by visually impaired users) and search engines like Google understand the structure of your page. Using the right heading level isn't just about looks — it makes your page genuinely easier to understand."
        ]
      },

      {
        heading: "Real-Life Example: A Blog Post",

        points: [
          "<h1> → 'Top 10 Places to Visit in Hyderabad' (the main title)",
          "<h2> → 'Charminar' (a major section/place)",
          "<h3> → 'Best Time to Visit' (a sub-point inside that section)",
          "<h2> → 'Golconda Fort' (the next major section)"
        ]
      },

      {
        heading: "Important Points to Remember",

        points: [
          "Use <h1> only once per page, for the main title.",
          "Headings go from <h1> (biggest/most important) to <h6> (smallest).",
          "Don't choose a heading just because of its size — choose it based on its importance in the structure.",
          "Proper headings help both readers and search engines understand your page better."
        ]
      }

    ]
  },

  {
    title: "Paragraphs & Line Breaks",
    subtitle: "Explained Like Writing a Diary",

    sections: [

      {
        heading: "Think About Writing a Diary Entry",

        paragraphs: [
          "When you write in a diary, you don't cram everything into one giant line. You write one thought, leave a little gap, then start the next thought. Each gap gives the reader's eyes a chance to rest before the next idea begins.",

          "HTML paragraphs work exactly like this. Each <p> tag is one 'thought block' — the browser automatically adds space before and after it, just like the gap between your diary entries."
        ]
      },

      {
        heading: "The Paragraph Tag",

        code: `<p>This is the first thought.</p>
<p>This is a completely separate thought.</p>`,

        paragraphs: [
          "Notice how each sentence is wrapped in its own <p> tag. The browser will automatically display these as two separate blocks, with space between them — you don't need to manually add that spacing."
        ]
      },

      {
        heading: "What About a Smaller Gap — Like a New Line, Not a New Topic?",

        paragraphs: [
          "Sometimes you don't want a whole new paragraph — you just want to move to the next line, like writing an address: house number on one line, area on the next, city on the next, but all still part of the same thought.",

          "For this, we use <br>, short for 'line break'. It doesn't start a new paragraph — it just pushes the next bit of text to a new line, within the same block."
        ],

        code: `<p>
  123 Main Street<br>
  Hyderabad<br>
  Telangana
</p>`
      },

      {
        heading: "Paragraph vs Line Break — Quick Comparison",

        points: [
          "<p> = starting a new diary entry, with breathing space before and after",
          "<br> = just moving to the next line within the same entry, no breathing space",
          "<p> is for separate ideas; <br> is for formatting within the same idea (like an address or a poem line)"
        ]
      },

      {
        heading: "Important Points to Remember",

        points: [
          "<p> creates a new paragraph with automatic spacing before and after.",
          "<br> simply breaks to a new line, without starting a new paragraph.",
          "Don't use multiple <br> tags just to create spacing — that's what <p> and CSS are for.",
          "Use <br> sparingly — mainly for addresses, poems, or short line-by-line content."
        ]
      }

    ]
  },

  {
    title: "Text Formatting",
    subtitle: "Explained Like Highlighting a Textbook",

    sections: [

      {
        heading: "Think About Studying from a Textbook",

        paragraphs: [
          "When you study, you don't just read plain text — you highlight important words in yellow, underline key terms, and sometimes write something in italics to show it's a side note or a foreign word. These visual cues help your eyes quickly spot what matters.",

          "HTML gives you similar tools to mark up text — except instead of a highlighter pen, you use tags."
        ]
      },

      {
        heading: "The Main Formatting Tags",

        points: [
          "<b> — makes text bold, like underlining an important word with a thick pen",
          "<strong> — also makes text bold, but additionally tells the browser 'this word is genuinely important' (better for accessibility)",
          "<i> — makes text italic, like writing a foreign word or a side thought",
          "<em> — also makes text italic, but tells the browser 'this word should be emphasized when read aloud'",
          "<u> — underlines text, like underlining a date or a name",
          "<mark> — highlights text with a yellow background, exactly like a highlighter pen",
          "<small> — makes text smaller, like the fine print at the bottom of a notice"
        ]
      },

      {
        heading: "Seeing Them in Action",

        code: `<p><b>Bold text</b> looks like this.</p>
<p><i>Italic text</i> looks like this.</p>
<p><u>Underlined text</u> looks like this.</p>
<p><mark>Highlighted text</mark> looks like this.</p>
<p><small>Small text</small> looks like this.</p>`
      },

      {
        heading: "Bold vs Strong — What's the Real Difference?",

        paragraphs: [
          "Visually, <b> and <strong> look exactly the same — both make text bold. But <strong> also tells screen readers (used by visually impaired users) that this word is important enough to be read with emphasis. <b> is purely visual, with no extra meaning attached.",

          "Same logic applies to <i> vs <em> — they look identical, but <em> carries extra meaning for accessibility tools. As a habit, prefer <strong> and <em> over plain <b> and <i> when the text is genuinely important."
        ]
      },

      {
        heading: "Important Points to Remember",

        points: [
          "Use these tags to show emphasis, not just for visual decoration.",
          "<strong> and <em> carry meaning for accessibility tools; <b> and <i> are purely visual.",
          "<mark> is great for highlighting search results or key terms.",
          "Don't overuse formatting — too much bold/highlighted text defeats the purpose of standing out."
        ]
      }

    ]
  },

  {
    title: "Comments in HTML",
    subtitle: "Explained Like Sticky Notes for Yourself",

    sections: [

      {
        heading: "Think About Sticky Notes on Your Study Notes",

        paragraphs: [
          "While studying, you sometimes stick a small note on a page that says 'revise this again before exam' or 'this part is tricky, ask teacher.' This note isn't part of the actual lesson — it's a reminder just for you. Nobody grading your notebook reads it as part of your answer.",

          "HTML comments work exactly like this — they're notes for you (or other developers) inside the code, but the browser completely ignores them when showing the page to visitors."
        ]
      },

      {
        heading: "How to Write a Comment",

        code: `<!-- This is a comment, the browser will not show this -->
<p>This is visible text.</p>

<!-- TODO: Add an image here later -->`
      },

      {
        heading: "Why Bother Writing Comments?",

        points: [
          "To remind yourself why you wrote something a certain way",
          "To leave a note for teammates working on the same code",
          "To temporarily 'switch off' a piece of code without deleting it, just by wrapping it in a comment",
          "To organize a long file into clear sections, like labelling chapters in a notebook"
        ]
      },

      {
        heading: "Example: Organizing a Page with Comments",

        code: `<!-- Header Section -->
<h1>My Website</h1>

<!-- Main Content Section -->
<p>Welcome to my page!</p>

<!-- Footer Section -->
<p>Contact us at: example@email.com</p>`
      },

      {
        heading: "Important Points to Remember",

        points: [
          "Comments start with <!-- and end with -->.",
          "Anything inside a comment is completely invisible to website visitors.",
          "Comments are great for leaving notes, organizing code, or temporarily disabling a section.",
          "Don't write sensitive information inside comments — anyone can view a page's source code and read them."
        ]
      }

    ]
  },

  {
    title: "HTML Attributes",
    subtitle: "Explained Like Extra Details on a Business Card",

    sections: [

      {
        heading: "Think About Introducing Yourself",

        paragraphs: [
          "When you meet someone, you say your name — that's the basic information. But a business card gives extra details too: your phone number, your designation, your company. The name is the main thing, but the extra details make it more useful and specific.",

          "HTML tags work the same way. A tag like <img> or <a> tells the browser what kind of element it is, but attributes give extra details — which image to show, where a link should go, and so on."
        ]
      },

      {
        heading: "What Does an Attribute Look Like?",

        code: `<a href="https://google.com">Visit Google</a>`,

        paragraphs: [
          "Here, <a> is the tag (it means 'this is a link'). href is the attribute, and 'https://google.com' is its value — the extra detail telling the browser exactly where this link should take you."
        ]
      },

      {
        heading: "Attribute Rules — Simple and Fixed",

        points: [
          "Attributes always go inside the opening tag, never the closing tag.",
          "They follow the pattern: name=\"value\" — name first, then an equal sign, then the value in quotes.",
          "A tag can have multiple attributes, just separated by spaces.",
          "Attribute values are almost always written inside double quotes."
        ]
      },

      {
        heading: "Common Attributes You'll See Everywhere",

        points: [
          "href — used in <a> tags, tells the browser where a link should go",
          "src — used in <img> tags, tells the browser which image file to load",
          "alt — used in <img> tags, a text description shown if the image fails to load",
          "id — gives one specific element a unique name, like a roll number",
          "class — groups multiple elements together, like a section name, mainly used for styling",
          "style — adds quick CSS styling directly on the tag"
        ]
      },

      {
        heading: "A Tag with Multiple Attributes",

        code: `<img src="dog.jpg" alt="A brown dog" width="300">`,

        paragraphs: [
          "This one <img> tag has three attributes — src (which image), alt (backup description), and width (how wide it should appear). Each attribute adds one more useful detail."
        ]
      },

      {
        heading: "Important Points to Remember",

        points: [
          "Attributes always appear inside the opening tag.",
          "They follow the name=\"value\" pattern, with values in quotes.",
          "Different tags support different attributes — <img> uses src/alt, <a> uses href.",
          "A single tag can carry several attributes at once, separated by spaces."
        ]
      }

    ]
  },

  {
    title: "Anchor Tags",
    subtitle: "Explained Like a Signboard Pointing the Way",

    sections: [

      {
        heading: "Think About a Signboard on the Road",

        paragraphs: [
          "When you're driving and see a signboard saying 'Hyderabad Airport →', you know exactly where to go if you follow it. The signboard itself isn't the airport — it's just pointing you toward it.",

          "An anchor tag in HTML works exactly like that signboard. The text you click on isn't the destination itself — it's a pointer that takes you there."
        ]
      },

      {
        heading: "The Anchor Tag",

        code: `<a href="https://youtube.com">Go to YouTube</a>`,

        paragraphs: [
          "<a> stands for 'anchor'. The text between the opening and closing tag ('Go to YouTube') is what the visitor actually sees and clicks. The href attribute holds the actual destination — just like the signboard's text is different from the actual airport."
        ]
      },

      {
        heading: "Opening Links in a New Tab",

        paragraphs: [
          "Sometimes you want the link to open in a new tab, instead of taking the visitor away from your current page completely. For this, add the target=\"_blank\" attribute."
        ],

        code: `<a href="https://youtube.com" target="_blank">Go to YouTube</a>`
      },

      {
        heading: "Making an Image Clickable",

        paragraphs: [
          "You're not limited to clickable text — you can wrap an image inside an anchor tag too, making the whole image act as a signboard/link."
        ],

        code: `<a href="https://youtube.com">
  <img src="youtube-logo.png" alt="YouTube logo">
</a>`
      },

      {
        heading: "Important Points to Remember",

        points: [
          "<a> creates a clickable link; href holds the destination address.",
          "The text between <a> and </a> is what the visitor sees and clicks.",
          "target=\"_blank\" opens the link in a new browser tab.",
          "Images, not just text, can be made clickable using anchor tags."
        ]
      }

    ]
  },

  {
    title: "Internal vs External Links",
    subtitle: "Explained Like Visiting Your Own House vs a Friend's House",

    sections: [

      {
        heading: "Think About Moving Around",

        paragraphs: [
          "Walking from your bedroom to your kitchen is easy — you're still in your own house, just moving between rooms. But visiting your friend's house is different — you're leaving your house entirely and going somewhere else.",

          "Links on a website work the same way. Some links move you between pages of the same website (your own house). Other links take you to a completely different website (your friend's house)."
        ]
      },

      {
        heading: "Internal Links — Staying Within the Same Website",

        paragraphs: [
          "An internal link points to another page on your own website. Since it's your own house, you don't need the full address every time — just the relative path is enough."
        ],

        code: `<a href="about.html">About Us</a>
<a href="contact.html">Contact</a>`
      },

      {
        heading: "External Links — Going to a Different Website",

        paragraphs: [
          "An external link points to a completely different website. Since it's not your house, you need the full, complete address (URL), starting with https://."
        ],

        code: `<a href="https://instagram.com">Follow us on Instagram</a>`
      },

      {
        heading: "Quick Comparison",

        points: [
          "Internal link = moving to another room in your own house (another page, same website)",
          "External link = visiting a friend's house (a completely different website)",
          "Internal links usually use short, relative paths (about.html)",
          "External links always need the full address (https://...)"
        ]
      },

      {
        heading: "Bonus: Jumping Within the Same Page",

        paragraphs: [
          "Sometimes you just want to jump to a specific section on the same page — like jumping straight to a particular paragraph in a long chapter. This uses a special # link, called an anchor link."
        ],

        code: `<a href="#contact-section">Jump to Contact Section</a>

<h2 id="contact-section">Contact Us</h2>`
      },

      {
        heading: "Important Points to Remember",

        points: [
          "Internal links connect pages within the same website.",
          "External links connect to entirely different websites and need the full URL.",
          "Relative paths (about.html) are used for internal links; full URLs for external ones.",
          "A # link with a matching id jumps to a specific section on the same page."
        ]
      }

    ]
  },

  {
    title: "Images",
    subtitle: "Explained Like Pasting Photos in a Scrapbook",

    sections: [

      {
        heading: "Think About Making a Scrapbook",

        paragraphs: [
          "When you paste a photo into a scrapbook, you need the actual photo, and you decide how big or small it should look on the page. If a photo somehow doesn't print well, you might write a small caption below describing what it was supposed to show.",

          "Adding an image in HTML works exactly the same way — you point to the actual image file, control its size, and provide backup text in case it doesn't load."
        ]
      },

      {
        heading: "The Image Tag",

        code: `<img src="dog.jpg" alt="A brown dog sitting on grass">`,

        paragraphs: [
          "Unlike most tags, <img> doesn't need a closing tag — it's a self-closing tag, since an image doesn't wrap around any text content."
        ]
      },

      {
        heading: "The Two Most Important Attributes",

        points: [
          "src (source) — the actual path to your image file, just like the real photo you're pasting",
          "alt (alternative text) — a text description shown if the image fails to load, exactly like a caption explaining what should have been there"
        ]
      },

      {
        heading: "Controlling the Size",

        paragraphs: [
          "Just like deciding how big a photo should look in your scrapbook, you can control an image's size using width and height attributes (values in pixels)."
        ],

        code: `<img src="dog.jpg" alt="A brown dog" width="400" height="300">`
      },

      {
        heading: "Where Can Images Come From?",

        points: [
          "From your own computer/project folder — e.g. src=\"images/dog.jpg\"",
          "From the internet — e.g. src=\"https://example.com/dog.jpg\""
        ]
      },

      {
        heading: "Why is 'alt' So Important?",

        paragraphs: [
          "If your image file is missing, named incorrectly, or fails to load due to a slow connection, the alt text shows up instead — so the visitor still understands what was supposed to be there. It's also read aloud by screen readers for visually impaired users, making your website more accessible."
        ]
      },

      {
        heading: "Important Points to Remember",

        points: [
          "<img> is self-closing — it never needs a closing tag.",
          "src points to the actual image file; alt provides backup text.",
          "width and height control how big the image appears.",
          "Always write a meaningful alt description, not just leave it empty."
        ]
      }

    ]
  },

  {
    title: "Audio & Video",
    subtitle: "Explained Like a TV and Radio in Your Room",

    sections: [

      {
        heading: "Think About Your TV Remote",

        paragraphs: [
          "When you watch a video on TV, you have a play/pause button, a volume control, and you can skip ahead. You didn't have to ask anyone to build these controls — they just come built into the TV.",

          "HTML gives you something similar with <video> and <audio> tags — add a built-in remote (controls) without writing a single line of extra logic."
        ]
      },

      {
        heading: "Adding a Video",

        code: `<video src="movie.mp4" controls width="500">
</video>`,

        paragraphs: [
          "src points to your video file, just like loading a CD into a player. The controls attribute adds the play/pause/volume remote automatically — without it, visitors would have no way to play the video at all."
        ]
      },

      {
        heading: "Adding Audio",

        code: `<audio src="song.mp3" controls>
</audio>`,

        paragraphs: [
          "Same idea as video, but only sound — no screen, just a small audio player with play/pause and a volume slider, like a small radio sitting in your room."
        ]
      },

      {
        heading: "Useful Extra Attributes",

        points: [
          "autoplay — starts playing automatically when the page loads (use carefully, can be annoying to visitors)",
          "loop — replays automatically once it finishes, like a song stuck on repeat",
          "muted — starts with no sound, until the visitor turns it on"
        ]
      },

      {
        heading: "What If the Browser Can't Play the File?",

        paragraphs: [
          "Some older browsers might not support a video/audio format. As a backup, you can add a simple message inside the tags — it only shows up if the browser can't play the file at all."
        ],

        code: `<video src="movie.mp4" controls>
  Your browser does not support video playback.
</video>`
      },

      {
        heading: "Important Points to Remember",

        points: [
          "controls adds the play/pause/volume remote — almost always needed.",
          "autoplay should be used carefully, as it can surprise or annoy visitors.",
          "loop replays the file automatically once it ends.",
          "Always provide a fallback message in case the browser can't play the file."
        ]
      }

    ]
  },

  {
    title: "Favicon",
    subtitle: "Explained Like a Shop's Nameboard Logo",

    sections: [

      {
        heading: "Think About Walking Past a Row of Shops",

        paragraphs: [
          "Even from far away, you can recognize a Swiggy or Zomato delivery person, or a particular brand's shop, just by spotting their small logo. You don't need to read the full name — the tiny icon itself is enough to recognize it instantly.",

          "A favicon is that exact same tiny recognizable icon, but for a website — it's the small image you see in the browser tab, next to the page title."
        ]
      },

      {
        heading: "Adding a Favicon",

        code: `<head>
  <link rel="icon" type="image/png" href="favicon.png">
</head>`,

        paragraphs: [
          "This goes inside the <head> section, since it's information about the page, not visible content on the page itself — just like we learned in 'HTML File Structure'."
        ]
      },

      {
        heading: "Why Bother Adding One?",

        points: [
          "Helps visitors instantly recognize your site among many open browser tabs",
          "Makes your website look more complete and professional",
          "Shows up when someone bookmarks your page",
          "Without one, browsers usually show a plain, generic blank icon"
        ]
      },

      {
        heading: "A Quick Practical Tip",

        paragraphs: [
          "Favicons are usually small square images (like 32x32 or 16x16 pixels) in .png or .ico format. You can create a simple one using any image editing tool, or even free online favicon generators."
        ]
      },

      {
        heading: "Important Points to Remember",

        points: [
          "A favicon is the small icon shown in the browser tab.",
          "It's added inside <head> using the <link> tag.",
          "Favicons are typically small square images (.png or .ico).",
          "It's a small detail, but makes a website feel polished and complete."
        ]
      }

    ]
  },

  {
    title: "Unordered Lists",
    subtitle: "Explained Like a Shopping List",

    sections: [

      {
        heading: "Think About Writing a Shopping List",

        paragraphs: [
          "When you jot down a shopping list — milk, bread, eggs, sugar — the order usually doesn't matter. You could buy sugar before milk, and it wouldn't change anything. Each item just gets a bullet point, simply to separate it from the others.",

          "An unordered list in HTML works exactly like this — a list where order doesn't matter, and each item just gets a bullet point."
        ]
      },

      {
        heading: "The Unordered List Tags",

        code: `<ul>
  <li>Milk</li>
  <li>Bread</li>
  <li>Eggs</li>
</ul>`,

        paragraphs: [
          "<ul> means 'unordered list' — it's the container, the entire shopping list. Each <li> ('list item') is one item on that list, and the browser automatically adds a bullet point before it."
        ]
      },

      {
        heading: "What It Looks Like on the Page",

        points: [
          "Milk",
          "Bread",
          "Eggs"
        ]
      },

      {
        heading: "Where You'd Actually Use This",

        points: [
          "A list of features on a product page",
          "A list of ingredients in a recipe",
          "Navigation menu items on a website (often styled to look like a menu bar, not bullets)"
        ]
      },

      {
        heading: "Important Points to Remember",

        points: [
          "<ul> is the container; <li> is each individual item inside it.",
          "Use <ul> when the order of items genuinely doesn't matter.",
          "Browsers automatically add bullet points — you don't need to type them yourself.",
          "Every <li> must be inside a <ul> (or <ol>), never on its own."
        ]
      }

    ]
  },

  {
    title: "Ordered Lists",
    subtitle: "Explained Like Following a Recipe",

    sections: [

      {
        heading: "Think About Following a Recipe",

        paragraphs: [
          "A recipe says: Step 1, boil water. Step 2, add pasta. Step 3, drain it. If you swap step 2 and step 3, you'd be draining empty water — the order genuinely matters here.",

          "An ordered list in HTML is for exactly this situation — when the sequence matters, and skipping or reordering steps would actually cause a problem."
        ]
      },

      {
        heading: "The Ordered List Tags",

        code: `<ol>
  <li>Boil water</li>
  <li>Add pasta</li>
  <li>Drain after 10 minutes</li>
</ol>`,

        paragraphs: [
          "<ol> means 'ordered list' — same idea as <ul>, but the browser automatically numbers each item (1, 2, 3...) instead of adding bullet points, because the sequence matters here."
        ]
      },

      {
        heading: "What It Looks Like on the Page",

        points: [
          "1. Boil water",
          "2. Add pasta",
          "3. Drain after 10 minutes"
        ]
      },

      {
        heading: "Controlling the Starting Number",

        paragraphs: [
          "Sometimes you want a list to start counting from a number other than 1 — for example, continuing a numbered list after some other content in between. The start attribute handles this."
        ],

        code: `<ol start="5">
  <li>Step five</li>
  <li>Step six</li>
</ol>`
      },

      {
        heading: "Ordered vs Unordered — Quick Comparison",

        points: [
          "<ul> = shopping list, order doesn't matter, gets bullet points",
          "<ol> = recipe steps, order matters, gets automatic numbers",
          "Both use <li> for individual items — only the container tag changes"
        ]
      },

      {
        heading: "Important Points to Remember",

        points: [
          "Use <ol> only when the sequence genuinely matters.",
          "Numbers are added automatically by the browser, not typed manually.",
          "The start attribute lets a numbered list begin from a specific number.",
          "<li> is shared between <ul> and <ol> — only the outer container differs."
        ]
      }

    ]
  },

  {
    title: "Nested Lists",
    subtitle: "Explained Like a College Syllabus",

    sections: [

      {
        heading: "Think About a Syllabus Booklet",

        paragraphs: [
          "A syllabus usually has Unit 1, Unit 2, Unit 3 as main topics. But under Unit 1, there are smaller sub-topics — like 1.1, 1.2, 1.3. Each main unit can have its own little list of sub-topics tucked inside it.",

          "A nested list in HTML is exactly this — one list (<ul> or <ol>) placed inside an <li> of another list, creating that same 'main topic with sub-topics underneath' structure."
        ]
      },

      {
        heading: "Building a Nested List",

        code: `<ul>
  <li>Unit 1: HTML Basics
    <ul>
      <li>What is HTML?</li>
      <li>Tags and Attributes</li>
    </ul>
  </li>

  <li>Unit 2: CSS Basics
    <ul>
      <li>Selectors</li>
      <li>Box Model</li>
    </ul>
  </li>
</ul>`,

        paragraphs: [
          "Notice how the inner <ul> sits inside an <li>, not outside it. This is the key rule — a nested list must be placed inside the parent item it belongs to, just like a sub-topic belongs inside its unit, not floating separately."
        ]
      },

      {
        heading: "Mixing Ordered and Unordered",

        paragraphs: [
          "You're not limited to nesting the same type of list — you can mix them, just like a syllabus might have numbered units but bullet-pointed topics inside each one."
        ],

        code: `<ol>
  <li>Unit 1
    <ul>
      <li>Sub-topic A</li>
      <li>Sub-topic B</li>
    </ul>
  </li>
</ol>`
      },

      {
        heading: "Important Points to Remember",

        points: [
          "A nested list is placed inside an <li>, not directly inside the outer <ul>/<ol>.",
          "You can nest <ul> inside <ol>, or <ol> inside <ul>, depending on what fits.",
          "Indentation in your code makes nested lists much easier to read and debug.",
          "There's no real limit to nesting depth, but keep it readable — usually 2-3 levels is enough."
        ]
      }

    ]
  },

  {
    title: "Description Lists",
    subtitle: "Explained Like a Dictionary",

    sections: [

      {
        heading: "Think About Looking Up a Word in a Dictionary",

        paragraphs: [
          "A dictionary entry always has two parts — the word itself (bold, on its own), and its meaning right below or beside it. It's not a bullet point, and it's not a numbered step — it's a 'term and its explanation' pair.",

          "HTML has a special list just for this — the description list, perfect for term-meaning pairs, like a dictionary, an FAQ, or a glossary."
        ]
      },

      {
        heading: "The Description List Tags",

        code: `<dl>
  <dt>HTML</dt>
  <dd>The language used to structure web pages.</dd>

  <dt>CSS</dt>
  <dd>The language used to style web pages.</dd>
</dl>`,

        paragraphs: [
          "<dl> is the container ('description list'), <dt> is the term being defined ('description term'), and <dd> is its meaning ('description details'). Each <dt> is usually followed by one or more <dd> explaining it."
        ]
      },

      {
        heading: "Where You'd Actually Use This",

        points: [
          "A glossary of technical terms at the end of a chapter",
          "An FAQ section — question as <dt>, answer as <dd>",
          "A product's specifications — 'Weight' as <dt>, '500g' as <dd>"
        ]
      },

      {
        heading: "One Term, Multiple Meanings",

        paragraphs: [
          "Just like a dictionary sometimes lists multiple meanings for the same word, one <dt> can be followed by more than one <dd>."
        ],

        code: `<dl>
  <dt>Server</dt>
  <dd>A computer that stores and sends website data.</dd>
  <dd>Also refers to a person who serves food at a restaurant (different context).</dd>
</dl>`
      },

      {
        heading: "Important Points to Remember",

        points: [
          "<dl> is the container; <dt> is the term, <dd> is its meaning.",
          "Best used for term-definition pairs, like a glossary or FAQ.",
          "A single <dt> can have multiple <dd> entries.",
          "Don't use <dl> for regular lists — that's what <ul>/<ol> are for."
        ]
      }

    ]
  },

  {
    title: "Table Structure",
    subtitle: "Explained Like a School Report Card",

    sections: [

      {
        heading: "Think About Your Report Card",

        paragraphs: [
          "A report card has rows for each subject (Maths, Science, English) and columns for each detail (Subject, Marks, Grade). Every piece of information sits neatly in its own little box, lined up under the right column and in the right row.",

          "An HTML table works exactly the same way — rows going across, columns going down, and each piece of data sitting in its own box, called a cell."
        ]
      },

      {
        heading: "The Basic Table Tags",

        points: [
          "<table> — the entire report card, the outer container",
          "<tr> — table row, one full line across (like one subject's row)",
          "<td> — table data, one single cell/box inside a row",
          "<th> — table heading, a bold cell used for column titles (like 'Subject', 'Marks')"
        ]
      },

      {
        heading: "Building a Simple Table",

        code: `<table border="1">
  <tr>
    <th>Subject</th>
    <th>Marks</th>
  </tr>

  <tr>
    <td>Maths</td>
    <td>95</td>
  </tr>

  <tr>
    <td>Science</td>
    <td>88</td>
  </tr>
</table>`,

        paragraphs: [
          "The first <tr> here uses <th> instead of <td> — that's what makes 'Subject' and 'Marks' appear bold, just like a report card's column titles look different from the actual marks below them."
        ]
      },

      {
        heading: "Important Points to Remember",

        points: [
          "<table> is the outer container, <tr> is a row, <td> is a regular cell.",
          "<th> is used specifically for header/title cells — it shows up bold and centered by default.",
          "Each <tr> should have the same number of cells to keep the table looking neat.",
          "A table reads like a report card — rows across, columns down, data in each box."
        ]
      }

    ]
  },

  {
    title: "Table Attributes",
    subtitle: "Explained Like a Double-Period Class in a Timetable",

    sections: [

      {
        heading: "Think About a Double-Period Class",

        paragraphs: [
          "Imagine your college timetable, where Monday's first two periods are merged into one long 'Lab Session' box, stretching across what would normally be two separate slots. Visually, two boxes became one bigger box.",

          "HTML tables let you do exactly this using colspan and rowspan — merging cells across columns or rows, just like that one merged timetable slot."
        ]
      },

      {
        heading: "colspan — Merging Across Columns",

        code: `<table border="1">
  <tr>
    <th colspan="2">Monday</th>
  </tr>
  <tr>
    <td>9 AM</td>
    <td>Lab Session</td>
  </tr>
</table>`,

        paragraphs: [
          "colspan=\"2\" tells the browser: 'make this one cell stretch across the width of 2 normal cells.' That's exactly how 'Monday' sits wide across the top, like a merged timetable header."
        ]
      },

      {
        heading: "rowspan — Merging Across Rows",

        code: `<table border="1">
  <tr>
    <td rowspan="2">Lab Session</td>
    <td>9 AM</td>
  </tr>
  <tr>
    <td>10 AM</td>
  </tr>
</table>`,

        paragraphs: [
          "rowspan=\"2\" stretches a cell downward across 2 rows instead — like one long 'Lab Session' box covering both the 9 AM and 10 AM slots in the timetable."
        ]
      },

      {
        heading: "What About border, cellpadding, cellspacing?",

        paragraphs: [
          "Older HTML used attributes like border, cellpadding and cellspacing directly on the <table> tag to control borders and spacing. These still technically work, but today this kind of styling is done with CSS instead (we'll cover this properly in 'Styling Tables'). colspan and rowspan, however, are still the standard, correct way to merge cells."
        ]
      },

      {
        heading: "Important Points to Remember",

        points: [
          "colspan merges cells horizontally, across columns.",
          "rowspan merges cells vertically, across rows.",
          "Both attributes go on the <td> or <th> that should do the merging.",
          "Spacing/border styling is better done with CSS, not old attributes like cellpadding."
        ]
      }

    ]
  },

  {
    title: "Thead Tbody Tfoot",
    subtitle: "Explained Like a Bank Statement",

    sections: [

      {
        heading: "Think About a Bank Statement",

        paragraphs: [
          "A bank statement has a header at the top (Date, Description, Amount), a long middle section listing every single transaction, and a footer at the bottom showing the closing balance. Even though it's all one document, these three sections clearly do different jobs.",

          "<thead>, <tbody>, and <tfoot> let you label these same three sections inside an HTML table, instead of just having one long pile of rows."
        ]
      },

      {
        heading: "The Three Sections",

        points: [
          "<thead> — the header section, usually holding column titles (like the bank statement's top row)",
          "<tbody> — the main body, holding the actual data rows (like every transaction listed)",
          "<tfoot> — the footer section, often used for totals or summaries (like the closing balance)"
        ]
      },

      {
        heading: "Putting It Together",

        code: `<table border="1">

  <thead>
    <tr>
      <th>Item</th>
      <th>Price</th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>Notebook</td>
      <td>50</td>
    </tr>
    <tr>
      <td>Pen</td>
      <td>10</td>
    </tr>
  </tbody>

  <tfoot>
    <tr>
      <td>Total</td>
      <td>60</td>
    </tr>
  </tfoot>

</table>`,

        paragraphs: [
          "Even though all three sections still use the familiar <tr>, <td>, <th> tags inside them, wrapping them this way clearly labels what each part of the table is for — just like the clearly separated sections of a bank statement."
        ]
      },

      {
        heading: "Why Bother with This?",

        points: [
          "Makes long tables easier to read and maintain in your code",
          "Lets you style headers, body, and footer differently using CSS",
          "Browsers can keep <thead> visible while scrolling through a long <tbody> in some cases",
          "Considered good, professional practice for any real data table"
        ]
      },

      {
        heading: "Important Points to Remember",

        points: [
          "<thead> holds the header row(s), <tbody> holds the main data, <tfoot> holds summary rows.",
          "All three still use <tr>/<td>/<th> inside them — they're organizing wrappers, not new cell types.",
          "Using these sections is optional but considered good practice, especially for larger tables.",
          "<tfoot> can technically be placed before <tbody> in code, but always displays at the bottom."
        ]
      }

    ]
  },

  {
    title: "Styling Tables",
    subtitle: "Explained Like Decorating a Worksheet for Readability",

    sections: [

      {
        heading: "Think About a Messy vs Neat Worksheet",

        paragraphs: [
          "Imagine two versions of the same worksheet — one with no lines separating the boxes, cramped text touching the edges, and every row looking identical. The other has clean borders, some breathing space inside each box, and alternating row colors so your eyes can follow each line easily.",

          "Both worksheets have the exact same information, but the second one is far easier to read. CSS does this exact job for HTML tables."
        ]
      },

      {
        heading: "Adding Clean Borders",

        paragraphs: [
          "By default, a table's borders look doubled and messy. border-collapse fixes this by merging them into single, clean lines."
        ],

        code: `table {
  border-collapse: collapse;
  width: 100%;
}

th, td {
  border: 1px solid #ccc;
}`
      },

      {
        heading: "Adding Breathing Space Inside Cells",

        paragraphs: [
          "Just like leaving a little margin inside each worksheet box instead of cramming text right against the edges, padding adds internal space inside each cell."
        ],

        code: `th, td {
  padding: 12px;
  text-align: left;
}`
      },

      {
        heading: "Alternating Row Colors (Zebra Striping)",

        paragraphs: [
          "This is the classic 'every other row has a light background' look, helping your eyes track across a long row without losing place — exactly like a neatly decorated worksheet."
        ],

        code: `tbody tr:nth-child(even) {
  background-color: #f5f5f5;
}`
      },

      {
        heading: "A Nice Hover Effect (Bonus)",

        code: `tbody tr:hover {
  background-color: #dcfce7;
}`,

        paragraphs: [
          "This highlights the row your mouse is currently over, like running your finger along a line while reading a worksheet, to keep track of where you are."
        ]
      },

      {
        heading: "Important Points to Remember",

        points: [
          "border-collapse: collapse removes the messy double-border look.",
          "padding gives cells breathing room, making text easier to read.",
          "nth-child(even) is the standard trick for alternating row colors.",
          "Avoid old HTML attributes like cellpadding/border — do all of this through CSS instead."
        ]
      }

    ]
  },

  {
    title: "Form Tag",
    subtitle: "Explained Like a Paper Application Form",

    sections: [

      {
        heading: "Think About Filling Out an Application Form",

        paragraphs: [
          "When you fill out a college admission form or a job application, there's one single form holding all the fields — name, email, phone number — and at the bottom, a 'Submit' button that sends the whole form off to be processed.",

          "The <form> tag in HTML is exactly that paper form — a container that holds all your input fields together, ready to be submitted as one package."
        ]
      },

      {
        heading: "The Basic Form Tag",

        code: `<form action="/submit" method="POST">

  <!-- input fields will go here -->

</form>`,

        paragraphs: [
          "Everything related to one form — every input field, every label, the submit button — goes inside this single <form> tag, just like every section of a paper application sits within the same booklet."
        ]
      },

      {
        heading: "The Two Key Attributes",

        points: [
          "action — where the form's data should be sent, like the office address where you'd drop off your filled application",
          "method — how the data is sent; GET shows data in the URL (like writing your answer on the envelope itself), POST sends it privately in the background (like sealing it inside the envelope) — POST is used far more often, especially for anything sensitive like passwords"
        ]
      },

      {
        heading: "A Simple Example",

        code: `<form action="/submit" method="POST">
  <input type="text" placeholder="Enter your name">
  <input type="submit" value="Submit">
</form>`,

        paragraphs: [
          "We'll explore individual input types (text, email, password, etc.) properly in the next topic — for now, just notice how everything sits neatly inside the one <form> container."
        ]
      },

      {
        heading: "Important Points to Remember",

        points: [
          "<form> is the container that holds all related input fields together.",
          "action specifies where the form data is sent on submission.",
          "method (GET or POST) controls how that data is sent — POST is preferred for most real forms.",
          "Nothing happens visually for <form> itself — it's the fields inside it that visitors actually see."
        ]
      }

    ]
  },

  {
    title: "Input Types",
    subtitle: "Explained Like Different Slots on a Courier Form",

    sections: [

      {
        heading: "Think About a Courier Booking Form",

        paragraphs: [
          "When you book a courier, the form has different kinds of boxes — a box for your name (text), a box for your phone number (numbers only), a box for pickup date (a calendar), a box for your email. Each box is designed differently because it expects a different kind of information.",

          "HTML's <input> tag works the same way — the 'type' attribute decides what kind of box it is, and the browser changes its behavior accordingly."
        ]
      },

      {
        heading: "The Most Common Input Types",

        points: [
          "type=\"text\" — a plain box for any normal text, like a name",
          "type=\"email\" — a box that checks the text looks like a valid email (has an @ symbol)",
          "type=\"password\" — hides what you type with dots, for sensitive info",
          "type=\"number\" — only allows numbers, often with small up/down arrows",
          "type=\"date\" — opens a small calendar picker",
          "type=\"tel\" — meant for phone numbers, opens a number keypad on mobile",
          "type=\"submit\" — turns the input into a clickable submit button"
        ]
      },

      {
        heading: "Seeing Them Together",

        code: `<input type="text" placeholder="Full Name">
<input type="email" placeholder="Email Address">
<input type="password" placeholder="Password">
<input type="number" placeholder="Age">
<input type="date">`,

        paragraphs: [
          "Notice how just changing the 'type' value changes the box's behavior completely — the password box hides your text, the date box pops up a calendar — without writing any extra code yourself."
        ]
      },

      {
        heading: "Why Choosing the Right Type Matters",

        paragraphs: [
          "If you use type=\"text\" for a phone number, mobile users get the regular alphabet keyboard instead of a number pad — more typing mistakes, more frustration. Choosing the correct type isn't just neat, it genuinely makes filling out your form easier."
        ]
      },

      {
        heading: "Important Points to Remember",

        points: [
          "The type attribute decides what kind of box an <input> becomes.",
          "Browsers automatically validate certain types, like email and number.",
          "Mobile keyboards change based on type — number/tel show a numeric keypad.",
          "Always pick the type that genuinely matches the data you're asking for."
        ]
      }

    ]
  },

  {
    title: "Labels & Placeholders",
    subtitle: "Explained Like a Printed Form vs a Pencil Hint",

    sections: [

      {
        heading: "Think About a Bank Form",

        paragraphs: [
          "A bank form has printed text next to each blank space, like 'Name:' or 'Account Number:' — this text is permanent, printed in ink, and stays even after you fill the form. Now imagine someone faintly wrote in pencil inside the blank box itself, like 'e.g. Ramesh Kumar' — just a hint, which disappears the moment you start writing your actual answer.",

          "In HTML, the printed permanent text is a <label>, and the faint disappearing hint is a placeholder."
        ]
      },

      {
        heading: "The Label Tag",

        code: `<label for="username">Full Name:</label>
<input type="text" id="username">`,

        paragraphs: [
          "The label's for attribute matches the input's id attribute — this connection means clicking on the label text itself also focuses the input box, just like tapping near a printed form field highlights where you should write."
        ]
      },

      {
        heading: "The Placeholder Attribute",

        code: `<input type="text" placeholder="e.g. Ramesh Kumar">`,

        paragraphs: [
          "placeholder text appears faintly inside the box, and vanishes the instant you start typing — exactly like that pencil hint disappearing once your actual answer covers it."
        ]
      },

      {
        heading: "Why Not Just Use Placeholder Alone?",

        paragraphs: [
          "Placeholder text disappears once you start typing — so if you get distracted halfway through filling a long form, you might forget what that box was even for. A label stays visible permanently, which is far more reliable, and is also essential for accessibility tools used by visually impaired users.",

          "Best practice: always use a proper <label>, and use placeholder only as an extra helpful hint, never as a replacement for the label."
        ]
      },

      {
        heading: "Important Points to Remember",

        points: [
          "<label> is permanent text describing a field; placeholder is a temporary hint inside it.",
          "Connect label and input using matching for and id attributes.",
          "Never rely on placeholder alone — always include a proper label too.",
          "Labels also improve accessibility for screen readers."
        ]
      }

    ]
  },

  {
    title: "Radio & Checkboxes",
    subtitle: "Explained Like Exam Options vs a Packing Checklist",

    sections: [

      {
        heading: "Think About Two Different Situations",

        paragraphs: [
          "In a multiple-choice exam question, you can only fill in one bubble — choosing option B automatically means you're not choosing A, C or D. But when packing for a trip, you tick off a checklist — clothes ✓, charger ✓, ID card ✓ — and you can tick as many items as you actually need, with no limit.",

          "Radio buttons in HTML work like the exam question — only one choice allowed. Checkboxes work like the packing checklist — multiple choices allowed."
        ]
      },

      {
        heading: "Radio Buttons — Pick Only One",

        code: `<input type="radio" name="gender" value="male"> Male
<input type="radio" name="gender" value="female"> Female`,

        paragraphs: [
          "Notice both share the same name=\"gender\" — this is what links them together as one group, so selecting one automatically unselects the other, just like filling one exam bubble clears your ability to fill another for the same question."
        ]
      },

      {
        heading: "Checkboxes — Pick Any Number",

        code: `<input type="checkbox" name="hobby" value="reading"> Reading
<input type="checkbox" name="hobby" value="music"> Music
<input type="checkbox" name="hobby" value="sports"> Sports`,

        paragraphs: [
          "Here, even with the same name, each checkbox works independently — you can tick one, two, or all three, exactly like ticking off as many items as you need on a packing checklist."
        ]
      },

      {
        heading: "Quick Comparison",

        points: [
          "Radio button = exam question, only one answer allowed, options share the same 'name' to group them",
          "Checkbox = packing checklist, any number of items can be ticked",
          "Both can be pre-selected using the checked attribute"
        ]
      },

      {
        heading: "Important Points to Remember",

        points: [
          "Radio buttons in the same group must share the exact same name value.",
          "Checkboxes work independently, even if they share a name.",
          "Use radio buttons for 'choose exactly one'; checkboxes for 'choose any number'.",
          "The checked attribute pre-selects an option by default."
        ]
      }

    ]
  },

  {
    title: "Dropdown",
    subtitle: "Explained Like a Restaurant's Hidden Menu List",

    sections: [

      {
        heading: "Think About Ordering at a Restaurant Counter",

        paragraphs: [
          "Imagine a small counter where, instead of showing every single dish on display, the waiter holds a folded menu card. You tap it, it unfolds showing all options, you pick one, and it folds back up showing just your choice — saving a lot of counter space compared to showing every dish at once.",

          "A dropdown in HTML works exactly this way — it stays collapsed showing just one current choice, and unfolds into a full list only when clicked, saving screen space."
        ]
      },

      {
        heading: "The Dropdown (Select) Tags",

        code: `<select>
  <option value="hyd">Hyderabad</option>
  <option value="blr">Bangalore</option>
  <option value="che">Chennai</option>
</select>`,

        paragraphs: [
          "<select> is the folded menu card itself — the container. Each <option> is one dish on that hidden menu, only visible once the visitor clicks to unfold it."
        ]
      },

      {
        heading: "Pre-Selecting an Option",

        paragraphs: [
          "Sometimes you want one option to already be picked, like a restaurant defaulting to 'Medium spice' unless the customer changes it. Use the selected attribute for this."
        ],

        code: `<select>
  <option value="hyd" selected>Hyderabad</option>
  <option value="blr">Bangalore</option>
</select>`
      },

      {
        heading: "Dropdown vs Radio Buttons — When to Use Which?",

        paragraphs: [
          "Both let you pick exactly one option, but dropdowns are better when there are many choices (like all 28 states), since they don't take up screen space showing every option at once. Radio buttons are better for just 2-4 visible options, since showing all choices upfront is quicker to scan."
        ]
      },

      {
        heading: "Important Points to Remember",

        points: [
          "<select> is the dropdown container; each <option> is one choice inside it.",
          "Only one option can be chosen at a time, just like a single restaurant order.",
          "selected pre-picks an option by default.",
          "Use dropdowns for long lists of choices, radio buttons for short ones."
        ]
      }

    ]
  },

  {
    title: "Textarea & Buttons",
    subtitle: "Explained Like a Suggestion Box and Vending Machine Buttons",

    sections: [

      {
        heading: "Think About a Suggestion Box",

        paragraphs: [
          "A suggestion box slip usually has a big open space for writing a full paragraph of feedback — not a tiny single-line box, since your thoughts might span several sentences or even lines.",

          "A <textarea> in HTML is exactly this — a bigger, multi-line box, unlike the single-line <input> boxes we've used for name/email so far."
        ]
      },

      {
        heading: "The Textarea Tag",

        code: `<textarea rows="4" cols="40" placeholder="Write your feedback here..."></textarea>`,

        paragraphs: [
          "rows and cols control the visible size of the box — how many lines tall, and how many characters wide — similar to choosing how big a suggestion slip's writing space should be. Visitors can still type more than this size; the box will scroll."
        ]
      },

      {
        heading: "Now Think About a Vending Machine",

        paragraphs: [
          "A vending machine has clearly labelled buttons — 'Select', 'Cancel', 'Confirm'. Pressing each one triggers a specific action. Buttons on a webpage work the same way — each one triggers something when clicked."
        ]
      },

      {
        heading: "Different Kinds of Buttons",

        points: [
          "<button>Click Me</button> — a general-purpose button, does nothing on its own until you add behavior to it",
          "<input type=\"submit\" value=\"Submit\"> — specifically submits the form it's inside",
          "<input type=\"reset\" value=\"Reset\"> — clears all fields in the form back to empty, like a vending machine's cancel button"
        ]
      },

      {
        heading: "Seeing Them Together",

        code: `<form>
  <textarea rows="4" cols="40" placeholder="Your feedback..."></textarea>
  <br>
  <input type="submit" value="Submit Feedback">
  <input type="reset" value="Clear">
</form>`
      },

      {
        heading: "Important Points to Remember",

        points: [
          "<textarea> is for multi-line text input, unlike single-line <input> boxes.",
          "rows and cols control the textarea's visible size, not a strict character limit.",
          "<button> is general-purpose; type=\"submit\" and type=\"reset\" have built-in form behavior.",
          "A reset button clears the form; it does not submit anything."
        ]
      }

    ]
  },

  {
    title: "Form Validation",
    subtitle: "Explained Like a Security Guard Checking ID at a Gate",

    sections: [

      {
        heading: "Think About Entering a Gated Society",

        paragraphs: [
          "At the entrance of a gated apartment complex, a security guard checks if you actually have a valid ID card before letting you in. If you forgot it, or it looks fake, you're stopped right at the gate — you never even get the chance to walk inside and cause confusion later.",

          "Form validation works exactly like this guard — it checks whether the information typed into a form is actually valid, before letting the form be submitted."
        ]
      },

      {
        heading: "The Simplest Guard: 'required'",

        code: `<input type="text" placeholder="Full Name" required>`,

        paragraphs: [
          "Adding required is like telling the guard 'nobody enters without showing an ID at all' — the form simply won't submit if this field is left empty, and the browser shows a small warning message automatically."
        ]
      },

      {
        heading: "Smarter Checks Based on Type",

        paragraphs: [
          "Remember from 'Input Types' how type=\"email\" expects something that looks like an email? That's actually a built-in validation check too — the guard isn't just checking 'is there an ID', but 'does this ID actually look correct'."
        ],

        code: `<input type="email" placeholder="Email" required>`
      },

      {
        heading: "Setting Length and Pattern Rules",

        points: [
          "minlength / maxlength — sets the shortest/longest allowed text, like a password needing at least 8 characters",
          "min / max — for number inputs, sets the smallest/largest allowed value, like age needing to be at least 18",
          "pattern — lets you define a custom rule using a specific format, for more advanced cases"
        ],

        code: `<input type="password" minlength="8" required>
<input type="number" min="18" max="60">`
      },

      {
        heading: "What Happens If a Rule Is Broken?",

        paragraphs: [
          "Just like the guard stopping you right at the gate rather than letting you wander inside and cause a problem later, the browser stops the form from submitting and shows a small popup message, right next to the problematic field, before anything gets sent anywhere."
        ]
      },

      {
        heading: "Important Points to Remember",

        points: [
          "required ensures a field cannot be left empty.",
          "Input types like email/number bring their own built-in validation rules.",
          "minlength, maxlength, min, max set extra boundaries on acceptable values.",
          "Validation happens before the form is submitted, catching mistakes early."
        ]
      }

    ]
  },

  {
    title: "Semantic HTML",
    subtitle: "Explained Like Labeled Boxes While Shifting Houses",

    sections: [

      {
        heading: "Think About Packing for a House Shift",

        paragraphs: [
          "Imagine packing your entire house into plain, unlabeled cardboard boxes — every box looks identical. Now imagine the same boxes, but clearly labeled: 'Kitchen', 'Books', 'Bathroom'. Both versions hold the exact same items, but the labeled version is far easier for movers to handle and for you to unpack correctly.",

          "Semantic HTML is exactly this idea — using tags that describe what's actually inside them, instead of generic, unlabeled containers."
        ]
      },

      {
        heading: "The Generic, 'Unlabeled Box' Tag",

        paragraphs: [
          "<div> is HTML's plain, unlabeled box — it groups content together but tells you nothing about what's actually inside it. You could technically build an entire webpage using only <div> tags, but it would be like a house full of identical, unlabeled boxes."
        ],

        code: `<div>
  <div>My Website</div>
  <div>Home About Contact</div>
</div>`
      },

      {
        heading: "The 'Labeled Box' Alternative",

        paragraphs: [
          "Semantic tags replace generic <div>s with clearly named alternatives that describe their purpose directly in the tag name itself."
        ],

        code: `<header>My Website</header>
<nav>Home About Contact</nav>`,

        points: [
          "<header> instead of a generic top <div> — clearly the page's header",
          "<nav> instead of a generic menu <div> — clearly navigation links",
          "<article> instead of a generic content <div> — clearly a self-contained piece of content"
        ]
      },

      {
        heading: "Why Bother Labeling Things?",

        points: [
          "Other developers reading your code instantly understand the page's layout, without guessing",
          "Screen readers can announce sections properly to visually impaired users ('entering navigation', 'entering main content')",
          "Search engines like Google better understand which part of your page is the actual main content",
          "Your own code becomes easier to read and maintain months later"
        ]
      },

      {
        heading: "Important Points to Remember",

        points: [
          "<div> is generic and tells nothing about its content; semantic tags describe their purpose.",
          "Semantic HTML improves readability for developers, accessibility for screen readers, and SEO for search engines.",
          "You'll learn the specific semantic tags (<header>, <nav>, <main>, <footer>, etc.) in the next few topics.",
          "<div> isn't 'wrong' — it's still useful for purely visual grouping with no specific meaning."
        ]
      }

    ]
  },

  {
    title: "Header Nav Main Footer",
    subtitle: "Explained Like the Layout of a House",

    sections: [

      {
        heading: "Think About Walking Into a House",

        paragraphs: [
          "Every house has a few fixed zones — the entrance with the nameplate, a directory or instructions near the entrance, the living room where everything important actually happens, and near the exit, a notice board with contact details or rules.",

          "A typical webpage follows almost the exact same layout, using four semantic tags that match these zones."
        ]
      },

      {
        heading: "The Four Main Zones",

        points: [
          "<header> — the entrance with the nameplate, usually holds the site logo/name and sometimes the navigation",
          "<nav> — the directory board, holds the links to move around (Home, About, Contact)",
          "<main> — the living room, where the page's actual main content lives",
          "<footer> — the notice board near the exit, usually holds contact info, copyright, social links"
        ]
      },

      {
        heading: "Putting It All Together",

        code: `<header>
  <h1>My Website</h1>
  <nav>
    <a href="#">Home</a>
    <a href="#">About</a>
    <a href="#">Contact</a>
  </nav>
</header>

<main>
  <h2>Welcome!</h2>
  <p>This is the main content of the page.</p>
</main>

<footer>
  <p>© 2026 My Website. All rights reserved.</p>
</footer>`,

        paragraphs: [
          "Notice <nav> sits inside <header> here — that's a common, perfectly valid pattern, just like a directory board often sits right near the entrance, not in a separate room."
        ]
      },

      {
        heading: "An Important Rule About <main>",

        paragraphs: [
          "There should only be one <main> tag per page — just like a house has one living room, not several competing ones. It should contain only the content unique to that specific page, not repeated elements like the header or footer."
        ]
      },

      {
        heading: "Important Points to Remember",

        points: [
          "<header> typically holds the logo/title and often the navigation.",
          "<nav> wraps the main navigation links of the site.",
          "<main> holds the page's unique, primary content — use it only once per page.",
          "<footer> typically holds copyright, contact info, and secondary links."
        ]
      }

    ]
  },

  {
    title: "Section Article Aside",
    subtitle: "Explained Like a Newspaper's Page Layout",

    sections: [

      {
        heading: "Think About a Newspaper Page",

        paragraphs: [
          "A newspaper page is divided into distinct news stories — each one complete and readable on its own, even if torn out and handed to someone separately. The page might also have a smaller side box — 'Related Stories' or 'Quick Facts' — related to the main stories but not essential to understanding them.",

          "<article>, <section>, and <aside> let you mark up these exact same patterns in HTML."
        ]
      },

      {
        heading: "<article> — A Complete, Standalone Story",

        paragraphs: [
          "Use <article> for content that makes complete sense on its own, even if removed from the page entirely — like a full news story, a blog post, or a single product card."
        ],

        code: `<article>
  <h2>Hyderabad Wins the Match</h2>
  <p>In an exciting final over...</p>
</article>`
      },

      {
        heading: "<section> — A Themed Grouping",

        paragraphs: [
          "Use <section> for a thematic grouping of content within a page — like grouping all of today's 'Sports' news together, even though each individual story inside could also be its own <article>."
        ],

        code: `<section>
  <h2>Sports News</h2>
  <article>...</article>
  <article>...</article>
</section>`
      },

      {
        heading: "<aside> — Related but Secondary Content",

        paragraphs: [
          "Use <aside> for that small side box — content related to the main story, but not essential to it, like a 'Quick Facts' box or a list of related articles."
        ],

        code: `<aside>
  <h3>Quick Facts</h3>
  <p>This was the team's 5th consecutive win.</p>
</aside>`
      },

      {
        heading: "Important Points to Remember",

        points: [
          "<article> is for complete, standalone content (a full story, post, or card).",
          "<section> groups related content under a common theme.",
          "<aside> holds secondary content, related but not essential to the main story.",
          "An <article> can sit inside a <section>, and an <aside> can sit beside either."
        ]
      }

    ]
  },

  {
    title: "Figure & Figcaption",
    subtitle: "Explained Like a Photo with a Caption in an Album",

    sections: [

      {
        heading: "Think About a Photo Album",

        paragraphs: [
          "In a nicely arranged photo album, a picture usually sits together with its caption right below it — 'Family trip to Goa, 2023.' The photo and its caption are treated as one single unit; you wouldn't place the caption on a completely different page.",

          "<figure> and <figcaption> let you group an image with its caption the exact same way, as one connected unit in your HTML."
        ]
      },

      {
        heading: "The Figure and Figcaption Tags",

        code: `<figure>
  <img src="goa-trip.jpg" alt="Family at a beach in Goa">
  <figcaption>Family trip to Goa, 2023</figcaption>
</figure>`,

        paragraphs: [
          "<figure> is the album page holding both the photo and its caption together. <figcaption> is the caption text itself, clearly linked to that specific image, not floating separately elsewhere on the page."
        ]
      },

      {
        heading: "Why Not Just Use a Plain <img> and a Nearby <p>?",

        paragraphs: [
          "If you just place an <img> and a <p> next to each other, there's no actual code-level connection between them — a screen reader or search engine can't be sure the paragraph is describing that specific image. <figure>/<figcaption> creates a clear, explicit relationship between the two."
        ]
      },

      {
        heading: "Figure Isn't Just for Photos",

        paragraphs: [
          "Despite the name, <figure> can hold more than photographs — diagrams, code snippets, or charts, anything that benefits from having a caption attached to it."
        ],

        code: `<figure>
  <pre><code>console.log("Hello");</code></pre>
  <figcaption>Example: Printing to the console</figcaption>
</figure>`
      },

      {
        heading: "Important Points to Remember",

        points: [
          "<figure> groups a piece of content (usually an image) with its caption.",
          "<figcaption> is the caption itself, and must be placed inside the <figure>.",
          "This creates a clear, explicit link between content and its description, unlike separate <img> and <p> tags.",
          "<figure> can hold images, diagrams, code snippets, or charts — not just photographs."
        ]
      }

    ]
  },

  {
    title: "Time Mark Details Summary",
    subtitle: "Explained Like a Collapsible FAQ Section",

    sections: [

      {
        heading: "Think About an FAQ Section on a Website",

        paragraphs: [
          "When you visit a 'Frequently Asked Questions' page, you usually see just the questions listed — clicking one expands it to reveal the answer, and clicking again collapses it back. This keeps the page clean, showing only what you actually want to read.",

          "HTML's <details> and <summary> tags give you this exact collapsible behavior, with zero JavaScript needed."
        ]
      },

      {
        heading: "The Details and Summary Tags",

        code: `<details>
  <summary>What is HTML?</summary>
  <p>HTML stands for HyperText Markup Language, used to structure web pages.</p>
</details>`,

        paragraphs: [
          "<summary> is the question — always visible, and clickable. <details> is the container holding both the question and the hidden answer, which only reveals itself once clicked."
        ]
      },

      {
        heading: "A Quick Recap: The <mark> Tag",

        paragraphs: [
          "We already covered <mark> back in 'Text Formatting' — it's the highlighter-pen tag, used to highlight specific words with a yellow background, like marking a keyword in your study notes."
        ],

        code: `<p>The <mark>capital</mark> of India is New Delhi.</p>`
      },

      {
        heading: "The Time Tag",

        paragraphs: [
          "Think about a date stamp printed at the top of a letter — it's there to clearly mark when something happened. <time> does the same for dates and times in HTML, and also gives browsers and search engines a machine-readable version of that date."
        ],

        code: `<p>This article was published on <time datetime="2026-06-27">27th June 2026</time>.</p>`,

        points: [
          "The visible text ('27th June 2026') can be written however you like, for humans to read",
          "The datetime attribute holds the same date in a strict, standard format, for machines (like search engines) to understand"
        ]
      },

      {
        heading: "Important Points to Remember",

        points: [
          "<details>/<summary> create a collapsible section without needing JavaScript.",
          "<summary> is always visible; everything else inside <details> stays hidden until clicked.",
          "<mark> highlights text, like using a highlighter pen.",
          "<time> marks dates/times, with datetime giving a machine-readable version."
        ]
      }

    ]
  },

  {
    title: "New Input Types",
    subtitle: "Explained Like Special Tools at a Paint Shop",

    sections: [

      {
        heading: "Think About a Paint Shop Counter",

        paragraphs: [
          "At a paint shop, you don't describe a color in plain words — you point directly at a color swatch card. For mixing the exact shade, the shopkeeper might use a slider to adjust intensity. These are specialized tools, built for one specific job, rather than generic boxes.",

          "HTML5 introduced several specialized input types just like this — each built for one specific kind of data, beyond the basic text/email/number we already covered."
        ]
      },

      {
        heading: "type=\"color\" — The Swatch Picker",

        code: `<input type="color">`,

        paragraphs: [
          "This opens an actual color-picker tool when clicked, exactly like flipping through swatch cards at the paint shop, instead of typing a color name or code manually."
        ]
      },

      {
        heading: "type=\"range\" — The Intensity Slider",

        code: `<input type="range" min="0" max="100">`,

        paragraphs: [
          "This shows a draggable slider, perfect for things like volume control or a 'spice level' selector — picking a value by sliding, rather than typing an exact number."
        ]
      },

      {
        heading: "A Few More Useful Types",

        points: [
          "type=\"search\" — a text box styled for search, often shows a small 'x' to clear it quickly",
          "type=\"url\" — checks that the entered text looks like a valid web address",
          "type=\"week\" — lets the visitor pick a specific week from a calendar",
          "type=\"month\" — lets the visitor pick a specific month and year"
        ]
      },

      {
        heading: "Seeing a Few Together",

        code: `<input type="color">
<input type="range" min="0" max="100">
<input type="search" placeholder="Search products...">
<input type="month">`
      },

      {
        heading: "Important Points to Remember",

        points: [
          "These specialized types give visitors purpose-built tools instead of plain text boxes.",
          "type=\"color\" opens a color picker; type=\"range\" shows a draggable slider.",
          "type=\"search\", \"url\", \"week\", \"month\" each add small built-in conveniences.",
          "Browser support and appearance can vary slightly across different browsers/devices."
        ]
      }

    ]
  },

  {
    title: "Data Attributes",
    subtitle: "Explained Like the Hidden Barcode on a Price Tag",

    sections: [

      {
        heading: "Think About a Price Tag in a Shop",

        paragraphs: [
          "A price tag shows the price clearly, for you to read. But it also has a barcode printed on it — completely useless to you as a shopper, but extremely useful for the shop's scanning machine, which reads hidden information (product ID, stock details) from it.",

          "Data attributes in HTML work exactly like that barcode — extra hidden information attached to an element, invisible to visitors, but readable by your JavaScript code."
        ]
      },

      {
        heading: "Adding a Data Attribute",

        code: `<button data-product-id="2045" data-category="electronics">
  Add to Cart
</button>`,

        paragraphs: [
          "Any attribute starting with data- is a custom data attribute. The visitor only sees the button text 'Add to Cart' — they have no idea about the hidden product-id or category sitting on it, just like a shopper ignores the barcode."
        ]
      },

      {
        heading: "Why Not Just Show This Information Visibly?",

        paragraphs: [
          "You don't want every product ID and internal category code cluttering your actual webpage design. Data attributes let you attach this 'behind the scenes' information to an element, ready for JavaScript to scan and use, without affecting how the page looks."
        ]
      },

      {
        heading: "How JavaScript Reads This (Just a Preview)",

        paragraphs: [
          "You'll learn this properly once we reach the JavaScript course, but here's a small preview — JavaScript can read a data attribute's value using dataset, similar to a scanner reading a barcode."
        ],

        code: `// Just a preview — covered properly in the JavaScript course
const button = document.querySelector("button");
console.log(button.dataset.productId); // "2045"`
      },

      {
        heading: "Important Points to Remember",

        points: [
          "Custom data attributes always start with data-, followed by your own name.",
          "They're invisible to visitors, just like a barcode is invisible information to a shopper.",
          "JavaScript can read these values easily through the dataset property.",
          "Great for attaching extra info to elements without affecting the page's visible design."
        ]
      }

    ]
  },

  {
    title: "Canvas Intro",
    subtitle: "Explained Like a Blank Whiteboard",

    sections: [

      {
        heading: "Think About a Blank Whiteboard",

        paragraphs: [
          "A whiteboard, by itself, is completely empty — just a blank rectangular surface. It becomes useful only once someone picks up a marker and starts drawing on it — lines, shapes, diagrams, anything.",

          "<canvas> in HTML is exactly that blank whiteboard — by itself, it's just an empty rectangle on the page. JavaScript acts as the marker, drawing shapes, graphics, or even simple games onto it."
        ]
      },

      {
        heading: "Setting Up the Canvas",

        code: `<canvas id="myCanvas" width="400" height="200">
</canvas>`,

        paragraphs: [
          "width and height set the size of this blank whiteboard. On its own, this code shows absolutely nothing visible — it's just reserved empty space, waiting for instructions."
        ]
      },

      {
        heading: "A Tiny Preview of Drawing on It",

        paragraphs: [
          "We'll cover canvas drawing properly once we reach JavaScript, but here's a small preview of what 'picking up the marker' looks like in code."
        ],

        code: `// Just a preview — covered properly in the JavaScript course
const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");

ctx.fillStyle = "green";
ctx.fillRect(20, 20, 100, 50); // draws a green rectangle`
      },

      {
        heading: "What Is Canvas Actually Used For?",

        points: [
          "Drawing custom graphs and charts",
          "Building simple browser games",
          "Image editing tools (cropping, filters) directly in the browser",
          "Custom animations that plain HTML/CSS can't easily achieve"
        ]
      },

      {
        heading: "Important Points to Remember",

        points: [
          "<canvas> is just an empty drawing surface by itself — it needs JavaScript to actually draw anything.",
          "width and height set the size of this blank space.",
          "It's commonly used for graphs, games, and custom graphics.",
          "We'll learn the actual drawing commands properly in the JavaScript course."
        ]
      }

    ]
  },

  {
    title: "Iframe",
    subtitle: "Explained Like Watching Another Channel Inside Your TV",

    sections: [

      {
        heading: "Think About a TV Showing a Live Feed",

        paragraphs: [
          "Some TVs can show a small picture-in-picture window — a live feed from a security camera or another channel, displayed right inside your current screen, without you switching away from what you're already watching.",

          "An <iframe> does exactly this for webpages — it embeds an entirely different webpage inside a small window within your current page."
        ]
      },

      {
        heading: "The Iframe Tag",

        code: `<iframe src="https://www.youtube.com/embed/dQw4w9WgXcQ" width="500" height="300">
</iframe>`,

        paragraphs: [
          "src points to the other webpage being embedded — just like tuning the picture-in-picture window to a specific channel. width and height control the size of this embedded window."
        ]
      },

      {
        heading: "Where You'd Actually See This",

        points: [
          "Embedding a YouTube video directly inside a blog post",
          "Embedding a Google Map showing a shop's location",
          "Embedding a payment gateway page on an e-commerce checkout (in a controlled, secure way)"
        ]
      },

      {
        heading: "A Word of Caution",

        paragraphs: [
          "Just like a picture-in-picture feed is still someone else's channel — you don't control its content, only the window showing it — an <iframe> embeds someone else's webpage as-is. You can't directly edit what's inside it with your own HTML, and overusing iframes can slow down your page since each one loads an entire separate webpage."
        ]
      },

      {
        heading: "Important Points to Remember",

        points: [
          "<iframe> embeds another webpage inside your current page.",
          "src specifies which webpage gets embedded; width/height control its visible size.",
          "Commonly used for YouTube videos, Google Maps, and embedded payment pages.",
          "Content inside the iframe belongs to the other website — you don't control it directly."
        ]
      }

    ]
  },

  {
    title: "Meta Tags",
    subtitle: "Explained Like a WhatsApp Link Preview Card",

    sections: [

      {
        heading: "Think About Sharing a Link on WhatsApp",

        paragraphs: [
          "When you paste a website link into WhatsApp, it doesn't just show the plain URL — it shows a neat little card with a title, a short description, and even an image, all pulled automatically from that website. Have you ever wondered how WhatsApp knows exactly what to show?",

          "It reads special information hidden inside the website's <head> section, called meta tags — information that isn't visible on the page itself, but is read by browsers, search engines, and apps like WhatsApp."
        ]
      },

      {
        heading: "A Quick Recap: charset and viewport",

        paragraphs: [
          "We briefly saw charset back in 'HTML File Structure' — it tells the browser which characters to use, so text displays correctly. The viewport tag is just as important — it tells mobile browsers to fit the page properly to the phone's screen width, instead of showing a tiny, zoomed-out desktop version."
        ],

        code: `<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">`
      },

      {
        heading: "The Description Tag — What Search Engines Show",

        paragraphs: [
          "When you search something on Google, the small grey text below each result's title is usually pulled from this exact tag — a short summary of what the page is about."
        ],

        code: `<meta name="description" content="Learn HTML, CSS and JavaScript with simple, real-life examples.">`
      },

      {
        heading: "Open Graph Tags — Powering That WhatsApp Preview",

        paragraphs: [
          "This is exactly what creates that neat preview card we talked about at the start. og:title, og:description, and og:image specifically control what title, text, and image show up when your link is shared on WhatsApp, Instagram, or Facebook."
        ],

        code: `<meta property="og:title" content="My Learning Platform">
<meta property="og:description" content="A beginner-friendly place to learn web development.">
<meta property="og:image" content="preview-image.jpg">`
      },

      {
        heading: "Important Points to Remember",

        points: [
          "Meta tags live inside <head> and are invisible on the page itself.",
          "viewport makes your page display properly on mobile screens.",
          "description influences the summary text shown in search engine results.",
          "Open Graph tags (og:title, og:description, og:image) control link preview cards on apps like WhatsApp and Instagram."
        ]
      }

    ]
  },

  {
    title: "Accessibility",
    subtitle: "Explained Like Ramps Next to Staircases",

    sections: [

      {
        heading: "Think About a Building with Only Stairs",

        paragraphs: [
          "Imagine a building that only has stairs — no ramp, no lift. Someone in a wheelchair simply cannot enter, no matter how good the building looks inside. Now add a ramp next to those stairs — suddenly, everyone can get in, including people who couldn't before, without making it worse for anyone else.",

          "Web accessibility is exactly this idea — building your website so that everyone can use it, including people with visual, hearing, or motor difficulties, without it costing anything extra for other visitors."
        ]
      },

      {
        heading: "Good News — You've Already Learned Most of This",

        paragraphs: [
          "Several topics we've already covered are actually accessibility features in disguise. This topic is mainly about understanding 'why' we do them, not new tags to memorize."
        ],

        points: [
          "alt text on images (from 'Images') — lets screen readers describe pictures to visually impaired users",
          "<label> on form fields (from 'Labels & Placeholders') — lets screen readers announce what each field is for",
          "Semantic tags like <nav>, <main>, <header> (from 'Semantic HTML') — let screen readers announce page structure clearly",
          "<strong> and <em> over plain <b> and <i> (from 'Text Formatting') — carry emphasis meaning for screen readers"
        ]
      },

      {
        heading: "A New Concept: Keyboard Navigation",

        paragraphs: [
          "Some visitors can't use a mouse at all, due to motor difficulties, and navigate entirely using the Tab key on a keyboard. Try it yourself right now — open any website and press Tab repeatedly. You'll see focus jump between links, buttons, and form fields, in order.",

          "Properly structured HTML (real <button> and <a> tags, instead of styled <div>s pretending to be buttons) makes this work automatically, with zero extra effort."
        ]
      },

      {
        heading: "Color Contrast Matters Too",

        paragraphs: [
          "Light grey text on a white background might look stylish, but it's genuinely hard to read for visitors with low vision. Always make sure text has enough contrast against its background — dark text on light backgrounds (or vice versa) is the safest choice."
        ]
      },

      {
        heading: "Important Points to Remember",

        points: [
          "Accessibility means building a website usable by everyone, including people with disabilities.",
          "Many things we've already learned — alt, label, semantic tags — directly support accessibility.",
          "Real <button>/<a> tags support keyboard navigation automatically; styled <div>s don't.",
          "Always ensure good color contrast between text and background."
        ]
      }

    ]
  },

  {
    title: "HTML Validation",
    subtitle: "Explained Like Proofreading an Essay Before Submission",

    sections: [

      {
        heading: "Think About Submitting an Essay",

        paragraphs: [
          "Before submitting an important essay, you'd proofread it — checking for missing full stops, unclosed brackets, or spelling mistakes. A messy essay might still be understood, but a clean one is far more professional and less likely to confuse the reader.",

          "HTML validation is exactly this proofreading step, but for your code — checking for unclosed tags, missing attributes, or incorrect nesting, before considering your page 'done'."
        ]
      },

      {
        heading: "The W3C Validator — Your Proofreading Tool",

        paragraphs: [
          "The official tool for this is the W3C Markup Validation Service (validator.w3.org). You can paste your HTML code directly, upload a file, or enter your live website's URL, and it checks your code against official HTML rules."
        ]
      },

      {
        heading: "Common Mistakes It Catches",

        points: [
          "Unclosed tags — like forgetting </p> after opening <p>",
          "Using the same id value on two different elements (ids must be unique on a page)",
          "Missing required attributes — like an <img> without an alt attribute",
          "Incorrect nesting — like placing a <div> inside a <p>, which isn't allowed"
        ]
      },

      {
        heading: "Why Bother — The Page Looks Fine Anyway?",

        paragraphs: [
          "Browsers are very forgiving — they'll often quietly fix small mistakes themselves and still show something reasonable on screen. But different browsers might 'fix' the same mistake differently, leading to a page that looks fine on Chrome but slightly broken on another browser.",

          "Validating your HTML catches these hidden issues early, leading to more consistent, predictable behavior across all browsers and devices."
        ]
      },

      {
        heading: "Important Points to Remember",

        points: [
          "The W3C Validator (validator.w3.org) checks your HTML for errors and warnings.",
          "Browsers often silently 'fix' mistakes, which can cause inconsistent results across different browsers.",
          "Common issues include unclosed tags, duplicate ids, and missing required attributes.",
          "Validating your code regularly is good professional practice, especially before deploying a real project."
        ]
      }

    ]
  },

  {
    title: "File & Folder Structure",
    subtitle: "Explained Like Organizing a Cupboard with Labeled Shelves",

    sections: [

      {
        heading: "Think About an Organized Cupboard",

        paragraphs: [
          "A well-organized cupboard has separate shelves — one for clothes, one for books, one for documents. Finding anything is quick, because everything has a designated place. Now imagine throwing everything into one giant pile instead — finding your college ID card in there would take forever.",

          "A website's project folder works the same way — keeping HTML, CSS, JavaScript, and images each in their own clearly labeled folder, instead of dumping everything together."
        ]
      },

      {
        heading: "A Typical, Simple Project Structure",

        code: `my-website/
│
├── index.html
├── about.html
│
├── css/
│   └── style.css
│
├── js/
│   └── script.js
│
└── images/
    ├── logo.png
    └── banner.jpg`,

        paragraphs: [
          "index.html usually sits right at the top level — it's your homepage, and most servers automatically look for a file with this exact name first. Everything else gets sorted into its own labeled shelf (folder)."
        ]
      },

      {
        heading: "Connecting Files Across Folders",

        paragraphs: [
          "Once files live in separate folders, you need to tell HTML exactly which shelf to look on, using relative paths."
        ],

        code: `<link rel="stylesheet" href="css/style.css">
<script src="js/script.js"></script>
<img src="images/logo.png" alt="Logo">`
      },

      {
        heading: "Naming Conventions Worth Following",

        points: [
          "Use lowercase letters for file and folder names (about.html, not About.html)",
          "Use hyphens instead of spaces — contact-us.html, not contact us.html",
          "Keep names short but descriptive — product-page.html is clearer than page2.html",
          "Stay consistent — pick one style and stick to it across the whole project"
        ]
      },

      {
        heading: "Why This Matters as Your Project Grows",

        paragraphs: [
          "A single-page project might survive being messy, but as you add more pages, more images, and more scripts (exactly like the MERN platform you're building right now), a clear folder structure becomes essential — both for you to navigate quickly, and for anyone else who opens your project later."
        ]
      },

      {
        heading: "Important Points to Remember",

        points: [
          "Keep CSS, JavaScript, and images in their own separate, clearly named folders.",
          "index.html conventionally sits at the root, acting as the homepage.",
          "Use lowercase names with hyphens, avoiding spaces and capital letters.",
          "Good organization saves significant time as a project grows larger."
        ]
      }

    ]
  }

];

