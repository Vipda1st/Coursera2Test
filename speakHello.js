(function (window) {
    // Create the helloSpeaker object
    var helloSpeaker = {};

    // Attach the "speak" method to the helloSpeaker object
    helloSpeaker.speak = function (name) {
        console.log("Hello " + name);
    };

    // Expose the helloSpeaker object to the global context
    window.helloSpeaker = helloSpeaker;

})(window);