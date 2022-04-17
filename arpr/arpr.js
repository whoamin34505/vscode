document.querySelector('button').onclick = myClick;

function myClick() {
    var ras = document.getElementById('setras').value;
    if (ras=="raz") {
        var site = 1
    }
    if (ras=="sum1") {
        var site = 2
    }
    if (ras=="sum2") {
        var site = 3
    }
    if (ras=="n1") {
        var site = 4
    }
    if (ras=="n2") {
        var site = 5
    }
	var sites = ["https://whoamin34505.github.io/raz/", "https://whoamin34505.github.io/sumraz/", "https://whoamin34505.github.io/sum/", "https://whoamin34505.github.io/ch/","https://whoamin34505.github.io/chsos/"];
    window.location.href = sites [site-1];
    console.log (sites [site-1])
}