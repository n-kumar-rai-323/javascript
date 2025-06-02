const print1=(callbackFunction)=>{
    console.log(1)
    callbackFunction()
}

const print2 =()=>{
    console.log(2)
}

print1(print2)

