const os =require('os');
console.log ('os.freemem():',os.freemem());
console.log ("os.homedir",os.homedir());
console.log ("os.hostname",os.hostname());
console.log ("os.uptime",os.uptime());
console.log ("os.totalmem",os.totalmem());


//outpute:

// aamod@aamod-Inspiron-5570:/media/aamod/F27A774B7A770B9B/nodejs/nodejsbasic$ node os.js
// os.freemem(): 4013199360
// os.homedir /home/aamod
// os.hostname aamod-Inspiron-5570
// os.uptime 20303.18
// os.totalmem 8218066944