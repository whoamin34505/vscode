document.querySelector('.btn1').onclick = myClick;

function myClick() {
var n = document.querySelector('.n').value;
var n1 = document.querySelector('.n1').value;
let d = document.querySelector('.d').value;
let ans1 = d*(n-1);
let ans2 = Number(n1)+Number(ans1);
let ans3 = Math.round(ans2 * 100) / 100;
let out1 = `Подставим все значения в формулу: ${n1} + ${d}*(${n} - 1) = ${ans3}`
document.querySelector('.out1').innerHTML = out1;
}