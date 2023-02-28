let background = document.querySelector("#background");

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
  let hexValue = "";
  for (let i = 1; i <= 6; i++) {
    hexValue += randomInt();
  }
  btnHeading.innerHTML = "#" + hexValue;
  background.style.backgroundColor = "#" + hexValue;
});

function randomInt() {
  return hexInts[Math.floor(Math.random() * hexInts.length)];
}
