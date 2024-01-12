function dynamicChain(functionsArray) {
  return new Promise((resolve, reject) => {
    
    // Start with the first function
    let currentPromise = functionsArray[0]();

    // Dynamically chain the promises using a loop
    for (let i = 1; i < functionsArray.length; i++) {
      const currentFunction = functionsArray[i];

      // Chain the current function to the existing promise
      currentPromise = currentPromise.then(() => currentFunction());
    }

    // Resolve with the result of the last function
    currentPromise
      .then((result) => resolve(result))
      .catch((error) => reject(error));
  });
}

dynamicChain(functionsArray)
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.error(error);
  });
