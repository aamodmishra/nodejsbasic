//it is used to get dns of any site on node 
const dns= require("dns");
dns.lookup("www.google.com",(err,addresses,family)=>{
console.log("address is ",addresses);
console.log("family  is ",family);

})