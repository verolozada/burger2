$(document).ready(function () {
  M.updateTextFields();
  $(".devour").on("click", function () {
    alert("Hello");
    var burger_id = $(this).children(".burger_id").val();
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

