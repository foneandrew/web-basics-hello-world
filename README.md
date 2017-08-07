# web-basics-hello-world
A super-basic (and ugly!) web page to show off the basics for SoT hackfest (html, css, js...).

Fork the repo to your account then clone it to your local machine.

## Running the page
I recommend using the simple python server to load up the webpage locally (You will need python installed https://www.python.org/ (If you have a mac or a linux machine you proably already have it!)).

In a terminal navigate to the folder where index.html is located. Then run `python -m SimpleHTTPServer 8000`. Now point your browser to http://localhost:8000 to see the page running.

## Things to fix on the page
Things to fix up on the page:
* Make the heading say something by editing the h1 tag in index.html (_maybe something like 'hello world' is appropriate?_)
* Make the purple text purple by filling in the definition for the 'purple' css class in index.css
* Make the button print some text into the results-area div by binding a javascript function to the click action on the button element (_hint: start with line 11 in index.js_)
* Do something interesting with the fetchRandomWord function (which uses the http://www.setgetgo.com/randomword/ API)

If you want to you can checkout the branch called `example` to see what I did to finish the page.
