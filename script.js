let inputZero;
let inputOne;
let f1r;
let f2r;
let inputTwo;
let inputThree;
let f1;
let f2;
let plainText = document.querySelector(".plainText");
document.querySelector(".btn").addEventListener("click", function () {
  inputZero = document.querySelector(".input--0").value;
  inputOne = document.querySelector(".input--1").value;
  inputTwo = document.querySelector(".input--2").value;
  inputThree = document.querySelector(".input--3").value;

  f1r = `${inputZero}/${inputTwo}`;
  f2r = `${inputOne}/${inputThree}`;

  f1 = (100 / inputZero) * inputTwo;

  f2 = (100 / inputOne) * inputThree;
  if (f2 < f1) {
    plainText.textContent = `${f2r} is larger than ${f1r}.`;
  } else if (f1 < f2) {
    plainText.textContent = `${f1r} is larger than ${f2r}.`;
  } else if ((f2 = f1)) {
    plainText.textContent = `${f2r} is equal to ${f1r}.`;
  }
});
