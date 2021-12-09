function answer() {
  const arraysAll = [];

  let question;
  let end = true;
  let i = 0;

  do {
    question = prompt("Введите значение");
    const isNumber = +question;

    if (question) {
      arraysAll.push(question);
      console.log(arraysAll);
    } else if (question === null || question === "") {
      arraysAll.pop();
      console.log(arraysAll);
    }
  } while (end);
  console.log(arraysAll);
}
answer();
