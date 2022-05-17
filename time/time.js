const time = (callback, params) => {
  const start = performance.now();
  callback(params);
  return performance.now() - start;
};

module.exports = time;