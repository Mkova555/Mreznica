// --- DVOSTRUKI SAT I DATUM UŽIVO ---
function osvjeziSat() {
    const sada = new Date();
    const opcijeDatuma = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    
    const poljeDatum = document.getElementById('trenutni-dan-datum');
    const poljeSat = document.getElementById('sat');

    if (poljeDatum) {
        poljeDatum.textContent = sada.toLocaleDateString('hr-HR', opcijeDatuma).toUpperCase() + " | ";
    }
    if (poljeSat) {
        let h = String(sada.getHours()).padStart(2, '0');
        let m = String(sada.getMinutes()).padStart(2, '0');
        let s = String(sada.getSeconds()).padStart(2, '0');
        poljeSat.textContent = `${h}:${m}:${s}`;
    }
}
setInterval(osvjeziSat, 1000);
osvjeziSat();

// --- RESPONSIVE HAMBURGER IZBORNIK ---
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

if (hamburger && navMenu) {
    hamburger.addEventListener("click", () => {
        hamburger.classList.toggle("active");
        navMenu.classList.toggle("active");
    });
}

// --- GLATKI AUTOMATSKI SLIDER ---
const slides = document.querySelectorAll(".slide");
let trenutniIndeks = 0;

function pokreniSlider() {
    if (slides.length > 1) {
        slides[trenutniIndeks].classList.remove("active");
        trenutniIndeks = (trenutniIndeks + 1) % slides.length;
        slides[trenutniIndeks].classList.add("active");
    }
}
if (slides.length > 0) {
    setInterval(pokreniSlider, 4000);
}

// --- FILTRIRANJE WP PORTFOLIO FOTOALBUMA ---
function filtrirajGaleriju(kategorija) {
    const stavke = document.querySelectorAll(".galerija-stavka");
    const gumbi = document.querySelectorAll(".filter-gumb");

    gumbi.forEach(gumb => gumb.classList.remove("aktivno"));
    event.target.classList.add("aktivno");

    stavke.forEach(stavka => {
        if (kategorija === "sve" || stavka.classList.contains(kategorija)) {
            stavka.style.display = "block";
        } else {
            stavka.style.display = "none";
        }
    });
}

// --- ADMIN PRIJAVA LOGIKA (FIX ZA Screenshot 2026-06-23 195039.png) ---
const loginForma = document.getElementById('admin-login-forma');
const porukaPolje = document.getElementById('login-poruka');

if (loginForma) {
    loginForma.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const korisnik = document.getElementById('korisnik').value.trim();
        const lozinka = document.getElementById('lozinka').value.trim();
        
        if (korisnik === 'admin' && lozinka === 'mreznica2026') {
            porukaPolje.textContent = "Prijava uspješna! Pokrećem administratorsku ploču...";
            porukaPolje.className = "skrivena-poruka uspjeh";
            
            setTimeout(() => {
                alert("Uspješna autorizacija! Budući da je ovo statičan GitHub sajt, ovdje simuliramo ulaz na admin panel Čuvara Mrežnice.");
            }, 1000);
        } else {
            porukaPolje.textContent = "Netočne vjerodajnice. Pristup odbijen!";
            porukaPolje.className = "skrivena-poruka greska";
        }
    });
}