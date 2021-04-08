console.log("exercice 6");

$(".btn-danger").click(function(){
    const emailReg = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    const email = $(".form-control").val();
    const pass = $(".form-pass").val();
    if(email.length === 0){
        $(".erreur").text("Veuillez renseigner votre adresse mail").addClass("alert alert-warning");
        }
    else if (!emailReg.test(email)){
        $(".erreur").text("Veuillez renseigner une adresse mail valide (@)").addClass("alert alert-warning");
    }
    else if (email === "hello@me.com" && pass ==="secret8"){
        alert("**Vous êtes connecté**");
    }
    else if(pass.length === 0){
        $(".erreur").text("Mot de passe invalide").addClass("alert alert-warning");
    }
    else if(pass.length < 6){
        $(".erreur").text("Votre mot de passe doit contenir au moins 6 caractères").addClass("alert alert-warning");    
    }
    else{
    alert("Vous êtes connecté avec l'adresse suivante : " + email);
    console.log("Email : " + email + " Mot de passe : " + pass);
    }
});
