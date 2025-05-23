# GitHub Pull Request file checker

A Google Chrome extension that helps developers quickly mark multiple files as **viewed** in a GitHub pull request.

Sometimes multiple irrelevant files end up in a Pull Request. 
Instead of manually clicking through all of them to mark as viewed, you can use this extension and mark them all 
at once with a single click.

⌚ Save some time by skipping irrelevant files in large pull requests.

## Installation

### Chrome Web Store

Install directly from [Chrome Web Store](https://chromewebstore.google.com/detail/github-pr-files-checker/kpmbnhnclbmdckmppdfjcdkobmhlpiab).

> If you install the extension while having the GitHub tab opened, you have to reload the GitHub page to allow the extension to load properly.

### Manual installation

1. Download and extract source code (release `.zip` or clone this repository),
2. Go to Chrome extensions settings (chrome://extensions).
3. Enable developer mode (top-right corner).

   ![image](https://github.com/user-attachments/assets/89787672-e38d-4066-a9d3-b8616f724469)
4. Load unpacked.

   ![image](https://github.com/user-attachments/assets/7c966ac2-b563-463e-a931-b2dca2c1a4b4)

## Features and usage
Mark files as **viewed** in a GitHub PR by entering a query (e.g., `.java`, `.sql`, or multiple at once `.java, .sql`).

- Navigate to your GitHub Pull request,
- click on the extension icon to open the popup.
- enter a query (e.g. "_.sql_" to filter .sql files),
- click _Check files_, and matching files will be marked as viewed.

## How it works technically?

It's very simple!

1. You type your query
2. Script iterates through every file section, checks if it contains any of your query, and clicks **Viewed** checkbox for you if it's not already checked

Ta-dam!

Search is based on simple querySelector. 
Selectors were created by manually analyzing GitHub's DOM structure, and aiming for certain items (file container, _Viewed_ checkbox). 
At some point it might stop working, since GitHub might change DOM structure. It's  easy to adjust, though.

## Non-interective demo
![image](https://github.com/user-attachments/assets/77bd9ef7-9d82-499e-8806-9ea72473ac2c)

## Improvements and contribution

As always, there is a place for improvement. Here are some ideas:
- custom selectors (in case your instance of GitHub has different DOM structure),
- regex queries,
- option to select between check/uncheck/toggle.

Those are _improvement ideas_. I've made this extension to simplify my life during code review, and this goal was achieved. 
Maybe in the future I'll extend it's functionality, but I definitely won't put any pressure on me.

It's a simple personal project, and I don't expect any external contribution. 
I'm aware that the code might require some tweaks, is not super robust, and probably can be written <put-a-number-here> times more effectively.
If you have an improvement idea, go ahead, fork it, and create you own version. If you came up with something super useful, you can let me know, I'll be happy to check it out 😉.
