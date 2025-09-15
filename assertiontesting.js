var assert = require("assert");
function add(a,b){
    return a+b;
}
var expected =add(1,2);
assert(expected ==3,"one plus 2 is three");

//this did not give output because it is true ,outbut is given if it fails

var assert = require("assert");
function add(a,b){
    return a+b;
}
var expected =add(1,2);
assert(expected ==4,"one plus 2 is three");