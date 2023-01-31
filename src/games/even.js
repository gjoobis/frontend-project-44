import gameBasics from '../index.js';
import getRandomNumber from '../random-number.js';

const minNumber = 1;
const maxNumber = 100;

const getGameData = () => {
  const task = getRandomNumber(minNumber, maxNumber);
  const correctAnswer = task % 2 === 0 ? 'yes' : 'no';
  return [task, correctAnswer];
};

const evenGame = () => {
  const rule = 'Answer "yes" if the number is even, otherwise answer "no".';
  gameBasics(rule, getGameData);
};

export default evenGame;
