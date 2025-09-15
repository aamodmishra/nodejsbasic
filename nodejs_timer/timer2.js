const { clearTimeout } = require("timers");

function welcome(){
    console.log ('WEL to javascript ');
}
var id1= setTimeout(welcome,10);
var id2= setInterval(welcome,10);
clearTimeout(id1);
clearInterval(id2);