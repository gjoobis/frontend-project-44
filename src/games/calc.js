import gameBasics from '../index.js';
import getRandomNumber from '../random-number.js';

const minNumber = 1;
const maxNumber = 10;

const getGameData = () => {
  const a = getRandomNumber(minNumber, maxNumber);
  const b = getRandomNumber(minNumber, a);
  const operators = ['+', '-', '*'];
  const i = getRandomNumber(0, operators.length);
  const operations = [a + b, a - b, a * b];
  const task = `${a} ${operators[i]} ${b}`;
  const correctAnswer = `${operations[i]}`;
  return [task, correctAnswer];
};

const calcGame = () => {
  const rule = 'What is the result of the expression?';
  gameBasics(rule, getGameData);
};

export default calcGame;
