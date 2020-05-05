const button = document
  .querySelector("#click")
  .addEventListener("click", () => {
    const a = document.querySelector("#first").value;
    const b = document.querySelector("#second").value;
    if (a) {
      if (b) {
        const c = a * b;
        const r = document.querySelector("#result");
        r.textContent = c;
      } else {
        const r = document.querySelector("#result");
        r.textContent = "두 번째 값 입력해";
      }
    } else {
      const r = document.querySelector("#result");
      r.textContent = "첫 번째 값 입력해";
    }
  });
