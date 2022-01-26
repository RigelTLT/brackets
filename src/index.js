module.exports = function check(str, bracketsConfig) {
  // your solution
  if (str.length % 2 !== 0) {
    return false;
  }
  const strLength = str.length;
  for (let j = 0; j < strLength; j++) {
    bracketsConfig.forEach(function (config) {
      config.forEach(function (arg, i) {
        if (config.length - 1 !== i) {
          while (str.indexOf(`${arg}${config[i + 1]}`) !== -1) {
            str = str.split(`${arg}${config[i + 1]}`).join("");
            index = 0;
            if (str.length == 0) {
              return true;
            }
          }
        }
      });
    });
  }
  if (str.length == 0) {
    return true;
  } else {
    return false;
  }
};
