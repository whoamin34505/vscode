document.querySelector('.btn1').onclick = myClick;

function myClick() {
var kol = document.querySelector('.kol').value;
var n1 = document.querySelector('.n1').value;
let d = document.querySelector('.d').value;
let ans1 = 2 * n1; 
let ans2 = d * (kol - 1);
let ans3 = (ans1 + ans2)/2;
let out1 = `Узнаем значение в дроби: (${ans1} + ${ans2})/2 = ${ans3}` 
let ans4 = ans3 * kol;
let ans5 = Math.round(ans4 * 100) / 100;
let out2 = `Умножим дробь на количество членов: ${ans3} * ${kol} = ${ans5}`
document.querySelector('.out1').innerHTML = out1;
document.querySelector('.out2').innerHTML = out2;
}