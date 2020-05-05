const input = document.querySelector("#input");
const check = document.querySelector("#check");
const logs = document.querySelector("#logs");

// let numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
let numbers = []
for (let n = 0; n <= 9; n += 1) {
  numbers.push(n)
}
let answer = [];
let n = 0
while (n <= 3) {
  const index = Math.floor(Math.random() * (numbers.length)) // 0 ~ 9 정수
  answer.push(numbers[index])
  numbers.splice(index, 1)
  n+=1
}
console.log(answer)

let count = 0;
check.addEventListener("click", () => {
  const value = input.value; // 문자열 ex) '3046' true truthy
  // 0, '', NaN, false, null, undefined -> falsy value
  if (value && value.length === 4) { // 앰퍼센드 AND 연산자 / 보호연산자
    if (answer.join('') === value) {
      console.log('같다');
      logs.appendChild(document.createTextNode('HR'))
    } else {
      console.log('다르다');
      let strike = 0;
      let ball = 0;
      for (const [aIndex, aNumber] of answer.entries()) {
        for (const [iIndex, iString] of input.value.split('').entries()) {
          if (aNumber === Number(iString)) {
            if (aIndex === iIndex) {
              strike +=1
            } else {
              ball += 1
            }
          }
        }
      }
      const message = document.createTextNode(`${input.value}: ${strike} strike ${ball} ball`);
      logs.appendChild(message)
      logs.appendChild(document.createElement('br'));
      // const message = document.createTextNode(`${input.value}: ${strike} strike ${ball} ball`);
      // logs.append(`${input.value}: ${strike} strike ${ball} ball`, document.createElement('br'))
      if (count > 10) {
        logs.appendChild(document.createTextNode(`Game Over: ${answer.join('')}`))
      } else {
        count += 1
      }
    }
  }
});
