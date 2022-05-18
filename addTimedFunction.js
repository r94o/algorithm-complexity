const Function = require("./server/models/Function")
const mongoose = require('mongoose');


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

const timeTakenArray = run(500, 7500, 500)

mongoose.connect('mongodb+srv://algoDB:algoDBPW@cluster0.mgcxq.mongodb.net/algorithms', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

const db = mongoose.connection

const functionCode = run.toString();

const fn = new Function({ timeTakenArray, functionCode })

fn.save(() => {
  mongoose.connection.close(true)
})



module.exports = {
  createArray,
  time
}