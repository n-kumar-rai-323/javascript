const fun1=(x)=>{
    return new Promise((resolve, reject)=>{
        if(x){
            resolve("hello there from fun1")
        }else{
            reject("I am exception of fun1")
        }
    })
}


const fun2=(x)=>{
    return new Promise((resolve, reject)=>{
        if(x){
            resolve("hello there from fun2")
        }else{
            reject("I am exception of fun2")
        }
    })
}

fun1(true)
.then((res)=>{
    console.log(res)
    fun2(true)
    .then((res2)=>{
        console.log(res2)
    })
    .catch((exception)=>{
        console.log(exception)
    })
})
.catch((exception)=>{
    console.log(exception)
})

//chain of promise 
fun1(true)
.then((res1)=>{
    console.log(res1)
    return fun2(true)
})
.then((res2)=>{
    console.log(res2)
    return fun3(true)
})
.then((res3)=>{
    console.log(res3)
})
.catch((exception)=>{
    console.log(exception)
})

let list = [fun1(true), fun2(true)]
Promise.all(list)
.then((res)=>{
    console.log(res)
})
.catch((exception)=>{
    console.log(exception)
})
Promise.allSettled(list)
.then((res)=>{
    console.log(res)
})
.catch((exception)=>{
    console.log(exception)
})