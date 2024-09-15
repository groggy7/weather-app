let foo = 'bar';

function test() {
  console.log(foo);
  if (foo === 'bar') {
    console.log('ESLint and Prettier should fix this!');
  }
}

test();
