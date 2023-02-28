let mainButton = document.querySelector(".btn");

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
  // let hexValue = ;
  console.log(hexInts[Math.floor(Math.random() * hexInts.length)]);
});
