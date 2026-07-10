export const gitTopics = [
  "What is Version Control?",
  "What is Git? What is GitHub?",
  "Installing Git & Initial Setup",
  "Git Init & Repository Basics",
  "Git Status & Git Add",
  "Git Commit",
  "Viewing History - Git Log",
  ".gitignore File",
  "Branching Basics",
  "Creating & Switching Branches",
  "Merging Branches",
  "Merge Conflicts",
  "Git Diff",
  "Undoing Changes - Git Reset",
  "Undoing Changes - Git Revert",
  "Stashing Changes",
  "Remote Repositories Intro",
  "Connecting to GitHub - Git Remote",
  "Git Push",
  "Git Pull & Git Fetch",
  "Cloning a Repository",
  "Creating a GitHub Repository",
  "README Files",
  "Forking a Repository",
  "Pull Requests",
  "Collaborating with Others",
  "GitHub Issues",
  "Git Workflow Best Practices"
];

export const gitLessons = [

  {
    title: "What is Version Control?",
    subtitle: "Explained Like Google Docs' Version History",

    sections: [

      {
        heading: "Think About Editing a Google Doc",

        paragraphs: [
          "When you edit a Google Doc, you can open 'Version History' and see every past save — what it looked like yesterday, last week, even before that one paragraph you accidentally deleted. If something goes wrong, you can jump back to any earlier version, instead of losing your work forever.",

          "Version control is exactly this idea, applied to code — a system that tracks every change you make to your project over time, letting you go back to any earlier point whenever needed."
        ]
      },

      {
        heading: "Why Not Just Save Multiple Copies Manually?",

        paragraphs: [
          "You might think: why not just save 'project-v1', 'project-v2', 'project-final', 'project-final-FINAL'? This quickly becomes messy and confusing — which one actually has the latest login fix? Which one broke the CSS? Version control solves this properly, tracking exact changes with clear descriptions, instead of relying on confusingly-named folders."
        ]
      },

      {
        heading: "What Version Control Actually Lets You Do",

        points: [
          "See exactly what changed, and when, in your project's history",
          "Go back to an earlier working version, if something breaks",
          "Work on a new feature separately, without disturbing your main working code (covered in 'Branching Basics')",
          "Collaborate with others on the same project, without overwriting each other's work"
        ]
      },

      {
        heading: "A Quick Connection to Your Own Project",

        paragraphs: [
          "Remember your memory mentions a remote Node.js/React project opportunity with an internship certificate? Virtually every real-world software project, professional or personal, uses version control — it's not optional once you start collaborating or working seriously, which is exactly why this course exists."
        ]
      },

      {
        heading: "Important Points to Remember",

        points: [
          "Version control tracks every change made to a project over time.",
          "It lets you safely revert to earlier versions if something breaks.",
          "It's far more reliable than manually saving multiple differently-named folders.",
          "It's an essential, expected skill for virtually any real-world coding project."
        ]
      }

    ]
  },

  {
    title: "What is Git? What is GitHub?",
    subtitle: "Explained Like a Personal Diary vs a Cloud-Backed Photo Album",

    sections: [

      {
        heading: "Think About Two Different Things People Often Confuse",

        paragraphs: [
          "A personal diary is something you physically write in, tracking your own thoughts and days, kept entirely on your own desk. A cloud photo album, on the other hand, is an online service where you (and others, if you choose) can view, share, and back up photos from anywhere.",

          "Git and GitHub are often confused the exact same way — Git is the actual tool that tracks your changes (like the diary itself), while GitHub is an online service that stores and shares your Git project (like the cloud album)."
        ]
      },

      {
        heading: "Git — The Actual Version Control Tool",

        paragraphs: [
          "Git runs entirely on your own computer. It's the tool that actually does the 'tracking changes over time' job described in 'What is Version Control?' — recording snapshots of your project, letting you go back to earlier points, all happening locally, with no internet connection required."
        ]
      },

      {
        heading: "GitHub — An Online Home for Git Projects",

        paragraphs: [
          "GitHub is a website/service that stores your Git project online, lets you share it with others, collaborate with teammates, and showcase your work publicly (employers often look at GitHub profiles!). GitHub isn't the only such service (GitLab and Bitbucket are similar alternatives), but it's by far the most popular."
        ]
      },

      {
        heading: "A Simple Way to Remember the Difference",

        points: [
          "Git = the tool, the actual diary-keeping process, working on your own computer",
          "GitHub = a website, the cloud album hosting your project online for others to see",
          "You can use Git entirely without GitHub (just tracking changes locally)",
          "You can't use GitHub without Git (since GitHub stores Git's tracked history)"
        ]
      },

      {
        heading: "Why Both Matter for Your MERN Project",

        paragraphs: [
          "Remember exploring a remote Node.js/React project opportunity that came with an internship certificate? Real teams almost always use both together — Git tracking each person's individual changes, GitHub hosting the shared project where everyone's work comes together, and where your finished project can be shown to others, including future employers."
        ]
      },

      {
        heading: "Important Points to Remember",

        points: [
          "Git is the actual version control tool, running locally on your computer.",
          "GitHub is an online service for hosting, sharing, and collaborating on Git projects.",
          "Git works independently of GitHub; GitHub depends on Git.",
          "GitHub profiles are also commonly reviewed by employers as a portfolio of your work."
        ]
      }

    ]
  },

  {
    title: "Installing Git & Initial Setup",
    subtitle: "Explained Like Preparing Your Toolbox and Writing Your Name on It",

    sections: [

      {
        heading: "Think About Getting a New Toolbox Ready",

        paragraphs: [
          "Before using a new toolbox, you'd first make sure it's actually in your workshop, and you might label it with your name, so anyone seeing tools you've used knows exactly who worked on what.",

          "Setting up Git follows this same two-step idea — first installing the tool itself, then telling it who you are, so every piece of work you do gets correctly labeled with your name."
        ]
      },

      {
        heading: "Step 1: Installing Git",

        points: [
          "Visit git-scm.com and download the version for your operating system (Windows/Mac/Linux)",
          "Install it like any normal application, similar to installing VS Code back in the HTML course's 'Setting Up Environment'",
          "This gives you access to Git commands, typically run through a terminal"
        ]
      },

      {
        heading: "Verifying the Installation",

        code: `git --version`,

        paragraphs: [
          "Running this in your terminal should print something like 'git version 2.43.0' — confirming the toolbox has actually arrived and is ready to use, before you try doing anything with it."
        ]
      },

      {
        heading: "Step 2: Telling Git Who You Are",

        code: `git config --global user.name "Nishitha"
git config --global user.email "your-email@example.com"`,

        paragraphs: [
          "This is the 'writing your name on the toolbox' step — these two commands tell Git your identity, which gets attached to every single change (commit, covered in 'Git Commit') you make from now on, so your work is always correctly credited to you."
        ]
      },

      {
        heading: "--global — Setting This Once for All Projects",

        paragraphs: [
          "--global means this name/email setting applies to every Git project on your computer, not just one specific folder — like labeling the entire toolbox once, rather than re-labeling it separately for every single job you take it to."
        ]
      },

      {
        heading: "Important Points to Remember",

        points: [
          "Install Git from git-scm.com, then verify it with git --version.",
          "git config --global user.name/user.email sets your identity for all your Git work.",
          "This identity gets attached to every change you make, crediting work correctly.",
          "This is a one-time setup per computer, not something you repeat for every project."
        ]
      }

    ]
  },

  {
    title: "Git Init & Repository Basics",
    subtitle: "Explained Like Labeling a New Notebook 'Track This'",

    sections: [

      {
        heading: "Think About Starting a New Tracked Notebook",

        paragraphs: [
          "Imagine picking up a brand new, completely blank notebook and writing 'TRACK ALL CHANGES TO THIS' on its cover. From that exact moment, every page you add, every edit you make inside it starts being something Git pays attention to — pages added before that label was written aren't automatically tracked.",

          "git init does exactly this — it turns an ordinary folder into a Git-tracked project, called a 'repository' (or 'repo' for short)."
        ]
      },

      {
        heading: "Running git init",

        code: `cd my-project
git init`,

        paragraphs: [
          "cd my-project moves your terminal into that specific project folder (similar logic to how you opened a folder in VS Code back in the HTML course). git init then labels this exact folder as a Git repository — like writing 'track this' on the notebook's cover."
        ]
      },

      {
        heading: "What Actually Happens Behind the Scenes",

        paragraphs: [
          "A hidden folder named .git gets created inside your project — this is where Git secretly stores all its tracking history, snapshots, and settings. You'll almost never touch this folder directly, but it's the engine quietly running everything Git does for that project."
        ]
      },

      {
        heading: "One Repository, One Project",

        paragraphs: [
          "Typically, you run git init exactly once, right when starting a new project — not inside every single sub-folder. Your entire MERN project folder (containing both your frontend and backend, or each set up separately) would each get its own single git init, tracking everything from that root folder downward."
        ]
      },

      {
        heading: "Checking If a Folder Is Already a Repository",

        paragraphs: [
          "If you see a (hidden) .git folder already inside a project, or if commands like git status (covered next) work without errors, that folder has already been git init'd — running it again is generally harmless, but unnecessary."
        ]
      },

      {
        heading: "Important Points to Remember",

        points: [
          "git init turns a regular folder into a Git repository, ready to be tracked.",
          "It creates a hidden .git folder, storing all of Git's tracking history.",
          "Run it once per project, typically at that project's root folder.",
          "Only changes made AFTER git init are tracked — it doesn't retroactively track prior history."
        ]
      }

    ]
  },

  {
    title: "Git Status & Git Add",
    subtitle: "Explained Like Sorting Laundry Before Washing It",

    sections: [

      {
        heading: "Think About Doing Laundry",

        paragraphs: [
          "Before throwing clothes into the washing machine, you might first check the laundry basket to see what's actually dirty, then deliberately pick out specific items to wash in this load — maybe not everything in the basket needs washing right now.",

          "git status and git add work exactly this way — first checking what's changed, then deliberately choosing which specific changes to include in your next 'commit' (covered in the next topic)."
        ]
      },

      {
        heading: "git status — Checking What's Changed",

        code: `git status`,

        paragraphs: [
          "This shows you exactly which files have been modified, added, or deleted since your last commit — like glancing into the laundry basket to see what's actually dirty, before deciding what to do about it. This is one of the most frequently run Git commands, used constantly to check your current situation."
        ]
      },

      {
        heading: "Understanding git status's Output",

        points: [
          "Untracked files — brand new files Git has never seen before, like a new item never put in the basket",
          "Modified files — existing tracked files that have changed since the last commit",
          "Nothing to commit — everything is already saved as-is, like an empty laundry basket"
        ]
      },

      {
        heading: "git add — Choosing What to Include",

        code: `git add index.html
git add styles.css

// Or, to add absolutely everything that's changed:
git add .`,

        paragraphs: [
          "Adding a specific file is like picking out one particular shirt from the basket. git add . (with a dot) adds everything that's changed at once — like deciding to wash the entire basket's contents in this one load, rather than picking individual items."
        ]
      },

      {
        heading: "Why This 'Staging' Step Exists",

        paragraphs: [
          "git add moves changes to what's called the 'staging area' — a deliberate, in-between step before actually committing (saving permanently). This lets you carefully choose exactly which changes belong together in one commit, rather than accidentally bundling unrelated changes together, like sorting laundry into separate, sensible loads rather than washing everything chaotically together."
        ]
      },

      {
        heading: "Important Points to Remember",

        points: [
          "git status shows which files have changed since the last commit.",
          "git add stages specific files, preparing them to be included in the next commit.",
          "git add . stages every changed file at once.",
          "Staging lets you deliberately group related changes together, before committing them."
        ]
      }

    ]
  },

  {
    title: "Git Commit",
    subtitle: "Explained Like Taking a Snapshot Photo with a Caption",

    sections: [

      {
        heading: "Think About Taking a Labeled Photo",

        paragraphs: [
          "Imagine taking a photo of your desk right now, and writing a caption underneath it: 'Finished organizing the bookshelf.' That photo permanently captures exactly how things looked at that moment, with the caption explaining what specifically changed since the last photo.",

          "git commit does exactly this for your project — it permanently saves a snapshot of everything currently staged (from 'Git Add'), along with a message describing what changed."
        ]
      },

      {
        heading: "Making a Commit",

        code: `git add .
git commit -m "Added login page styling"`,

        paragraphs: [
          "-m lets you write the 'caption' directly in the same command — \"Added login page styling\" clearly describes what this specific snapshot captures, exactly like that caption explaining what changed in your desk photo."
        ]
      },

      {
        heading: "Why Good Commit Messages Matter",

        paragraphs: [
          "A vague caption like 'stuff' or 'updates' tells future-you (or teammates) nothing useful when scrolling back through history later. A clear message like 'Fixed login validation bug' immediately tells anyone exactly what that snapshot represents, without needing to dig through the actual code changes to figure it out."
        ]
      },

      {
        heading: "A Typical Commit Workflow",

        code: `git status              // Check what's changed
git add .                // Stage the changes
git commit -m "..."      // Save a labeled snapshot`,

        paragraphs: [
          "This three-step rhythm — check, stage, commit — becomes second nature very quickly, and is genuinely the most common sequence of Git commands you'll run, repeatedly, throughout any project."
        ]
      },

      {
        heading: "Commits Build Up Your Project's Story",

        paragraphs: [
          "Over time, your project accumulates many small commits — 'Set up project structure', 'Added login page', 'Fixed login validation bug', 'Connected to MongoDB' — together telling the complete story of how your project was built, snapshot by snapshot, exactly like flipping through a labeled photo album from start to finish."
        ]
      },

      {
        heading: "Important Points to Remember",

        points: [
          "git commit permanently saves a snapshot of everything currently staged.",
          "-m \"message\" attaches a description explaining what that snapshot changed.",
          "Write clear, specific commit messages — they matter a lot when reviewing history later.",
          "Status → add → commit is the standard, frequently repeated Git workflow rhythm."
        ]
      }

    ]
  },

  {
    title: "Viewing History - Git Log",
    subtitle: "Explained Like Flipping Through a Photo Album's Timeline",

    sections: [

      {
        heading: "Think About Flipping Through an Old Photo Album",

        paragraphs: [
          "A photo album lets you flip back through every photo in order, each with its own caption and date, letting you trace exactly how things changed over time — when a particular addition happened, who took which photo.",

          "git log gives you exactly this — a complete timeline of every commit (snapshot) ever made in your project, in order."
        ]
      },

      {
        heading: "Viewing the Full History",

        code: `git log`,

        paragraphs: [
          "This shows every commit, each with a unique ID, the author's name (from 'Installing Git & Initial Setup'), the exact date/time, and the commit message — like flipping through every labeled photo in the album, from most recent backward."
        ]
      },

      {
        heading: "A Cleaner, Condensed View",

        code: `git log --oneline`,

        paragraphs: [
          "Instead of the full detailed view, this shows just one compact line per commit — a shortened ID and the message — like glancing at just the captions written under each photo, without needing every photo's full details spread out."
        ]
      },

      {
        heading: "Example Output",

        code: `a1b2c3d Fixed login validation bug
e4f5g6h Added login page styling
i7j8k9l Set up project structure`,

        paragraphs: [
          "Each line represents one commit — reading top to bottom (most recent first), you can clearly trace the project's story, exactly the narrative idea introduced at the end of 'Git Commit'."
        ]
      },

      {
        heading: "Why This Matters When Things Go Wrong",

        paragraphs: [
          "If a bug suddenly appears, git log helps you pinpoint roughly when it might have been introduced, by reviewing recent commit messages — like looking back through your photo album to spot exactly when something changed, rather than guessing blindly."
        ]
      },

      {
        heading: "Important Points to Remember",

        points: [
          "git log shows the complete history of commits made in a project.",
          "Each commit includes a unique ID, author, date, and message.",
          "git log --oneline gives a quicker, condensed view, one line per commit.",
          "Reviewing history is especially useful for tracing when a specific change or bug was introduced."
        ]
      }

    ]
  },

  {
    title: ".gitignore File",
    subtitle: "Explained Like a 'Do Not Pack These' List When Moving Houses",

    sections: [

      {
        heading: "Think About Moving to a New House",

        paragraphs: [
          "When packing for a house move, you wouldn't pack the trash bin's contents, or yesterday's used tissues — some things genuinely don't belong in the move at all, and you might keep a quick mental (or written) list of items to deliberately leave behind.",

          "A .gitignore file is exactly this 'do not pack' list — telling Git which specific files or folders to never track at all, no matter how often they change."
        ]
      },

      {
        heading: "Creating a .gitignore File",

        code: `node_modules/
.env
.DS_Store
*.log`,

        paragraphs: [
          "This is just a plain text file named exactly .gitignore, placed in your project's root folder, listing patterns for what Git should completely ignore — never track, never show in git status, never include in any commit."
        ]
      },

      {
        heading: "Why node_modules/ Is Almost Always Ignored",

        paragraphs: [
          "Remember installing packages with npm install in your MERN project? node_modules can contain thousands of files, and can always be regenerated from your package.json by running npm install again — tracking it would be like packing every single nail and screw from your old house, when the new house's hardware store already sells the exact same ones."
        ]
      },

      {
        heading: "Why .env Files Are Critical to Ignore",

        paragraphs: [
          "Remember your server.js using process.env.MONGO_URI and process.env.JWT_SECRET, loaded from a .env file? This file typically contains sensitive secrets — database passwords, API keys. Accidentally committing it (especially to a public GitHub repository) could expose these secrets to anyone. Always ignore .env files, without exception."
        ]
      },

      {
        heading: "Common Patterns You'll Use Often",

        points: [
          "node_modules/ — installed packages, regenerable from package.json",
          ".env — sensitive environment variables and secrets",
          "*.log — log files generated while running your app",
          ".DS_Store / Thumbs.db — junk files automatically created by Mac/Windows file explorers"
        ]
      },

      {
        heading: "Important Points to Remember",

        points: [
          ".gitignore lists files/folders that Git should never track at all.",
          "node_modules/ is ignored since it can be regenerated from package.json.",
          ".env files are critical to ignore, since they often contain sensitive secrets.",
          "Set up .gitignore early in a project, ideally right after git init, before your first commit."
        ]
      }

    ]
  },

  {
    title: "Branching Basics",
    subtitle: "Explained Like Writing Parallel Versions of the Same Story",

    sections: [

      {
        heading: "Think About Writing Alternate Story Endings",

        paragraphs: [
          "Imagine writing a story up to a certain chapter, then wanting to try two different endings — without losing your original draft. You could create a separate copy specifically to experiment with one ending, while your original 'main' story stays completely untouched and safe in the meantime.",

          "A branch in Git is exactly this — a separate, parallel line of work, letting you experiment or build something new without disturbing your project's main, stable version."
        ]
      },

      {
        heading: "The Default Branch — main",

        paragraphs: [
          "Every Git repository starts with one default branch, typically named main (or sometimes master, in older projects) — this represents your project's primary, stable storyline, the version you'd consider 'the real one'."
        ]
      },

      {
        heading: "Why Branch Instead of Just Editing main Directly?",

        paragraphs: [
          "If you're building a new feature (say, a dark mode toggle) directly on main, and something breaks halfway through, your entire stable project is now broken too. Working on a separate branch keeps main completely safe and working, while you freely experiment — only bringing the new feature into main once it's actually finished and working properly (we'll cover exactly how, in 'Merging Branches')."
        ]
      },

      {
        heading: "Common Branch Naming Patterns",

        points: [
          "feature/dark-mode — a new feature being built",
          "fix/login-bug — fixing a specific bug",
          "experiment/new-layout — trying something out, uncertain if it'll be kept"
        ]
      },

      {
        heading: "A Quick Visual Mental Model",

        paragraphs: [
          "Picture main as one continuous timeline moving forward. Creating a branch splits off a second, parallel timeline at that exact point — both timelines can keep moving forward independently, with their own separate commits, until you decide to bring them back together (or simply discard one, if that experiment didn't work out)."
        ]
      },

      {
        heading: "Important Points to Remember",

        points: [
          "A branch is a separate, parallel line of development within the same project.",
          "main (or master) is typically the default, stable branch.",
          "Branching lets you experiment or build features without risking your stable main code.",
          "We'll cover actually creating, switching, and merging branches in the next two topics."
        ]
      }

    ]
  },

  {
    title: "Creating & Switching Branches",
    subtitle: "Explained Like Switching Train Tracks",

    sections: [

      {
        heading: "Think About a Train Switching Tracks",

        paragraphs: [
          "A train can switch onto a different track at a junction, continuing forward on that new path while the original track remains exactly as it was, unused for now. The train driver can later switch back to the original track whenever needed.",

          "Creating and switching branches in Git works exactly this way — splitting off a new track (branch) from your current position, and moving your work onto it, while main stays completely untouched in the meantime."
        ]
      },

      {
        heading: "Creating a New Branch",

        code: `git branch feature/dark-mode`,

        paragraphs: [
          "This creates a brand new branch named feature/dark-mode (following the naming pattern from 'Branching Basics'), starting from exactly where you currently are — like laying down a new track branching off the main line, right at this current junction point."
        ]
      },

      {
        heading: "Switching to That Branch",

        code: `git checkout feature/dark-mode`,

        paragraphs: [
          "Creating a branch doesn't automatically move you onto it — checkout is the actual 'switch the train onto this track' action. After this, any new commits you make happen on feature/dark-mode, not on main."
        ]
      },

      {
        heading: "The Shortcut — Create and Switch in One Step",

        code: `git checkout -b feature/dark-mode`,

        paragraphs: [
          "-b combines both steps into one command — creating the branch AND immediately switching onto it, like a train switching tracks the instant a new branch line is laid down, rather than two separate actions."
        ]
      },

      {
        heading: "Checking Which Branch You're Currently On",

        code: `git branch`,

        paragraphs: [
          "This lists every branch in your project, with an asterisk (*) marking exactly which one you're currently on — like checking which track your train is presently running on, especially useful if you've switched between several branches and lost track."
        ]
      },

      {
        heading: "Switching Back to main",

        code: `git checkout main`,

        paragraphs: [
          "Once you're done experimenting (or need to pause), switching back to main returns you to that original, stable track — your feature/dark-mode branch's commits stay safely intact on its own separate track, waiting for you whenever you switch back to it."
        ]
      },

      {
        heading: "Important Points to Remember",

        points: [
          "git branch <name> creates a new branch, without switching to it.",
          "git checkout <name> switches your current working branch.",
          "git checkout -b <name> creates and switches to a new branch in one step.",
          "git branch (no arguments) lists all branches, marking your current one with an asterisk."
        ]
      }

    ]
  },

  {
    title: "Merging Branches",
    subtitle: "Explained Like Combining Two Story Drafts Into One Final Version",

    sections: [

      {
        heading: "Think About Combining Two Drafts",

        paragraphs: [
          "Remember the 'parallel story endings' idea from 'Branching Basics'? Once you've decided one particular ending actually works well, you'd want to bring it back into your main, official story — combining that separate draft's good parts into the one true, final version.",

          "Merging in Git does exactly this — bringing the commits from one branch (like feature/dark-mode) into another (typically main), combining their work together."
        ]
      },

      {
        heading: "The Merge Workflow",

        code: `git checkout main
git merge feature/dark-mode`,

        paragraphs: [
          "First, switch TO the branch you want to receive the changes (main) — like opening your main story document, ready to paste in the good ending. Then, git merge feature/dark-mode brings all of that branch's commits into main."
        ]
      },

      {
        heading: "A Successful, Clean Merge",

        paragraphs: [
          "If the changes don't overlap with anything that's changed on main in the meantime, Git combines everything automatically and smoothly — like cleanly pasting in that alternate ending, with zero awkward overlaps in the rest of the story."
        ]
      },

      {
        heading: "After a Successful Merge",

        paragraphs: [
          "main now contains everything that was on feature/dark-mode, plus whatever was already on main. The feature branch itself still exists (until you choose to delete it), but its work has now successfully become part of main's official storyline."
        ]
      },

      {
        heading: "Deleting a Branch After Merging",

        code: `git branch -d feature/dark-mode`,

        paragraphs: [
          "Once a branch's work has been safely merged into main, it's common practice to delete that now-unneeded branch — like discarding a draft copy once its content has already been pasted into the final story, since you no longer need that separate document hanging around."
        ]
      },

      {
        heading: "Important Points to Remember",

        points: [
          "Merging combines one branch's commits into another, typically bringing feature work into main.",
          "Always checkout the branch that should RECEIVE the changes, before running merge.",
          "A clean merge happens automatically if there's no overlapping conflict (covered next).",
          "Branches are commonly deleted after merging, once their work is safely included elsewhere."
        ]
      }

    ]
  },

  {
    title: "Merge Conflicts",
    subtitle: "Explained Like Two Editors Changing the Same Sentence Differently",

    sections: [

      {
        heading: "Think About Two Editors Working on the Same Sentence",

        paragraphs: [
          "Imagine two editors working separately on copies of the same document. One changes a sentence to 'The hero arrives at dawn.' The other changes that exact same original sentence to 'The hero arrives at midnight.' When you try to combine both drafts, there's a genuine problem — which version should the final document actually use? Someone has to decide.",

          "A merge conflict in Git happens for exactly this reason — when two branches have changed the exact same lines of the exact same file in different, incompatible ways, and Git genuinely can't decide which version to keep automatically."
        ]
      },

      {
        heading: "When Git Reports a Conflict",

        code: `git merge feature/dark-mode

// Auto-merging styles.css
// CONFLICT (content): Merge conflict in styles.css
// Automatic merge failed; fix conflicts and then commit the result.`,

        paragraphs: [
          "Unlike the clean merge from the previous topic, Git stops here and asks YOU to decide — like the document's chief editor stepping in, since the two editors' conflicting changes can't be combined automatically."
        ]
      },

      {
        heading: "What a Conflict Looks Like Inside the File",

        code: `<<<<<<< HEAD
body { background-color: white; }
=======
body { background-color: black; }
>>>>>>> feature/dark-mode`,

        paragraphs: [
          "Git marks exactly where the conflict is — <<<<<<< HEAD shows your current branch's version, ======= separates them, and >>>>>>> feature/dark-mode shows the incoming branch's version. Like both editors' conflicting sentences printed side by side, clearly labeled, for you to compare."
        ]
      },

      {
        heading: "Resolving the Conflict",

        paragraphs: [
          "You manually edit the file, choosing one version, the other, or a combination of both, then remove all those <<<<<<<, =======, >>>>>>> marker lines entirely — like the chief editor deciding 'we'll go with midnight, but use the dawn description's wording', and cleaning up the document so it reads naturally again."
        ],

        code: `body { background-color: black; }`
      },

      {
        heading: "Finishing the Merge After Resolving",

        code: `git add styles.css
git commit -m "Resolved dark mode merge conflict"`,

        paragraphs: [
          "Once resolved, you stage and commit it just like any normal change (remember 'Git Status & Git Add' and 'Git Commit'?) — this tells Git you've made your decision, and the merge can now be considered complete."
        ]
      },

      {
        heading: "Important Points to Remember",

        points: [
          "A merge conflict happens when two branches change the exact same lines differently.",
          "Git marks conflicts directly in the file using <<<<<<<, =======, and >>>>>>> markers.",
          "You manually edit the file to resolve it, removing all marker lines.",
          "After resolving, stage and commit the file to complete the merge."
        ]
      }

    ]
  },

  {
    title: "Git Diff",
    subtitle: "Explained Like Track Changes in a Word Document",

    sections: [

      {
        heading: "Think About Microsoft Word's Track Changes",

        paragraphs: [
          "When 'Track Changes' is turned on in a Word document, deleted text shows with a strikethrough, and new text appears underlined or in a different color — letting you see precisely what was changed, not just the final result.",

          "git diff gives you this exact view for your code — showing precisely which lines were added, removed, or changed, rather than just the final files themselves."
        ]
      },

      {
        heading: "Viewing Unstaged Changes",

        code: `git diff`,

        paragraphs: [
          "This shows changes you've made but haven't yet staged with git add — like viewing tracked changes on a document before deciding which edits to actually accept into the next saved version."
        ]
      },

      {
        heading: "Understanding the Output Symbols",

        code: `- background-color: white;
+ background-color: black;`,

        points: [
          "A line starting with - (often shown in red) — this line was removed",
          "A line starting with + (often shown in green) — this line was added",
          "Lines with neither symbol are unchanged, shown for context"
        ]
      },

      {
        heading: "Viewing Staged Changes",

        code: `git diff --staged`,

        paragraphs: [
          "After running git add, regular git diff shows nothing for those files anymore — use --staged specifically to review exactly what's about to be included in your next commit, a useful final check before actually committing."
        ]
      },

      {
        heading: "Why This Matters Before Committing",

        paragraphs: [
          "Reviewing git diff before committing is like proofreading tracked changes before finalizing a document — catching an accidental change you didn't mean to include, or simply confirming exactly what this commit will represent, rather than committing blindly."
        ]
      },

      {
        heading: "Important Points to Remember",

        points: [
          "git diff shows exactly which lines were added or removed, not just final file contents.",
          "Lines starting with - were removed; lines starting with + were added.",
          "git diff (alone) shows unstaged changes; git diff --staged shows staged ones.",
          "Reviewing diffs before committing helps catch accidental or unintended changes."
        ]
      }

    ]
  },

  {
    title: "Undoing Changes - Git Reset",
    subtitle: "Explained Like Rewinding an Album and Discarding Everything After That Point",

    sections: [

      {
        heading: "Think About Rewinding a Photo Album",

        paragraphs: [
          "Imagine flipping back to a specific photo in an album, and deciding 'everything after this point was a mistake' — physically tearing out every page that came after it, leaving the album exactly as it looked at that earlier moment, as if those later additions never happened.",

          "git reset does exactly this — moving your project back to an earlier commit, and depending on how you use it, optionally discarding everything that happened afterward."
        ]
      },

      {
        heading: "Soft Reset — Keep the Changes, Just Undo the Commit",

        code: `git reset --soft HEAD~1`,

        paragraphs: [
          "HEAD~1 means 'one commit before where I am now'. --soft undoes the actual commit, but keeps all the changed files exactly as they were, now sitting staged and ready — like un-pasting that last photo from the album, but keeping the photo itself nearby, ready to redo the caption and paste it back in differently."
        ]
      },

      {
        heading: "Mixed Reset — The Default Behavior",

        code: `git reset HEAD~1`,

        paragraphs: [
          "Without --soft, this undoes the commit AND unstages the changes (back to plain, unstaged modifications) — but the actual file content changes are still kept on your computer, just no longer staged or committed."
        ]
      },

      {
        heading: "Hard Reset — Discard Everything Completely",

        code: `git reset --hard HEAD~1`,

        paragraphs: [
          "This is the most aggressive option — it discards the commit AND completely throws away the actual file changes too, exactly like tearing out and shredding those later album pages entirely, with no way to recover them afterward. Use --hard with real caution; it's genuinely destructive."
        ]
      },

      {
        heading: "An Important Safety Note",

        paragraphs: [
          "git reset --hard cannot be casually undone — there's no simple 'redo' button bringing back discarded uncommitted changes. Before using --hard, make sure you genuinely want to permanently discard that work, not just hide it temporarily (for that, see the next topic, 'Stashing Changes')."
        ]
      },

      {
        heading: "Important Points to Remember",

        points: [
          "git reset moves your branch back to an earlier commit.",
          "--soft undoes the commit but keeps changes staged; default (mixed) keeps them unstaged.",
          "--hard discards both the commit AND the actual file changes — genuinely destructive.",
          "Always be cautious with --hard, since it cannot be easily undone afterward."
        ]
      }

    ]
  },

  {
    title: "Undoing Changes - Git Revert",
    subtitle: "Explained Like Adding a Correction Entry Instead of Tearing Out a Page",

    sections: [

      {
        heading: "Think About Correcting a Published Diary Entry",

        paragraphs: [
          "If you'd already shared pages of your diary with friends, and later realized one entry had a mistake, you probably wouldn't tear that page out (your friends already read it, and ripping pages out of a shared, already-distributed diary is messy and confusing). Instead, you'd add a NEW entry: 'Correction to yesterday's entry: actually, it happened differently.'",

          "git revert works exactly this way — instead of erasing a past commit (like 'Git Reset' does), it creates a brand new commit that undoes the changes from an earlier one, while keeping the full history intact."
        ]
      },

      {
        heading: "Reverting a Specific Commit",

        code: `git revert a1b2c3d`,

        paragraphs: [
          "a1b2c3d is the specific commit's ID (remember seeing these in 'Viewing History - Git Log'?). This creates a NEW commit that precisely undoes whatever changes that specific commit introduced — like writing that fresh correction entry, rather than tearing out the original mistaken page."
        ]
      },

      {
        heading: "Why revert Is Safer for Shared/Published History",

        paragraphs: [
          "Remember reset --hard from the previous topic being genuinely destructive? If others have already pulled (downloaded, covered later in 'Git Pull & Git Fetch') that commit you want to undo, using reset on shared history creates confusing mismatches between everyone's copies. revert avoids this entirely, since it only adds new history, never erasing what already happened — exactly why it's preferred for anything already shared with others."
        ]
      },

      {
        heading: "Reset vs Revert — Quick Comparison",

        points: [
          "reset — rewrites history, as if certain commits never happened; risky once shared with others",
          "revert — adds new history that undoes earlier changes, keeping the full original record intact",
          "Use reset for your own local, not-yet-shared mistakes; use revert for anything already shared/pushed"
        ]
      },

      {
        heading: "Important Points to Remember",

        points: [
          "git revert creates a NEW commit that undoes a specific earlier commit's changes.",
          "Unlike reset, it doesn't erase history — the original commit still remains visible in the log.",
          "It's the safer choice for undoing changes that have already been shared with others.",
          "Reserve reset for your own local, unshared mistakes; prefer revert otherwise."
        ]
      }

    ]
  },

  {
    title: "Stashing Changes",
    subtitle: "Explained Like Putting Unfinished Work in a Drawer for an Urgent Task",

    sections: [

      {
        heading: "Think About an Urgent Interruption",

        paragraphs: [
          "Imagine you're halfway through cooking a complex dish — ingredients half-prepared, pots half-cleaned — when an urgent phone call suddenly demands your full attention elsewhere. You can't just abandon the messy kitchen, but you also can't finish cooking right now. So you might quickly slide everything into a drawer/corner, deal with the urgent call, then pull everything back out exactly as it was, continuing right where you left off.",

          "git stash does exactly this — temporarily setting aside your current, unfinished changes, letting you switch to something else entirely (like fixing an urgent bug on a different branch), then bringing those changes back later, exactly as you left them."
        ]
      },

      {
        heading: "Stashing Your Current Changes",

        code: `git stash`,

        paragraphs: [
          "This takes all your current uncommitted changes and tucks them away safely, returning your working folder back to its last clean commit — like sliding the half-finished cooking into the drawer, leaving the kitchen looking clean and ready for something else."
        ]
      },

      {
        heading: "Why Not Just Commit the Unfinished Work Instead?",

        paragraphs: [
          "Sometimes your work genuinely isn't ready to be committed yet (broken code, an incomplete thought) — committing it anyway would clutter your history with a messy, half-finished snapshot. Stashing lets you cleanly set it aside without forcing a premature commit, exactly like not wanting a messy half-cooked dish photo permanently in your album, but still needing somewhere safe to temporarily put it."
        ]
      },

      {
        heading: "Bringing Stashed Changes Back",

        code: `git stash pop`,

        paragraphs: [
          "Once you're ready to return to that unfinished work, pop restores everything exactly as you left it — like pulling everything back out of the drawer onto the counter, ready to continue cooking right where you stopped."
        ]
      },

      {
        heading: "Viewing What's Currently Stashed",

        code: `git stash list`,

        paragraphs: [
          "You can stash multiple separate sets of changes over time — this command lists everything currently tucked away, like checking exactly how many separate things you've temporarily stored in that drawer."
        ]
      },

      {
        heading: "Important Points to Remember",

        points: [
          "git stash temporarily sets aside uncommitted changes, cleaning your working folder.",
          "git stash pop brings the most recently stashed changes back, exactly as they were.",
          "Useful when needing to quickly switch tasks/branches without committing unfinished work.",
          "git stash list shows everything you currently have stashed, since multiple stashes can exist."
        ]
      }

    ]
  },

  {
    title: "Remote Repositories Intro",
    subtitle: "Explained Like a Branch Office vs the Head Office",

    sections: [

      {
        heading: "Think About a Company's Branch and Head Offices",

        paragraphs: [
          "A company might have a head office where the master records officially live, plus several branch offices, each keeping their own local copy of relevant records, periodically syncing updates back and forth with the head office to stay aligned.",

          "A 'remote repository' in Git is exactly this head office — typically hosted on GitHub, it's a central copy of your project that your local computer (the branch office) can sync changes with."
        ]
      },

      {
        heading: "Local vs Remote — A Key Distinction",

        points: [
          "Local repository — the Git project living on YOUR own computer, where you actually make commits (everything covered so far in this course)",
          "Remote repository — a copy of that same project hosted elsewhere (typically GitHub), accessible over the internet",
          "They start out identical, but can drift apart over time until you deliberately sync them"
        ]
      },

      {
        heading: "Why Remotes Matter So Much",

        points: [
          "Backup — if your computer breaks/gets lost, your work isn't gone, since a copy lives safely elsewhere",
          "Collaboration — teammates can access the same remote copy, syncing their own work with everyone else's",
          "Sharing/Portfolio — remember GitHub profiles being reviewed by employers, from 'What is Git? What is GitHub?'"
        ]
      },

      {
        heading: "A Preview of What's Coming",

        paragraphs: [
          "Over the next few topics, you'll learn the actual commands for connecting to a remote (git remote), sending your local commits there (git push), and bringing others' updates back down to your computer (git pull/fetch) — together, these make up the full 'sync between head office and branch office' workflow."
        ]
      },

      {
        heading: "Important Points to Remember",

        points: [
          "A remote repository is a copy of your project hosted elsewhere, typically on GitHub.",
          "Your local repository and the remote start identical, but can drift apart until synced.",
          "Remotes provide backup, enable collaboration, and let you showcase finished work publicly.",
          "Push and pull (covered in upcoming topics) are the core commands for syncing local and remote."
        ]
      }

    ]
  },

  {
    title: "Connecting to GitHub - Git Remote",
    subtitle: "Explained Like Saving the Head Office's Phone Number",

    sections: [

      {
        heading: "Think About Saving a Contact Number",

        paragraphs: [
          "Before you can call the head office, you first need to save their phone number under a name in your contacts — 'Head Office: 040-1234567'. Once saved, you can call them anytime just by saying 'call Head Office', rather than re-typing the full number each time.",

          "git remote add does exactly this — saving your GitHub repository's URL under a short, memorable name (almost always 'origin'), so Git knows exactly where to send or receive updates without you typing the full URL every time."
        ]
      },

      {
        heading: "Step 1: Create a Repository on GitHub First",

        paragraphs: [
          "Before connecting, you need an actual repository to connect to on GitHub (covered properly in 'Creating a GitHub Repository'). GitHub will show you a URL like https://github.com/yourusername/your-repo.git — copy this, since it's the 'head office phone number' you'll save next."
        ]
      },

      {
        heading: "Step 2: Save That URL as 'origin'",

        code: `git remote add origin https://github.com/yourusername/your-repo.git`,

        paragraphs: [
          "'origin' is just a conventional nickname for your main remote — the same way you'd label the head office contact 'Head Office' instead of a long cryptic number. You could name it anything, but 'origin' is the universal standard everyone uses."
        ]
      },

      {
        heading: "Verifying the Connection",

        code: `git remote -v`,

        paragraphs: [
          "This lists every remote URL currently saved, confirming origin is pointing to the correct GitHub repository — like checking your contacts list to confirm the number was saved correctly before making an important call."
        ]
      },

      {
        heading: "Important Points to Remember",

        points: [
          "git remote add origin <URL> saves a GitHub repository's URL under the nickname 'origin'.",
          "'origin' is a universal convention — virtually every project uses this name for the main remote.",
          "git remote -v verifies which URLs your remotes are currently pointing to.",
          "This connection step is done once per project, not repeated for every push or pull."
        ]
      }

    ]
  },

  {
    title: "Git Push",
    subtitle: "Explained Like Sending Your Branch Office's Work to the Head Office",

    sections: [

      {
        heading: "Think About Sending Reports to Head Office",

        paragraphs: [
          "Once your branch office has completed some work and recorded it locally, you'd send those finished reports up to the head office so they're officially on record there too, and so other branches can also access them.",

          "git push is exactly this sending step — uploading your local commits to the remote repository on GitHub, making them available there as well."
        ]
      },

      {
        heading: "Pushing for the First Time",

        code: `git push -u origin main`,

        paragraphs: [
          "-u origin main does two things at once: it pushes your local main branch to the remote (origin), AND sets up a permanent link between your local main and the remote main, so future pushes can simply use git push without specifying origin main again — like saving the head office's preferred report format once, so every subsequent submission automatically uses the right format."
        ]
      },

      {
        heading: "Subsequent Pushes",

        code: `git push`,

        paragraphs: [
          "After that first -u setup, this single command is all you need — Git already knows where to send it, like calling 'Head Office' from your contacts directly, without re-typing their number."
        ]
      },

      {
        heading: "Pushing a Feature Branch",

        code: `git push origin feature/dark-mode`,

        paragraphs: [
          "You're not limited to pushing main — pushing a specific branch makes it available on GitHub too, which is how Pull Requests (covered later) work, letting others review your feature branch before it gets merged into main."
        ]
      },

      {
        heading: "What Happens on GitHub After Pushing",

        paragraphs: [
          "Your commits, files, and commit history all become visible on your GitHub repository's page — including everyone who can access that repo. This is the moment your local work becomes genuinely shared and backed up."
        ]
      },

      {
        heading: "Important Points to Remember",

        points: [
          "git push uploads your local commits to the remote repository on GitHub.",
          "git push -u origin main sets up the branch link on the first push; subsequent pushes just need git push.",
          "You can push any branch, not just main.",
          "Once pushed, commits are visible on GitHub and backed up safely."
        ]
      }

    ]
  },

  {
    title: "Git Pull & Git Fetch",
    subtitle: "Explained Like Receiving Updates From the Head Office",

    sections: [

      {
        heading: "Think About Receiving Reports From Head Office",

        paragraphs: [
          "A branch office might receive an updated report from head office in two ways: either someone delivers it, reads it aloud, and immediately integrates the updates into your existing local records, or they simply deliver the package to your desk first, letting you review it yourself before deciding when to integrate it.",

          "git pull and git fetch are exactly these two approaches — both retrieve updates from the remote, but differ in what they do with those updates immediately afterward."
        ]
      },

      {
        heading: "git pull — Fetch and Integrate in One Step",

        code: `git pull origin main`,

        paragraphs: [
          "This downloads whatever new commits exist on the remote's main branch AND immediately merges them into your current local branch in one smooth step — like receiving and immediately integrating the head office's latest updates, all at once."
        ]
      },

      {
        heading: "git fetch — Download Without Immediately Integrating",

        code: `git fetch origin`,

        paragraphs: [
          "This downloads the latest updates from the remote, but keeps them separate for now, letting you inspect them first before deciding to merge — like receiving the head office's package on your desk, reviewing its contents at your own pace, before officially integrating them into your local records."
        ]
      },

      {
        heading: "When to Use Which",

        points: [
          "git pull — most common day-to-day use, when you trust the incoming changes and want them integrated immediately",
          "git fetch — useful when you want to check what changes are incoming before committing to integrating them, especially on a shared project with active teammates"
        ]
      },

      {
        heading: "A Very Common Daily Workflow",

        code: `git pull origin main   // Get latest changes from teammates
// ...do your work...
git add .
git commit -m "Your changes"
git push               // Send your work back up`,

        paragraphs: [
          "Pull first (to get everyone else's latest work), do your own work, then push — this rhythm keeps your local copy aligned with the team's progress, minimizing merge conflicts from working on outdated code."
        ]
      },

      {
        heading: "Important Points to Remember",

        points: [
          "git pull downloads remote changes AND immediately merges them into your current branch.",
          "git fetch downloads remote changes but keeps them separate, for you to review first.",
          "Pulling before starting new work is good habit, keeping your local copy up to date.",
          "The pull → work → push rhythm is the core collaborative daily workflow."
        ]
      }

    ]
  },

  {
    title: "Cloning a Repository",
    subtitle: "Explained Like Getting a Complete Copy of Someone Else's Notebook",

    sections: [

      {
        heading: "Think About Copying a Complete Notebook",

        paragraphs: [
          "If a friend has a notebook full of useful notes, you might ask them to photocopy every single page for you — giving you a complete, standalone copy you can use and write in yourself, without affecting their original.",

          "git clone gives you exactly this for a GitHub repository — downloading the complete project, including all its files, every commit in its history, and all its branches, ready to work with immediately on your own computer."
        ]
      },

      {
        heading: "Cloning a Repository",

        code: `git clone https://github.com/username/repository-name.git`,

        paragraphs: [
          "This creates a new folder on your computer named after the repository, containing everything from that GitHub repo — all files, full commit history, and even the remote 'origin' already configured pointing back to the original, so pushing and pulling work immediately without any extra setup."
        ]
      },

      {
        heading: "When You'd Clone vs When You'd git init",

        points: [
          "git init — starting a completely new project from scratch on your computer, then connecting it to GitHub yourself",
          "git clone — getting a copy of an existing project from GitHub (your own, or someone else's) to your computer",
          "For joining an existing team project, cloning is almost always the correct starting step"
        ]
      },

      {
        heading: "A Common Real Scenario",

        paragraphs: [
          "When you get a new laptop, or join a new team project, or want to contribute to an open-source project on GitHub — cloning is always step one. It gives you the complete project immediately, rather than manually recreating its structure."
        ]
      },

      {
        heading: "Important Points to Remember",

        points: [
          "git clone downloads a complete copy of a GitHub repository to your computer.",
          "The cloned copy includes all files, complete history, and all branches.",
          "The remote 'origin' is automatically configured pointing to the original repo.",
          "Use clone to get an existing project; use git init for starting from scratch."
        ]
      }

    ]
  },

  {
    title: "Creating a GitHub Repository",
    subtitle: "Explained Like Opening a New Filing Cabinet at Head Office",

    sections: [

      {
        heading: "Think About Setting Up a New Filing Cabinet",

        paragraphs: [
          "When a new project starts at an office, someone sets up a new, clearly labeled filing cabinet at the head office — an official home for all that project's documents, ready to receive submissions from branch offices.",

          "Creating a GitHub repository does the exact same thing — setting up an official online home for your project, ready to receive pushes from your local repository."
        ]
      },

      {
        heading: "Creating a Repository on GitHub",

        points: [
          "Log into github.com, click the '+' icon (top right) → 'New repository'",
          "Give it a clear name (e.g. 'mern-learning-platform')",
          "Choose Public (visible to anyone) or Private (only you and chosen collaborators)",
          "Leave 'Initialize with README' unchecked for now, if you're connecting an existing local project",
          "Click 'Create repository'"
        ]
      },

      {
        heading: "After Creating — GitHub Shows You Exactly What to Do",

        paragraphs: [
          "GitHub displays ready-to-copy commands for connecting your existing local project to this new remote repository — exactly the git remote add origin and git push -u origin main commands from 'Connecting to GitHub - Git Remote' and 'Git Push', all pre-filled with your specific repo's URL."
        ]
      },

      {
        heading: "Public vs Private — Which to Choose?",

        points: [
          "Public — anyone can view your code; good for portfolio projects, open-source contributions, or anything you want employers to see",
          "Private — only you (and whoever you specifically invite) can view it; better for personal/sensitive projects or work-in-progress items you're not ready to share yet",
          "You can change this setting later, so don't overthink it initially"
        ]
      },

      {
        heading: "Important Points to Remember",

        points: [
          "GitHub repositories are created through the GitHub website interface, not from the terminal.",
          "Public repos are visible to everyone; private repos are restricted to invited collaborators.",
          "After creation, GitHub displays exact commands for connecting your local project.",
          "Leave 'Initialize with README' unchecked when connecting an existing local project."
        ]
      }

    ]
  },

  {
    title: "README Files",
    subtitle: "Explained Like the Cover Page and Summary of a Project Report",

    sections: [

      {
        heading: "Think About a Project Report's Cover Page",

        paragraphs: [
          "A well-structured project report always has a cover page with the project's title, a brief summary of what it's about, and instructions for reviewers — letting anyone pick it up and immediately understand what they're looking at, without needing to read every single page first.",

          "A README file serves this exact purpose for a GitHub repository — the first thing anyone sees when they open your project page, describing what the project is, how to set it up, and how to use it."
        ]
      },

      {
        heading: "Creating a README",

        code: `# My MERN Learning Platform

A beginner-friendly, full-stack learning platform built with the MERN stack.

## Features
- Interactive course content with real-life examples
- Progress tracking per course
- JWT authentication

## Setup
1. Clone the repository
2. Run npm install in both frontend and backend folders
3. Add your .env file with MONGO_URI and JWT_SECRET
4. Run npm run dev`,

        paragraphs: [
          "README files use Markdown formatting (the # for headings, ## for sub-headings, - for bullet points) which GitHub automatically renders into nicely formatted text on your repository's main page."
        ]
      },

      {
        heading: "What a Good README Typically Includes",

        points: [
          "Project title and a brief, clear description of what it does",
          "Technologies used (e.g. React, Node.js, MongoDB)",
          "Installation and setup instructions (so others can run your project locally)",
          "How to use it, or any important notes for contributors",
          "Your name/credits, optionally"
        ]
      },

      {
        heading: "Why READMEs Matter for Your Portfolio",

        paragraphs: [
          "When employers or collaborators visit your GitHub, the README is the first thing they read — a clear, professional README immediately signals that you understand not just how to write code, but how to communicate about it, which is genuinely valued at every level of software development."
        ]
      },

      {
        heading: "Important Points to Remember",

        points: [
          "README.md is a Markdown file that GitHub displays automatically on a repository's main page.",
          "It's the first thing anyone sees — it should clearly explain what your project is and how to use it.",
          "A well-written README significantly improves how professional your GitHub portfolio looks.",
          "Update it as your project evolves, so it always accurately reflects what the project currently does."
        ]
      }

    ]
  },

  {
    title: "Forking a Repository",
    subtitle: "Explained Like Officially Photocopying Someone Else's Entire Filing Cabinet",

    sections: [

      {
        heading: "Think About Officially Copying Someone's Filing Cabinet",

        paragraphs: [
          "Imagine wanting to use another office's project files as a starting point for your own separate project — you'd officially photocopy their entire filing cabinet and place that copy under your own name, so you can work with it freely, without directly changing their original cabinet at all.",

          "Forking a GitHub repository does exactly this — creating your own complete copy of someone else's repository, under your own GitHub account, where you can freely make changes without affecting the original project."
        ]
      },

      {
        heading: "How to Fork on GitHub",

        paragraphs: [
          "Visit any GitHub repository, click the 'Fork' button in the top right corner — GitHub creates an instant complete copy under your own account, with the same files, history, and branches, clearly labeled as 'forked from original-owner/repo-name'."
        ]
      },

      {
        heading: "After Forking — Cloning Your Fork Locally",

        code: `git clone https://github.com/YOUR-username/forked-repo-name.git`,

        paragraphs: [
          "Forking only creates the copy on GitHub — you'd then clone YOUR fork to your computer (from 'Cloning a Repository') to actually work with it locally, just like photocopying the cabinet to your office, then actually opening it to work with the papers inside."
        ]
      },

      {
        heading: "Fork vs Clone — A Key Difference",

        points: [
          "Clone — downloads someone's repo to your computer, but you're still directly connected to their original (can't push back unless they gave you permission)",
          "Fork — creates your own independent copy ON GITHUB first, then you clone YOUR copy, so you can push freely since it's your account",
          "Forking is the standard first step for contributing to any open-source project"
        ]
      },

      {
        heading: "Important Points to Remember",

        points: [
          "Forking creates your own complete copy of another repository on GitHub, under your account.",
          "You can freely change a fork without affecting the original project.",
          "After forking, clone your fork locally to actually work with it.",
          "Forking is the standard starting point for contributing to open-source projects."
        ]
      }

    ]
  },

  {
    title: "Pull Requests",
    subtitle: "Explained Like Formally Submitting Your Work for Review Before Filing It Officially",

    sections: [

      {
        heading: "Think About Submitting Work for Approval",

        paragraphs: [
          "In a professional office, before new content gets officially filed in the main records, it typically goes through a review process — you submit your work to a reviewer, who checks it, might suggest changes, and only approves it to be officially filed once it looks right.",

          "A Pull Request (PR) on GitHub is exactly this formal submission and review process — a way of saying 'I've finished this feature on my branch/fork, and I'd like it reviewed and merged into the main project.'"
        ]
      },

      {
        heading: "Creating a Pull Request",

        points: [
          "Push your feature branch to GitHub (from 'Git Push')",
          "Visit the repository on GitHub — a banner usually appears saying 'Compare & pull request' for recently pushed branches",
          "Click it, write a clear title and description of what your changes do",
          "Submit — the PR is now open for review"
        ]
      },

      {
        heading: "What Happens During a PR Review",

        points: [
          "Teammates or project maintainers can read exactly which lines changed (like git diff, from 'Git Diff', but displayed beautifully on GitHub)",
          "They can leave comments on specific lines, ask questions, or request changes",
          "You can push additional commits to the same branch to address feedback — the PR automatically updates",
          "Once everyone's happy, someone with permission clicks 'Merge pull request', merging your branch into main"
        ]
      },

      {
        heading: "Pull Requests for Open-Source Contributions",

        paragraphs: [
          "Remember forking from the last topic? The standard open-source workflow is: fork a project, clone your fork, make improvements on a branch, push to your fork, then open a Pull Request to the original project — proposing your changes for the original maintainers to review and potentially accept."
        ]
      },

      {
        heading: "Important Points to Remember",

        points: [
          "A Pull Request is a formal proposal to merge changes from one branch (or fork) into another.",
          "Teammates can review, comment, and request changes before approving.",
          "New commits pushed to the same branch automatically update the open PR.",
          "PRs are also the standard way to contribute improvements to open-source projects."
        ]
      }

    ]
  },

  {
    title: "Collaborating with Others",
    subtitle: "Explained Like a Team of Architects Working on the Same Blueprint",

    sections: [

      {
        heading: "Think About a Team of Architects",

        paragraphs: [
          "Multiple architects working on the same building project don't all sketch on the exact same single sheet simultaneously — each works on their own assigned sections separately, then brings their sections together into the shared master blueprint at agreed points, with a clear process for reviewing contributions before they officially enter the master plan.",

          "Git and GitHub provide exactly this structured teamwork — each person works on their own branch, pushes to GitHub, and contributes through Pull Requests, keeping the main project stable throughout."
        ]
      },

      {
        heading: "Inviting Collaborators to a Private Repository",

        paragraphs: [
          "For a private team project (from 'Creating a GitHub Repository'), go to your repository's Settings → Collaborators → Add people by their GitHub username. They receive an invitation, and once accepted, can clone, push, and pull from that repository directly."
        ]
      },

      {
        heading: "A Typical Team Collaboration Workflow",

        code: `// Every team member follows this same rhythm:
git checkout main
git pull                        // Get everyone's latest changes first
git checkout -b feature/my-task // Work on your own branch
// ...make changes, commit...
git push origin feature/my-task // Push your branch
// Open a Pull Request on GitHub for review
// After approval and merge → repeat from the top`,

        paragraphs: [
          "This structured pattern — each person branching off a fresh, up-to-date main, working separately, submitting via PR — is how virtually every professional development team operates, keeping the main code stable while everyone works in parallel."
        ]
      },

      {
        heading: "Communication Matters as Much as Code",

        paragraphs: [
          "Clear commit messages (from 'Git Commit'), descriptive Pull Request titles and descriptions, and responsive code review comments are all equally important to smooth collaboration — the code mechanics matter, but so does clearly communicating what you changed and why."
        ]
      },

      {
        heading: "Important Points to Remember",

        points: [
          "Add collaborators via repository Settings → Collaborators on GitHub.",
          "Everyone works on their own branches, submitting changes via Pull Requests.",
          "Always pull the latest main before starting new work, to avoid working on outdated code.",
          "Clear communication through commit messages and PR descriptions is as important as the code itself."
        ]
      }

    ]
  },

  {
    title: "GitHub Issues",
    subtitle: "Explained Like a Project's Official To-Do and Bug List",

    sections: [

      {
        heading: "Think About a Project's Bug and Task Board",

        paragraphs: [
          "Every active project has a list of things needing attention — known bugs to fix, new features to build, improvements to make, questions to answer. A shared, organized list where everyone on the team can see what's pending, who's working on what, and what's already resolved keeps things from falling through the cracks.",

          "GitHub Issues is exactly this — a built-in ticketing and task-tracking system directly inside your repository, where bugs and feature requests are officially logged, discussed, and tracked."
        ]
      },

      {
        heading: "Creating an Issue",

        points: [
          "Visit your repository on GitHub, click the 'Issues' tab",
          "Click 'New issue', give it a clear title (e.g. 'Login button not working on mobile')",
          "Add a description with steps to reproduce, expected behavior, actual behavior",
          "Submit — it now has a number (#1, #2, etc.) and is visible to all collaborators"
        ]
      },

      {
        heading: "Linking Commits and PRs to Issues",

        code: `git commit -m "Fixed mobile login button sizing - closes #12"`,

        paragraphs: [
          "Writing 'closes #12' (or 'fixes #12') in a commit message or PR description automatically closes that issue when merged into main — GitHub links them together, clearly showing that specific commit resolved that specific reported problem."
        ]
      },

      {
        heading: "Labels, Assignees, and Milestones",

        points: [
          "Labels — categorize issues (e.g. 'bug', 'enhancement', 'help wanted'), making them easy to filter",
          "Assignees — assign specific issues to specific team members, clarifying responsibility",
          "Milestones — group related issues together for a specific release or goal"
        ]
      },

      {
        heading: "Important Points to Remember",

        points: [
          "GitHub Issues is a built-in tracker for bugs, feature requests, and tasks.",
          "Each issue gets a unique number (#1, #2, etc.) for easy reference.",
          "Writing 'closes #N' in a commit/PR automatically closes that issue when merged.",
          "Labels, assignees, and milestones help organize and prioritize issues on larger projects."
        ]
      }

    ]
  },

  {
    title: "Git Workflow Best Practices",
    subtitle: "Explained Like Professional Kitchen Rules That Keep Everything Running Smoothly",

    sections: [

      {
        heading: "Think About a Professional Kitchen",

        paragraphs: [
          "A professional kitchen runs smoothly not just because each chef can cook, but because everyone follows the same shared rules — mise en place before starting, clean as you go, call out 'behind you' when passing — small disciplines that prevent chaos when everyone's working fast under pressure.",

          "Git best practices are these shared kitchen rules — habits that keep your project's history clean, your team's collaboration smooth, and your own future debugging much less painful."
        ]
      },

      {
        heading: "Practice 1: Commit Often, With Clear Messages",

        points: [
          "Small, focused commits are far easier to review, understand, and revert than massive, catch-all 'did a bunch of stuff' commits",
          "Write messages in present tense describing what the commit does: 'Add login validation' not 'Added stuff'",
          "A good rule: if you can't describe one commit in one short sentence, it probably should have been several smaller commits"
        ]
      },

      {
        heading: "Practice 2: Always Branch for New Features or Fixes",

        code: `// Never work directly on main for new features
git checkout -b feature/add-search-bar

// Only merge to main when the feature is finished and reviewed`,

        paragraphs: [
          "main should always represent stable, working, deployable code — like a professional kitchen's main service line always being clean and functional, with experimental dishes prepared on a separate prep counter."
        ]
      },

      {
        heading: "Practice 3: Pull Before You Push",

        code: `git pull origin main  // Always sync first
// ...do your work...
git push`,

        paragraphs: [
          "Always pull the latest updates before starting new work — arriving at the office and reading all incoming memos before starting your own reports, so you're not working with outdated information."
        ]
      },

      {
        heading: "Practice 4: Never Commit Sensitive Information",

        paragraphs: [
          "Passwords, API keys, .env files, personal data — once committed and pushed (especially to a public repository), they're extremely difficult to fully remove and could expose serious security issues. The .gitignore file (from '.gitignore File') is your first defense here."
        ]
      },

      {
        heading: "Practice 5: Review Before You Commit",

        code: `git status          // What's changed?
git diff --staged   // Exactly what am I about to commit?
git commit -m "..."  // Only then commit, intentionally`,

        paragraphs: [
          "That quick status → diff → commit review rhythm (from 'Git Status & Git Add' and 'Git Diff') prevents accidentally committing debug logs, commented-out code, or unrelated changes — like a chef doing one final taste before the dish leaves the kitchen."
        ]
      },

      {
        heading: "Important Points to Remember",

        points: [
          "Commit small and often, with clear, descriptive messages.",
          "Always branch for new features; keep main stable and deployable.",
          "Pull before starting new work, to stay aligned with the team's latest changes.",
          "Never commit sensitive information — .gitignore is your essential first protection."
        ]
      }

    ]
  }

];