
const createArray = (length) => {
  return Array.from({length}, () => Math.floor(Math.random() * 100));
};

const time = (callback, params) => {
  const start = performance.now();
  callback.call(params);
  return performance.now() - start;
};

const run = (length, endLength, interval) => {
  const timeTakenArray = [];
  let input;
  let timeTaken;
  while (length <= endLength) {
    input = createArray(length)
    timeTaken = time(Array.prototype.reverse, input)
    timeTakenArray.push(timeTaken)
    length += interval;
  }
  return timeTakenArray;
}


module.exports = {
  createArray,
  time
}