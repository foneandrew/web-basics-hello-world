/*
 * We are using jQuery functions as they are pretty easy to use.
 * You can do all of this stuff using vanilla javascript though
 */

// $(...) will run the function you give it when the page is loaded & ready
$(function() {
  // console.log will log a message or object to the browser developer console
  console.log("page loaded...");

  $("selector-goes-here").click(/* function for when the button is clicked goes here */);
});

// Gets a random word from an API, then passes it to the callback function
function fetchRandomWord(callback) {
  // this api picks a random word and returns it as plain text
  var promise = $.get("http://setgetgo.com/randomword/get.php");

  // $.get is asyncronous, so we need to define a
  // handler for when the request is complete
  promise.done(function(data) {
    console.log(data);

    // if you want to do something with the word do it here
    callback(data);
  })
}
