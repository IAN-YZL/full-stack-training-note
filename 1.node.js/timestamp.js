let startTime;

function appStart() {
  startTime = new Date();
  console.log('app started');
}

function timestamp() {
  console.log(`${new Date() - startTime} ms passed`);
}

// module.exports = { appStart, timestamp };
exports.appStart = appStart;
exports.timestamp = timestamp;