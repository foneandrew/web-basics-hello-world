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
   */
});

// Gets a random chuck norris joke from an API, then passes it to the callback function
function fetchRandomChuckNorrisJoke(callback) {
  // this api picks a random chuck norris joke and returns it as plain text
  // limited to the dev category
  // WARNING: I do not control the content of the jokes! Some might be a bit rude!
  var promise = $.get("https://api.chucknorris.io/jokes/random?category=dev");

  // $.get is asynchronous, so we need to define a
  // handler for when the request is complete
  promise.done(function(data) {
    // The data returned is a json object
    console.log(data);

    // if you want to do something with the word do it here
    callback(data.value);
  })
}
