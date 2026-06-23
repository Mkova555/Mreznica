// SAT I DATUM UŽIVO
function pokreniSat() {
    const sada = new Date();
    const opcije = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    document.getElementById('trenutni-dan-datum').textContent = sada.toLocaleDateString('hr-HR', opcije).toUpperCase();

    let h = String(sada.getHours()).padStart(2, '0');
    let m = String(sada.getMinutes()).padStart(2, '0');
    let s = String(sada.getSeconds()).padStart(2, '0');
    document.getElementById('sat').textContent = `${h}:${m}:${s}`;
}
setInterval(pokreniSat, 1000);
pokreniSat();

// AUTOMATSKI FOTO SLIDER
const sveSlike = document.querySelectorAll('.slide');
let indeksSlike = 0;

function promjeniSliku() {
    if(sveSlike.length > 0) {
        sveSlike[indeksSlike].classList.remove('active');
        indeksSlike = (indeksSlike + 1) % sveSlike.length;
        sveSlike[indeksSlike].classList.add('active');
    }
}
if(sveSlike.length > 0) {
    setInterval(promjeniSliku, 4000);
}
