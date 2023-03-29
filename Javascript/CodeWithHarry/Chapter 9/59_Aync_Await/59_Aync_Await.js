
async function harry() {

    let delhiWeather = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("27 Deg");
        }, 2000);
    });

    let bangaloreWeather = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("21 Deg");
        }, 5000);
    });

    // delhiWeather.then((value)=>{
    //     console.log(value);
    // })
    // bangaloreWeather.then((value)=>{
    //     console.log(value);
    // })



    // let delhiW = await delhiWeather;
    // let bangaloreW = await bangaloreWeather;

    console.log("Fetching Delhi Weather Please wait...");
    let delhiW = await delhiWeather;
    console.log("Fetched Delhi Weather : " + delhiW);
    console.log("Fetching Banglore Weather Please wait ...");
    let bangaloreW = await bangaloreWeather;
    console.log("Fetched Banglore Weather : " + bangaloreW);
    return [delhiW, bangaloreW];

}



// console.log("Welcome to weather control room");
// let a = harry();
// console.log(a);



// console.log("Welcome to weather control room");
// let a = harry();
// a.then((value)=>{
//     console.log(value);
// })



// const cherry = ()=>{
//     console.log("Hey I am cherry and I am not waiting");
// }
// console.log("Welcome to weather control room");
// let a = harry();
// let b = cherry();
// a.then((value)=>{
//     console.log(value);
// })




const cherry = async ()=>{
    console.log("Hey I am cherry and I am not waiting");
}
const main1 = async ()=>{
    console.log("Welcome to weather control room");
    let a = await harry();
    let b = await cherry();
    console.log(a);
    console.log(b);
}
main1();