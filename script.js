let btn = document.getElementById("btn");
let treaptaDePrecizie;
const TRezultat = document.getElementById("T");
const ITRezultat = document.getElementById("IT");
const form = document.getElementById("form");
const val18_val30 = [
  1, 1.5, 2.5, 4, 6, 9, 13, 21, 33, 52, 84, 130, 0.21, 0.33, 0.52, 0.84, 1.3,
  2.1, 3.3,
];
const val18_val30Obj = {
  1: 0,
  1.5: 1,
  2.5: 2,
  4: 3,
  6: 4,
  9: 5,
  13: 6,
  21: 7,
  33: 8,
  52: 9,
  84: 10,
  130: 11,
  0.21: 12,
  0.33: 13,
  0.52: 14,
  0.84: 15,
  1.3: 16,
  2.1: 17,
  3.3: 18,
};
const val30_val50 = [
  1, 1.5, 3.5, 4, 7, 11, 16, 25, 39, 62, 100, 160, 0.25, 0.39, 0.62, 1, 1.6,
  2.5, 3.9,
];
const val30_val50Obj = {
  1: 0,
  1.5: 1,
  2.5: 2,
  4: 3,
  7: 4,
  11: 5,
  16: 6,
  25: 7,
  39: 8,
  62: 9,
  100: 10,
  160: 11,
  0.25: 12,
  0.39: 13,
  0.62: 14,
  1: 15,
  1.6: 16,
  2.5: 17,
  3.9: 18,
};
form.addEventListener("submit", function (e) {
  e.preventDefault();
  const D = document.getElementById("dim").value;
  const AS = document.getElementById("As").value;
  const AI = document.getElementById("Ai").value;
  let Dnum = Number(D);
  let ASnum = Number(AS);
  let AInum = Number(AI);
  let T = ASnum - AInum;
  if (Number(T.toFixed(2)) === 0.6) {
    TRezultat.value = T.toFixed(2);
    ITRezultat.value = "01";
  } else {
    T = Number(T.toFixed(2));
    if (Dnum >= 20 && Dnum <= 30) {
      for (let i = 0; i < val18_val30.length; i++)
        if (val18_val30[i] === T)
          treaptaDePrecizie = val18_val30Obj[val18_val30[i]];
    } else if (Dnum > 30 && Dnum <= 50) {
      for (let i = 0; i < val30_val50.length; i++)
        if (val30_val50[i] === T)
          treaptaDePrecizie = val30_val50Obj[val30_val50[i]];
    }
    TRezultat.value = T;
    ITRezultat.value = treaptaDePrecizie;
  }
});