/*
 * We are using jQuery functions as they are pretty easy to use.
 * You can do all of this stuff using vanilla javascript though
 */

// $(...) will run the function you give it when the page is loaded & ready
$(function() {
  // console.log will log a message or object to the browser developer console
  console.log("page loaded...");

  $("selector-goes-here").click(/* function for when the button is clicked goes here */);
  /*
   * TODO: You will need to use a css selector to get jQuery to find the button element in the page
   * Then you will need to make a new javascript function to do stuff for when the button
   * is clicked and pass it into the click function above...
   * The function should call one of the functions below, and pass the other in as the callback...
   */
});

function displayQuestionAndAnswer(question, answer) {
  $("#results-area").text("True or false?");
  $("#question-display").text(question);
  $("#answer-display").text("Answer: " + answer);
}

// Gets a random animal trivia question from an API, then pass the result to the callback function
function fetchRandomTriviaQuestion(callback) {
  // This API gets random trvia questions
  // The url includes parameters to configure the API to only return
  // true or false trivia on animals encoded in base64

  // Configure your own api call at https://opentdb.com/api_config.php
  var promise = $.get("https://opentdb.com/api.php?amount=1&category=27&type=boolean&encode=base64");

  // $.get is asynchronous, so we need to define a
  // handler for when the request is complete
  promise.done(function(data) {
    // Check the console when you have the API call working in order
    // to inspect the json object that we recieve
    console.log(data);

    // extract and decode the results
    var results = data.results;

    // atob() is a built in method to decode base64 encoded strings
    var question = atob(results[0].question);
    var answer = atob(results[0].correct_answer);

    // call the function we passed into fetchRandomTriviaQuestion
    callback(question, answer);
  })
}
