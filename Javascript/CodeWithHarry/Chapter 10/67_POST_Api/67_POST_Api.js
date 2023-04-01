// fetch('https://jsonplaceholder.typicode.com/posts', {
//   method: 'POST',
//   body: JSON.stringify({
//     title: 'foo',
//     body: 'bar',
//     userId: 1,
//   }),
//   headers: {
//     'Content-type': 'application/json; charset=UTF-8',
//   },
// })
//   .then((response) => response.json())
//   .then((json) => console.log(json));




// let options = {
//     method : "POST",
//     headers : {
//         "Content-type" : "application/json"
//     },
//     body: JSON.stringify({
//         title: 'foo',
//         body: 'bar',
//         userId: 1,
//         id:102,
//       }),
// }

// fetch('https://jsonplaceholder.typicode.com/posts', options)
//   .then((response) => response.json())
//   .then((json) => console.log(json));





// const createTodo = async (todo)=>{
//     let options = {
//         method : "POST",
//         headers : {
//             "Content-type" : "application/json"
//         },
//         body: JSON.stringify(todo),
//     }
    
//     let p = await fetch('https://jsonplaceholder.typicode.com/posts', options);
//     let response = await p.json();
//     return response;
// }

// const mainFunc = async ()=> {
//     let todo = {
//         title: 'Krishna',
//         body: 'bar',
//         userId: 2,
//         id:101,
//       }
//     let todor = await createTodo(todo);
//     console.log(todor);
// }
// const mainFunc = async ()=> {
//     let todo = await createTodo();
//     console.log(todo);
// }









const createTodo = async (todo)=>{
    let options = {
        method : "POST",
        headers : {
            "Content-type" : "application/json"
        },
        body: JSON.stringify(todo),
    }
    
    let p = await fetch('https://jsonplaceholder.typicode.com/posts', options);
    let response = await p.json();
    return response;
}

const getTodo = async (id)=>{
    let p = await fetch('https://jsonplaceholder.typicode.com/posts/' + id);
    let response = await p.json();
    return response;
}

const mainFunc = async ()=> {
    let todo = {
        title: 'Krishna',
        body: 'bar',
        userId: 2,
      }
    let todor = await createTodo(todo);
    console.log(todor);
    let getTodor = await getTodo(101);
    console.log(getTodor);
    console.log(getTodor.toString());
}







mainFunc();