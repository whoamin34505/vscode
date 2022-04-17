document.querySelector('.btn1').onclick = myClick;

function myClick() {
var kol = document.querySelector('.kol').value;
var n1 = document.querySelector('.n1').value;
let d = document.querySelector('.d').value;
let ans1 = Number(n1) + Number(d); 
let ans2 = kol * ans1;
let out1 = `Узнаем значение в числителе: (${n1} + ${d}) * ${kol} = ${ans2}`
let ans3 = Number(ans2)/2;
let ans4 = Math.round(ans3 * 100) / 100;
let out2 = `Разделим числитель на знаменатель: ${ans2}/2 = ${ans4}`
document.querySelector('.out1').innerHTML = out1;
document.querySelector('.out2').innerHTML = out2;
}