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
| <a href="https://github.com/aho-emi/aoi.handler" target="_blank" rel="noopener noreferrer"><p align="center"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Octicons-mark-github.svg/2048px-Octicons-mark-github.svg.png" alt="GitHub" width="35" height="35" style="border-radius: 50%;"></p>Github - aoi.handler</a> | <a href="https://github.com/aho-emi/aoi.handler" target="_blank" rel="noopener noreferrer"><p align="center"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/db/Npm-logo.svg/2560px-Npm-logo.svg.png" alt="npm" width="75" height="35"></p>NPM - aoi.handler</a> | 
| ---- | ---- |
| <a href="https://www.npmjs.com/package/@ahoemi/aoi.handler?activeTab=readme" target="_blank" rel="noopener noreferrer"><p align="center"><img src="https://media.discordapp.net/attachments/902553397281030208/1137604638766530670/Untitled96_20230805101633.png" alt="docs" width="55" height="55"></p><strong>DOCS - aoi.handler</strong></a> | <a href="https://discord.gg/3vcucB8F5c" target="_blank" rel="noopener noreferrer"><p align="center"><img src="https://www.freepnglogos.com/uploads/discord-logo-png/concours-discord-cartes-voeux-fortnite-france-6.png" alt="support" width="55" height="55"></p><strong>Discord Support</strong></a> |

### **I suggest you to visit documentation.**


## **Showcase**
### Command Handler
![command handler](https://media.discordapp.net/attachments/902553397281030208/1136928915504504902/IMG_1856.png)

### Variable Handler
![variable handler](https://media.discordapp.net/attachments/902553397281030208/1136928915789729832/IMG_1855.png)

### Event Handler
![event handler](https://media.discordapp.net/attachments/902553397281030208/1136928916746018937/IMG_1853.png)

### Status Handler
![status handler](https://media.discordapp.net/attachments/902553397281030208/1136928916293038161/IMG_1854.png)

### Custom Function Handler
![function handler](https://media.discordapp.net/attachments/902553397281030208/1136928917136101376/IMG_1852.png)


### readyLog: true 
![readyLog loading](https://media.discordapp.net/attachments/902553397281030208/1136930254112444516/image0.jpg)
