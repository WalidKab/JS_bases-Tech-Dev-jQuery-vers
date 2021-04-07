console.log("exercice 5");

for (let i=0;i<$(".row").children().length;i++){

    const getComputerChoice = () => Math.floor(Math.random()*3)

    $(".img-responsive").eq(i).on("click",function () {

        let computerChoice = getComputerChoice();
        let userChoice = $(".col-sm-4").eq(i).find("img").attr("alt");

        $("#userChoice span").text($(".col-sm-4").eq(i).find("img").attr("alt"));

        if (computerChoice===0) {
            $("#computerChoice span").text("Pierre")
        } else if (computerChoice===1){
            $("#computerChoice span").text("Feuille")
        } else if (computerChoice===2){
            $("#computerChoice span").text("Ciseaux")
        }
        if (userChoice===$("#computerChoice span").text()){
            $("#result span").text("Égalité").css("color","grey")
        } else if (userChoice==="Pierre"){
            if ($("#computerChoice span").text()==="Ciseaux"){
                $("#result span").text("Vous avez gagné").css("color","green")
            } else {
                $("#result span").text("Vous avez perdu").css("color","red")
            }
        } else if (userChoice==="Feuille"){
            if ($("#computerChoice span").text()==="Pierre"){
                $("#result span").text("Vous avez gagné").css("color","green")
            } else {
                $("#result span").text("Vous avez perdu").css("color","red")
            }
        } else if (userChoice==="Ciseaux"){
            if ($("#computerChoice span").text()==="Pierre"){
                $("#result span").text("Vous avez perdu").css("color","red")
            } else {
                $("#result span").text("Vous avez gagné").css("color","green")
            }
        }
    }
    )
}