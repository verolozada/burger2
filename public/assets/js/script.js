$(document).ready(function () {

  // $(".devour-form").on("submit", function (event) {
  //   event.preventDefault();

  //   var burger_id = $(this).children(".burger_id").val();
  //   $.ajax({
  //     method: "PUT",
  //     url: "/burgers/update/" + burger_id
  //   }).then(function (data) {
  //     // reload page to display devoured burger in proper column
  //     location.reload();
  //   });

  // });
  M.updateTextFields();
  $(".devour").on("click", function () {
    var burger_id = $(this).children(".burger_id").val();
    $.ajax({
      method: "PUT",
      url: "/burgers/update/" + burger_id
    }).then(function (data) {
      location.reload();
    });
  });
});
