const myPromise = (x) => {
  return new Promise((resolve, reject) => {
    if (x) {
      resolve({ message: "I am resolve of myPromise Successfully Handled" });
    } else {
      reject("Sorry..  I am reject of myPromise ");
    }
  });
};

let proObj = myPromise(true);

proObj
  .then((result) => {
    console.log(result.message);
  })
  .catch((error) => {
    console.log(error);
  });
console.log(proObj.message) //if we not handled result always undefined 