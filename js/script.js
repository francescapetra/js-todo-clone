// Creare una todo list che permetta di aggiungere (tramite campo input) e rimuovere gli elementi!

// creo l'array con un lista già esistente
var list = [
  "Andare al supermercato",
  "Pagare le bollette",
  "Innaffiare giardino",
  "Lavare l'auto",
  "Fare la lavtrice",
  "Lavare le tende",
];

//faccio ciclare i miei elementi
for (var i = 0; i < list.length; i++) {
// clono il template con i li
var template = $(".template ul li").clone();
// inserisco i miei elementi singoli nel template con prepand
template.prepend(list[i]);
//aggiungo il template alla lista esistente to_do_list
$(".to_do_list").append(template);
};

// creo un click generico in previsioni del push successivo da input
// per cancellare gli elementi
// // lo lego alla to do al click di delete
$(".to_do_list").on("click", ".delete",function(){
  // di questo, risali al parent e rimuovi
  $(this).parent().remove();
}
);

// aggiungi una label e input in html
// a questo aggiungiamo l'evento della tastiera
$("#addlist").keydown(function(e){
  // con il log ti identifichi il tasto
  console.log(event.which);
  // se all'interno dell'input il tasto 13 viene premuto
  // mi restituisci il valore
  if (e.which == 13) {
    var task = $(this).val();
  //se il campo è diverso da vuoto
      if (task != "") {
  //mi cloni il template
        var cloneTemplate = $(".template ul li").clone();
  // aggiungo le info ricevute al template
        cloneTemplate.prepend(task);
  // aggiungo come su il template alla lista con il suo valore
        $(".to_do_list").append(cloneTemplate);
        $(this).val("");
      }
  }
}
);




































// clicco su domanda e apre e chiude
// $("div").click(
//   function(){
//     $(this).children().toggle();
//     console.log($(this).children("p"));
//   }
// )
//
// $("li").click(function () {
//      $(this).css("color", "orange");
//      console.log($(this));
//  });
