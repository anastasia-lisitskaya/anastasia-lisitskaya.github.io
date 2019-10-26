// Функция внутри $( document ).ready() срабатывает после загрузки DOM.
$(document).ready(function() {
  console.log( "ready!" );
  // Поиск элемента в DOM по его id и замена его содержимого innerHTML с помощью JQuery.
  $("#message").html("Hello world!");
}); 
