import gameBasics from '../index.js';
import getRandomNumber from '../random-number.js';

const prgrMin = 5;
const prgrMax = 10;
const dMin = 1;
const dMax = 10;
const aMin = 1;
const aMax = 20;

const makePrgr = () => {
  const d = getRandomNumber(dMin, dMax);
  let a = getRandomNumber(aMin, aMax);
  const prgrLength = getRandomNumber(prgrMin, prgrMax);
  const prgr = [a];

  for (let i = 0; i < prgrLength; i += 1) {
    prgr.push(a += d);
  }

  return prgr;
};

const pickHidingSpot = (prgr) => getRandomNumber(0, prgr.length);

const hideNumber = (prgr, hiddenNum) => {
  const strPrgr = prgr.join(' ');
  return strPrgr.replace(`${hiddenNum}`, '..');
};

const getGameData = () => {
  const progression = makePrgr();
  const hidingSpot = pickHidingSpot(progression);
  const correctAnswer = `${progression[hidingSpot]}`;
  const task = `${hideNumber(progression, correctAnswer)}`;
  return [task, correctAnswer];
};

const progressionGame = () => {
  const rule = 'What number is missing in the progression?';
  gameBasics(rule, getGameData);
};

export default progressionGame;
