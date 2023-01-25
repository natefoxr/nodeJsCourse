const os = require('os');

// info about current user
const user = os.userInfo();
console.log(user);

// method to return the system uptime in seconds
console.log(`The system uptime is ${os.uptime()} seconds`);

// get system info
const currentOS = {
    name: os.type(),
    release: os.release(),
    totalMem: os.totalmem(),
    freeMem: os.freemem(),
    cpus: os.cpus(),
    homeDir: os.homedir(),
    host: os.hostname(),
    networks: os.networkInterfaces(),
    platform: os.platform(),
}

currentOS.cpus.forEach((e) => {
    console.log(e.times);
})
console.log(currentOS);