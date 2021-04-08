console.log("exercice 8");

$( function() {
    $( "#draggable" ).draggable();
    $( "#droppable" ).droppable({
      drop: function( event, ui ) {
        $( this )
          .addClass( "ui-state-highlight" ).css("background-color", "red")
          .find( "p" )
            .html( "Tu as touché la cible, bravo!" );
      }
    });
  } );

