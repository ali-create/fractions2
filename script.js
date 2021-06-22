let firstFraction,
  secondFraction,
  fractionOneVal,
  fractionTwoVal,
  inputLT,
  inputRT,
  inputLB,
  inputRB,
  u = "\u2800";
alert("amogus")

// declaring void variables

let plainText = document.querySelector(".plainText");

// compared fractions text

document.querySelector(".btn").addEventListener("click", function () {
  // when `compare` clicked
  inputLT = document.querySelector(".input--0").value;
  inputRT = document.querySelector(".input--1").value;
  inputLB = document.querySelector(".input--2").value;
  inputRB = document.querySelector(".input--3").value;

  // input val to var

  firstFraction = `${inputLT}/${inputLB}`;
  secondFraction = `${inputRT}/${inputRB}`;

  // making 2 fractions out of 4 values ^^

  fractionOneVal = (100 / inputLT) * inputLB;

  fractionTwoVal = (100 / inputRT) * inputRB;
  if (fractionTwoVal < fractionOneVal) {
    plainText.textContent = `${secondFraction} is larger than ${firstFraction}.`;
  } else if (fractionOneVal < fractionTwoVal) {
    plainText.textContent = `${firstFraction} is larger than ${secondFraction}.`;
  } else if ((fractionTwoVal = fractionOneVal)) {
    plainText.textContent = `${secondFraction} is equal to ${firstFraction}.`;
  }
  document.querySelector(
    ".variText--0"
  ).textContent = `${inputLT}/${inputLB}${u}${u}${u}${u}${u}${u}${u}${inputRT}/${inputRB} `;
}); // comparison and display of fractions
