import gameBasics from '../index.js';
import getRandomNumber from '../random-number.js';

const minNumber = 1;
const maxNumber = 100;

const getGcd = (num1, num2) => {
  let x = num1;
  let y = num2;

  while (x !== y) {
    if (x > y) {
      x -= y;
    } else {
      y -= x;
    }
  }

  return x;
};

const getGameData = () => {
  const a = getRandomNumber(minNumber, maxNumber);
  const b = getRandomNumber(minNumber, maxNumber);
  const task = `${a} ${b}`;
  const correctAnswer = `${getGcd(a, b)}`;
  return [task, correctAnswer];
};

const gcdGame = () => {
  const rule = 'Find the greatest common divisor of given numbers.';
  gameBasics(rule, getGameData);
};

export default gcdGame;
