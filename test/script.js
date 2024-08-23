console.log("Start");
function userInfo(name,callback){

    setTimeout(()=>{
        console.log("**************")
        callback(name)
    },3000)   
}

let userName =userInfo("Wafa",name => {
    console.log("Your userName is: "+name);
});

console.log("End");