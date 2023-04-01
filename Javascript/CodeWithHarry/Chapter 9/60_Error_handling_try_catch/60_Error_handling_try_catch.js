// setTimeout(() => {
//     console.log("Hacking wifi... Please wait...")
// }, 1000);
// setTimeout(() => {
//     console.log("Fetching username and password... Please wait...")
// }, 2000);
// setTimeout(() => {
//     console.log("Hacking Rahul's facebook id... Please wait...")
// }, 3000);
// setTimeout(() => {
//     console.log("Username and password of  Rahul... Please wait...")
// }, 4000);





// setTimeout(() => {
//     console.log("Hacking wifi... Please wait...")
// }, 1000);
// setTimeout(() => {
//     console.log("Fetching username and password... Please wait...")
// }, 2000);
// setTimeout(() => {
//     console.log(rahul); // Rahul will through error
//     console.log("Hacking Rahul's facebook id... Please wait...")
// }, 3000);
// setTimeout(() => {
//     console.log("Username and password of  Rahul... Please wait...")
// }, 4000);




// setTimeout(() => {
//     console.log("Hacking wifi... Please wait...")
// }, 1000);
// setTimeout(() => {
//     console.log("Fetching username and password... Please wait...")
// }, 2000);
// console.log(rahul); // Rahul will through error
// setTimeout(() => {
//     console.log("Hacking Rahul's facebook id... Please wait...")
// }, 3000);
// setTimeout(() => {
//     console.log("Username and password of  Rahul... Please wait...")
// }, 4000);




// setTimeout(() => {
//     console.log("Hacking wifi... Please wait...")
// }, 1000);
// setTimeout(() => {
//     console.log("Fetching username and password... Please wait...")
// }, 2000);
// try{
//     console.log(rahul); // Rahul will through error
// }
// catch(error){
//     console.log(error);
// }
// setTimeout(() => {
//     console.log("Hacking Rahul's facebook id... Please wait...")
// }, 3000);
// setTimeout(() => {
//     console.log("Username and password of  Rahul... Please wait...")
// }, 4000);




// setTimeout(() => {
//     console.log("Hacking wifi... Please wait...")
// }, 1000);
// setTimeout(() => {
//     console.log("Fetching username and password... Please wait...")
// }, 2000);
// try{ // it will give error. It won't wait for setTimeout because try is sync
//     setTimeout(()=>{
//         console.log(rahul); // Rahul will through error
//     }, 3000)
// }
// catch(error){
//     console.log(error);
// }
// setTimeout(() => {
//     console.log("Hacking Rahul's facebook id... Please wait...")
// }, 3000);
// setTimeout(() => {
//     console.log("Username and password of  Rahul... Please wait...")
// }, 4000);





setTimeout(() => {
    console.log("Hacking wifi... Please wait...")
}, 1000);
setTimeout(() => {
    console.log("Fetching username and password... Please wait...")
}, 2000);
try{ // it will give error. It won't wait for setTimeout because try is sync
    setTimeout(()=>{
        try{
            console.log(rahul); // Rahul will through error
        }
        catch(error){
            console.log("Error : " + error);
        }
    }, 2000)
}
catch(error){
    console.log(error);
}
setTimeout(() => {
    console.log("Hacking Rahul's facebook id... Please wait...")
}, 3000);
setTimeout(() => {
    console.log("Username and password of  Rahul... Please wait...")
}, 4000);