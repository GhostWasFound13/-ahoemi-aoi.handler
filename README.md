# <h1 align="center"><strong>AOI.HANDLER</strong></h1>

<p align="center">
<img src="https://media.discordapp.net/attachments/1022533781040672839/1137241711614115910/Untitled96_20230805101633.png" alt="Logo" width="150" height="150">
</p>


<p>
An unofficial aoi.js extension which helps you to load your files more clearly and clean way.
</p>
<h2 align="center"><strong>Setup</strong></h2>

```js {3} copy

const { AoiClient } = require("aoi.js");
const { Handler } = require("aoi.handler");
 
const bot = new AoiClient({
    token: "Discord Bot Token",
    prefix: "Discord Bot Prefix",
    intents: ["MessageContent", "Guilds", "GuildMessages"],
    events: ["onMessage", "onInteractionCreate"],
    database: {
        type: "aoi.db",
        db: require("@akarui/aoi.db"),
        tables: ["main"],
        path: "./database/",
        extraOptions: {
            dbType: "KeyValue"
        }
    }
});
 
 
const handler = new Handler({
  bot: bot,
  readyLog: true // To log ready or not
},
  __dirname
);


handler.loadCommands(`./src`);
handler.loadVariables(`./variables.js`);
handler.loadEvents(`./events`);
handler.loadStatus(`./status.js`);
handler.loadFunctions(`./functions`);
``` 

# Useful Links
| <a href="https://github.com/aho-emi/aoi.handler" target="_blank" rel="noopener noreferrer"><p align="center"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Octicons-mark-github.svg/2048px-Octicons-mark-github.svg.png" alt="GitHub" width="35" height="35" style="border-radius: 50%;"></p>Github - aoi.handler</a> | <a href="https://github.com/aho-emi/aoi.handler" target="_blank" rel="noopener noreferrer"><p align="center"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/db/Npm-logo.svg/2560px-Npm-logo.svg.png" alt="npm" width="75" height="35"></p>NPM - aoi.handler</a> | <a href="https://github.com/aho-emi/aoi.handler" target="_blank" rel="noopener noreferrer"><p align="center"><img src="https://media.discordapp.net/attachments/902553397281030208/1137604638766530670/Untitled96_20230805101633.png" alt="docs" width="75" height="35"></p>Docs - aoi.handler</a> | 
| ---- | ---- | ---- |
