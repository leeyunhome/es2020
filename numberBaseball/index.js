const input = document.querySelector("#input");
const check = document.querySelector("#check");
const logs = document.querySelector("#logs");

let answer = [
  Math.floor(Math.random() * 10),
  Math.floor(Math.random() * 10),
  Math.floor(Math.random() * 10),
  Math.floor(Math.random() * 10),
];
answer.join(""); // 3046

let count = 0;
check.addEventListener("click", () => {
  const value = input.value; // 문자열 ex) '3046'
  if (value && value.length === 4) {
    // 앰퍼센드 AND 연산자 / 보호연산자
  }
});
