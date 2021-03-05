const os = require("os");

const info = {
    platform: os.platform(),
    osType: os.type(),
    freeMemory: os.freemem(),
    totalMemory: os.totalmem(),
    EOL: os.EOL
};

module.exports = info;