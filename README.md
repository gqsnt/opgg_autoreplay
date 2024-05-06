
# OP.GG Auto Replay

## Introduction
The op.gg auto replay script is designed to automatically download game replays from the op.gg website for a specific summoner. 
Did it because my lol replay are broken...



## Features
- **Automatic Replay Downloads:** Downloads replays as they become available during game sessions.
- **Real-Time Updates:** Continuously checks for new replays every minute and refreshes the page every 60 seconds.
- **Graceful Shutdown:** Handles interruption signals to close the browser and exit the program smoothly.

## Prerequisites
Before running this script, ensure you have the following installed:
- Node.js
- Puppeteer

## Installation

### Node.js
Install Node.js from [https://nodejs.org](https://nodejs.org).

### Packages
Install Puppeteer with:
```
npm install
```

## Usage
1. **Modify the Script:**
   - Open the script in a text editor.
   - Replace the `URL` variable with you summoner live game op.gg url.

2. **Run the Script:**
   - Navigate to the directory containing the script.
   - Run the script using Node.js:
     ```
     node index.js
     ```


## Limitations
- The script depends on the structure of the op.gg website. Changes to the site may require updates to the script.
- The script does not handle network or unexpected errors explicitly.

