import dotenv from 'dotenv-safe';
import add from '@src/math/add';

dotenv.config();

console.log(process.env.MY_NAME);
console.log(add(1, 3));

const helloWorld = () => {
  console.log('hello ji');
};

helloWorld();
