// Creare una todo list che permetta di aggiungere (tramite campo input) e rimuovere gli elementi!

// creo l'array con un lista già esistente
var list = [
  "Fare spesa",
  "Innaffiare giardino",
  "Lavare l'auto",
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
