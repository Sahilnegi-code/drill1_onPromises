const composePromises = (arr) => {
  Promise.all(arr)
    .then((values) => {
      console.log(values);
    })
    .catch((err) => {
       console.log(err);
    });
};
const racePromise1 = () => {
  return new Promise((res, rej) => {
    setTimeout(() => {
      res("Race Promise2");
    }, 2000);
  });
};

const racePromise2 = () => {
  return new Promise((res, rej) => {
    setTimeout(() => {
      res("Race Promise1");
    }, 3000);
  });
};
composePromises([racePromise1(), racePromise2()]);
