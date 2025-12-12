function hello(callbacks){
    console.log("this is hello function ")
    callbacks();
}
function  hii(){
    console.log ("this is hii");

}

function wait(){
    console.log ("this is wait ");

}

hello(wait);