var fs = require("fs");

var JavaScriptObfuscator = require('javascript-obfuscator');

fs.readFile('index-code.js', "UTF-8", function(err, data) {
    if (err) {
        throw err;
    }

    // Obfuscate content of the JS file
    var obfuscationResult = JavaScriptObfuscator.obfuscate(data);
    
    // Write the obfuscated code into a new file
    fs.writeFile('index.js', obfuscationResult.getObfuscatedCode() , function(err) {
        if(err) {
            return console.log(err);
        }
        console.log("The file was saved!");
    });
});