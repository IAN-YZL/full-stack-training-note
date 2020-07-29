const { appStart, timestamp } = require('./timestamp');

appStart();

setTimeout(() => {
  timestamp();
}, 3000);
