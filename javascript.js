document.addEventListener("DOMContentLoaded", () => {
    
    // Logika za novi, ljepši Hamburger meni
    const hamburger = document.querySelector(".hamburger");
    const navMenu = document.querySelector(".nav-menu");
    
    if (hamburger) {
        hamburger.addEventListener("click", () => {
            hamburger.classList.toggle("active");
            navMenu.classList.toggle("active");
            // Sprječava scrollanje stranice dok je izbornik otvoren
            document.body.style.overflow = navMenu.classList.contains("active") ? "hidden" : "auto";
        });
    }

    // Sat i Datum
    function azurirajVrijeme() {
        const satElement = document.getElementById("sat");
        const datumElement = document.getElementById("trenutni-dan-datum");
        const sada = new Date();

        if (satElement) {
            satElement.innerText = sada.toLocaleTimeString('hr-HR');
        }
        if (datumElement) {
            const opcije = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
            let formatirano = sada.toLocaleDateString('hr-HR', opcije);
            datumElement.innerText = formatirano.charAt(0).toUpperCase() + formatirano.slice(1);
        }
        const godinaFooter = document.getElementById("godina-footer");
        if(godinaFooter) godinaFooter.innerText = sada.getFullYear();
    }
    setInterval(azurirajVrijeme, 1000);
    azurirajVrijeme();

    // Radio
    const radioBtn = document.getElementById("radio-kontroler");
    const radioStatus = document.getElementById("radio-status");
    let svira = false;
    
    if (radioBtn) {
        radioBtn.addEventListener("click", () => {
            svira = !svira;
            if (svira) {
                radioBtn.innerText = "⏸ Zaustavi Radio";
                radioBtn.style.background = "#fff";
                radioStatus.innerText = "Svira: Mrežnica Uživo 🎶";
                radioStatus.style.color = "#00ff80";
            } else {
                radioBtn.innerText = "▶ Pokreni Radio";
                radioBtn.style.background = "var(--smaragdna-neon)";
                radioStatus.innerText = "Radio je isključen";
                radioStatus.style.color = "var(--tekst-sivi)";
            }
        });
    }

    // Filteri Galerije
    const filterGumbi = document.querySelectorAll(".filter-gumb");
    const slike = document.querySelectorAll(".galerija-stavka");

    filterGumbi.forEach(gumb => {
        gumb.addEventListener("click", () => {
            filterGumbi.forEach(b => b.classList.remove("aktivno"));
            gumb.classList.add("aktivno");
            const kat = gumb.getAttribute("data-kategorija");

            slike.forEach(slika => {
                if (kat === "sve" || slika.getAttribute("data-kat") === kat) {
                    slika.style.display = "block";
                } else {
                    slika.style.display = "none";
                }
            });
        });
    });

    // Vizualna prijava (Za kasnije prebacivanje na bazu)
    const forma = document.getElementById("forma-login");
    const loginBlok = document.getElementById("login-blok");
    const clanskiKarton = document.getElementById("clanski-karton");
    const prikazImena = document.getElementById("clan-ime-prikaz");
    const odjava = document.getElementById("odjava-gumb");

    if (forma) {
        forma.addEventListener("submit", (e) => {
            e.preventDefault();
            const ime = document.getElementById("korisnik-ime").value;
            prikazImena.innerText = ime;
            loginBlok.style.display = "none";
            clanskiKarton.style.display = "block";
        });

        odjava.addEventListener("click", () => {
            clanskiKarton.style.display = "none";
            loginBlok.style.display = "block";
            forma.reset();
        });
    }
});