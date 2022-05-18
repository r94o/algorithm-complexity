const createArray = (length) => {
  return Array.from({length}, () => Math.floor(Math.random() * 100));
};

module.exports = createArray;