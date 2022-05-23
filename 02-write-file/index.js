const readline = require('readline');
const path = require('path');
console.log('доброго времени суток');
const fs = require('fs');

// если файл есть очищаем его
fs.writeFile(path.join(__dirname, 'text.txt'), '', err => {
  if (err) throw err;
});

// создаём интерфейс
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// проверка на ввод (exit) ключа для выхода из node
const askQuestion = () => {
  const checkQuestion = (name) => {
    if (name === 'exit') {
      rl.close();
    }
  };

  rl.question('Какие методы массивов вы знаете? отправляйте методы по одному!', function (name) {
    checkQuestion(name);
    // console.log('в руках', name);
    fs.appendFile(path.join(__dirname, 'text.txt'), ` ${name}`, err => {
      if (err) throw err;
    });
    // console.log('evttttt', evt);
  });

  rl.on('close', function () {
    console.log('\nNot bad! Not bad!');
    process.exit(0);
  });

  rl.on('line', (input) => {
    checkQuestion(input);
    // console.log('123', input);
    fs.appendFile(path.join(__dirname, 'text.txt'), ` ${input}`, err => {
      if (err) throw err;
    });
  });
};


askQuestion();
