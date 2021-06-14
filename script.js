let fractionOneN;
let fractionOneD;
let f1r;
let f2r;
let fractionTwoN;
let fractionTwoD;
let f1;
let f2;
let plainText = document.querySelector(".plainText");
document.querySelector(".btn").addEventListener("click", function () {
  fractionOneN = document.querySelector(".input--0").value;
  fractionOneD = document.querySelector(".input--1").value;
  fractionTwoN = document.querySelector(".input--2").value;
  fractionTwoD = document.querySelector(".input--3").value;

  f1r = `${fractionOneN}/${fractionTwoN}`;
  f2r = `${fractionOneD}/${fractionTwoD}`;

  f1 = (100 / fractionOneN) * fractionTwoD;

  f2 = (100 / fractionTwoN) * fractionOneD;

  if (f1 < f2) {
    plainText.textContent = `${f2r} is larger than ${f1r}.`;
  } else if (f2 > f1) {
    plainText.textContent = `${f1r} is larger than ${f2r}.`;
  } else if ((f2 = f1)) {
    plainText.textContent = `${f2r} is equal to ${f1r}.`;
  }
});
