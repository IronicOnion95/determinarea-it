let btn = document.getElementById("btn");
let treaptaDePrecizie;
const TRezultat = document.getElementById("T");
const ITRezultat = document.getElementById("IT");
const form = document.getElementById("form");
const val18_val30 = [
  1, 1.5, 2.5, 4, 6, 9, 13, 21, 33, 52, 84, 130, 210, 330, 520, 840, 1300,
  2100, 3300,
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
  210: 12,
  330: 13,
  520: 14,
  840: 15,
  1300: 16,
  2100: 17,
  3300: 18,
};
const val30_val50 = [
  1, 1.5, 3.5, 4, 7, 11, 16, 25, 39, 62, 100, 160, 250, 390, 620, 1000, 1600,
  2500, 3900,
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
  250: 12,
  390: 13,
  620: 14,
  1000: 15,
  1600: 16,
  2500: 17,
  3900: 18,
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
    TRezultat.value = T + "µm";
    ITRezultat.value = "IT" + treaptaDePrecizie;
  }
});