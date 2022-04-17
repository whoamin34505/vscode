document.querySelector('.btn1').onclick = myClick;

function myClick() {
var n1 = document.querySelector('.n1').value;
let n2 = document.querySelector('.n2').value;
let ans1 = (Number(n1)+Number(n2))/2;
let ans2 = Math.round(ans1 * 100) / 100;
let out1 = `Подставим все значения в формулу, и получим: an = (${n1} + ${n2})/2 = ${ans2}`
document.querySelector('.out1').innerHTML = out1;
}