type inputType = "Камень" | "Ножницы" | "Бумага";

function game(input: inputType): object {
  const choices: string[] = ["Камень", "Ножницы", "Бумага"];
  let result: string;
  const computerInput: string = choices[Math.floor(Math.random() * 3)];

  if (input === computerInput) {
    result = "Ничья";
  } else if (
    (input === "Камень" && computerInput === "Ножницы") ||
    (input === "Ножницы" && computerInput === "Бумага") ||
    (input === "Бумага" && computerInput === "Камень")
  ) {
    result = "Игрок победил!";
  } else {
    result = "Компьютер победил!";
  }

  return {
    "Выбор игрока": input,
    "Выбор компьютера": computerInput,
    "Результат": result,
  };
}
console.log(game("Камень"));
