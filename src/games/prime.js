import gameBasics from '../index.js';
import getRandomNumber from '../random-number.js';

const minNumber = 2;
const maxNumber = 100;

const checkPrime = (num) => {
  for (let i = 2; i * i <= num; i += 1) {
    if (num % i === 0) {
      return false;
    }
  }

  return true;
};

const getGameData = () => {
  const number = getRandomNumber(minNumber, maxNumber);
  const task = `${number}`;
  const correctAnswer = checkPrime(number) ? 'yes' : 'no';
  return [task, correctAnswer];
};

const primeGame = () => {
  const rule = 'Answer "yes" if given number is prime. Otherwise answer "no".';
  gameBasics(rule, getGameData);
};

export default primeGame;
