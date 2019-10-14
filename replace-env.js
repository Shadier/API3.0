const fs = require ('fs')

const envMap = {
    '%PORT%': process.env.PORT,
    '%DATABASE_PORT%': process.env.DATABASE_PORT,
    '%DIALECT%': process.env.DIALECT,
    '%DATABASE_URI%': process.env.DATABASE_URI,
    '%DATABASE_USER%': process.env.DATABASE_USER,
    '%DATABASE_PASS%': process.env.DATABASE_PASS,
    '%DATABASE_NAME%': process.env.DATABASE_NAME,
}

const configMap = {
    '%username%': process.env.DATABASE_USER,
    '%password%': process.env.DATABASE_PASS,
    '%database%': process.env.DATABASE_NAME,
    '%host%': process.env.DATABASE_URI
}

validateKeys(envMap);

function readAndReplaceStrings(path, mapping) {

    fs.readFile(path, 'utf8', function (err,data) {
        if (err) {
            return console.log(err);
        }

        var result = replaceAll(data, mapping);
        fs.writeFile(path, result, 'utf8', function (err) {
            if (err) return console.log(err);
        });
    });
}


String.prototype.replaceAll = function(search, replacement) {
    var target = this;
    return target.replace(new RegExp(search, 'g'), replacement);
};

function replaceAll(str, map){
    for(key in map){
        str = str.replaceAll(key, map[key]);
    }
return str;
}

function validateKeys(map){
    for(key in map){
        if(!map[key]){
            throw new Error(key + " is not defined");
        }
    }
}

readAndReplaceStrings('.env', envMap);
readAndReplaceStrings('config/config.json', configMap);