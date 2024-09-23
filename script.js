document.getElementById("myForm").addEventListener("submit", function(event) {
    event.preventDefault();

    let nom = document.getElementById("#nom").value;
    let prenom = document.getElementById("#prenom").value;
    let genre = document.getElementById("#genre").value;
    let dateNaissance = document.getElementById("#date").value;
    let codePostal = document.getElementById("#codePostal").value;
    let adresse = document.getElementById("#adresse").value;
    let ville = document.getElementById("#ville").value;
    let email = document.getElementById("#email").value;
    let sujet = document.getElementById("#sujet").value;
    let votreQuestion = document.getElementById("#votreQuestion").value;
    
    localStorage.setItem("nom", nom);
    localStorage.setItem("prenom", prenom);
    localStorage.setItem("genre", genre);
    localStorage.setItem("date", dateNaissance);
    localStorage.setItem("codePostal", codePostal);
    localStorage.setItem("adresse", adresse);
    localStorage.setItem("ville", ville);
    localStorage.setItem("email", email);
    localStorage.setItem("sujet", sujet);
    localStorage.setItem("votreQuestion", votreQuestion);

    window.clientInformation.href = "display.html"

    document.getElementById("displayNom").innerText = localStorage.getItem('nom');
})

