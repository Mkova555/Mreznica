// --- SAT I DATUM UŽIVO ---
function osvjeziVrijeme() {
    const sada = new Date();
    
    // Formatiranje datuma na hrvatskom jeziku
    const opcijeDatuma = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    let datumTekst = sada.toLocaleDateString('hr-HR', opcijeDatuma);
    document.getElementById('trenutni-dan-datum').textContent = datumTekst.toUpperCase();

    // Formatiranje sata
    let sati = String(sada.getHours()).padStart(2, '0');
    let minute = String(sada.getMinutes()).padStart(2, '0');
    let sekunde = String(sada.getSeconds()).padStart(2, '0');
    document.getElementById('sat').textContent = `${sati}:${minute}:${sekunde}`;
}

// Pokreni sat odmah i osvježavaj svake sekunde
setInterval(osvjeziVrijeme, 1000);
osvjeziVrijeme();

// --- AUTOMATSKI FOTO-SLIDER ---
const slides = document.querySelectorAll('.slide');
let trenutniSlide = 0;

function sljedeciSlide() {
    // Makni aktivnu klasu s trenutne slike
    slides[trenutniSlide].classList.remove('active');
    
    // Izračunaj indeks sljedeće slike
    trenutniSlide = (trenutniSlide + 1) % slides.length;
    
    // Dodaj aktivnu klasu na novu sliku
    slides[trenutniSlide].classList.add('active');
}

// Ako na stranici postoji slider, pokreni automatsku izmjenu svake 4 sekunde
if(slides.length > 0) {
    setInterval(sljedeciSlide, 4000);
}
