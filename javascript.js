// --- SIMULACIJA ADMIN PRIJAVE (ZA GITHUB PAGES) ---
const loginForma = document.getElementById('admin-login-forma');
const porukaPolje = document.getElementById('login-poruka');

if(loginForma) {
    loginForma.addEventListener('submit', function(e) {
        e.preventDefault(); // Sprječava klasično osvježavanje stranice
        
        const korisnik = document.getElementById('korisnik').value;
        const lozinka = document.getElementById('lozinka').value;
        
        // Postavljeni admin podaci
        if(korisnik === 'admin' && lozinka === 'mreznica2026') {
            porukaPolje.textContent = "Uspješna prijava! Učitavam nadzornu ploču...";
            porukaPolje.className = "skrivena-poruka uspjeh";
            
            // Simulacija preusmjeravanja nakon 2 sekunde
            setTimeout(() => {
                alert("Ovo je statična stranica na GitHubu. U pravoj verziji, ovdje biste bili prebačeni na admin dashboard!");
                // Ovdje u budućnosti možeš staviti: window.location.href = "admin-dashboard.html";
            }, 2000);
            
        } else {
            porukaPolje.textContent = "Pogrešno korisničko ime ili lozinka!";
            porukaPolje.className = "skrivena-poruka greska";
        }
    });
}
