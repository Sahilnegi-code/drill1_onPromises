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

const racePromises = () => {
  return Promise.race([racePromise1(), racePromise2()]);
};

racePromises().then((val) => {
    console.log(val);
}).catch((err)=>{
    console.log(err);
});
