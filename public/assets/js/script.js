$(document).ready(function () {
  M.updateTextFields();
  $(".devour").on("click", function () {
    var burger_id = $(this).val();
    console.log(burger_id);
    $.ajax({
      method: "PUT",
      url: "/burgers/update/" + burger_id
    }).then(function (data) {
      location.reload();
    });
  });

  $(".burgerpic").addClass("animated bounceIn");
});

