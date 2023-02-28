let mainButton = document.querySelector(".btn");
let btnHeading = document.querySelector(".btn-heading");

const hexInts = [
  "0",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
];

mainButton.addEventListener("click", (e) => {
  let result = "";
  for (let i = 1; i <= 6; i++) {
    result += hexInts[Math.floor(Math.random() * hexInts.length)];
  }
  btnHeading.innerHTML = "#" + result;
  console.log(result);
});
