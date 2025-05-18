/********************************************************************************
*  WEB700 – Assignment 1
* 
*  I declare that this assignment is my own work in accordance with Seneca's
*  Academic Integrity Policy:
* 
*  https://www.senecapolytechnic.ca/about/policies/academic-integrity-policy.html
* 
*  Name: _Fatima Noor__ Student ID: _189057235_ Date: 17 May 2025______________
*
********************************************************************************/

let serverMethods = ["GET","GET","GET","POST","GET","POST"]
let serverRoutes = ["/","/store","/store-admin","/register","/developer","/login"]
let serverResponses = ["Home","Main Storefront","Manage Products","Registered New User",
    "Developed by: Fatima Noor: fmnoor@myseneca.ca","User Logged In"]

function processRequest(method,route){
    for (let i = 0 ;i < serverMethods.length;i++){
        if (serverMethods[i] === method && serverRoutes[i] === route){
            return `200: ${serverResponses[i]}`;
     }
}
    return `404: Unable to process ${method} request for ${route}`;}

console.log(processRequest("GET", "/"));
console.log(processRequest("GET", "/store")); 
console.log(processRequest("GET", "/store-admin"));  
console.log(processRequest("POST", "/register"));  
console.log(processRequest("GET","/developer"));
console.log(processRequest("POST", "/login"))
console.log(processRequest("POST", "/"));

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}
function testRequests() {
  const testMethods = ["GET", "POST"];
  const testRoutes = ["/", "/store", "/store-admin", "/register", "/developer", "/login", "/notFound1", "/notFound2"];
  function randomRequest() {
    const randMethod = testMethods[getRandomInt(testMethods.length)];
    const randRoute = testRoutes[getRandomInt(testRoutes.length)];
    console.log(processRequest(randMethod, randRoute));
  }
  setInterval(randomRequest, 1000);
}
testRequests();

