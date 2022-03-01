$(document).ready(function() {
  window.dancers = [];

  $('.lineUp').on('click', function(event) {
    console.log('Clicked the line up button');
    console.log(window.dancers);
    window.dancers.forEach( dancer => dancer.lineUp() );
  });

  $('.addDancerButton').on('click', function(event) {
    /* This function sets up the click handlers for the create-dancer
     * buttons on dancefloor.html. You should only need to make one small change to it.
     * As long as the "data-dancer-maker-function-name" attribute of a
     * class="addDancerButton" DOM node matches one of the names of the
     * maker functions available in the global scope, clicking that node
     * will call the function to make the dancer.
     */

    /* dancerMakerFunctionName is a string which must match
     * one of the dancer maker functions available in global scope.
     * A new object of the given type will be created and added
     * to the stage.
     */
    var dancerMakerFunctionName = $(this).data('dancer-maker-function-name');

    // get the maker function for the kind of dancer we're supposed to make
    var dancerMakerFunction = window[dancerMakerFunctionName];

    // make a dancer with a random position

    var dancer = new dancerMakerFunction(
      window.dancers.length // argument 1: top
        ? window.dancers[window.dancers.length - 1]._position.top
        : $('body').height() * Math.random(),
      window.dancers.length // argument 2: left
        ? window.dancers[window.dancers.length - 1]._position.left
        : $('body').width() * Math.random(),
      Math.random() * 1000 // argument 3: time between steps
    );
    $('body').append(dancer.$node);
    // Add mouseover handler for each dancer that teleports them
    dancer.$node.on('mouseover', function() {
      dancer.setPosition(
        $('body').height() * Math.random(),
        $('body').width() * Math.random()
      );
    });
    window.dancers.push(dancer);
  });
});
