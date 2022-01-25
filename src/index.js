module.exports = function check(str, bracketsConfig) {
  // your solution
  if (str.length % 2 !== 0) {
    return false;
  }
  bracketsConfig.forEach(function (config) {
    config.forEach(function (arg, i) {
      if (config.length - 1 !== i) {
        const strLength = str.length;
        for (let j = 0; j < strLength; j++) {
          let posOne = str.indexOf(`${arg}`);
          let posTwo;
          if ((!isNaN(Number(arg))) && arg !== config[i + 1]) {
            posTwo = str.lastIndexOf(`${config[i + 1]}`);
          }
          else if (arg === config[i + 1]) {
            posTwo = str.indexOf(`${config[i + 1]}`, posOne + 1);
          } else {
            posTwo = str.indexOf(`${config[i + 1]}`);
          }
          let posOneProv = posOne;
          if (posOne === 0) {
            posOneProv += 1;
          }
          if (posOne === -1 || posTwo === -1) {
            break;
          }

          if (
            (str.charAt(posTwo - posOneProv) !== "(" &&
              str.charAt(posTwo - posOneProv) !== "[" &&
              str.charAt(posTwo - posOneProv) !== "{" &&
              posTwo - posOne - 1 !== 0 &&
              (posTwo - posOne - 1) % 2 !== 0) ||
            posTwo < posOne
          ) {
            return false;
          } else {
            str = str.slice(0, posOne) + str.slice(posOne + 1);
            let posTwoD = str.indexOf(`${config[i + 1]}`);
            str = str.slice(0, posTwoD) + str.slice(posTwoD + 1);
            if (str.length == 0) {
              return true;
            }
          }
        }
      }
    });
  });
  if (str.length == 0) {
    return true;
  } else {
    return false;
  }
};
