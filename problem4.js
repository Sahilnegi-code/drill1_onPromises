function parallelLimit(promises, limit) {
  let result = [];

  // Returning a new Promise that resolves with the results
  return new Promise((resolve, reject) => {
    // Using Promise.allSettled to handle promises in parallel
    Promise.allSettled(promises).then((res) => {
      // Processing the results of all promises
      res.forEach((elem) => {
        result.push(elem.value);
      });

      // Resolving the outer promise with the accumulated results
      if (result.length) {
        resolve(result);
      }
    });
  });

  // The following line is now inside the function and will be executed
  // console.log(result);
}

// Example usage:
const promise1 = new Promise((resolve) =>
  setTimeout(() => resolve("Promise 1"), 1000)
);
const promise2 = new Promise((resolve) =>
  setTimeout(() => resolve("Promise 2"), 2000)
);
const promise3 = new Promise((resolve) =>
  setTimeout(() => resolve("Promise 3"), 500)
);
const promise4 = new Promise((resolve) =>
  setTimeout(() => resolve("Promise 4"), 1500)
);

const promisesArray = [promise1, promise2, promise3, promise4];

const limit = 2; // Set the limit of parallel execution

parallelLimit(promisesArray, limit)
  .then((results) => {
    console.log("Results:", results);
  })
  .catch((error) => {
    console.error("Error:", error);
  });
