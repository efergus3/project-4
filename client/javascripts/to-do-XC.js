//jshint esversion: 6

let controller = function() {

  let addCommentFromInputBox = function() {
    //Semmy uses "$" to name variables that will contain jQuery objects
    let $new_comment;

    if ($(".comment-input input").val() !== "") {
      $new_comment = $("<p>").text($(".comment-input input").val());
      //$new_comment.hide();
      $(".comments").append($new_comment);
      //$new_comment.fadeIn();
      $(".comment-input input").val("");
      //local.setItem("toDoList", $(".comments").html());
      //log the list of paragraph elements
      console.log($(".comments").html());
      localStorage.setItem("toDoList", $(".comments").html());
      console.log(localStorage);
    }
  };

  $(".comment-input button").on("click", function(event) {
    addCommentFromInputBox();
  });

  $(".comment-delete button").on("click", function(event) {
    console.log("delete");
    localStorage.clear();
    window.location.reload();
  });

  $(".comment-input input").on("keypress", function(event) {
    if (event.keyCode === 13) {
      addCommentFromInputBox();
    }
  });
};

if (localStorage.toDoList) {
  $(".comments").html(localStorage.getItem("toDoList"));
}

//$(".comments").html(localStorage.getItem("toDoList"));
$(document).ready(controller);
