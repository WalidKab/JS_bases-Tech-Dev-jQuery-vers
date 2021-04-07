console.log("exercice 4");

$(".btn-danger").click(function(){
    const valeur = $(".form-control").val();
    alert("Merci " + valeur + ", nous vous tiendrons informé des différentes offres.");
});

$("#myNavbar ul li").eq(1).on("dblclick",function () {
    $("li").eq(1).hide();
});

var sum = 0;
    $(".img-responsive").click(function() {   
        sum += 1;
        $("#myNavbar a").last().text("cart ("+sum+")");
});

for(let i=0; i<$(".row").children().length; i++){
$(".img-responsive").eq(i).on("mouseover", function(){
    console.log("la souris est sur "+ $(".img-responsive").eq(i).attr("src"))
});
}

$('.form-control').focus(function() {
    console.log("L'utilisateur écrit dans l'input")
});

$(".form-control").change(function(){
    var str = $(".form-control").val();
    console.log(str);
});
