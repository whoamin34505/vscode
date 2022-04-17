document.querySelector('.btn1').onclick = myClick;

function myClick() {
var n = document.querySelector('.n').value;
var nogo = document.querySelector('.nogo').value;
let m = document.querySelector('.m').value;
let mogo = document.querySelector('.mogo').value;
let ans1 = m-n;
let ans2 = ans1/(mogo-nogo);
let ans3 = Math.round(ans2 * 100) / 100;
let pol = `d = (${m} - ${n})/(${mogo} - ${nogo}) = ${ans3}`;
document.querySelector('.out1').innerHTML = pol;
}