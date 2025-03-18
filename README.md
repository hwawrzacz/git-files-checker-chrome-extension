# Git Pull Request file checker

A Chrome extension that helps frontend developers quickly mark multiple files as **viewed** in a GitHub pull request. 
When working on mixed backend/frontend PRs, or when certain files don’t require attention, this tool allows you to **filter and mark files in one click**.  
  
⌚ Save time by skipping irrelevant files in large pull requests.

## Features
✅ Mark files as **viewed** in a GitHub PR by entering a query (e.g., `.java`, `.sql`, or multiple at once `.java, .sql`).

## Usage

Navigate to your GitHub Pull request
Click on the extension icon to open the popup.
Enter a query (e.g., backend/ to filter backend files).
Click "Check files", and matching files will be marked as viewed.

## How it works

It's very simple!

1. You type your query
2. Script iterates through every file section, checks if it contains any of your query, and clicks **Viewed** checkbox for you if it's not already checked

Ta-dam!

Search is based on simple querySelector. Yes, I manually inspected GitHub's structure, and created a selector for file section, and viewed toggle. 
At some point I expect it to stop working, since GitHub might change DOM strucutre, but it is also easy to adjust.

## Installation

To get it running:

1. Go to Chrome extensions settinggs (chrome://extensions).
2. Enable developer mode (top-right corner).

   ![image](https://github.com/user-attachments/assets/89787672-e38d-4066-a9d3-b8616f724469)
3. Load unpacked.
   
   ![image](https://github.com/user-attachments/assets/7c966ac2-b563-463e-a931-b2dca2c1a4b4)

## Non-interective demo
![image](https://github.com/user-attachments/assets/77bd9ef7-9d82-499e-8806-9ea72473ac2c)

## Improvements and contribution

As always, there is a place for improvement. Some ideas:
- custom elements queries,
- regex queries,
- option to select between check/uncheck/toggle.

Those are _improvement ideas_. I've made this extension to simplify my life during code review, and this goal was achieved. 
Maybe in the future I'll extend it's functionality, but I definitely won't put any pressure on me.

It's a simple personal project, and I don't expect any external contribution. 
I'm aware that the code might require some tweaks, is not super robust, and probably can be written <put-a-number-here> times more effectively.
If you have an improvement idea, go ahead, fork it, and create you own version. If you came up with something super useful, you can let me know, I'll be happy to check it out 😉.

## Official release

Yes, I plan to release this extension to Chrome Web Store, but again it will be another phase to _learn something new_, so again - no pressure on myself.
