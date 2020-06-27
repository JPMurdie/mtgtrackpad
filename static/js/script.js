/*Link Test = document.getElementById("demo").innerHTML = 5 + 6;*/

$(document).ready(function () {
  $(".check-fields").on("click", function () {
    var reqlength = $(".form_box").length;

    var value = $(".form_box").filter(function () {
      return this.value != "";
    });

    if (value.length >= 0 && value.length !== reqlength) {
      content = "Incomplete";
    } else {
      content = "Complete";
    }

    $("#eventstatusinput").val(content);

    var results = [];

    if (
      $("#first_w").val() == 2 ||
      ($("#first_w").val() == 1 && $("#first_l").val() == 0)
    ) {
      res = "won";
    } else if ($("#first_w").val() == 1 && $("#first_l").val() == 1) {
      res = "draw";
    } else if ($("#first_w").val() == '' && $("#first_l").val() == '') {
        res1 ="undefined";
    } else {
      res = "loss";
    }

    if (
      $("#second_w").val() == 2 ||
      ($("#second_w").val() == 1 && $("#second_l").val() == 0)
    ) {
      res2 = "won";
    } else if ($("#second_w").val() == 1 && $("#second_l").val() == 1) {
      res2 = "draw";
    } else if ($("#second_w").val() == '' && $("#second_l").val() == '') {
        res2 ="undefined";
    } else {
      res2 = "loss";
    }

    if (
      $("#third_w").val() == 2 ||
      ($("#third_w").val() == 1 && $("#third_l").val() == 0)
    ) {
      res3 = "won";
    } else if ($("#third_w").val() == 1 && $("#third_l").val() == 1) {
      res3 = "draw";
    } else if ($("#third_w").val() == '' && $("#third_l").val() == '') {
        res3 ="undefined";
    } else {
      res3 = "loss";
    }

    if (
      $("#fourth_w").val() == 2 ||
      ($("#fourth_w").val() == 1 && $("#fourth_l").val() == 0)
    ) {
      res4 = "won";
    } else if ($("#fourth_w").val() == 1 && $("#fourth_l").val() == 1) {
      res4 = "draw";
    } else if ($("#fourth_w").val() == '' && $("#fourth_l").val() == '') {
        res4 ="undefined";
    } else {
      res4 = "loss";
    }

    if (
      $("#fifth_w").val() == 2 ||
      ($("#fifth_w").val() == 1 && $("#fifth_l").val() == 0)
    ) {
      res5 = "won";
    } else if ($("#fifth_w").val() == 1 && $("#fifth_l").val() == 1) {
      res5 = "draw";
    } else if ($("#fifth_w").val() == '' && $("#fifth_l").val() == '') {
        res5 ="undefined";
    } else {
      res5 = "loss";
    }

    results.push(res, res2, res3, res4, res5);
    console.log(results);

    var wontarget = "won";
    var drawtarget = "draw";
    var losstarget = "loss";

    var roundswon = $.grep(results, function (elem) {
      return elem === wontarget;
    }).length;

    var roundsdrawn = $.grep(results, function (elem) {
      return elem === drawtarget;
    }).length;

    var roundslost = $.grep(results, function (elem) {
      return elem === losstarget;
    }).length;

    $("#eventrecordinput").val(
      roundswon + " - " + roundsdrawn + " - " + roundslost
    );

    var gameswon = 0;
    $(".wonnumber").each(function () {
      gameswon = parseInt($(this).val() || 0) + gameswon;
    });

    var gamesplayed = 0;
    $(".boxnumber").each(function () {
      gamesplayed = parseInt($(this).val() || 0) + gamesplayed;
    });

    gamewinpercentage = ((gameswon / gamesplayed) * 100).toFixed(2) + "%";

    $("#eventgamewin").val(gamewinpercentage);
  });

  $("#playerhistory").on("click", function () {
      player_name = $("#playername").val()
        if( player_name.length === 0 ) {
            $('#myModal').modal('show');
        } else {
      window.location.href = "/player_history/"+player_name
  }});
});
