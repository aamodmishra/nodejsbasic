const fs =require("fs");
function nodeStyleCallback(err,data){
    if (err){
        console.error('there is an error',err);
        return;
    }
console.log(data);    
}
fs.readFile('give file location that donot exist',nodeStyleCallback);
fs.readFile('some file do  exist',nodeStyleCallback);

