import readlineSync from 'readline-sync';

const greeting = () => {
  const name = readlineSync.question('May I have your name? ');
  console.log((name === '') ? 'Hello, friend!' : `Hello, ${name}!`)
};

export default greeting;