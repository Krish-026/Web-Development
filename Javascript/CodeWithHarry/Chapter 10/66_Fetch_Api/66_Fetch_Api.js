// let p = fetch("https://jsonplaceholder.typicode.com/users")
// p.then((value1)=>{
//     return value1.json();
// }).then((value2)=>{
//     Object.entries(value2).forEach((entry) => {
//         const [key, value] = entry;
//         console.log(key, value);
//         console.log(value.address.street)
//       });
// }).catch((error)=>{
//     console.log(error.name);
//     console.log(error.message);
//     console.log(error.stack);
// })



// let p = fetch("https://jsonplaceholder.typicode.com/users")
// p.then((response)=>{
//     console.log(response.status);
//     console.log(response.ok);
//     return response.json();
// }).then((value2)=>{
//     Object.entries(value2).forEach((entry) => {
//         const [key, value] = entry;
//         console.log(key, value);
//         // console.log(value.address.street)
//       });
// }).catch((error)=>{
//     console.log(error.name);
//     console.log(error.message);
//     console.log(error.stack);
// })




// let p = fetch("https://jsonplaceholder.typicode.com/users")
// p.then((response)=>{
//     console.log(response.status);
//     console.log(response.ok);
//     return response.text();
// }).then((value2)=>{
//     // console.log(value2)
//     const obj = JSON.parse(value2);
//     console.log(obj)
// }).catch((error)=>{
//     console.log(error.name);
//     console.log(error.message);
//     console.log(error.stack);
// })




// let p = fetch("https://jsonplaceholder.typicode.com/users")
// p.then((response)=>{
//     console.log(response.status);
//     console.log(response.ok);
//     return response.text();
// }).then((value2)=>{
//     // console.log(value2)
//     const obj = JSON.parse(value2);
//     // console.log(obj)
//     for (const key in obj){
//         if(obj.hasOwnProperty(key)){
//           console.log(key, obj[key])
//         }
//       }
// }).catch((error)=>{
//     console.log(error.name);
//     console.log(error.message);
//     console.log(error.stack);
// })






// let p = fetch("https://jsonplaceholder.typicode.com/users")
// p.then((response)=>{
//     console.log(response.status);
//     console.log(response.ok);
//     console.log(response.headers);
//     return response.text();
// }).then((value2)=>{
//     // console.log(value2)
//     const obj = JSON.parse(value2);
//     // console.log(obj)
//     for (const key in obj){
//         if(obj.hasOwnProperty(key)){
//           console.log(key, obj[key])
//         }
//       }
// }).catch((error)=>{
//     console.log(error.name);
//     console.log(error.message);
//     console.log(error.stack);
// })